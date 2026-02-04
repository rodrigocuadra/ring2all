# Time Groups

## 📖 Introduction

Time Groups define schedules that can be used by Time Conditions. A Time Group is simply a list of time ranges and days.

---

## 🎯 Common Use Cases

| Time Group | Schedule |
|------------|----------|
| Office Hours | Mon-Fri 9:00 AM - 5:00 PM |
| Extended Hours | Mon-Fri 8:00 AM - 8:00 PM |
| Holidays | Jan 1, Jul 4, Dec 25, etc. |
| After Hours | Mon-Fri 5:00 PM - 9:00 AM + Weekends |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Routing → Time Groups`

![Time Groups](../../assets/images/pbx/incoming-tools/time-groups-list.png)

---

## 📝 Form Fields

![Time Groups Form](../../assets/images/pbx/incoming-tools/time-groups-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Group identifier | `Office Hours` |
| **Description** | Notes | `Standard business hours` |
| **Enabled** | Group is active | `Yes` |

### Time Entries

Add time ranges:

| Days | Start Time | End Time |
|------|------------|----------|
| Mon-Fri | 09:00 | 17:00 |

### Special Dates

Add holidays or special dates:

| Date | Name |
|------|------|
| 2026-01-01 | New Year's Day |
| 2026-07-04 | Independence Day |
| 2026-12-25 | Christmas |

---

## 🚀 Practical Example: Standard Business Hours

| Field | Value |
|-------|-------|
| Name | `Office Hours` |

**Time Entries:**
| Days | Start | End |
|------|-------|-----|
| Monday, Tuesday, Wednesday, Thursday, Friday | 09:00 | 17:00 |

Now use this in a Time Condition to route differently during/outside business hours.

---

## 💡 Tips

> [!TIP]
> **Create separate holiday group**: Makes it easy to update yearly.

> [!TIP]
> **Use 24-hour format**: Avoids AM/PM confusion.

---

## 🔗 Related Modules

- [Time Conditions](time-conditions.md) — Use time groups for routing

---

*← Previous: [Time Conditions](time-conditions.md)*
