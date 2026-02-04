# Dynamic Destinations

## 📖 Introduction

Dynamic Destinations route calls based on real-time data from an HTTP API or database. The system queries an external source and routes the call based on the response.

**Examples:**
- Route based on customer account status
- Check appointment system and route to assigned technician
- Load balancing between offices based on queue length

---

## 🎯 Common Use Cases

| Scenario | Data Source |
|----------|-------------|
| Route VIP customers to premium support | CRM API |
| Route by account type (free vs paid) | Billing system |
| Route to assigned agent | Ticketing system |
| Failover based on availability | Monitoring API |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Dynamic Destinations`

<!-- [IMG: menu-navigation-dynamic-destinations] -->

---

## 📝 Form Fields

<!-- [IMG: dynamic-destinations-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Destination identifier | `CRM Lookup Route` |
| **Extension** | Internal access number | `9200` |
| **Lookup Type** | **HTTP** or **Database** | `HTTP` |
| **URL** | API endpoint (for HTTP) | `https://crm.company.com/api/route` |
| **Timeout** | Seconds to wait for response | `5` |
| **Default Destination** | Where to route if lookup fails | `IVR: Main Menu` |
| **Enabled** | Destination is active | `Yes` |

---

## 💡 Tips

> [!WARNING]
> Ensure your API is fast (under 2 seconds) to avoid caller frustration.

> [!TIP]
> Always set a reliable default destination for failures.

---

## 🔗 Related Modules

- [Custom Applications](custom-applications.md) — More complex routing logic
- [IVRs](ivrs.md) — Standard menu routing

---

*← Previous: [Voicemail Broadcast](voicemail-broadcast.md)*
