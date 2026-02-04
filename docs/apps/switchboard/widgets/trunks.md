# Trunks Widget

## 📖 Description

Shows SIP trunk/gateway status and channel usage. Monitor provider connectivity.

<!-- [IMG: widget-trunks] -->

---

## 📊 Information Shown

| Field | Description |
|-------|-------------|
| **Trunk Name** | Gateway identifier |
| **Status** | Registered/Down |
| **Channels** | Active/Total |
| **Calls** | Current calls |

---

## 🎨 Status Indicators

| Status | Color | Meaning |
|--------|-------|---------|
| 🟢 Registered | Green | Connected to provider |
| 🔴 Down | Red | Not connected |
| 🟡 Degraded | Yellow | Partial connectivity |

---

## 📊 Channel Usage

```
Trunk: Twilio Primary
Status: 🟢 Registered
Channels: ████████░░ 8/10
Calls: 5 inbound, 3 outbound
```

---

## ⚙️ Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **Selected Trunks** | Which to show | All |
| **Show Inactive** | Show disabled trunks | No |

---

## 💡 Tips

> [!TIP]
> **Monitor channel usage**: Near capacity = add more.

> [!TIP]
> **Watch for red**: Provider issues affect calls.

> [!WARNING]
> **100% channels = busy signal**: Calls can't go through.
