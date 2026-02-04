# 📂 File Server Cluster Setup

> Distributed storage with GlusterFS for recordings and audio files

---

## 📋 Overview

A distributed file system ensures:
- **Redundancy:** Files stored on 3 nodes (Replica 3)
- **Scalability:** Add storage by adding nodes
- **Active-Active:** All nodes serve traffic simultaneously
- **Self-Healing:** Automatic sync after node recovery

---

## 🏛️ Architecture

| Role | Hostname | IP | Function |
|------|----------|----|---------| 
| **File Server 1** | fs-node-01 | 192.168.10.34 | GlusterFS Brick 1 |
| **File Server 2** | fs-node-02 | 192.168.10.35 | GlusterFS Brick 2 |
| **File Server 3** | fs-node-03 | 192.168.10.36 | GlusterFS Brick 3 |

> 💡 **Alternative:** If you have a NAS with NFS support, you can use that instead of GlusterFS. See [NAS Alternative](#nas-alternative) section.

---

## 🛠️ Step 1: Environment Preparation (All 3 Nodes)

### 1.1 Configure Hostnames

```bash
# Node 1
hostnamectl set-hostname fs-node-01
# Node 2
hostnamectl set-hostname fs-node-02
# Node 3
hostnamectl set-hostname fs-node-03
```

### 1.2 Name Resolution (/etc/hosts)

Add to `/etc/hosts` on **ALL nodes**:

```text
192.168.10.34 fs-node-01
192.168.10.35 fs-node-02
192.168.10.36 fs-node-03
```

### 1.3 Install GlusterFS Server

```bash
apt update && apt upgrade -y
apt install -y glusterfs-server
systemctl enable --now glusterd
systemctl status glusterd
```

### 1.4 Firewall Configuration

```bash
cat <<EOF > /etc/nftables.conf
#!/usr/sbin/nft -f

flush ruleset

table inet filter {
    chain input {
        type filter hook input priority 0; policy drop;
        iif "lo" accept
        ct state established,related accept
        tcp dport 22 accept
        ip protocol icmp accept
        
        # GlusterFS Cluster
        ip saddr { 192.168.10.34, 192.168.10.35, 192.168.10.36 } accept
        
        # Client access (App/Telephony servers)
        # ip saddr { 192.168.10.0/24 } tcp dport { 24007, 24008, 49152-49251 } accept
    }
    chain forward { type filter hook forward priority 0; policy drop; }
    chain output { type filter hook output priority 0; policy accept; }
}
EOF

systemctl enable --now nftables
```

---

## 🤝 Step 2: Create Trusted Storage Pool

**Run FROM fs-node-01 ONLY:**

```bash
gluster peer probe fs-node-02
gluster peer probe fs-node-03
```

Verify (should show 2 connected peers):

```bash
gluster peer status
```

---

## 🧱 Step 3: Create Distributed Volume

### 3.1 Prepare Bricks (All 3 Nodes)

```bash
mkdir -p /gluster/brick1/gv_recordings
```

> 💡 **Production Tip:** Use a dedicated disk (e.g., `/dev/sdb`) formatted with XFS for better performance.

### 3.2 Create the Volume (fs-node-01 only)

```bash
gluster volume create gv_recordings replica 3 \
  fs-node-01:/gluster/brick1/gv_recordings \
  fs-node-02:/gluster/brick1/gv_recordings \
  fs-node-03:/gluster/brick1/gv_recordings \
  force
```

### 3.3 Start the Volume

```bash
gluster volume start gv_recordings
```

Verify:

```bash
gluster volume info
# Status should be: Started
```

---

## 🔗 Step 4: Client Configuration

On Application and Telephony servers that need to access recordings:

### 4.1 Install GlusterFS Client

```bash
apt install -y glusterfs-client
```

### 4.2 Create Mount Point

```bash
mkdir -p /var/lib/freeswitch/recordings
```

### 4.3 Configure /etc/fstab

```bash
nano /etc/fstab
```

Add:

```text
fs-node-01:/gv_recordings /var/lib/freeswitch/recordings glusterfs defaults,_netdev,backup-volfile-servers=fs-node-02:fs-node-03 0 0
```

### 4.4 Mount

```bash
mount -a
df -h | grep recordings
```

---

## 🔄 High Availability Features

### Automatic Client Failover

The `backup-volfile-servers` option enables:
1. If `fs-node-01` fails, client automatically switches to `fs-node-02` or `fs-node-03`
2. Applications experience **no interruption** (only millisecond I/O pause)
3. When `fs-node-01` recovers, files are automatically synced

### Self-Healing

```bash
# Check sync status
gluster volume heal gv_recordings info
# 0 entries = fully synced
```

---

## 📊 NAS Alternative

If you prefer using an existing NAS instead of GlusterFS:

### NFS Mount Configuration

```bash
# Install NFS client
apt install -y nfs-common

# Create mount point
mkdir -p /var/lib/freeswitch/recordings

# Add to /etc/fstab
echo "nas.example.com:/recordings /var/lib/freeswitch/recordings nfs defaults,_netdev 0 0" >> /etc/fstab

# Mount
mount -a
```

> ⚠️ **Note:** Single NAS = Single Point of Failure. Consider NAS with built-in HA for production.

---

## ❓ Troubleshooting

### "Peer Rejected"

```bash
# Verify firewall and hostname resolution
ping fs-node-02
nft list ruleset | grep 24007
```

### "Volume create failed"

```bash
# Clean the brick directory
rm -rf /gluster/brick1/gv_recordings/*
setfattr -x trusted.glusterfs.volume-id /gluster/brick1/gv_recordings
setfattr -x trusted.gfid /gluster/brick1/gv_recordings
```

### Check Volume Health

```bash
gluster volume status gv_recordings
gluster volume heal gv_recordings info
```

---

*Next: [3. Admin Server Setup](admin-server.md)*
