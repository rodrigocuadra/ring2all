# Class of Services

## 📖 Introduction

Class of Service (CoS) defines what calls a user can make. It's a permission profile that controls access to different types of calls (local, long distance, international, premium).

**Think of it like a security policy** — you assign users to a CoS, and that determines their calling capabilities.

---

## 🎯 Common Use Cases

| Class of Service | Permissions |
|------------------|-------------|
| Executives | All calls (international included) |
| Standard Staff | Local + Long Distance |
| Lobby Phones | Local only, no long distance |
| Conference Rooms | Internal only + toll-free |
| Restricted | Internal extensions only |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Class of Service → Class of Services`

<!-- [IMG: menu-navigation-class-of-services] -->

---

## 📝 Form Fields

### General Tab

<!-- [IMG: class-of-services-form-general] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | CoS identifier | `Standard Employee` |
| **Code** | Short code | `STD` |
| **Description** | Notes | `Local and long distance` |
| **Enabled** | CoS is active | `Yes` |

### Permissions Tab

<!-- [IMG: class-of-services-form-permissions] -->

| Permission | Description | Example |
|------------|-------------|---------|
| **Allow Local** | Permit local calls | `Yes` |
| **Allow Long Distance** | Permit 1+ calls | `Yes` |
| **Allow International** | Permit 011+ calls | `No` |
| **Allow Toll-Free** | Permit 1-800 calls | `Yes` |
| **Allow Premium** | Permit 1-900 calls | `No` |
| **Allow Internal** | Permit extension-to-extension | `Yes` |
| **Allow Emergency** | Permit 911 | `Yes` |

### Route Restrictions Tab

<!-- [IMG: class-of-services-form-routes] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Allowed Routes** | Outbound routes this CoS can use | `Local, Long Distance` |
| **Denied Routes** | Routes explicitly blocked | `International` |

---

## 🚀 Practical Example: Lobby Phone CoS

### Scenario

Create a restricted CoS for lobby phones that only allows local calls.

### Configuration

| Field | Value |
|-------|-------|
| Name | `Lobby Phones` |
| Code | `LOBBY` |
| Allow Local | `Yes` |
| Allow Long Distance | `No` |
| Allow International | `No` |
| Allow Internal | `Yes` |
| Allow Emergency | `Yes` |

<!-- [IMG: example-cos-lobby] -->

### Assign to Extensions

Edit lobby phone extensions and set their Class of Service to "Lobby Phones".

---

## 💡 Tips

> [!TIP]
> **Always allow emergency (911)**: Never disable 911 access.

> [!TIP]
> **Create specific CoS profiles**: Better to have too many than too few.

> [!WARNING]
> **Test before production**: Verify users can make expected calls after CoS changes.

---

## 🔗 Related Modules

- [Extensions](../01-pbx-extensions/extensions.md) — Assign CoS to users
- [Dial Rule Restrictions](dial-rule-restrictions.md) — Block specific patterns
- [Authorization Codes](authorization-codes.md) — PIN-based override

---

*Next: [Authorization Codes](authorization-codes.md) →*
