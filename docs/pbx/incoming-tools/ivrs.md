# IVRs (Interactive Voice Response)

## 📖 Introduction

An IVR (Interactive Voice Response) is an automated phone menu that greets callers and directs them to the right destination based on what button they press.

**Example:** "Press 1 for Sales, Press 2 for Support, Press 3 for Billing..."

IVRs are one of the most important features of a professional phone system. They provide a consistent experience for callers and reduce the workload on receptionists.

---

## 🎯 Common Use Cases

| Scenario | Solution |
|----------|----------|
| Main company number | Route callers to different departments |
| After-hours calls | Play custom message and send to voicemail |
| Call screening | Require callers to press a key to reach a human |
| Multi-language support | "Press 1 for English, Press 2 for Spanish" |
| Self-service | Check account balance, order status, etc. |

---

## 📋 Prerequisites

- [ ] Audio file recorded for the welcome message (or TTS configured)
- [ ] Destinations ready (extensions, ring groups, queues, etc.)
- [ ] Plan for what each digit should do

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → IVRs`

<!-- [IMG: menu-navigation-ivrs] -->

---

## 📝 Form Fields

### General Tab

<!-- [IMG: ivrs-form-general-tab] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Internal identifier for this IVR | `Main Menu` |
| **Extension** | Optional extension number to reach this IVR directly | `8000` |
| **Description** | Notes about this IVR's purpose | `Main company greeting` |
| **Language** | Language for system prompts | `English` |
| **Enabled** | Turn IVR on/off | `Yes` |

### Greeting Tab

<!-- [IMG: ivrs-form-greeting-tab] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Greeting Type** | **Recording** = audio file, **TTS** = text-to-speech | `Recording` |
| **Greeting File** | Audio file to play | `welcome.wav` |
| **TTS Text** | Text to speak if using TTS | `Welcome to Acme Corp...` |
| **Greeting Timeout** | How long to wait after greeting (seconds) | `5` |

### Options Tab

<!-- [IMG: ivrs-form-options-tab] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Input Timeout** | Seconds to wait for caller to press a digit | `10` |
| **Max Retries** | How many times to replay menu on invalid input | `3` |
| **Invalid Message** | What to play when wrong digit pressed | `That option is not valid...` |
| **Max Timeout Action** | What to do if no input received | `Go to Extension 0` |
| **Direct Dial** | Allow callers to dial extensions directly | `Yes` |
| **Direct Dial Prefix** | Prefix to dial an extension (e.g., `*101` for ext 101) | `*` |

### Digit Options

Add an option for each menu choice:

| Digit | Destination Type | Destination | Timeout |
|-------|-----------------|-------------|---------|
| `1` | Ring Group | `Sales Team` | 30 |
| `2` | Queue | `Support Queue` | 60 |
| `3` | Extension | `1001 (Billing)` | 25 |
| `0` | Extension | `1000 (Operator)` | 30 |
| `*` | IVR | `Language Select` | - |

---

## 🚀 Practical Example: Main Company IVR

### Scenario

Create a main menu for incoming calls that:
- Welcomes callers
- Routes to Sales (1), Support (2), Billing (3), or Operator (0)
- Allows direct extension dialing

### Step 1: Create the IVR

Go to **PBX → Applications → IVRs** and click **+ Add**.

<!-- [IMG: example-ivr-add] -->

### Step 2: Configure General Settings

| Field | Value |
|-------|-------|
| Name | `Main Menu` |
| Extension | `8000` |
| Enabled | `Yes` |

### Step 3: Configure Greeting

| Field | Value |
|-------|-------|
| Greeting Type | `Recording` |
| Greeting File | `main_greeting.wav` |

**Greeting script example:**
> "Thank you for calling Acme Corporation. Press 1 for Sales, Press 2 for Support, Press 3 for Billing, or Press 0 for an operator. If you know your party's extension, you may dial it at any time."

<!-- [IMG: example-ivr-greeting] -->

### Step 4: Configure Options

| Field | Value |
|-------|-------|
| Input Timeout | `10` |
| Max Retries | `3` |
| Max Timeout Action | `Extension: 1000 (Operator)` |
| Direct Dial | `Yes` |

### Step 5: Add Digit Options

| Digit | Type | Destination |
|-------|------|-------------|
| `1` | Ring Group | `Sales Team` |
| `2` | Queue | `Support Queue` |
| `3` | Extension | `1001 (Billing)` |
| `0` | Extension | `1000 (Operator)` |

<!-- [IMG: example-ivr-digits] -->

### Step 6: Save and Test

1. Click **Save**
2. Call your main number
3. Verify the greeting plays
4. Test each digit option

---

## 💡 Tips & Best Practices

> [!TIP]
> **Keep menus short**: Maximum 4-5 options. More causes caller frustration.

> [!TIP]
> **Most common first**: Put your most-used option as Press 1.

> [!TIP]
> **Always include operator option**: Callers want a human escape route.

> [!TIP]
> **Test with real callers**: What seems clear to you may confuse customers.

> [!WARNING]
> **Avoid too many levels**: Deep IVR trees (press 1, then 2, then 3...) frustrate callers.

> [!TIP]
> **Use timeout wisely**: If caller doesn't press anything, route them to a human.

---

## ❓ Frequently Asked Questions

**Q: How do I create a multi-level IVR?**

A: Create multiple IVRs and have digit options route to other IVRs. Example: Press 1 → Sales IVR (which has its own submenu).

---

**Q: Can I use text-to-speech instead of recording?**

A: Yes! Set Greeting Type to TTS and enter your text. The system will speak it automatically.

---

**Q: What audio formats are supported?**

A: WAV (recommended) and MP3. For best quality, use 8kHz or 16kHz mono WAV files.

---

**Q: How do I update the greeting without rebuilding the IVR?**

A: Simply upload a new audio file and save. The change takes effect immediately.

---

## 🔗 Related Modules

- [Announcements](announcements.md) — Simple audio playback before routing
- [Time Conditions](../03-pbx-routing/time-conditions.md) — Route to different IVRs based on time
- [Ring Groups](ring-groups.md) — Route calls to multiple extensions
- [Queues](../05-call-center/queues.md) — Call center functionality
- [Recording Management](../08-voicemail-audio/recording-management.md) — Upload IVR audio files

---

*← Previous: [Hot Desking](../01-pbx-extensions/hot-desking.md) | Next: [Ring Groups](ring-groups.md) →*
