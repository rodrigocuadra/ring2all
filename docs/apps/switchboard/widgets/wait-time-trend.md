# Wait Time Trend Widget

## 📖 Description

Chart showing queue wait time trends over time. Identify busy periods and staffing needs.

<!-- [IMG: widget-wait-time-trend] -->

---

## 📊 Chart Display

```
Wait Time (minutes)
     │
  5  │         ╭───╮
  4  │     ╭───╯   ╰──╮
  3  │ ╭───╯          ╰──╮
  2  │─╯                  ╰───
  1  │
     └─────────────────────────
      9AM  10   11   12   1PM
```

---

## 📈 Metrics Shown

| Metric | Description |
|--------|-------------|
| **Avg Wait Time** | Average wait per period |
| **Max Wait Time** | Longest wait |
| **Calls Waiting** | Queue depth |

---

## ⏰ Time Periods

| View | Shows |
|------|-------|
| Hourly | Last 24 hours by hour |
| Daily | Last 7 days by day |
| Weekly | Last 4 weeks |

---

## ⚙️ Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **Queue** | Which queue to show | All |
| **Time Range** | Period to display | Today |
| **Threshold Line** | SLA target line | 60 sec |

---

## 💡 Tips

> [!TIP]
> **Identify patterns**: Know when to staff up.

> [!TIP]
> **Set threshold**: See when SLA is missed.

> [!TIP]
> **Compare days**: Learn weekly patterns.
