<p align="center">
  <img src="https://img.shields.io/badge/python-3.6+-blue.svg" alt="Python 3.6+">
  <img src="https://img.shields.io/badge/platform-Kali%20%7C%20Parrot%20%7C%20Ubuntu%20%7C%20macOS-brightgreen.svg" alt="Platform">
  <a href="https://github.com/zencefilefendi/zencefilscan/issues"><img src="https://img.shields.io/github/issues/zencefilefendi/zencefilscan.svg?color=%23ff0000" alt="Issues"></a>
  <a href="https://github.com/zencefilefendi/zencefilscan/network"><img src="https://img.shields.io/github/forks/zencefilefendi/zencefilscan.svg?color=%23ffff00" alt="Forks"></a>
  <a href="https://github.com/zencefilefendi/zencefilscan/stargazers"><img src="https://img.shields.io/github/stars/zencefilefendi/zencefilscan.svg?color=%23ff3300" alt="Stars"></a>
  <a href="https://github.com/zencefilefendi/zencefilscan/blob/master/LICENSE"><img src="https://img.shields.io/github/license/zencefilefendi/zencefilscan.svg?color=%230000ff" alt="License"></a>
</p>

<h1 align="center">🟥 ZencefilScan v1.2</h1>
<h3 align="center">The Multi-Tool Web Vulnerability Scanner with 3D Holo-Dashboard</h3>

<p align="center">
  <b>One command. 80+ vulnerability checks. Zero false-positive tolerance.</b><br/>
  Orchestrates industry-standard security tools, correlates findings, and visualizes results through a futuristic 3D command center.
</p>

---

## 🎯 What is ZencefilScan?

ZencefilScan is a **Python 3** automated web vulnerability scanner designed for penetration testers and security researchers. Instead of running dozens of scanning tools one by one, ZencefilScan orchestrates them all under a single command — executing, correlating, and reporting results with **severity classification**, **vulnerability definitions**, and **remediation guidance**.

### Key Highlights

| Feature | Description |
|---------|-------------|
| 🔍 **80+ Vulnerability Checks** | SSL, XSS, SQLi, LFI/RFI/RCE, DNS, CMS detection, port scanning, and more |
| 🛡️ **WAF Evasion Engine** | Spoofed headers, random user-agents, and stealth scan modes |
| 🤖 **AI Exploit Chaining** | Dynamically combines discovered vulnerabilities for complex attack paths |
| 💀 **Auto-Pwn C2 Engine** | Automatically generates Metasploit exploit commands for critical findings |
| 🌐 **Headless DOM-XSS Hunter** | Browser-based DOM XSS detection via Selenium |
| 🕵️ **OSINT & Dark Web Checker** | Polls public APIs for data breaches and threat intelligence |
| 📊 **3D Holo-Dashboard** | Real-time Three.js-powered cyberpunk command center UI |
| 📝 **Auto-Reports** | Vulnerability reports with OWASP/CWE mappings and remediation steps |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/zencefilefendi/zencefilscan.git
cd zencefilscan

# Run a basic scan
python3 zencefilscan.py example.com

# Run with the 3D Dashboard
python3 zencefilscan.py example.com --dashboard

# Full offensive mode
python3 zencefilscan.py example.com --evade --autopwn --aichain --dom --osint --dashboard
```

---

## 📦 Installation

### Option 1: pip Install (Recommended)

```bash
git clone https://github.com/zencefilefendi/zencefilscan.git /opt/zencefilscan
cd /opt/zencefilscan
python3 -m pip install .
```

This creates a `zencefilscan` command in your PATH.

### Option 2: Docker (Kali-based, all tools included)

```bash
docker build -t zencefilscan .
docker run --rm zencefilscan example.com
```

### Option 3: Direct Execution

```bash
git clone https://github.com/zencefilefendi/zencefilscan.git
cd zencefilscan
python3 zencefilscan.py example.com
```

### System Requirements

| Requirement | Details |
|---|---|
| **Python** | 3.6+ |
| **Preferred OS** | Kali Linux (ships with most tools pre-installed) |
| **Tested On** | Kali, Parrot OS, Ubuntu, macOS |
| **Dashboard** | Node.js 18+ (for React dev server) or use the standalone `dashboard/dist/index.html` |

---

## 🛠️ CLI Usage & Flags

```
python3 zencefilscan.py [TARGET] [OPTIONS]
```

| Flag | Shorthand | Description |
|------|-----------|-------------|
| `--help` | `-h` | Display help context |
| `--update` | `-u` | Update ZencefilScan to the latest version |
| `--evade` | `-e` | Enable WAF Evasion Engine (spoofed headers, random user-agents, stealth Nmap scans) |
| `--autopwn` | `-a` | Enable Auto-Pwn C2 Engine (auto-generate Metasploit exploit commands) |
| `--aichain` | `-c` | Enable AI Exploit Chaining (combine vulnerabilities for complex attack paths) |
| `--dom` | `-d` | Enable Headless Browser DOM-XSS Hunter (requires Selenium + Chrome) |
| `--osint` | `-o` | Enable OSINT & Dark Web Leak Checker (polls public breach APIs) |
| `--dashboard` | | Launch the 3D Holo-Dashboard after scan completion |
| `--skip TOOL` | `-s TOOL` | Skip a specific tool (can be used multiple times) |
| `--nospinner` | `-n` | Disable the idle loader/spinner animation |

### Examples

```bash
# Basic domain scan
python3 zencefilscan.py testphp.vulnweb.com

# Skip slow tools
python3 zencefilscan.py example.com --skip dmitry --skip theHarvester --skip fierce

# Stealth scan with WAF evasion
python3 zencefilscan.py example.com --evade

# Full automated offensive scan with dashboard
python3 zencefilscan.py example.com -e -a -c -d -o --dashboard

# Without spinner (for logging/CI)
python3 zencefilscan.py example.com --nospinner
```

### Interactive Controls

| Key | Action |
|-----|--------|
| `Ctrl+C` | Skip current test |
| `Ctrl+Z` | Quit ZencefilScan |

---

## 🔬 Vulnerability Checks (80+)

### Network & Infrastructure
- ✅ IPv6 Support Detection
- ✅ Commonly Opened Ports (TCP/UDP full scan)
- ✅ DNS Zone Transfers (Fierce, DNSWalk, DNSRecon, DNSEnum)
- ✅ Subdomain Brute Forcing (DNSMap, Amass, Nikto, Dmitry)
- ✅ DNS/HTTP Load Balancers Detection
- ✅ SNMP Service Detection
- ✅ SMB Ports Detection (TCP/UDP)
- ✅ RDP Server Detection (TCP/UDP)
- ✅ Database Services (MS-SQL, MySQL, Oracle)
- ✅ FTP/TELNET Open Ports
- ✅ StuxNet Worm Detection

### Web Application
- ✅ CMS Detection: WordPress, Joomla, Drupal
- ✅ Web Application Firewall (WAF) Detection
- ✅ Robots.txt/Sitemap.xml Analysis
- ✅ Open Directory/File Brute Forcing (Dirb, Uniscan)
- ✅ XSS, SQLi, Blind SQLi Detection
- ✅ LFI, RFI, RCE Vulnerability Checks
- ✅ Slow-Loris DoS Vulnerability
- ✅ HTTP PUT/DELETE Methods Enabled
- ✅ WebDAV Vulnerability Checks
- ✅ ASP.Net Misconfiguration
- ✅ Elmah Error Log Exposure
- ✅ X-XSS-Protection Header Check
- ✅ Server Fingerprinting
- ✅ CGI Directories Enumeration
- ✅ Injectable Paths Detection
- ✅ ShellShock Bug Detection
- ✅ Internal IP Leak Detection
- ✅ MS10-070 Vulnerability Check

### SSL/TLS
- ✅ Heartbleed (CVE-2014-0160)
- ✅ POODLE (CVE-2014-3566)
- ✅ FREAK Attack
- ✅ CCS Injection (CVE-2014-0224)
- ✅ LOGJAM Attack
- ✅ OCSP Stapling Check
- ✅ SSL Compression (CRIME)
- ✅ SSL Renegotiation
- ✅ BREACH Attack
- ✅ SWEET32 (CVE-2016-2183)

### OSINT & Intelligence
- ✅ Email Harvesting (theHarvester)
- ✅ WHOIS Information Gathering
- ✅ Subdomain Enumeration (Amass)

---

## 📊 3D Holo-Dashboard

ZencefilScan includes a futuristic **3D command center dashboard** built with Three.js for real-time scan visualization.

### Features
- 🌍 Interactive 3D wireframe globe with orbital controls
- 📡 Real-time vulnerability feed with threat severity classification
- 🎯 Target intelligence panel (domain, scan duration, total vulns)
- 🔴 Critical alert threat matrix with scrollable vulnerability list
- ✨ Cyberpunk-themed UI with particle effects and scan-line animations

### Running the Dashboard

**Option 1: Standalone HTML** (No build tools required)
```bash
# Open directly in browser
open dashboard/dist/index.html
```

**Option 2: React Dev Server** (Requires Node.js 18+)
```bash
cd dashboard
npm install
npm run dev
```

The dashboard reads from `dashboard/public/zencefil_report.json`, which is automatically generated when you run ZencefilScan with the `--dashboard` flag.

---

## 🏗️ Project Structure

```
zencefilscan/
├── zencefilscan.py          # Main scanner engine (1800+ lines, 80+ checks)
├── setup.py                 # pip install configuration
├── Dockerfile               # Kali Linux-based Docker image with all tools
├── LICENSE                  # GNU General Public License v3.0
├── README.md                # This file
├── notes.md                 # Development notes & tool deployment guide
└── dashboard/               # 3D Holo-Dashboard (React + Three.js)
    ├── dist/                # Pre-built standalone dashboard
    │   └── index.html       # No-build-required version
    ├── public/
    │   └── zencefil_report.json  # Scan report data (auto-generated)
    ├── src/
    │   ├── App.tsx          # Main React dashboard component
    │   ├── App.css          # Component styles
    │   ├── main.tsx         # React entry point
    │   └── index.css        # Global styles with Tailwind
    ├── package.json         # Node.js dependencies
    ├── vite.config.ts       # Vite build configuration
    ├── tailwind.config.js   # Tailwind CSS configuration
    └── postcss.config.js    # PostCSS configuration
```

---

## 📋 Severity Classifications

| Level | Label | Description |
|-------|-------|-------------|
| 🔴 | **Critical** | Requires immediate attention — may lead to full compromise or service unavailability |
| 🟠 | **High** | May not lead to immediate compromise, but considerable probability exists |
| 🟡 | **Medium** | Attacker may correlate multiple findings to launch sophisticated attacks |
| 🔵 | **Low** | Not a serious issue, but recommended to address |
| 🟢 | **Info** | Not a vulnerability — informational alert for consideration |

---

## 🔧 Integrated Security Tools

ZencefilScan orchestrates the following tools (auto-detects availability):

| Tool | Purpose |
|------|---------|
| `nmap` | Port scanning, service detection, NSE scripts |
| `nikto` | Web server vulnerability scanner |
| `dirb` | Directory brute forcing |
| `wafw00f` | WAF detection |
| `sslyze` | SSL/TLS configuration analysis |
| `dnsrecon` | DNS enumeration & zone transfers |
| `dnswalk` | DNS zone transfer checking |
| `dnsenum` | DNS enumeration |
| `dnsmap` | Subdomain brute forcing |
| `fierce` | DNS reconnaissance |
| `amass` | Subdomain enumeration (OWASP) |
| `theHarvester` | Email & subdomain harvesting |
| `dmitry` | Deep information gathering |
| `whois` | Domain registration information |
| `whatweb` | Web technology fingerprinting |
| `wapiti` | Web application vulnerability scanner |
| `uniscan` | LFI/RFI/RCE/XSS/SQLi scanner |
| `xsser` | Cross-site scripting detection |
| `davtest` | WebDAV vulnerability testing |
| `lbd` | Load balancer detection |
| `golismero` | Multi-purpose security framework |
| `wget` | HTTP request utility |
| `host` | DNS lookup utility |

> **Note:** ZencefilScan gracefully handles missing tools — it will skip unavailable scanners and continue with the rest.

---

## 📄 Report Generation

After each scan, ZencefilScan generates:

1. **Vulnerability Report** (`rs.vul.<target>.<date>`) — Detailed findings with descriptions and remediation
2. **Debug Log** (`rs.dbg.<target>.<date>`) — Complete raw output from all tools
3. **Dashboard JSON** (`dashboard/public/zencefil_report.json`) — Machine-readable results for the 3D dashboard (when `--dashboard` flag is used)

---

## ⚠️ Disclaimer

ZencefilScan is intended for **authorized security testing only**. Always obtain proper authorization before scanning any target. Unauthorized scanning of systems you do not own or have permission to test is **illegal** and **unethical**.

The developers assume no liability for misuse of this tool.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

---

## 📜 License

This project is licensed under the **GNU General Public License v3.0** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <b>Created by <a href="https://github.com/zencefilefendi">Zencefil Efendi</a></b><br/>
  <i>One scan to find them all.</i>
</p>
