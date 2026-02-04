# AI Profiles

## 📖 Introduction

AI Profiles are templates that define AI behavior and voice settings. They can be reused across multiple AI Agents to ensure consistency.

**What AI Profiles control:**
- AI model selection (GPT-4o, GPT-4o-mini)
- Voice selection (alloy, echo, nova, shimmer, etc.)
- Temperature (creativity level)
- Text-to-speech settings
- Transcription settings

---

## 🎯 Common Use Cases

| Profile | Purpose |
|---------|---------|
| Professional Voice | Formal business tone |
| Friendly Support | Warm, helpful tone |
| Quick Responses | Low-latency interactions |
| High Quality | Best voice and model quality |

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → AI Integration → AI Profiles`

![Ai Profiles](../../assets/images/admin/ai-integration/ai-profiles-list.png)

---

## 📝 Form Fields

### General Tab

![Ai Profiles Form General Tab](../../assets/images/admin/ai-integration/ai-profiles-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Profile identifier | `Professional Voice` |
| **Description** | Notes about usage | `For customer-facing agents` |
| **AI Provider** | Which provider to use | `OpenAI Production` |
| **Model** | AI model | `gpt-4o-realtime-preview` |
| **Temperature** | Creativity (0.0-2.0) | `0.8` |
| **Enabled** | Profile is active | `Yes` |

### Voice Configuration Tab

![Ai Profiles Form Voice Tab](../../assets/images/admin/ai-integration/ai-profiles-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Voice** | OpenAI voice to use | `alloy` |
| **Speed** | Speaking speed (0.25-4.0) | `1.0` |
| **Voice Activity Detection** | How to detect when user stops speaking | `Server VAD` |

#### Available Voices

| Voice | Description |
|-------|-------------|
| `alloy` | Neutral, professional |
| `echo` | Warm, conversational |
| `fable` | Expressive, storytelling |
| `onyx` | Deep, authoritative |
| `nova` | Friendly, upbeat |
| `shimmer` | Clear, pleasant |

### Advanced Tab

![Ai Profiles Form Advanced Tab](../../assets/images/admin/ai-integration/ai-profiles-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Max Tokens** | Response length limit | `4096` |
| **Turn Detection Threshold** | Silence detection sensitivity | `0.5` |
| **Silence Duration (ms)** | Time before turn ends | `500` |
| **Prefix Padding (ms)** | Audio buffer before speech | `300` |

---

## 🚀 Practical Example: Customer Support Profile

### Create a Profile for Support Agents

| Field | Value |
|-------|-------|
| Name | `Customer Support` |
| Provider | `OpenAI Production` |
| Model | `gpt-4o-realtime-preview` |
| Temperature | `0.7` (balanced) |
| Voice | `nova` (friendly) |
| Speed | `1.0` |

![Example Ai Profile](../../assets/images/admin/ai-integration/ai-profiles-form.png)

This profile creates a friendly, professional voice for customer support interactions.

---

## 💡 Tips & Best Practices

> [!TIP]
> **Test different voices**: Try all voices to find the best fit for your brand.

> [!TIP]
> **Lower temperature for consistency**: 0.6-0.8 gives reliable responses.

> [!TIP]
> **Adjust silence duration**: Longer values (700ms) for complex queries, shorter (400ms) for quick interactions.

---

## 🔗 Related Modules

- [AI Providers](ai-providers.md) — Configure AI credentials
- [AI Agents](ai-agents.md) — Use profiles in agents

---

*← Previous: [AI Providers](ai-providers.md) | Next: [AI Agents](ai-agents.md) →*
