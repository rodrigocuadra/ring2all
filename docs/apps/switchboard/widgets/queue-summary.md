# Queue Summary Widget

## 📖 Description

Overview of all call queues with key metrics. Monitor waiting calls, members, and SLA at a glance.

<!-- [IMG: widget-queue-summary] -->

---

## 📊 Metrics Shown

| Metric | Description |
|--------|-------------|
| **Queue Name** | Queue identifier |
| **Strategy** | Ring strategy |
| **Members** | Active agents |
| **Waiting** | Calls in queue |
| **SLA** | Service level % |

---

## 🎨 Queue Card

Each queue shows:

```
┌─────────────────────────┐
│ 📞 Sales Queue          │
│ Strategy: Round Robin   │
│ Members: 5 ▶ 3 active   │
│ Waiting: 2              │
│ SLA: 95%                │
└─────────────────────────┘
```

### Color Coding

| Condition | Color |
|-----------|-------|
| No waiting | Green |
| 1-3 waiting | Yellow |
| 4+ waiting | Red |

---

## ⚙️ Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **Selected Queues** | Which queues to show | All |

Click queue checkboxes to select/deselect.

---

## 🎯 Actions

Click queue card to:
- View detailed queue stats
- Open Queue Members widget filtered to this queue

---

## 💡 Tips

> [!TIP]
> **Watch colors**: Red means needs attention.

> [!TIP]
> **Show key queues only**: Focus on what matters.
