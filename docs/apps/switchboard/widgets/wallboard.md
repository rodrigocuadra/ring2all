# Wallboard Widget

## 📖 Description

Large-format display of queue statistics optimized for TV screens. Perfect for call center displays.

<!-- [IMG: widget-wallboard] -->

---

## 📊 Statistics Displayed

| Metric | Description |
|--------|-------------|
| **Calls Waiting** | Large number display |
| **Longest Wait** | Highlighted if threshold exceeded |
| **Agents Available** | Ready to take calls |
| **Agents On Call** | Currently busy |
| **Total Answered** | Today's count |
| **Abandoned** | Callers who hung up |
| **SLA** | Service level percentage |

---

## 🎨 Visual Design

```
┌────────────────────────────────────────┐
│          📞 SALES QUEUE               │
├──────────────┬─────────────────────────┤
│  WAITING     │  LONGEST WAIT          │
│     3        │     1:45               │
│              │     ⚠️                  │
├──────────────┼─────────────────────────┤
│  AVAILABLE   │  ON CALL               │
│     5        │     8                  │
├──────────────┴─────────────────────────┤
│  ANSWERED: 156  │  ABANDONED: 12      │
│              SLA: 94% ████████░░       │
└────────────────────────────────────────┘
```

---

## ⚙️ Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **Queue** | Which queue | Primary |
| **Wait Threshold** | Warning at seconds | 60 |
| **SLA Target** | SLA percentage goal | 80% |
| **Theme** | Light/Dark | Dark |
| **Auto-rotate** | Cycle through queues | Off |

---

## 💡 Tips

> [!TIP]
> **Use dark theme**: Better for ambient displays.

> [!TIP]
> **Set thresholds**: Visual alerts when problems.

> [!TIP]
> **Large font**: Readable from across the room.
