# CID Modifiers

## 📖 Introduction

CID (Caller ID) Modifiers manipulate caller ID information on incoming or outgoing calls. Use them to add prefixes, remove digits, or completely rewrite caller IDs.

---

## 🎯 Common Use Cases

| Scenario | Modification |
|----------|--------------|
| Add country code | `+1` prefix to 10-digit |
| Strip leading digits | Remove `9` from `91234567890` |
| Internal formatting | Convert `+1555...` to `555...` |
| Anonymize outbound | Set specific caller ID |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Incoming Tools → CID Modifiers`

![Cid Modifiers](../../assets/images/pbx/incoming-tools/cid-modifiers-list.png)

---

## 📝 Form Fields

![Cid Modifiers Form](../../assets/images/pbx/incoming-tools/cid-modifiers-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Modifier name | `Add +1 Prefix` |
| **Description** | Purpose notes | `US numbers` |
| **Direction** | Inbound or Outbound | `Inbound` |
| **Match Pattern** | Numbers to modify | `^(\d{10})$` |
| **Replace Pattern** | Replacement | `+1$1` |
| **Priority** | Order of processing | `1` |
| **Enabled** | Modifier is active | `Yes` |

### Pattern Examples

| Match | Replace | Before | After |
|-------|---------|--------|-------|
| `^(\d{10})$` | `+1$1` | `5551234567` | `+15551234567` |
| `^9(\d+)$` | `$1` | `912345` | `12345` |
| `^1(\d{10})$` | `$1` | `15551234567` | `5551234567` |
| `.*` | `Anonymous` | `5551234567` | `Anonymous` |

---

## 🚀 Practical Example

### Normalize US Numbers

Incoming calls show different formats. Normalize to +1XXXXXXXXXX:

| Match Pattern | Replace | Effect |
|---------------|---------|--------|
| `^(\d{10})$` | `+1$1` | 10-digit to E.164 |
| `^1(\d{10})$` | `+1$1` | 11-digit (1+10) to E.164 |

---

## 💡 Tips

> [!TIP]
> **Test patterns**: Use regex testers before applying.

> [!WARNING]
> **Order matters**: Lower priority numbers run first.

---

## 🔗 Related Modules

- [Inbound Routes](../03-pbx-routing/inbound-routes.md) — Route by CID
- [Caller ID Lookup](caller-id-lookup.md) — Get caller name

---

*← Previous: [Caller ID Lookup](caller-id-lookup.md) | Next: [Call Flows](call-flows.md) →*
