# Network Configuration

## 📖 Introduction

Network Configuration manages server network interfaces, IP addresses, and DNS settings.

---

## ⚠️ Critical Settings

> [!CAUTION]
> **Test changes carefully**: Incorrect settings can disconnect the server.

---

## 🖥️ Accessing the Module

**Navigation:** `Admin → Network → Network Configuration`

![Network Configuration](../../assets/images/admin/network/network-config-list.png)

---

## 📝 Network Interfaces

![Network Configuration Interfaces](../../assets/images/admin/network/network-config-list.png)

| Field | Description | Example |
|-------|-------------|---------|
| **Interface** | Network adapter | `eth0` |
| **IP Address** | Static IP | `192.168.1.10` |
| **Netmask** | Subnet mask | `255.255.255.0` |
| **Gateway** | Default gateway | `192.168.1.1` |
| **DHCP** | Auto-configure | `No` |

### DNS Settings

| Field | Description | Example |
|-------|-------------|---------|
| **Primary DNS** | First nameserver | `8.8.8.8` |
| **Secondary DNS** | Backup nameserver | `8.8.4.4` |
| **Search Domain** | Domain suffix | `company.local` |

---

## 💡 Tips

> [!TIP]
> **Use static IP**: Dynamic IPs break SIP.

> [!TIP]
> **Document changes**: Keep network records.

> [!CAUTION]
> **Have console access**: Before changing network.

---

## 🔗 Related Modules

- [SIP Profiles](../10-settings/sip-profiles.md) — SIP network config
- [Firewall Settings](../11-administration/firewall-settings.md) — Security
