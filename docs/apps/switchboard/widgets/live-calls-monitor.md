# Live Calls Monitor Widget

## 📖 Description

Real-time visualization of all calls with supervisor controls. Listen, whisper, or barge into calls.

<!-- [IMG: widget-live-calls-monitor] -->

---

## 📊 Information Shown

| Field | Description |
|-------|-------------|
| **Agent** | Extension handling call |
| **Caller** | Customer number |
| **Duration** | Call length |
| **Queue** | Which queue (if any) |
| **State** | Active/Held |

---

## 🎧 Supervisor Actions

| Action | Icon | Description |
|--------|------|-------------|
| **Listen** | 👂 | Silent monitoring - caller and agent can't hear you |
| **Whisper** | 🔊 | Coach agent - only agent hears you |
| **Barge** | 📞 | Join call - all parties hear you |

---

## 🔊 Audio Flow

| Mode | Agent Hears | Caller Hears |
|------|-------------|--------------|
| Listen | ❌ | ❌ |
| Whisper | ✅ | ❌ |
| Barge | ✅ | ✅ |

---

## ⚙️ Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **Auto-refresh** | Update interval | 1 sec |
| **Show Queues Only** | Filter queue calls | No |
| **Play Beep** | Alert on barge | Yes |

---

## 💡 Tips

> [!TIP]
> **Use whisper for training**: Coach without caller knowing.

> [!TIP]
> **Listen first**: Understand context before barging.

> [!WARNING]
> **Barge sparingly**: Only for escalations.
