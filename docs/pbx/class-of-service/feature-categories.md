# Feature Categories

## 📖 Introduction

Feature Categories group related PBX features together for permission management. Instead of enabling features one by one, assign categories to Class of Service profiles.

---

## 🎯 Common Use Cases

| Category | Includes |
|----------|----------|
| Basic Calling | Make/receive calls |
| Voicemail | VM access, VM to email |
| Call Forwarding | Forward always, on busy, no answer |
| Recording | On-demand recording |
| Advanced | Transfer, conference, park |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Class of Service → Feature Categories`

![Feature Categories](../../assets/images/pbx/class-of-service/feature-categories-list.png)

---

## 📝 Form Fields

![Feature Categories Form](../../assets/images/pbx/class-of-service/feature-categories-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Category name | `Advanced Features` |
| **Description** | Notes | `Transfer, conference, park` |
| **Features** | List of included features | (see below) |
| **Enabled** | Category is active | `Yes` |

### Available Features

- Blind Transfer
- Attended Transfer  
- Conference
- Call Park
- Call Pickup
- Intercom
- Voicemail Access
- Call Recording
- Do Not Disturb

---

## 💡 Tips

> [!TIP]
> **Create role-based categories**: Sales, Support, Executives, etc.

---

## 🔗 Related Modules

- [Class of Services](class-of-services.md) — Assign categories
- [Feature Codes](../02-pbx-applications/feature-codes.md) — Dial codes for features

---

*← Previous: [Route Selections](route-selections.md) | Next: [Customer Codes](customer-codes.md) →*
