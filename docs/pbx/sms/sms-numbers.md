# SMS Numbers

## 📖 Introduction

SMS Numbers are the phone numbers enabled for text messaging. Assign numbers to extensions for two-way SMS communication.

---

## 🖥️ Accessing the Module

**Navigation:** `SMS → Numbers`

![Sms Numbers](../../assets/images/pbx/sms/numbers-list.png)

---

## 📝 Form Fields

![Sms Numbers Form](../../assets/images/pbx/sms/numbers-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Number** | Phone number | `+15551234567` |
| **Provider** | SMS carrier | `Twilio` |
| **Assigned To** | Extension | `1001` |
| **Type** | Local/Toll-free | `Local` |
| **Enabled** | Number is active | `Yes` |

---

## 🚀 Practical Example

### Assign SMS to Sales

| Field | Value |
|-------|-------|
| Number | `+15559876543` |
| Provider | `Twilio Primary` |
| Assigned To | `Sales Queue (1500)` |

Sales team receives SMS to shared inbox.

---

## 💡 Tips

> [!TIP]
> **One number per group**: Share across team.

> [!TIP]
> **Use toll-free for marketing**: Better deliverability.

---

## 🔗 Related Modules

- [SMS Providers](sms-providers.md) — Provider setup
- [SMS Conversations](../07-communications/sms-conversations.md) — Message threads
