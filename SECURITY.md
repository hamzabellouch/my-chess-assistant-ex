# Security Policy

## Supported Versions

The following versions of **My Chess Assistant** are currently supported with security and stability updates.

| Version | Supported |
| -------- | --------- |
| 1.0.x (latest release) | ✅ |
| < 1.0.0 | ❌ |

---

## Reporting a Vulnerability

If you discover a security vulnerability, privacy issue, or behavior that could negatively impact users or the extension, please report it responsibly.

### Before Reporting

Please ensure that:

- The issue is reproducible.
- You are using the latest supported version of **My Chess Assistant**.
- The issue is not caused by modified builds, unsupported browser forks, or conflicting third-party extensions.

### How to Report

You can report vulnerabilities through:

- **GitHub Issues:** [hamzabellouch/my-chess-assistant-ex/issues](https://github.com/hamzabellouch/my-chess-assistant-ex/issues) (for general non-sensitive bugs or security queries)
- **Email Contact:** `hamzabellouchcontact@gmail.com` (for sensitive vulnerabilities, security disclosures, or exploit details)

When submitting a report, please include:

- Browser name and version (e.g., Chrome 130, Firefox 132, Edge 130)
- Operating system and version (e.g., Windows 11, macOS Sequoia, Ubuntu 24.04)
- **My Chess Assistant** version (e.g., v1.0.0)
- Steps to reproduce the issue
- Target webpage URL where the issue occurred (if applicable)
- Screenshots, logs, or console error messages (if available)
- A clear description of the potential security impact

### Response Policy

Security reports are reviewed as quickly as possible.

If a report is confirmed:

- The vulnerability will be investigated and patched promptly.
- A fix will be included in the next update release.
- Credit may be given to the reporter upon request.

If a report cannot be reproduced, lacks sufficient information, or is determined not to be a security issue, it will be closed with a clear explanation.

---

## Security & Architecture Notes

**My Chess Assistant** runs locally within your browser and is designed with strict security principles:

- **Local Client-Side Execution:** All script logic runs locally using Manifest V3 service workers with offscreen documents (Chromium) and background scripts (Firefox). No remote code execution (`eval`, external script injection, or remote CDN loading) is used, fully complying with modern browser extension store security standards.
- **Strict URL Scoping & Minimal Injection:** The content script (`content_script.js`) and chess rules engine (`chess.min.js`) are scoped strictly to `https://www.chess.com/play/computer*` to prevent any unintended execution on live multiplayer rated matches or outside pages.
- **Isolated SVG Overlay & Draggable UI:** Move recommendations are rendered via SVG arrow elements directly over the board, and the floating status HUD is contained in a non-intrusive container that isolates controls from webpage style interference.
- **In-Memory WebAssembly Stockfish Engine:** The Stockfish 16 engine runs entirely within browser memory via WebAssembly (WASM). Calculation trees, evaluation values, and candidate moves are kept in RAM and discarded immediately upon game resets.
- **Strict Content Security Policy (CSP):** The extension enforces `"script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"` across all extension contexts, ensuring only bundled local scripts and the local WebAssembly binary can execute.
- **Zero Background Telemetry:** The extension contains zero tracking SDKs, analytics beacons, telemetry collectors, or background network calls.

Users are encouraged to:

- Keep **My Chess Assistant** updated to the latest release.
- Install the extension only from the official repository ([hamzabellouch/my-chess-assistant-ex](https://github.com/hamzabellouch/my-chess-assistant-ex)) or verified store listings.
- Avoid installing modified, repackaged, or unofficial third-party builds.
- Report any unexpected behavior that could affect security or privacy.

Security and user privacy are foundational priorities for this project.
