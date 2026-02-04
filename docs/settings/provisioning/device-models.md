# Device Models

## 📖 Introduction

Device Models defines the supported phone models for auto-provisioning. Each model contains manufacturer-specific templates and configuration parameters.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Model Library | Supported device models |
| Templates | Model-specific configs |
| Firmware | Firmware versions |
| Features | Model capabilities |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Provisioning → Device Models`

![Device Models](../../assets/images/settings/provisioning/device-models-list.png)

---

## 📝 Form Fields

### General Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Vendor** | Device manufacturer | `Yealink` |
| **Model Name** | Model identifier | `T54W` |
| **Description** | Model description | `Enterprise IP Phone` |
| **Enabled** | Active status | `Yes` |

### Configuration

| Field | Description | Example |
|-------|-------------|---------|
| **Line Keys** | Number of line keys | `10` |
| **BLF Keys** | Number of BLF keys | `27` |
| **Expansion Module** | Supports expansion | `Yes` |
| **Video Support** | Video capable | `No` |

### Firmware

| Field | Description | Example |
|-------|-------------|---------|
| **Firmware Version** | Current firmware | `96.86.0.100` |
| **Firmware File** | Firmware filename | `T54W.fw` |

---

## 💡 Tips

> [!TIP]
> **Keep firmware updated**: New firmware improves security and features.

---

## 🔗 Related Modules

- [Vendors](phone-brands.md) — Device manufacturers
- [Templates](templates.md) — Configuration templates
- [Devices](phone-provisioning.md) — Provisioned devices
