# 🧪 Ring2All Platform — Master Test Plan

> **Versión:** 1.0 · **Fecha:** Marzo 2026 · **Entorno:** Laboratorio (`192.168.10.31`)
> **Clasificación:** Interno · **Estado:** Activo

---

## 📌 Propósito del Documento

Este documento es el **Plan de Pruebas Maestro** de la plataforma **Ring2All Softswitch**. Su objetivo es garantizar que cada módulo, flujo de llamadas y función de la plataforma opere correctamente antes de un despliegue a producción, actualización de versión o validación de nuevas funcionalidades.

El plan cubre:

- ✅ **Tests de Interfaz de Usuario (UI)** — navegación, formularios CRUD, validaciones
- ✅ **Tests Funcionales de Telefonía** — flujos de llamadas end-to-end sobre FreeSWITCH
- ✅ **Tests del Portal de Usuario** — autogestión, softphone WebRTC integrado
- ✅ **Tests de Dashboards** — Admin Dashboard y Switchboard Console

---

## 🏗️ Arquitectura de la Plataforma

```
┌─────────────────────────────────────────────────────────────┐
│                    Ring2All Platform                         │
│                                                             │
│  ┌────────────┐  ┌────────────┐  ┌─────────────────────┐  │
│  │ Admin Web  │  │  API Node  │  │   FreeSWITCH PBX    │  │
│  │ React/TS   │──│  Fastify   │──│   + Lua Scripts     │  │
│  └────────────┘  └────────────┘  └─────────────────────┘  │
│         │               │                    │              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              PostgreSQL 17 (ss_telephony)             │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

| Componente | Tecnología | Puerto |
|-----------|-----------|--------|
| **Frontend Admin** | React 18 + TypeScript + Tailwind v4 | `:3000` |
| **API Backend** | Node.js 22 + Fastify + Prisma 7 | `:4000` |
| **PBX Engine** | FreeSWITCH + Lua scripting | `5060 UDP/TCP` |
| **Base de Datos** | PostgreSQL 17 (Debian 13) | `5432` |
| **Portal de Usuario** | React + WebRTC SIP | `:3001` |

---

## 📂 Estructura del Test Plan

El documento está organizado en **4 capítulos principales**:

| Capítulo | Descripción | Módulos |
|----------|-------------|---------|
| **🖥️ PBX** | Tests de UI y configuración del PBX | Extensions · Applications · Class of Service · Call Center · Calls Routing · Incoming Call Tools · SMS · Tools · Emergency · Virtual Faxes |
| **📞 Telephony** | Tests funcionales end-to-end de telefonía | Basic Calls · Voicemail · Feature Codes · Call Center |
| **👤 User Portal** | Tests del portal de autogestión del usuario | Login · Self-Service · Settings |
| **📊 Reports** | Tests de reportes y visibilidad | CDR · PBX Reports · IVR Stats · Call Center Reports · System Reports |
| **⚙️ Settings** | Tests de configuración del sistema | Technology · PBX Settings · Voice Prompts · Provisioning |
| **🛡️ Admin** | Tests de administración y consolas | Dashboard · Switchboard · Users · System Settings · AI Integration |

---

## 🧩 Alcance y Cobertura

| Área | Módulos Cubiertos |
|------|-------------------|
| **PBX / Extensions** | Extensions, Hot Desking, Bulk Modification, Status |
| **PBX / Applications** | Conferences, Direct Dial, Direct Route, Paging, Custom Apps, Feature Codes, Pickup Groups, Parking, Speed Dials, Voicemail Broadcast, Callback, DISA, PIN List, Dynamic Destination, Phonebooks |
| **PBX / Class of Service** | Class Management, Feature Categories, Dial Restriction Rules, Customer Codes, Authorization Codes, Route Selections |
| **PBX / Call Center** | Ring Groups, Agents, Queues, Priority Routing, Queue VIP, Callback Profiles |
| **PBX / Calls Routing** | Gateways, Outbound Routes, Inbound Routes, Dynamic Routing |
| **PBX / Incoming Call Tools** | IVR, Time Groups, Time Conditions, Announcements, Languages, Call Flows, CID Modifiers, CID Lookup, Authentication Codes, Blacklist |
| **PBX / SMS** ⭐ | Providers, Numbers, Routes, Messages, Settings, Opt-Outs |
| **PBX / Tools** ⭐ | CLI Console, Dashboard, Log Viewer, Weak Password |
| **PBX / Emergency** ⭐ | Emergency Numbers, Emergency Locations |
| **PBX / Virtual Faxes** ⭐ | Fax Devices, Fax Sending, Fax Viewer |
| **Reports** ⭐ | CDR Filters + CDR, Active Calls, SIP Endpoints, IVR Stats, Queue Callback, System Reports |
| **Settings** ⭐ | Technology, PBX Settings, Voice Prompts, Provisioning, Integrations |
| **Admin** ⭐ | Users, Role Profiles, App Keys, System Settings, AI Integration |
| **Telephony Funcional** | Llamadas internas/externas, Voicemail, Feature Codes, Colas |
| **User Portal** | Login, Self-Service |
| **Dashboards** | Admin Dashboard, Switchboard Console |

> ⭐ = Sección añadida en esta revisión del test plan (v2.0)

---

## ⚙️ Entorno de Laboratorio

| Parámetro | Valor |
|-----------|-------|
| **Servidor** | `192.168.10.31` (Debian 13 Trixie, single-node) |
| **Dominio de prueba** | `main.local` |
| **SIP Port** | `5060 UDP` |
| **Softphones soportados** | Zoiper · MicroSIP · Linphone |
| **Credenciales admin** | `admin@main.local` |

---

## 🔑 Cómo Usar Este Documento

1. **Comienza por el Setup** (sección siguiente) — crea las extensiones de prueba antes de ejecutar cualquier test
2. **Sigue el orden de los capítulos** — los módulos tienen dependencias (primero crear extensiones, luego asignarlas a grupos, etc.)
3. **Marca el estado** de cada test usando los símbolos de la leyenda
4. **Documenta bugs** en la columna "Notes" con descripción breve
5. **Los tests de Telephony** requieren softphones registrados en simultáneo

---


## Test Extensions Setup

Before running tests, create the following 6 extensions:
`PBX → Extensions → Extensions → Add`

| Extension | Name | Role | Password | Purpose |
|-----------|------|------|----------|---------|
| **2000** | Test Admin | `sip` | `Test2000!` | Caller (initiates tests) |
| **2001** | Test Basic | `sip` | `Test2001!` | Receiver |
| **2002** | Test Forward | `sip` | `Test2002!` | Call forwarding tests |
| **2003** | Test Voicemail | `sip` | `Test2003!` | Voicemail + DND |
| **2004** | Test HotDesk | `none` | — | Hot Desking |
| **2005** | Test Virtual | `virtual` | — | Virtual routing |

> 💡 **SIP Clients**: Zoiper, MicroSIP, or Linphone — Server `192.168.10.31`, Domain `main.local`, UDP 5060

**Hot Desk Device** — Create before Phase 0:
`PBX → Extensions → Hot Desking → Add`

| Field | Value |
|-------|-------|
| **Device ID** | `HD-TEST-01` |
| **SIP Password** | `HotDesk123!` |
| **Location** | `Test Hot Desk Station 1` |
| **Max Simultaneous Phones** | `1` |
| **Language** | `English (US)` |

---

## 📋 Status Legend

| Symbol | Meaning |
|--------|---------|
| ⬜ | Pending |
| 🔄 | In Progress |
| ✅ | PASSED |
| ❌ | FAILED |
| ⚠️ | Partial |
| 🐛 | Bug found |

---

# 🖥️ PBX

---

## PBX / Extensions

> **Propósito:** Gestión completa de extensiones SIP — creación, edición, dispositivos múltiples, Hot Desking, buzón de voz y modificación masiva. Las extensiones son la base del sistema PBX: cada usuario/teléfono del dominio requiere una extensión para hacer y recibir llamadas internas y externas.

---

### PBX / Extensions / Extensions

#### T-EXT1 — Create Extensions

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-EXT1.1 | Create extension **2000** (type: `sip`) | Created, device entry generated | ⬜ | |
| T-EXT1.2 | Create extension **2001** (type: `sip`) | Created | ⬜ | |
| T-EXT1.3 | Create extension **2002** (type: `sip`) | Created | ⬜ | |
| T-EXT1.4 | Create extension **2003** (type: `sip`) | Created | ⬜ | |
| T-EXT1.5 | Create extension **2004** (type: `none`) | Created, NO sip device entry | ⬜ | |
| T-EXT1.6 | Create extension **2005** (type: `virtual`) | Created, NO device entry | ⬜ | |
| T-EXT1.7 | Try duplicate extension 2000 | API returns error "already exists" | ⬜ | |

#### T-EXT2 — Extension List & Display

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-EXT2.1 | Extensions list shows all 6 | 6 rows visible | ⬜ | |
| T-EXT2.2 | `extension_type` column displays correctly | `sip` / `virtual` / `none` | ⬜ | |
| T-EXT2.3 | Extension 2005 shows as `virtual` | Correct type | ⬜ | |
| T-EXT2.4 | Search/filter by extension number | Results filtered | ⬜ | |
| T-EXT2.5 | Pagination works on large list | Navigates pages | ⬜ | |

#### T-EXT3 — Edit Extension

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-EXT3.1 | Edit 2001 — change display name | Save succeeds | ⬜ | |
| T-EXT3.2 | Edit 2003 — enable portal access | Portal fields appear | ⬜ | |
| T-EXT3.3 | Edit 2004 — set `max_calls = 1` | Saved, limit respected | ⬜ | |
| T-EXT3.4 | Save button always active (AASS) | Save works | ⬜ | |
| T-EXT3.5 | Cancel returns to list | No data changed | ⬜ | |

#### T-EXT4 — Delete Extension

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-EXT4.1 | Delete extension 2005 (virtual) | Deleted, not in list | ⬜ | |
| T-EXT4.2 | Verify no device entry for 2005 | Virtual had no device | ⬜ | |
| T-EXT4.3 | Re-create 2005 as virtual | Recreated successfully | ⬜ | |

---

### PBX / Extensions / Hot Desking

#### T-HD1 — Device CRUD

> **Pre-requisito:** `HD-TEST-01` creado en **PBX → Extensions → Hot Desking → Add** y registrado en softphone. La extensión 2004 debe tener `features_password = 2004` configurado en **Tab: Features**.

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-HD1.1 | Hot Desking list loads — shows `HD-TEST-01` | Table visible | ⬜ | |
| T-HD1.2 | Edit `HD-TEST-01` — change description | Saved successfully | ⬜ | |
| T-HD1.3 | Device type `hotdesk` visible in list | Correct type shown | ⬜ | |
| T-HD1.4 | Device status shows `Idle` (no extension linked) | No assignment displayed | ⬜ | |

#### T-HD2 — Login (`*80`)

> Desde `HD-TEST-01`, marcar `*80`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-HD2.1 | `HD-TEST-01` marks `*80` | Prompt: *"Ingrese su extensión"* | ⬜ | |
| T-HD2.2 | Enter `2004#` via DTMF | Prompt: *"Ingrese su contraseña"* | ⬜ | |
| T-HD2.3 | Enter `2004#` (features_password) | *"Hot desk login exitoso"* | ⬜ | |
| T-HD2.4 | Extension 2004 linked to device in Admin UI | Device shows extension 2004 | ⬜ | |
| T-HD2.5 | FreeSWITCH `reloadxml` executed | `HD-TEST-01` re-registers with 2004 config | ⬜ | |
| T-HD2.6 | 2000 calls **2004** | Rings on `HD-TEST-01` | ⬜ | |
| T-HD2.7 | Outbound CallerID from `HD-TEST-01` = 2004 | CallerID is the extension | ⬜ | |

#### T-HD2L — Logout (`*80` again)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-HD2L.1 | `HD-TEST-01` (logged in) marks `*80` | *"Hot desk logout exitoso"* — no credentials asked | ⬜ | |
| T-HD2L.2 | Device unlinked from extension 2004 in Admin UI | Extension column empty | ⬜ | |
| T-HD2L.3 | FreeSWITCH re-registers in idle mode | Device back to hot desk state | ⬜ | |

#### T-HD3 — Login Errors

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-HD3.1 | Wrong features_password (`9999#`) | *"Contraseña inválida"* — no login | ⬜ | |
| T-HD3.2 | Non-existent extension (`9999#`) | Error — extension not available | ⬜ | |
| T-HD3.3 | Extension type `sip` (e.g., `2000#`) | Error — only `none` type valid | ⬜ | |

#### T-HD4 — Calls Without Login

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-HD4.1 | 2001 calls 2004 (no login active) | `UNALLOCATED_NUMBER` or `USER_NOT_REGISTERED` | ⬜ | |
| T-HD4.2 | FreeSWITCH log confirms idle state | `⚠️ Virtual extension 2004 has no destination` | ⬜ | |

#### T-HD5 — Calls With Login Active

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-HD5.1 | 2001 calls 2004 (login active) | `HD-TEST-01` rings with 2001 CallerID | ⬜ | |
| T-HD5.2 | FreeSWITCH log shows hot-desk routing | Log confirms hot-desk device bridge | ⬜ | |
| T-HD5.3 | Answer call — audio bidirectional | Audio OK | ⬜ | |

#### T-HD6 — Session History (Admin UI)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-HD6.1 | **PBX → Extensions → Hot Desking** — session history visible | Login/logout entries shown | ⬜ | |
| T-HD6.2 | Device shows `Idle` after logout | Status column updated | ⬜ | |

---

### PBX / Extensions / Bulk Modification

> **¿Qué es?** Permite seleccionar un grupo de extensiones mediante 4 métodos (Individual, Ranges, Patterns, Filters) y aplicarles cambios masivos en bloque: Class of Service, Language, Ring Time, Account Code, Recording settings.

#### T-BULK1 — Selección Individual (Tab: Individual)

> Hacer clic en el campo de selección → Se abre modal con buscador → Seleccionar extensiones → Aparecen como chips

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-BULK1.1 | Click campo de selección — modal se abre | Modal con lista de extensiones y buscador | ⬜ | |
| T-BULK1.2 | Buscar "200" — filtra resultados | Solo extensiones que contienen "200" | ⬜ | |
| T-BULK1.3 | Seleccionar 2001 y 2002 — aparecen como chips | Chips visibles con los números | ⬜ | |
| T-BULK1.4 | Clic "Select All" en modal | Todas las extensiones seleccionadas | ⬜ | |
| T-BULK1.5 | Clic "Clear" en el campo | Selección limpiada | ⬜ | |

#### T-BULK2 — Selección por Rango (Tab: Ranges)

> Ingresar rango inicio y fin → Add → Se agrega como tag

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-BULK2.1 | Ingresar Start: `2000`, End: `2003` → Add | Rango `2000-2003` aparece como tag | ⬜ | |
| T-BULK2.2 | Agregar segundo rango `2010-2019` | Ambos rangos visibles | ⬜ | |
| T-BULK2.3 | Eliminar un rango con X | Rango removido | ⬜ | |

#### T-BULK3 — Selección por Patrón (Tab: Patterns)

> Ingresar patrón wildcard → Add → Se agrega como tag

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-BULK3.1 | Ingresar patrón `200*` → Add | Patrón aparece como tag morado | ⬜ | |
| T-BULK3.2 | Ingresar patrón `3XX` → Add | Segundo patrón agregado | ⬜ | |
| T-BULK3.3 | Eliminar patrón con X | Patrón removido | ⬜ | |

#### T-BULK4 — Selección por Filtro (Tab: Filters)

> Seleccionar criterios de filtro → el sistema identifica extensiones que coinciden

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-BULK4.1 | Filtro: `Status = Enabled Only` | Selecciona solo extensiones activas | ⬜ | |
| T-BULK4.2 | Filtro: `Voicemail = Enabled` | Selecciona solo extensiones con voicemail activo | ⬜ | |
| T-BULK4.3 | Filtro: `Class of Service = Default` | Solo extensiones con esa CoS | ⬜ | |
| T-BULK4.4 | Filtro: `Language = English` | Solo extensiones en inglés | ⬜ | |
| T-BULK4.5 | Combinación de filtros | Extensiones que cumplan TODOS los criterios | ⬜ | |

#### T-BULK5 — Preview de Selección

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-BULK5.1 | Seleccionar extensiones → click **Preview Selection** | Muestra count: "X extensiones serán afectadas" | ⬜ | |
| T-BULK5.2 | Sin selección → click Preview | Error: "No extensions selected" | ⬜ | |

#### T-BULK6 — Aplicar Cambios Masivos

> Después de seleccionar extensiones, activar los checkboxes de modificaciones y click **Apply**

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-BULK6.1 | Seleccionar 2001+2002 → checkbox **Class of Service** → elegir CoS → Apply | CoS actualizado en 2001 y 2002 | ⬜ | Verificar en Edit Extension |
| T-BULK6.2 | Seleccionar 2001+2002 → checkbox **Language** → elegir Spanish → Apply | Language actualizado en ambas | ⬜ | |
| T-BULK6.3 | Seleccionar 2001+2002 → checkbox **Ring Time** → `60s` → Apply | Ring time actualizado en ambas | ⬜ | |
| T-BULK6.4 | Seleccionar 2001+2002 → checkbox **Account Code** → `DEPT01` → Apply | Account code actualizado | ⬜ | |
| T-BULK6.5 | Seleccionar 2001+2002 → checkbox **Recording** → enable Incoming → Apply | Recording configurado en ambas | ⬜ | |
| T-BULK6.6 | Ningún checkbox activo → Apply | Error: "No modifications selected" | ⬜ | |
| T-BULK6.7 | Aplicar múltiples cambios simultáneos (CoS + Language) | Todos los cambios aplicados en una sola operación | ⬜ | |
| T-BULK6.8 | Después de Apply exitoso — selección y form se resetean | Campos limpios para nueva operación | ⬜ | |

---

### PBX / Extensions / Status

> **Propósito:** Vista de estado en tiempo real de las extensiones del dominio — muestra qué extensiones están registradas, su IP, user-agent y estado (Available, Busy, DND, Unregistered).

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-STAT1.1 | **PBX → Extensions → Status** — página carga | Tabla con columnas Extension, Name, Status, IP, User-Agent | ⬜ | |
| T-STAT1.2 | Extensión 2001 registrada → aparece como Registered | Estado correcto | ⬜ | |
| T-STAT1.3 | Extensión 2001 desregistrada → estado Unregistered | Refleja baja en tiempo real | ⬜ | |
| T-STAT1.4 | Extensión con DND activo → estado DND | Refleja DND | ⬜ | |
| T-STAT1.5 | Filtrar por extensión o estado | Resultados filtrados | ⬜ | |

---

> **📌 Nota de Orden:** Las siguientes secciones siguen el orden real del menú de la plataforma:
> `Extensions → Applications → Class of Service → Call Center → Calls Routing → Incoming Call Tools → SMS → Tools → Emergency → Virtual Faxes`

---

## PBX / Calls Routing

> **Propósito:** Configuración del enrutamiento de llamadas entrantes y salientes. Incluye Gateways SIP (conexión a proveedores PSTN), Rutas Salientes (qué llamadas salen por qué gateway y con qué patrón de marcación), Rutas Entrantes (a qué destino se envía cada DID), Enrutamiento Dinámico (reglas condicionales con múltiples destinos) y Destino Dinámico (lookup externo para determinar destino en tiempo real).

---


### PBX / Calls Routing / Gateways

> Crear en **PBX → Calls Routing → Gateways → Add**

**📋 Valores de lab:**

| Field | Value |
|-------|-------|
| **Trunk/Gateway Name** | `lab-gateway` |
| **Username** | `lab_user` |
| **Realm** | `192.168.10.10` |
| **Proxy** ⭐ | `192.168.10.10` |
| **Register Transport** | `UDP` |
| **From Domain** | `192.168.10.31` |
| **Distinct To** | `Yes` |
| **Caller ID in From** | `Yes` |
| **Extension in Contact** | `Yes` |

> ⚠️ **Críticos:** `Proxy` + `Realm` = IP VitalPBX · `Distinct To = Yes` · `Extension in Contact = Yes`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-GW1.1 | **Gateways → Add** — create `lab-gateway` | Gateway saved | ⬜ | |
| T-GW1.2 | Verify in list — status visible | Gateway visible in table | ⬜ | |
| T-GW1.3 | Edit gateway — change description | Saved successfully | ⬜ | |

---

### PBX / Calls Routing / Outbound Routes

> Crear en **PBX → Calls Routing → Outbound Routes → Add**

| Field | Value |
|-------|-------|
| **Name** | `lab-outbound` |
| **Gateway** | `lab-gateway` |
| **Dial Pattern** | `9XXXXXXXXXX` |
| **Strip digits** | `1` |

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-OR1.1 | **Outbound Routes → Add** — create `lab-outbound` with gateway | Route saved | ⬜ | |
| T-OR1.2 | Set strip = 1, verify persists on edit | Value persists | ⬜ | |
| T-OR1.3 | From 2001 dial `912345678901` (prefix 9 + 11 digits) | Call exits via `lab-gateway` | ⬜ | Verifies route without PIN List |

---

### PBX / Calls Routing / Inbound Routes

> Crear en **PBX → Calls Routing → Inbound Routes → Add**

| Field | Value |
|-------|-------|
| **Name** | `lab-inbound-2001` |
| **DID Number** | `5058881000` |
| **Destination Type** | `Extension` |
| **Destination** | `2001` |
| **CID Name Prefix** | `[DID]` |

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-IR1.1 | **Inbound Routes → Add** — create `lab-inbound-2001` with DID `5058881000` → ext `2001` | Route saved | ⬜ | |
| T-IR1.2 | Verify route active in list | Visible, enabled | ⬜ | |
| T-IR1.3 | Simulate call to DID `5058881000` from gateway | 2001 rings | ⬜ | Use fs_cli originate |
| T-IR1.4 | Create second route DID `5058881001` → ext `2002` | Route saved, call routes to 2002 | ⬜ | |
| T-IR1.5 | Edit `lab-inbound-2001` — change destination to `2002` | Call to DID now goes to 2002 | ⬜ | |
| T-IR1.6 | Disable the route | DID no longer routes correctly | ⬜ | |

**Test desde fs_cli (simular llamada entrante):**
```bash
originate {origination_caller_id_number=5058881000,origination_caller_id_name=TestDID}sofia/internal/2001@192.168.10.31 &echo()
```

---

### PBX / Calls Routing / Dynamic Routing

> **Prerequisito:** Crear una Dynamic Route en **PBX → Calls Routing → Dynamic Routing → Add**
>
> Una Dynamic Route define reglas de enrutamiento basadas en condiciones (hora del día, CallerID, número destino, etc.) con múltiples destinos posibles y un fallback.

**📋 Regla de lab — `TestDynamicRoute`:**

| Field | Value | Notes |
|-------|-------|-------|
| **Name** | `TestDynamicRoute` | Identificador |
| **Condition Type** | `Time of Day` | Condición temporal |
| **Time Range** | `08:00–18:00 Mon–Fri` | Horario laboral |
| **Destination (match)** | Extension `2001` | Destino si condición cumple |
| **Destination (fallback)** | Extension `2002` | Destino si NO cumple |
| **Enabled** | `Yes` | Activo |

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-DR1.1 | **Dynamic Routing → Add** — create `TestDynamicRoute` | Route saved successfully | ⬜ | |
| T-DR1.2 | Route visible in list with status Enabled | Visible in table | ⬜ | |
| T-DR1.3 | Call arrives during matching time range | Routed to ext `2001` | ⬜ | Within 08:00–18:00 Mon–Fri |
| T-DR1.4 | Call arrives outside matching time range (fallback) | Routed to ext `2002` | ⬜ | Outside hours |
| T-DR1.5 | Edit route — change fallback to IVR | Saved, fallback now goes to IVR | ⬜ | |
| T-DR1.6 | Add a second condition (CallerID pattern `+1505*`) | Condition added and saved | ⬜ | |
| T-DR1.7 | Call from matching CallerID pattern | Routes to configured destination | ⬜ | |
| T-DR1.8 | Disable the route | Route no longer processes calls | ⬜ | |

---


## PBX / Applications

> **Propósito:** Módulos de aplicación del PBX que amplían la funcionalidad de las extensiones. Incluye conferencias, marcación directa, grupos de paging, aplicaciones personalizadas (Lua/XML), códigos de características, grupos de captura de llamadas, estacionamiento, marcación rápida, difusión de buzón, callback programado, DISA (acceso externo al PBX), listas PIN y destino dinámico. Cada módulo puede asignarse como destino en rutas entrantes o salientes.

> Items en orden del menú: Conferences · Direct Dial · Direct Route · Paging & Intercom · Custom Applications · Feature Codes · Pickup Groups · Parking Lots · Speed Dials · Voicemail Broadcast Groups · Call Back · DISA · PIN List · Dynamic Destination · **Phonebooks**

---

### PBX / Applications / Conferences

> **Prerequisito:** Crear en **PBX → Applications → Conferences → Add** con extensión `800`.

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CONF1.1 | 2001 dials `800` | Enters conference room | ⬜ | |
| T-CONF1.2 | 2002 dials `800` | Joins same room (both hear audio) | ⬜ | |
| T-CONF1.3 | 2003 dials `800` | Joins as third participant | ⬜ | |
| T-CONF1.4 | 2001 hangs up | Others stay in conference | ⬜ | |

---

### PBX / Applications / Direct Dial

> **Prerequisito:** Crear en **PBX → Applications → Direct Dial → Add**
> - Código `*200` → destino `2001`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-DD2.1 | 2002 dials `*200` | Routes directly to 2001 | ⬜ | |
| T-DD2.2 | 2001 answers | Bidirectional audio | ⬜ | |

---

### PBX / Applications / Direct Route

> **Arquitectura:** Un Direct Route define un número externo con Class of Service y CallerID. Se accede via Direct Dial.
>
> **Prerequisito:**
> 1. **PBX → Applications → Direct Route → Add** (`Lab Route`, número `+18005551234`)
> 2. **PBX → Applications → Direct Dial → Add** — código `*201` → Direct Route creado

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-DRT1.1 | 2001 dials `*201` | System invokes the Direct Route | ⬜ | |
| T-DRT1.2 | Call exits via trunk to configured number | Call established with route CallerID | ⬜ | Requires active trunk |

---

### PBX / Applications / Paging & Intercom

> **Prerequisito:** Crear en **PBX → Applications → Paging & Intercom → Add**
> - Extensión `850` · Miembros: `2001`, `2002`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-PAGE1.1 | 2003 dials `850` | Auto-answers on 2001 and 2002 | ⬜ | Paging: one-way audio |
| T-PAGE1.2 | 2003 speaks | Audio heard on destinations | ⬜ | |

---

### PBX / Applications / Custom Applications

> **Prerequisito:** Dominio activo. Para prueba funcional, se requiere un **Direct Dial** asignado a la app.

#### T-CA1 — CRUD & Form

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CA1.1 | Abrir lista → **Add** → formulario vacío visible | Form con Name, Description, Application Type, Enabled | ⬜ | |
| T-CA1.2 | Crear app Lua: name `Test Lua App`, description `Test`, type `Lua Script` → Save | App aparece en la lista | ⬜ | |
| T-CA1.3 | Crear app XML: name `Test XML App`, type `XML Dialplan` → Save | App guardada correctamente | ⬜ | |
| T-CA1.4 | Editar app → cambiar nombre → Save | Cambio persist en lista | ⬜ | |
| T-CA1.5 | Deshabilitar app (toggle Enabled → No) → Save | Estado `Disabled` visible en tabla | ⬜ | |
| T-CA1.6 | Re-habilitar app → Save | Estado `Enabled` en tabla | ⬜ | |
| T-CA1.7 | Eliminar app → confirmar | App desaparece de la lista | ⬜ | |
| T-CA1.8 | Guardar sin Name → error de validación | Mensaje de error en campo Name | ⬜ | |

#### T-CA2 — Script Editor

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CA2.1 | Editor Monaco carga con script Lua por defecto | Sintaxis Lua visible en editor | ⬜ | |
| T-CA2.2 | Cambiar a type `XML` → editor actualiza template | Template XML visible | ⬜ | |
| T-CA2.3 | Editar código en Monaco → guardar | Código persistido | ⬜ | |

#### T-CA3 — Invocación vía Direct Dial

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CA3.1 | Crear **Direct Dial** → Module: `Custom Application` → seleccionar `Test Lua App` | Direct Dial guardado con UUID de la app | ⬜ | |
| T-CA3.2 | Marcar el código del Direct Dial desde extensión interna | La app Lua se ejecuta (log en FreeSWITCH) | ⬜ | |
| T-CA3.3 | App con **Final Destination** configurado (ej: extensión `2001`) → marcar código | Llamada transferida a `2001` al terminar la app | ⬜ | |
| T-CA3.4 | App con **Skip Final Destination** activado → marcar código | Llamada termina en hangup limpio | ⬜ | |

#### T-CA4 — Invocación vía Ruta Entrante

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CA4.1 | Asignar app a **Inbound Route** como destino final | Ruta guardada con módulo Custom Application | ⬜ | |
| T-CA4.2 | Llamada entrante al DID → app ejecuta | Script corre y flujo continúa según Final Destination | ⬜ | |


---

### PBX / Applications / Feature Codes

> Feature Codes se configuran en **PBX → Applications → Feature Codes**. Los tests funcionales completos están en la sección [📞 Telephony — Feature Codes](#feature-codes).

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FC0.1 | **Feature Codes** list loads | All codes visible with their values | ⬜ | |
| T-FC0.2 | Edit a Feature Code (e.g., DND code `*66`) | Code updated, new code works | ⬜ | |
| T-FC0.3 | Save button works (AASS) | Changes saved | ⬜ | |

---

### PBX / Applications / Pickup Groups

> **Prerequisito:** Crear en **PBX → Applications → Pickup Groups → Add**
> - `Test Group` · Miembros: `2001`, `2002`

#### T-PU1 — Direct Pickup (`*07`)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-PU1.1 | 2000 calls 2001 (ringing) | 2001 rings | ⬜ | |
| T-PU1.2 | 2002 dials `*072001` | 2002 intercepts call from 2000→2001 | ⬜ | |

#### T-PU2 — Group Pickup (`*08`)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-PU2.1 | 2000 calls 2001 (group member, ringing) | 2001 rings | ⬜ | |
| T-PU2.2 | 2002 (same group) dials `*08` | 2002 intercepts call | ⬜ | |

---

### PBX / Applications / Parking Lots

> **Default Parking Lot:** `700` para parquear · Slots `701`–`710` para recuperar

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-PARK1.1 | 2000 calls 2001 — 2001 puts on hold | 2000 hears hold music | ⬜ | |
| T-PARK1.2 | 2001 resumes call | Both reconnected | ⬜ | |
| T-PARK1.3 | 2001 blind-transfers to `700` | System announces slot (e.g., `701`) | ⬜ | |
| T-PARK1.4 | 2002 dials `701` | 2002 connects with 2000 | ⬜ | |

---

### PBX / Applications / Speed Dials

> **Prerequisito:** Crear en **PBX → Applications → Speed Dials → Add**
> - Shortcode `11` → destino `2001`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SD1.1 | Create speed dial: shortcode `11` → dest `2001` | Speed dial saved | ⬜ | |
| T-SD1.2 | 2000 dials `11` | Routes directly to 2001 | ⬜ | |

---

### PBX / Applications / Voicemail Broadcast Groups

> **Prerequisito:** Crear en **PBX → Applications → Voicemail Broadcast Groups → Add**
> - Miembros: `2001`, `2002`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-VB1.1 | Activate broadcast from Admin | Voicemail delivered to group members | ⬜ | |
| T-VB1.2 | 2001 checks voicemail | Broadcast message received | ⬜ | |
| T-VB1.3 | 2002 checks voicemail | Broadcast message received | ⬜ | |

---

### PBX / Applications / Call Back

> **Crear en PBX → Applications → Call Back → Add:**
> - **CB-A** — `Number = 2002`, `Ask = OFF`, Destination = ext `2001`
> - **CB-B** — `Number` vacío, `Ask = ON`, Destination = ext `2001`
> - **CB-C** — `Number` vacío, `Ask = OFF`, Destination = ext `2001`
>
> Asignar cada regla a un **Direct Dial** distinto.

#### 🔵 Estrategia 1 — Número Fijo (CB-A)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CB1.1 | Create rule **CB-A** with `Number = 2002` | Rule saved | ⬜ | |
| T-CB1.2 | Dial Direct Dial of **CB-A** from ext `2000` | Audio confirmation, no DTMF prompt | ⬜ | |
| T-CB1.3 | System does NOT ask for number | Silent / no prompt | ⬜ | |
| T-CB1.4 | Verify `sched_api list` in fs_cli | Originate toward `2002` | ⬜ | |
| T-CB1.5 | Ext `2002` receives call → bridges to `2001` | Call established | ⬜ | |

#### 🟡 Estrategia 2 — Ask via DTMF (CB-B)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CB2.1 | Create rule **CB-B** with `Number` empty, `Ask = ON` | Rule saved | ⬜ | |
| T-CB2.2 | Dial Direct Dial of **CB-B** from ext `2003` | DTMF prompt plays | ⬜ | |
| T-CB2.3 | Enter `2004#` → confirm with `1` | System schedules callback to `2004` | ⬜ | |
| T-CB2.4 | Verify `sched_api list` | Originate toward `2004` | ⬜ | |
| T-CB2.5 | Timeout x3 without input | Falls back to CallerID of 2003 | ⬜ | |

#### 🟢 Estrategia 3 — CallerID Automático (CB-C)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CB3.1 | Create rule **CB-C** with `Number` empty, `Ask = OFF` | Rule saved | ⬜ | |
| T-CB3.2 | Dial Direct Dial of **CB-C** from ext `2000` | Confirmation plays, hangs up | ⬜ | |
| T-CB3.3 | Verify `sched_api list` | Originate toward `2000` (CallerID) | ⬜ | |
| T-CB3.4 | FS log shows strategy | `[CALLBACK] Strategy: CALLER ID → 2000` | ⬜ | |

```bash
fs_cli -x "sched_api list"
tail -f /var/log/freeswitch/freeswitch.log | grep CALLBACK
```

---

### PBX / Applications / DISA

> **Crear en PBX → Applications → DISA → Add**

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-DISA1.1 | Call DISA number from external | System asks for PIN | ⬜ | |
| T-DISA1.2 | Enter correct PIN | Dial tone available | ⬜ | |
| T-DISA1.3 | Dial internal extension (e.g., 2001) | 2001 rings | ⬜ | |
| T-DISA1.4 | Enter incorrect PIN | Access denied | ⬜ | |

---

### PBX / Applications / PIN List

> **Crear en PBX → Applications → PIN List → Add**, asignar al Outbound Route `lab-outbound`.

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-PIN1.1 | Call requiring PIN via outbound route | System asks for PIN | ⬜ | |
| T-PIN1.2 | Enter valid PIN | Call authorized and continues | ⬜ | |
| T-PIN1.3 | Enter invalid PIN | Access denied / reprompt | ⬜ | |

---

### PBX / Applications / Dynamic Destination

> **Crear en PBX → Applications → Dynamic Destination → Add**

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-DDEST1.1 | Dial dynamic destination extension | System evaluates external query | ⬜ | |
| T-DDEST1.2 | External query returns match → destination A | Call routed correctly | ⬜ | |
| T-DDEST1.3 | No match → fallback destination | Call routed to fallback | ⬜ | |

---
### PBX / Applications / Phonebooks

> **Propósito:** Directorio de contactos compartido. Los Phonebooks internos agregan extensiones, colas, ring groups y speed dials del PBX a la agenda del teléfono IP. Los externos permiten cargar contactos CSV desde una URL. El teléfono IP accede al phonebook via HTTP y lo muestra en la pantalla.

#### T-PB1 — CRUD & Form

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-PB1.1 | Abrir lista → **Add** → formulario vacío | Form con Description, Type (Internal/External), URL | ⬜ | |
| T-PB1.2 | Crear phonebook **Internal**: agregar extensiones 2000, 2001, 2002 → Save | Phonebook guardado | ⬜ | |
| T-PB1.3 | Crear phonebook **External**: ingresar URL pública → Save | Phonebook guardado con URL auto-generada | ⬜ | |
| T-PB1.4 | Importar contactos CSV a phonebook externo | Contactos aparecen en pestaña Entries | ⬜ | |
| T-PB1.5 | Ver Entries → lista de contactos/extensiones | Lista proyectada correctamente | ⬜ | |
| T-PB1.6 | Editar phonebook → agregar/quitar extensión → Save | Cambio persistido | ⬜ | |
| T-PB1.7 | Eliminar phonebook → confirmar | Phonebook eliminado | ⬜ | |
| T-PB1.8 | Copiar URL del phonebook al portapapeles | URL copiada correctamente | ⬜ | |

---


## PBX / Class of Service


> **Propósito:** Control granular de los privilegios de cada extensión. A través de Clases de Servicio (CoS) se determina qué features puede usar una extensión, qué patrones de números puede marcar (Dial Restriction Rules), qué rutas salientes tiene disponibles, y si puede hacer llamadas usando códigos de autorización o cliente. Es el sistema de permisos del PBX.

> Items en orden del menú: Class Management · Feature Categories · Dial Restriction Rules · Customer Codes · Authorization Codes · Route Selections

---

### PBX / Class of Service / Class Management

> **Prerequisito:** Feature Categories y Dial Restriction Rules existentes

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-COS1.1 | Crear Class of Service: name, seleccionar Feature Categories permitidas → Save | CoS visible en lista | ⬜ | |
| T-COS1.2 | Editar CoS → agregar/quitar Feature Category → Save | Cambio persistido | ⬜ | |
| T-COS1.3 | Asignar CoS a extensión | Extensión hereda restricciones y permisos | ⬜ | |
| T-COS1.4 | Eliminar CoS → confirmar | CoS eliminado de lista | ⬜ | |

---

### PBX / Class of Service / Feature Categories

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FC2.1 | Crear Feature Category: name, lista de features permitidos → Save | Category en lista | ⬜ | |
| T-FC2.2 | Editar Feature Category → cambiar features → Save | Cambio persistido | ⬜ | |
| T-FC2.3 | Eliminar Feature Category → confirmar | Category eliminada | ⬜ | |

---

### PBX / Class of Service / Dial Restriction Rules

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-DRR1.1 | Crear Dial Restriction Rule: name, patrón de número bloqueado → Save | Regla en lista | ⬜ | |
| T-DRR1.2 | Asignar regla a CoS → extensión intenta marcar número bloqueado | Llamada rechazada | ⬜ | |
| T-DRR1.3 | Extensión sin la regla márca el mismo número | Llamada permitida | ⬜ | |
| T-DRR1.4 | Eliminar Dial Restriction Rule → confirmar | Regla eliminada | ⬜ | |

---

### PBX / Class of Service / Customer Codes

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CC1.1 | Crear Customer Code: name, código → Save | Código en lista | ⬜ | |
| T-CC1.2 | Editar Customer Code → Save | Cambio persistido | ⬜ | |
| T-CC1.3 | Usar Customer Code en llamada saliente (marcación guiada por código) | CDR registra el código de cliente | ⬜ | |
| T-CC1.4 | Eliminar Customer Code → confirmar | Código eliminado | ⬜ | |

---

### PBX / Class of Service / Authorization Codes

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-AUTHCOS1.1 | Crear Authorization Code: name, PIN, CoS asignado → Save | Código en lista | ⬜ | |
| T-AUTHCOS1.2 | Extensión restringida marca + ingresa Authorization Code correcto | Llamada permitida con el CoS del código | ⬜ | |
| T-AUTHCOS1.3 | Ingresar PIN incorrecto | Llamada rechazada | ⬜ | |
| T-AUTHCOS1.4 | Eliminar Authorization Code → confirmar | Código eliminado | ⬜ | |

---

### PBX / Class of Service / Route Selections

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-RS1.1 | Crear Route Selection: name, reglas de rutas salientes por CoS → Save | Selection en lista | ⬜ | |
| T-RS1.2 | Extensión con CoS que incluye Route Selection → llamada saliente | Ruta correcta seleccionada según CoS | ⬜ | |
| T-RS1.3 | Editar Route Selection → cambiar orden de rutas → Save | Cambio persistido, llamada usa nueva ruta | ⬜ | |
| T-RS1.4 | Eliminar Route Selection → confirmar | Selection eliminada | ⬜ | |

---

## PBX / Incoming Call Tools

> **Propósito:** Herramientas para procesar y transformar llamadas entrantes antes de llegar a su destino final. El IVR permite crear menús de voz interactivos; Time Groups y Time Conditions controlan el enrutamiento según horario; Announcements reproduce mensajes de bienvenida o informativos; Languages establece el idioma de la sesión; Call Flows permiten switchear destinos con un código de marcación; CID Modifiers y CID Lookup transforman o resuelven el número de quien llama; y Authentication Codes protegen destinos con un PIN.

> Items en orden del menú: IVR · Time Groups · Time Conditions · Announcements · Languages · Call Flows · CID Modifiers · CID Lookup · Authentication Codes · **Blacklist**

---


### PBX / Incoming Call Tools / IVR

> **Prerequisito:** Crear en **PBX → Incoming Call Tools → IVR → Add**

#### T-IVR1 — CRUD & Form

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-IVR1.1 | Crear IVR: name, greeting, opciones 1-9 → Save | IVR visible en lista | ⬜ | |
| T-IVR1.2 | Editar IVR → cambiar greeting → Save | Cambio persistido | ⬜ | |
| T-IVR1.3 | Eliminar IVR → confirmar | IVR eliminado de lista | ⬜ | |

#### T-IVR2 — Funcional

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-IVR2.1 | Asignar IVR a Inbound Route → llamada entrante | Greeting se reproduce | ⬜ | |
| T-IVR2.2 | Marcar opción válida (ej: `1`) → destino configurado | Llamada enrutada al destino | ⬜ | |
| T-IVR2.3 | No marcar ninguna opción → timeout | Llamada va a destino por defecto | ⬜ | |
| T-IVR2.4 | Marcar opción inválida → re-prompt | IVR repite menú | ⬜ | |
| T-IVR2.5 | Crear **Direct Dial** `*204` apuntando al IVR → marcar `*204` desde una extensión | El greeting del IVR se reproduce directamente | ⬜ | |

---

### PBX / Incoming Call Tools / Time Groups

> **Prerequisito:** Crear en **PBX → Incoming Call Tools → Time Groups → Add**

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-TG1.1 | Crear Time Group: name, días y horas → Save | Group visible en lista | ⬜ | |
| T-TG1.2 | Editar Time Group → cambiar horario → Save | Cambio persistido | ⬜ | |
| T-TG1.3 | Eliminar Time Group → confirmar | Group eliminado | ⬜ | |

---

### PBX / Incoming Call Tools / Time Conditions

> **Prerequisito:** Time Groups existentes

#### T-TC1 — CRUD & Funcional

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-TC1.1 | Crear Time Condition: name, Time Group, destino en horario / fuera horario → Save | Condition en lista | ⬜ | |
| T-TC1.2 | Editar Time Condition → Save | Cambio persistido | ⬜ | |
| T-TC1.3 | Llamada dentro del horario del Time Group | Enruta a destino "en horario" | ⬜ | |
| T-TC1.4 | Llamada fuera del horario | Enruta a destino "fuera de horario" | ⬜ | |
| T-TC1.5 | Eliminar Time Condition → confirmar | Condition eliminada | ⬜ | |

---

### PBX / Incoming Call Tools / Announcements

> **Prerequisito:** Audio grabado o sintetizado disponible

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-ANN1.1 | Crear Announcement: name, audio file → Save | Announcement en lista | ⬜ | |
| T-ANN1.2 | Editar Announcement → cambiar audio → Save | Cambio persistido | ⬜ | |
| T-ANN1.3 | Asignar Announcement a Inbound Route → llamada entrante | Audio se reproduce y flujo continúa | ⬜ | |
| T-ANN1.4 | Eliminar Announcement → confirmar | Eliminado de lista | ⬜ | |

---

### PBX / Incoming Call Tools / Languages

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-LANG1.1 | Crear Language entry: name, código ISO → Save | Language en lista | ⬜ | |
| T-LANG1.2 | Asignar Language a Inbound Route | Idioma aplicado a la sesión | ⬜ | |
| T-LANG1.3 | Eliminar Language → confirmar | Language eliminado | ⬜ | |

---

### PBX / Incoming Call Tools / Call Flows

> **Prerequisito:** Extensiones y destinos existentes

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CF1.1 | Crear Call Flow: name, destino A (normal) / destino B (alternativo) → Save | Call Flow en lista | ⬜ | |
| T-CF1.2 | Estado normal → llamada llega al destino A | Enrutamiento correcto | ⬜ | |
| T-CF1.3 | Feature Code toggle → estado alternativo | Llamada llega al destino B | ⬜ | |
| T-CF1.4 | Eliminar Call Flow → confirmar | Call Flow eliminado | ⬜ | |

---

### PBX / Incoming Call Tools / CID Modifiers

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CIDM1.1 | Crear CID Modifier: patrón, reemplazo → Save | Modifier en lista | ⬜ | |
| T-CIDM1.2 | Llamada entrante con CID que coincide con patrón | CID modificado según regla | ⬜ | |
| T-CIDM1.3 | Llamada con CID que no coincide | CID sin modificar | ⬜ | |
| T-CIDM1.4 | Eliminar CID Modifier → confirmar | Eliminado de lista | ⬜ | |

---

### PBX / Incoming Call Tools / CID Lookup

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CIDL1.1 | Crear CID Lookup source: name, tipo (HTTP/DB), URL → Save | Source en lista | ⬜ | |
| T-CIDL1.2 | Llamada con CID registrado en fuente externa | CID Name resuelto y visible en display | ⬜ | |
| T-CIDL1.3 | Llamada con CID no registrado | CID original sin modificar | ⬜ | |
| T-CIDL1.4 | Eliminar CID Lookup source → confirmar | Source eliminado | ⬜ | |

---

### PBX / Incoming Call Tools / Authentication Codes

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-AUTH1.1 | Crear Authentication Rule: name, PIN, destino → Save | Regla en lista | ⬜ | |
| T-AUTH1.2 | Asignar Authentication Rule a Inbound Route | Sistema pide PIN al contestar | ⬜ | |
| T-AUTH1.3 | Ingresar PIN correcto → destino configurado | Llamada enrutada correctamente | ⬜ | |
| T-AUTH1.4 | Ingresar PIN incorrecto → deny/re-prompt | Llamada rechazada o re-solicita PIN | ⬜ | |
| T-AUTH1.5 | Eliminar Authentication Rule → confirmar | Regla eliminada | ⬜ | |

---
### PBX / Incoming Call Tools / Blacklist

> **Propósito:** Lista de bloqueo de números entrantes. Rechaza llamadas de números específicos antes de que sean procesadas por el PBX. Opera a nivel del flujo de la llamada entrante, bloqueando por número exacto o por prefijo.

#### T-BL1 — CRUD & Form

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-BL1.1 | Navegar **PBX → Incoming Call Tools → Blacklist → Add** | Form con Number, Description, Enabled | ⬜ | |
| T-BL1.2 | Crear entrada: número `+15551234567`, descripción `Test Block` → Save | Entrada en lista | ⬜ | |
| T-BL1.3 | Crear entrada con prefijo (ej: `+1555`) → Save | Entrada guardada | ⬜ | |
| T-BL1.4 | Editar entrada → cambiar número → Save | Cambio persistido | ⬜ | |
| T-BL1.5 | Deshabilitar entrada (Enabled = No) → Save | Entrada inactiva | ⬜ | |
| T-BL1.6 | Eliminar entrada → confirmar | Entrada eliminada | ⬜ | |
| T-BL1.7 | Guardar sin número → validación | Mensaje de error en campo Number | ⬜ | |
| T-BL1.8 | Duplicar entrada existente | Nueva entrada pre-poblada | ⬜ | |

#### T-BL2 — Funcional

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-BL2.1 | Llamada entrante desde número en Blacklist (activo) | Llamada rechazada automáticamente | ⬜ | |
| T-BL2.2 | Llamada desde número en Blacklist deshabilitado | Llamada procesada normalmente | ⬜ | |
| T-BL2.3 | Llamada desde número no en Blacklist | Llamada procesada normalmente | ⬜ | |
| T-BL2.4 | Prefijo `+1555` → llamada desde `+15551234999` | Rechazada (coincide prefijo) | ⬜ | |

---

## PBX / Call Center


> **Propósito:** Módulo de centro de llamadas integrado al PBX. Ring Groups distribuyen llamadas a múltiples extensiones simultánea o secuencialmente. Agents son los operadores asignados a las colas. Queues gestionan el flujo de llamadas en espera con estrategias de distribución, música en espera y destinos de failover. Priority Routing y Queue VIP permiten priorizar ciertos callers. Callback Profiles permiten que el caller solicite ser llamado de vuelta en lugar de esperar en la cola.

> Items en orden del menú: Ring Groups · Agents · Queues · Priority Routing · Queue VIP · Callback Profiles

---

### PBX / Call Center / Ring Groups

> **Prerequisito:** Extensiones registradas (ej: `2001`, `2002`)

#### T-RG1 — CRUD & Form

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-RG1.1 | Crear Ring Group: name, extensiones miembro, estrategia (simultaneous/sequential) → Save | Ring Group en lista | ⬜ | |
| T-RG1.2 | Editar Ring Group → agregar miembro → Save | Cambio persistido | ⬜ | |
| T-RG1.3 | Eliminar Ring Group → confirmar | Ring Group eliminado | ⬜ | |

#### T-RG2 — Funcional

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-RG2.1 | Llamada al Ring Group → estrategia Simultaneous | Todos los miembros suenan al mismo tiempo | ⬜ | |
| T-RG2.2 | Llamada al Ring Group → estrategia Sequential | Miembros suenan en orden uno por uno | ⬜ | |
| T-RG2.3 | Ningún miembro contesta → timeout | Llamada va al destino failover | ⬜ | |

---

### PBX / Call Center / Agents

> **Prerequisito:** Extensiones SIP registradas

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-AGT1.1 | Crear Agent: name, extensión, status inicial → Save | Agent visible en lista | ⬜ | |
| T-AGT1.2 | Editar Agent → cambiar extensión → Save | Cambio persistido | ⬜ | |
| T-AGT1.3 | Cambiar estado de agent (Login/Logout/Available/Break) | Estado actualizado para routing | ⬜ | |
| T-AGT1.4 | Eliminar Agent → confirmar | Agent eliminado | ⬜ | |

---

### PBX / Call Center / Queues

> **Prerequisito:** Agents creados y asignados a la cola

#### T-Q1 — CRUD & Form

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-Q1.1 | Crear Queue: name, extensión, estrategia, agentes → Save | Queue en lista | ⬜ | |
| T-Q1.2 | Editar Queue → agregar agente → Save | Cambio persistido | ⬜ | |
| T-Q1.3 | Configurar MOH (Music on Hold), max wait time, failover destination | Parámetros guardados | ⬜ | |
| T-Q1.4 | Eliminar Queue → confirmar | Queue eliminada | ⬜ | |

#### T-Q2 — Funcional

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-Q2.1 | Llamada entra a Queue → agente disponible contesta | Llamada conectada al agente | ⬜ | |
| T-Q2.2 | Llamada entra a Queue → todos los agentes ocupados | Llamada en espera con MOH | ⬜ | |
| T-Q2.3 | Caller espera y supera max wait time | Llamada va al failover | ⬜ | |
| T-Q2.4 | Caller cuelga mientras espera | Queue libera el slot limpiamente | ⬜ | |
| T-Q2.5 | Llamada completada por agente → revisar CDR | CDR muestra nombre de cola, tiempo de espera y duración | ⬜ | |

---

### PBX / Call Center / Priority Routing

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-PR1.1 | Crear Priority Routing rule: criterio, prioridad → Save | Regla en lista | ⬜ | |
| T-PR1.2 | Llamada que coincide con criterio de alta prioridad | Llamada salta al frente de la cola | ⬜ | |
| T-PR1.3 | Llamada sin coincidencia → prioridad normal | Llamada en cola en orden estándar | ⬜ | |
| T-PR1.4 | Eliminar rule → confirmar | Regla eliminada | ⬜ | |

---

### PBX / Call Center / Queue VIP

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-VIP1.1 | Agregar número a lista VIP → Save | Número en lista VIP | ⬜ | |
| T-VIP1.2 | Llamada desde número VIP a Queue | Caller entra a la cola con prioridad máxima | ⬜ | |
| T-VIP1.3 | Llamada desde número no VIP | Prioridad estándar | ⬜ | |
| T-VIP1.4 | Eliminar número VIP → confirmar | Número removido de lista | ⬜ | |

---

### PBX / Call Center / Callback Profiles

> **Prerequisito:** Queue existente con opción de callback habilitada

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CB1.1 | Crear Callback Profile: name, enable, tiempo mínimo → Save | Profile en lista | ⬜ | |
| T-CB1.2 | Editar Callback Profile → cambiar parámetros → Save | Cambio persistido | ⬜ | |
| T-CB1.3 | Asignar Callback Profile a Queue | Queue acepta solicitudes de callback | ⬜ | |
| T-CB1.4 | Caller solicita callback durante espera en Queue | Sistema registra solicitud y cuelga | ⬜ | |
| T-CB1.5 | Agente disponible → sistema inicia callback automático | Caller recibe llamada de vuelta | ⬜ | |
| T-CB1.6 | Eliminar Callback Profile → confirmar | Profile eliminado | ⬜ | |

---

## PBX / Reports

> **Propósito:** Herramientas de visibilidad y auditoría del sistema. SIP Endpoints muestra el estado de registro de cada extensión/trunk (registrado, desregistrado, IP, user-agent). CDR (Call Detail Records) proporciona el historial completo de llamadas con duración, origen, destino, gateway utilizado y resultado, permitiendo auditorías, facturación y resolución de problemas.

---


### PBX / Reports / SIP Endpoints

> Via **PBX → Reports → SIP Endpoints**

> **Pre-requisito:** Register softphone clients for extensions 2000–2004

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-REG1.1 | Register 2000 in Zoiper/MicroSIP | Registration accepted | ⬜ | |
| T-REG1.2 | Register 2001 | Registration accepted | ⬜ | |
| T-REG1.3 | Register 2002 | Registration accepted | ⬜ | |
| T-REG1.4 | Register 2003 | Registration accepted | ⬜ | |
| T-REG1.5 | Register 2004 | Registration accepted | ⬜ | |
| T-REG1.6 | **Reports → SIP Endpoints** shows all 5 registered | All 5 extensions shown | ⬜ | |

**FreeSWITCH verification:**
```bash
fs_cli -x "sofia status profile internal reg"
# All 5 extensions should appear
```

#### T-REG2 — Multi-Device Registration (2 devices, same extension)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-REG2.1 | Register 2000 from a 2nd softphone simultaneously | Both registrations active | ⬜ | |
| T-REG2.2 | Call 2000 — both devices ring | Parallel ringing | ⬜ | |
| T-REG2.3 | Answer on 1st device — 2nd stops ringing | Call answered cleanly | ⬜ | |

---

### PBX / Reports / CDR

> Via **PBX → Reports → CDR**

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CDR1.1 | CDR shows test calls | Calls listed with duration | ⬜ | |
| T-CDR1.2 | CDR shows correct caller/callee numbers | 2000, 2001, etc. | ⬜ | |
| T-CDR1.3 | CDR shows call duration (not 0) | Accurate seconds | ⬜ | |
| T-CDR1.4 | CDR shows correct disposition (ANSWERED, NO ANSWER) | Correct value | ⬜ | |
| T-CDR1.5 | Filter CDR by extension 2000 | Only 2000 calls shown | ⬜ | |
| T-CDR1.6 | CDR export to CSV | CSV downloads with data | ⬜ | |

---

## PBX / SMS

> **Propósito:** Gestión completa de mensajería SMS desde el PBX. Permite configurar proveedores externos (Twilio, Bandwidth, etc.), asignar números SMS, definir rutas de mensajería y consultar el historial de mensajes.

> Items en orden del menú: Providers · Numbers · Routes · Messages · Settings · Opt-Outs

---

### PBX / SMS / Providers

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SMS1.1 | **PBX → SMS → Providers → Add** — crear provider (Twilio, nombre, credenciales) | Provider guardado en lista | ⬜ | |
| T-SMS1.2 | Editar provider → cambiar credenciales → Save | Cambio persistido | ⬜ | |
| T-SMS1.3 | Eliminar provider → confirmar | Provider eliminado | ⬜ | |

### PBX / SMS / Numbers

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SMS2.1 | **SMS → Numbers → Add** — asignar número SMS a provider | Número en lista | ⬜ | |
| T-SMS2.2 | Asociar número a extensión | Vinculación guardada | ⬜ | |
| T-SMS2.3 | Eliminar número → confirmar | Número eliminado | ⬜ | |

### PBX / SMS / Routes

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SMS3.1 | **SMS → Routes → Add** — crear ruta: patrón, provider, número saliente | Ruta guardada | ⬜ | |
| T-SMS3.2 | Editar ruta → Save | Cambio persistido | ⬜ | |
| T-SMS3.3 | Eliminar ruta → confirmar | Ruta eliminada | ⬜ | |

### PBX / SMS / Messages

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SMS4.1 | **SMS → Messages** — lista carga | Historial de mensajes visible | ⬜ | |
| T-SMS4.2 | Filtrar por número o fecha | Resultados filtrados correctamente | ⬜ | |
| T-SMS4.3 | Detalle de mensaje visible al hacer clic | Contenido, remitente, fecha | ⬜ | |

### PBX / SMS / Opt-Outs

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SMS5.1 | **SMS → Opt-Outs** — lista carga | Números en opt-out visibles | ⬜ | |
| T-SMS5.2 | Agregar número a opt-out manualmente | Número en lista | ⬜ | |
| T-SMS5.3 | Eliminar número de opt-out → confirmar | Número removido | ⬜ | |

---

## PBX / Tools

> **Propósito:** Herramientas de diagnóstico y administración del PBX. CLI Console permite ejecutar comandos FreeSWITCH directamente desde el browser. Log Viewer muestra logs en tiempo real. Weak Password detecta extensiones con contraseñas inseguras.

---

### PBX / Tools / CLI Console

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-TOOL1.1 | **PBX → Tools → CLI Console** — carga | Terminal interactivo visible | ⬜ | |
| T-TOOL1.2 | Ejecutar `sofia status` | Output de FreeSWITCH visible en terminal | ⬜ | |
| T-TOOL1.3 | Ejecutar `show calls` | Lista de llamadas activas | ⬜ | |
| T-TOOL1.4 | Comando inválido → error visible | Mensaje de error de FreeSWITCH | ⬜ | |

### PBX / Tools / Log Viewer

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-TOOL2.1 | **PBX → Tools → Log Viewer** — carga | Logs en tiempo real visibles | ⬜ | |
| T-TOOL2.2 | Filtrar por nivel (DEBUG, INFO, WARNING, ERROR) | Solo logs del nivel seleccionado | ⬜ | |
| T-TOOL2.3 | Hacer una llamada → log refleja eventos | Líneas de log aparecen durante llamada | ⬜ | |

### PBX / Tools / Weak Password

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-TOOL3.1 | **PBX → Tools → Weak Password** — carga | Lista de extensiones con contraseñas débiles | ⬜ | |
| T-TOOL3.2 | Extensión con password débil aparece en lista | Detectado correctamente | ⬜ | |
| T-TOOL3.3 | Extensión con password fuerte no aparece | No listada | ⬜ | |

---

## PBX / Emergency

> **Propósito:** Configuración de números de emergencia (911, 112, etc.) con ubicaciones asociadas para cumplimiento E911/E112. Garantiza que las llamadas a emergencias sean enrutadas correctamente.

---

### PBX / Emergency / Emergency Numbers

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-EMRG1.1 | **PBX → Emergency → Numbers → Add** — crear número (`911`, descripción, trunk) | Número en lista | ⬜ | |
| T-EMRG1.2 | Editar número de emergencia → cambiar trunk → Save | Cambio persistido | ⬜ | |
| T-EMRG1.3 | Eliminar número de emergencia → confirmar | Eliminado de lista | ⬜ | |

### PBX / Emergency / Emergency Locations

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-EMRG2.1 | **Emergency → Locations → Add** — crear ubicación (nombre, dirección, extensiones asignadas) | Ubicación en lista | ⬜ | |
| T-EMRG2.2 | Editar ubicación → cambiar dirección → Save | Cambio persistido | ⬜ | |
| T-EMRG2.3 | Eliminar ubicación → confirmar | Eliminada de lista | ⬜ | |

---

## PBX / Virtual Faxes

> **Propósito:** Faxes virtuales sobre IP — permite enviar y recibir faxes sin hardware físico. Fax Devices define los dispositivos lógicos de fax. Fax Sending permite enviar faxes vía UI. Fax Viewer muestra el historial.

---

### PBX / Virtual Faxes / Fax Devices

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FAX1.1 | **PBX → Virtual Faxes → Devices → Add** — crear fax device (nombre, extensión, número DID) | Device en lista | ⬜ | |
| T-FAX1.2 | Editar fax device → cambiar número → Save | Cambio persistido | ⬜ | |
| T-FAX1.3 | Eliminar fax device → confirmar | Device eliminado | ⬜ | |

### PBX / Virtual Faxes / Fax Sending

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FAX2.1 | **Virtual Faxes → Sending** — formulario carga | Campos: destino, archivo PDF/TIF, remitente | ⬜ | |
| T-FAX2.2 | Subir PDF y enviar fax a número destino | Fax enviado, aparece en Fax Viewer | ⬜ | Requiere trunk activo |
| T-FAX2.3 | Enviar sin archivo adjunto → validación | Error "Adjunto requerido" | ⬜ | |

### PBX / Virtual Faxes / Fax Viewer

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FAX3.1 | **Virtual Faxes → Viewer** — historial carga | Lista de faxes enviados/recibidos | ⬜ | |
| T-FAX3.2 | Clic en fax → previsualización | PDF/imagen visible | ⬜ | |
| T-FAX3.3 | Descargar fax | Descarga exitosa | ⬜ | |

---

# 📊 Reports

> **Propósito:** Reportes de visibilidad del sistema — estado de registro SIP, historial de llamadas, estadísticas de IVR, colas de call center, y auditoría del sistema.

---

## Reports / CDR

### Reports / CDR / Filters

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-RCDR1.1 | **Reports → CDR → Filters** — carga | Filtros de fecha, extensión, gateway visibles | ⬜ | |
| T-RCDR1.2 | Crear filtro guardado (nombre, criterios) | Filtro disponible para aplicar en CDR | ⬜ | |
| T-RCDR1.3 | Eliminar filtro → confirmar | Filtro eliminado | ⬜ | |

### Reports / CDR / CDR

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-RCDR2.1 | **Reports → CDR → CDR** — tabla carga | Llamadas históricas visibles | ⬜ | |
| T-RCDR2.2 | Aplicar filtro de fecha → resultados acotados | Solo llamadas en el rango | ⬜ | |
| T-RCDR2.3 | Filtrar por extensión `2001` | Solo llamadas de/hacia 2001 | ⬜ | |
| T-RCDR2.4 | Exportar a CSV | Archivo descargado con datos | ⬜ | |

---

## Reports / PBX

### Reports / PBX / Active Calls

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-RPBX1.1 | **Reports → PBX → Active Calls** — carga | Lista de llamadas activas en tiempo real | ⬜ | |
| T-RPBX1.2 | Iniciar llamada 2000→2001 → aparece en Active Calls | Llamada visible con duración en curso | ⬜ | |
| T-RPBX1.3 | Colgar llamada → desaparece de Active Calls | Lista actualizada | ⬜ | |

### Reports / PBX / SIP Endpoints

> Ver sección [PBX / Reports / SIP Endpoints](#pbx--reports--sip-endpoints) — ya cubierto en bloque PBX.

---

## Reports / IVR Stats

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-RIVR1.1 | **Reports → IVR → Stats** — carga | Métricas de IVR: opciones presionadas, timeouts, transferencias | ⬜ | |
| T-RIVR1.2 | Hacer llamadas via IVR → stats actualizadas | Contadores incrementan | ⬜ | |
| T-RIVR1.3 | Filtrar por IVR específico o rango de fechas | Resultados filtrados | ⬜ | |

---

## Reports / Call Center Reports

### Reports / Call Center / Queue Callback

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-RCC1.1 | **Reports → Call Center → Queue Callback** — carga | Lista de solicitudes de callback pendientes/completadas | ⬜ | |
| T-RCC1.2 | Callback completado → aparece con estado Completed | Estado correcto | ⬜ | |
| T-RCC1.3 | Filtrar por fecha o extensión | Resultados filtrados | ⬜ | |

---

## Reports / System Reports

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-RSYS1.1 | **Reports → System → Audit Logs** — carga | Registro de acciones de administradores (login, cambios de config) | ⬜ | |
| T-RSYS1.2 | **Reports → System → User Activity** — carga | Actividad por usuario (módulos visitados, acciones) | ⬜ | |
| T-RSYS1.3 | **Reports → System → Change History** — carga | Historial de cambios en configuraciones | ⬜ | |
| T-RSYS1.4 | **Reports → System → Security** — carga | Alertas de seguridad, intentos de login fallidos | ⬜ | |

---

# ⚙️ Settings

> **Propósito:** Configuración global del sistema PBX — parámetros SIP, perfiles de dispositivos y gateways, configuración de voicemail y conferencias, audio corporativo, templates de aprovisionamiento, e integraciones externas.

---

## Settings / Technology

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-STECH1.1 | **Settings → Technology → SIP** — carga | Parámetros del perfil SIP (internal/external) visibles | ⬜ | mainTenantOnly |
| T-STECH1.2 | Editar parámetro SIP (ej: max registrations) → Save | Cambio persistido | ⬜ | |
| T-STECH1.3 | **Settings → Technology → Device Profile** — carga | Perfil de dispositivo editable | ⬜ | |
| T-STECH1.4 | **Settings → Technology → Gateway Profile** — carga | Parámetros del perfil de gateway | ⬜ | mainTenantOnly |
| T-STECH1.5 | **Settings → Technology → Dial Profile** — carga | Perfil de marcación editable | ⬜ | |

---

## Settings / PBX Settings

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SPBX1.1 | **Settings → PBX → System General** — carga y Save | Configuración general guardada | ⬜ | |
| T-SPBX1.2 | **Settings → PBX → System Vars** — editar variable → Save | Variable actualizada | ⬜ | |
| T-SPBX1.3 | **Settings → PBX → Voicemail Settings** — carga y Save | Parámetros de voicemail guardados | ⬜ | |
| T-SPBX1.4 | **Settings → PBX → Conference Profiles** — carga | Perfiles de conferencia visibles | ⬜ | |
| T-SPBX1.5 | **Settings → PBX → Queue Profiles** — carga | Perfiles de cola visibles | ⬜ | |

---

## Settings / Voice Prompts

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SVOC1.1 | **Settings → Voice Prompts → PBX Guide** — carga | Guías de voz del PBX listadas | ⬜ | |
| T-SVOC1.2 | **Settings → Voice Prompts → Music on Hold** — subir audio → Save | MOH actualizado | ⬜ | |
| T-SVOC1.3 | **Settings → Voice Prompts → Recording** — crear/editar grabación | Grabación disponible para asignar | ⬜ | |

---

## Settings / Provisioning

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SPROV1.1 | **Settings → Provisioning → Vendors** — lista carga | Fabricantes disponibles | ⬜ | |
| T-SPROV1.2 | **Settings → Provisioning → Device Models** — lista carga | Modelos de teléfono IP disponibles | ⬜ | |
| T-SPROV1.3 | **Settings → Provisioning → Server Settings** — carga y Save | URL de aprovisionamiento configurada | ⬜ | |
| T-SPROV1.4 | **Settings → Provisioning → Templates** — lista carga | Templates de configuración de dispositivo | ⬜ | |
| T-SPROV1.5 | **Settings → Provisioning → Devices** — agregar dispositivo → Save | Dispositivo en lista con MAC address | ⬜ | |
| T-SPROV1.6 | Acceder a URL de aprovisionamiento del dispositivo | Configuración XML/TXT generada correctamente | ⬜ | |

---

# 🛡️ Admin

> **Propósito:** Administración de usuarios del sistema, configuración general del servidor, multi-tenancy, firewall, red, mantenimiento del sistema, e integración con IA.

---

## Admin / Administration

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-ADM1.1 | **Admin → Users → Add** — crear usuario admin | Usuario en lista | ⬜ | |
| T-ADM1.2 | Editar usuario → cambiar rol → Save | Rol actualizado | ⬜ | |
| T-ADM1.3 | **Admin → Role Profiles** — crear perfil con permisos limitados | Perfil en lista | ⬜ | |
| T-ADM1.4 | Asignar Role Profile a usuario → login → verificar acceso restringido | Solo módulos autorizados visibles | ⬜ | |
| T-ADM1.5 | **Admin → App Keys → Add** — crear API key | Key generada y visible | ⬜ | |
| T-ADM1.6 | Usar API key en request → autenticado | Response 200, no 401 | ⬜ | |

---

## Admin / System Settings

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-ASYS1.1 | **Admin → System Settings → Branding** — cambiar logo → Save | Logo actualizado en UI | ⬜ | |
| T-ASYS1.2 | **Admin → System Settings → Email** — configurar SMTP → Test → Save | Correo de prueba recibido | ⬜ | |
| T-ASYS1.3 | **Admin → System Settings → Email Templates** — editar template → Save | Template actualizado | ⬜ | |
| T-ASYS1.4 | **Admin → System Settings → Misc** — carga y Save | Parámetros misceláneos guardados | ⬜ | |

---

## Admin / AI Integration

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-AI1.1 | **Admin → AI Integration → Providers → Add** — crear provider (OpenAI/Azure, API key) | Provider en lista | ⬜ | |
| T-AI1.2 | **Admin → AI Integration → Profiles → Add** — crear perfil AI (nombre, provider, parámetros) | Perfil en lista | ⬜ | |
| T-AI1.3 | **Admin → AI Integration → Tool Profiles → Add** — crear tool profile con herramientas configuradas | Tool profile en lista | ⬜ | |
| T-AI1.4 | Probar tool desde Tool Profile | Herramienta ejecuta y retorna resultado | ⬜ | |
| T-AI1.5 | **Admin → AI Integration → Agents → Add** — crear agente (nombre, perfil AI, voice guide) | Agente en lista | ⬜ | |
| T-AI1.6 | Asignar agente a IVR → llamada entrante | Agente responde la llamada | ⬜ | Requiere proveedor TTS/STT activo |

---

# 📞 Telephony — Functional Tests
> **Propósito:** Esta sección valida el comportamiento real del motor de telefonía de extremo a extremo. A diferencia de los tests de UI anteriores, aquí se verifica que las llamadas efectivamente se enruten, conecten, transfieran y cuelguen correctamente entre extensiones, hacia la PSTN y desde DID entrantes.
>
> **Alcance:** Llamadas internas entre extensiones · Llamadas salientes via gateway · Llamadas entrantes via DID · Buzón de voz · Feature Codes de telefonía (DND, transferencias, conferencias, estacionamiento) · Colas de Call Center · Portal de usuario · Dashboard y Switchboard.
>
> **Prerequisitos globales:**
> - Extensiones `2000`, `2001`, `2002` registradas y en línea
> - Gateway `lab-gateway` registrado hacia el proveedor SIP
> - Ruta saliente `lab-outbound` activa con patrón `9XXXXXXXXXX`
> - Ruta entrante `lab-inbound-2001` para DID `5058881000 → 2001`
> - Softphone (Zoiper / Linphone / MicroSIP) configurado por extensión

---


## Basic Call Tests

### T-CALL1 — Extension-to-Extension

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CALL1.1 | **2000 calls 2001** | 2001 rings, call connects | ⬜ | |
| T-CALL1.2 | **2001 calls 2000** | 2000 rings, call connects | ⬜ | |
| T-CALL1.3 | Caller ID shown on 2001 phone | "2000" or "Test Admin" displayed | ⬜ | |
| T-CALL1.4 | 2000 hangs up — call terminates | Both sides disconnected | ⬜ | |
| T-CALL1.5 | 2001 hangs up — call terminates | Both sides disconnected | ⬜ | |
| T-CALL1.6 | Call 2005 (virtual) | Routes to configured destination or returns error | ⬜ | |

### T-CALL2 — Busy Detection

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-CALL2.1 | Set 2004 max_calls = 1 in **Edit Extension → Advanced** | Limit configured | ⬜ | |
| T-CALL2.2 | 2000 calls 2004 (connects) | Active call established | ⬜ | |
| T-CALL2.3 | 2001 calls 2004 while busy | Busy signal / voicemail route | ⬜ | |
| T-CALL2.4 | 2004 ends call, 2001 tries again | Rings normally | ⬜ | |

---

## Voicemail

### T-VM1 — Remote Access `*98` (Extension 2003)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-VM1.1 | Enable voicemail for 2003 (PIN: 1460) | Voicemail box created | ⬜ | |
| T-VM1.2 | 2000 calls 2003 — no answer → voicemail | Greeting plays, message recorded | ⬜ | |
| T-VM1.3 | 2003 dials `*98`, enters `2003#` | Extension accepted | ⬜ | |
| T-VM1.4 | 2003 enters PIN `1460#` | Access granted, enters inbox | ⬜ | |
| T-VM1.5 | 2003 hears message from 2000 | Message playable | ⬜ | |
| T-VM1.6 | Portal → Voicemail shows message | Message visible in Portal | ⬜ | |

### T-VM2 — Direct Access `*97` (own mailbox, no prompts)

> `*97` accesses caller's **own** voicemail directly — no extension or password prompt.

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-VM2.1 | 2003 dials `*97` | Goes directly to inbox (no prompt) | ⬜ | |
| T-VM2.2 | No prompt before inbox | Silent direct entry | ⬜ | |
| T-VM2.3 | Main voicemail menu plays | Hears "X new messages" | ⬜ | |
| T-VM2.4 | Message from T-VM1.2 accessible | Message playable | ⬜ | |

---

## Feature Codes

### T-FC1 — Do Not Disturb (`*66`, Extension 2004)

> **Code:** `*66` — toggle (same code activates/deactivates)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FC1.1 | 2004 dials `*66` (DND ON) | *"DND Enabled"* prompt | ⬜ | |
| T-FC1.2 | 2000 calls 2004 while DND ON | Voicemail or busy | ⬜ | |
| T-FC1.3 | 2004 dials `*66` (DND OFF) | *"DND Disabled"* prompt | ⬜ | |
| T-FC1.4 | 2000 calls 2004 after OFF | Rings normally | ⬜ | |

### T-FC2 — Call Forwarding Always `*61` (Extension 2002)

> `*61` toggle · `*612001` directo

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FC2.1 | 2002 dials `*61` (OFF → asks number) | *"Por favor ingrese el número..."* | ⬜ | |
| T-FC2.2 | Enter `2001#` via DTMF | *"CF incondicional activado"* | ⬜ | |
| T-FC2.3 | 2000 calls 2002 | Rings on 2001, not 2002 | ⬜ | |
| T-FC2.4 | 2002 dials `*61` (ON → toggle OFF) | *"CF incondicional desactivado"* | ⬜ | |
| T-FC2.5 | 2000 calls 2002 | Rings on 2002 normally | ⬜ | |
| T-FC2.6 | 2002 dials `*612001` (direct activate) | Confirmation only, no number prompt | ⬜ | |
| T-FC2.7 | 2002 dials with invalid number | *"Número inválido"* | ⬜ | |
| T-FC2.8 | 2002 dials `*65` (clear all) | *"Todos los desvíos eliminados"* | ⬜ | |

### T-FC2b — Call Forwarding Busy `*62`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FC2b.1 | 2002 dials `*62` (OFF → asks) | *"Por favor ingrese el número..."* | ⬜ | |
| T-FC2b.2 | Enter `2003#` | *"CF en ocupado activado"* | ⬜ | |
| T-FC2b.3 | 2000 calls 2002 while busy | Call forwards to 2003 | ⬜ | |
| T-FC2b.4 | 2002 dials `*62` (ON → OFF) | *"CF en ocupado desactivado"* | ⬜ | |
| T-FC2b.5 | 2002 dials `*622003` (direct) | Immediate confirmation | ⬜ | |
| T-FC2b.6 | 2002 dials `*65` | CF Busy cleared | ⬜ | |

### T-FC2c — Call Forwarding Not Registered `*63`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FC2c.1 | 2002 dials `*63` (OFF → asks) | *"Por favor ingrese el número..."* | ⬜ | |
| T-FC2c.2 | Enter `2001#` | *"CF no registrado activado"* | ⬜ | |
| T-FC2c.3 | Unregister 2002 from softphone | 2002 offline | ⬜ | |
| T-FC2c.4 | 2000 calls 2002 (offline) | Redirects to 2001 | ⬜ | |
| T-FC2c.5 | 2002 dials `*63` (ON → OFF) | *"CF no registrado desactivado"* | ⬜ | |
| T-FC2c.6 | 2002 dials `*632001` (direct) | Immediate confirmation | ⬜ | |

### T-FC2d — Call Forwarding No Answer `*64`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FC2d.1 | 2002 dials `*64` (OFF → asks) | *"Por favor ingrese el número..."* | ⬜ | |
| T-FC2d.2 | Enter `2001#` | *"CF sin respuesta activado"* | ⬜ | |
| T-FC2d.3 | 2000 calls 2002, no answer | After ~20s redirects to 2001 | ⬜ | |
| T-FC2d.4 | 2002 dials `*64` (ON → OFF) | *"CF sin respuesta desactivado"* | ⬜ | |
| T-FC2d.5 | 2002 dials `*642003` (direct) | Now redirects to 2003 | ⬜ | |

### T-FC2e — Clear All Forwarding & DND `*65`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FC2e.1 | Activate `*61`, `*62`, `*63`, `*64` on 2002 | All active | ⬜ | |
| T-FC2e.2 | 2002 dials `*65` | *"Todos los desvíos y DND eliminados"* | ⬜ | |
| T-FC2e.3 | 2000 calls 2002 (peak, busy, offline) | No forwarding — calls directly | ⬜ | |
| T-FC2e.4 | All forwarding fields = FALSE in Admin UI | Confirmed in portal/UI | ⬜ | |

### T-FC3 — Call Transfer (SIP REFER via Softphone)

> Softphones use native **SIP REFER** — no DTMF codes needed.

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-FC3.1 | 2000 calls 2001 (connected) | Active call both softphones | ⬜ | |
| T-FC3.2 | 2001 **blind transfer** to 2002 (native button) | 2000 rings on 2002; 2001 disconnects | ⬜ | SIP REFER |
| T-FC3.3 | 2000 calls 2001 (connected) | Active call | ⬜ | |
| T-FC3.4 | 2001 **attended transfer** to 2002 (native) | 2001 talks to 2002 first, then 2000 connects | ⬜ | |
| T-FC3.5 | CDR shows transfer operation | CDR entry with transfer to 2002 | ⬜ | |

---


# 👤 User Portal

> Access: `http://192.168.10.31/portal`
>
> **Portal credentials configured in:** `PBX → Extensions → Extensions → Edit 2001 → Tab: Advanced → Portal Access`

## T-PORTAL1 — Login

> 🔑 **Login mechanism:** Frontend extracts domain from URL → sends `{username, password, domain}` → backend resolves via `domains` then `domain_aliases` → scoped search (multi-tenant safe)

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-PORTAL1.1 | Configure Portal Access for 2001 (username `2001`, password, enabled) | Access configured | ⬜ | Prerequisite |
| T-PORTAL1.2 | Access `http://192.168.10.31/portal` | Login page loads | ⬜ | |
| T-PORTAL1.3 | Login with `2001` + password | Portal dashboard loads | ⬜ | No `@domain` needed |
| T-PORTAL1.4 | Portal shows extension 2001 info | Correct extension data | ⬜ | |
| T-PORTAL1.5 | Portal shows call history | CDR entries visible | ⬜ | |
| T-PORTAL1.6 | Portal shows voicemail section | Message list loads | ⬜ | |

## T-PORTAL2 — Self-Service

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-PORTAL2.1 | Change call forwarding from portal | Forwarding updated | ⬜ | |
| T-PORTAL2.2 | Toggle DND from portal | DND state changed | ⬜ | |
| T-PORTAL2.3 | Update portal password from **Edit Extension → Advanced → Portal Access** | Password updated, re-login works | ⬜ | |

---

# 🛡️ Admin

---

## Admin Dashboard

### T-DASH1 — Dashboard Widgets

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-DASH1.1 | Admin Dashboard loads | No 502 errors | ⬜ | |
| T-DASH1.2 | Active Calls widget shows real-time data | Updates during test calls | ⬜ | |
| T-DASH1.3 | FreeSWITCH Status widget | Shows "Running" | ⬜ | |
| T-DASH1.4 | Registrations widget | Shows count matching actuals | ⬜ | |
| T-DASH1.5 | System Resources (CPU/RAM) | Monitoring data loads | ⬜ | |
| T-DASH1.6 | CPS (Calls Per Second) widget | Real-time metrics | ⬜ | |

### T-DASH2 — API Health

```bash
curl -s http://127.0.0.1:3001/api/health | jq .
curl -s http://127.0.0.1:3500/health | jq .
systemctl is-active softswitch-api softswitch-monitoring-api freeswitch postgresql nginx
```

Expected: All services `active`

---

## Switchboard Console

> Access: `http://192.168.10.32/switchboard`

| ID | Test Case | Expected Result | Status | Notes |
|----|-----------|-----------------|--------|-------|
| T-SB1.1 | Login to Switchboard | Login page loads | ⬜ | |
| T-SB1.2 | Dashboard loads | Widget layout renders | ⬜ | |
| T-SB1.3 | Active Calls widget shows test calls | Real-time updates | ⬜ | |
| T-SB1.4 | Extension status panel shows 2000–2004 | States: Available / Busy / DND | ⬜ | |
| T-SB1.5 | Clicking extension allows transfer | Transfer dialog appears | ⬜ | |

---

# 🐛 Bug Register

| ID | Test Case | Description | Priority | Status |
|----|-----------|-------------|----------|--------|
| BUG-001 | — | *Add bugs here as discovered* | — | ⬜ |

---

# 📊 Test Progress Summary

| Section | Total | ✅ Passed | ❌ Failed | ⚠️ Partial | Coverage |
|---------|-------|-----------|-----------|------------|---------|
| PBX / Extensions / Extensions | 13 | 0 | 0 | 0 | 0% |
| PBX / Extensions / Hot Desking | 17 | 0 | 0 | 0 | 0% |
| PBX / Extensions / Bulk Modification | 6 | 0 | 0 | 0 | 0% |
| PBX / Calls Routing / Gateways | 3 | 0 | 0 | 0 | 0% |
| PBX / Calls Routing / Outbound Routes | 3 | 0 | 0 | 0 | 0% |
| PBX / Calls Routing / Inbound Routes | 6 | 0 | 0 | 0 | 0% |
| PBX / Calls Routing / Dynamic Routing | 8 | 0 | 0 | 0 | 0% |
| PBX / Incoming Tools / IVR | 8 | 0 | 0 | 0 | 0% |
| PBX / Incoming Tools / DISA | 4 | 0 | 0 | 0 | 0% |
| PBX / Incoming Tools / Callback | 14 | 0 | 0 | 0 | 0% |
| PBX / Incoming Tools / PIN List | 3 | 0 | 0 | 0 | 0% |
| PBX / Incoming Tools / Dynamic Destination | 3 | 0 | 0 | 0 | 0% |
| PBX / Applications / Conferences | 4 | 0 | 0 | 0 | 0% |
| PBX / Applications / Speed Dialing | 2 | 0 | 0 | 0 | 0% |
| PBX / Applications / Pickup Groups | 4 | 0 | 0 | 0 | 0% |
| PBX / Applications / Call Parking | 4 | 0 | 0 | 0 | 0% |
| PBX / Applications / Paging & Intercom | 2 | 0 | 0 | 0 | 0% |
| PBX / Applications / Voicemail Broadcast | 3 | 0 | 0 | 0 | 0% |
| PBX / Applications / Direct Dial | 2 | 0 | 0 | 0 | 0% |
| PBX / Applications / Direct Route | 2 | 0 | 0 | 0 | 0% |
| PBX / Reports / SIP Endpoints | 9 | 0 | 0 | 0 | 0% |
| PBX / Reports / CDR | 6 | 0 | 0 | 0 | 0% |
| Basic Calls | 6 | 0 | 0 | 0 | 0% |
| Busy Detection | 4 | 0 | 0 | 0 | 0% |
| Voicemail | 10 | 0 | 0 | 0 | 0% |
| Feature Codes | 40 | 0 | 0 | 0 | 0% |
| Call Center / Queues | 7 | 0 | 0 | 0 | 0% |
| User Portal | 9 | 0 | 0 | 0 | 0% |
| Admin Dashboard | 7 | 0 | 0 | 0 | 0% |
| Switchboard | 5 | 0 | 0 | 0 | 0% |
| **TOTAL** | **218** | **0** | **0** | **0** | **0%** |

---

## 🔩 Quick Verification Commands

```bash
# Check all services
systemctl status postgresql freeswitch softswitch-api softswitch-monitoring-api nginx

# Check API health
curl -s http://127.0.0.1:3001/api/health

# Check SIP registrations
fs_cli -x "sofia status profile internal reg"

# Check active calls
fs_cli -x "show calls"
```

---

*Ring2All Platform Test Plan v2.0 — March 2026*
*Scope: Single Server Lab (192.168.10.31) — Menu-Hierarchy Structure*
