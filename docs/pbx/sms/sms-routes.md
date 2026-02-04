# SMS Routes

## 📖 Introduction

SMS Routes determine which provider sends messages to which destinations. Route by country, area code, or number pattern.

---

## 🎯 Common Uses

| Route | Purpose |
|-------|---------|
| US/Canada | Domestic messages |
| International | Specific provider |
| Toll-free | Special handling |
| Short codes | Marketing campaigns |

---

## 🖥️ Accessing the Module

**Navigation:** `SMS → Routes`

![Sms Routes](../../assets/images/pbx/sms/routes-list.png)

---

## 📝 Form Fields

![Sms Routes Form](../../assets/images/pbx/sms/routes-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Route name | `US Domestic` |
| **Pattern** | Number pattern | `^+1` |
| **Provider** | SMS carrier | `Twilio` |
| **Priority** | Route order | `1` |
| **Enabled** | Route is active | `Yes` |

---

## 🚀 Practical Example

### Route International via Plivo

| Field | Value |
|-------|-------|
| Name | `International` |
| Pattern | `^+[^1]` |
| Provider | `Plivo International` |
| Priority | `2` |

Non-US numbers go through international provider.

---

## 💡 Tips

> [!TIP]
> **Priority matters**: Lower number = higher priority.

> [!TIP]
> **Cost optimize**: Different providers for different destinations.

---

## 🔗 Related Modules

- [SMS Providers](sms-providers.md) — Provider config
- [SMS Settings](sms-settings.md) — Global settings
