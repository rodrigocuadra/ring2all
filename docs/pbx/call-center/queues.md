# Queues

## 📖 Introduction

Queues (also called ACD Queues) distribute incoming calls to a team of agents. Callers wait on hold with music until an agent becomes available.

**How it works:**
1. Caller reaches the queue
2. Hears greeting and hold music
3. System finds next available agent
4. Caller is connected to the agent

---

## 🎯 Common Use Cases

| Queue | Purpose |
|-------|---------|
| Sales Queue | New customer inquiries |
| Support Queue | Technical support requests |
| Billing Queue | Payment and account questions |
| VIP Queue | Priority customers |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Call Center → Queues`

![Queues](../../assets/images/pbx/call-center/queues-list.png)

---

## 📝 Form Fields

### General Tab

<!-- [IMG: queues-form-general] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Queue identifier | `Support Queue` |
| **Extension** | Number to reach queue | `8000` |
| **Description** | Notes | `Technical support` |
| **Music on Hold** | Audio during wait | `default` |
| **Max Wait Time** | Maximum hold time (sec) | `300` |
| **Enabled** | Queue is active | `Yes` |

### Agents Tab

<!-- [IMG: queues-form-agents] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Ring Strategy** | How to distribute calls | `Round Robin` |
| **Wrap-Up Time** | Seconds after call before next | `10` |
| **Max Calls Per Agent** | Simultaneous calls | `1` |

#### Ring Strategies

| Strategy | Description |
|----------|-------------|
| **Round Robin** | Rotate through agents |
| **Least Recent** | Agent who answered longest ago |
| **Fewest Calls** | Agent with fewest calls today |
| **Random** | Random available agent |
| **Ring All** | All agents ring simultaneously |
| **Longest Idle** | Agent idle the longest |

### Announcements Tab

<!-- [IMG: queues-form-announcements] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Welcome Message** | Played when caller enters | `Thanks for calling...` |
| **Position Announcement** | Tell caller their position | `Every 30 seconds` |
| **Wait Time Announcement** | Estimated wait time | `Yes` |
| **Periodic Announcement** | Repeated message during hold | `Your call is important...` |

### Timeouts Tab

<!-- [IMG: queues-form-timeouts] -->

| Field | Description | Example |
|-------|-------------|---------|
| **No Answer Timeout** | Ring time before trying next | `15` |
| **Max Wait Destination** | Where to go after max wait | `Voicemail: Support` |
| **No Agents Destination** | Where to go if no agents | `Announcement: Closed` |

---

## 🚀 Practical Example: Support Queue

### Configuration

| Field | Value |
|-------|-------|
| Name | `Support Queue` |
| Extension | `8000` |
| Ring Strategy | `Longest Idle` |
| Max Wait Time | `600` (10 min) |
| Welcome Message | `Thank you for calling support...` |
| Position Announcement | `Every 60 seconds` |
| Max Wait Destination | `Voicemail: support@company.com` |

<!-- [IMG: example-queue-support] -->

### Add Agents

Add support team extensions as agents in the queue.

---

## 💡 Tips

> [!TIP]
> **Use Longest Idle**: Distributes workload fairly.

> [!TIP]
> **Enable position announcements**: Callers tolerate waits better when informed.

> [!TIP]
> **Set reasonable max wait**: 5-10 minutes typical before voicemail.

> [!WARNING]
> **Monitor queue stats**: High abandon rates indicate staffing issues.

---

## 🔗 Related Modules

- [Agents](agents.md) — Configure team members
- [Queue Profiles](../10-settings/queue-profiles.md) — Queue templates
- [Ring Groups](../02-pbx-applications/ring-groups.md) — Simpler alternative

---

*Next: [Agents](agents.md) →*
