# Caller ID Lookup

## 📖 Introduction

Caller ID Lookup queries external databases to get the caller's name. This displays helpful information on the phone screen when calls arrive.

---

## 🎯 Common Use Cases

| Lookup Source | Information |
|---------------|-------------|
| CNAM database | Caller name |
| CRM integration | Customer name + account |
| Internal directory | Employee names |
| Google Contacts | Personal contacts |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Incoming Tools → Caller ID Lookup`

<!-- [IMG: menu-navigation-cid-lookup] -->

---

## 📝 Form Fields

<!-- [IMG: cid-lookup-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Source name | `OpenCNAM` |
| **Type** | Lookup type | `HTTP API` |
| **URL** | API endpoint | `https://api.opencnam.com/v3/...` |
| **API Key** | Authentication | `your-api-key` |
| **Timeout** | Max wait (ms) | `500` |
| **Cache** | Store results | `Yes` |
| **Cache TTL** | Cache duration (hours) | `24` |
| **Enabled** | Source is active | `Yes` |

---

## 🚀 Practical Example

### Configure OpenCNAM Lookup

| Field | Value |
|-------|-------|
| Name | `OpenCNAM` |
| Type | `HTTP API` |
| URL | `https://api.opencnam.com/v3/phone/{{number}}` |
| API Key | `your-key` |
| Timeout | `500` |
| Cache | `Yes` |

Now incoming calls display the caller's name from the CNAM database.

---

## 💡 Tips

> [!TIP]
> **Use caching**: Reduces API costs and speeds lookups.

> [!TIP]
> **Set short timeout**: Long lookups delay call ringing.

> [!TIP]
> **Internal directory first**: Free and faster than external lookups.

---

## 🔗 Related Modules

- [Inbound Routes](../03-pbx-routing/inbound-routes.md) — Where lookups apply
- [Extensions](../01-pbx-extensions/extensions.md) — Caller ID display

---

*← Previous: [Dynamic Routing](dynamic-routing.md) | Next: [Reminder Calls](reminder-calls.md) →*
