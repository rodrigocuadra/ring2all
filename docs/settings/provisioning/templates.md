# Templates

## 📖 Introduction

Templates defines configuration templates for device provisioning. Create reusable templates with common settings that can be applied to multiple devices.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Base Templates | Default configurations |
| Custom Templates | User-defined settings |
| Variables | Dynamic placeholders |
| Inheritance | Template hierarchy |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Provisioning → Templates`

![Templates](../../assets/images/settings/provisioning/templates-list.png)

---

## 📝 Form Fields

### General Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Template Name** | Unique identifier | `sales-team` |
| **Description** | Template description | `Sales department phones` |
| **Device Model** | Target model | `Yealink T54W` |
| **Enabled** | Active status | `Yes` |

### Network Settings

| Field | Description | Example |
|-------|-------------|---------|
| **NTP Server** | Time server | `pool.ntp.org` |
| **Syslog Server** | Log server | `192.168.1.10` |
| **VLAN ID** | Voice VLAN | `100` |

### Phone Settings

| Field | Description | Default |
|-------|-------------|---------|
| **Language** | Phone language | `English` |
| **Timezone** | Phone timezone | `America/New_York` |
| **Date Format** | Display format | `YYYY-MM-DD` |

### Features

| Field | Description | Default |
|-------|-------------|---------|
| **Enable BLF** | Busy lamp field | `Yes` |
| **Enable DND** | Do not disturb | `Yes` |
| **Enable Transfer** | Call transfer | `Yes` |

---

## 💡 Tips

> [!TIP]
> **Use variables**: Use placeholders like `{MAC}` and `{EXTENSION}` for dynamic values.

> [!TIP]
> **Create base templates**: Build a hierarchy of templates for easier management.

---

## 🔗 Related Modules

- [Device Models](device-models.md) — Supported models
- [Devices](phone-provisioning.md) — Provisioned devices
- [Vendors](phone-brands.md) — Device manufacturers
