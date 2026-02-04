# Tenants

## 📖 Introduction

Tenants are separate organizations within a shared Ring2All installation. Each tenant has isolated data, extensions, and settings. Use for hosting multiple companies or departments.

---

## 🎯 Multi-Tenant Architecture

| Tenant | Isolated Resources |
|--------|-------------------|
| Acme Corp | Extensions 1000-1999 |
| Widget Inc | Extensions 2000-2999 |
| Tech Co | Extensions 3000-3999 |

Each tenant can only see and manage their own resources.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Multi-Tenant → Tenants`

![Tenants](../../assets/images/admin/multi-tenant/tenants-list.png)

---

## 📝 Form Fields

![Tenants Form](../../assets/images/admin/multi-tenant/tenants-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Tenant name | `Acme Corporation` |
| **Slug** | URL-safe identifier | `acme-corp` |
| **Domain** | Tenant domain | `acme.pbx.example.com` |
| **Admin Email** | Tenant admin contact | `admin@acme.com` |
| **Max Extensions** | Extension limit | `100` |
| **Max Calls** | Concurrent call limit | `25` |
| **Enabled** | Tenant is active | `Yes` |

### Limits

| Limit | Description | Example |
|-------|-------------|---------|
| **Extensions** | Total extensions | `100` |
| **Concurrent Calls** | Simultaneous calls | `25` |
| **Recording Storage** | GB of recordings | `50` |
| **SMS Messages** | Monthly SMS limit | `1000` |

---

## 🚀 Practical Example

### Add New Customer Tenant

| Field | Value |
|-------|-------|
| Name | `Widget Inc` |
| Slug | `widget-inc` |
| Domain | `widget.pbx.example.com` |
| Max Extensions | `50` |
| Max Calls | `10` |

---

## 💡 Tips

> [!TIP]
> **Set appropriate limits**: Match to subscription tier.

> [!TIP]
> **Monitor usage**: Check tenants approaching limits.

---

## 🔗 Related Modules

- [Telephony Domains](telephony-domains.md) — SIP domains
- [Users](users.md) — Tenant admin accounts

---

*Next: [Telephony Domains](telephony-domains.md) →*
