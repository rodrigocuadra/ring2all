# Quality Score Widget

## 📖 Description

Displays real-time call quality metrics using MOS (Mean Opinion Score) and network statistics.

<!-- [IMG: widget-quality-score] -->

---

## 📊 Quality Metrics

| Metric | Good | Fair | Poor |
|--------|------|------|------|
| **MOS Score** | 4.0-5.0 | 3.0-4.0 | < 3.0 |
| **Jitter** | < 30ms | 30-50ms | > 50ms |
| **Packet Loss** | < 1% | 1-3% | > 3% |
| **Latency** | < 150ms | 150-300ms | > 300ms |

---

## 🎨 Quality Indicators

| Score | Color | Audio Quality |
|-------|-------|---------------|
| 4.0+ | 🟢 Green | Excellent |
| 3.5-4.0 | 🟡 Yellow | Good |
| 3.0-3.5 | 🟠 Orange | Fair |
| < 3.0 | 🔴 Red | Poor |

---

## 📈 Display

```
Call Quality Score
┌──────────────────┐
│      ★★★★☆      │
│       4.2        │
│   EXCELLENT      │
│                  │
│ Jitter:    15ms  │
│ Loss:      0.2%  │
│ Latency:   85ms  │
└──────────────────┘
```

---

## 💡 Tips

> [!TIP]
> **Monitor during issues**: Identify network problems.

> [!TIP]
> **Track trends**: Patterns may indicate systemic issues.

> [!WARNING]
> **MOS < 3.0 = complaints**: Audio quality is poor.
