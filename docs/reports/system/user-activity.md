# User Activity

## 📖 Introduction

User Activity tracks user sessions and login history. Monitor active sessions, login patterns, and security events.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Session Tracking | Active sessions |
| Login History | Login attempts |
| Security Events | Failed logins |
| Location Data | IP geolocation |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → System → User Activity`

![User Activity](../../assets/images/reports/system/user-activity-list.png)

---

## 📊 Activity Fields

### Session Information

| Field | Description | Example |
|-------|-------------|---------|
| **User** | Username | `admin@example.com` |
| **Login Time** | Session start | `2024-01-15 08:00` |
| **Last Activity** | Last action | `5 minutes ago` |
| **IP Address** | User's IP | `192.168.1.50` |
| **Browser** | User agent | `Chrome 120` |
| **Location** | Geo location | `New York, US` |

### Login History

| Field | Description | Example |
|-------|-------------|---------|
| **Timestamp** | Login time | `2024-01-15 08:00` |
| **Status** | Success/Failed | `Success` |
| **Method** | Auth method | `Password` |
| **IP Address** | Source IP | `192.168.1.50` |

---

## ⚡ Actions

| Action | Description |
|--------|-------------|
| **Terminate Session** | Force logout |
| **Block IP** | Add to blacklist |
| **View Details** | Full session info |

---

## 💡 Tips

> [!TIP]
> **Monitor failed logins**: Multiple failures may indicate attack attempts.

> [!WARNING]
> **Unknown locations**: Investigate logins from unexpected locations.

---

## 🔗 Related Modules

- [Audit Logs](audit-logs.md) — Change tracking
- [Users](../../admin/administration/users.md) — User management
- [Firewall Settings](../../admin/firewall/firewall-settings.md) — Security rules
