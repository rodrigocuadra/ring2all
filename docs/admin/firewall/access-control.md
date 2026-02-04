# Access Control

## 📖 Introduction

Access Control manages IP whitelists and blacklists. Allow trusted IPs and block known attackers.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Firewall → Access Control`

![Access Control](../../assets/images/admin/firewall/access-control-list.png)

---

## 📝 IP Lists

### Whitelist (Allowed)

![Access Control Whitelist](../../assets/images/admin/firewall/access-control-list.png)

| Field | Description | Example |
|-------|-------------|---------|
| **IP/Range** | Address or CIDR | `192.168.1.0/24` |
| **Name** | Identifier | `Office Network` |
| **Notes** | Purpose | `Main office LAN` |

### Blacklist (Blocked)

| Field | Description | Example |
|-------|-------------|---------|
| **IP/Range** | Blocked address | `1.2.3.4` |
| **Reason** | Why blocked | `Brute force attack` |
| **Expires** | When to unblock | `Permanent` |

---

## 🚀 Practical Example

### Whitelist Office IP

1. Click **Add Whitelist**
2. IP: `203.0.113.50`
3. Name: `Main Office`
4. Save

This IP will never be blocked by Fail2Ban.

---

## 💡 Tips

> [!TIP]
> **Whitelist before lockout**: Add trusted IPs first.

> [!TIP]
> **Use CIDR for ranges**: `/24` for entire network.

> [!WARNING]
> **Review blacklist**: False positives can block legitimate users.

---

## 🔗 Related Modules

- [Firewall Settings](../11-administration/firewall-settings.md) — Fail2Ban config
- [GeoFirewall](geofirewall.md) — Country blocking
