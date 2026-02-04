# Dispatch Locations

## 📖 Introduction

Dispatch Locations define physical addresses for E911 emergency services. When someone dials 911, their location information is sent to emergency responders.

---

## ⚠️ Why This Matters

When you call 911 from VoIP, the system must send your correct address. With traditional phones, the address is tied to the phone line. With VoIP, you configure it.

> [!CAUTION]
> **Life safety issue**: Incorrect location data can delay emergency response.

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Emergency → Dispatch Locations`

<!-- [IMG: menu-navigation-dispatch-locations] -->

---

## 📝 Form Fields

<!-- [IMG: dispatch-locations-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Location identifier | `Main Office` |
| **Address Line 1** | Street address | `123 Main Street` |
| **Address Line 2** | Suite/Floor | `Suite 400` |
| **City** | City | `New York` |
| **State** | State/Province | `NY` |
| **ZIP/Postal** | Postal code | `10001` |
| **Country** | Country | `USA` |
| **Caller ID** | E911 caller ID | `+15551234567` |
| **Enabled** | Location is active | `Yes` |

### Extension Assignments

Assign extensions to each location:

| Extensions | Location |
|------------|----------|
| 1000-1099 | Main Office |
| 1100-1199 | Branch Office |
| 1200-1299 | Warehouse |

---

## 🚀 Practical Example

### Multi-Building Setup

**Location 1: Headquarters**
- Address: 123 Main St, Suite 400, New York, NY 10001
- Extensions: 1000-1099

**Location 2: Warehouse**
- Address: 456 Industrial Ave, Brooklyn, NY 11201
- Extensions: 1100-1199

When extension 1050 dials 911, responders go to headquarters.
When extension 1150 dials 911, responders go to warehouse.

---

## ⚠️ Critical Requirements

> [!CAUTION]
> **Update when you move**: Update addresses before moving equipment.

> [!CAUTION]
> **Test with non-emergency number**: Many PSAPs have non-emergency test numbers.

> [!WARNING]
> **Remote workers**: Home workers need their home address, not office.

---

## 🔗 Related Modules

- [Emergency Numbers](emergency-numbers.md) — E911 configuration
- [Extensions](../01-pbx-extensions/extensions.md) — Assign to locations

---

*← Previous: [Emergency Numbers](../06-incoming-tools/emergency-numbers.md)*
