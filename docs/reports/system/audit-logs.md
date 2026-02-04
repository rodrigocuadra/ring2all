# Audit Logs

## 📖 Introduction

Audit Logs record all administrative actions in the system. Track who changed what, when, for security and compliance.

---

## 🎯 Events Logged

| Event | Details Captured |
|-------|-----------------|
| Create | New items added |
| Update | Changes made |
| Delete | Items removed |
| Login | Admin logins |
| Logout | Admin logouts |
| Failed Login | Invalid credentials |
| Export | Data exports |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → Audit Logs`

![Audit Logs](../assets/images/reports/system/audit-logs-list.png)

---

## 📝 Log View

<!-- [IMG: audit-logs-view] -->

| Column | Description |
|--------|-------------|
| **Timestamp** | When action occurred |
| **User** | Who performed action |
| **Action** | Create/Update/Delete |
| **Module** | Area affected |
| **Details** | Specific changes |
| **IP Address** | User's IP |
| **User Agent** | Browser info |

### Filtering

| Filter | Options |
|--------|---------|
| Date Range | Start/End date |
| User | Specific user |
| Action Type | Create/Update/Delete/Login |
| Module | Extensions/Users/etc. |

---

## 🚀 Practical Example

### Investigate Configuration Change

A setting was changed unexpectedly. Find out who did it:

1. Filter by Module: `General Settings`
2. Filter by Action: `Update`
3. Filter by Date: Last 7 days
4. Review entries to find the change

---

## 💡 Tips

> [!TIP]
> **Review regularly**: Check for unauthorized changes.

> [!TIP]
> **Export for compliance**: Download logs for audits.

> [!TIP]
> **Failed login alerts**: Watch for brute force attempts.

---

## 🔗 Related Modules

- [Users](../11-administration/users.md) — Who can access
- [Roles](../11-administration/roles.md) — Permission sets

---

*← Previous: [Queue Reports](queue-reports.md)*
