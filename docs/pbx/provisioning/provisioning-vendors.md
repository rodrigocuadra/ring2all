# Provisioning Vendors

## 📖 Introduction

Provisioning Vendors configures default settings for each phone manufacturer. Set firmware servers, time servers, and brand-specific options.

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Provisioning → Vendors`

![Provisioning Vendors](../../assets/images/settings/provisioning/vendors-list.png)

---

## 📝 Supported Vendors

| Vendor | Features |
|--------|----------|
| **Yealink** | Full provisioning, BLF, phonebook |
| **Polycom** | Full provisioning, sidecar |
| **Grandstream** | Full provisioning |
| **Fanvil** | Basic provisioning |
| **Cisco** | SPA series only |

---

## 📝 Vendor Settings

![Provisioning Vendors Form](../../assets/images/settings/provisioning/vendors-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Vendor** | Manufacturer | `Yealink` |
| **Time Server** | NTP server | `pool.ntp.org` |
| **Firmware Server** | Update URL | `https://fw.company.com` |
| **Admin Password** | Default admin | `(change this!)` |
| **HTTP Auth** | Require auth | `Yes` |

---

## 💡 Tips

> [!TIP]
> **Change admin passwords**: Default passwords are insecure.

> [!TIP]
> **Host firmware locally**: Faster and more reliable.

---

## 🔗 Related Modules

- [Device Models](device-models.md) — Specific models
- [Provisioning Security](provisioning-security.md) — Security settings
