# Logging Settings

## 📖 Introduction

Logging Settings configures what gets logged and how long logs are retained. Balance between troubleshooting detail and disk usage.

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → PBX Settings → Logging Settings`

<!-- [IMG: menu-navigation-logging-settings] -->

---

## 📝 Form Fields

<!-- [IMG: logging-settings-form] -->

### Log Levels

| Log Type | Level | Description |
|----------|-------|-------------|
| Console | `INFO` | Screen output |
| FreeSWITCH | `WARNING` | Call processing |
| API | `INFO` | REST API |
| Security | `INFO` | Auth events |

### Level Options

| Level | Verbosity |
|-------|-----------|
| ERROR | Errors only |
| WARNING | Warnings + errors |
| INFO | Normal operations |
| DEBUG | Detailed debug |

### Retention

| Field | Description | Example |
|-------|-------------|---------|
| **Retention Days** | Days to keep | `14` |
| **Max Size** | Max log size MB | `100` |
| **Compress** | Compress old logs | `Yes` |

---

## 💡 Tips

> [!TIP]
> **DEBUG only when needed**: Very verbose.

> [!TIP]
> **Compress old logs**: Save disk space.

> [!WARNING]
> **Check disk usage**: Logs can fill disks.

---

## 🔗 Related Modules

- [Log File Viewer](../13-pbx-tools/log-file-viewer.md) — View logs
- [System Cleanup](../16-maintenance/system-cleanup.md) — Auto cleanup
