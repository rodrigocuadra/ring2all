# Route Selections (ARS)

## 📖 Introduction

Automatic Route Selection (ARS) automatically chooses the best outbound route based on cost, availability, or other criteria. The system evaluates multiple routes and selects the optimal one.

---

## 🎯 Common Use Cases

| Scenario | ARS Benefit |
|----------|-------------|
| Cost optimization | Choose cheapest carrier |
| Failover | Use backup if primary fails |
| Load balancing | Distribute calls across trunks |
| Geographic routing | Use local carrier for local calls |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Class of Service → Route Selections`

![Route Selections](../../assets/images/pbx/class-of-service/route-selections-list.png)

---

## 📝 Form Fields

![Route Selections Form](../../assets/images/pbx/class-of-service/route-selections-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | ARS profile name | `Cost Optimized` |
| **Description** | Notes | `Cheapest route first` |
| **Selection Method** | How to choose routes | `Priority` |
| **Enabled** | Profile is active | `Yes` |

### Route Priority Table

| Priority | Route | Notes |
|----------|-------|-------|
| 1 | VoIP Carrier A | $0.01/min - primary |
| 2 | VoIP Carrier B | $0.02/min - backup |
| 3 | PSTN Trunk | $0.05/min - last resort |

---

## 🚀 Practical Example

### Cost-Optimized Long Distance

| Priority | Carrier | Reason |
|----------|---------|--------|
| 1 | Twilio | Cheapest |
| 2 | Telnyx | Backup |
| 3 | PSTN | Failsafe |

The system tries Twilio first. If unavailable, tries Telnyx, then PSTN.

---

## 💡 Tips

> [!TIP]
> **Include PSTN backup**: Ensures calls complete even if VoIP fails.

> [!TIP]
> **Monitor route usage**: Check CDR to see which routes are used most.

---

## 🔗 Related Modules

- [Gateways](../03-pbx-routing/gateways.md) — Define available trunks
- [Outbound Routes](../03-pbx-routing/outbound-routes.md) — Route destinations

---

*← Previous: [Dial Rule Restrictions](dial-rule-restrictions.md) | Next: [Feature Categories](feature-categories.md) →*
