# Voice Guide

## 📖 Introduction

Voice Guide generates audio files for extension name announcements. These play when callers dial by name or when using company directory.

**Example:** "You have reached the mailbox of John Smith..."

---

## 🎯 Common Use Cases

| Feature | Uses Voice Guide |
|---------|-----------------|
| Dial-by-name directory | "Press 1 for John Smith" |
| Voicemail greetings | Auto-generated name |
| Call announcements | "Call from John Smith" |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Voicemail → Voice Guide`

![Voice Guide](../assets/images/settings/voice-prompts/voice-guide-list.png)

---

## 📝 Generate Voice Files

<!-- [IMG: voice-guide-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Extensions** | Which extensions | `All` or `1000-1099` |
| **Voice** | TTS voice to use | `alloy` |
| **Overwrite** | Replace existing | `No` |

### Generation Process

1. Click **Generate Voice Guide**
2. System processes each extension
3. Progress bar shows completion
4. Files are created for each extension

---

## 💡 Tips

> [!TIP]
> **Run after bulk import**: Generate names for new extensions.

> [!TIP]
> **Re-generate after name changes**: Update when employees change.

---

## 🔗 Related Modules

- [Extensions](../01-pbx-extensions/extensions.md) — Extension names
- [Recording Management](recording-management.md) — Audio storage

---

*← Previous: [Music on Hold](music-on-hold.md) | Next: [Call Recording Settings](call-recording-settings.md) →*
