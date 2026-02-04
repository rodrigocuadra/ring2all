# Dial Rule Restrictions

## 📖 Introduction

Dial Rule Restrictions block specific number patterns. While Class of Service controls broad categories (international, premium), dial rules let you block specific patterns.

**Examples:**
- Block all 1-900 premium numbers
- Block international to specific countries
- Block specific area codes

---

## 🎯 Common Use Cases

| Block Pattern | Purpose |
|---------------|---------|
| `1900*` | Block 1-900 premium lines |
| `011*` | Block all international |
| `01152*` | Block calls to Mexico |
| `1976*` | Block pay-per-call services |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Class of Service → Dial Rule Restrictions`

<!-- [IMG: menu-navigation-dial-restrictions] -->

---

## 📝 Form Fields

<!-- [IMG: dial-restrictions-form] -->

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Rule identifier | `Block 900 Numbers` |
| **Pattern** | Number pattern to block | `1900*` |
| **Action** | Block or Allow | `Block` |
| **Message** | Audio to play when blocked | `This call cannot be completed` |
| **Enabled** | Rule is active | `Yes` |

### Pattern Examples

| Pattern | Blocks |
|---------|--------|
| `1900*` | All 1-900 numbers |
| `011*` | All international |
| `01152*` | Mexico only |
| `555*` | Fictional/movie numbers |

---

## 🚀 Practical Example

### Block 1-900 Premium Numbers

| Field | Value |
|-------|-------|
| Name | `Block Premium 900` |
| Pattern | `1900NXXXXXX` |
| Action | `Block` |
| Message | `Premium rate calls are not permitted` |

---

## 💡 Tips

> [!WARNING]
> **Test patterns carefully**: A wrong pattern can block legitimate calls.

> [!TIP]
> **Use specific patterns**: More specific = fewer false positives.

---

## 🔗 Related Modules

- [Class of Services](class-of-services.md) — Broader permission control
- [Outbound Routes](../03-pbx-routing/outbound-routes.md) — Route patterns

---

*← Previous: [Authorization Codes](authorization-codes.md) | Next: [Route Selections](route-selections.md) →*
