# Log Profiles

## 📖 Introduction

Log Profiles configures what admin actions get logged to the audit trail. Control which events are tracked for compliance.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Users & Roles → Log Profiles`

![Log Profiles](../../assets/images/admin/admin/log-profiles-list.png)

---

## 📝 Form Fields

![Log Profiles Form](../../assets/images/admin/admin/log-profiles-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Profile name | `Full Audit` |
| **Description** | Purpose | `Compliance logging` |
| **Log Creates** | Track new items | `Yes` |
| **Log Updates** | Track changes | `Yes` |
| **Log Deletes** | Track removals | `Yes` |
| **Log Views** | Track what's viewed | `No` |
| **Log Logins** | Track login/logout | `Yes` |

### Module Filtering

| Category | Log |
|----------|-----|
| Extensions | ✅ |
| Users | ✅ |
| Routes | ✅ |
| Settings | ✅ |
| Reports | ❌ (view-only) |

---

## 💡 Tips

> [!TIP]
> **Full logging for compliance**: Required in some industries.

> [!TIP]
> **Skip views**: Reduces log volume.

---

## 🔗 Related Modules

- [Audit Log](../11-administration/audit-log.md) — View audit trail
- [Roles](../11-administration/roles.md) — Assign log profiles
