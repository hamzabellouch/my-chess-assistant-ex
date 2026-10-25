// Bridge: content script <-> offscreen document (which runs Stockfish).
let creating = null;

async function ensureOffscreen() {
  if (await chrome.offscreen.hasDocument()) return;
  if (!creating) {
    creating = chrome.offscreen
      .createDocument({
        url: "offscreen.html",
        reasons: ["WORKERS"],
        justification: "Run the Stockfish WebAssembly engine in a Web Worker"
      })
      .then(() => new Promise((r) => setTimeout(r, 400)))
      .finally(() => { creating = null; });
  }
  await creating;
}

chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === "ANALYZE" && sender.tab) {
    ensureOffscreen().then(() =>
      chrome.runtime.sendMessage({ ...msg, target: "offscreen", tabId: sender.tab.id })
    );
  } else if (msg.type === "ENGINE_LINE" && msg.tabId != null) {
    chrome.tabs.sendMessage(msg.tabId, msg).catch(() => {});
  }
});
