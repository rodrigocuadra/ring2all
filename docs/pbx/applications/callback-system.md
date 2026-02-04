# Callback System

## 📖 Introduction

The Callback System automatically calls back people who couldn't reach you or who opted for a callback instead of waiting on hold.

**Types of callbacks:**
- **Queue Callback**: Caller requests callback instead of waiting
- **Abandoned Call Callback**: System calls back callers who hung up
- **Scheduled Callback**: Callback at a specific time

---

## 🎯 Common Use Cases

| Scenario | Callback Type |
|----------|--------------|
| "Press 1 for a callback instead of waiting" | Queue Callback |
| Follow up on missed calls | Abandoned Callback |
| "We'll call you back at 3 PM" | Scheduled Callback |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Callback System`

<!-- [IMG: menu-navigation-callback-system] -->

---

## 📝 Form Fields

<!-- [IMG: callback-system-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Callback rule name | `Support Queue Callback` |
| **Source** | Queue or route to monitor | `Support Queue` |
| **Callback Delay** | Minutes before calling back | `5` |
| **Max Attempts** | How many times to try | `3` |
| **Retry Interval** | Minutes between retries | `10` |
| **Caller ID** | Number to show when calling back | `Main Line` |
| **Enabled** | Rule is active | `Yes` |

---

## 🚀 Practical Example: Queue Callback

### Enable "Press 1 for Callback" in a Queue

1. Create a callback rule linked to your queue
2. Configure the queue to offer callback option
3. When caller presses 1, they're added to callback list
4. System calls them back when an agent is available

---

## 💡 Tips

> [!TIP]
> Set reasonable retry limits (3 attempts is typical).

> [!TIP]
> Use business caller ID so customers recognize the call.

---

## 🔗 Related Modules

- [Queues](../05-call-center/queues.md) — Configure queue callback option
- [Callback Profiles](./callback-profiles.md) — Callback behavior templates

---

*← Previous: [Custom Applications](custom-applications.md) | Next: [Voicemail Broadcast](voicemail-broadcast.md) →*
