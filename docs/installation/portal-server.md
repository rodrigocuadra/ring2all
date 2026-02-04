# 👤 Portal Server Setup

> User Self-Service Portal for end-users

---

## 📋 Overview

The Portal Server provides a self-service interface where users can:
- Manage voicemail settings and messages
- View call history
- Configure call forwarding
- Access recordings
- Update personal settings

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

### Step 2: Install Portal Package

```bash
apt install -y softswitch-portal
```

### Step 3: Copy Database Credentials

```bash
mkdir -p /etc/softswitch
scp root@192.168.10.31:/etc/softswitch/db-credentials /etc/softswitch/
```

### Step 4: Install HAProxy Sidecar

Follow the same HAProxy configuration as the [Admin Server](admin-server.md#step-3-install-haproxy-sidecar).

### Step 5: Configure Environment

Create `/var/www/softswitch-portal/.env`:

```ini
DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5000/ss_admin?schema=public"
READ_DATABASE_URL="postgresql://ss_db_user:YOUR_PASSWORD@127.0.0.1:5001/ss_admin?schema=public"

NODE_ENV=production
PORT=3002
```

### Step 6: Configure Nginx

```nginx
server {
    listen 443 ssl http2;
    server_name portal.example.com;

    ssl_certificate /etc/ssl/certs/portal.crt;
    ssl_certificate_key /etc/ssl/private/portal.key;

    root /var/www/softswitch-portal;
    index index.html;

    location /api/ {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Step 7: Mount File Server (Read-Only)

```bash
apt install -y glusterfs-client
mkdir -p /var/lib/freeswitch/recordings
echo "fs-node-01:/gv_recordings /var/lib/freeswitch/recordings glusterfs defaults,_netdev,backup-volfile-servers=fs-node-02:fs-node-03,ro 0 0" >> /etc/fstab
mount -a
```

### Step 8: Start Services

```bash
systemctl enable --now softswitch-portal
nginx -t && systemctl restart nginx
```

---

## 🔗 Integration with Admin Server

If running Portal on the same server as Admin, simply configure the Nginx location block as shown in the [Admin Server guide](admin-server.md#step-6-configure-nginx).

---

*Next: [5. Switchboard Server Setup](switchboard-server.md)*
