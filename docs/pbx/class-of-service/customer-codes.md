# Customer Codes

## 📖 Introduction

Customer Codes (also called Account Codes) allow users to tag calls with a billing code. This is useful for cost allocation, client billing, or project tracking.

**Example:** Before making a client call, user enters code `ACME-001` so the call appears in reports under that client.

---

## 🎯 Common Use Cases

| Scenario | Customer Code |
|----------|---------------|
| Bill client for calls | Client project code |
| Department accounting | Department code |
| Case/ticket tracking | Case number |
| Project billing | Project ID |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Class of Service → Customer Codes`

![Customer Codes](../../assets/images/pbx/class-of-service/customer-codes-list.png)

---

## 📝 Form Fields

![Customer Codes Form](../../assets/images/pbx/class-of-service/customer-codes-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Code description | `Acme Corporation` |
| **Code** | Billing code | `ACME-001` |
| **Client** | Associated client | `Acme Corp` |
| **Validate** | Require entry before outbound | `No` |
| **Enabled** | Code is active | `Yes` |

---

## 🚀 Practical Example

### Track Calls for Client Billing

1. Create customer code `ACME-001` for Acme Corporation
2. Configure extensions to prompt for customer code on outbound calls
3. When user dials, they enter `ACME-001`
4. CDR reports show all calls tagged with that code
5. Bill client based on CDR totals

---

## 💡 Tips

> [!TIP]
> **Use consistent naming**: `CLIENT-PROJECTNUMBER` format works well.

> [!TIP]
> **Review CDR reports**: Filter by customer code for billing.

---

## 🔗 Related Modules

- [CDR Reports](../09-reports/cdr.md) — Filter by customer code
- [Extensions](../01-pbx-extensions/extensions.md) — Account code settings

---

*← Previous: [Feature Categories](feature-categories.md)*
