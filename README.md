# My Chess Assistant

A lightweight, powerful, and privacy-focused browser extension that provides real-time Stockfish engine evaluation and best-move visual arrows directly on Chess.com (Play vs Computer)—powered by WebAssembly (NNUE 16), dynamic SVG overlays, and a floating draggable assistant panel.

Compatible with all major modern browsers: **Google Chrome, Brave, Microsoft Edge, Opera, Vivaldi (Chromium-based)** and **Mozilla Firefox**.

---

### <a name="Features"></a> ⭐ Features

- **Embedded Stockfish 16 Engine (NNUE):** Runs the Stockfish chess engine directly inside your browser using WebAssembly (WASM) with single-threaded NNUE support for fast, local position analysis without external servers.
- **Dynamic Visual Move Arrows:** Automatically computes and displays colorful SVG arrows directly over the chessboard representing the top recommended moves (ranked and color-coded).
- **Floating Draggable Assistant Panel:**
  - Displays side to move, engine search depth, win chance probability percentage, and evaluation scores (centipawns or mate counts).
  - Freely draggable anywhere on the screen with position memory saved in local storage.
  - Quick settings toggle to adjust the number of evaluated lines (**MultiPV** from 1 to 5).
- **Dual Position Reading Engine:**
  - **Move List Reconstruction (Primary):** Rebuilds positions using `chess.js` from the move list to guarantee 100% accuracy for castling rights, en passant, and turn order.
  - **Piece Placement Fallback:** Automatically scans the board piece coordinates if the move list is inaccessible.
- **Board Orientation Aware:** Automatically detects if the board is flipped (playing as Black) and mirrors arrow coordinates seamlessly.
- **Strict Scope & Fair Play:** Scoped strictly to `https://www.chess.com/play/computer*` to prevent any unintended activation on live multiplayer or rated matches.
- **100% Offline & Private:** Operates entirely client-side in browser memory with zero tracking, telemetry, or external network requests.

---

### <a name="RepositoryStructure"></a> 📁 Repository Structure

```text
├── Chromium/          # Extension directory for Chrome, Brave, Edge, Opera, Vivaldi
│   ├── icons/         # Extension icon (128px)
│   ├── lib/           # Chess.js library, Stockfish NNUE (JS & WASM) & license
│   ├── background.js  # Service worker managing the Offscreen document lifecycle
│   ├── content_script.js # Board reader, SVG arrows overlay, and draggable panel
│   ├── manifest.json  # Chromium Manifest V3 configuration
│   ├── offscreen.html # Offscreen document container for WebAssembly execution
│   └── offscreen.js   # Offscreen worker bridge running Stockfish
│
├── Firefox/           # Extension directory for Mozilla Firefox
│   ├── icons/         # Extension icon (128px)
│   ├── lib/           # Chess.js library, Stockfish NNUE (JS & WASM) & license
│   ├── background.js  # Background script running Stockfish Web Worker directly
│   ├── content_script.js # Board reader, SVG arrows overlay, and draggable panel
│   └── manifest.json  # Firefox Manifest V3 configuration (with Gecko ID)
│
├── PRIVACY_POLICY.md  # Detailed privacy policy (English & Arabic)
├── README.md          # Project documentation and setup guide
└── SECURITY.md        # Security policy and vulnerability disclosure guide
```

---

### <a name="InstallationUsage"></a> ⚙️ Installation & Usage

#### <a name="ForChromiumBasedBrowsers"></a> 🌐 For Chromium-Based Browsers (Chrome, Brave, Edge, Opera)

1. Open your Chromium-based browser and navigate to:
   - **Google Chrome / Brave / Opera:** `chrome://extensions/`
   - **Microsoft Edge:** `edge://extensions/`
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked**.
4. Select the `Chromium` directory:
   ```text
   Chromium/
   ├── icons/
   ├── lib/
   ├── background.js
   ├── content_script.js
   ├── manifest.json
   ├── offscreen.html
   └── offscreen.js
   ```
5. The extension is now installed and active.

#### <a name="ForMozillaFirefox"></a> 🦊 For Mozilla Firefox

1. Open **Mozilla Firefox** and navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select the `manifest.json` file inside the `Firefox` folder:
   ```text
   Firefox/
   └── manifest.json
   ```
4. The extension is now loaded and ready for use.

---

### <a name="HowToUse"></a> ♟️ How to Use

1. Navigate to: `https://www.chess.com/play/computer`
2. Choose any bot or computer personality and start a game.
3. The **My Chess Assistant** floating panel will automatically appear on the page.
4. As you make moves, Stockfish analyzes the position instantly in the background:
   - Colored arrows will point out the top candidate moves on the board.
   - The panel displays the win probability and score evaluation for each line.
5. Click the gear icon (`⚙`) on the panel to change the number of analyzed lines (1 to 5).
6. Drag the panel header to position it anywhere you prefer.

---

### <a name="PrivacySafety"></a> 🛡️ Privacy & Safety

- **Local Execution:** All chess computations and WebAssembly instances run locally on your machine.
- **Fair Play Compliant:** The extension is restricted solely to the `/play/computer*` URL to prevent interference with competitive, rated human games.
- **Zero Data Collection:** No user data, game states, or browsing activities are tracked, stored on remote servers, or transmitted.

---

### <a name="Copyright2026"></a> Copyright © 2026

For inquiries, support, or collaboration, please contact:  
hamzabellouchcontact@gmail.com

Stay connected and follow on:  
[WhatsApp](https://whatsapp.com/channel/0029Vb7MArw0LKZMpjjqOk2P) | [Facebook](https://facebook.com/hamzabellouch1) | [Instagram](https://instagram.com/hamzabellouch0) | [Twitter](https://twitter.com/hamzabellouch0) | [Telegram](https://t.me/hammzabellouch) | [LinkedIn](https://www.linkedin.com/in/hamzabellouch)
