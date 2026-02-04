# Phone Provisioning

## 📖 Introduction

Phone Provisioning automates IP phone configuration. Phones automatically download their settings — no manual configuration needed.

---

## 🎯 How It Works

1. Phone boots and finds provisioning server
2. Downloads configuration file (XML)
3. Applies settings (extension, password, features)
4. Registers with PBX

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Phone Provisioning`

<!-- [IMG: menu-navigation-phone-provisioning] -->

---

## 📝 Form Fields

### Provisioning Server

<!-- [IMG: phone-provisioning-server] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Provisioning URL** | Server address | `https://pbx.company.com/prov` |
| **Method** | HTTP or HTTPS | `HTTPS` |
| **Authentication** | Require login | `Yes` |

### Phone Brands

| Brand | Supported Models |
|-------|-----------------|
| Yealink | T4x, T5x, W60, W70 series |
| Polycom | VVX series |
| Grandstream | GRP, GXP series |
| Fanvil | X series |
| Cisco | SPA series |

### Device Templates

Create templates for common configurations:

| Template | Configuration |
|----------|---------------|
| Standard Desk | BLF keys, voicemail button |
| Reception | Many BLF buttons, no voicemail |
| Executive | Sidecar, all features |
| Conference Room | Auto-answer, no DND |

---

## 🚀 Practical Example

### Provision a Yealink Phone

1. Add phone MAC address to extension
2. Set phone to use provisioning URL
3. Reboot phone
4. Phone downloads config and registers

---

## 💡 Tips

> [!TIP]
> **Use HTTPS**: Encrypt provisioning traffic.

> [!TIP]
> **DHCP Option 66**: Auto-configure provisioning URL.

> [!TIP]
> **Templates save time**: Configure once, apply to many phones.

---

## 🔗 Related Modules

- [Extensions](../01-pbx-extensions/extensions.md) — Phone assignment
- [Phone Brands](phone-brands.md) — Brand-specific settings

---

*← Previous: [Security Settings](security-settings.md) | Next: [Phone Brands](phone-brands.md) →*
