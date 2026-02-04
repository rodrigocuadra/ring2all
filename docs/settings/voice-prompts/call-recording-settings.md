# Call Recording Settings

## 📖 Introduction

Call Recording Settings configures system-wide recording behavior including storage, retention, transcription, and compliance settings.

---

## 🎯 Recording Overview

| Setting | Purpose |
|---------|---------|
| Storage location | Where recordings are saved |
| Retention period | How long to keep recordings |
| Format | Audio quality and format |
| Transcription | Speech-to-text conversion |
| Encryption | Recording security |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Voicemail → Call Recording Settings`

<!-- [IMG: menu-navigation-call-recording-settings] -->

---

## 📝 Form Fields

### Storage Tab

<!-- [IMG: call-recording-settings-storage] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Storage Type** | Local or cloud | `Local` |
| **Path** | Storage directory | `/recordings` |
| **Format** | Audio format | `WAV` |
| **Quality** | Recording quality | `High (44kHz)` |

### Retention Tab

<!-- [IMG: call-recording-settings-retention] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Retention Days** | Days to keep recordings | `90` |
| **Auto Delete** | Delete after retention | `Yes` |
| **Archive Before Delete** | Save to archive first | `Yes` |

### Transcription Tab

<!-- [IMG: call-recording-settings-transcription] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Enable Transcription** | Make text transcripts | `Yes` |
| **AI Provider** | Transcription service | `OpenAI Whisper` |
| **Language** | Recording language | `English` |

---

## 💡 Tips

> [!TIP]
> **Balance quality vs storage**: Higher quality = more disk space.

> [!TIP]
> **Enable transcription**: Searchable call content.

> [!WARNING]
> **Legal compliance**: Some jurisdictions require consent for recording.

---

## 🔗 Related Modules

- [Extensions](../01-pbx-extensions/extensions.md) — Per-extension recording
- [CDR Reports](../09-reports/cdr.md) — Access recordings

---

*← Previous: [Voice Guide](voice-guide.md)*
