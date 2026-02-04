# Recording Management

## 📖 Introduction

Recording Management is the central location for all audio files used by your phone system: IVR greetings, announcements, music on hold, voicemail greetings, and more.

---

## 🎯 Audio File Types

| Type | Used For |
|------|----------|
| IVR Greetings | "Press 1 for Sales..." |
| Announcements | Pre-call messages |
| Music on Hold | Hold music |
| Voicemail Greetings | Personal greetings |
| System Prompts | "Please leave a message" |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Voicemail → Recording Management`

![Recording Management](../assets/images/settings/voice-prompts/recording-management-list.png)

---

## 📝 Managing Recordings

### Upload Audio

<!-- [IMG: recording-management-upload] -->

1. Click **+ Upload**
2. Select audio file (WAV or MP3)
3. Enter name and category
4. Click Upload

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Recording name | `Main IVR Greeting` |
| **Category** | Organization folder | `IVR Greetings` |
| **File** | Audio file | `greeting.wav` |

### Generate from Text (TTS)

<!-- [IMG: recording-management-tts] -->

1. Click **+ Generate**
2. Enter text to speak
3. Select voice profile
4. Click Generate
5. Preview and save

| Field | Description | Example |
|-------|-------------|---------|
| **Text** | What to say | `Welcome to Acme Corp...` |
| **Voice** | TTS voice | `alloy` |
| **Speed** | Speaking speed | `1.0` |

---

## 📝 Audio Requirements

| Property | Recommendation |
|----------|----------------|
| Format | WAV (preferred) or MP3 |
| Sample Rate | 8kHz or 16kHz |
| Channels | Mono |
| Quality | Clear, no background noise |

---

## 🚀 Practical Example

### Create IVR Greeting

**Option A: Upload Recording**
1. Record using professional voice talent
2. Export as 16kHz mono WAV
3. Upload to Recording Management
4. Assign to IVR

**Option B: Generate with TTS**
1. Write script: "Thank you for calling Acme Corporation..."
2. Generate with professional voice
3. Preview and adjust
4. Assign to IVR

---

## 💡 Tips

> [!TIP]
> **Professional voice**: Consider hiring voice talent for main greetings.

> [!TIP]
> **TTS for flexibility**: Easy to update without re-recording.

> [!TIP]
> **Organize by category**: Makes finding recordings easier.

> [!WARNING]
> **Test audio quality**: Poor quality reflects badly on your business.

---

## 🔗 Related Modules

- [IVRs](../02-pbx-applications/ivrs.md) — Use recordings
- [Announcements](../02-pbx-applications/announcements.md) — Use recordings
- [Music on Hold](music-on-hold.md) — Hold music

---

*← Previous: [Voicemail Settings](voicemail-settings.md) | Next: [Music on Hold](music-on-hold.md) →*
