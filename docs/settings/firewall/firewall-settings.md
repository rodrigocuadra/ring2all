# Firewall Settings

## 📖 Introduction

Firewall Settings configures security features to protect your PBX from attacks. Includes Fail2Ban for brute force protection and IP whitelisting/blacklisting.

---

## ⚠️ Security Critical

> [!CAUTION]
> **Don't disable security**: SIP servers are constantly attacked. These protections are essential.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Firewall → Firewall Settings`

![Firewall Settings](../../assets/images/admin/firewall/firewall-settings-list.png)

---

## 📝 Form Fields

### Fail2Ban Configuration

![Firewall Settings Fail2ban](../../assets/images/admin/firewall/firewall-settings-list.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Enabled** | Fail2Ban is active | `Yes` |
| **Max Retries** | Failed attempts before ban | `5` |
| **Ban Duration** | Hours to ban IP | `24` |
| **Find Time** | Window for retries (min) | `10` |

### IP Whitelist

Never ban these IPs:

| IP/Range | Description |
|----------|-------------|
| `192.168.1.0/24` | Office LAN |
| `10.0.0.50` | VoIP Provider |

### IP Blacklist

Always block these IPs:

| IP/Range | Reason |
|----------|--------|
| `1.2.3.4` | Known attacker |
| `5.6.7.0/24` | Spam range |

---

## 📊 Attack Protection

| Attack Type | Protection |
|-------------|------------|
| SIP brute force | Fail2Ban blocks after failed auths |
| Registration spam | Rate limiting |
| Port scanning | Connection limits |
| Toll fraud | Call limits per extension |

---

## 🚀 Practical Example

### Whitelist Office Network

If legitimate users are getting blocked:

1. Find your public IP
2. Add to Whitelist: `203.0.113.50`
3. Save changes

---

## 💡 Tips

> [!TIP]
> **Whitelist trusted IPs**: Office, provider, remote workers.

> [!TIP]
> **Review bans regularly**: Check for false positives.

> [!TIP]
> **Use strong SIP passwords**: Prevents most attacks.

> [!WARNING]
> **Never disable**: Keep Fail2Ban enabled always.

---

## 🔗 Related Modules

- [Security Settings](../10-settings/security-settings.md) — Password policies
- [Audit Log](audit-log.md) — Security events

---

*← Previous: [Telephony Domains](telephony-domains.md)*
