# Active Calls

## 📖 Introduction

Active Calls provides real-time monitoring of all calls currently in progress on the PBX. View caller information, call duration, and take actions like transfer or hangup.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Real-Time Display | Live call updates |
| Call Actions | Transfer, hangup, spy |
| Duration Timer | Live call timer |
| Channel Info | Technical details |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → PBX Reports → Active Calls`

![Active Calls](../../assets/images/reports/pbx/active-calls-list.png)

---

## 📊 Display Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Caller** | Source number | `101 (John Smith)` |
| **Called** | Destination | `+15551234567` |
| **Direction** | Inbound/Outbound | `Outbound` |
| **Duration** | Live timer | `2:34` |
| **State** | Call state | `Bridged` |
| **Gateway** | Trunk used | `Provider A` |

---

## ⚡ Actions

| Action | Description |
|--------|-------------|
| **Transfer** | Transfer to another extension |
| **Hangup** | End the call |
| **Spy** | Silent listen (whisper/barge) |
| **Record** | Start/stop recording |

---

## 💡 Tips

> [!TIP]
> **Auto-refresh**: The display updates automatically every few seconds.

> [!WARNING]
> **Use hangup carefully**: This immediately terminates the call.

---

## 🔗 Related Modules

- [Call Detail Records](../cdr/cdr.md) — Call history
- [SIP Endpoints](sip-endpoints.md) — Registered devices
