# Ring2All Documentation Portal

<p align="center">
  <img src="assets/images/logo.svg" alt="Ring2All Logo" width="200">
</p>

<p align="center">
  <strong>Comprehensive Documentation for the Ring2All Enterprise PBX Platform</strong>
</p>

<p align="center">
  <a href="https://docs.ring2all.com">Live Documentation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#table-of-contents">Table of Contents</a>
</p>

---

## 📖 About

This repository contains the complete documentation for the **Ring2All Softswitch Platform** - a modern, enterprise-grade IP-PBX system built on FreeSWITCH with a powerful Node.js/React administration interface.

The documentation portal is built with PHP and features:
- 🎨 Modern glassmorphism UI design
- 🌙 Dark/Light theme support
- 🔍 Full-text search
- 🤖 AI-powered assistant
- 📱 Fully responsive design

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/ring2all/docs-portal.git

# Navigate to the directory
cd docs-portal

# Start with PHP built-in server (development)
php -S localhost:8000

# Or deploy to Apache/Nginx
```

---

## 📚 Table of Contents

### Introduction
- [Getting Started](content/introduction/getting-started.md)
- [Navigation](content/introduction/navigation.md)
- [Concepts](content/introduction/concepts.md)
- [Dashboard](content/introduction/dashboard.md)

### Installation
- [Overview](content/installation/README.md)
- [Single Server](content/installation/single-server.md)
- [Distributed Overview](content/installation/distributed-overview.md)
- [PostgreSQL Cluster](content/installation/postgresql-cluster.md)
- [File Server Cluster](content/installation/file-server-cluster.md)
- [Admin Server](content/installation/admin-server.md)
- [Portal Server](content/installation/portal-server.md)
- [Switchboard Server](content/installation/switchboard-server.md)
- [Telephony Server](content/installation/telephony-server.md)
- [HAProxy Setup](content/installation/haproxy-setup.md)

---

### PBX

#### Extensions
- [Extensions](content/pbx/extensions/extensions.md)
- [Hot Desking](content/pbx/extensions/hot-desking.md)
- [Bulk Modification](content/pbx/extensions/bulk-modification.md)
- [Extension Status](content/pbx/extensions/extension-status.md)

#### Applications
- [Conferences](content/pbx/applications/conferences.md)
- [Direct Dial](content/pbx/applications/direct-dial.md)
- [Direct Route](content/pbx/applications/direct-route.md)
- [Paging & Intercom](content/pbx/applications/paging-groups.md)
- [Custom Applications](content/pbx/applications/custom-applications.md)
- [Feature Codes](content/pbx/applications/feature-codes.md)
- [Pickup Groups](content/pbx/applications/pickup-groups.md)
- [Parking Lots](content/pbx/applications/parking-lots.md)
- [Speed Dialing](content/pbx/applications/speed-dials.md)
- [Voicemail Broadcast](content/pbx/applications/voicemail-broadcast.md)
- [Call Back](content/pbx/applications/callback-system.md)
- [DISA](content/pbx/applications/disa.md)
- [PIN List](content/pbx/applications/pin-lists.md)
- [Dynamic Destination](content/pbx/applications/dynamic-destinations.md)

#### Class of Service
- [Class Management](content/pbx/class-of-service/class-of-services.md)
- [Feature Categories](content/pbx/class-of-service/feature-categories.md)
- [Dial Restriction Rules](content/pbx/class-of-service/dial-rule-restrictions.md)
- [Customer Codes](content/pbx/class-of-service/customer-codes.md)
- [Authorization Codes](content/pbx/class-of-service/authorization-codes.md)
- [Route Selections](content/pbx/class-of-service/route-selections.md)

#### Call Center
- [Ring Groups](content/pbx/call-center/ring-groups.md)
- [Agents](content/pbx/call-center/agents.md)
- [Queues](content/pbx/call-center/queues.md)
- [Priority Routing](content/pbx/call-center/priority-routing.md)
- [Queue VIP](content/pbx/call-center/vip-lists.md)
- [Callback Profiles](content/pbx/call-center/callback-profiles.md)

#### Calls Routing
- [Gateways](content/pbx/routing/gateways.md)
- [Outbound Routes](content/pbx/routing/outbound-routes.md)
- [Inbound Routes](content/pbx/routing/inbound-routes.md)
- [Dynamic Routing](content/pbx/routing/dynamic-routing.md)

#### Incoming Call Tools
- [IVR](content/pbx/incoming-tools/ivrs.md)
- [Time Groups](content/pbx/incoming-tools/time-groups.md)
- [Time Conditions](content/pbx/incoming-tools/time-conditions.md)
- [Announcements](content/pbx/incoming-tools/announcements.md)
- [Languages](content/pbx/incoming-tools/languages.md)
- [Call Flows](content/pbx/incoming-tools/call-flows.md)
- [CID Modifiers](content/pbx/incoming-tools/cid-modifiers.md)
- [Caller ID Lookup](content/pbx/incoming-tools/caller-id-lookup.md)
- [Authentication Codes](content/pbx/incoming-tools/authentication-rules.md)

#### SMS Messaging
- [Providers](content/pbx/sms/sms-providers.md)
- [Numbers](content/pbx/sms/sms-numbers.md)
- [Routes](content/pbx/sms/sms-routes.md)
- [Messages](content/pbx/sms/sms-messages.md)
- [Settings](content/pbx/sms/sms-settings.md)
- [Opt-outs](content/pbx/sms/sms-optouts.md)

#### Tools
- [PBX CLI](content/pbx/tools/pbx-cli.md)
- [Blacklist](content/pbx/tools/blacklist.md)
- [Log File Viewer](content/pbx/tools/log-file-viewer.md)
- [Weak Password](content/pbx/tools/weak-passwords.md)
- [Phonebooks](content/pbx/tools/phonebooks.md)

#### Emergency Calls
- [Emergency Numbers](content/pbx/emergency/emergency-numbers.md)
- [Dispatchable Locations](content/pbx/emergency/dispatch-locations.md)

#### Virtual Faxes
- [Fax Devices](content/pbx/virtual-faxes/fax-devices.md)
- [Fax Sending](content/pbx/virtual-faxes/fax-sending.md)
- [Fax Viewer](content/pbx/virtual-faxes/fax-viewer.md)

---

### Reports

#### CDR Reports
- [CDR Filters](content/reports/cdr/cdr-filters.md)
- [Call Detail Records](content/reports/cdr/cdr.md)

#### PBX Reports
- [Active Calls](content/reports/pbx/active-calls.md)
- [SIP Endpoints](content/reports/pbx/sip-endpoints.md)

#### IVR Reports
- [IVR Statistics](content/reports/ivr/ivr-stats.md)

#### Call Center Reports
- [Queue Callback Report](content/reports/call-center/queue-callback.md)

#### System Reports
- [Audit Logs](content/reports/system/audit-logs.md)
- [Change History](content/reports/system/change-history.md)
- [Security Logs](content/reports/system/security-logs.md)
- [User Activity](content/reports/system/user-activity.md)

---

### Settings

#### Technology Settings
- [SIP Profiles](content/settings/technology/sip-profiles.md)
- [Device Profiles](content/settings/technology/device-profiles.md)
- [Gateway Profiles](content/settings/technology/gateway-profiles.md)
- [Dial Profiles](content/settings/technology/dial-profiles.md)

#### PBX Settings
- [General Settings](content/settings/pbx/general-settings.md)
- [System Variables](content/settings/pbx/system-variables.md)
- [Conference Profiles](content/settings/pbx/conference-profiles.md)
- [Queue Profiles](content/settings/pbx/queue-profiles.md)
- [ESL Users](content/settings/pbx/esl-users.md)
- [Log Settings](content/settings/pbx/logging-settings.md)
- [CDR Configuration](content/settings/pbx/cdr-settings.md)

#### Voice Prompts
- [PBX Voice Guide](content/settings/voice-prompts/pbx-guide.md)
- [Music on Hold](content/settings/voice-prompts/music-hold.md)
- [Recording Management](content/settings/voice-prompts/recording.md)

#### Provisioning
- [Vendors](content/settings/provisioning/vendors.md)
- [Device Models](content/settings/provisioning/device-models.md)
- [Server Settings](content/settings/provisioning/server-settings.md)
- [Security Settings](content/settings/provisioning/security-settings.md)
- [Templates](content/settings/provisioning/templates.md)
- [Devices](content/settings/provisioning/devices.md)

#### Integrations
- [CRM Integrations](content/settings/integrations/crm-integrations.md)

---

### Admin

#### Administration
- [Users](content/admin/administration/users.md)
- [Role Profiles](content/admin/administration/roles.md)
- [Log Profiles](content/admin/administration/log-profiles.md)
- [Application Keys](content/admin/administration/api-keys.md)

#### System Settings
- [Telephony Servers](content/admin/system-settings/telephony-servers.md)
- [System Misc](content/admin/system-settings/system-misc.md)
- [Branding](content/admin/system-settings/branding.md)
- [Email Settings](content/admin/system-settings/email-settings.md)
- [Email Templates](content/admin/system-settings/email-templates.md)
- [Certificates](content/admin/system-settings/certificates.md)
- [HTTP/HTTPS Server](content/admin/system-settings/http-server.md)

#### Multi-Tenant
- [Tenants](content/admin/multi-tenant/tenants.md)
- [Domains](content/admin/multi-tenant/domains.md)

#### Firewall
- [Firewall Settings](content/admin/firewall/firewall-settings.md)
- [Access Control](content/admin/firewall/access-control.md)
- [Services](content/admin/firewall/firewall-services.md)
- [Rules](content/admin/firewall/firewall-rules.md)
- [Geo Firewall](content/admin/firewall/geofirewall.md)

#### Network
- [Network Configuration](content/admin/network/network-configuration.md)
- [OpenVPN Server](content/admin/network/openvpn-server.md)
- [OpenVPN Client](content/admin/network/openvpn-client.md)

#### Maintenance
- [Backup & Restore](content/admin/maintenance/backup-restore.md)
- [Cron Profiles](content/admin/maintenance/cron-profiles.md)
- [System Cleanup](content/admin/maintenance/system-cleanup.md)
- [Custom Tasks](content/admin/maintenance/custom-tasks.md)

#### AI Integration
- [Providers](content/admin/ai-integration/providers.md)
- [AI Profiles](content/admin/ai-integration/ai-profiles.md)
- [AI Agents](content/admin/ai-integration/ai-agents.md)
- [AI Agent Call History](content/admin/ai-integration/ai-agent-call-history.md)

---

### Apps

#### User Portal
- [Overview](content/apps/user-portal/README.md)
- [Dashboard](content/apps/user-portal/dashboard.md)
- [Settings](content/apps/user-portal/settings.md)

#### Switchboard
- [Overview](content/apps/switchboard/README.md)
- [Console](content/apps/switchboard/console.md)

---

## 🏗️ Project Structure

```
docs-portal/
├── assets/
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript
│   └── images/        # Images and icons
├── content/           # Markdown documentation
│   ├── introduction/
│   ├── installation/
│   ├── pbx/
│   ├── reports/
│   ├── settings/
│   ├── admin/
│   └── apps/
├── includes/          # PHP includes
│   ├── functions.php
│   ├── header.php
│   ├── sidebar.php
│   └── markdown.php
├── screenshots/       # Module screenshots
├── config.php         # Configuration
├── index.php          # Entry point
├── menu.php           # Navigation structure
└── README.md          # This file
```

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| Backend | PHP 8.x |
| Styling | CSS3 with CSS Variables |
| Icons | Lucide Icons |
| Fonts | Inter, JetBrains Mono |
| Diagrams | Mermaid.js |
| Hosting | Apache/Nginx |

---

## 📄 License

Copyright © 2024 Ring2All LLC. All rights reserved.

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

---

<p align="center">
  Made with ❤️ by the Ring2All Team
</p>
