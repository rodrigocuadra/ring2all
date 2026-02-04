# Call Detail Records

## 📖 Introduction

Call Detail Records (CDR) provides comprehensive logging of all calls through the PBX. View call history, analyze patterns, and export data for billing or compliance.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Complete History | All call records |
| Search & Filter | Find specific calls |
| Export | CSV/PDF export |
| Recording Access | Play recordings |
| Analytics | Call statistics |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → CDR Reports → Call Detail Records`

![CDR](../../assets/images/reports/cdr/cdr-list.png)

---

## 📊 CDR Fields

### Call Information

| Field | Description | Example |
|-------|-------------|---------|
| **Call Date** | Date and time | `2024-01-15 14:30:22` |
| **Direction** | Inbound/Outbound | `Outbound` |
| **Source** | Caller number | `101` |
| **Destination** | Called number | `+15551234567` |
| **Duration** | Call length | `3:45` |
| **Status** | Call result | `Answered` |

### Technical Details

| Field | Description | Example |
|-------|-------------|---------|
| **UUID** | Unique call ID | `abc123-def456` |
| **Gateway** | Trunk used | `Provider A` |
| **Codec** | Audio codec | `OPUS` |
| **SIP Response** | SIP status code | `200 OK` |

### Recording

| Field | Description |
|-------|-------------|
| **Recording** | Play/download button |
| **Recording File** | Filename link |

---

## 🔍 Search Options

| Filter | Description |
|--------|-------------|
| **Date Range** | Start and end date |
| **Source** | Caller extension/number |
| **Destination** | Called number |
| **Direction** | Inbound/Outbound/Both |
| **Status** | Answered/Missed/Failed |
| **Duration** | Min/Max call length |

---

## 📤 Export Options

| Format | Description |
|--------|-------------|
| **CSV** | Spreadsheet format |
| **PDF** | Printable report |
| **Excel** | Microsoft Excel format |

---

## 💡 Tips

> [!TIP]
> **Use CDR Filters**: Save common searches for quick access.

> [!TIP]
> **Export regularly**: Create scheduled exports for billing.

---

## 🔗 Related Modules

- [CDR Filters](cdr-filters.md) — Saved search filters
- [Active Calls](../pbx/active-calls.md) — Real-time monitoring
- [CDR Configuration](../../settings/pbx/cdr-settings.md) — CDR settings
