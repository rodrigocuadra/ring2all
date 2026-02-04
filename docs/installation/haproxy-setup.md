# ⚖️ HAProxy Load Balancer Setup

> Database routing and application load balancing

---

## 📋 Overview

HAProxy serves two critical functions in Ring2All:

1. **Database Proxy (Sidecar):** Routes PostgreSQL traffic to the correct cluster node
2. **Web Load Balancer (Optional):** Distributes HTTP traffic across multiple application servers

---

## 🔌 Part 1: Database Proxy (Sidecar Pattern)

This is installed on **each application/telephony server** that needs database access.

### Purpose

- Route **writes** to the PostgreSQL Leader (Port 5000)
- Route **reads** to PostgreSQL Replicas (Port 5001)
- Automatic failover when leader changes

### Installation

```bash
apt install -y haproxy
systemctl enable haproxy
```

### Configuration

Edit `/etc/haproxy/haproxy.cfg`:

```haproxy
global
    log /dev/log    local0
    log /dev/log    local1 notice
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin expose-fd listeners
    stats timeout 30s
    user haproxy
    group haproxy
    daemon

defaults
    log     global
    mode    tcp
    option  tcplog
    option  dontlognull
    timeout connect 5000
    timeout client  50000
    timeout server  50000

# --- STATISTICS (Port 7000) ---
listen stats
    bind *:7000
    mode http
    stats enable
    stats uri /
    stats refresh 5s
    stats auth admin:CHANGE_THIS_PASSWORD

# --- WRITE POOL (Port 5000) ---
# Only routes to the current Leader
frontend postgres_write
    bind *:5000
    default_backend backend_postgres_write

backend backend_postgres_write
    option httpchk GET /master
    http-check expect status 200
    default-server inter 3s fall 3 rise 2 on-marked-down shutdown-sessions
    
    server pg-node-01 192.168.10.31:5432 maxconn 100 check port 8008
    server pg-node-02 192.168.10.32:5432 maxconn 100 check port 8008
    server pg-node-03 192.168.10.33:5432 maxconn 100 check port 8008

# --- READ POOL (Port 5001) ---
# Balances across all healthy Replicas
frontend postgres_read
    bind *:5001
    default_backend backend_postgres_read

backend backend_postgres_read
    balance roundrobin
    option httpchk GET /replica
    http-check expect status 200
    default-server inter 3s fall 3 rise 2 on-marked-down shutdown-sessions

    server pg-node-01 192.168.10.31:5432 maxconn 100 check port 8008
    server pg-node-02 192.168.10.32:5432 maxconn 100 check port 8008
    server pg-node-03 192.168.10.33:5432 maxconn 100 check port 8008
```

### Apply Configuration

```bash
haproxy -c -f /etc/haproxy/haproxy.cfg  # Validate
systemctl restart haproxy
```

### Verification

```bash
# Check ports
ss -tlnp | grep -E '5000|5001|7000'

# Test write connection
psql -h 127.0.0.1 -p 5000 -U ss_db_user -d postgres -c "SELECT inet_server_addr(), pg_is_in_recovery();"
# Should show Leader IP and 'f' (false)

# Test read connection
psql -h 127.0.0.1 -p 5001 -U ss_db_user -d postgres -c "SELECT inet_server_addr(), pg_is_in_recovery();"
# Should show Replica IP and 't' (true)
```

### View Statistics

Open `http://your-server:7000` in a browser (use the credentials configured in `stats auth`).

---

## 🌐 Part 2: Web Application Load Balancer (Optional)

For high-availability web interfaces, deploy a dedicated HAProxy to balance traffic across multiple Admin/Portal/Switchboard servers.

### Architecture

```
                    ┌─────────────────────────────┐
                    │      HAProxy (Frontend)     │
                    │    Public IP: pbx.example   │
                    │     TLS Termination         │
                    └──────────────┬──────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           ▼                       ▼                       ▼
   ┌───────────────┐       ┌───────────────┐       ┌───────────────┐
   │  Admin-01     │       │  Admin-02     │       │  Admin-N      │
   │  Portal-01    │       │  Portal-02    │       │  Portal-N     │
   │  Switch-01    │       │  Switch-02    │       │  Switch-N     │
   └───────────────┘       └───────────────┘       └───────────────┘
```

### Configuration

```haproxy
# --- WEB FRONTEND ---
frontend http_front
    bind *:80
    bind *:443 ssl crt /etc/ssl/certs/combined.pem
    http-request redirect scheme https unless { ssl_fc }
    
    # Route based on path
    acl is_admin path_beg /admin
    acl is_portal path_beg /portal
    acl is_switchboard path_beg /switchboard
    acl is_api path_beg /api
    acl is_ws path_beg /ws
    
    use_backend backend_admin if is_admin
    use_backend backend_portal if is_portal
    use_backend backend_switchboard if is_switchboard
    use_backend backend_api if is_api
    use_backend backend_ws if is_ws
    
    default_backend backend_admin

# --- ADMIN BACKEND ---
backend backend_admin
    balance roundrobin
    option httpchk GET /admin/index.html
    http-check expect status 200
    
    server admin-01 192.168.10.10:80 check
    server admin-02 192.168.10.11:80 check backup

# --- PORTAL BACKEND ---
backend backend_portal
    balance roundrobin
    option httpchk GET /portal/index.html
    
    server portal-01 192.168.10.20:80 check
    server portal-02 192.168.10.21:80 check backup

# --- SWITCHBOARD BACKEND ---
backend backend_switchboard
    balance roundrobin
    
    server switch-01 192.168.10.30:80 check
    server switch-02 192.168.10.31:80 check backup

# --- API BACKEND ---
backend backend_api
    balance roundrobin
    option httpchk GET /api/health
    
    server api-01 192.168.10.40:3000 check
    server api-02 192.168.10.41:3000 check

# --- WEBSOCKET BACKEND ---
backend backend_ws
    balance source
    option http-server-close
    timeout tunnel 1h
    
    server ws-01 192.168.10.40:3001 check
    server ws-02 192.168.10.41:3001 check
```

---

## 🔒 SSL/TLS Configuration

### Combine Certificate and Key

HAProxy requires cert and key in a single file:

```bash
cat /etc/ssl/certs/pbx.example.com.crt /etc/ssl/private/pbx.example.com.key > /etc/ssl/certs/combined.pem
chmod 600 /etc/ssl/certs/combined.pem
```

### Let's Encrypt with Certbot

```bash
apt install certbot
certbot certonly --standalone -d pbx.example.com
cat /etc/letsencrypt/live/pbx.example.com/fullchain.pem /etc/letsencrypt/live/pbx.example.com/privkey.pem > /etc/ssl/certs/combined.pem

# Auto-renewal hook
echo '#!/bin/bash
cat /etc/letsencrypt/live/pbx.example.com/fullchain.pem /etc/letsencrypt/live/pbx.example.com/privkey.pem > /etc/ssl/certs/combined.pem
systemctl reload haproxy' > /etc/letsencrypt/renewal-hooks/post/haproxy.sh
chmod +x /etc/letsencrypt/renewal-hooks/post/haproxy.sh
```

---

## ❓ Troubleshooting

### "No server available" for Database

```bash
# Check Patroni API health
curl http://192.168.10.31:8008/master
curl http://192.168.10.31:8008/replica

# Check HAProxy logs
journalctl -u haproxy -f
```

### Connection Timeouts

Increase timeouts:

```haproxy
defaults
    timeout connect 10000
    timeout client  60000
    timeout server  60000
```

### Statistics Show All Servers Down

Verify network connectivity:

```bash
# From HAProxy server
nc -zv 192.168.10.31 5432
nc -zv 192.168.10.31 8008
```

---

## ✅ Summary

| Function | Port | Target |
|----------|------|--------|
| PostgreSQL Write | 5000 | Leader only |
| PostgreSQL Read | 5001 | Replicas (round-robin) |
| HAProxy Stats | 7000 | Browser UI |
| HTTPS (Web LB) | 443 | App servers |

---

*Installation Complete! Return to [Installation Overview](README.md)*
