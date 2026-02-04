# HTTP/HTTPS Server

## 📖 Introduction

HTTP/HTTPS Server configures the web server settings for the admin panel and API. Manage SSL certificates, ports, and security headers.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| SSL/TLS | HTTPS configuration |
| Ports | HTTP/HTTPS port settings |
| Certificates | SSL certificate management |
| Headers | Security headers |
| Redirects | HTTP to HTTPS redirect |

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → System Settings → HTTP/HTTPS Server`

![HTTP Server](../../assets/images/admin/system-settings/http-server-list.png)

---

## 📝 Form Fields

### Port Configuration

| Field | Description | Default |
|-------|-------------|---------|
| **HTTP Port** | Non-secure port | `80` |
| **HTTPS Port** | Secure port | `443` |
| **Enable HTTPS** | Force secure connection | `Yes` |
| **Redirect HTTP** | Auto-redirect to HTTPS | `Yes` |

### SSL/TLS Settings

| Field | Description | Example |
|-------|-------------|---------|
| **SSL Certificate** | Certificate file | `server.crt` |
| **SSL Key** | Private key file | `server.key` |
| **SSL Chain** | Certificate chain | `chain.pem` |
| **Min TLS Version** | Minimum TLS version | `TLS 1.2` |

### Security Headers

| Field | Description | Default |
|-------|-------------|---------|
| **HSTS** | HTTP Strict Transport | `Enabled` |
| **X-Frame-Options** | Clickjacking protection | `SAMEORIGIN` |
| **Content-Security-Policy** | CSP headers | `Configured` |

---

## 💡 Tips

> [!TIP]
> **Use Let's Encrypt**: Free SSL certificates with auto-renewal.

> [!WARNING]
> **Always use HTTPS in production**: Never expose admin panel over HTTP.

> [!TIP]
> **Enable HSTS**: Protects against downgrade attacks.

---

## 🔗 Related Modules

- [Certificates](certificates.md) — SSL certificate management
- [Firewall Settings](../firewall/firewall-settings.md) — Network security
