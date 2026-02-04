# 📞 Telephony Server Setup (FreeSWITCH N+1)

> Horizontally scalable call processing with FreeSWITCH

---

## 📋 Overview

Telephony servers handle all voice traffic:
- SIP registration and authentication
- Call routing and switching
- Media processing (RTP)
- IVR, queues, and applications
- Recording and transcoding

---

## 🔄 Horizontal Scaling Architecture

```
                              ┌─────────────────────────────────────────────────────────────┐
                              │                    SIP LOAD BALANCER                        │
                              │              (OpenSIPs, Kamailio, or DNS SRV)               │
                              └─────────────────────────┬───────────────────────────────────┘
                                                        │
           ┌────────────────────────────────────────────┼────────────────────────────────────────────┐
           │                                            │                                            │
           ▼                                            ▼                                            ▼
┌─────────────────────────┐              ┌─────────────────────────┐              ┌─────────────────────────┐
│   📞 TELEPHONY-01       │              │   📞 TELEPHONY-02       │              │   📞 TELEPHONY-N        │
│   ─────────────────     │              │   ─────────────────     │              │   ─────────────────     │
│                         │              │                         │              │                         │
│   ┌─────────────────┐   │              │   ┌─────────────────┐   │              │   ┌─────────────────┐   │
│   │   FreeSWITCH    │   │              │   │   FreeSWITCH    │   │              │   │   FreeSWITCH    │   │
│   │   ───────────   │   │              │   │   ───────────   │   │              │   │   ───────────   │   │
│   │   SIP: 5060     │   │              │   │   SIP: 5060     │   │              │   │   SIP: 5060     │   │
│   │   RTP: 16384+   │   │              │   │   RTP: 16384+   │   │              │   │   RTP: 16384+   │   │
│   └────────┬────────┘   │              │   └────────┬────────┘   │              │   └────────┬────────┘   │
│            │            │              │            │            │              │            │            │
│   ┌────────┴────────┐   │              │   ┌────────┴────────┐   │              │   ┌────────┴────────┐   │
│   │  HAProxy Local  │   │              │   │  HAProxy Local  │   │              │   │  HAProxy Local  │   │
│   │  Port 5000/5001 │   │              │   │  Port 5000/5001 │   │              │   │  Port 5000/5001 │   │
│   └────────┬────────┘   │              │   └────────┬────────┘   │              │   └────────┬────────┘   │
│            │            │              │            │            │              │            │            │
│   ┌────────┴────────┐   │              │   ┌────────┴────────┐   │              │   ┌────────┴────────┐   │
│   │ GlusterFS Mount │   │              │   │ GlusterFS Mount │   │              │   │ GlusterFS Mount │   │
│   │ /recordings/    │   │              │   │ /recordings/    │   │              │   │ /recordings/    │   │
│   └─────────────────┘   │              │   └─────────────────┘   │              │   └─────────────────┘   │
│                         │              │                         │              │                         │
│  ┌───────────────────┐  │              │  ┌───────────────────┐  │              │  ┌───────────────────┐  │
│  │ Capacity:         │  │              │  │ Capacity:         │  │              │  │ Capacity:         │  │
│  │ • 10,000 ext      │  │              │  │ • 10,000 ext      │  │              │  │ • 10,000 ext      │  │
│  │ • 1,500 calls     │  │              │  │ • 1,500 calls     │  │              │  │ • 1,500 calls     │  │
│  └───────────────────┘  │              │  └───────────────────┘  │              │  └───────────────────┘  │
│                         │              │                         │              │                         │
└─────────────────────────┘              └─────────────────────────┘              └─────────────────────────┘
           │                                            │                                            │
           └────────────────────────────────────────────┼────────────────────────────────────────────┘
                                                        │
                                                        ▼
                              ┌─────────────────────────────────────────────────────────────┐
                              │                POSTGRESQL CLUSTER (via HAProxy)             │
                              │              ┌──────────┐ ┌──────────┐ ┌──────────┐        │
                              │              │ Primary  │ │ Replica  │ │ Replica  │        │
                              │              └──────────┘ └──────────┘ └──────────┘        │
                              └─────────────────────────────────────────────────────────────┘
                                                        │
                                                        ▼
                              ┌─────────────────────────────────────────────────────────────┐
                              │                  GLUSTERFS / NAS STORAGE                    │
                              │                   /var/lib/freeswitch/recordings            │
                              └─────────────────────────────────────────────────────────────┘
```

---

## 📊 Capacity Planning

| Servers | Extensions | Concurrent Calls | Recordings/Day | RAM Required |
|---------|------------|------------------|----------------|--------------|
| 1 | 10,000 | 1,500 | ~50,000 | 16-32 GB |
| 2 | 20,000 | 3,000 | ~100,000 | 32-64 GB |
| 5 | 50,000 | 7,500 | ~250,000 | 80-160 GB |
| 10 | 100,000 | 15,000 | ~500,000 | 160-320 GB |
| 20+ | 200,000+ | 30,000+ | ~1M+ | 320+ GB |

> 💡 **Scaling Rule:** Add one server for every ~10,000 extensions or ~1,500 concurrent calls needed.

---

## 🛠️ Step 1: Environment Preparation

### 1.1 Configure Hostname

```bash
hostnamectl set-hostname tele-node-01  # Increment for each server
```

### 1.2 Name Resolution

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

### 1.3 Copy Credentials

```bash
mkdir -p /etc/softswitch
scp root@192.168.10.31:/etc/softswitch/db-credentials /etc/softswitch/
```

---

## 📦 Step 2: Install Telephony Package

```bash
# Add Ring2All repository
curl -fsSL https://repo.ring2all.com/gpg.key | gpg --dearmor -o /etc/apt/keyrings/ring2all.gpg
echo "deb [signed-by=/etc/apt/keyrings/ring2all.gpg] https://repo.ring2all.com/apt stable main" > /etc/apt/sources.list.d/ring2all.list

apt update

# Install telephony package
apt install -y softswitch-telephony

# Install audio packages (recommended)
apt install -y softswitch-music
apt install -y softswitch-voiceguide-emma    # English
apt install -y softswitch-voiceguide-paloma  # Spanish
```

---

## ⚖️ Step 3: Install HAProxy Sidecar

Each telephony server needs its own HAProxy to connect to the database cluster:

```bash
apt install -y haproxy
```

Configure `/etc/haproxy/haproxy.cfg`:

```haproxy
global
    log /dev/log local0
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin
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

# Write Pool (Port 5000)
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

# Read Pool (Port 5001)  
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

Start:

```bash
systemctl restart haproxy
systemctl enable haproxy
```

---

## 📂 Step 4: Mount File Server

```bash
# Install GlusterFS client
apt install -y glusterfs-client

# Create mount point (if not created by package)
mkdir -p /var/lib/freeswitch/recordings

# Add to /etc/fstab (read-write for recordings)
echo "fs-node-01:/gv_recordings /var/lib/freeswitch/recordings glusterfs defaults,_netdev,backup-volfile-servers=fs-node-02:fs-node-03 0 0" >> /etc/fstab

# Mount
mount -a
```

---

## 🔌 Step 5: Configure ODBC

The `softswitch-telephony` package creates ODBC config automatically. Verify `/etc/odbc.ini`:

```ini
[ss_telephony]
Description = Ring2All Telephony Database
Driver = PostgreSQL Unicode
Servername = 127.0.0.1
Port = 5000
Database = ss_telephony
Username = ss_db_user
Password = YOUR_PASSWORD
ReadOnly = No
```

Test ODBC:

```bash
isql -v ss_telephony ss_db_user YOUR_PASSWORD
```

---

## 🚀 Step 6: Start FreeSWITCH

```bash
systemctl enable --now freeswitch
systemctl status freeswitch
```

Verify:

```bash
fs_cli
sofia status
# Should show internal and external profiles
/exit
```

---

## 🔥 Step 7: Firewall Configuration

```bash
# SIP and RTP ports
ufw allow 5060/udp     # SIP UDP
ufw allow 5060/tcp     # SIP TCP
ufw allow 5061/tcp     # SIP TLS
ufw allow 16384:32768/udp  # RTP Media

# Optional: Allow from specific networks only
# ufw allow from 192.168.0.0/16 to any port 5060

ufw enable
```

---

## ➕ Adding More Telephony Servers

To add capacity, simply repeat this entire process on a new server:

1. Set unique hostname (`tele-node-02`, `tele-node-03`, etc.)
2. Install packages
3. Configure HAProxy sidecar
4. Mount file server
5. Configure ODBC
6. Start FreeSWITCH

**No configuration changes needed on existing servers!**

---

## 📈 SIP Load Balancing Options

To distribute SIP traffic across multiple telephony servers:

### Option 1: DNS SRV Records

```dns
_sip._udp.pbx.example.com. 86400 IN SRV 10 50 5060 tele-node-01.example.com.
_sip._udp.pbx.example.com. 86400 IN SRV 10 50 5060 tele-node-02.example.com.
```

### Option 2: SIP Proxy (OpenSIPs/Kamailio)

For advanced routing, use a dedicated SIP proxy server.

### Option 3: Per-Domain Assignment

Assign specific telephony servers to specific domains in the Ring2All Admin panel.

---

## ❓ Troubleshooting

### FreeSWITCH Not Starting

```bash
journalctl -u freeswitch -f
fs_cli -x "console loglevel debug"
```

### ODBC Connection Failed

```bash
# Test connection
isql -v ss_telephony ss_db_user PASSWORD

# Check HAProxy
ss -tlnp | grep 5000
curl http://192.168.10.31:8008/master  # Should return 200
```

### No Audio (RTP Issues)

```bash
# Check firewall
ufw status

# Check RTP ports
ss -ulnp | grep freeswitch
```

---

## ✅ Verification Checklist

- [ ] FreeSWITCH service running
- [ ] ODBC connection to database working
- [ ] HAProxy routing to database cluster
- [ ] GlusterFS mounted for recordings
- [ ] SIP profiles loaded (`sofia status`)
- [ ] Test call successful

---

*Next: [7. HAProxy Load Balancer Setup](haproxy-setup.md)*
