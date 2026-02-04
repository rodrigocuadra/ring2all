# Weak Passwords

## 📖 Introduction

Weak Passwords scans for extensions with insecure SIP passwords. Identifies potential security vulnerabilities before attackers do.

---

## ⚠️ Security Critical

> [!CAUTION]
> **Address all weak passwords**: They are the #1 cause of toll fraud.

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Tools → Weak Passwords`

![Weak Passwords](../../assets/images/pbx/tools/weak-password-list.png)

---

## 📊 Scan Results

![Weak Passwords Results](../../assets/images/pbx/tools/weak-password-list.png)

| Column | Description |
|--------|-------------|
| **Extension** | Extension number |
| **Name** | User name |
| **Issue** | Type of weakness |
| **Severity** | High/Medium/Low |
| **Action** | Fix button |

### Weakness Types

| Type | Risk Level |
|------|------------|
| Same as extension | 🔴 Critical |
| Common password | 🔴 Critical |
| Too short (<8) | 🟠 High |
| No numbers | 🟡 Medium |
| Dictionary word | 🟡 Medium |

---

## 🚀 Fixing Weak Passwords

### Individual Fix

1. Click **Fix** next to extension
2. New password auto-generated
3. Update phone with new password

### Bulk Fix

1. Select all weak passwords
2. Click **Generate New Passwords**
3. Download CSV with new passwords
4. Update all phones

---

## 💡 Tips

> [!TIP]
> **Run weekly**: Schedule regular security scans.

> [!TIP]
> **Force strong passwords**: Enable in Security Settings.

> [!TIP]
> **Auto-generate**: Let system create secure passwords.

> [!CAUTION]
> **Never use extension as password**: Most common attack vector.

---

## 🔗 Related Modules

- [Security Settings](../10-settings/security-settings.md) — Password policies
- [Extensions](../01-pbx-extensions/extensions.md) — Update passwords
