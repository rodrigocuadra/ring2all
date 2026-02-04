# Firewall Rules

## 📖 Introduction

Firewall Rules defines custom nftables rules for advanced network security. Configure port access and traffic filtering.

---

## ⚠️ Advanced Feature

> [!WARNING]
> **Advanced users only**: Incorrect rules can lock you out.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Firewall → Firewall Rules`

![Firewall Rules](../../assets/images/admin/firewall/firewall-rules-list.png)

---

## 📝 Default Rules

| Port | Service | Status |
|------|---------|--------|
| 22 | SSH | Allow (admin IPs) |
| 80 | HTTP | Allow |
| 443 | HTTPS | Allow |
| 5060 | SIP UDP | Allow |
| 5061 | SIP TLS | Allow |
| 10000-20000 | RTP | Allow |

---

## 📝 Custom Rules

![Firewall Rules Form](../../assets/images/admin/firewall/firewall-rules-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Rule name | `Block China` |
| **IP/Range** | Target | `0.0.0.0/0` |
| **Port** | Port number | `5060` |
| **Protocol** | TCP/UDP | `UDP` |
| **Action** | Allow/Drop | `Drop` |
| **Priority** | Order | `100` |

---

## 💡 Tips

> [!TIP]
> **Default deny**: Allow only what you need.

> [!TIP]
> **Test changes**: Have console access before changes.

> [!CAUTION]
> **Backup before changes**: Save current rules first.

---

## 🔗 Related Modules

- [Firewall Services](firewall-services.md) — Service definitions
- [Firewall Settings](../11-administration/firewall-settings.md) — General settings
