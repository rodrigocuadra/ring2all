# SIP Endpoints

## 📖 Introduction

SIP Endpoints shows real-time registration status of all SIP devices. Monitor which phones are online or offline.

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → PBX → SIP Endpoints`

![Sip Endpoints](../assets/images/reports/pbx/sip-endpoints-list.png)

---

## 📊 Endpoint List

![Sip Endpoints List](../assets/images/reports/pbx/sip-endpoints-list.png)

| Column | Description |
|--------|-------------|
| **Extension** | Extension number |
| **Name** | User name |
| **Status** | Registered/Unregistered |
| **User Agent** | Phone/software |
| **IP Address** | Device IP |
| **Port** | SIP port |
| **Last Seen** | Last registration |

### Status Indicators

| Status | Meaning |
|--------|---------|
| 🟢 Registered | Online, can receive calls |
| 🔴 Unregistered | Offline |
| 🟡 Expired | Recently offline |

---

## 🔍 Troubleshooting

### Phone Not Registered

1. Check power and network
2. Verify SIP credentials
3. Check firewall/NAT
4. Review extension settings

---

## 💡 Tips

> [!TIP]
> **Monitor daily**: Catch issues before users report.

> [!TIP]
> **Export for audit**: Download registration list.

---

## 🔗 Related Modules

- [Extension Status](../01-pbx-extensions/extension-status.md) — Extension monitor
- [Active Calls](active-calls.md) — Current calls
