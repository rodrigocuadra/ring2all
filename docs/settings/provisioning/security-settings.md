# Security Settings

## 📖 Introduction

Security Settings configures system-wide security policies including password requirements, session timeouts, and access controls.

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → Security Settings`

<!-- [IMG: menu-navigation-security-settings] -->

---

## 📝 Form Fields

### Password Policy

<!-- [IMG: security-settings-password] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Minimum Length** | Required characters | `12` |
| **Require Uppercase** | At least one capital | `Yes` |
| **Require Lowercase** | At least one lowercase | `Yes` |
| **Require Numbers** | At least one digit | `Yes` |
| **Require Symbols** | At least one symbol | `Yes` |
| **Password Expiry** | Days before reset required | `90` |

### Session Security

<!-- [IMG: security-settings-session] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Session Timeout** | Minutes of inactivity | `30` |
| **Max Login Attempts** | Before lockout | `5` |
| **Lockout Duration** | Minutes locked out | `15` |
| **Two-Factor Auth** | Require 2FA | `Optional` |

### SIP Security

<!-- [IMG: security-settings-sip] -->

| Field | Description | Example |
|-------|-------------|---------|
| **SIP Password Policy** | Auto-generate strong | `Yes` |
| **Fail2Ban Enabled** | Block brute force | `Yes` |
| **Ban Duration** | Hours to block IP | `24` |

---

## 💡 Tips

> [!TIP]
> **Enable 2FA**: For admin accounts especially.

> [!TIP]
> **Fail2Ban is critical**: Blocks SIP brute force attacks.

> [!WARNING]
> **Use strong SIP passwords**: Weak passwords lead to toll fraud.

---

## 🔗 Related Modules

- [Users](../11-administration/users.md) — User accounts
- [API Keys](../11-administration/api-keys.md) — API security

---

*← Previous: [Email Settings](email-settings.md) | Next: [Phone Provisioning](phone-provisioning.md) →*
