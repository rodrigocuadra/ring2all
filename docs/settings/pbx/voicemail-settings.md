# Voicemail Settings

## 📖 Introduction

Voicemail Settings configures system-wide voicemail behavior including greetings, storage, email notifications, and transcription.

---

## 🎯 Settings Overview

| Setting | Purpose |
|---------|---------|
| Default greeting | Played when no personal greeting set |
| Email notifications | Send voicemail to email as audio |
| Transcription | Convert voicemail to text |
| Retention | How long to keep messages |
| Max message length | Maximum recording time |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Voicemail → Voicemail Settings`

![Voicemail Settings](../assets/images/settings/pbx/voicemail-settings-list.png)

---

## 📝 Form Fields

### General Tab

<!-- [IMG: voicemail-settings-general] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Max Message Length** | Maximum recording seconds | `180` |
| **Min Message Length** | Minimum to save | `3` |
| **Max Messages** | Messages per mailbox | `100` |
| **Message Retention** | Days to keep messages | `30` |
| **Operator Extension** | Press 0 destination | `0` |

### Notifications Tab

<!-- [IMG: voicemail-settings-notifications] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Email from Address** | Sender email | `voicemail@company.com` |
| **Attach Audio** | Include audio file | `Yes` |
| **Audio Format** | MP3 or WAV | `MP3` |
| **Delete After Email** | Remove after sending | `No` |

### Transcription Tab

<!-- [IMG: voicemail-settings-transcription] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Enable Transcription** | Convert voice to text | `Yes` |
| **AI Provider** | Transcription service | `OpenAI Whisper` |
| **Language** | Primary language | `English` |

---

## 💡 Tips

> [!TIP]
> **Enable transcription**: Read messages without listening.

> [!TIP]
> **Use MP3**: Smaller email attachments than WAV.

> [!WARNING]
> **Don't delete after email**: Keep originals as backup.

---

## 🔗 Related Modules

- [Extensions](../01-pbx-extensions/extensions.md) — Individual VM settings
- [Recording Management](recording-management.md) — Audio file storage

---

*Next: [Recording Management](recording-management.md) →*
