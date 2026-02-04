# OpenVPN Client

## 📖 Introduction

OpenVPN Client connects this PBX to another VPN server for site-to-site connectivity. Link multiple offices securely.

---

## 🎯 Use Cases

| Use Case | Benefit |
|----------|---------|
| Multi-site PBX | Connect branch systems |
| Central management | Manage from HQ |
| Shared extensions | Cross-site calling |
| Failover | Backup connectivity |

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Network → OpenVPN Client`

![Openvpn Client](../../assets/images/admin/network/openvpn-client-list.png)

---

## 📝 Form Fields

![Openvpn Client Form](../../assets/images/admin/network/openvpn-client-list.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Enabled** | Client active | `Yes` |
| **Server** | VPN server address | `vpn.company.com` |
| **Port** | Server port | `1194` |
| **Protocol** | UDP or TCP | `UDP` |
| **Profile** | Upload .ovpn | `client.ovpn` |

---

## 📊 Connection Status

| Indicator | Meaning |
|-----------|---------|
| 🟢 Connected | VPN active |
| 🔴 Disconnected | VPN down |
| 🟡 Connecting | In progress |
| ⚪ Disabled | Not enabled |

---

## 💡 Tips

> [!TIP]
> **Monitor connection**: Check status regularly.

> [!TIP]
> **Auto-reconnect**: Enable for reliability.

---

## 🔗 Related Modules

- [OpenVPN Server](openvpn-server.md) — Host VPN
- [Network Configuration](network-configuration.md) — Network settings
