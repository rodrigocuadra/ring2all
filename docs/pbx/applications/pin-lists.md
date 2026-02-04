# PIN Lists

## 📖 Introduction

PIN Lists are collections of access codes that can be used to restrict or authorize access to certain features or destinations. Users must enter a valid PIN to proceed.

**Uses:**
- Restrict long-distance calling to authorized users
- Require PIN to access voicemail from external lines
- Control access to premium features

---

## 🎯 Common Use Cases

| Scenario | PIN List Use |
|----------|--------------|
| International calling | Only users with PIN can dial internationally |
| Remote voicemail access | Require PIN when calling from outside |
| Conference room access | PIN to join meetings |
| After-hours access | PIN to unlock calling after business hours |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → PIN Lists`

<!-- [IMG: menu-navigation-pin-lists] -->

---

## 📝 Form Fields

<!-- [IMG: pin-lists-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | PIN list identifier | `International Calling Auth` |
| **Description** | Notes | `Auth codes for intl dialing` |
| **Enabled** | List is active | `Yes` |

### PIN Entries

| PIN | Name | Enabled |
|-----|------|---------|
| `7738` | John Smith | Yes |
| `2468` | Jane Doe | Yes |
| `1357` | Bob Wilson | Yes |

---

## 🚀 Practical Example: International Calling PIN

### Step 1: Create the PIN List

| Field | Value |
|-------|-------|
| Name | `International Auth` |

### Step 2: Add Authorized PINs

Add a PIN for each employee who should be able to dial international numbers.

### Step 3: Link to Class of Service

In the Class of Service module, configure international routes to require this PIN list.

---

## 💡 Tips

> [!TIP]
> Use unique PINs for call tracking in CDR reports.

> [!WARNING]
> Don't share PINs between users - defeats accountability.

---

## 🔗 Related Modules

- [Class of Services](../04-class-of-service/class-of-services.md) — Link PIN lists to calling permissions
- [Authorization Codes](../04-class-of-service/authorization-codes.md) — Alternative authorization method

---

*← Previous: [Speed Dials](speed-dials.md) | Next: [Feature Codes](feature-codes.md) →*
