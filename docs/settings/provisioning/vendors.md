# Phone Brands

## 📖 Introduction

Phone Brands configures default settings for different IP phone manufacturers. Each brand has specific requirements for provisioning and features.

---

## 🎯 Supported Brands

| Brand | Models | Features |
|-------|--------|----------|
| **Yealink** | T4x, T5x, W60/W70 | BLF, Provisioning, Contacts |
| **Polycom** | VVX | Advanced BLF, Sidecar |
| **Grandstream** | GRP, GXP | Multicast paging |
| **Fanvil** | X series | Basic provisioning |
| **Cisco** | SPA | Limited features |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Phone Provisioning → Phone Brands`

<!-- [IMG: menu-navigation-phone-brands] -->

---

## 📝 Brand Settings

<!-- [IMG: phone-brands-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Brand** | Manufacturer | `Yealink` |
| **Default Template** | Config template | `Desk Phone` |
| **Time Server** | NTP server | `pool.ntp.org` |
| **Admin Password** | Default admin pass | `admin` |
| **Firmware URL** | Firmware update server | `(optional)` |

---

## 💡 Tips

> [!TIP]
> **Update firmware**: Keep phones on latest secure versions.

> [!TIP]
> **Change admin passwords**: Default passwords are security risks.

---

## 🔗 Related Modules

- [Phone Provisioning](phone-provisioning.md) — Provisioning server
- [Extensions](../01-pbx-extensions/extensions.md) — Phone assignment

---

*← Previous: [Phone Provisioning](phone-provisioning.md) | Next: [SIP Profiles](sip-profiles.md) →*
