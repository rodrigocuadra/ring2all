# Phonebooks

## 📖 Introduction

Phonebooks are contact directories that can be provisioned to IP phones. Create company phonebooks with frequently called numbers.

---

## 🎯 Common Use Cases

| Phonebook | Contents |
|-----------|----------|
| Company Directory | All employees |
| Emergency Contacts | Emergency numbers |
| Vendors | External contacts |
| Speed Dials | Frequently called |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Tools → Phonebooks`

![Phonebooks](../../assets/images/pbx/tools/phonebooks-list.png)

---

## 📝 Form Fields

![Phonebooks Form](../../assets/images/pbx/tools/phonebooks-form.png)

### Phonebook Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Phonebook name | `Company Directory` |
| **Description** | Purpose notes | `All employees` |
| **Auto-sync** | Sync to phones | `Yes` |
| **Enabled** | Phonebook is active | `Yes` |

### Contacts

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Contact name | `John Smith` |
| **Number** | Phone number | `1001` |
| **Department** | Group/dept | `Sales` |
| **Speed Dial** | Quick dial code | `21` |

---

## 🚀 Practical Example

### Create Employee Directory

1. Create phonebook "Employee Directory"
2. Import contacts from CSV
3. Enable auto-sync to phones
4. Phones receive updated contacts

---

## 💡 Tips

> [!TIP]
> **Import from CSV**: Bulk add contacts.

> [!TIP]
> **Use departments**: Organize large directories.

> [!TIP]
> **Auto-sync phones**: Contacts update automatically.

---

## 🔗 Related Modules

- [Speed Dials](../02-pbx-applications/speed-dials.md) — System speed dials
- [Extensions](../01-pbx-extensions/extensions.md) — Internal contacts
