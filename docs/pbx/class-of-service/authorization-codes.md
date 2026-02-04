# Authorization Codes

## 📖 Introduction

Authorization Codes allow users to override Class of Service restrictions by entering a PIN. A user with limited permissions can temporarily gain access to restricted call types.

**Example:** An employee normally can't dial international, but can enter an authorization code to make a one-time international call.

---

## 🎯 Common Use Cases

| Scenario | How It Helps |
|----------|--------------|
| Traveler needs international call | Enter auth code for one call |
| Temporary project access | Grant access without changing CoS |
| Executive override | Emergency access to all routes |
| Audit trail | Track who used what code |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Class of Service → Authorization Codes`

![Authorization Codes](../../assets/images/pbx/class-of-service/authorization-codes-list.png)

---

## 📝 Form Fields

![Authorization Codes Form](../../assets/images/pbx/class-of-service/authorization-codes-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Code identifier | `Intl Override - John` |
| **Code** | PIN to enter | `987654` |
| **Class of Service** | Permissions granted | `Executive (All)` |
| **Max Uses** | Usage limit (0 = unlimited) | `10` |
| **Expiration** | When code expires | `2026-12-31` |
| **Enabled** | Code is active | `Yes` |

---

## 🚀 Practical Example

### Create Override for International Calls

| Field | Value |
|-------|-------|
| Name | `Project X International` |
| Code | `123456` |
| Class of Service | `International Calling` |
| Max Uses | `20` |
| Expiration | `2026-03-31` |

When the user dials an international number, the system prompts for the auth code. After entering `123456`, the call proceeds.

---

## 💡 Tips

> [!TIP]
> **Set expiration dates**: Prevents forgotten codes from being misused later.

> [!TIP]
> **Use max uses**: Limits potential abuse.

> [!TIP]
> **Check CDR reports**: See who used which auth codes.

---

## 🔗 Related Modules

- [Class of Services](class-of-services.md) — Base permissions
- [PIN Lists](../02-pbx-applications/pin-lists.md) — Alternative authentication

---

*← Previous: [Class of Services](class-of-services.md) | Next: [Dial Rule Restrictions](dial-rule-restrictions.md) →*
