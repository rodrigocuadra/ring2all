# Backup & Restore

## 📖 Introduction

Backup & Restore creates snapshots of your PBX configuration and data. Use backups for disaster recovery and migration.

---

## 🎯 What's Backed Up

| Category | Includes |
|----------|----------|
| **Configuration** | Extensions, routes, IVRs, queues |
| **Audio Files** | Recordings, voicemail greetings |
| **Database** | All settings and metadata |
| **Recordings** | Call recordings (optional) |

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → System → Backup & Restore`

![Backup Restore](../../assets/images/admin/maintenance/backup-restore-list.png)

---

## 📝 Creating Backups

### Manual Backup

![Backup Restore Manual](../../assets/images/admin/maintenance/backup-restore-list.png)

1. Click **Create Backup**
2. Select components to include
3. Click **Start Backup**
4. Download when complete

| Option | Description |
|--------|-------------|
| **Configuration** | Core settings |
| **Audio Files** | Recordings, greetings |
| **Call Recordings** | Large files, optional |
| **CDR Data** | Call history |

### Scheduled Backups

| Field | Description | Example |
|-------|-------------|---------|
| **Schedule** | When to run | `Daily at 2 AM` |
| **Retention** | Backups to keep | `7` |
| **Storage** | Where to save | `Local` or `S3` |

---

## 📝 Restoring Backups

### Restore Process

1. Select backup file
2. Choose components to restore
3. Confirm restoration
4. System restarts with restored data

> [!CAUTION]
> **Restore overwrites current data**: This cannot be undone.

---

## 💡 Tips

> [!TIP]
> **Test restores**: Periodically verify backups work.

> [!TIP]
> **Offsite storage**: Keep copies in cloud storage.

> [!TIP]
> **Document procedures**: Ensure team knows restore process.

> [!WARNING]
> **Plan downtime**: Restore may take system offline briefly.

---

## 🔗 Related Modules

- [General Settings](../10-settings/general-settings.md) — System configuration

---

*← Previous: [API Keys](api-keys.md) | Next: [System Status](system-status.md) →*
