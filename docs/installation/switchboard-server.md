# ☎️ Switchboard Server Setup

> Operator Console for call management and real-time monitoring

---

## 📋 Overview

The Switchboard Server provides operators with:
- Real-time call monitoring
- Click-to-dial functionality
- Call transfer and hold controls
- Extension status monitoring
- Queue management

---

## 📦 Installation

### Step 1: Add Repositories

```bash
apt install -y gpg wget curl

# Node.js 24
curl -fsSL https://deb.nodesource.com/setup_24.x | bash -

# Ring2All
curl -fsSL https://repo.ring2all.com/gpg.key | gpg --dearmor -o /etc/apt/keyrings/ring2all.gpg
echo "deb [signed-by=/etc/apt/keyrings/ring2all.gpg] https://repo.ring2all.com/apt stable main" > /etc/apt/sources.list.d/ring2all.list

apt update
```

### Step 2: Install Switchboard Package

```bash
apt install -y softswitch-switchboard
```

### Step 3: Copy Database Credentials

```bash
mkdir -p /etc/softswitch
scp root@192.168.10.31:/etc/softswitch/db-credentials /etc/softswitch/
```

### Step 4: Install HAProxy Sidecar

Follow the same HAProxy configuration as the [Admin Server](admin-server.md#step-3-install-haproxy-sidecar).

### Step 5: Configure Environment

Create `/var/www/softswitch-switchboard/.env`:

```ini
DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5000/ss_admin?schema=public"
READ_DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5001/ss_admin?schema=public"

NODE_ENV=production
PORT=3003
WS_PORT=3004
```

### Step 6: Configure Nginx

```nginx
server {
    listen 443 ssl http2;
    server_name switchboard.example.com;

    ssl_certificate /etc/ssl/certs/switchboard.crt;
    ssl_certificate_key /etc/ssl/private/switchboard.key;

    root /var/www/softswitch-switchboard;
    index index.html;

    location /api/ {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }

    location /ws {
        proxy_pass http://127.0.0.1:3004;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 86400;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Step 7: Start Services

```bash
systemctl enable --now softswitch-switchboard
nginx -t && systemctl restart nginx
```

---

## 🔗 Integration with Admin Server

If running Switchboard on the same server as Admin, configure the Nginx location block as shown in the [Admin Server guide](admin-server.md#step-6-configure-nginx).

---

## 📊 WebSocket Connection

Switchboard requires WebSocket connectivity for real-time updates. Ensure:
- Port 3004 (or configured WS_PORT) is accessible
- Nginx is configured to proxy WebSocket connections
- Firewall allows WebSocket traffic

---

*Next: [6. Telephony Server Setup](telephony-server.md)*
