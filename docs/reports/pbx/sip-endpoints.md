# SIP Endpoints

## 📖 Introduction

SIP Endpoints displays all registered SIP devices on the PBX. Monitor device status, registration details, and troubleshoot connectivity issues.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Registration Status | Online/offline status |
| Device Info | IP, user agent |
| Multiple Devices | Multi-device per extension |
| Refresh | Manual/auto refresh |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → PBX Reports → SIP Endpoints`

![SIP Endpoints](../../assets/images/reports/pbx/sip-endpoints-list.png)

---

## 📊 Display Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Extension** | Extension number | `101` |
| **Name** | User name | `John Smith` |
| **Status** | Registration status | `Registered` |
| **IP Address** | Device IP | `192.168.1.50` |
| **Port** | SIP port | `5060` |
| **User Agent** | Device type | `Yealink T54W` |
| **Registered** | Registration time | `2 hours ago` |
| **Expires** | Registration expiry | `3600 seconds` |

---

## 🔍 Status Indicators

| Status | Color | Description |
|--------|-------|-------------|
| **Registered** | 🟢 Green | Device online |
| **Unregistered** | 🔴 Red | Device offline |
| **Ringing** | 🟡 Yellow | Incoming call |
| **In Use** | 🟠 Orange | On a call |

---

## 💡 Tips

> [!TIP]
> **Check User Agent**: Helps identify device model and firmware.

> [!TIP]
> **Monitor expiry times**: Short expiry may indicate NAT issues.

---

## 🔗 Related Modules

- [Active Calls](active-calls.md) — Live calls
- [Extensions](../../pbx/extensions/extensions.md) — Extension management
- [Device Profiles](../../settings/technology/device-profiles.md) — Device settings
