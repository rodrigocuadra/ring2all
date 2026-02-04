# 🖥️ Admin Server Setup

> Web Dashboard, API Backend, and Management Interface

---

## 📋 Overview

The Admin Server hosts:
- **Admin Dashboard** - System administration interface
- **REST API** - Backend business logic
- **Monitoring API** - WebSocket real-time data

---

## 🛠️ Step 1: Prerequisites

### 1.1 Copy Database Credentials

First, copy credentials from the database cluster:

```bash
# Create config directory
mkdir -p /etc/softswitch

# Copy from database primary node
scp root@192.168.10.31:/etc/softswitch/db-credentials /etc/softswitch/

# Verify
cat /etc/softswitch/db-credentials
```

### 1.2 Configure Name Resolution

Add to `/etc/hosts`:

```text
# Database Cluster
192.168.10.31 pg-node-01
192.168.10.32 pg-node-02
192.168.10.33 pg-node-03

# File Server Cluster
192.168.10.34 fs-node-01
192.168.10.35 fs-node-02
192.168.10.36 fs-node-03
```

---

## 📦 Step 2: Install Software

### 2.1 Add Repositories

```bash
apt install -y gpg wget curl

# Node.js 24
curl -fsSL https://deb.nodesource.com/setup_24.x | bash -

# Ring2All
curl -fsSL https://repo.ring2all.com/gpg.key | gpg --dearmor -o /etc/apt/keyrings/ring2all.gpg
echo "deb [signed-by=/etc/apt/keyrings/ring2all.gpg] https://repo.ring2all.com/apt stable main" > /etc/apt/sources.list.d/ring2all.list

apt update
```

### 2.2 Install Admin Package

```bash
apt install -y softswitch-admin
```

---

## ⚖️ Step 3: Install HAProxy Sidecar

HAProxy routes database traffic to the correct cluster node:

```bash
apt install -y haproxy
```

Configure `/etc/haproxy/haproxy.cfg`:

```haproxy
global
    log /dev/log local0
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin
    stats timeout 30s
    user haproxy
    group haproxy
    daemon

defaults
    log global
    mode tcp
    option tcplog
    timeout connect 5000
    timeout client  50000
    timeout server  50000

# Statistics (Port 7000)
listen stats
    bind *:7000
    mode http
    stats enable
    stats uri /
    stats refresh 5s
    stats auth admin:CHANGE_THIS_PASSWORD

# Write Pool (Port 5000) - Leader Only
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

# Read Pool (Port 5001) - Replicas
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

Start HAProxy:

```bash
systemctl restart haproxy
systemctl enable haproxy
ss -tlnp | grep -E "5000|5001"
```

---

## ⚙️ Step 4: Configure Environment

Get the database password:

```bash
cat /etc/softswitch/db-credentials
# Copy the password value
```

Create `/var/www/softswitch/.env`:

```ini
# Database Connections (via HAProxy)
DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5000/ss_admin?schema=public"
TELEPHONY_DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5000/ss_telephony?schema=public"
LOGS_DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5000/ss_logs?schema=public"
CDR_DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5000/ss_cdr?schema=public"

# Read Replicas (via HAProxy)
READ_DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5001/ss_admin?schema=public"
TELEPHONY_READ_DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5001/ss_telephony?schema=public"

# Server
NODE_ENV=production
PORT=3000
```

---

## 📂 Step 5: Mount File Server (For Recordings)

```bash
# Install GlusterFS client
apt install -y glusterfs-client

# Create mount point
mkdir -p /var/lib/freeswitch/recordings

# Add to /etc/fstab
echo "fs-node-01:/gv_recordings /var/lib/freeswitch/recordings glusterfs defaults,_netdev,backup-volfile-servers=fs-node-02:fs-node-03,ro 0 0" >> /etc/fstab

# Mount
mount -a
```

> 💡 The `ro` (read-only) flag is used because Admin Server only needs to read recordings.

---

## 🌐 Step 6: Configure Nginx

Create `/etc/nginx/sites-available/softswitch`:

```nginx
server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name _;

    ssl_certificate /etc/ssl/certs/softswitch.crt;
    ssl_certificate_key /etc/ssl/private/softswitch.key;

    root /var/www/softswitch;
    index index.html;

    # API Backend
    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }

    # WebSocket
    location /ws {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 86400;
    }

    # Admin Dashboard
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Portal (if combined)
    location /portal/ {
        alias /var/www/softswitch/portal/;
        try_files $uri $uri/ /portal/index.html;
    }

    # Switchboard (if combined)
    location /switchboard/ {
        alias /var/www/softswitch/switchboard/;
        try_files $uri $uri/ /switchboard/index.html;
    }
}
```

Enable:

```bash
ln -s /etc/nginx/sites-available/softswitch /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx
```

---

## 🚀 Step 7: Start Services

```bash
systemctl enable --now softswitch-api
systemctl enable --now softswitch-monitoring-api
systemctl status softswitch-api
```

---

## ✅ Verification

### Test Database Connection

```bash
psql -h 127.0.0.1 -p 5000 -U ss_db_user -d ss_admin -c "SELECT 1"
```

### Test API

```bash
curl http://127.0.0.1:3000/api/health
```

### Access Dashboard

Open `https://your-admin-server/admin` in browser.

---

*Next: [4. Portal Server Setup](portal-server.md)*
