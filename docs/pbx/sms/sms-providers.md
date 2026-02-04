# SMS Providers

## 📖 Introduction

SMS Providers configure the carriers that send and receive text messages. Connect to Twilio, Telnyx, or other SMS gateways.

---

## 🎯 Supported Providers

| Provider | Features |
|----------|----------|
| Twilio | SMS, MMS, Delivery reports |
| Telnyx | SMS, Toll-free |
| Bandwidth | SMS, High volume |
| Plivo | SMS, International |
| Custom | Webhook-based |

---

## 🖥️ Accessing the Module

**Navigation:** `SMS → Providers`

![Sms Providers](../../assets/images/pbx/sms/providers-list.png)

---

## 📝 Form Fields

![Sms Providers Form](../../assets/images/pbx/sms/providers-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Provider name | `Twilio Primary` |
| **Type** | Carrier | `Twilio` |
| **Account SID** | API credential | `ACxxxx` |
| **Auth Token** | API secret | `your-token` |
| **Default** | Default provider | `Yes` |
| **Enabled** | Provider is active | `Yes` |

---

## 🚀 Practical Example

### Configure Twilio

1. Get credentials from Twilio console
2. Create provider:
   - Type: Twilio
   - Account SID: `ACxxxx`
   - Auth Token: `your-token`
3. Test with sample message

---

## 💡 Tips

> [!TIP]
> **Multiple providers**: Set up backup for reliability.

> [!TIP]
> **Test before production**: Send test messages first.

---

## 🔗 Related Modules

- [SMS Numbers](sms-numbers.md) — Phone numbers
- [SMS Routes](sms-routes.md) — Message routing
