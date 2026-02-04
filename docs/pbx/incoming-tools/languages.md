# Languages

## 📖 Introduction

Languages configures which voice prompt languages are available in the system. Different IVRs and features can use different languages.

---

## 🎯 Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English (US) | `en-us` | Built-in |
| Spanish | `es` | Built-in |
| French | `fr` | Built-in |
| German | `de` | Built-in |
| Portuguese | `pt` | Built-in |
| Italian | `it` | Optional |
| Chinese | `zh` | Optional |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Tools → Languages`

![Languages](../../assets/images/pbx/incoming-tools/languages-list.png)

---

## 📝 Form Fields

![Languages Form](../../assets/images/pbx/incoming-tools/languages-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Language** | Language name | `Spanish` |
| **Code** | ISO code | `es` |
| **Voice** | TTS voice | `Sofia` |
| **Default** | System default | `No` |
| **Enabled** | Language available | `Yes` |

---

## 🚀 Practical Example

### Enable Spanish

1. Find Spanish in language list
2. Set Enabled: `Yes`
3. Select TTS voice: `Sofia`
4. Save

Now IVRs can use Spanish prompts.

---

## 💡 Tips

> [!TIP]
> **Download prompts**: Some languages need prompt packs.

> [!TIP]
> **Test TTS voices**: Different voices have different qualities.

---

## 🔗 Related Modules

- [IVRs](../02-pbx-applications/ivrs.md) — Multi-language menus
- [Voice Guide](../08-voicemail-audio/voice-guide.md) — System prompts
