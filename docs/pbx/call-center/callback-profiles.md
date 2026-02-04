# Callback Profiles

## 📖 Introduction

Callback Profiles define the behavior of callbacks — how calls are placed back to customers who requested callbacks.

---

## 🎯 Common Use Cases

| Profile | Configuration |
|---------|---------------|
| Standard | Call immediately when agent available |
| Scheduled | Call at specific time |
| Business Hours | Only during work hours |
| Priority | Faster callback for VIPs |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Call Center → Callback Profiles`

![Callback Profiles](../../assets/images/pbx/call-center/callback-profiles-list.png)

---

## 📝 Form Fields

![Callback Profiles Form](../../assets/images/pbx/call-center/callback-profiles-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Profile name | `Standard Callback` |
| **Caller ID** | Number shown when calling back | `Main Line` |
| **Delay** | Minutes before first attempt | `1` |
| **Max Attempts** | Total callback tries | `3` |
| **Retry Interval** | Minutes between retries | `15` |
| **Ring Timeout** | How long to ring customer | `30` |
| **No Answer Action** | What if customer doesn't answer | `Retry` |
| **Enabled** | Profile is active | `Yes` |

### Time Restrictions

| Field | Description | Example |
|-------|-------------|---------|
| **Hours Active** | When callbacks can occur | `9 AM - 6 PM` |
| **Days Active** | Which days | `Mon-Fri` |

---

## 🚀 Practical Example

### Business Hours Callback

| Field | Value |
|-------|-------|
| Name | `Business Hours` |
| Caller ID | `Support Line` |
| Max Attempts | `3` |
| Retry Interval | `30` min |
| Hours Active | `9 AM - 5 PM` |
| Days Active | `Monday - Friday` |

If customer requests callback after 5 PM, it waits until 9 AM next business day.

---

## 💡 Tips

> [!TIP]
> **Use recognizable caller ID**: Customers need to know it's you.

> [!TIP]
> **Avoid too-early callbacks**: Respect business hours and timezones.

---

## 🔗 Related Modules

- [Callback Rules](callback-rules.md) — When to offer callbacks
- [Queues](queues.md) — Queue callback settings

---

*← Previous: [Callback Rules](callback-rules.md)*
