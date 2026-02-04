# Users

## 📖 Introduction

Users manages admin panel access. Each user has a role (Administrator, Operator, Viewer) that controls what they can see and do.

---

## 🎯 User Roles

| Role | Permissions |
|------|-------------|
| **Administrator** | Full access to everything |
| **Operator** | Manage calls, view reports |
| **Viewer** | Read-only access |
| **Custom** | Defined permissions |

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Users & Roles → Users`

![Users](../../assets/images/admin/admin/users-list.png)

---

## 📝 Form Fields

![Users Form](../../assets/images/admin/admin/users-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Username** | Login name | `jsmith` |
| **Email** | User email | `jsmith@company.com` |
| **First Name** | Display name | `John` |
| **Last Name** | Display name | `Smith` |
| **Password** | Account password | `(secure password)` |
| **Role** | Permission level | `Administrator` |
| **Two-Factor** | Require 2FA | `Yes` |
| **Enabled** | Account is active | `Yes` |

---

## 🚀 Practical Example

### Create New Administrator

| Field | Value |
|-------|-------|
| Username | `admin2` |
| Email | `admin2@company.com` |
| Role | `Administrator` |
| Two-Factor | `Yes` |

---

## 💡 Tips

> [!TIP]
> **Track who makes changes**: Audit log shows user actions.

> [!TIP]
> **Require 2FA for admins**: Extra security layer.

> [!TIP]
> **Use personal accounts**: No shared admin accounts.

---

## 🔗 Related Modules

- [Roles](roles.md) — Define custom roles
- [Audit Log](audit-log.md) — User activity log
- [Security Settings](../10-settings/security-settings.md) — Password policies

---

*Next: [Roles](roles.md) →*
