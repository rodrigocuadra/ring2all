# API Keys

## 📖 Introduction

API Keys provide authentication for programmatic access to the PBX API. External systems can integrate using these keys.

---

## 🎯 Use Cases

| Integration | API Usage |
|-------------|-----------|
| CRM sync | Create/update extensions |
| Monitoring | Query call statistics |
| Automation | Trigger actions from scripts |
| Reporting | Export CDR data |

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → System → API Keys`

<!-- [IMG: menu-navigation-api-keys] -->

---

## 📝 Form Fields

<!-- [IMG: api-keys-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Key identifier | `CRM Integration` |
| **Description** | Purpose notes | `HubSpot sync` |
| **Permissions** | API access level | `Read Only` or `Full Access` |
| **IP Whitelist** | Allowed IP addresses | `192.168.1.100` |
| **Expires** | Expiration date | `2027-01-01` |
| **Enabled** | Key is active | `Yes` |

### API Key Display

After creation, the key is shown once:

```
API Key: sk-abc123def456ghi789jkl012mno345pqr678
```

> [!WARNING]
> **Save immediately**: Key is only shown once!

---

## 🚀 Practical Example

### Create Read-Only Key for Reporting

| Field | Value |
|-------|-------|
| Name | `Reporting Dashboard` |
| Permissions | `Read Only` |
| IP Whitelist | `10.0.0.50` |
| Expires | `2027-12-31` |

---

## 💡 Tips

> [!TIP]
> **Use IP whitelisting**: Restrict where API can be used.

> [!TIP]
> **Set expiration**: Don't create permanent keys.

> [!TIP]
> **Minimal permissions**: Grant only what's needed.

> [!WARNING]
> **Keep keys secret**: Treat like passwords.

---

## 🔗 Related Modules

- [Users](users.md) — User authentication
- [Audit Log](audit-log.md) — API activity tracking

---

*← Previous: [Audit Log](audit-log.md) | Next: [Backup & Restore](backup-restore.md) →*
