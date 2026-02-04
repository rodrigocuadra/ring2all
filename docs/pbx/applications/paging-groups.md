# Paging Groups

## 📖 Introduction

Paging Groups allow you to make announcements over multiple phones simultaneously. When you dial a paging group, all phones in the group automatically answer (speaker on) and broadcast your voice.

**Uses:**
- Office-wide announcements
- Calling someone to pick up a parked call
- Emergency notifications
- End-of-day reminders

---

## 🎯 Common Use Cases

| Scenario | Paging Group |
|----------|--------------|
| "John, you have a call on line 1" | All phones in the office |
| "The meeting is starting in 5 minutes" | Conference room area phones |
| "Fire drill - please evacuate" | Emergency all-page |
| Warehouse intercom | Warehouse extension phones |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Paging Groups`

<!-- [IMG: menu-navigation-paging-groups] -->

---

## 📝 Form Fields

<!-- [IMG: paging-groups-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Group identifier | `All Office Page` |
| **Extension** | Number to dial to page | `*77` |
| **Description** | Notes about this group | `Pages all common areas` |
| **Duplex** | Two-way (intercom) vs one-way (announcement) | `No` |
| **Announcement** | Audio to play before paging | `(none)` |
| **Enabled** | Group is active | `Yes` |

### Members

Add extensions that will receive the page:

| Extension | Name |
|-----------|------|
| `1001` | Reception |
| `1002` | Office A |
| `1003` | Office B |
| `1004` | Conference Room |

---

## 🚀 Practical Example: All-Office Paging

### Step 1: Create the Paging Group

Go to **PBX → Applications → Paging Groups** and click **+ Add**.

### Step 2: Configure Settings

| Field | Value |
|-------|-------|
| Name | `All Office` |
| Extension | `*77` |
| Duplex | `No` (one-way is typical for paging) |

### Step 3: Add Members

Add all common area phones and office extensions.

### Step 4: How to Use

1. Pick up any phone
2. Dial `*77`
3. Wait for the beep
4. Speak your announcement
5. Hang up when done

---

## 💡 Tips & Best Practices

> [!TIP]
> **Use for parked call announcements**: "John, call for you on 7001"

> [!TIP]
> **Create zone-based groups**: Sales floor, warehouse, conference rooms

> [!WARNING]
> **Phone compatibility**: Auto-answer/paging requires compatible phones (Yealink, Polycom, etc.)

> [!WARNING]
> **Duplex mode**: Only use for small intercom groups, not large pages.

---

## 🔗 Related Modules

- [Parking Lots](parking-lots.md) — Park calls to announce
- [Extensions](../01-pbx-extensions/extensions.md) — Configure auto-answer capability

---

*← Previous: [Parking Lots](parking-lots.md) | Next: [Pickup Groups](pickup-groups.md) →*
