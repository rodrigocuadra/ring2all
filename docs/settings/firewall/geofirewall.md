# GeoFirewall

## 📖 Introduction

GeoFirewall blocks traffic from specific countries. Essential for preventing international VoIP attacks from high-risk regions.

---

## ⚠️ Security Feature

> [!TIP]
> **Highly recommended**: Block countries you don't do business with.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Firewall → GeoFirewall`

![Geofirewall](../../assets/images/admin/firewall/geo-firewall-list.png)

---

## 📝 Configuration

![Geofirewall Form](../../assets/images/admin/firewall/geo-firewall-list.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Enabled** | GeoFirewall active | `Yes` |
| **Mode** | Whitelist or Blacklist | `Blacklist` |
| **Countries** | Selected countries | (see list) |

### Mode Options

| Mode | Behavior |
|------|----------|
| **Blacklist** | Block selected countries |
| **Whitelist** | Allow ONLY selected countries |

---

## 🚀 Practical Example

### US Company - Block High-Risk Countries

1. Set Mode: `Blacklist`
2. Select countries with high VoIP fraud:
   - Russia
   - China
   - Ukraine
   - Nigeria
   - Vietnam
3. Enable and Save

---

## 📊 High-Risk Countries

| Region | Common Attack Sources |
|--------|----------------------|
| Eastern Europe | Russia, Ukraine, Moldova |
| Asia | China, Vietnam, Indonesia |
| Africa | Nigeria, Egypt |
| Middle East | Iran, Pakistan |

---

## 💡 Tips

> [!TIP]
> **Start with blacklist**: Less disruptive.

> [!TIP]
> **Review regularly**: Attack sources change.

> [!WARNING]
> **Check business needs**: Don't block customers!

---

## 🔗 Related Modules

- [Firewall Settings](../11-administration/firewall-settings.md) — General security
- [Access Control](access-control.md) — IP lists
