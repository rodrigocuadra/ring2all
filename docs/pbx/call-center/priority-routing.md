# Priority Routing

## 📖 Introduction

Priority Routing gives certain callers preferential treatment. VIP callers skip the queue or get routed to specialized agents automatically.

---

## 🎯 Common Use Cases

| Caller Type | Priority Treatment |
|-------------|-------------------|
| Key accounts | Skip queue |
| Enterprise customers | Dedicated agents |
| High-value leads | Priority in queue |
| Problematic callers | Specific handling |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Call Center → Priority Routing`

![Priority Routing](../../assets/images/pbx/call-center/priority-routing-list.png)

---

## 📝 Form Fields

![Priority Routing Form](../../assets/images/pbx/call-center/priority-routing-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Rule name | `Enterprise Customers` |
| **VIP List** | List of priority callers | `Enterprise VIPs` |
| **Priority Level** | Queue position boost | `1` (highest) |
| **Action** | What to do | `Priority Queue` |
| **Destination** | Where to route | `Queue: VIP Support` |
| **Enabled** | Rule is active | `Yes` |

### Actions

| Action | Effect |
|--------|--------|
| **Priority Queue** | Move to front of queue |
| **Skip Queue** | Connect to agent immediately |
| **Dedicated Agent** | Route to specific agent only |
| **Special IVR** | Different menu for VIPs |

---

## 🚀 Practical Example

### Enterprise Customer Priority

1. Create VIP List with enterprise customer numbers
2. Create Priority Rule:
   - VIP List: `Enterprise Customers`
   - Action: `Skip Queue`
   - Destination: `Ring Group: Senior Support`

Enterprise customers now bypass the queue entirely.

---

## 💡 Tips

> [!TIP]
> **Use sparingly**: Too many VIPs defeats the purpose.

> [!TIP]
> **Notify agents**: Train them on VIP handling expectations.

---

## 🔗 Related Modules

- [VIP Lists](vip-lists.md) — Define VIP callers
- [Queues](queues.md) — Standard queue handling

---

*← Previous: [Agents](agents.md) | Next: [VIP Lists](vip-lists.md) →*
