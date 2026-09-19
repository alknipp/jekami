# Jekami Quiz

Mitmach-Quiz mit Vorlesefunktion. Vier Altersstufen, neun Themengebiete,
300 Fragen (Bestand im Aufbau), 3-Minuten-Timer pro Frage. Punkte zählen die Teams selbst.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die App |
| `fragen/liste.js` | Register: Altersstufen und welche Themendateien geladen werden |
| `fragen/<thema>.js` | **Die Fragen** — eine Datei je Themengebiet |
| `werkzeug/pruefen.js` | Prüft alle Fragendateien: `node werkzeug/pruefen.js` |
| `CLAUDE.md` | Spezifikation für die Arbeit mit Claude Code |
| `manifest.webmanifest` | Name und Icons für die Installation |
| `sw.js` | Offline-Speicher (nur bei Betrieb über einen Server) |
| `icon-*.png` | App-Symbole |

Alle Dateien gehören in denselben Ordner.

## Variante A — einfach doppelklicken

`index.html` im Browser öffnen. Fertig. Kein Server, keine Installation,
funktioniert offline. Nur das Installieren als App entfällt.

Getestet in Chrome, Edge, Firefox und Safari.

## Variante B — als App installieren (PWA)

Dafür braucht es einen Webserver. Service Worker laufen aus
Sicherheitsgründen nicht über `file://`.

**Schnell zum Ausprobieren** (Ordner im Terminal öffnen):

    python3 -m http.server 8000

Dann `http://localhost:8000` aufrufen. Auf `localhost` erlauben Browser
den Service Worker auch ohne HTTPS.

**Auf GitHub Pages (empfohlen, kostenlos):**

1. Auf github.com ein Repository anlegen, z. B. `jekami`
2. Alle Dateien dieses Ordners hochladen (Add file → Upload files)
3. Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, Ordner `/ (root)`
4. Nach ein bis zwei Minuten liegt die App unter
   `https://<benutzername>.github.io/jekami/`

HTTPS ist automatisch dabei, damit läuft die PWA vollständig: installierbar
und offline nutzbar. Fragen ändern geht direkt im Browser — `fragen.js`
anklicken, Stiftsymbol, bearbeiten, „Commit changes“.

Nicht geeignet sind Baukastensysteme wie Jimdo, Wix oder Squarespace:
dort lassen sich Manifest und Service Worker nicht im Wurzelverzeichnis
ablegen, und ohne die gibt es keine PWA.

**Dauerhaft auf der Synology:**

1. Paket *Web Station* installieren
2. Ordner nach `/web/jekami/` kopieren
3. Aufrufen über `https://<nas>/jekami/`
4. Im Browser über das Menü „Zum Startbildschirm hinzufügen“ bzw.
   „App installieren“

HTTPS ist Pflicht — ein Let's-Encrypt-Zertifikat über die DSM-Systemsteuerung
reicht. Danach läuft die App auch ohne Netz weiter.

Auf dem iPhone geht die Installation nur über Safari: Teilen-Symbol →
„Zum Home-Bildschirm“.

## Fragen ändern

Jedes Themengebiet hat seine eigene Datei unter `fragen/`. Zum Bearbeiten
die passende öffnen — für Geschichte also `fragen/geschichte.js`. Der Kopf
jeder Datei erklärt den Aufbau:

    { frage: "Wie viele Planeten hat unser Sonnensystem?",
      antworten: ["8","acht"],
      zahlenbereich: [8,8],
      loesung: "8" }

    { frage: "Schätzfrage: Wie lang ist ein Fußballfeld?",
      schaetzfrage: true,
      loesung: "rund 105 Meter" }

- `antworten` — alle Formulierungen, die als richtig zählen, klein geschrieben
- `zahlenbereich` — optional; jede genannte Zahl darin gilt als richtig
- `schaetzfrage: true` — kein Eintippen, nur Auflösen
- Reihenfolge egal, die App mischt bei jeder Runde

**Neues Themengebiet:** eine Datei `fragen/<name>.js` nach dem Muster einer
vorhandenen anlegen und `"<name>"` in `fragen/liste.js` bei `JEKAMI_THEMEN`
eintragen. Das war's — `index.html` und `sw.js` ermitteln die Dateiliste
selbst.

Vor dem Veröffentlichen prüfen lassen:

    node werkzeug/pruefen.js

Das zeigt den Bestand je Thema und Stufe und meldet fehlende Lösungen,
Dubletten und Formfehler.

Bei Betrieb über einen Server nach jeder Änderung in `sw.js` die Zeile
`var VERSION = "jekami-v5"` hochzählen, sonst zeigen bereits installierte
Geräte weiter die alten Fragen.

## Spielablauf

Es braucht keinen Spielleiter. Die App liest vor und entscheidet über richtig
und falsch, alle anderen spielen mit.

1. Die App liest die Frage vor und startet den Timer.
2. Die Spieler machen unter sich aus, wer sich zuerst gemeldet hat.
3. Wer dran ist, tippt seine Antwort ein — oder spricht sie ein, wo das geht.
4. **Richtig** → grüner Haken, derjenige bekommt einen Chip.
5. **Falsch** → die Frage bleibt offen, die Lösung bleibt verborgen,
   der Nächste darf. So oft, wie ihr wollt.
6. Gibt die Runde auf, führt **Lösung** mit einer Rückfrage zur Auflösung —
   dafür gibt es dann keinen Chip.
7. Bei Schätzfragen schätzen alle, dann wird aufgelöst. Wer am nächsten
   dran war, bekommt den Chip.

Chips zählt ihr selbst. Wer lieber klassisch mit Spielleiter spielt, nutzt
dieselbe Oberfläche — dann bedient eben einer das Gerät und löst auf.

## Knöpfe

Unten in Daumenreichweite genau ein großer Knopf: die Aktion, die dran ist —
**Antwort prüfen**, bei Schätzfragen **Lösung anzeigen**, danach
**Nächste Frage**. Darüber das Eingabefeld, ganz oben vier kleine:
Vorlesen, Sprechen, Lösung, Ende.

## Vorlesen und Einsprechen auf Geräten

**Vorlesen** funktioniert überall: Windows, macOS, Android, iPhone, iPad,
auch in der installierten App und ohne Internet.

**Einsprechen** ist eingeschränkter:

| Umgebung | Mikrofon |
|---|---|
| Chrome, Edge (Rechner und Android) | ja |
| Safari auf macOS und iOS, im Browser | ja, ab Safari 14.5 |
| **Installierte App auf dem iPhone** | **nein** |
| Firefox | nein |

Die Spracherkennung braucht außerdem HTTPS und in aller Regel eine
Internetverbindung — offline fällt sie auch dort aus, wo sie sonst geht.

Die App erkennt das selbst und schaltet dann auf Tippen um; auf dem iPhone
prüft sie die Plattform statt nur die Schnittstelle, weil iOS die
Spracherkennung in installierten Web-Apps zwar anbietet, aber nicht ausführt.

Praktisch heißt das: Wer auf dem iPhone per Sprache antworten will, öffnet die
Seite in Safari statt über das Symbol auf dem Home-Bildschirm. Auf einem
Android-Tablet oder Laptop geht beides.

## Fragen prüfen

Die Sport- und Zeitgeschichtsfragen enthalten Stände, die veralten können
(Weltmeister, Weltrekorde). Vor dem Einsatz kurz gegenprüfen — zum Zeitpunkt
der Erstellung: Fußball-WM 2026 Spanien, Rekordweltmeister Brasilien mit fünf
Titeln, Marathon-Weltrekord 1:59:30 (Sabastian Sawe, London 2026).
