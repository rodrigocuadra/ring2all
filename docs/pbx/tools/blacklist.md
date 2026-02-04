# Blacklist

## 📖 Introduction

Blacklist blocks unwanted callers from reaching your phone system. When a blacklisted number calls, they hear a busy signal, disconnection, or custom message.

---

## 🎯 Common Use Cases

| Block Reason | Action |
|--------------|--------|
| Spam callers | Disconnect |
| Telemarketers | Busy signal |
| Harassment | Block + log |
| Known scams | Disconnect immediately |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Incoming Tools → Blacklist`

![Blacklist](../../assets/images/pbx/tools/blacklist-list.png)

---

## 📝 Form Fields

![Blacklist Form](../../assets/images/pbx/tools/blacklist-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Caller ID** | Number to block | `+15551234567` |
| **Name** | Reason/notes | `Telemarketer` |
| **Action** | What to do | `Hangup` |
| **Message** | Play before action | `(none)` |
| **Enabled** | Entry is active | `Yes` |

### Actions

| Action | Effect |
|--------|--------|
| **Hangup** | Disconnect immediately |
| **Busy** | Play busy signal |
| **Reject** | Politely reject |
| **Play Message** | Play audio then hangup |

### Pattern Matching

| Pattern | Matches |
|---------|---------|
| `+15551234567` | Exact number |
| `+1555*` | All 555 prefixes |
| `*` | All anonymous callers |
| `0000000000` | Fake/spoofed numbers |

---

## 🚀 Practical Example

### Block Known Spam Range

| Field | Value |
|-------|-------|
| Pattern | `+12025551*` |
| Name | `Known spam range` |
| Action | `Hangup` |

All calls from +1-202-555-1xxx are now blocked.

---

## 💡 Tips

> [!TIP]
> **Start specific**: Block exact numbers before patterns.

> [!TIP]
> **Log blocked calls**: Review to ensure no false positives.

> [!WARNING]
> **Be careful with patterns**: Too broad can block legitimate callers.

---

## 🔗 Related Modules

- [VIP Lists](../05-call-center/vip-lists.md) — Opposite: priority callers
- [Inbound Routes](../03-pbx-routing/inbound-routes.md) — CID-based routing

---

*Next: [Dynamic Routing](dynamic-routing.md) →*
