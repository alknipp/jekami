/* ============================================================
   Jekami Quiz - Register

   Diese Datei bestimmt, was die App anbietet:
     JEKAMI_STUFEN  - die Altersstufen
     JEKAMI_THEMEN  - welche Themendateien geladen werden,
                      in genau dieser Reihenfolge

   NEUES THEMENGEBIET HINZUFUEGEN:
     1. fragen/<name>.js anlegen (Vorlage: eine vorhandene Datei)
     2. "<name>" unten in JEKAMI_THEMEN eintragen
     3. in sw.js die Zeile VERSION hochzaehlen
   Mehr steht nicht an - index.html muss nicht angefasst werden.
   ============================================================ */

var JEKAMI_STUFEN = [
  {
    "id": "grundschule",
    "name": "Grundschule",
    "hinweis": "2. Klasse"
  },
  {
    "id": "unterstufe",
    "name": "Unterstufe",
    "hinweis": "5. und 6. Klasse"
  },
  {
    "id": "mittelstufe",
    "name": "Mittelstufe",
    "hinweis": "8. bis 10. Klasse"
  },
  {
    "id": "erwachsene",
    "name": "Erwachsene",
    "hinweis": "für die Großen"
  }
];

var JEKAMI_THEMEN = [
  "allgemein",
  "geschichte",
  "politik",
  "geografie",
  "bio",
  "natur",
  "sport",
  "musik",
  "unterhaltung"
];

var JEKAMI_FRAGEN = {};
