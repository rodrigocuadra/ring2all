# Audit Log

## 📖 Introduction

Audit Log records all administrative actions in the system. Track who did what and when for security and compliance.

---

## 🎯 Events Tracked

| Event Type | Examples |
|------------|----------|
| **Create** | New extension, new user |
| **Update** | Changed settings |
| **Delete** | Removed items |
| **Login** | User login/logout |
| **Security** | Failed logins, password changes |

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → System → Audit Log`

![Audit Log](../../assets/images/reports/system/audit-logs-list.png)

---

## 📝 Audit Log View

![Audit Log View](../../assets/images/reports/system/audit-logs-list.png)

| Column | Description |
|--------|-------------|
| **Date/Time** | When action occurred |
| **User** | Who performed action |
| **Action** | Create, Update, Delete |
| **Module** | Affected area |
| **Details** | What changed |
| **IP Address** | User's IP |

### Filtering

| Filter | Options |
|--------|---------|
| Date Range | Start to End |
| User | Specific user |
| Action | Create/Update/Delete |
| Module | Extensions, Users, etc. |

---

## 🚀 Practical Example

### Investigate Who Changed Settings

1. Filter by Module: "General Settings"
2. Filter by Action: "Update"
3. Review changes and who made them

---

## 💡 Tips

> [!TIP]
> **Review regularly**: Check for unexpected changes.

> [!TIP]
> **Export for compliance**: Download logs for audits.

> [!TIP]
> **Track failed logins**: Watch for brute force attempts.

---

## 🔗 Related Modules

- [Users](users.md) — User accounts
- [Security Settings](../10-settings/security-settings.md) — Security policies

---

*← Previous: [Roles](roles.md) | Next: [API Keys](api-keys.md) →*
