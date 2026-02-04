# Extension Status

## 📖 Introduction

The Extension Status module provides a real-time view of all extensions in your system. You can see which extensions are registered (online), busy on calls, or offline.

**What you can do:**
- Monitor which phones are currently online
- See who is on a call in real-time
- Identify extensions that are offline and may need attention
- View registration details (IP address, user agent, registration time)

---

## 🎯 Common Use Cases

| Scenario | What You'll See |
|----------|-----------------|
| Troubleshooting "my phone won't ring" | Check if extension is registered |
| Identifying available agents | See who is not on a call |
| Network troubleshooting | View IP addresses of registered devices |
| Confirming phone setup | Verify successful registration |

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Extensions → Extension Status`

![Extension Status](../../assets/images/pbx/extensions/extension-status-list.png)

---

## 📝 Understanding the Display

<!-- [IMG: extension-status-main-view] -->

### Status Columns

| Column | Description | Example |
|--------|-------------|---------|
| **Extension** | The extension number | `1001` |
| **Name** | User's name | `John Smith` |
| **Status** | Current state (Registered, Away, Busy, Offline) | `Registered` |
| **IP Address** | Where the phone is connecting from | `192.168.1.100` |
| **User Agent** | Phone model/software being used | `Yealink T46G` |
| **Registered Since** | When the phone last registered | `Feb 3, 2026 10:45 AM` |

### Status Icons

| Icon | Status | Meaning |
|------|--------|---------|
| 🟢 | **Registered** | Phone is online and ready |
| 🟡 | **Away** | Phone registered but user set to away |
| 🔴 | **Busy** | Currently on a call |
| ⚫ | **Offline** | Phone is not registered |

---

## 🚀 Practical Example: Troubleshooting an Offline Phone

### Scenario

An employee reports their phone is not ringing. You need to check if it's registered.

### Step 1: Open Extension Status

Navigate to **PBX → Extensions → Extension Status**.

<!-- [IMG: example-extension-status-navigation] -->

### Step 2: Search for the Extension

Use the search bar to find the extension number (e.g., `1050`).

<!-- [IMG: example-extension-status-search] -->

### Step 3: Check the Status

- If **Offline**: The phone is not connected. Check network, power, or credentials.
- If **Registered**: The phone is connected. The issue may be with routing.

---

## 💡 Tips & Best Practices

> [!TIP]
> **Refresh frequently**: The status updates in real-time, but you can refresh to see the latest data.

> [!TIP]
> **Check User Agent**: If an extension shows multiple registrations, check the User Agent column to identify each device.

---

## 🔗 Related Modules

- [Extensions](extensions.md) — Configure extension settings
- [Active Calls](../09-reports/active-calls.md) — See calls in progress

---

*← Previous: [Extensions](extensions.md) | Next: [Bulk Modification](bulk-modification.md) →*
