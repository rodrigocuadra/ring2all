# Certificates

## 📖 Introduction

Certificates manages SSL/TLS certificates for HTTPS and SIP-TLS encryption. Keep your communications secure.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → System → Certificates`

![Certificates](../../assets/images/admin/system-settings/certificates-list.png)

---

## 📝 Certificate Types

| Type | Purpose |
|------|---------|
| **Web** | HTTPS for admin panel |
| **SIP-TLS** | Encrypted SIP signaling |
| **WSS** | WebSocket secure |
| **API** | REST API encryption |

---

## 📝 Management

![Certificates Form](../../assets/images/admin/system-settings/certificates-form.png)

### Current Certificate

| Info | Description |
|------|-------------|
| **Issuer** | Certificate authority |
| **Valid From** | Start date |
| **Expires** | Expiration date |
| **Domains** | Covered domains |

### Actions

| Action | Purpose |
|--------|---------|
| **Upload** | Install purchased cert |
| **Generate** | Create self-signed |
| **Let's Encrypt** | Free auto-renewal |
| **CSR** | Create signing request |

---

## 🚀 Practical Example

### Install Let's Encrypt

1. Click **Let's Encrypt**
2. Enter domain: `pbx.company.com`
3. Verify DNS points to server
4. Click **Generate**
5. Auto-renews every 90 days

---

## 💡 Tips

> [!TIP]
> **Use Let's Encrypt**: Free and auto-renewing.

> [!TIP]
> **Monitor expiration**: Set reminders.

> [!WARNING]
> **Don't let certs expire**: Causes connection failures.

---

## 🔗 Related Modules

- [Security Settings](../10-settings/security-settings.md) — Security config
- [SIP Profiles](../10-settings/sip-profiles.md) — SIP-TLS settings
