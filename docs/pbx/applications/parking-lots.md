# Parking Lots

## 📖 Introduction

Call Parking allows you to "park" a call in a virtual slot so that someone else can pick it up from any phone. It's like putting a call on hold that anyone in the office can retrieve.

**How it works:**
1. You receive a call
2. You transfer it to a parking slot (e.g., 7001)
3. The system announces the slot number
4. Anyone can dial 7001 to pick up the parked call

---

## 🎯 Common Use Cases

| Scenario | How It Helps |
|----------|--------------|
| Unknown caller asks for someone | Park the call, page for that person |
| Need to find information | Park the call while you research |
| Transfer between floors/buildings | Park and announce over intercom |
| Busy receptionist | Park calls for team members to retrieve |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Applications → Parking Lots`

![Parking Lots](../../assets/images/pbx/applications/parking-lots-list.png)

---

## 📝 Form Fields

![Parking Lots Form](../../assets/images/pbx/applications/parking-lots-form.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Parking lot identifier | `Main Parking` |
| **Extension** | Slot range start | `7000` |
| **Slot Count** | Number of parking slots | `10` |
| **Music on Hold** | What parked callers hear | `default` |
| **Timeout** | Seconds before timeout action | `120` |
| **Timeout Destination** | Where call goes on timeout | `Extension: 1000` |
| **Enabled** | Parking lot is active | `Yes` |

> [!NOTE]
> If Extension is 7000 and Slot Count is 10, the slots will be 7001-7010.

---

## 🚀 Practical Example: Setting Up Call Parking

### Scenario

Create a parking lot with 5 slots (7001-7005) for the front office.

### Step 1: Create the Parking Lot

Go to **PBX → Applications → Parking Lots** and click **+ Add**.

### Step 2: Configure Settings

| Field | Value |
|-------|-------|
| Name | `Front Office Parking` |
| Extension | `7000` |
| Slot Count | `5` |
| Timeout | `120` |
| Timeout Destination | `Extension: 1000 (Receptionist)` |

<!-- [IMG: example-parking-lot-config] -->

### Step 3: How to Use

**To park a call:**
1. While on a call, press Transfer
2. Dial `7000` (or next available slot)
3. Complete the transfer
4. System announces "Parked in slot 7001"

**To retrieve a parked call:**
1. Pick up any phone
2. Dial `7001` (or the announced slot)
3. You're connected to the caller

---

## 💡 Tips & Best Practices

> [!TIP]
> **Set reasonable timeout**: 2 minutes (120s) gives time to find the right person.

> [!TIP]
> **Route timeout to receptionist**: So parked calls don't get lost.

> [!TIP]
> **BLF buttons**: Configure parking slots as BLF buttons to see occupied slots.

---

## 🔗 Related Modules

- [Feature Codes](feature-codes.md) — Configure parking feature codes
- [Paging Groups](paging-groups.md) — Announce parked calls
- [Extensions](../01-pbx-extensions/extensions.md) — BLF for parking slots

---

*← Previous: [Conferences](conferences.md) | Next: [Paging Groups](paging-groups.md) →*
