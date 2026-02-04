# Device Profiles

## 📖 Introduction

Device Profiles define the configuration templates for SIP devices. Each profile contains codec settings, transport options, and device-specific parameters that can be applied to multiple extensions.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Codec Priority | Audio/video codec order |
| Transport | UDP/TCP/TLS settings |
| NAT Handling | NAT traversal options |
| Encryption | SRTP configuration |
| Timers | Registration/session timers |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Technology Settings → Device Profiles`

![Device Profiles](../../assets/images/settings/technology/device-profiles-list.png)

---

## 📝 Form Fields

### General Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Profile Name** | Unique identifier | `default-profile` |
| **Description** | Profile description | `Standard SIP phones` |
| **Enabled** | Active status | `Yes` |

### Codec Settings

| Field | Description | Default |
|-------|-------------|---------|
| **Audio Codecs** | Preferred audio codecs | `OPUS, G.722, PCMU` |
| **Video Codecs** | Preferred video codecs | `VP8, H.264` |
| **Codec Negotiation** | Inbound/Outbound | `Generous` |

### Transport Settings

| Field | Description | Default |
|-------|-------------|---------|
| **Transport** | SIP transport protocol | `UDP` |
| **Port** | SIP port | `5060` |
| **TLS Port** | Secure SIP port | `5061` |

### NAT Settings

| Field | Description | Default |
|-------|-------------|---------|
| **NAT Mode** | NAT handling mode | `Auto` |
| **STUN Server** | STUN server address | `stun.example.com` |
| **ICE Support** | Enable ICE | `Yes` |

---

## 💡 Tips

> [!TIP]
> **Use OPUS codec**: Best quality-to-bandwidth ratio for modern networks.

> [!TIP]
> **Enable TLS**: For secure signaling in production environments.

---

## 🔗 Related Modules

- [SIP Profiles](sip-profiles.md) — SIP endpoint settings
- [Gateway Profiles](gateway-profiles.md) — Trunk configurations
- [Extensions](../../pbx/extensions/extensions.md) — Extension management
