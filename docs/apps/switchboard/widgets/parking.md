# Parking Widget

## 📖 Description

Displays parked calls with duration. Pick up parked calls with a click.

<!-- [IMG: widget-parking] -->

---

## 📊 Information Shown

| Field | Description |
|-------|-------------|
| **Slot** | Parking slot number |
| **Caller** | Parked caller number |
| **Wait Time** | Time parked |
| **Lot** | Parking lot name |

---

## 🎨 Parking Slots

```
┌─────────────────────────────────┐
│ 🅿️ Main Parking                │
├───────┬───────┬───────┬───────┤
│ 701   │ 702   │ 703   │ 704   │
│ EMPTY │📞John │ EMPTY │ EMPTY │
│       │ 1:23  │       │       │
└───────┴───────┴───────┴───────┘
```

### Slot Colors

| State | Color |
|-------|-------|
| Empty | Gray |
| Parked < 30s | Green |
| Parked 30-60s | Yellow |
| Parked > 60s | Red |

---

## ⚙️ Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **Selected Lot** | Which parking lot | All |

---

## 🎯 Actions

**Click** parked call to:
- Pick up / Retrieve call

**Drag** active call to empty slot to:
- Park the call

---

## 💡 Tips

> [!TIP]
> **Click to pickup**: Instant retrieval.

> [!TIP]
> **Watch red slots**: Callers waiting too long.

> [!WARNING]
> **Don't forget parked calls**: They may hang up!
