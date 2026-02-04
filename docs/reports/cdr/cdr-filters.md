# CDR Filters

## 📖 Introduction

CDR Filters allow you to create and manage predefined filters for Call Detail Records. Save frequently used search criteria to quickly access specific call data.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Saved Filters | Store search criteria |
| Quick Access | One-click filtering |
| Shared Filters | Team-wide filters |
| Date Ranges | Predefined periods |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → CDR Reports → CDR Filters`

![CDR Filters](../../assets/images/reports/cdr/cdr-filters-list.png)

---

## 📝 Form Fields

### Filter Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Filter Name** | Unique identifier | `Sales Calls This Week` |
| **Description** | Filter description | `Outbound sales calls` |
| **Shared** | Available to all users | `Yes` |

### Date Range

| Field | Description | Example |
|-------|-------------|---------|
| **Date Range Type** | Preset or custom | `This Week` |
| **Start Date** | Custom start date | `2024-01-01` |
| **End Date** | Custom end date | `2024-01-31` |

### Call Criteria

| Field | Description | Example |
|-------|-------------|---------|
| **Direction** | Inbound/Outbound/Both | `Outbound` |
| **Source** | Caller extension | `1*` (wildcard) |
| **Destination** | Called number | `+1*` |
| **Duration** | Minimum duration | `> 30 seconds` |
| **Status** | Call status | `Answered` |

---

## 💡 Tips

> [!TIP]
> **Use wildcards**: Use `*` for flexible number matching.

> [!TIP]
> **Share common filters**: Create shared filters for team reports.

---

## 🔗 Related Modules

- [Call Detail Records](cdr.md) — View call records
- [Active Calls](../pbx/active-calls.md) — Real-time calls
