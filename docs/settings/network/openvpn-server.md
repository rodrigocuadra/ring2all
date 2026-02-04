# OpenVPN Server

## 📖 Introduction

OpenVPN Server provides secure remote access for phones and users. Remote workers connect securely to the PBX network.

---

## 🎯 Use Cases

| Use Case | Benefit |
|----------|---------|
| Remote workers | Secure phone connection |
| Home office | Access internal extensions |
| Mobile devices | Softphone on mobile |
| Multi-site | Connect branch offices |

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Network → OpenVPN Server`

![Openvpn Server](../../assets/images/admin/network/openvpn-server-list.png)

---

## 📝 Form Fields

![Openvpn Server Form](../../assets/images/admin/network/openvpn-server-list.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Enabled** | Server active | `Yes` |
| **Port** | VPN port | `1194` |
| **Protocol** | UDP or TCP | `UDP` |
| **Network** | VPN subnet | `10.8.0.0/24` |
| **DNS** | Push DNS | `Yes` |
| **Certificate** | Server cert | `server.crt` |

---

## 📥 Client Profiles

Generate client profiles for users:

1. Click **Add Client**
2. Enter client name
3. Download `.ovpn` profile
4. Import to client device

---

## 💡 Tips

> [!TIP]
> **Use UDP**: Better for voice traffic.

> [!TIP]
> **Unique profiles per user**: For security and tracking.

> [!TIP]
> **Revoke when needed**: Remove old client access.

---

## 🔗 Related Modules

- [OpenVPN Client](openvpn-client.md) — Site-to-site
- [Firewall Settings](../11-administration/firewall-settings.md) — Allow VPN port
