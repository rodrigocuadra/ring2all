# 🏗️ Distributed Deployment Overview

> Enterprise-grade multi-server deployment for maximum scalability and high availability

---

## 📋 Introduction

For enterprise environments, Ring2All PBX can be deployed across multiple servers to achieve:

| Goal | Solution |
|------|----------|
| **High Availability** | No single point of failure |
| **Horizontal Scaling** | Add servers as capacity grows |
| **Performance Isolation** | Separate workloads across servers |
| **Disaster Recovery** | Data replication across nodes |

---

## 🏛️ Architecture Diagram

![Ring2All Distributed Architecture](/assets/images/architecture-diagram.png)

---

## 📊 Server Roles & Requirements

### Infrastructure Servers

| Role | Hostname | IP (Example) | vCPU | RAM | Storage | Packages |
|------|----------|--------------|------|-----|---------|----------|
| **Database Node 1** | pg-node-01 | 192.168.10.31 | 4 | 16GB | 500GB SSD | PostgreSQL 17 + Patroni + Etcd |
| **Database Node 2** | pg-node-02 | 192.168.10.32 | 4 | 16GB | 500GB SSD | PostgreSQL 17 + Patroni + Etcd |
| **Database Node 3** | pg-node-03 | 192.168.10.33 | 4 | 16GB | 500GB SSD | PostgreSQL 17 + Patroni + Etcd |
| **File Server 1** | fs-node-01 | 192.168.10.34 | 2 | 4GB | 1TB+ HDD/SSD | GlusterFS Server |
| **File Server 2** | fs-node-02 | 192.168.10.35 | 2 | 4GB | 1TB+ HDD/SSD | GlusterFS Server |
| **File Server 3** | fs-node-03 | 192.168.10.36 | 2 | 4GB | 1TB+ HDD/SSD | GlusterFS Server |

### Application Servers

| Role | Hostname | IP (Example) | vCPU | RAM | Storage | Packages |
|------|----------|--------------|------|-----|---------|----------|
| **Admin** | admin-node-01 | 192.168.10.10 | 4 | 8GB | 50GB | `softswitch-admin` |
| **Portal** | portal-node-01 | 192.168.10.20 | 2 | 2GB | 20GB | `softswitch-portal` |
| **Switchboard** | switch-node-01 | 192.168.10.30 | 2 | 2GB | 20GB | `softswitch-switchboard` |
| **API** | api-node-01 | 192.168.10.40 | 4 | 8GB | 50GB | `softswitch-api` |

### Telephony Servers (N+1)

| Role | Hostname | IP (Example) | vCPU | RAM | Storage | Capacity |
|------|----------|--------------|------|-----|---------|----------|
| **Telephony 1** | tele-node-01 | 192.168.10.51 | 4-16 | 8-32GB | 100GB | 10,000 ext / 1,500 calls |
| **Telephony 2** | tele-node-02 | 192.168.10.52 | 4-16 | 8-32GB | 100GB | 10,000 ext / 1,500 calls |
| **Telephony N** | tele-node-N | 192.168.10.5N | 4-16 | 8-32GB | 100GB | 10,000 ext / 1,500 calls |

---

## 📈 Scaling Reference

### Telephony Horizontal Scaling

| Servers | Total Extensions | Concurrent Calls | Use Case |
|---------|-----------------|------------------|----------|
| 1 | 10,000 | 1,500 | Medium Enterprise |
| 2 | 20,000 | 3,000 | Large Enterprise |
| 3 | 30,000 | 4,500 | Enterprise+ |
| 5 | 50,000 | 7,500 | Service Provider |
| 10 | 100,000 | 15,000 | Carrier Grade |
| 20+ | 200,000+ | 30,000+ | Large Carrier |

> 💡 **Key Insight:** Each telephony server is independent and connects to the shared database cluster. Add servers as capacity grows without reconfiguration.

---

## 🔄 High Availability Features

### Database Cluster (PostgreSQL + Patroni)

| Feature | Description |
|---------|-------------|
| **Automatic Failover** | If primary fails, replica promotes in <30 seconds |
| **Streaming Replication** | Real-time data sync (RPO ≈ 0) |
| **Consensus (Etcd)** | Distributed leader election |
| **Self-Healing** | Automatic replica recovery |

### File Server Cluster (GlusterFS)

| Feature | Description |
|---------|-------------|
| **Replica 3** | Every file stored on 3 nodes |
| **Self-Healing** | Automatic sync after node recovery |
| **Active-Active** | All nodes serve traffic |
| **Client Failover** | Automatic redirection if node fails |

### Application Layer

| Feature | Description |
|---------|-------------|
| **Stateless Design** | Any API server can handle any request |
| **Load Balancing** | HAProxy distributes traffic |
| **Health Checks** | Automatic removal of failed nodes |

---

## 📖 Installation Order

Follow these guides in sequence:

| Step | Guide | Description |
|------|-------|-------------|
| **1** | 📖 [PostgreSQL HA Cluster](postgresql-cluster.md) | Database with automatic failover |
| **2** | 📖 [File Server Cluster](file-server-cluster.md) | Distributed storage (or NAS setup) |
| **3** | 📖 [Admin Server](admin-server.md) | Web dashboard and API |
| **4** | 📖 [Portal Server](portal-server.md) | User self-service portal |
| **5** | 📖 [Switchboard Server](switchboard-server.md) | Operator console |
| **6** | 📖 [Telephony Server(s)](telephony-server.md) | FreeSWITCH nodes (N+1) |
| **7** | 📖 [HAProxy Setup](haproxy-setup.md) | Load balancing configuration |

---

## 🔗 Network Requirements

### Internal Network

| Port | Protocol | Service | Between |
|------|----------|---------|---------|
| 5432 | TCP | PostgreSQL | DB ↔ App/Tele servers |
| 8008 | TCP | Patroni API | DB nodes ↔ HAProxy |
| 2379/2380 | TCP | Etcd | DB nodes |
| 24007-24008 | TCP | GlusterFS Daemon | FS nodes |
| 49152-49251 | TCP | GlusterFS Bricks | FS nodes ↔ Clients |

### External Network

| Port | Protocol | Service |
|------|----------|---------|
| 80/443 | TCP | HTTP/HTTPS (Web UI) |
| 5060 | UDP/TCP | SIP Signaling |
| 5061 | TCP | SIP TLS |
| 16384-32768 | UDP | RTP Media |

---

## 🚀 Quick Start Checklist

- [ ] **Network:** Private network configured between all servers
- [ ] **DNS/Hosts:** All servers can resolve each other by hostname
- [ ] **Firewall:** Required ports open between servers
- [ ] **Storage:** Dedicated disks for databases and recordings
- [ ] **OS:** Debian 13 installed on all servers

---

*Next: [1. PostgreSQL HA Cluster Setup](postgresql-cluster.md)*
