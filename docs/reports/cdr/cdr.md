# CDR (Call Detail Records)

## 📖 Introduction

Call Detail Records (CDR) is a searchable log of all calls through your phone system. Use it for troubleshooting, billing, quality assurance, and analytics.

---

## 🎯 Information Available

| Data | Description |
|------|-------------|
| Date/Time | When call occurred |
| Caller | Who made the call |
| Destination | Where call went |
| Duration | Call length |
| Status | Answered, missed, failed |
| Recording | Link to recording (if enabled) |
| Cost | Call cost (if configured) |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → CDR`

![Cdr](../assets/images/reports/cdr/cdr-list.png)

---

## 📝 CDR List View

<!-- [IMG: cdr-list-view] -->

| Column | Description |
|--------|-------------|
| **Date** | Call date/time |
| **Caller** | Caller ID/Extension |
| **Destination** | Number dialed |
| **Duration** | Length (mm:ss) |
| **Direction** | Inbound/Outbound/Internal |
| **Status** | Answered/Missed/Failed |
| **Recording** | Play/Download button |

### Filtering

| Filter | Options |
|--------|---------|
| Date Range | Start to End date |
| Extension | Specific extension |
| Direction | Inbound/Outbound/Internal |
| Status | Answered/Missed/Failed |
| Caller ID | Search by number |

---

## 🚀 Practical Example

### Find All Missed Calls Last Week

1. Set Date Range: Last 7 days
2. Set Status: Missed
3. Click Search
4. Review results

---

## 💡 Tips

> [!TIP]
> **Export to CSV**: Download for analysis in Excel.

> [!TIP]
> **Filter by extension**: Find specific user's calls.

> [!TIP]
> **Check recordings**: Play back for quality assurance.

---

## 🔗 Related Modules

- [Call Statistics](call-statistics.md) — Aggregate statistics
- [Active Calls](active-calls.md) — Real-time calls
- [Queue Reports](queue-reports.md) — Queue analytics

---

*Next: [Call Statistics](call-statistics.md) →*
