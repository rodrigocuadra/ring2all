# Gateways (SIP Trunks)

## 📖 Introduction

Gateways connect your PBX to the outside telephone network. They are SIP connections to VoIP providers, PSTN carriers, or other phone systems.

**Without gateways you cannot:**
- Make outbound calls to external numbers
- Receive inbound calls from the public phone network
- Connect to other office locations

---

## 🎯 Common Use Cases

| Scenario | Gateway Type |
|----------|-------------|
| Outbound/inbound PSTN calling | VoIP provider (Twilio, Telnyx, etc.) |
| Connection to legacy PBX | SIP trunk to old system |
| Multi-site connection | SIP trunk between offices |
| Failover provider | Backup when primary fails |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Routing → Gateways`

![Gateways](../../assets/images/pbx/calls-routing/gateways-list.png)

---

## 📝 Form Fields

### General Tab

<!-- [IMG: gateways-form-general-tab] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Gateway identifier | `Twilio Production` |
| **Gateway Type** | Registration type | `Register` |
| **Username** | SIP authentication username | `+15551234567` |
| **Password** | SIP authentication password | `your-sip-password` |
| **Realm/Domain** | SIP domain | `sip.twilio.com` |
| **Proxy** | SIP proxy address | `sip.twilio.com` |
| **Register** | Send SIP REGISTER | `Yes` |
| **Enabled** | Gateway is active | `Yes` |

### Advanced Tab

<!-- [IMG: gateways-form-advanced-tab] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Codec Preference** | Audio codecs to use | `G722, PCMU, PCMA` |
| **DTMF Mode** | How to send touch-tones | `RFC 2833` |
| **Transport** | SIP transport protocol | `UDP` |
| **Ping Interval** | Keep-alive frequency (sec) | `30` |
| **Retry Seconds** | Time between registration retries | `60` |

### Caller ID Tab

<!-- [IMG: gateways-form-callerid-tab] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Caller ID Name** | Default outbound name | `Acme Corporation` |
| **Caller ID Number** | Default outbound number | `+15551234567` |
| **Override Extension CID** | Use this instead of extension CID | `No` |

---

## 🚀 Practical Example: Adding Twilio Trunk

### Scenario

Connect to Twilio for PSTN calling.

### Step 1: Get Twilio SIP Credentials

From your Twilio console:
- SIP Domain: `yourcompany.sip.twilio.com`
- Username: Your Twilio phone number
- Password: Your SIP credential password

### Step 2: Create the Gateway

| Field | Value |
|-------|-------|
| Name | `Twilio Production` |
| Type | `Register` |
| Username | `+15551234567` |
| Password | `(your password)` |
| Realm | `yourcompany.sip.twilio.com` |
| Proxy | `yourcompany.sip.twilio.com` |
| Register | `Yes` |

<!-- [IMG: example-gateway-twilio] -->

### Step 3: Test Registration

Check gateway status - should show "Registered"

### Step 4: Create Routes

Create Inbound and Outbound routes to use this gateway.

---

## 💡 Tips & Best Practices

> [!TIP]
> **Test in sandbox first**: Most providers have test environments.

> [!TIP]
> **Set up failover**: Add a backup gateway in case primary fails.

> [!TIP]
> **Monitor registration**: Gateways can lose registration due to network issues.

> [!WARNING]
> **Secure credentials**: SIP passwords can rack up thousands in fraudulent calls if compromised.

---

## 🔗 Related Modules

- [Inbound Routes](inbound-routes.md) — Route incoming calls from gateways
- [Outbound Routes](outbound-routes.md) — Route outgoing calls through gateways

---

*Next: [Inbound Routes](inbound-routes.md) →*
