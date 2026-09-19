# CLAUDE.md — Jekami Quiz

Arbeitsanweisung für Claude Code in diesem Repository.

## Was das hier ist

Ein Mitmach-Quiz für Familienfeiern und Klassenfeste. Läuft als PWA auf
GitHub Pages.

**Es gibt bewusst keinen Spielleiter.** Die App liest die Frage vor, startet
einen 3-Minuten-Timer und entscheidet selbst über richtig und falsch. Die
Spieler machen unter sich aus, wer sich zuerst gemeldet hat; derjenige spricht
oder tippt seine Antwort. Ist sie falsch, bleibt die Lösung verborgen und der
Nächste darf. Chips verteilen die Spieler selbst — die App führt keine
Punkteliste. Wer mit Spielleiter spielen will, nutzt dieselbe Oberfläche;
der Knopf „Lösung“ mit Rückfrage dient beiden Spielweisen.

Daraus folgt für die Fragen: **Die Lösung darf nie vor der Antwort sichtbar
sein, und `antworten` muss großzügig genug sein, dass eine sachlich richtige
Antwort nicht an der Formulierung scheitert.** Eine zu streng gefasste
Antwortliste ist in diesem Spielmodell der schlimmere Fehler, weil niemand
da ist, der korrigierend eingreift.

## Dateien

| Datei | Änderungen erlaubt? |
|---|---|
| `fragen/<thema>.js` | **Ja — hier findet die Arbeit statt** |
| `fragen/liste.js` | Ja, wenn ein Themengebiet oder eine Stufe dazukommt |
| `sw.js` | Nur die Zeile `var VERSION` (siehe unten) |
| `werkzeug/pruefen.js` | Nur auf ausdrückliche Anweisung |
| `index.html`, `manifest.webmanifest`, `icon-*.png` | Nur auf ausdrückliche Anweisung |

Ein Themengebiet ist **eine Datei**. Erweiterst du Geschichte, fasst du
`fragen/geschichte.js` an und sonst nichts.

## Nach jeder Änderung an den Fragen

Zähle in `sw.js` die Zeile `var VERSION = "jekami-vN"` um eins hoch.
Ohne das behalten bereits installierte Geräte den alten Fragenstand.
Das gilt bei jedem Commit, der eine Datei unter `fragen/` berührt — auch
bei einer einzelnen korrigierten Antwort.

## Aufbau der Fragendateien

Kein Export, kein Modul — alle Dateien werden als klassische
`<script src>` geladen, damit die App auch ohne Webserver per Doppelklick
funktioniert. Deshalb ausschließlich ES5-Syntax: `var`, keine Pfeilfunktionen,
keine Template-Strings.

**`fragen/liste.js`** ist das Register und wird zuerst geladen:

```js
var JEKAMI_STUFEN = [ { id, name, hinweis } ];
var JEKAMI_THEMEN = [ "allgemein", "geschichte", … ];  // Reihenfolge in der App
var JEKAMI_FRAGEN = {};
```

**`fragen/<thema>.js`** hängt sich dort ein:

```js
JEKAMI_FRAGEN.geschichte = {
  name: "Geschichte",
  symbol: "📜",
  stufen: {
    grundschule: [ …Fragen… ],
    unterstufe:  [ …Fragen… ],
    mittelstufe: [ …Fragen… ],
    erwachsene:  [ …Fragen… ]
  }
};
```

Jede in `JEKAMI_STUFEN` genannte Stufe muss vorkommen, notfalls als leeres
Array — die App blendet Themen ohne Fragen grau aus. `index.html` lädt die
Dateien anhand von `JEKAMI_THEMEN` selbst nach und muss dafür nicht
angefasst werden.

### Neues Themengebiet anlegen

1. `fragen/<name>.js` nach dem Muster oben erzeugen, alle Stufen anlegen
2. `"<name>"` in `JEKAMI_THEMEN` in `fragen/liste.js` eintragen
3. `VERSION` in `sw.js` hochzählen

Der Service Worker liest die Dateiliste selbst aus `fragen/liste.js` —
dort ist nichts nachzutragen.

### Normale Frage

```js
{ frage: "Wie viele Planeten hat unser Sonnensystem?",
  antworten: ["8","acht"],
  zahlenbereich: [8,8],
  loesung: "8" }
```

- `frage` — vollständiger Satz, wird genau so vorgelesen. Keine Abkürzungen,
  keine Klammerzusätze, keine Emojis: alles davon klingt in der Sprachausgabe
  falsch. „8. Klasse" wird vorgelesen als „achte Klasse", das ist in Ordnung;
  „ca." oder „z. B." nicht — ausschreiben.
- `antworten` — alle Formulierungen, die als richtig zählen, **klein
  geschrieben**. Mindestens zwei Varianten, wo sinnvoll: Zahl und Zahlwort,
  Kurz- und Langform, geläufige Schreibvarianten, Nachname allein neben dem
  vollen Namen. Der Abgleich ist unscharf (Teilstring, Umlaute normalisiert),
  trotzdem gilt: lieber eine Variante zu viel als eine zu wenig. Die
  Spracherkennung liefert oft ganze Sätze, und ohne Spielleiter gibt es
  niemanden, der eine zu streng abgelehnte Antwort noch anerkennt.
  Gegenprobe beim Schreiben: Wie würde ein Kind diese Antwort laut sagen?
  Genau diese Fassung gehört in die Liste.
- `zahlenbereich` — optional, `[min,max]`. Jede in der Antwort genannte Zahl
  in diesem Bereich gilt als richtig. Bei exakten Zahlen `[8,8]`, bei
  Toleranz `[190,215]`.
- `loesung` — was beim Auflösen angezeigt und vorgelesen wird. Ein kurzer,
  vollständiger Ausdruck („Die Bauchspeicheldrüse"), nicht nur ein Stichwort.

### Schätzfrage

```js
{ frage: "Schätzfrage: Wie lang ist ein Fußballfeld im Profibereich?",
  schaetzfrage: true,
  loesung: "rund 105 Meter" }
```

Kein `antworten`, kein `zahlenbereich`. Die Teams schätzen, der Spielleiter
drückt „Auflösen", und die Teams entscheiden selbst, wer am nächsten dran war.
Die Frage beginnt immer mit „Schätzfrage: ".

## Zielumfang

Mindestens **20 Fragen je Kombination** aus Stufe und Thema, davon
**2 bis 3 Schätzfragen**, die am Ende des Blocks stehen. Die Reihenfolge in
der Datei spielt keine Rolle — die App mischt bei jeder Runde neu.

## Altersstufen kalibrieren

| Stufe | Zielgruppe | Maßstab |
|---|---|---|
| `grundschule` | 2. Klasse, 7–8 Jahre | Zahlenraum bis 100, konkrete Dinge aus dem Alltag, keine Jahreszahlen außer runden Größenordnungen |
| `unterstufe` | 5. und 6. Klasse, 10–12 Jahre | Lehrplanstoff dieser Jahrgänge, einfache Jahreszahlen, Fachbegriffe nur wenn im Unterricht behandelt |
| `mittelstufe` | 8. bis 10. Klasse, 13–16 Jahre | Fachbegriffe erwartet, mehrschrittige Zusammenhänge, Jahreszahlen, erste Abstraktion |
| `erwachsene` | Erwachsene | Allgemeinbildung auf Zeitungsniveau, gern anspruchsvoll, aber ohne Spezialwissen |

Eine Frage darf in zwei benachbarten Stufen vorkommen, wenn die Formulierung
den Anspruch ändert. Wörtliche Dubletten innerhalb derselben Stufe sind ein
Fehler.

## Themengebiete

| ID | Name | Inhalt |
|---|---|---|
| `allgemein` | Allgemeinbildung | Sprache, Rechnen, Alltagswissen, Maße, Zeit — was in kein anderes Fach fällt |
| `geschichte` | Geschichte | Epochen, Ereignisse, Personen, Jahreszahlen |
| `politik` | Politik | Staatsaufbau, Institutionen, Wahlen, Europa, internationale Organisationen |
| `geografie` | Geografie | Länder, Hauptstädte, Flüsse, Gebirge, Meere, Klimazonen |
| `bio` | Biologie | Tiere, Pflanzen, menschlicher Körper, Ökologie |
| `natur` | Naturwissenschaften | Physik, Chemie, Astronomie, Technik |
| `sport` | Sport | Regeln, Disziplinen, Wettbewerbe, Rekorde |
| `musik` | Musik | Instrumente, Notenlehre, Epochen, Komponisten, Bands |
| `unterhaltung` | Unterhaltung | Film, Serien, Fernsehen, Bücher, Spiele, Internetkultur, Musikstars |

### Politik — neutral bleiben

Nur überprüfbare Sachfragen: wie ein Verfahren abläuft, wie ein Organ
zusammengesetzt ist, wer ein Amt innehat. Keine Bewertungsfragen, keine
Fragen, deren Antwort von einer politischen Haltung abhängt, und keine
Fragen über einzelne Parteien, die eine Position lobend oder abwertend
darstellen. Für `grundschule` reicht die Ebene Bürgermeister, Wahl,
Gemeinde, Flagge.

### Unterhaltung — die heikelste Kategorie

Drei Regeln:

1. **Werk statt Person.** Frage nach Filmen, Serien, Alben, Rollen, Büchern,
   Spielen — nicht nach dem Privatleben. Keine Fragen über Beziehungen,
   Krankheiten, Rechtsstreitigkeiten, Körper oder Aussehen realer Personen,
   auch dann nicht, wenn es in der Presse stand.
2. **Nichts über Minderjährige**, auch nicht über Kinder von Prominenten.
3. **Altersgerecht.** Für `grundschule` und `unterstufe` nur Figuren und
   Formate, die für Kinder gemacht sind. Für `mittelstufe` und `erwachsene`
   ist die Alterskennzeichnung des Werks die Grenze.

4. **Keine geschützten Inhalte wiedergeben.** Frage nach Titeln, Jahren,
   Figuren und Handlungsrahmen — zitiere keine Liedtexte, Dialoge oder
   Textpassagen, auch nicht ausschnittweise.

Diese Kategorie veraltet schneller als jede andere. Markiere jede Frage,
deren Antwort sich ändern kann, zusätzlich mit `geprueft: "JJJJ-MM"`. Das
Feld ist rein informativ, die App ignoriert es.

## Faktenprüfung

Recherchiere jede Frage, deren Antwort nicht Lehrbuchwissen ist, bevor du sie
aufnimmst. Besonders: aktuelle Amtsinhaber, Weltmeister, Rekorde, Einwohner-
und Mengenangaben. Setze bei allem Veränderlichen `geprueft: "JJJJ-MM"`.

Bevorzuge Fragen, deren Antwort in zehn Jahren noch stimmt. Wo das nicht geht,
formuliere mit Jahreszahl: „Welches Land wurde 2026 Fußball-Weltmeister?"
statt „Wer ist amtierender Weltmeister?".

Wenn du dir bei einer Antwort nicht sicher bist, nimm die Frage nicht auf.
Ein kleinerer, richtiger Bestand ist besser als ein großer mit Fehlern.

## Prüfung vor dem Commit

Führe das mitgelieferte Prüfskript aus und berichte seine Ausgabe im
Pull Request:

```bash
node werkzeug/pruefen.js
```

Es zeigt den Bestand je Thema und Stufe und bricht mit Fehlercode ab bei
fehlenden Lösungen, fehlenden Antwortlisten, großgeschriebenen Antworten,
unplausiblen Zahlenbereichen und Dubletten. Hinweise auf zu kleine Blöcke
oder zu wenige Schätzfragen erscheinen als Warnung.

Zusätzlich: `index.html` im Browser öffnen, eine Runde in der geänderten
Kombination durchspielen, prüfen dass Vorlesen und Auflösen sauber klingen.

<details><summary>Frühere Einzelprüfung, nur noch zur Referenz</summary>

```bash
node -e '
const fs=require("fs");
const D=eval("(function(){"+fs.readFileSync("fragen.js","utf8")+"return JEKAMI;})()");
let n=0,s=0,fehler=[],gesehen={};
D.stufen.forEach(st=>D.themen.forEach(th=>{
  const qs=D.fragen[st.id] && D.fragen[st.id][th.id];
  if(!qs){fehler.push("Block fehlt: "+st.id+"/"+th.id);return;}
  if(qs.length<20)fehler.push(st.id+"/"+th.id+": nur "+qs.length+" Fragen");
  qs.forEach(q=>{
    n++;
    if(q.schaetzfrage)s++;
    if(!q.frage||!q.loesung)fehler.push("Unvollstaendig: "+(q.frage||"?"));
    if(!q.schaetzfrage&&!(q.antworten&&q.antworten.length))
      fehler.push("Ohne Antwort: "+q.frage);
    if(q.antworten&&q.antworten.some(a=>a!==a.toLowerCase()))
      fehler.push("Antwort nicht klein: "+q.frage);
    const k=st.id+"|"+q.frage;
    if(gesehen[k])fehler.push("Dublette in "+st.id+": "+q.frage);
    gesehen[k]=1;
  });
}));
console.log("Fragen:",n,"| Schaetzfragen:",s,"| Fehler:",fehler.length);
fehler.forEach(f=>console.log("  -",f));
process.exit(fehler.length?1:0);'
```

</details>

## Arbeitsweise

Ein Pull Request pro Auftrag, nicht pro Frage. Beschreibe im PR, welche
Kombinationen du erweitert hast, wie viele Fragen dazugekommen sind, und
welche Antworten du recherchiert statt aus dem Gedächtnis übernommen hast.
