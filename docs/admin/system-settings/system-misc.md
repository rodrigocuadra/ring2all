# System Misc

## 📖 Introduction

System Misc contains miscellaneous system configuration options that don't fit into other categories. Configure timezone, date formats, and other general system behaviors.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Timezone | System default timezone |
| Date Format | Display format for dates |
| Time Format | 12/24 hour format |
| Language | Default system language |
| Session Timeout | Auto-logout time |

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → System Settings → System Misc`

![System Misc](../../assets/images/admin/system-settings/system-misc-list.png)

---

## 📝 Form Fields

### General Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Timezone** | Server timezone | `America/New_York` |
| **Date Format** | Date display format | `YYYY-MM-DD` |
| **Time Format** | Time display format | `24 hours` |
| **Default Language** | UI language | `English` |

### Session Settings

| Field | Description | Default |
|-------|-------------|---------|
| **Session Timeout** | Idle logout time | `30 minutes` |
| **Remember Me Duration** | Extended session | `7 days` |
| **Max Login Attempts** | Before lockout | `5` |

### Display Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Items Per Page** | List pagination | `25` |
| **Dashboard Refresh** | Auto-refresh interval | `30 seconds` |

---

## 💡 Tips

> [!TIP]
> **Set correct timezone**: Affects call logs and scheduled tasks.

> [!TIP]
> **Configure session timeout**: Balance security with user convenience.

---

## 🔗 Related Modules

- [Branding](branding.md) — Visual customization
- [Email Settings](email-settings.md) — Email configuration
