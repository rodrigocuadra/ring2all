# Getting Started

## 📖 Welcome to Ring2All PBX

Ring2All is a full-featured VoIP phone system that runs on your own server. This guide will help you understand the basics and get your system up and running.

---

## 🎯 What is Ring2All?

Ring2All PBX provides:

| Feature | Description |
|---------|-------------|
| **Extensions** | Individual phone lines for users |
| **IVR** | "Press 1 for Sales, 2 for Support..." |
| **Queues** | Hold callers until agents are available |
| **Voicemail** | Record messages when not available |
| **Call Recording** | Record calls for training/compliance |
| **AI Agents** | Automated voice assistants |

---

## 🚀 First Steps

### 1. Access the Admin Panel

Open your browser and go to:
```
https://your-pbx-server.com/admin
```

Login with your administrator credentials.

![Login Screen](../assets/images/general/login-screen.png)

### 2. Understand the Interface

| Area | Purpose |
|------|---------|
| **Sidebar** | Navigation menu |
| **Top Bar** | Search, user menu, notifications |
| **Main Area** | Configuration forms and data |
| **Dashboard** | Overview and statistics |

![Admin Interface Overview](../assets/images/general/dashboard-list.png)

### 3. Basic Setup Order

For a new installation, configure in this order:

1. **General Settings** — Company info, timezone
2. **Extensions** — Create user phone lines
3. **Gateways** — Connect SIP trunks
4. **Inbound Routes** — Route incoming calls
5. **Outbound Routes** — Enable outgoing calls
6. **IVRs** — Create phone menus

---

## 📞 Making Your First Call

After basic setup:

1. Register a phone or softphone to an extension
2. Dial another extension number
3. Call should connect!

If it doesn't work, check:
- Extension Status (is phone registered?)
- SIP credentials (extension/password correct?)
- Network (can phone reach server?)

---

## 🔗 Next Steps

- [Navigating the Interface](navigation.md)
- [Basic Telephony Concepts](concepts.md)
- [Extensions Guide](../01-pbx-extensions/extensions.md)

---

*Welcome to Ring2All! Let's get started.*
