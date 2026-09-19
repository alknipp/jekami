#!/usr/bin/env node
/* Prueft alle Fragendateien.  Aufruf aus dem Projektordner:  node werkzeug/pruefen.js  */
var fs = require("fs"), pfad = require("path"), vm = require("vm");
var wurzel = pfad.join(__dirname, "..");
var umg = vm.createContext({});

function lade(datei) {
  vm.runInContext(fs.readFileSync(pfad.join(wurzel, datei), "utf8"), umg, { filename: datei });
}

var fehler = [], warnung = [];
try { lade("fragen/liste.js"); }
catch (e) { console.error("fragen/liste.js nicht lesbar: " + e.message); process.exit(1); }

var STUFEN = umg.JEKAMI_STUFEN || [], THEMEN = umg.JEKAMI_THEMEN || [];
if (!STUFEN.length) fehler.push("JEKAMI_STUFEN ist leer");
if (!THEMEN.length) fehler.push("JEKAMI_THEMEN ist leer");

THEMEN.forEach(function (name) {
  try { lade("fragen/" + name + ".js"); }
  catch (e) { fehler.push("fragen/" + name + ".js fehlt oder ist fehlerhaft: " + e.message); }
});
var FRAGEN = umg.JEKAMI_FRAGEN || {};

var gesamt = 0, schaetz = 0, tabelle = [];
THEMEN.forEach(function (id) {
  var t = FRAGEN[id];
  if (!t) { fehler.push(id + ": Datei setzt JEKAMI_FRAGEN." + id + " nicht"); return; }
  if (!t.name) fehler.push(id + ": name fehlt");
  var zeile = { thema: id, stufen: [] };
  STUFEN.forEach(function (st) {
    var qs = (t.stufen || {})[st.id];
    if (!qs) { fehler.push(id + "/" + st.id + ": Stufe fehlt"); zeile.stufen.push("–"); return; }
    if (qs.length && qs.length < 20) warnung.push(id + "/" + st.id + ": nur " + qs.length + " Fragen");
    var s = 0, gesehen = {};
    qs.forEach(function (q) {
      gesamt++;
      if (q.schaetzfrage) { s++; schaetz++; }
      if (!q.frage) fehler.push(id + "/" + st.id + ": Frage ohne Text");
      if (!q.loesung) fehler.push(id + "/" + st.id + ": ohne loesung — " + q.frage);
      if (!q.schaetzfrage && !(q.antworten && q.antworten.length))
        fehler.push(id + "/" + st.id + ": ohne antworten — " + q.frage);
      if (q.antworten && q.antworten.some(function (a) { return a !== a.toLowerCase(); }))
        fehler.push(id + "/" + st.id + ": antworten nicht kleingeschrieben — " + q.frage);
      if (q.zahlenbereich && (q.zahlenbereich.length !== 2 || q.zahlenbereich[0] > q.zahlenbereich[1]))
        fehler.push(id + "/" + st.id + ": zahlenbereich unplausibel — " + q.frage);
      var k = q.frage;
      if (gesehen[k]) fehler.push(id + "/" + st.id + ": Dublette — " + q.frage);
      gesehen[k] = 1;
    });
    if (qs.length >= 20 && s < 2) warnung.push(id + "/" + st.id + ": nur " + s + " Schätzfrage(n)");
    zeile.stufen.push(qs.length ? String(qs.length) : "leer");
  });
  tabelle.push(zeile);
});

console.log("Bestand:");
console.log("  " + "Thema".padEnd(14) + STUFEN.map(function (s) { return s.id.padStart(13); }).join(""));
tabelle.forEach(function (z) {
  console.log("  " + z.thema.padEnd(14) + z.stufen.map(function (n) { return n.padStart(13); }).join(""));
});
console.log("\nStufen: " + STUFEN.length + " · Themen: " + THEMEN.length +
            " · Fragen: " + gesamt + " · davon Schätzfragen: " + schaetz);
if (warnung.length) { console.log("\nHinweise (" + warnung.length + "):");
  warnung.forEach(function (w) { console.log("  · " + w); }); }
if (fehler.length) { console.log("\nFehler (" + fehler.length + "):");
  fehler.forEach(function (f) { console.log("  ✗ " + f); }); process.exit(1); }
console.log("\nKeine Fehler.");
