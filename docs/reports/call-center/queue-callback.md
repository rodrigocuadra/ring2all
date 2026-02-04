# Queue Callback Report

## 📖 Introduction

Queue Callback Report tracks callback requests from callers waiting in queue. Monitor callback success rates, response times, and agent performance.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| Callback Tracking | Request monitoring |
| Success Rates | Completed callbacks |
| Response Times | Time to callback |
| Agent Metrics | Agent performance |

---

## 🖥️ Accessing the Module

**Navigation:** `Reports → Call Center Reports → Queue Callback Report`

![Queue Callback](../../assets/images/reports/call-center/queue-callback-list.png)

---

## 📊 Report Fields

### Callback Request

| Field | Description | Example |
|-------|-------------|---------|
| **Request Time** | When requested | `2024-01-15 14:30` |
| **Caller** | Caller number | `+15551234567` |
| **Queue** | Source queue | `Sales Queue` |
| **Status** | Callback status | `Completed` |

### Response Metrics

| Field | Description | Example |
|-------|-------------|---------|
| **Response Time** | Time to callback | `5 minutes` |
| **Agent** | Handling agent | `John Smith` |
| **Call Duration** | Callback length | `3:45` |
| **Attempts** | Callback attempts | `1` |

---

## 📈 Summary Statistics

| Metric | Description |
|--------|-------------|
| **Total Requests** | Callback requests |
| **Completed** | Successful callbacks |
| **Failed** | Unreachable callers |
| **Avg Response** | Average response time |

---

## 💡 Tips

> [!TIP]
> **Monitor response times**: Quick callbacks improve satisfaction.

> [!WARNING]
> **Track failed callbacks**: Follow up on unreachable callers.

---

## 🔗 Related Modules

- [Callback Profiles](../../pbx/call-center/callback-profiles.md) — Callback settings
- [Queues](../../pbx/call-center/queues.md) — Queue configuration
