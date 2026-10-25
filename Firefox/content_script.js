// chess.com "Play vs Computer" only. Reads the position, asks Stockfish,
// and draws the top-3 move arrows over the board.
(() => {
  const COLORS = ["#15781B", "#4a90d9", "#e08a1e", "#9b59b6", "#d9534f"];
  let count = 3;          // number of lines to show (1-5)
  let pos = null;         // saved panel position {left, top}
  const NS = "http://www.w3.org/2000/svg";
  const DEPTH = 16;

  const boardEl = () => document.querySelector("wc-chess-board, chess-board");

  // ---------- Position reading ----------

  // 1) Preferred: rebuild from the move list (exact turn, castling, en passant).
  function fenFromMoveList() {
    const nodes = [...document.querySelectorAll(".node-highlight-content")];
    if (!nodes.length) return null;
    const game = new Chess();
    for (const n of nodes) {
      let san = "";
      n.childNodes.forEach((c) => {
        if (c.nodeType === 3) san += c.textContent;
        else if (c.dataset && c.dataset.figurine) san += c.dataset.figurine;
        else san += c.textContent || "";
      });
      san = san.replace(/\s+/g, "");
      if (!san) continue;
      if (!game.move(san, { sloppy: true })) return null;
    }
    return game.fen();
  }

  // 2) Fallback: rebuild from the pieces on the board.
  function fenFromPieces() {
    const b = boardEl();
    if (!b) return null;
    const grid = Array.from({ length: 8 }, () => Array(8).fill(""));
    let count = 0;
    b.querySelectorAll(".piece").forEach((p) => {
      const sq = /square-(\d)(\d)/.exec(p.className);
      const ty = /\b([wb])([pnbrqk])\b/.exec(p.className);
      if (!sq || !ty) return;
      const file = +sq[1] - 1, rank = +sq[2] - 1;
      const ch = ty[2];
      grid[7 - rank][file] = ty[1] === "w" ? ch.toUpperCase() : ch;
      count++;
    });
    if (count < 2) return null;
    const rows = grid.map((r) => {
      let s = "", e = 0;
      r.forEach((c) => { if (c) { if (e) s += e; e = 0; s += c; } else e++; });
      return s + (e || "");
    });
    const at = (r, f) => grid[7 - r][f];
    let castle = "";
    if (at(0, 4) === "K" && at(0, 7) === "R") castle += "K";
    if (at(0, 4) === "K" && at(0, 0) === "R") castle += "Q";
    if (at(7, 4) === "k" && at(7, 7) === "r") castle += "k";
    if (at(7, 4) === "k" && at(7, 0) === "r") castle += "q";
    const plies = document.querySelectorAll(".node-highlight-content").length;
    const turn = plies % 2 === 0 ? "w" : "b";
    return `${rows.join("/")} ${turn} ${castle || "-"} - 0 1`;
  }

  function getFen() {
    try {
      const f = fenFromMoveList();
      if (f) return f;
    } catch (e) {}
    return fenFromPieces();
  }

  // ---------- Drawing ----------

  function overlay() {
    const b = boardEl();
    if (!b) return null;
    let svg = b.querySelector("#mca-overlay");
    if (!svg) {
      svg = document.createElementNS(NS, "svg");
      svg.id = "mca-overlay";
      svg.setAttribute("viewBox", "0 0 8 8");
      Object.assign(svg.style, {
        position: "absolute", top: "0", left: "0", width: "100%", height: "100%",
        pointerEvents: "none", zIndex: "100"
      });
      if (getComputedStyle(b).position === "static") b.style.position = "relative";
      b.appendChild(svg);
    }
    return svg;
  }

  // ---------- Floating draggable panel ----------

  let panelEl = null, bodyEl = null, settingsEl = null;

  function savePrefs() {
    try { chrome.storage.local.set({ mcaCount: count, mcaPos: pos }); } catch (e) {}
  }

  function refreshButtons() {
    settingsEl.querySelectorAll("button").forEach((btn) => {
      const on = +btn.dataset.n === count;
      btn.style.background = on ? "#15781B" : "#444";
    });
  }

  function setCount(n) {
    count = n;
    refreshButtons();
    savePrefs();
    for (const k in lines) if (+k > count) delete lines[k];
    overlay()?.querySelectorAll("[data-rank]").forEach((g) => {
      if (+g.dataset.rank > count) g.remove();
    });
    lastFen = null; // re-analyse with the new number of lines
  }

  function applyPos() {
    const w = panelEl.offsetWidth, h = panelEl.offsetHeight;
    const left = Math.min(Math.max(0, pos.left), Math.max(0, innerWidth - w));
    const top = Math.min(Math.max(0, pos.top), Math.max(0, innerHeight - h));
    panelEl.style.left = left + "px";
    panelEl.style.top = top + "px";
  }

  function panel() {
    if (panelEl && document.body.contains(panelEl)) return panelEl;

    panelEl = document.createElement("div");
    panelEl.id = "mca-panel";
    Object.assign(panelEl.style, {
      position: "fixed", zIndex: "2147483647", minWidth: "150px",
      background: "rgba(20,20,20,.88)", color: "#fff",
      font: "bold 12px/1.5 sans-serif", borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,.5)", direction: "ltr",
      userSelect: "none", whiteSpace: "nowrap"
    });

    const head = document.createElement("div");
    Object.assign(head.style, {
      display: "flex", justifyContent: "space-between", alignItems: "center",
      gap: "10px", padding: "4px 8px", cursor: "move",
      borderBottom: "1px solid rgba(255,255,255,.15)"
    });
    const title = document.createElement("span");
    title.textContent = "\u265F Assistant";
    title.style.opacity = ".8";
    const gear = document.createElement("button");
    gear.textContent = "\u2699";
    gear.title = "Settings";
    Object.assign(gear.style, {
      background: "none", border: "none", color: "#fff", cursor: "pointer",
      fontSize: "16px", padding: "0 2px"
    });
    head.append(title, gear);

    settingsEl = document.createElement("div");
    Object.assign(settingsEl.style, {
      display: "none", padding: "5px 8px", borderBottom: "1px solid rgba(255,255,255,.15)"
    });
    const lbl = document.createElement("span");
    lbl.textContent = "Lines: ";
    lbl.style.opacity = ".75";
    settingsEl.appendChild(lbl);
    for (let n = 1; n <= 5; n++) {
      const btn = document.createElement("button");
      btn.textContent = n;
      btn.dataset.n = n;
      Object.assign(btn.style, {
        color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer",
        margin: "0 2px", padding: "1px 7px", font: "bold 12px sans-serif"
      });
      btn.addEventListener("click", () => setCount(n));
      settingsEl.appendChild(btn);
    }

    bodyEl = document.createElement("div");
    bodyEl.style.padding = "4px 8px 5px";
    bodyEl.textContent = "Waiting for a position\u2026";

    panelEl.append(head, settingsEl, bodyEl);
    document.body.appendChild(panelEl);
    refreshButtons();

    gear.addEventListener("click", (e) => {
      e.stopPropagation();
      settingsEl.style.display = settingsEl.style.display === "none" ? "block" : "none";
      applyPos();
    });

    // Dragging (header is the handle)
    head.addEventListener("pointerdown", (e) => {
      if (e.target === gear) return;
      const r = panelEl.getBoundingClientRect();
      const dx = e.clientX - r.left, dy = e.clientY - r.top;
      head.setPointerCapture(e.pointerId);
      const move = (ev) => {
        pos = { left: ev.clientX - dx, top: ev.clientY - dy };
        applyPos();
      };
      const up = () => {
        head.removeEventListener("pointermove", move);
        head.removeEventListener("pointerup", up);
        savePrefs();
      };
      head.addEventListener("pointermove", move);
      head.addEventListener("pointerup", up);
    });

    if (!pos) {
      const b = boardEl()?.getBoundingClientRect();
      pos = b ? { left: b.left + 8, top: b.top + 8 } : { left: 20, top: 80 };
    }
    applyPos();
    return panelEl;
  }

  const isFlipped = () => !!boardEl()?.classList.contains("flipped");

  function xy(sq, flipped) {
    const f = sq.charCodeAt(0) - 97, r = +sq[1] - 1;
    return flipped ? [7 - f + 0.5, r + 0.5] : [f + 0.5, 7 - r + 0.5];
  }

  function drawArrow(svg, rank, move, color, flipped) {
    svg.querySelector(`[data-rank="${rank}"]`)?.remove();
    const [x1, y1] = xy(move.slice(0, 2), flipped);
    const [x2, y2] = xy(move.slice(2, 4), flipped);
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
    if (!len) return;
    const ux = dx / len, uy = dy / len, head = 0.32;
    const bx = x2 - ux * head, by = y2 - uy * head;

    const g = document.createElementNS(NS, "g");
    g.setAttribute("data-rank", rank);
    g.setAttribute("opacity", rank === 1 ? "0.85" : "0.6");

    const line = document.createElementNS(NS, "line");
    line.setAttribute("x1", x1 + ux * 0.2); line.setAttribute("y1", y1 + uy * 0.2);
    line.setAttribute("x2", bx); line.setAttribute("y2", by);
    line.setAttribute("stroke", color); line.setAttribute("stroke-width", 0.14);
    line.setAttribute("stroke-linecap", "round");

    const tri = document.createElementNS(NS, "polygon");
    const px = -uy, py = ux;
    tri.setAttribute("points",
      `${x2},${y2} ${bx + px * 0.2},${by + py * 0.2} ${bx - px * 0.2},${by - py * 0.2}`);
    tri.setAttribute("fill", color);

    g.append(line, tri);
    svg.appendChild(g);
  }

  // Win chance (0-100) for the side to move, from the engine score.
  function winPct(msg) {
    if (msg.scoreType === "mate") return msg.score > 0 ? 100 : 0;
    return 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * msg.score)) - 1);
  }

  function scoreText(msg) {
    if (msg.scoreType === "mate") return (msg.score > 0 ? "M" : "-M") + Math.abs(msg.score);
    return (msg.score > 0 ? "+" : "") + (msg.score / 100).toFixed(2);
  }

  const lines = {};
  function renderPanel(fen, depth) {
    panel();
    const side = fen.split(" ")[1] === "w" ? "White" : "Black";
    let html = `<div style="opacity:.75;font-weight:normal">${side} to move \u00b7 d${depth}</div>`;
    for (let r = 1; r <= count; r++) {
      const l = lines[r];
      if (!l) continue;
      html += `<div><span style="color:${COLORS[r - 1]}">\u25cf</span> ` +
        `${l.move.slice(0, 2)}\u2192${l.move.slice(2, 4)} ` +
        `<b>${winPct(l).toFixed(0)}%</b> <span style="opacity:.7">(${scoreText(l)})</span></div>`;
    }
    bodyEl.innerHTML = html;
    applyPos();
  }

  // ---------- Loop ----------

  let lastFen = null;

  function isPlayComputer() {
    return window.location.pathname.startsWith("/play/computer");
  }

  function tick() {
    if (!isPlayComputer()) {
      if (panelEl) panelEl.style.display = "none";
      overlay()?.replaceChildren();
      return;
    }
    if (!boardEl()) { if (panelEl) panelEl.style.display = "none"; return; }
    panel().style.display = "block";
    const fen = getFen();
    if (!fen || fen === lastFen) return;
    lastFen = fen;
    overlay()?.replaceChildren();
    for (const k in lines) delete lines[k];
    chrome.runtime.sendMessage({ type: "ANALYZE", fen, depth: DEPTH, multipv: count });
  }

  chrome.runtime.onMessage.addListener((msg) => {
    if (!isPlayComputer()) return;
    if (msg.type !== "ENGINE_LINE" || msg.fen !== lastFen || msg.rank > count) return;
    const svg = overlay();
    if (!svg) return;
    drawArrow(svg, msg.rank, msg.move, COLORS[msg.rank - 1] || "#999", isFlipped());
    lines[msg.rank] = msg;
    renderPanel(msg.fen, msg.depth);
  });

  function start() { setInterval(tick, 700); }
  try {
    chrome.storage.local.get({ mcaCount: 3, mcaPos: null }, (v) => {
      count = Math.min(5, Math.max(1, v.mcaCount || 3));
      pos = v.mcaPos;
      start();
    });
  } catch (e) { start(); }
})();
