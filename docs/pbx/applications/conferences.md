# Conferences

## 📖 Introduction

Conferences allow multiple people to join a single call and talk together. This is essential for team meetings, client calls, and collaboration.

**Types of conferences:**
- **Ad-hoc**: Started by a user transferring calls together
- **Scheduled**: Dial-in conferences with a room number and PIN
- **Web-based**: Video conferences with screen sharing

---

## 🎯 Common Use Cases

| Scenario | Configuration |
|----------|---------------|
| Team stand-up meetings | Recurring room with PIN |
| Client calls with multiple team members | Ad-hoc conference |
| All-hands company meetings | Large capacity room |
| Interview panels | Secure room with moderator control |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Conferences`

![Conferences](../../assets/images/pbx/applications/conferences-list.png)

---

## 📝 Form Fields

### General Tab

<!-- [IMG: conferences-form-general-tab] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Conference room name | `Sales Team Meeting` |
| **Extension** | Number to dial to enter conference | `9001` |
| **Description** | Notes about this room | `Weekly sales sync` |
| **Max Participants** | Maximum callers allowed | `25` |
| **Enabled** | Room is available | `Yes` |

### Access Tab

<!-- [IMG: conferences-form-access-tab] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Moderator PIN** | PIN for room host/moderator | `123456` |
| **Participant PIN** | PIN for regular participants | `789012` |
| **Wait for Moderator** | Participants wait until moderator joins | `Yes` |
| **Announce Participants** | Play name when someone joins/leaves | `Yes` |
| **Record Conference** | Record the entire conference | `No` |

### Settings Tab

<!-- [IMG: conferences-form-settings-tab] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Music on Hold** | Music when waiting for moderator | `default` |
| **Join Sound** | Sound when participant joins | `tone` |
| **Leave Sound** | Sound when participant leaves | `tone` |
| **Mute on Entry** | Mute participants when they join | `No` |
| **Moderator Mute Control** | Moderator can mute all | `Yes` |

---

## 🚀 Practical Example: Weekly Team Conference

### Scenario

Create a conference room for weekly sales team meetings with:
- Max 10 participants
- Moderator PIN for the manager
- Participants wait for moderator
- Announce when people join

### Step 1: Create the Conference

Go to **PBX → Applications → Conferences** and click **+ Add**.

### Step 2: Configure Settings

| Field | Value |
|-------|-------|
| Name | `Sales Weekly Sync` |
| Extension | `9001` |
| Max Participants | `10` |
| Moderator PIN | `123456` |
| Participant PIN | `789012` |
| Wait for Moderator | `Yes` |
| Announce Participants | `Yes` |

<!-- [IMG: example-conference-config] -->

### Step 3: Share with Team

Send participants:
- Dial: `9001`
- PIN: `789012`

Give the manager:
- Dial: `9001`
- Moderator PIN: `123456`

### Step 4: Test

1. Call 9001 as participant - should hear waiting music
2. Call 9001 as moderator - conference should start
3. Verify join announcements work

---

## 💡 Tips & Best Practices

> [!TIP]
> **Use moderator PIN**: Ensures the meeting doesn't start without the host.

> [!TIP]
> **Record important meetings**: Enable recording for training or reference.

> [!TIP]
> **Mute on entry for large groups**: Prevents noise from early joiners.

> [!WARNING]
> **Limit max participants**: Too many people can cause audio quality issues.

---

## 🔗 Related Modules

- [Conference Profiles](../10-settings/conference-profiles.md) — Advanced conference settings
- [Recording Management](../08-voicemail-audio/recording-management.md) — Conference recordings

---

*← Previous: [Announcements](announcements.md) | Next: [Parking Lots](parking-lots.md) →*
