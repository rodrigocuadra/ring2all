# Authentication Rules

## 📖 Introduction

Authentication Rules require callers to enter a PIN before proceeding. Use them to restrict access to certain IVRs, conferences, or destinations.

---

## 🎯 Common Use Cases

| Access Point | Protection |
|--------------|------------|
| Executive IVR | Only authorized callers |
| DISA access | PIN required for dialing out |
| Conference rooms | PIN to prevent unauthorized access |
| VPN callback line | Employee verification |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Incoming Tools → Authentication Rules`

<!-- [IMG: menu-navigation-authentication-rules] -->

---

## 📝 Form Fields

<!-- [IMG: authentication-rules-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Rule identifier | `Executive Access` |
| **PIN List** | List of valid PINs | `Executive PINs` |
| **Max Attempts** | Failed tries before action | `3` |
| **Fail Destination** | Where if max attempts exceeded | `Hangup` |
| **Success Destination** | Where after valid PIN | `Executive IVR` |
| **Announcement** | "Please enter your PIN" | `default` |
| **Enabled** | Rule is active | `Yes` |

---

## 🚀 Practical Example

### Protect Executive Line

1. Create PIN List with executive PINs
2. Create Authentication Rule:
   - PIN List: `Executive PINs`
   - Max Attempts: `3`
   - Success: `Executive Ring Group`
   - Fail: `Hangup`
3. Route inbound DID to this auth rule

Now callers must enter a valid PIN to reach executives.

---

## 💡 Tips

> [!TIP]
> **Use unique PINs**: Track who accessed the system.

> [!TIP]
> **Set low max attempts**: 3 is usually sufficient.

> [!WARNING]
> **Secure PIN distribution**: Treat PINs as passwords.

---

## 🔗 Related Modules

- [PIN Lists](../02-pbx-applications/pin-lists.md) — Manage PIN codes
- [DISA](../02-pbx-applications/disa.md) — Dial-out with PIN

---

*← Previous: [Call Flows](call-flows.md)*
