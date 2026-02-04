# Security Logs

## 📖 Introduction

Security Logs shows authentication events and security-related activity. Monitor login attempts, blocked IPs, and security alerts.

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → System → Security Logs`

![Security Logs](../assets/images/reports/system/security-logs-list.png)

---

## 📊 Security Events

<!-- [IMG: security-logs-view] -->

| Event Type | Description |
|------------|-------------|
| **Login Success** | Successful admin login |
| **Login Failed** | Failed login attempt |
| **SIP Auth Fail** | Failed SIP auth |
| **IP Blocked** | Fail2Ban blocked IP |
| **IP Unblocked** | IP removed from block |
| **Password Change** | User changed password |
| **2FA Event** | 2FA verification |

---

## 📊 Log Columns

| Column | Description |
|--------|-------------|
| **Date/Time** | Event timestamp |
| **Event** | Event type |
| **User** | Affected user |
| **IP Address** | Source IP |
| **Details** | Additional info |
| **Status** | Success/Fail |

---

## ⚠️ Alerts to Watch

> [!WARNING]
> **Multiple failed logins**: Possible attack.

> [!WARNING]
> **Unknown IPs blocked**: Review for patterns.

> [!CAUTION]
> **Admin password changes**: Verify authorized.

---

## 💡 Tips

> [!TIP]
> **Review daily**: Catch attacks early.

> [!TIP]
> **Set up alerts**: Email on critical events.

---

## 🔗 Related Modules

- [Firewall Settings](../11-administration/firewall-settings.md) — Security config
- [Audit Logs](audit-logs.md) — All activity
