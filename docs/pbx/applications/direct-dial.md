# Direct Dial (DID Mapping)

## 📖 Introduction

Direct Dial maps external phone numbers (DIDs) directly to internal extensions. When someone calls a specific external number, it rings directly to the assigned extension — no IVR or receptionist needed.

---

## 🎯 Common Use Cases

| Scenario | Configuration |
|----------|---------------|
| Executive direct line | DID → Extension |
| Dedicated support line | DID → Extension 2001 |
| Personal business lines | Each salesperson gets a DID |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Direct Dial`

![Direct Dial](../../assets/images/pbx/applications/direct-dial-list.png)

---

## 📝 Form Fields

![Direct Dial Form](../../assets/images/pbx/applications/direct-dial-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Identifier | `John's Direct Line` |
| **DID Number** | External phone number | `+15551234567` |
| **Extension** | Internal extension to ring | `1001` |
| **Enabled** | Mapping is active | `Yes` |

---

## 🚀 Practical Example

### Give John a Direct Line

| Field | Value |
|-------|-------|
| DID Number | `+15551234001` |
| Extension | `1001 (John Smith)` |

Now when customers dial +1-555-123-4001, John's phone rings directly.

---

## 💡 Tips

> [!TIP]
> Use for sales teams where customers need direct access.

> [!TIP]
> Combine with voicemail for personal answering.

---

## 🔗 Related Modules

- [Extensions](../01-pbx-extensions/extensions.md) — Configure the destination extension
- [Inbound Routes](../03-pbx-routing/inbound-routes.md) — Manual DID routing

---

*← Previous: [Feature Codes](feature-codes.md) | Next: [DISA](disa.md) →*
