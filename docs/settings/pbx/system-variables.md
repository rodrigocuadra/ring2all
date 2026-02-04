# System Variables

## 📖 Introduction

System Variables are FreeSWITCH global variables that affect PBX behavior. Most users won't need to change these, but they're available for advanced configuration.

---

## ⚠️ Advanced Settings

> [!WARNING]
> **For advanced users only**: Incorrect values can break your phone system. Contact support if unsure.

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → PBX Settings → System Variables`

<!-- [IMG: menu-navigation-system-variables] -->

---

## 📝 Common Variables

<!-- [IMG: system-variables-form] -->

| Variable | Description | Default |
|----------|-------------|---------|
| `default_language` | System language | `en` |
| `default_timezone` | System timezone | `UTC` |
| `max_sessions` | Max concurrent calls | `1000` |
| `rtp_timeout` | RTP timeout (sec) | `300` |
| `ring_timeout` | Default ring time | `30` |
| `transfer_timeout` | Transfer timeout | `20` |
| `parking_timeout` | Park timeout | `300` |

---

## 🚀 Practical Example

### Increase Ring Timeout

To ring extensions longer before going to voicemail:

| Variable | Value |
|----------|-------|
| `ring_timeout` | `45` |

Applies to all extensions unless overridden.

---

## 💡 Tips

> [!TIP]
> **Document changes**: Keep track of what you modify.

> [!TIP]
> **Test after changes**: Verify calls still work.

> [!WARNING]
> **Backup first**: Create backup before changing system variables.

---

## 🔗 Related Modules

- [General Settings](general-settings.md) — Basic system settings
- [SIP Profiles](sip-profiles.md) — SIP configuration

---

*← Previous: [General Settings](general-settings.md) | Next: [Conference Profiles](conference-profiles.md) →*
