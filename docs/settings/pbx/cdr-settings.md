# CDR Settings

## 📖 Introduction

CDR Settings configures how Call Detail Records are stored, exported, and retained. Control data retention and export destinations.

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → PBX Settings → CDR Settings`

<!-- [IMG: menu-navigation-cdr-settings] -->

---

## 📝 Form Fields

### Storage Settings

<!-- [IMG: cdr-settings-storage] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Retention Days** | Days to keep CDR | `365` |
| **Auto Delete** | Delete after retention | `Yes` |
| **Archive First** | Archive before delete | `Yes` |
| **Archive Path** | Where to archive | `/var/cdr/archive` |

### Export Settings

<!-- [IMG: cdr-settings-export] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Auto Export** | Export automatically | `Daily` |
| **Export Format** | CSV, JSON, XML | `CSV` |
| **Export Path** | File destination | `/var/cdr/exports` |
| **Email Export** | Send exports by email | `cdr@company.com` |

### Database Settings

| Field | Description | Example |
|-------|-------------|---------|
| **CDR Database** | Database location | `Local PostgreSQL` |
| **External DB** | Replicate to external | `No` |

---

## 🚀 Practical Example

### Daily Export for Billing

| Field | Value |
|-------|-------|
| Auto Export | `Daily at 2 AM` |
| Export Format | `CSV` |
| Email Export | `billing@company.com` |

Billing team receives daily call records automatically.

---

## 💡 Tips

> [!TIP]
> **Retain at least 1 year**: Common compliance requirement.

> [!TIP]
> **Archive before delete**: Never lose important records.

> [!TIP]
> **CSV for Excel**: Most compatible format.

---

## 🔗 Related Modules

- [CDR](../09-reports/cdr.md) — View call records
- [CDR Filters](../09-reports/cdr-filters.md) — Saved searches

---

*← Previous: [Conference Profiles](conference-profiles.md) | Next: [CRM Integrations](crm-integrations.md) →*
