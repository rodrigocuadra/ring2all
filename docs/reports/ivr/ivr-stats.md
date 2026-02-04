# IVR Statistics

## 📖 Introduction

IVR Statistics shows how callers navigate your phone menus. Identify popular options, bottlenecks, and abandonment points.

---

## 🎯 Key Metrics

| Metric | Description |
|--------|-------------|
| Total Entries | Callers who entered IVR |
| Option Usage | Which keys are pressed |
| Avg Time in IVR | How long before selection |
| Abandonment | Left without selection |
| Timeouts | No key pressed |
| Invalid | Wrong key pressed |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → IVR Statistics`

<!-- [IMG: menu-navigation-ivr-statistics] -->

---

## 📝 Statistics Dashboard

<!-- [IMG: ivr-statistics-dashboard] -->

### IVR Overview

| IVR | Entries | Opt 1 | Opt 2 | Opt 3 | Abandon |
|-----|---------|-------|-------|-------|---------|
| Main Menu | 1,250 | 45% | 30% | 15% | 10% |
| Support | 380 | 60% | 25% | 10% | 5% |

### Option Breakdown

For selected IVR:

| Option | Key | Destination | Usage % |
|--------|-----|-------------|---------|
| Sales | 1 | Sales Queue | 45% |
| Support | 2 | Support Queue | 30% |
| Billing | 3 | Billing Queue | 15% |
| Repeat | * | Replay Menu | 5% |
| Operator | 0 | Reception | 5% |

### Time Analysis

| Time Period | Entries | Abandon Rate |
|-------------|---------|--------------|
| 9 AM - 12 PM | 450 | 8% |
| 12 PM - 2 PM | 180 | 15% |
| 2 PM - 5 PM | 420 | 7% |

---

## 🚀 Common Insights

### High Abandonment
- Menu too long
- Options confusing
- Hold times too long

### Option Never Used
- Consider removing
- Possibly unclear

### Frequent Timeouts
- Menu too fast
- Callers confused
- Add "Press star to repeat"

---

## 💡 Tips

> [!TIP]
> **Review monthly**: Adjust IVR based on patterns.

> [!TIP]
> **Popular first**: Put most-used options first (Press 1).

> [!TIP]
> **Short menus**: 4-5 options maximum.

---

## 🔗 Related Modules

- [IVRs](../02-pbx-applications/ivrs.md) — IVR configuration
- [CDR](cdr.md) — Individual calls

---

*← Previous: [CDR Filters](cdr-filters.md) | Next: [Queue Reports](queue-reports.md) →*
