# CRM Integrations

## 📖 Introduction

CRM Integrations connect Ring2All with your Customer Relationship Management system. Enable click-to-call, automatic contact lookup, and call logging.

---

## 🎯 Supported CRMs

| CRM | Features |
|-----|----------|
| HubSpot | Click-to-call, contact pop, call logging |
| Salesforce | Click-to-call, contact pop, call logging |
| Zoho CRM | Click-to-call, contact pop |
| Custom | Webhook integration |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → CRM → CRM Integrations`

<!-- [IMG: menu-navigation-crm-integrations] -->

---

## 📝 Form Fields

<!-- [IMG: crm-integrations-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Integration name | `HubSpot CRM` |
| **CRM Type** | System to connect | `HubSpot` |
| **API Key** | CRM API credentials | `your-api-key` |
| **Features** | Enabled features | (see below) |
| **Enabled** | Integration is active | `Yes` |

### Available Features

| Feature | Description |
|---------|-------------|
| **Contact Pop** | Show caller info on incoming |
| **Click-to-Call** | Dial from CRM contact |
| **Call Logging** | Log calls to CRM |
| **Create on Miss** | Create lead on missed call |

---

## 🚀 Practical Example

### HubSpot Integration

1. Get HubSpot API key from your HubSpot account
2. Create integration:
   - CRM Type: HubSpot
   - API Key: `your-key`
   - Enable: Contact Pop, Call Logging
3. Install browser extension for click-to-call

Now:
- Incoming calls show HubSpot contact info
- Calls are automatically logged in HubSpot
- Click phone numbers in HubSpot to dial

---

## 💡 Tips

> [!TIP]
> **Test with one user first**: Verify before rolling out.

> [!TIP]
> **Train staff**: Make sure team knows the features.

> [!TIP]
> **Review call logs**: Verify data is syncing correctly.

---

## 🔗 Related Modules

- [Extensions](../01-pbx-extensions/extensions.md) — User configuration
- [Caller ID Lookup](../06-incoming-tools/caller-id-lookup.md) — Contact lookup

---

*← Previous: [CDR Settings](cdr-settings.md)*
