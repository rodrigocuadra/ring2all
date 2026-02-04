# Server Settings

## 📖 Introduction

Server Settings configures the provisioning server parameters. Define the server URL, protocols, and file locations for device auto-provisioning.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Server URL | Provisioning server address |
| Protocols | HTTP/HTTPS/TFTP |
| Authentication | Server credentials |
| File Paths | Configuration locations |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Provisioning → Server Settings`

![Server Settings](../../assets/images/settings/provisioning/server-settings-list.png)

---

## 📝 Form Fields

### Server Configuration

| Field | Description | Example |
|-------|-------------|---------|
| **Server URL** | Provisioning server | `https://prov.example.com` |
| **Protocol** | Transfer protocol | `HTTPS` |
| **Port** | Server port | `443` |

### Authentication

| Field | Description | Example |
|-------|-------------|---------|
| **Enable Auth** | Require authentication | `Yes` |
| **Username** | Server username | `provision` |
| **Password** | Server password | `********` |

### Paths

| Field | Description | Example |
|-------|-------------|---------|
| **Config Path** | Configuration files | `/configs/` |
| **Firmware Path** | Firmware files | `/firmware/` |
| **Phonebook Path** | Phonebook files | `/phonebooks/` |

---

## 💡 Tips

> [!TIP]
> **Use HTTPS**: Always use secure connections for provisioning.

> [!WARNING]
> **Enable authentication**: Protect provisioning files from unauthorized access.

---

## 🔗 Related Modules

- [Security Settings](security-settings.md) — Provisioning security
- [Devices](phone-provisioning.md) — Provisioned devices
