# Email Settings

## 📖 Introduction

Email Settings configures how the system sends emails — voicemail notifications, fax delivery, alerts, and reports.

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Email Settings`

![Email Settings](../assets/images/admin/system-settings/email-settings-list.png)

---

## 📝 Form Fields

### SMTP Configuration

<!-- [IMG: email-settings-smtp] -->

| Field | Description | Example |
|-------|-------------|---------|
| **SMTP Host** | Email server | `smtp.gmail.com` |
| **SMTP Port** | Server port | `587` |
| **Encryption** | TLS or SSL | `TLS` |
| **Username** | SMTP login | `pbx@company.com` |
| **Password** | SMTP password | `your-password` |
| **From Address** | Sender email | `pbx@company.com` |
| **From Name** | Sender name | `Ring2All PBX` |

### Email Templates

| Template | Used For |
|----------|----------|
| Voicemail Notification | New voicemail alerts |
| Fax Notification | Incoming fax delivery |
| Password Reset | User password resets |
| Recording Ready | Recording notifications |

---

## 🚀 Practical Example

### Configure Gmail SMTP

| Field | Value |
|-------|-------|
| SMTP Host | `smtp.gmail.com` |
| SMTP Port | `587` |
| Encryption | `TLS` |
| Username | `pbx@yourcompany.com` |
| Password | `App Password` |

> [!NOTE]
> Gmail requires an "App Password" when using 2FA.

---

## 💡 Tips

> [!TIP]
> **Test email**: Use the "Send Test Email" button.

> [!TIP]
> **Use dedicated email**: Create a service account for PBX.

---

## 🔗 Related Modules

- [Voicemail Settings](../08-voicemail-audio/voicemail-settings.md) — Voicemail emails
- [General Settings](general-settings.md) — Company info

---

*← Previous: [General Settings](general-settings.md) | Next: [Security Settings](security-settings.md) →*
