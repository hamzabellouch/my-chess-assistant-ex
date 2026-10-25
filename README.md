# My Chess Assistant

> [!WARNING]
> **Fair Play & Account Safety Warning:**  
> Using this tool or any chess engine assistance against real players violates platform Fair Play rules and may result in your account being banned. This tool is strictly intended for educational practice against bots (`chess.com/play/computer`). To protect your account, it is recommended to use it only against the computer or in an **Incognito / Private Window** without signing into your main account.

A modern, lightweight, and versatile browser extension that provides real-time Stockfish engine evaluation and best-move visual arrows directly on Chess.com (Play vs Computer)—featuring embedded WebAssembly (NNUE 16), dynamic SVG arrow overlays, configurable MultiPV depth, and a floating draggable assistant panel.

Compatible with all major browsers: **Chrome, Brave, Edge, Opera, Vivaldi (Chromium-based)** and **Mozilla Firefox**.



### <a name="Features"></a> ⭐ Features

- **Embedded Stockfish 16 Engine (NNUE):** Runs the Stockfish chess engine directly inside your browser using WebAssembly (WASM) with single-threaded NNUE support for fast, local position analysis without external servers.
- **Dynamic Visual Move Arrows:** Automatically computes and displays colorful SVG arrows directly over the chessboard representing the top recommended moves with rank-based opacity and color grading.
- **Floating Draggable Assistant Panel:** Real-time HUD showing side to move, engine depth, win probability percentage, and centipawn/mate score evaluation—freely movable across the screen with persistent coordinates.
- **Customizable Multi-Line Analysis (MultiPV):** On-the-fly lines selector allowing you to toggle between 1 to 5 candidate move lines directly from the panel settings.
- **Dual Position Reading Engine:**
  - **Move List Reconstruction (Primary):** Rebuilds positions using `chess.js` from the move list to guarantee 100% accuracy for castling rights, en passant, and turn order.
  - **Piece Placement Fallback:** Automatically scans board piece coordinates if the move list is inaccessible or during custom setup.
- **Board Orientation Awareness:** Automatically detects board flipping (White or Black perspective) and dynamically mirrors arrow coordinate calculations.
- **Strict Scope & Fair Play Compliance:** Explicitly restricted to `https://www.chess.com/play/computer*` to ensure fair play compliance and avoid running on live multiplayer games.
- **100% Local & Zero External Dependencies:** Operates completely client-side in browser memory with zero tracking, telemetry, or server communication.



### <a name="RepositoryStructure"></a> 📁 Repository Structure

```text

├── chromium/          # Extension build directory for Chrome, Brave, Edge, Opera, Vivaldi, etc.
│   ├── icons/         # Extension toolbar and store icon (128px)
│   ├── lib/           # Chess.js library, Stockfish NNUE (JS & WASM) & license
│   ├── background.js  # Service worker handling offscreen document lifecycle
│   ├── content_script.js # Board scanner, SVG overlay, and floating panel UI
│   ├── manifest.json  # Chromium Manifest V3 configuration
│   ├── offscreen.html # Offscreen document container for WebAssembly execution
│   └── offscreen.js   # Offscreen worker bridge running Stockfish
│
├── firefox/           # Extension build directory for Mozilla Firefox
│   ├── icons/         # Extension toolbar and store icon (128px)
│   ├── lib/           # Chess.js library, Stockfish NNUE (JS & WASM) & license
│   ├── background.js  # Background script running Stockfish Web Worker directly
│   ├── content_script.js # Board scanner, SVG overlay, and floating panel UI
│   └── manifest.json  # Firefox Manifest V3 configuration (with Gecko ID)
│
├── .gitignore         # Prevents tracking of OS metadata, archives, and temporary files
├── LICENSE            # Apache License 2.0
├── PRIVACY_POLICY.md  # Privacy policy and local data handling guidelines
├── README.md          # Project documentation and setup guide
└── SECURITY.md        # Security policy and vulnerability disclosure guide

```



### <a name="InstallationUsage"></a> ⚙️ Installation & Usage

### <a name="ForChromiumBasedBrowsers"></a> 🌐 For Chromium-Based Browsers (Chrome, Brave, Edge, Opera)

1. Open your Chromium-based browser and navigate to:
   - **Google Chrome / Brave / Opera:** `chrome://extensions/`
   - **Microsoft Edge:** `edge://extensions/`

2. Enable **Developer mode** (toggle located in the top-right corner).

3. Click **Load unpacked**.

4. Select the `chromium` directory:

```text
chromium/
├── icons/
│   └── icon128.png
├── lib/
│   ├── STOCKFISH-LICENSE.txt
│   ├── chess.min.js
│   ├── stockfish-nnue-16-single.js
│   └── stockfish-nnue-16-single.wasm
├── background.js
├── content_script.js
├── manifest.json
├── offscreen.html
└── offscreen.js
```

5. The extension will be installed and ready to use in your browser toolbar.

### <a name="ForMozillaFirefox"></a> 🦊 For Mozilla Firefox

1. Open **Mozilla Firefox** and navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select the `manifest.json` file inside the `firefox` folder:

```text
firefox/
└── manifest.json
```

4. The extension is now loaded as a temporary add-on.

> [!NOTE]
> For permanent installation in Firefox, the extension can be packaged and signed through [addons.mozilla.org](https://addons.mozilla.org) (e.g. submitted as a self-distributed/unlisted add-on to generate a signed `.xpi`).



### <a name="HowToUse"></a> 🖱️ How to Use

1. Navigate to: `https://www.chess.com/play/computer`
2. Choose any bot or computer personality and start a game.
3. The **My Chess Assistant** floating panel will automatically appear on the page next to the board.
4. As moves are played, Stockfish analyzes the position instantly in the background:
   - Colored visual arrows are drawn directly over the board showing the top candidate moves.
   - The floating HUD shows win chance percentages and evaluation scores for each move line.
5. Click the gear icon (`⚙`) on the floating panel to customize the number of analyzed lines (1 to 5).
6. Drag the panel header to freely position it anywhere on your screen.



### <a name="Privacy & Safety"></a> 🛡️ Privacy & Safety

- **Local Processing:** All chess computations and WebAssembly instances run locally in your browser memory. No board data, FEN strings, or game moves are ever transmitted to external servers.
- **Fair Play & Restricted Scope:** Strictly limited to `https://www.chess.com/play/computer*` to prevent any interference or activation on live multiplayer rated matches.



> [!WARNING]
> Stockfish evaluation is CPU-intensive. While NNUE single-threaded execution is optimized for web performance, running high search depths on battery-powered or resource-constrained devices may increase CPU usage.



### <a name="Copyright©2026"></a> Copyright © 2026

Thank you for engaging with us. For inquiries or collaboration, please contact:  
hamzabellouchcontact@gmail.com

Stay connected and follow us on:  
[WhatsApp](https://whatsapp.com/channel/0029Vb7MArw0LKZMpjjqOk2P) | [Facebook](https://facebook.com/hamzabellouch1) | [Instagram](https://instagram.com/hamzabellouch0) | [Twitter](https://twitter.com/hamzabellouch0) | [Telegram](https://t.me/hammzabellouch) | [LinkedIn](https://www.linkedin.com/in/hamzabellouch)
