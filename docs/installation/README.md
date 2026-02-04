# 📦 Ring2All PBX - Installation Guide

> Complete installation guide for deploying Ring2All PBX platform

---

## 📋 Overview

Ring2All PBX can be deployed in two main configurations:

| Configuration | Description | Best For |
|---------------|-------------|----------|
| **[Single Server](#single-server)** | All components on one machine | Small businesses, demos, development |
| **[Distributed (Multi-Server)](#distributed-deployment)** | Components across multiple servers | Enterprise, high availability, scalability |

---

## 🖥️ Single Server Deployment

The simplest deployment where all components run on a single server.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          SINGLE SERVER ARCHITECTURE                              │
│                           (All-in-One Deployment)                                │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│   ┌───────────────────────────────────────────────────────────────────────┐     │
│   │                         NGINX (Reverse Proxy)                          │     │
│   │                          Port 80/443 (HTTP/S)                          │     │
│   └───────────────────────────────────────────────────────────────────────┘     │
│        │              │              │              │              │             │
│        ▼              ▼              ▼              ▼              ▼             │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐          │
│   │  Admin  │   │  Portal │   │Switchbd │   │   API   │   │   WS    │          │
│   │   Web   │   │   Web   │   │   Web   │   │ :3000   │   │ :3001   │          │
│   └─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘          │
│                                                   │                              │
│                                                   ▼                              │
│   ┌───────────────────────────────────────────────────────────────────────┐     │
│   │                        PostgreSQL 17                                   │     │
│   │   ss_admin | ss_telephony | ss_cdr | ss_cc | ss_logs | freeswitch    │     │
│   └───────────────────────────────────────────────────────────────────────┘     │
│                                    │                                             │
│                                    ▼                                             │
│   ┌───────────────────────────────────────────────────────────────────────┐     │
│   │                         FreeSWITCH                                     │     │
│   │                SIP: 5060 | RTP: 16384-32768                           │     │
│   └───────────────────────────────────────────────────────────────────────┘     │
│                                                                                  │
│                         Single Server: your-server-ip                           │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Capacity & Requirements

| Component | Minimum | Recommended | High Performance |
|-----------|---------|-------------|------------------|
| **CPU** | 4 vCPU | 8 vCPU | 16+ vCPU |
| **RAM** | 8 GB | 16 GB | 32+ GB |
| **Storage** | 100 GB SSD | 250 GB SSD | 500+ GB NVMe |
| **OS** | Debian 13 | Debian 13 | Debian 13 |
| **Concurrent Calls** | ~50 | ~150 | ~500+ |
| **Extensions** | ~500 | ~2,000 | ~10,000 |

> 💡 **Note:** With high-performance hardware (16 vCPU, 32GB RAM, NVMe storage), a single server can handle up to **10,000 extensions** and **1,500 concurrent calls**.

📖 **[Complete Single Server Installation Guide](single-server.md)**

---

## 🏗️ Distributed Deployment (Multi-Server)

Enterprise-grade deployment with components distributed across multiple servers for maximum scalability, redundancy, and performance.

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                              DISTRIBUTED ARCHITECTURE                                        │
│                          (Enterprise Multi-Server Deployment)                                │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                              │
│                           ┌─────────────────────────────────┐                               │
│                           │   LOAD BALANCER (HAProxy/Nginx)  │                               │
│                           │      Public IP: lb.example.com   │                               │
│                           └────────────────┬────────────────┘                               │
│                                            │                                                 │
│         ┌──────────────────────────────────┼───────────────────────────────────┐            │
│         │                                  │                                    │            │
│         ▼                ▼                 ▼                  ▼                 ▼            │
│   ┌──────────┐    ┌──────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐       │
│   │  ADMIN   │    │  PORTAL  │    │ SWITCHBOARD │    │    API     │    │ MONITORING │       │
│   │  Server  │    │  Server  │    │   Server    │    │  Server(s) │    │    API     │       │
│   └──────────┘    └──────────┘    └────────────┘    └────────────┘    └────────────┘       │
│         │                │               │                  │               │                │
│         └────────────────┴───────────────┴──────────────────┴───────────────┘                │
│                                          │                                                   │
│                    ┌─────────────────────┴─────────────────────┐                            │
│                    │                                           │                            │
│                    ▼                                           ▼                            │
│   ┌────────────────────────────────────┐    ┌───────────────────────────────────────────┐  │
│   │     POSTGRESQL HA CLUSTER          │    │          FILE SERVER CLUSTER              │  │
│   │  ┌──────────┐ ┌──────────┐        │    │  ┌──────────┐ ┌──────────┐ ┌──────────┐  │  │
│   │  │ Primary  │ │ Replica  │ ...    │    │  │ FS-01    │ │ FS-02    │ │ FS-03    │  │  │
│   │  │ Patroni  │ │ Patroni  │        │    │  │ GlusterFS│ │ GlusterFS│ │ GlusterFS│  │  │
│   │  └──────────┘ └──────────┘        │    │  └──────────┘ └──────────┘ └──────────┘  │  │
│   │       PostgreSQL 17 + Etcd         │    │        GlusterFS Replica 3 Volume        │  │
│   └────────────────────────────────────┘    └───────────────────────────────────────────┘  │
│                    │                                                                        │
│                    │                                                                        │
│   ┌────────────────────────────────────────────────────────────────────────────────────┐   │
│   │                         TELEPHONY CLUSTER (N+1 Scalable)                            │   │
│   │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐              │   │
│   │  │   FS-TELE-01 │ │   FS-TELE-02 │ │   FS-TELE-03 │ │   FS-TELE-N  │              │   │
│   │  │  FreeSWITCH  │ │  FreeSWITCH  │ │  FreeSWITCH  │ │  FreeSWITCH  │    ...       │   │
│   │  │  10,000 ext  │ │  10,000 ext  │ │  10,000 ext  │ │  10,000 ext  │              │   │
│   │  │  1,500 calls │ │  1,500 calls │ │  1,500 calls │ │  1,500 calls │              │   │
│   │  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘              │   │
│   │                           Add servers as needed (Horizontal Scaling)                │   │
│   └────────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                              │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Distributed Components

| Component | Description | Servers | Scalability |
|-----------|-------------|---------|-------------|
| **[PostgreSQL HA Cluster](postgresql-cluster.md)** | High availability database with Patroni + Etcd | 3 nodes | Replica scaling |
| **[File Server Cluster](file-server-cluster.md)** | GlusterFS distributed storage for recordings | 3 nodes (or NAS) | Storage scaling |
| **[Admin Server](admin-server.md)** | Web dashboard + API backend | 1+ nodes | Horizontal scaling |
| **[Portal Server](portal-server.md)** | User self-service portal | 1+ nodes | Horizontal scaling |
| **[Switchboard Server](switchboard-server.md)** | Operator console | 1+ nodes | Horizontal scaling |
| **[Telephony Server(s)](telephony-server.md)** | FreeSWITCH call processing | N+1 nodes | **Unlimited scaling** |

### Telephony Server Scaling

| Servers | Extensions | Concurrent Calls | Use Case |
|---------|------------|------------------|----------|
| 1 | ~10,000 | ~1,500 | Medium Enterprise |
| 2 | ~20,000 | ~3,000 | Large Enterprise |
| 5 | ~50,000 | ~7,500 | Service Provider |
| 10+ | ~100,000+ | ~15,000+ | Carrier Grade |

> 💡 **Horizontal Scaling:** Add telephony servers as your capacity needs grow. Each server operates independently while sharing the same database and configuration.

---

## 📖 Installation Guides

### Single Server

| Guide | Description |
|-------|-------------|
| 📖 **[Single Server Installation](single-server.md)** | Complete step-by-step guide |

### Distributed Deployment

| Guide | Description |
|-------|-------------|
| 📖 **[1. PostgreSQL HA Cluster](postgresql-cluster.md)** | Database cluster with automatic failover |
| 📖 **[2. File Server Cluster](file-server-cluster.md)** | Distributed storage (GlusterFS or NAS) |
| 📖 **[3. Admin Server](admin-server.md)** | Web dashboard and API |
| 📖 **[4. Portal Server](portal-server.md)** | User self-service portal |
| 📖 **[5. Switchboard Server](switchboard-server.md)** | Operator console |
| 📖 **[6. Telephony Server(s)](telephony-server.md)** | FreeSWITCH nodes (N+1) |
| 📖 **[7. HAProxy Load Balancer](haproxy-setup.md)** | Database routing and application load balancing |

---

## 🔧 Prerequisites

### All Deployments

- **Operating System:** Debian 13 (Trixie) - 64-bit
- **Network:** Static IP address(es)
- **DNS:** Domain name(s) configured (recommended)
- **SSL:** Valid SSL certificates (Let's Encrypt supported)

### Ring2All Repository Access

```bash
# Add GPG key
curl -fsSL https://repo.ring2all.com/gpg.key | gpg --dearmor -o /etc/apt/keyrings/ring2all.gpg

# Add repository
echo "deb [signed-by=/etc/apt/keyrings/ring2all.gpg] https://repo.ring2all.com/apt stable main" > /etc/apt/sources.list.d/ring2all.list

# Update package list
apt update
```

---

## 📦 Package Reference

| Package | Description | Required For |
|---------|-------------|--------------|
| `softswitch-db` | Database schemas and migrations | Database Server |
| `softswitch-admin` | Admin UI + Portal + Switchboard | Web Servers |
| `softswitch-api` | Backend API service | API Server |
| `softswitch-telephony` | FreeSWITCH + Lua scripts | Telephony Server |
| `softswitch-music` | Hold music audio files | All (optional) |
| `softswitch-voiceguide-emma` | English voice prompts | All (optional) |
| `softswitch-voiceguide-paloma` | Spanish voice prompts | All (optional) |

---

## 🔐 Post-Installation

After installation:

1. **Access the Admin Dashboard** at `https://your-server/admin`
2. **Activate License** in Settings > System > Licensing
3. **Configure SIP Profiles** for your network
4. **Create Extensions** and test registration
5. **Add Gateways** for external calling

---

## 🆘 Troubleshooting

Common issues and solutions:

| Issue | Solution |
|-------|----------|
| Services not starting | Check logs: `journalctl -u softswitch-api -f` |
| Database connection failed | Verify credentials in `/etc/softswitch/db-credentials` |
| FreeSWITCH not loading | Test ODBC: `isql -v ss_telephony` |
| Web interface not accessible | Check Nginx: `nginx -t && systemctl status nginx` |

---

*Next: [Single Server Installation](single-server.md) or [Distributed Deployment Overview](distributed-overview.md)*
