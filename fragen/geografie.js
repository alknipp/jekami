/* ------------------------------------------------------------
   Jekami Quiz - Themengebiet: Geografie

   Aufbau einer normalen Frage:
     { frage: "...", antworten: ["variante","variante"], loesung: "..." }
     optional: zahlenbereich: [min, max]

   Schaetzfrage:
     { frage: "Schaetzfrage: ...", schaetzfrage: true, loesung: "rund 105 Meter" }

   Ziel: mindestens 20 Fragen je Altersstufe, davon 2 bis 3 Schaetzfragen.
   Reihenfolge egal - die App mischt bei jeder Runde.
   Regeln und Alterskalibrierung stehen in CLAUDE.md.
   ------------------------------------------------------------ */

JEKAMI_FRAGEN.geografie = {
  "name": "Geografie",
  "symbol": "🌍",
  "stufen": {
    "grundschule": [],
    "unterstufe": [],
    "mittelstufe": [],
    "erwachsene": []
  }
};
