# Telephony Domains

## 📖 Introduction

Telephony Domains are SIP domains that extensions register to. Each tenant typically has a unique telephony domain.

---

## 🎯 How It Works

Extensions register using format:
```
extension@domain.example.com
```

Different domains can share the same FreeSWITCH server while being logically separate.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Multi-Tenant → Telephony Domains`

![Telephony Domains](../../assets/images/admin/multi-tenant/domains-list.png)

---

## 📝 Form Fields

![Telephony Domains Form](../../assets/images/admin/multi-tenant/domains-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Domain identifier | `Main Domain` |
| **Domain** | SIP domain | `pbx.acmecorp.com` |
| **Tenant** | Associated tenant | `Acme Corporation` |
| **Default** | Default for new extensions | `Yes` |
| **Enabled** | Domain is active | `Yes` |

### DNS Requirements

For the domain to work:
- A record pointing to PBX IP
- SRV record for SIP (optional)

```
pbx.acmecorp.com.    A      203.0.113.10
_sip._udp.pbx.acmecorp.com. SRV 0 5 5060 pbx.acmecorp.com.
```

---

## 🚀 Practical Example

### Add Domain for Tenant

| Field | Value |
|-------|-------|
| Name | `Acme SIP Domain` |
| Domain | `sip.acmecorp.com` |
| Tenant | `Acme Corporation` |
| Default | `Yes` |

Extensions in Acme now register to:
```
1001@sip.acmecorp.com
```

---

## 💡 Tips

> [!TIP]
> **Use subdomains**: `sip.company.com` or `pbx.company.com`.

> [!TIP]
> **Add DNS first**: Configure DNS before creating domain.

---

## 🔗 Related Modules

- [Tenants](tenants.md) — Tenant management
- [SIP Profiles](../10-settings/sip-profiles.md) — SIP configuration
- [Extensions](../01-pbx-extensions/extensions.md) — User registration

---

*← Previous: [Tenants](tenants.md) | Next: [Firewall Settings](firewall-settings.md) →*
