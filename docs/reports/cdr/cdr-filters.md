# CDR Filters

## 📖 Introduction

CDR Filters are saved search criteria for Call Detail Records. Create filters to quickly find specific types of calls.

---

## 🎯 Common Use Cases

| Filter | Criteria |
|--------|----------|
| Today's Missed | Today, Status=Missed |
| Long Calls | Duration > 30 min |
| International | Destination starts with 011 |
| Department Calls | Extension 1000-1099 |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → CDR → CDR Filters`

![Cdr Filters](../assets/images/reports/cdr/cdr-filters-list.png)

---

## 📝 Form Fields

![Cdr Filters Form](../assets/images/reports/cdr/cdr-filters-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Filter name | `Sales Missed Calls` |
| **Description** | Filter purpose | `Daily review` |
| **Date Range** | Time period | `Today` |
| **Extensions** | Filter by extension | `1000-1099` |
| **Direction** | Inbound/Outbound/All | `Inbound` |
| **Status** | Answered/Missed/Failed | `Missed` |
| **Min Duration** | Minimum call length | `0` |
| **Max Duration** | Maximum call length | `(none)` |
| **Enabled** | Filter is active | `Yes` |

---

## 🚀 Practical Example

### Daily Missed Calls Report

| Field | Value |
|-------|-------|
| Name | `Daily Missed` |
| Date Range | `Yesterday` |
| Status | `Missed` |
| Direction | `Inbound` |

Use this filter each morning to review missed calls.

---

## 💡 Tips

> [!TIP]
> **Schedule reports**: Export filtered results automatically.

> [!TIP]
> **Create for each team**: Sales, Support, Billing.

---

## 🔗 Related Modules

- [CDR](cdr.md) — Call detail records
- [Call Statistics](call-statistics.md) — Aggregate data

---

*← Previous: [CDR](cdr.md) | Next: [IVR Statistics](ivr-statistics.md) →*
