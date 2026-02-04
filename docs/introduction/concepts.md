# Basic Telephony Concepts

## 📖 Introduction

Before configuring Ring2All, it helps to understand basic telephony terms and concepts.

---

## 📞 Key Terms

### Extensions

An **extension** is a phone line inside your organization. Usually a 3-4 digit number like 1001, 1002, etc.

| Property | Example |
|----------|---------|
| Extension Number | 1001 |
| User | John Smith |
| Device | Desk phone, softphone |

### DID (Direct Inward Dialing)

A **DID** is an external phone number that people dial to reach you. 

| DID | Routes To |
|-----|-----------|
| +1-555-123-4567 | Main IVR |
| +1-555-123-4568 | John's Extension (1001) |

### SIP Trunk / Gateway

A **SIP Trunk** (also called Gateway) connects your PBX to the outside world through a VoIP provider like Twilio or Telnyx.

```
Caller → PSTN → Provider → SIP Trunk → PBX → Extension
```

### IVR (Interactive Voice Response)

An **IVR** is an automated phone menu:
- "Press 1 for Sales"
- "Press 2 for Support"
- "Press 0 for Operator"

### Queue

A **Queue** holds callers until an agent is available. Used for support lines, sales teams, etc.

### Ring Group

A **Ring Group** rings multiple extensions simultaneously or sequentially until someone answers.

---

## 📊 Call Flow Example

```
Incoming Call (+1-555-123-4567)
    ↓
Inbound Route (matches DID)
    ↓
Time Condition (is it business hours?)
    ↓
    ├─ Yes → Main IVR
    │           ↓
    │        Press 1 → Sales Queue → Agent answers
    │        Press 2 → Support Queue → Agent answers
    │        Press 0 → Receptionist (ext 1000)
    │
    └─ No → After Hours Announcement → Voicemail
```

---

## 🔗 SIP Basics

### SIP (Session Initiation Protocol)

The protocol that makes VoIP calls work. You'll see these terms:

| Term | Meaning |
|------|---------|
| **SIP Server** | The PBX IP address |
| **SIP Port** | Usually 5060 (UDP) or 5061 (TLS) |
| **Username** | Extension number |
| **Password** | SIP password |
| **Register** | Phone connects to server |

### Registration

When a phone "registers," it tells the PBX:
- "I'm extension 1001"
- "Reach me at this IP address"

This allows the PBX to route calls to the phone.

---

## 📞 Call Types

| Type | Description |
|------|-------------|
| **Internal** | Extension to Extension (1001 → 1002) |
| **Inbound** | Outside caller → Extension |
| **Outbound** | Extension → Outside number |

---

## 💡 Tips

> [!TIP]
> **Test internally first**: Make extension-to-extension calls before testing external calls.

> [!TIP]
> **Check registration**: Most problems are phone registration issues.

---

## 🔗 Related

- [Getting Started](getting-started.md)
- [Extensions](../01-pbx-extensions/extensions.md)
- [Gateways](../03-pbx-routing/gateways.md)
