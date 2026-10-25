const engine = new Worker(chrome.runtime.getURL("lib/stockfish-nnue-16-single.js"));

let searching = false;
let pending = null;   // latest request waiting for the current search to stop
let current = null;   // request being searched

let curMultiPV = 3;

function startSearch(req) {
  current = req;
  const n = Math.min(5, Math.max(1, req.multipv || 3));
  if (n !== curMultiPV) {
    curMultiPV = n;
    engine.postMessage("setoption name MultiPV value " + n);
  }
  searching = true;
  engine.postMessage("position fen " + req.fen);
  engine.postMessage("go depth " + (req.depth || 16));
}

engine.onmessage = (e) => {
  const line = typeof e === "string" ? e : e.data;
  if (typeof line !== "string") return;

  if (line.startsWith("bestmove")) {
    searching = false;
    if (pending) { const r = pending; pending = null; startSearch(r); }
    return;
  }
  if (!current) return;

  const m = /depth (\d+).*multipv (\d+).*score (cp|mate) (-?\d+).* pv (\S+)/.exec(line);
  if (m) {
    chrome.runtime.sendMessage({
      type: "ENGINE_LINE",
      tabId: current.tabId,
      fen: current.fen,
      depth: +m[1],
      rank: +m[2],
      scoreType: m[3],
      score: +m[4],
      move: m[5]
    });
  }
};

engine.postMessage("uci");
engine.postMessage("setoption name MultiPV value 3");
engine.postMessage("setoption name Hash value 32");
engine.postMessage("isready");

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.target !== "offscreen" || msg.type !== "ANALYZE") return;
  if (searching) {
    pending = msg;
    engine.postMessage("stop");
  } else {
    startSearch(msg);
  }
});
