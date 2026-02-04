# Direct Route

## 📖 Introduction

Direct Route passes calls directly to a trunk without dial plan processing. Use for dedicated trunk access or pass-through connections.

---

## 🎯 Common Use Cases

| Scenario | Purpose |
|----------|---------|
| Dedicated trunk lines | Direct access to specific provider |
| Trunk pass-through | Bypass dial plan for certain calls |
| Legacy system integration | Connect to external PBX |
| Emergency backup | Direct route when dial plan fails |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Direct Route`

![Direct Route](../../assets/images/pbx/applications/direct-route-list.png)

---

## 📝 Form Fields

![Direct Route Form](../../assets/images/pbx/applications/direct-route-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Route identifier | `Emergency Bypass` |
| **Gateway** | Target trunk | `Twilio Primary` |
| **Prefix** | Digits to add | `1` |
| **Strip Digits** | Digits to remove | `0` |
| **Caller ID** | Override CID | `+15551234567` |
| **Enabled** | Route is active | `Yes` |

---

## 🚀 Practical Example

### Dedicated Provider Line

Route certain extensions directly through a specific trunk:

| Field | Value |
|-------|-------|
| Name | `VIP Direct Trunk` |
| Gateway | `Premium Carrier` |
| Prefix | (none) |
| Enabled | `Yes` |

---

## 💡 Tips

> [!TIP]
> **Use for failover**: Create direct routes as emergency backup.

> [!WARNING]
> **Bypasses dial plan**: Make sure you understand the implications.

---

## 🔗 Related Modules

- [Gateways](../03-pbx-routing/gateways.md) — Trunk configuration
- [Outbound Routes](../03-pbx-routing/outbound-routes.md) — Standard routing
