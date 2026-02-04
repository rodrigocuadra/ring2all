# Queued Calls Widget

## 📖 Description

Shows calls waiting in queue with wait times. Monitor queue depth and identify long-waiting callers.

<!-- [IMG: widget-queued-calls] -->

---

## 📊 Information Shown

| Column | Description |
|--------|-------------|
| **Queue** | Which queue |
| **Caller** | Caller number |
| **Wait Time** | Time waiting |
| **Position** | Place in queue |

---

## 🎨 Wait Time Colors

| Wait Time | Color | Action |
|-----------|-------|--------|
| < 30 sec | Green | Normal |
| 30-60 sec | Yellow | Monitor |
| 60-120 sec | Orange | Prioritize |
| > 120 sec | Red | Urgent |

---

## ⚙️ Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **Selected Queues** | Filter by queue | All |
| **Warning Threshold** | Seconds for yellow | 30 |
| **Critical Threshold** | Seconds for red | 120 |

---

## 🎯 Actions

**Click** call to:
- Answer immediately
- Transfer to available agent

**Drag** call to:
- Extension to transfer
- Parking to park

---

## 💡 Tips

> [!TIP]
> **Watch red calls**: Answer urgently.

> [!TIP]
> **Drag to agent**: Quick transfer.

> [!WARNING]
> **Long waits hurt satisfaction**: Prioritize red calls.
