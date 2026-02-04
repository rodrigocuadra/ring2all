# Conference Profiles

## 📖 Introduction

Conference Profiles define default settings for conference rooms. Different profiles allow different conference behaviors.

---

## 🎯 Common Profiles

| Profile | Use Case |
|---------|----------|
| Standard | Team meetings |
| Webinar | One speaker, many listeners |
| Moderated | Moderator controls speakers |
| Small Group | 3-5 participants |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → PBX Settings → Conference Profiles`

![Conference Profiles](../assets/images/settings/pbx/conference-profiles-list.png)

---

## 📝 Form Fields

![Conference Profiles Form](../assets/images/settings/pbx/conference-profiles-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Profile name | `Standard Meeting` |
| **Max Members** | Maximum participants | `25` |
| **Announce Join** | Announce when someone joins | `Yes` |
| **Announce Leave** | Announce when someone leaves | `Yes` |
| **Mute on Entry** | Mute participants joining | `No` |
| **Wait for Moderator** | Start only when moderator joins | `No` |
| **Record Conference** | Record the meeting | `No` |
| **Enabled** | Profile is active | `Yes` |

### Audio Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Music on Hold** | Music while waiting | `default` |
| **Enter Sound** | Sound when joining | `beep` |
| **Exit Sound** | Sound when leaving | `beep` |

---

## 🚀 Practical Example

### Webinar Profile

| Field | Value |
|-------|-------|
| Name | `Webinar` |
| Max Members | `100` |
| Mute on Entry | `Yes` |
| Announce Join | `No` |
| Wait for Moderator | `Yes` |
| Record | `Yes` |

Participants are muted, only moderator can speak.

---

## 💡 Tips

> [!TIP]
> **Mute on entry for large meetings**: Reduces background noise.

> [!TIP]
> **Record important meetings**: Enable recording for webinars.

---

## 🔗 Related Modules

- [Conferences](../02-pbx-applications/conferences.md) — Create conference rooms

---

*← Previous: [System Variables](system-variables.md) | Next: [CDR Settings](cdr-settings.md) →*
