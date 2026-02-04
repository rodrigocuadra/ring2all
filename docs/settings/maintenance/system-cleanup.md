# System Cleanup

## 📖 Introduction

System Cleanup configures automatic data retention policies. Delete old CDRs, recordings, and logs to manage disk space.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Maintenance → System Cleanup`

![System Cleanup](../../assets/images/admin/maintenance/system-maintenance-list.png)

---

## 📝 Cleanup Policies

![System Cleanup Form](../../assets/images/admin/maintenance/system-maintenance-list.png)

| Data Type | Retention | Action |
|-----------|-----------|--------|
| **CDR Records** | 365 days | Delete |
| **Call Recordings** | 90 days | Delete |
| **Voicemails** | 60 days | Delete |
| **Fax Files** | 30 days | Delete |
| **Log Files** | 14 days | Delete |
| **Temp Files** | 7 days | Delete |

---

## 📊 Disk Usage

| Path | Size | Threshold |
|------|------|-----------|
| `/var/recordings` | 45 GB | 80% |
| `/var/fax` | 2 GB | 80% |
| `/var/log` | 5 GB | 80% |

---

## 💡 Tips

> [!TIP]
> **Longer for recordings**: Keep at least 90 days for compliance.

> [!TIP]
> **Archive before delete**: Enable backup of old data.

> [!WARNING]
> **Check compliance**: Some industries require longer retention.

---

## 🔗 Related Modules

- [CDR Settings](../10-settings/cdr-settings.md) — CDR retention
- [Cron Profiles](cron-profiles.md) — Schedule cleanup
