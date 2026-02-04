# Email Templates

## 📖 Introduction

Email Templates customize the content of system-generated emails — voicemail notifications, password resets, and alerts.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → System → Email Templates`

![Email Templates](../../assets/images/admin/system-settings/email-template-list.png)

---

## 📝 Available Templates

| Template | Purpose |
|----------|---------|
| **Voicemail** | New voicemail notification |
| **Fax** | Incoming fax notification |
| **Password Reset** | User password reset |
| **Recording Ready** | Recording available |
| **System Alert** | System notifications |
| **Queue Callback** | Callback notification |

---

## 📝 Template Editor

![Email Templates Editor](../../assets/images/admin/system-settings/email-template-form.png)

| Field | Description |
|-------|-------------|
| **Subject** | Email subject line |
| **Body** | Email content (HTML) |
| **Variables** | Dynamic placeholders |

### Available Variables

| Variable | Replaced With |
|----------|---------------|
| `{{caller_name}}` | Caller's name |
| `{{caller_number}}` | Caller's number |
| `{{date}}` | Date/time |
| `{{extension}}` | Extension number |
| `{{duration}}` | Call duration |
| `{{link}}` | Download link |

---

## 🚀 Practical Example

### Custom Voicemail Template

```
Subject: New Voicemail from {{caller_name}}

Hi {{extension_name}},

You have a new voicemail:
- From: {{caller_name}} ({{caller_number}})
- Date: {{date}}
- Duration: {{duration}}

Listen: {{link}}
```

---

## 💡 Tips

> [!TIP]
> **Keep it simple**: Clear, concise emails.

> [!TIP]
> **Test templates**: Send test emails after changes.

---

## 🔗 Related Modules

- [Email Settings](../10-settings/email-settings.md) — SMTP config
- [Voicemail Settings](../08-voicemail-audio/voicemail-settings.md) — Voicemail config
