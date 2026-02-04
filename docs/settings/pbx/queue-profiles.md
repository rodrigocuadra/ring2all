# Queue Profiles

## 📖 Introduction

Queue Profiles are templates that define default behavior for call center queues. Instead of configuring each queue from scratch, apply a profile.

---

## 🎯 Common Use Cases

| Profile | Configuration |
|---------|---------------|
| Standard Support | 5 min max wait, position announcements |
| Sales Aggressive | Ring all, no max wait |
| After Hours | Short wait, fast to voicemail |
| VIP | Priority routing, dedicated agents |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → PBX Settings → Queue Profiles`

![Queue Profiles](../assets/images/settings/pbx/queue-profiles-list.png)

---

## 📝 Form Fields

![Queue Profiles Form](../assets/images/settings/pbx/queue-profiles-form.png)

### General Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Profile name | `Standard Support` |
| **Description** | Purpose notes | `Default support queue settings` |
| **Ring Strategy** | Default distribution | `Longest Idle` |
| **Ring Timeout** | Seconds before next agent | `15` |
| **Wrapup Time** | Seconds after call | `10` |
| **Enabled** | Profile is active | `Yes` |

### Announcements

| Field | Description | Example |
|-------|-------------|---------|
| **Welcome Message** | Queue entry greeting | `default` |
| **Wait Music** | Hold music category | `default` |
| **Position Announce** | Announce queue position | `Every 30 sec` |
| **Wait Time Announce** | Announce estimated wait | `Yes` |

### Timeouts

| Field | Description | Example |
|-------|-------------|---------|
| **Max Wait** | Maximum queue time (sec) | `300` |
| **Max Wait Action** | Where to route after max | `Voicemail` |
| **No Agents Action** | Route if no agents available | `Announcement` |

---

## 💡 Tips

> [!TIP]
> **Create profiles for each department**: Support, Sales, Billing.

> [!TIP]
> **Clone and modify**: Duplicate existing profiles for similar needs.

---

## 🔗 Related Modules

- [Queues](../05-call-center/queues.md) — Apply profiles to queues
- [Agents](../05-call-center/agents.md) — Queue members

---

*← Previous: [Voicemail Settings](voicemail-settings.md) | Next: [CDR Settings](cdr-settings.md) →*
