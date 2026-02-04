# Gateway Profiles

## 📖 Introduction

Gateway Profiles define configuration templates for SIP trunks and gateways. These profiles contain authentication, codec, and routing parameters that can be applied to multiple gateways.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Authentication | Trunk credentials |
| Codecs | Supported codecs |
| Caller ID | CID manipulation |
| Failover | Backup routing |
| Capacity | Channel limits |

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Technology Settings → Gateway Profiles`

![Gateway Profiles](../../assets/images/settings/technology/gateway-profiles-list.png)

---

## 📝 Form Fields

### General Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Profile Name** | Unique identifier | `provider-trunk` |
| **Description** | Profile description | `Main SIP provider` |
| **Enabled** | Active status | `Yes` |

### Authentication

| Field | Description | Example |
|-------|-------------|---------|
| **Username** | SIP username | `trunk_user` |
| **Password** | SIP password | `********` |
| **Auth Realm** | Authentication realm | `sip.provider.com` |
| **Register** | Send registration | `Yes` |

### Codec Settings

| Field | Description | Default |
|-------|-------------|---------|
| **Audio Codecs** | Preferred codecs | `G.729, PCMU, PCMA` |
| **Codec Negotiation** | Inbound/Outbound | `Generous` |
| **DTMF Mode** | DTMF signaling | `RFC2833` |

### Capacity Settings

| Field | Description | Default |
|-------|-------------|---------|
| **Max Channels** | Maximum concurrent calls | `30` |
| **CPS Limit** | Calls per second | `5` |

---

## 💡 Tips

> [!TIP]
> **Use G.729 for trunks**: Lower bandwidth, compatible with most providers.

> [!WARNING]
> **Set channel limits**: Prevent overloading trunk capacity.

---

## 🔗 Related Modules

- [Gateways](../../pbx/routing/gateways.md) — Gateway configuration
- [Device Profiles](device-profiles.md) — Device settings
- [Outbound Routes](../../pbx/routing/outbound-routes.md) — Call routing
