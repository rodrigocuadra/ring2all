# System Health Widget

## 📖 Description

Monitors PBX system health including CPU, memory, and service status.

<!-- [IMG: widget-system-health] -->

---

## 📊 Metrics Shown

| Metric | Description | Healthy |
|--------|-------------|---------|
| **CPU** | Processor usage | < 70% |
| **Memory** | RAM usage | < 80% |
| **Disk** | Storage used | < 85% |
| **Uptime** | Time since restart | — |
| **Services** | FreeSWITCH status | Running |

---

## 🎨 Status Colors

| Level | Color | Meaning |
|-------|-------|---------|
| Normal | Green | All good |
| Warning | Yellow | Monitor |
| Critical | Red | Needs attention |

---

## 📈 Thresholds

| Resource | Warning | Critical |
|----------|---------|----------|
| CPU | 70% | 90% |
| Memory | 80% | 95% |
| Disk | 80% | 95% |

---

## ⚠️ Alerts

When thresholds exceeded:
- Widget turns yellow/red
- Optional sound alert
- Optional desktop notification

---

## 💡 Tips

> [!TIP]
> **Monitor regularly**: Catch issues early.

> [!TIP]
> **Check disk space**: Recordings fill up quickly.

> [!WARNING]
> **Red = urgent**: High CPU affects call quality.
