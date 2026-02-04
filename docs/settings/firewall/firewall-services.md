# Firewall Services

## 📖 Introduction

Firewall Services defines network services by port and protocol. Services are used in Firewall Rules for easier management.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Firewall → Firewall Services`

![Firewall Services](../../assets/images/admin/firewall/firewall-services-list.png)

---

## 📝 Default Services

| Service | Port(s) | Protocol |
|---------|---------|----------|
| SSH | 22 | TCP |
| HTTP | 80 | TCP |
| HTTPS | 443 | TCP |
| SIP | 5060 | UDP |
| SIP-TLS | 5061 | TCP |
| RTP | 10000-20000 | UDP |
| WebRTC | 8081 | TCP |
| WSS | 8082 | TCP |

---

## 📝 Custom Services

![Firewall Services Form](../../assets/images/admin/firewall/firewall-services-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Service name | `VPN` |
| **Port(s)** | Port or range | `1194` |
| **Protocol** | TCP/UDP/Both | `UDP` |
| **Description** | Purpose | `OpenVPN` |

---

## 💡 Tips

> [!TIP]
> **Use descriptive names**: Makes rules easier to understand.

> [!TIP]
> **Group related ports**: Define as single service.

---

## 🔗 Related Modules

- [Firewall Rules](firewall-rules.md) — Use services in rules
- [Access Control](access-control.md) — IP management
