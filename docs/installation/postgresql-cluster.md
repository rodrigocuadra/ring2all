# 🐘 PostgreSQL HA Cluster Setup

> High availability PostgreSQL 17 cluster with Patroni and Etcd on Debian 13

---

## 📋 Overview

This guide establishes the most critical foundation of the Ring2All infrastructure: a **self-healing database cluster** with:

- **Real-time replication** (RPO ≈ 0)
- **Automatic failover** (RTO < 30 seconds)
- **No manual intervention** required for recovery

---

## 🏛️ Architecture

| Role | Hostname | IP | Function |
|------|----------|----|---------| 
| **Node 1** | pg-node-01 | 192.168.10.31 | Initial Leader / Etcd 1 |
| **Node 2** | pg-node-02 | 192.168.10.32 | Replica / Etcd 2 |
| **Node 3** | pg-node-03 | 192.168.10.33 | Replica / Etcd 3 |

**Components:**
- **PostgreSQL 17** - Database engine
- **Patroni** - Cluster management and automatic failover
- **Etcd** - Distributed consensus store

---

## 🛠️ Step 1: Environment Preparation (All 3 Nodes)

### 1.1 Configure Hostnames

Run on each node accordingly:

```bash
# Node 1
hostnamectl set-hostname pg-node-01

# Node 2
hostnamectl set-hostname pg-node-02

# Node 3
hostnamectl set-hostname pg-node-03
```

### 1.2 Name Resolution (/etc/hosts)

Add to `/etc/hosts` on **ALL nodes**:

```text
192.168.10.31 pg-node-01
192.168.10.32 pg-node-02
192.168.10.33 pg-node-03
```

### 1.3 Install Prerequisites

```bash
apt update && apt upgrade -y
apt install -y etcd-server etcd-client
apt install -y curl gnupg2 sudo lsb-release vim git \
    python3-pip python3-venv python3-dev python3-etcd \
    patroni libpq-dev
```

### 1.4 Firewall Configuration (nftables)

**On ALL 3 nodes:**

```bash
cat <<EOF > /etc/nftables.conf
#!/usr/sbin/nft -f

flush ruleset

table inet filter {
    chain input {
        type filter hook input priority 0; policy drop;

        # Accept localhost
        iif "lo" accept

        # Accept established connections
        ct state established,related accept

        # Accept SSH
        tcp dport 22 accept

        # Accept ICMP
        ip protocol icmp accept

        # --- RING2ALL CLUSTER ---
        # PostgreSQL (5432), Patroni (8008), Etcd (2379, 2380)
        ip saddr { 192.168.10.31, 192.168.10.32, 192.168.10.33 } tcp dport { 5432, 8008, 2379, 2380 } accept
    }
    chain forward { type filter hook forward priority 0; policy drop; }
    chain output { type filter hook output priority 0; policy accept; }
}
EOF

systemctl enable --now nftables
nft list ruleset
```

---

## 🐘 Step 2: PostgreSQL Installation (All Nodes)

Debian 13 includes PostgreSQL 17:

```bash
apt update
apt install -y postgresql postgresql-client
```

Verify version:

```bash
pg_lsclusters
```

**⚠️ CRITICAL:** Stop and disable the default service - Patroni will manage PostgreSQL:

```bash
systemctl stop postgresql
systemctl disable postgresql
```

---

## 🧠 Step 3: Etcd Configuration (All Nodes)

### 3.1 Configure Etcd Cluster

Edit `/etc/default/etcd` on each node:

**Node 1 (192.168.10.31):**

```bash
ETCD_NAME="etcd01"
ETCD_DATA_DIR="/var/lib/etcd/default"
ETCD_LISTEN_PEER_URLS="http://192.168.10.31:2380"
ETCD_LISTEN_CLIENT_URLS="http://192.168.10.31:2379,http://127.0.0.1:2379"
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://192.168.10.31:2380"
ETCD_ADVERTISE_CLIENT_URLS="http://192.168.10.31:2379"
ETCD_INITIAL_CLUSTER="etcd01=http://192.168.10.31:2380,etcd02=http://192.168.10.32:2380,etcd03=http://192.168.10.33:2380"
ETCD_INITIAL_CLUSTER_STATE="new"
ETCD_INITIAL_CLUSTER_TOKEN="ring2all-etcd-cluster"
```

**Node 2 (192.168.10.32):**

```bash
ETCD_NAME="etcd02"
ETCD_DATA_DIR="/var/lib/etcd/default"
ETCD_LISTEN_PEER_URLS="http://192.168.10.32:2380"
ETCD_LISTEN_CLIENT_URLS="http://192.168.10.32:2379,http://127.0.0.1:2379"
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://192.168.10.32:2380"
ETCD_ADVERTISE_CLIENT_URLS="http://192.168.10.32:2379"
ETCD_INITIAL_CLUSTER="etcd01=http://192.168.10.31:2380,etcd02=http://192.168.10.32:2380,etcd03=http://192.168.10.33:2380"
ETCD_INITIAL_CLUSTER_STATE="new"
ETCD_INITIAL_CLUSTER_TOKEN="ring2all-etcd-cluster"
```

**Node 3 (192.168.10.33):**

```bash
ETCD_NAME="etcd03"
ETCD_DATA_DIR="/var/lib/etcd/default"
ETCD_LISTEN_PEER_URLS="http://192.168.10.33:2380"
ETCD_LISTEN_CLIENT_URLS="http://192.168.10.33:2379,http://127.0.0.1:2379"
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://192.168.10.33:2380"
ETCD_ADVERTISE_CLIENT_URLS="http://192.168.10.33:2379"
ETCD_INITIAL_CLUSTER="etcd01=http://192.168.10.31:2380,etcd02=http://192.168.10.32:2380,etcd03=http://192.168.10.33:2380"
ETCD_INITIAL_CLUSTER_STATE="new"
ETCD_INITIAL_CLUSTER_TOKEN="ring2all-etcd-cluster"
```

### 3.2 Start Etcd (All 3 nodes simultaneously)

```bash
systemctl enable --now etcd
```

### 3.3 Verify Cluster

```bash
etcdctl member list
etcdctl endpoint health --cluster
```

**Expected output:**

```
http://192.168.10.31:2379 is healthy
http://192.168.10.32:2379 is healthy
http://192.168.10.33:2379 is healthy
```

### 3.4 Configure Watchdog (All Nodes)

Patroni uses the watchdog as a safety mechanism against split-brain:

```bash
# Load softdog module
modprobe softdog

# Enable on boot
echo "softdog" > /etc/modules-load.d/softdog.conf

# Configure permissions for postgres user
echo 'KERNEL=="watchdog", MODE="0660", GROUP="postgres"' > /etc/udev/rules.d/60-watchdog.rules
udevadm control --reload-rules
udevadm trigger

# Verify
ls -l /dev/watchdog
# Should show: crw-rw---- 1 root postgres ...
```

---

## 🧹 Step 4: Prepare for Patroni (All Nodes)

**CRITICAL:** Patroni must initialize the cluster from scratch:

```bash
# Ensure PostgreSQL is stopped
systemctl stop postgresql

# DELETE existing data
rm -rf /var/lib/postgresql/17/main/*

# Set permissions
chown postgres:postgres /var/lib/postgresql/17/main
chmod 700 /var/lib/postgresql/17/main
```

---

## 🤖 Step 5: Patroni Configuration (All Nodes)

### 5.1 Install Patroni

```bash
apt update
apt install -y patroni python3-etcd3
```

### 5.2 Create Configuration

Create `/etc/patroni/config.yml`:

```bash
mkdir -p /etc/patroni
nano /etc/patroni/config.yml
```

**Template (adjust IPs and name for each node):**

```yaml
scope: ring2all-db-cluster
namespace: /db/
name: pg-node-01  # <--- CHANGE ON EACH NODE

restapi:
  listen: 192.168.10.31:8008  # <--- LOCAL NODE IP
  connect_address: 192.168.10.31:8008

etcd3:
  hosts:
    - 192.168.10.31:2379
    - 192.168.10.32:2379
    - 192.168.10.33:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    postgresql:
      use_pg_rewind: true
      use_slots: true
      pg_hba:
        - host replication replicator 192.168.10.0/24 md5
        - host all postgres 192.168.10.0/24 md5
        - host all all 0.0.0.0/0 md5
      parameters:
        wal_level: replica
        hot_standby: "on"
        wal_keep_segments: 8
        max_wal_senders: 5
        max_replication_slots: 5
        wal_log_hints: "on"
        archive_mode: "on"
        archive_command: mkdir -p /var/lib/postgresql/17/archive && test ! -f /var/lib/postgresql/17/archive/%f && cp %p /var/lib/postgresql/17/archive/%f

  initdb:
  - encoding: UTF8
  - data-checksums

postgresql:
  listen: 192.168.10.31:5432  # <--- LOCAL NODE IP
  connect_address: 192.168.10.31:5432
  data_dir: /var/lib/postgresql/17/main
  bin_dir: /usr/lib/postgresql/17/bin
  pgpass: /tmp/pgpass
  authentication:
    replication:
      username: replicator
      password: CHANGE_THIS_REPLICATION_PASSWORD  # <--- SECURE PASSWORD
    superuser:
      username: postgres
      password: CHANGE_THIS_ADMIN_PASSWORD  # <--- SECURE PASSWORD
  
  parameters:
    unix_socket_directories: '/var/run/postgresql'

  pg_hba:
    - local all all trust
    - host replication replicator 192.168.10.0/24 md5
    - host all postgres 192.168.10.0/24 md5
    - host all all 0.0.0.0/0 md5

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
```

### 5.3 Set Permissions

```bash
mkdir -p /var/lib/postgresql/17/main
chown postgres:postgres /var/lib/postgresql/17/main
chmod 700 /var/lib/postgresql/17/main
```

---

## 🚀 Step 6: Start the Cluster

### Start Node 1 First (Leader)

```bash
systemctl enable --now patroni
```

Check logs:

```bash
journalctl -u patroni -f
```

You should see: `Lock owner: pg-node-01; I am the leader`

### Start Nodes 2 and 3

After Node 1 becomes leader, start the replicas:

```bash
# On Node 2 and Node 3
systemctl enable --now patroni
```

You should see: `bootstrapping from leader 'pg-node-01'`

---

## 🔎 Step 7: Verification

### View Cluster Status

```bash
patronictl -c /etc/patroni/config.yml list
```

**Expected output:**

```
+ Cluster: ring2all-db-cluster -----+---------+-----------+
| Member     | Host           | Role    | State     | TL  |
+------------+----------------+---------+-----------+-----+
| pg-node-01 | 192.168.10.31  | Leader  | running   | 1   |
| pg-node-02 | 192.168.10.32  | Replica | streaming | 1   |
| pg-node-03 | 192.168.10.33  | Replica | streaming | 1   |
+------------+----------------+---------+-----------+-----+
```

### Test Failover

```bash
# Simulate failure on leader
systemctl stop patroni  # On pg-node-01

# Check new leader
patronictl -c /etc/patroni/config.yml list  # On another node
```

A new leader should be elected automatically within 30 seconds!

---

## 🗄️ Step 8: Install Ring2All Database Schema

**On the Leader node only:**

```bash
# Add Ring2All repository
curl -fsSL https://repo.ring2all.com/gpg.key | gpg --dearmor -o /etc/apt/keyrings/ring2all.gpg
echo "deb [signed-by=/etc/apt/keyrings/ring2all.gpg] https://repo.ring2all.com/apt stable main" > /etc/apt/sources.list.d/ring2all.list
apt update

# Install database schema
apt install softswitch-db
```

This creates:
- User: `ss_db_user` (password saved to `/etc/softswitch/db-credentials`)
- Databases: `ss_admin`, `ss_telephony`, `ss_cdr`, `ss_cc`, `ss_logs`, `freeswitch`

---

## ❓ Troubleshooting

### Etcd Reset (If misconfigured)

```bash
# On ALL nodes
systemctl stop etcd
rm -rf /var/lib/etcd/default
systemctl daemon-reload
systemctl start etcd
```

### Patroni Hard Reset

**⚠️ DANGER: This deletes ALL data!**

```bash
# On ALL nodes
systemctl stop patroni postgresql etcd
rm -rf /var/lib/postgresql/17/main/*
rm -rf /var/lib/etcd/default
systemctl start etcd
# Wait, then start patroni on Node 1 first
systemctl start patroni
```

### Watchdog Warning

If you see `Could not activate Linux watchdog device`:

```bash
modprobe softdog
ls -l /dev/watchdog  # Verify permissions
```

---

*Next: [2. File Server Cluster Setup](file-server-cluster.md)*
