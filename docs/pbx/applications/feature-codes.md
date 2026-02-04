# Feature Codes

## 📖 Introduction

Feature Codes are short dial codes (like `*67` or `*97`) that activate phone system features. Instead of navigating menus, users dial a simple code.

**Common examples:**
- `*97` — Check voicemail
- `*72` — Enable call forwarding
- `*86` — Disable call forwarding
- `*67` — Block caller ID for one call

---

## 🎯 Common Use Cases

| Feature | Typical Code |
|---------|-------------|
| Check voicemail | `*97` |
| Enable call forward | `*72` |
| Disable call forward | `*73` |
| Do Not Disturb on | `*78` |
| Do Not Disturb off | `*79` |
| Directed call pickup | `*8` |
| Blind transfer | `*1` |
| Park call | `*68` |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Feature Codes`

![Feature Codes](../../assets/images/pbx/applications/feature-codes-list.png)

---

## 📝 Feature Code List

![Feature Codes List](../../assets/images/pbx/applications/feature-codes-list.png)

| Code | Feature | Description |
|------|---------|-------------|
| `*97` | Voicemail | Access your voicemail |
| `*98` | Voicemail (any) | Access any mailbox (requires PIN) |
| `*72` | Forward On | Enable call forwarding |
| `*73` | Forward Off | Disable call forwarding |
| `*78` | DND On | Enable Do Not Disturb |
| `*79` | DND Off | Disable Do Not Disturb |
| `*8` | Pickup | Pick up ringing call in group |
| `**` | Pickup Ext | Pick up specific extension |
| `*1` | Blind Transfer | Transfer without announcing |
| `*2` | Attended Transfer | Transfer with announcement |
| `*68` | Park Call | Park call in parking lot |
| `*0` | Intercom | Page another extension |

---

## 🚀 Practical Example: Using Call Forward

### To Enable Forwarding

1. Pick up phone
2. Dial `*72`
3. Enter destination number (e.g., `5551234567`)
4. Wait for confirmation tone

### To Disable Forwarding

1. Pick up phone
2. Dial `*73`
3. Wait for confirmation tone

---

## 💡 Tips

> [!TIP]
> Print a feature code quick reference card for users.

> [!TIP]
> Most codes can be customized in this module.

---

## 🔗 Related Modules

- [Extensions](../01-pbx-extensions/extensions.md) — Features that codes control
- [Speed Dials](speed-dials.md) — Custom dial shortcuts

---

*← Previous: [PIN Lists](pin-lists.md) | Next: [Direct Dial](direct-dial.md) →*
