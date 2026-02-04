# Security Logs

## 📖 Introduction

Security Logs records all security-related events in the system. Monitor authentication attempts, access violations, and potential threats.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Auth Events | Login/logout tracking |
| Threat Detection | Suspicious activity |
| Access Violations | Permission denials |
| IP Monitoring | Source tracking |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → System Reports → Security Logs`

![Security Logs](../../assets/images/reports/system/security-logs-list.png)

---

## 📊 Log Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Timestamp** | Event time | `2024-01-15 14:30:22` |
| **Event Type** | Type of event | `Failed Login` |
| **Severity** | Risk level | `Warning` |
| **Source IP** | Origin IP | `192.168.1.50` |
| **User** | Affected user | `admin@example.com` |
| **Details** | Event details | `Invalid password` |

---

## 🔍 Event Types

| Event | Severity | Description |
|-------|----------|-------------|
| **Login Success** | Info | Successful login |
| **Login Failed** | Warning | Invalid credentials |
| **Brute Force** | Critical | Multiple failures |
| **IP Blocked** | Warning | Firewall block |
| **Permission Denied** | Warning | Access violation |

---

## ⚡ Actions

| Action | Description |
|--------|-------------|
| **Block IP** | Add to firewall blacklist |
| **Lock User** | Disable user account |
| **Export** | Download security report |

---

## 💡 Tips

> [!WARNING]
> **Monitor critical events**: Brute force attacks require immediate action.

> [!TIP]
> **Set up alerts**: Configure email alerts for critical security events.

---

## 🔗 Related Modules

- [Firewall Settings](../../admin/firewall/firewall-settings.md) — Firewall rules
- [Access Control](../../admin/firewall/access-control.md) — IP whitelist/blacklist
- [User Activity](user-activity.md) — Session monitoring
