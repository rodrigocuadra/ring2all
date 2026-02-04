# ESL Users

## 📖 Introduction

ESL (Event Socket Library) Users configures access for external applications connecting to FreeSWITCH. Required for advanced integrations and monitoring.

---

## ⚠️ Advanced Feature

> [!WARNING]
> **For developers only**: ESL access grants control over the phone system.

---

## 🖥️ Accessing the Module

**Navigation:** `Settings → PBX Settings → ESL Users`

![Esl Users](../assets/images/settings/pbx/esl-users-list.png)

---

## 📝 Form Fields

![Esl Users Form](../assets/images/settings/pbx/esl-users-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Username** | ESL login | `monitor` |
| **Password** | ESL password | `secure-password` |
| **Allowed IPs** | Source IP whitelist | `10.0.0.50` |
| **Inbound** | Allow inbound ESL | `Yes` |
| **Permissions** | Access level | `Read Only` |
| **Enabled** | User is active | `Yes` |

### Permission Levels

| Level | Access |
|-------|--------|
| **Read Only** | Events, status |
| **Execute** | Can run commands |
| **Full** | Complete control |

---

## 🔐 Security

> [!CAUTION]
> **Restrict IPs**: Always whitelist specific IPs.

> [!CAUTION]
> **Strong passwords**: ESL is powerful access.

> [!CAUTION]
> **Minimal permissions**: Grant only what's needed.

---

## 💡 Tips

> [!TIP]
> **Monitor for wallboards**: Read-only access for dashboards.

> [!TIP]
> **Log ESL activity**: Review who uses ESL.

---

## 🔗 Related Modules

- [API Keys](../11-administration/api-keys.md) — REST API access
- [Security Settings](security-settings.md) — Security config
