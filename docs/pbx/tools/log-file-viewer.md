# Log File Viewer

## 📖 Introduction

Log File Viewer displays system logs in real-time. Essential for troubleshooting call issues, registration problems, and system errors.

---

## 🖥️ Accessing the Module

**Navigation:** `PBX → Tools → Log File Viewer`

![Log File Viewer](../../assets/images/pbx/tools/log-viewer-list.png)

---

## 📝 Available Logs

| Log Type | Contains |
|----------|----------|
| **FreeSWITCH** | Call processing, SIP messages |
| **Application** | PBX application logs |
| **API** | REST API requests |
| **Error** | System errors |
| **Security** | Auth failures, blocked IPs |

---

## 🔍 Using the Viewer

![Log File Viewer Interface](../../assets/images/pbx/tools/log-viewer-list.png)

### Controls

| Control | Function |
|---------|----------|
| **Log Type** | Select which log to view |
| **Lines** | Number of lines to show |
| **Auto-refresh** | Update automatically |
| **Search** | Filter log entries |
| **Download** | Export log file |

### Searching

Enter keywords to filter:
- Extension number: `1001`
- SIP code: `401`
- IP address: `192.168.1.100`

---

## 🚀 Practical Example

### Debug Registration Failure

1. Select: FreeSWITCH log
2. Search: `401` (unauthorized)
3. Find entries showing auth failures
4. Check username/password

---

## 💡 Tips

> [!TIP]
> **Use search effectively**: Filter by extension or IP.

> [!TIP]
> **Real-time for live issues**: Enable auto-refresh.

> [!TIP]
> **Download for deep analysis**: Export large log files.

---

## 🔗 Related Modules

- [PBX CLI](pbx-cli.md) — CLI commands
- [Audit Logs](../09-reports/audit-logs.md) — Admin actions
