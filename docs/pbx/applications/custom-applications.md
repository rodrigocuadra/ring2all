# Custom Applications

## 📖 Introduction

Custom Applications allow you to route calls through custom Lua scripts for advanced logic. This is for advanced use cases that can't be handled by standard IVRs or routing.

**Examples:**
- Look up caller in database and route based on account status
- Integration with external APIs (CRM, ticketing systems)
- Complex time-based routing with multiple conditions
- Custom IVR logic with dynamic prompts

---

## 🎯 Common Use Cases

| Scenario | Custom Logic |
|----------|-------------|
| VIP caller routing | Check database for VIP status |
| Account balance announcements | Query billing system |
| Appointment reminders | Check scheduling system |
| Survey after call | Collect and store responses |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Custom Applications`

![Custom Applications](../../assets/images/pbx/applications/custom-applications-list.png)

---

## 📝 Form Fields

![Custom Applications Form](../../assets/images/pbx/applications/custom-applications-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Application identifier | `VIP Lookup` |
| **Extension** | Number to reach this app | `9100` |
| **Script Path** | Path to Lua script | `/scripts/vip_lookup.lua` |
| **Arguments** | Parameters to pass to script | `api_url=http://...` |
| **Enabled** | Application is active | `Yes` |

---

## 💡 Tips

> [!WARNING]
> Custom Applications require Lua programming knowledge. Work with your system administrator or developer.

> [!TIP]
> Test scripts thoroughly in a development environment first.

---

## 🔗 Related Modules

- [IVRs](ivrs.md) — For standard menu routing
- [Dynamic Destinations](dynamic-destinations.md) — HTTP-based routing

---

*← Previous: [DISA](disa.md) | Next: [Callback System](callback-system.md) →*
