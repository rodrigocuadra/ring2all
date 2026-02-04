# SIP Profiles

## 📖 Introduction

SIP Profiles define network configurations for SIP communications. Different profiles can be used for internal vs external connections.

---

## 🎯 Common Profiles

| Profile | Purpose |
|---------|---------|
| Internal | Local LAN extensions |
| External | Remote workers, gateways |
| WebRTC | Browser-based phones |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → SIP Profiles`

<!-- [IMG: menu-navigation-sip-profiles] -->

---

## 📝 Form Fields

<!-- [IMG: sip-profiles-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Profile identifier | `Internal` |
| **SIP Port** | Listening port | `5060` |
| **Transport** | UDP, TCP, TLS | `UDP` |
| **RTP Start** | Audio port range start | `10000` |
| **RTP End** | Audio port range end | `20000` |
| **External IP** | Public IP address | `Auto` |
| **Local Subnet** | Local network | `192.168.1.0/24` |

---

## 💡 Tips

> [!TIP]
> **Use TLS for remote**: Encrypt SIP traffic.

> [!TIP]
> **Set correct external IP**: Required for NAT traversal.

> [!WARNING]
> **Advanced setting**: Changes may break connectivity.

---

## 🔗 Related Modules

- [Gateways](../03-pbx-routing/gateways.md) — Trunk connections
- [Extensions](../01-pbx-extensions/extensions.md) — Extension profiles

---

*← Previous: [Phone Brands](phone-brands.md)*
