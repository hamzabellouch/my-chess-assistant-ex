# Security Policy

## Supported Versions

The following versions of **My Chess Assistant** are currently supported with security and stability updates:

| Version | Supported |
| -------- | --------- |
| 1.0.x (latest release) | ✅ |
| < 1.0.0 | ❌ |

---

## Reporting a Vulnerability

If you discover a security vulnerability, privacy concern, or unintended behavior in **My Chess Assistant**, please report it responsibly.

### Before Reporting

Please ensure that:

- The issue is reproducible on the latest supported version.
- The issue is not caused by third-party modifications, altered builds, or conflicting browser extensions.

### How to Report

Please report security issues directly via email:

- **Email Contact:** `hamzabellouchcontact@gmail.com`

When submitting a report, please include:

- Browser name and version (e.g., Chrome 130, Firefox 132, Edge 130)
- Operating system and version (e.g., Windows 11, macOS, Linux)
- **My Chess Assistant** version (e.g., v1.0.0)
- Detailed steps to reproduce the issue
- Relevant console logs or error messages (if available)
- Potential security or privacy impact

### Response Policy

Security disclosures are handled with high priority:

- Confirmed vulnerabilities will be investigated and patched promptly.
- Patches will be published in the subsequent release.
- Responsible reporters will be credited upon request.

---

## Security & Architecture Principles

**My Chess Assistant** is engineered with strict local security principles:

- **Local Client-Side Execution:** The Stockfish chess engine runs locally via compiled WebAssembly (WASM). No server-side analysis or cloud processing is involved.
- **Strict Host Scope:** The extension is strictly limited to `https://www.chess.com/play/computer*` in `manifest.json` and in the content script runtime checks. This prevents the extension from running on other sites or on live rated matches.
- **Strict Content Security Policy (CSP):** The extension uses `"script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"` to restrict execution exclusively to bundled local scripts and wasm binaries. No external CDNs or remote code execution (`eval`) are permitted.
- **Minimal Permissions:** The extension requests only the minimum necessary permissions:
  - `storage`: for local UI preferences (panel position and line count).
  - `offscreen` (Chromium only): to run WebAssembly in a Web Worker in accordance with Manifest V3 specifications.
- **Zero Telemetry:** The extension contains no analytics trackers, advertising code, or outbound telemetry pings.
