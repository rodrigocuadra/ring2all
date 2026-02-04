# Voicemail Broadcast

## 📖 Introduction

Voicemail Broadcast sends a voicemail message to multiple extensions at once. Perfect for company-wide announcements, reminders, or emergency notifications.

---

## 🎯 Common Use Cases

| Scenario | Broadcast Use |
|----------|--------------|
| "Mandatory meeting tomorrow at 10 AM" | All staff |
| Weather closing announcement | All staff |
| Sales team update | Sales department |
| IT maintenance notice | Specific teams |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Voicemail Broadcast Groups`

![Voicemail Broadcast](../../assets/images/pbx/applications/voicemail-broadcast-list.png)

---

## 📝 Form Fields

![Voicemail Broadcast Form](../../assets/images/pbx/applications/voicemail-broadcast-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Broadcast group name | `All Staff` |
| **Extension** | Number to dial to send broadcast | `9500` |
| **Description** | Notes | `Company-wide announcements` |
| **Enabled** | Group is active | `Yes` |

### Members

| Extension | Name |
|-----------|------|
| `1001` | John Smith |
| `1002` | Jane Doe |
| `1003` | Bob Wilson |
| ... | ... |

---

## 🚀 Practical Example

### Send a Company-Wide Announcement

1. Dial `9500` (broadcast extension)
2. Record your message after the tone
3. Press `#` when done
4. Message is delivered to all member voicemail boxes

---

## 💡 Tips

> [!TIP]
> Create department-specific groups (Sales, Support, Engineering).

> [!TIP]
> Test with a small group first before broadcasting to everyone.

---

## 🔗 Related Modules

- [Extensions](../01-pbx-extensions/extensions.md) — Voicemail settings
- [Voicemail Settings](../08-voicemail-audio/voicemail-settings.md) — System voicemail config

---

*← Previous: [Callback System](callback-system.md) | Next: [Dynamic Destinations](dynamic-destinations.md) →*
