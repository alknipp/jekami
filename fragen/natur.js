/* ------------------------------------------------------------
   Jekami Quiz - Themengebiet: Naturwissenschaften

   Aufbau einer normalen Frage:
     { frage: "...", antworten: ["variante","variante"], loesung: "..." }
     optional: zahlenbereich: [min, max]

   Schaetzfrage:
     { frage: "Schaetzfrage: ...", schaetzfrage: true, loesung: "rund 105 Meter" }

   Ziel: mindestens 20 Fragen je Altersstufe, davon 2 bis 3 Schaetzfragen.
   Reihenfolge egal - die App mischt bei jeder Runde.
   Regeln und Alterskalibrierung stehen in CLAUDE.md.
   ------------------------------------------------------------ */

JEKAMI_FRAGEN.natur = {
  "name": "Naturwissenschaften",
  "symbol": "🔬",
  "stufen": {
    "grundschule": [
      {
        "frage": "Wie heißt der Planet, auf dem wir leben?",
        "antworten": [
          "erde"
        ],
        "loesung": "Die Erde"
      },
      {
        "frage": "Was hört man bei einem Gewitter nach dem Blitz?",
        "antworten": [
          "donner"
        ],
        "loesung": "Den Donner"
      },
      {
        "frage": "Wie viele Jahreszeiten gibt es?",
        "antworten": [
          "4",
          "vier"
        ],
        "loesung": "4",
        "zahlenbereich": [
          4,
          4
        ]
      },
      {
        "frage": "Welcher Himmelskörper leuchtet nachts und wechselt seine Form?",
        "antworten": [
          "mond"
        ],
        "loesung": "Der Mond"
      },
      {
        "frage": "Wie heißt der Stern, der uns Licht und Wärme schickt?",
        "antworten": [
          "sonne"
        ],
        "loesung": "Die Sonne"
      },
      {
        "frage": "Bei wie viel Grad wird Wasser zu Eis?",
        "antworten": [
          "0",
          "null",
          "null grad"
        ],
        "loesung": "0 Grad",
        "zahlenbereich": [
          0,
          0
        ]
      },
      {
        "frage": "Bei wie viel Grad kocht Wasser?",
        "antworten": [
          "100",
          "hundert"
        ],
        "loesung": "100 Grad",
        "zahlenbereich": [
          100,
          100
        ]
      },
      {
        "frage": "Welches Metall zieht ein Magnet an?",
        "antworten": [
          "eisen",
          "stahl"
        ],
        "loesung": "Eisen"
      },
      {
        "frage": "Was entsteht, wenn Wasser sehr heiß wird und aufsteigt?",
        "antworten": [
          "wasserdampf",
          "dampf"
        ],
        "loesung": "Wasserdampf"
      },
      {
        "frage": "Wie nennt man gefrorenes Wasser, das im Winter vom Himmel fällt?",
        "antworten": [
          "schnee"
        ],
        "loesung": "Schnee"
      },
      {
        "frage": "Wie nennt man Wasser, das aus Wolken fällt?",
        "antworten": [
          "regen"
        ],
        "loesung": "Regen"
      },
      {
        "frage": "Nenne eine Farbe des Regenbogens.",
        "antworten": [
          "rot",
          "orange",
          "gelb",
          "grün",
          "blau",
          "violett",
          "indigo"
        ],
        "loesung": "Zum Beispiel Rot"
      },
      {
        "frage": "Womit kann man ganz kleine Dinge groß sehen?",
        "antworten": [
          "lupe",
          "mikroskop"
        ],
        "loesung": "Mit einer Lupe"
      },
      {
        "frage": "Schwimmt Holz auf dem Wasser oder geht es unter?",
        "antworten": [
          "schwimmt",
          "oben",
          "es schwimmt"
        ],
        "loesung": "Es schwimmt"
      },
      {
        "frage": "Wie viele Tage hat ein Jahr?",
        "antworten": [
          "365"
        ],
        "loesung": "365",
        "zahlenbereich": [
          365,
          366
        ]
      },
      {
        "frage": "In welcher Himmelsrichtung geht die Sonne morgens auf?",
        "antworten": [
          "osten"
        ],
        "loesung": "Im Osten"
      },
      {
        "frage": "Was braucht ein Feuer zum Brennen außer Holz?",
        "antworten": [
          "luft",
          "sauerstoff"
        ],
        "loesung": "Luft"
      },
      {
        "frage": "Wie heißt das Gerät, das die Temperatur misst?",
        "antworten": [
          "thermometer"
        ],
        "loesung": "Ein Thermometer"
      },
      {
        "frage": "Schätzfrage: Wie hoch ist die Zugspitze, der höchste Berg Deutschlands?",
        "schaetzfrage": true,
        "loesung": "2962 Meter"
      },
      {
        "frage": "Schätzfrage: Wie viele Minuten hat ein ganzer Tag?",
        "schaetzfrage": true,
        "loesung": "1440 Minuten"
      },
      {
        "frage": "Wie nennt man Wasser in fester Form?",
        "antworten": [
          "eis"
        ],
        "loesung": "Eis"
      },
      {
        "frage": "Was passiert mit Schnee, wenn die Sonne darauf scheint?",
        "antworten": [
          "schmilzt",
          "es schmilzt",
          "wird zu wasser"
        ],
        "loesung": "Er schmilzt"
      },
      {
        "frage": "Was braucht eine Lampe, damit sie leuchtet?",
        "antworten": [
          "strom",
          "elektrizität"
        ],
        "loesung": "Strom"
      },
      {
        "frage": "Wie heißt das Gerät, dessen Nadel immer nach Norden zeigt?",
        "antworten": [
          "kompass"
        ],
        "loesung": "Ein Kompass"
      },
      {
        "frage": "Welches Gas ist in Luftballons, die nach oben steigen?",
        "antworten": [
          "helium"
        ],
        "loesung": "Helium"
      },
      {
        "frage": "Woraus besteht eine Wolke?",
        "antworten": [
          "wasser",
          "wassertropfen",
          "wasserdampf"
        ],
        "loesung": "Aus winzigen Wassertropfen"
      },
      {
        "frage": "Was ist schwerer: ein Kilo Federn oder ein Kilo Steine?",
        "antworten": [
          "gleich",
          "gleich schwer",
          "beides gleich"
        ],
        "loesung": "Beides ist gleich schwer"
      },
      {
        "frage": "Womit kann man aus Sonnenlicht Strom machen?",
        "antworten": [
          "solarzelle",
          "solaranlage",
          "photovoltaik",
          "solar"
        ],
        "loesung": "Mit einer Solarzelle"
      },
      {
        "frage": "Wie nennt man es, wenn die Sonne morgens am Himmel erscheint?",
        "antworten": [
          "sonnenaufgang"
        ],
        "loesung": "Sonnenaufgang"
      },
      {
        "frage": "Welche Form hat ein Ball?",
        "antworten": [
          "kugel",
          "rund"
        ],
        "loesung": "Eine Kugel"
      },
      {
        "frage": "Wie heißt das Gerät, mit dem man die Zeit abliest?",
        "antworten": [
          "uhr"
        ],
        "loesung": "Die Uhr"
      },
      {
        "frage": "Wie heißt das Gerät, mit dem man Sterne beobachtet?",
        "antworten": [
          "fernrohr",
          "teleskop"
        ],
        "loesung": "Ein Fernrohr"
      },
      {
        "frage": "Wie heißt das Gerät, mit dem man beim Sport die Zeit stoppt?",
        "antworten": [
          "stoppuhr"
        ],
        "loesung": "Die Stoppuhr"
      },
      {
        "frage": "Was passiert mit einer Kerze, wenn man ein Glas darüberstülpt?",
        "antworten": [
          "geht aus",
          "erlischt",
          "sie geht aus"
        ],
        "loesung": "Sie geht aus"
      },
      {
        "frage": "Was passiert mit einem Luftballon, wenn man ihn an den Haaren reibt?",
        "antworten": [
          "er zieht haare an",
          "elektrisch",
          "lädt sich auf"
        ],
        "loesung": "Er zieht die Haare an"
      },
      {
        "frage": "Wann ist der Schatten am kürzesten?",
        "antworten": [
          "mittags",
          "zu mittag",
          "am mittag"
        ],
        "loesung": "Mittags"
      },
      {
        "frage": "Wie nennt man Wasser, wenn es zu Dampf geworden ist?",
        "antworten": [
          "gasförmig",
          "gas",
          "dampf"
        ],
        "loesung": "Gasförmig"
      },
      {
        "frage": "Wie nennt man Wasser, das weder Eis noch Dampf ist?",
        "antworten": [
          "flüssig"
        ],
        "loesung": "Flüssig"
      },
      {
        "frage": "Was schwimmt oben, wenn man Öl in Wasser gießt?",
        "antworten": [
          "öl",
          "das öl"
        ],
        "loesung": "Das Öl"
      },
      {
        "frage": "Welcher ist größer: die Erde oder der Mond?",
        "antworten": [
          "erde",
          "die erde"
        ],
        "loesung": "Die Erde"
      },
      {
        "frage": "Zieht ein Magnet Holz oder Eisen an?",
        "antworten": [
          "eisen"
        ],
        "loesung": "Eisen"
      },
      {
        "frage": "Wie nennt man die winzigen Teilchen, aus denen alles besteht?",
        "antworten": [
          "atome",
          "atom"
        ],
        "loesung": "Atome"
      },
      {
        "frage": "Womit kann man verschüttetes Wasser aufsaugen?",
        "antworten": [
          "schwamm",
          "lappen",
          "tuch"
        ],
        "loesung": "Mit einem Schwamm"
      },
      {
        "frage": "Was passiert mit Zucker, wenn man ihn in Wasser rührt?",
        "antworten": [
          "löst sich auf",
          "er löst sich"
        ],
        "loesung": "Er löst sich auf"
      },
      {
        "frage": "Wie nennt man die Kraft, mit der ein Magnet zieht?",
        "antworten": [
          "magnetkraft",
          "magnetismus"
        ],
        "loesung": "Die Magnetkraft"
      },
      {
        "frage": "Welchen Stoff aus der Luft brauchen wir zum Atmen?",
        "antworten": [
          "sauerstoff"
        ],
        "loesung": "Sauerstoff"
      },
      {
        "frage": "Wie nennt man die vielen kleinen Lichter am Nachthimmel?",
        "antworten": [
          "sterne"
        ],
        "loesung": "Sterne"
      },
      {
        "frage": "Wie nennt man die Jahreszeit, in der die Blätter fallen?",
        "antworten": [
          "herbst"
        ],
        "loesung": "Der Herbst"
      },
      {
        "frage": "Was braucht eine Pflanze außer Licht und Wasser noch?",
        "antworten": [
          "erde",
          "luft",
          "nährstoffe"
        ],
        "loesung": "Erde und Luft"
      },
      {
        "frage": "Wie nennt man die dunkle Stelle hinter einem Gegenstand im Licht?",
        "antworten": [
          "schatten"
        ],
        "loesung": "Der Schatten"
      },
      {
        "frage": "Welche Farbe hat der Himmel bei schönem Wetter?",
        "antworten": [
          "blau"
        ],
        "loesung": "Blau"
      },
      {
        "frage": "Warum können wir den Mond sehen?",
        "antworten": [
          "sonnenlicht",
          "er spiegelt das sonnenlicht",
          "sonne scheint drauf"
        ],
        "loesung": "Weil die Sonne ihn anstrahlt"
      },
      {
        "frage": "Was kommt bei einem Ausbruch aus einem Vulkan?",
        "antworten": [
          "lava",
          "magma",
          "asche"
        ],
        "loesung": "Lava"
      },
      {
        "frage": "Wie nennt man ein starkes Beben des Bodens?",
        "antworten": [
          "erdbeben"
        ],
        "loesung": "Ein Erdbeben"
      },
      {
        "frage": "Wie nennt man einen sehr starken Wind?",
        "antworten": [
          "sturm",
          "orkan"
        ],
        "loesung": "Ein Sturm"
      },
      {
        "frage": "Wie nennt man einen Wind, der sich im Kreis dreht?",
        "antworten": [
          "wirbelsturm",
          "tornado"
        ],
        "loesung": "Ein Wirbelsturm"
      },
      {
        "frage": "Wodurch entsteht Wind?",
        "antworten": [
          "bewegte luft",
          "luft bewegt sich",
          "luft"
        ],
        "loesung": "Durch Luft, die sich bewegt"
      },
      {
        "frage": "Was ist schwerer: ein Liter Wasser oder ein Liter Luft?",
        "antworten": [
          "wasser",
          "das wasser"
        ],
        "loesung": "Das Wasser"
      },
      {
        "frage": "Wie viel wiegt ein Liter Wasser?",
        "antworten": [
          "1 kilo",
          "1 kilogramm",
          "ein kilo"
        ],
        "loesung": "Ein Kilogramm"
      },
      {
        "frage": "Warum schwimmt Eis auf dem Wasser?",
        "antworten": [
          "leichter",
          "weil es leichter ist"
        ],
        "loesung": "Weil es leichter ist als Wasser"
      },
      {
        "frage": "Wie nennt man gefrorene Regentropfen?",
        "antworten": [
          "hagel"
        ],
        "loesung": "Hagel"
      },
      {
        "frage": "Wie nennt man die Tropfen, die morgens auf dem Gras liegen?",
        "antworten": [
          "tau"
        ],
        "loesung": "Tau"
      },
      {
        "frage": "Wie nennt man eine Wolke, die direkt am Boden liegt?",
        "antworten": [
          "nebel"
        ],
        "loesung": "Nebel"
      },
      {
        "frage": "Welche Farbe entsteht, wenn man alle Regenbogenfarben mischt?",
        "antworten": [
          "weiß"
        ],
        "loesung": "Weiß"
      },
      {
        "frage": "Was braucht eine Taschenlampe, damit sie leuchtet?",
        "antworten": [
          "batterie",
          "batterien"
        ],
        "loesung": "Eine Batterie"
      },
      {
        "frage": "Wie nennt man das Teil, mit dem man Licht an- und ausmacht?",
        "antworten": [
          "schalter",
          "lichtschalter"
        ],
        "loesung": "Der Schalter"
      },
      {
        "frage": "Warum darf man nichts in eine Steckdose stecken?",
        "antworten": [
          "strom",
          "stromschlag",
          "gefährlich"
        ],
        "loesung": "Wegen der Gefahr eines Stromschlags"
      },
      {
        "frage": "Welche Stoffe leiten Strom besonders gut?",
        "antworten": [
          "metalle",
          "metall"
        ],
        "loesung": "Metalle"
      },
      {
        "frage": "Welche Pole eines Magneten ziehen sich an?",
        "antworten": [
          "verschiedene",
          "nord und süd",
          "ungleiche"
        ],
        "loesung": "Nordpol und Südpol"
      },
      {
        "frage": "Wie nennt man das, was wir mit den Ohren wahrnehmen?",
        "antworten": [
          "schall",
          "ton",
          "geräusch"
        ],
        "loesung": "Schall"
      },
      {
        "frage": "Was braucht der Schall, um sich auszubreiten?",
        "antworten": [
          "luft"
        ],
        "loesung": "Luft"
      },
      {
        "frage": "Wie nennt man Geräusche, die zu laut und störend sind?",
        "antworten": [
          "lärm"
        ],
        "loesung": "Lärm"
      },
      {
        "frage": "Welche Farbe wird in der Sonne am wärmsten?",
        "antworten": [
          "schwarz"
        ],
        "loesung": "Schwarz"
      },
      {
        "frage": "Warum trägt man im Sommer helle Kleidung?",
        "antworten": [
          "weniger wärme",
          "reflektiert",
          "kühler"
        ],
        "loesung": "Weil sie weniger Wärme aufnimmt"
      },
      {
        "frage": "Wie nennt man Energie, die von der Sonne kommt?",
        "antworten": [
          "sonnenenergie",
          "solarenergie"
        ],
        "loesung": "Sonnenenergie"
      },
      {
        "frage": "Wie heißt das Gerät, das aus Wind Strom macht?",
        "antworten": [
          "windrad",
          "windkraftanlage"
        ],
        "loesung": "Ein Windrad"
      },
      {
        "frage": "Woraus besteht Luft hauptsächlich?",
        "antworten": [
          "stickstoff",
          "stickstoff und sauerstoff"
        ],
        "loesung": "Aus Stickstoff und Sauerstoff"
      },
      {
        "frage": "Welcher Planet hat auffällige Ringe?",
        "antworten": [
          "saturn"
        ],
        "loesung": "Der Saturn"
      },
      {
        "frage": "Wie nennt man den Weg, den der Mond um die Erde nimmt?",
        "antworten": [
          "umlaufbahn",
          "bahn"
        ],
        "loesung": "Die Umlaufbahn"
      },
      {
        "frage": "Wie lange braucht der Mond einmal um die Erde?",
        "antworten": [
          "vier wochen",
          "4 wochen",
          "einen monat"
        ],
        "loesung": "Etwa vier Wochen"
      },
      {
        "frage": "Was ist eine Sternschnuppe?",
        "antworten": [
          "verglühender stein",
          "meteor",
          "stein der verglüht"
        ],
        "loesung": "Ein verglühender Stein"
      },
      {
        "frage": "Wie nennt man Steine aus dem Weltall, die auf der Erde landen?",
        "antworten": [
          "meteorit",
          "meteoriten"
        ],
        "loesung": "Meteoriten"
      },
      {
        "frage": "Wie heißt der Anzug, den Astronauten im Weltall tragen?",
        "antworten": [
          "raumanzug"
        ],
        "loesung": "Der Raumanzug"
      },
      {
        "frage": "Wie nennt man eine Gruppe von Sternen mit eigenem Namen?",
        "antworten": [
          "sternbild"
        ],
        "loesung": "Ein Sternbild"
      },
      {
        "frage": "Wie heißt das bekannte Sternbild mit sieben hellen Sternen?",
        "antworten": [
          "großer wagen",
          "großer bär"
        ],
        "loesung": "Der Große Wagen"
      },
      {
        "frage": "Warum sehen wir tagsüber keine Sterne?",
        "antworten": [
          "sonne zu hell",
          "die sonne",
          "zu hell"
        ],
        "loesung": "Weil die Sonne zu hell ist"
      },
      {
        "frage": "Wie nennt man den Zustand im Weltall, in dem alles schwebt?",
        "antworten": [
          "schwerelosigkeit",
          "schwerelos"
        ],
        "loesung": "Schwerelosigkeit"
      },
      {
        "frage": "Wie heißt das Gerät, mit dem man das Gewicht misst?",
        "antworten": [
          "waage"
        ],
        "loesung": "Die Waage"
      },
      {
        "frage": "Welche Form hat ein fallender Wassertropfen?",
        "antworten": [
          "rund",
          "kugel",
          "kugelig"
        ],
        "loesung": "Rund"
      },
      {
        "frage": "Wie nennt man warme Luft, die nach oben steigt?",
        "antworten": [
          "aufwind",
          "warme luft steigt"
        ],
        "loesung": "Aufwind"
      },
      {
        "frage": "Wie nennt man Wasser, das aus dem Boden hervorkommt?",
        "antworten": [
          "quelle",
          "grundwasser"
        ],
        "loesung": "Eine Quelle"
      },
      {
        "frage": "Wie nennt man den Zustand von Wasser bei minus zehn Grad?",
        "antworten": [
          "fest",
          "eis",
          "gefroren"
        ],
        "loesung": "Fest"
      },
      {
        "frage": "Womit kann man eine Flamme löschen?",
        "antworten": [
          "wasser",
          "decke",
          "sand"
        ],
        "loesung": "Mit Wasser"
      },
      {
        "frage": "Warum geht eine Kerze ohne Luft aus?",
        "antworten": [
          "kein sauerstoff",
          "sauerstoff fehlt",
          "keine luft"
        ],
        "loesung": "Weil der Sauerstoff fehlt"
      },
      {
        "frage": "Wie nennt man das Werkzeug, mit dem man Längen misst?",
        "antworten": [
          "lineal",
          "maßband",
          "zollstock"
        ],
        "loesung": "Ein Lineal"
      },
      {
        "frage": "Wie nennt man den Übergang von Eis zu Wasser?",
        "antworten": [
          "schmelzen",
          "tauen"
        ],
        "loesung": "Schmelzen"
      },
      {
        "frage": "Welche Jahreszeit hat die kürzesten Tage?",
        "antworten": [
          "winter"
        ],
        "loesung": "Der Winter"
      },
      {
        "frage": "Welche Jahreszeit hat die längsten Tage?",
        "antworten": [
          "sommer"
        ],
        "loesung": "Der Sommer"
      },
      {
        "frage": "Schätzfrage: Wie viele Sterne sieht man in einer klaren Nacht mit bloßem Auge?",
        "schaetzfrage": true,
        "loesung": "rund 3000"
      },
      {
        "frage": "Schätzfrage: Wie schnell fliegt ein Passagierflugzeug?",
        "schaetzfrage": true,
        "loesung": "rund 900 km/h"
      }
    ],
    "unterstufe": [
      {
        "frage": "Wie viele Planeten hat unser Sonnensystem?",
        "antworten": [
          "8",
          "acht"
        ],
        "loesung": "8",
        "zahlenbereich": [
          8,
          8
        ]
      },
      {
        "frage": "Welcher Planet ist der Sonne am nächsten?",
        "antworten": [
          "merkur"
        ],
        "loesung": "Merkur"
      },
      {
        "frage": "Wie heißt der größte Planet unseres Sonnensystems?",
        "antworten": [
          "jupiter"
        ],
        "loesung": "Jupiter"
      },
      {
        "frage": "Welcher Planet ist für seine auffälligen Ringe bekannt?",
        "antworten": [
          "saturn"
        ],
        "loesung": "Saturn"
      },
      {
        "frage": "Welcher Planet wird wegen seiner Farbe der Rote Planet genannt?",
        "antworten": [
          "mars"
        ],
        "loesung": "Mars"
      },
      {
        "frage": "Wie heißt der natürliche Satellit der Erde?",
        "antworten": [
          "mond"
        ],
        "loesung": "Der Mond"
      },
      {
        "frage": "Wie heißt die Kraft, die alles zum Erdboden zieht?",
        "antworten": [
          "schwerkraft",
          "gravitation",
          "erdanziehung"
        ],
        "loesung": "Die Schwerkraft"
      },
      {
        "frage": "Welches chemische Zeichen hat Sauerstoff?",
        "antworten": [
          "o"
        ],
        "loesung": "O"
      },
      {
        "frage": "Welches chemische Zeichen hat Kohlenstoff?",
        "antworten": [
          "c"
        ],
        "loesung": "C"
      },
      {
        "frage": "Aus welchen zwei Elementen besteht Wasser?",
        "antworten": [
          "wasserstoff und sauerstoff",
          "h2o"
        ],
        "loesung": "Wasserstoff und Sauerstoff"
      },
      {
        "frage": "Welches Metall ist bei Zimmertemperatur flüssig?",
        "antworten": [
          "quecksilber"
        ],
        "loesung": "Quecksilber"
      },
      {
        "frage": "Wie heißt der Aggregatzustand zwischen fest und gasförmig?",
        "antworten": [
          "flüssig"
        ],
        "loesung": "Flüssig"
      },
      {
        "frage": "Wie nennt man den Übergang von fest zu flüssig?",
        "antworten": [
          "schmelzen"
        ],
        "loesung": "Schmelzen"
      },
      {
        "frage": "Wie heißt die Einheit der Kraft?",
        "antworten": [
          "newton"
        ],
        "loesung": "Newton"
      },
      {
        "frage": "Was passiert mit weißem Licht, wenn es durch ein Prisma fällt?",
        "antworten": [
          "zerlegt",
          "farben",
          "spektrum",
          "regenbogen"
        ],
        "loesung": "Es wird in seine Farben zerlegt"
      },
      {
        "frage": "Welches Gas brauchen wir zum Atmen?",
        "antworten": [
          "sauerstoff"
        ],
        "loesung": "Sauerstoff"
      },
      {
        "frage": "Wie nennt man Stoffe, die elektrischen Strom gut leiten?",
        "antworten": [
          "leiter",
          "metalle"
        ],
        "loesung": "Leiter"
      },
      {
        "frage": "Wie viele Stunden braucht die Erde für eine Drehung um sich selbst?",
        "antworten": [
          "24"
        ],
        "loesung": "24 Stunden",
        "zahlenbereich": [
          23,
          25
        ]
      },
      {
        "frage": "Schätzfrage: Wie schnell breitet sich Schall in der Luft aus?",
        "schaetzfrage": true,
        "loesung": "rund 340 Meter pro Sekunde"
      },
      {
        "frage": "Schätzfrage: Wie weit ist der Mond von der Erde entfernt?",
        "schaetzfrage": true,
        "loesung": "rund 384.400 Kilometer"
      },
      {
        "frage": "Wie nennt man den Übergang von flüssig zu gasförmig?",
        "antworten": [
          "verdampfen",
          "verdunsten"
        ],
        "loesung": "Verdampfen"
      },
      {
        "frage": "Wie nennt man den Übergang von gasförmig zu flüssig?",
        "antworten": [
          "kondensieren",
          "kondensation"
        ],
        "loesung": "Kondensieren"
      },
      {
        "frage": "Wie heißt der ständige Kreislauf des Wassers auf der Erde?",
        "antworten": [
          "wasserkreislauf"
        ],
        "loesung": "Der Wasserkreislauf"
      },
      {
        "frage": "Welches chemische Zeichen hat Wasserstoff?",
        "antworten": [
          "h"
        ],
        "loesung": "H"
      },
      {
        "frage": "Wie heißt die in Deutschland übliche Einheit für die Temperatur?",
        "antworten": [
          "grad celsius",
          "celsius"
        ],
        "loesung": "Grad Celsius"
      },
      {
        "frage": "Wie nennt man Stoffe, die elektrischen Strom nicht leiten?",
        "antworten": [
          "isolatoren",
          "nichtleiter",
          "isolator"
        ],
        "loesung": "Isolatoren"
      },
      {
        "frage": "Wie viele Pole hat ein Magnet?",
        "antworten": [
          "2",
          "zwei"
        ],
        "loesung": "2",
        "zahlenbereich": [
          2,
          2
        ]
      },
      {
        "frage": "Stoßen sich bei Magneten gleiche oder ungleiche Pole ab?",
        "antworten": [
          "gleiche",
          "gleiche pole"
        ],
        "loesung": "Gleiche Pole"
      },
      {
        "frage": "Wie heißt die Kraft, die einen Körper im Wasser nach oben drückt?",
        "antworten": [
          "auftrieb"
        ],
        "loesung": "Der Auftrieb"
      },
      {
        "frage": "Wie nennt man die Bahn, auf der die Erde die Sonne umkreist?",
        "antworten": [
          "umlaufbahn",
          "erdbahn",
          "orbit"
        ],
        "loesung": "Die Umlaufbahn"
      },
      {
        "frage": "Wie heißt der Übergang von flüssig zu fest?",
        "antworten": [
          "erstarren",
          "gefrieren"
        ],
        "loesung": "Das Erstarren"
      },
      {
        "frage": "Wie nennt man Stoffe, die sich in Wasser auflösen?",
        "antworten": [
          "löslich",
          "lösliche stoffe"
        ],
        "loesung": "Lösliche Stoffe"
      },
      {
        "frage": "Welches chemische Zeichen hat Stickstoff?",
        "antworten": [
          "n"
        ],
        "loesung": "N"
      },
      {
        "frage": "Welches chemische Zeichen hat Eisen?",
        "antworten": [
          "fe"
        ],
        "loesung": "Fe"
      },
      {
        "frage": "Welches Gas ist in der Luft am häufigsten?",
        "antworten": [
          "stickstoff"
        ],
        "loesung": "Stickstoff"
      },
      {
        "frage": "Wie viel Prozent der Luft sind ungefähr Sauerstoff?",
        "antworten": [
          "21",
          "21 prozent",
          "20"
        ],
        "loesung": "Rund 21 Prozent",
        "zahlenbereich": [
          19,
          23
        ]
      },
      {
        "frage": "Wie nennt man den Druck, den die Luft ausübt?",
        "antworten": [
          "luftdruck"
        ],
        "loesung": "Der Luftdruck"
      },
      {
        "frage": "Womit misst man den Luftdruck?",
        "antworten": [
          "barometer"
        ],
        "loesung": "Mit einem Barometer"
      },
      {
        "frage": "Wie heißt die Einheit der Zeit im internationalen System?",
        "antworten": [
          "sekunde"
        ],
        "loesung": "Die Sekunde"
      },
      {
        "frage": "Wie heißt die Einheit der Länge im internationalen System?",
        "antworten": [
          "meter"
        ],
        "loesung": "Das Meter"
      },
      {
        "frage": "Wie nennt man eine Linse, die Lichtstrahlen bündelt?",
        "antworten": [
          "sammellinse",
          "konvexlinse"
        ],
        "loesung": "Eine Sammellinse"
      },
      {
        "frage": "Wie heißt der Punkt, in dem gebündeltes Licht zusammentrifft?",
        "antworten": [
          "brennpunkt",
          "fokus"
        ],
        "loesung": "Der Brennpunkt"
      },
      {
        "frage": "Wie nennt man den vollständig dunklen Teil eines Schattens?",
        "antworten": [
          "kernschatten"
        ],
        "loesung": "Der Kernschatten"
      },
      {
        "frage": "Was geschieht bei einer Sonnenfinsternis?",
        "antworten": [
          "mond schiebt sich vor die sonne",
          "der mond"
        ],
        "loesung": "Der Mond schiebt sich vor die Sonne"
      },
      {
        "frage": "Was geschieht bei einer Mondfinsternis?",
        "antworten": [
          "erde wirft schatten",
          "erdschatten",
          "die erde"
        ],
        "loesung": "Die Erde wirft ihren Schatten auf den Mond"
      },
      {
        "frage": "Wie lange braucht die Erde für einen Umlauf um die Sonne?",
        "antworten": [
          "ein jahr",
          "365 tage",
          "1 jahr"
        ],
        "loesung": "Ein Jahr"
      },
      {
        "frage": "Wie viele Monde hat der Mars?",
        "antworten": [
          "2",
          "zwei"
        ],
        "loesung": "2",
        "zahlenbereich": [
          2,
          2
        ]
      },
      {
        "frage": "Welcher Stern zeigt die Nordrichtung an?",
        "antworten": [
          "polarstern"
        ],
        "loesung": "Der Polarstern"
      },
      {
        "frage": "Wie nennt man einen riesigen Zusammenschluss von Sternen?",
        "antworten": [
          "galaxie"
        ],
        "loesung": "Eine Galaxie"
      },
      {
        "frage": "Wie nennt man ein Bauteil, das elektrische Energie speichert?",
        "antworten": [
          "batterie",
          "akku",
          "akkumulator"
        ],
        "loesung": "Eine Batterie"
      },
      {
        "frage": "Wie heißt die Einheit der elektrischen Stromstärke?",
        "antworten": [
          "ampere"
        ],
        "loesung": "Das Ampere"
      },
      {
        "frage": "Wie heißt die Einheit der elektrischen Spannung?",
        "antworten": [
          "volt"
        ],
        "loesung": "Das Volt"
      },
      {
        "frage": "Womit misst man die elektrische Spannung?",
        "antworten": [
          "voltmeter",
          "spannungsmesser",
          "multimeter"
        ],
        "loesung": "Mit einem Voltmeter"
      },
      {
        "frage": "Was braucht ein Stromkreis mindestens, damit er funktioniert?",
        "antworten": [
          "quelle leitung verbraucher",
          "stromquelle",
          "geschlossener kreis"
        ],
        "loesung": "Quelle, Leitung und Verbraucher"
      },
      {
        "frage": "Wie nennt man eine Schaltung, bei der Lampen hintereinander liegen?",
        "antworten": [
          "reihenschaltung",
          "serienschaltung"
        ],
        "loesung": "Die Reihenschaltung"
      },
      {
        "frage": "Wie nennt man eine Schaltung, bei der Lampen nebeneinander liegen?",
        "antworten": [
          "parallelschaltung"
        ],
        "loesung": "Die Parallelschaltung"
      },
      {
        "frage": "Wie heißt die Kraft, die eine Bewegung bremst?",
        "antworten": [
          "reibung",
          "reibungskraft"
        ],
        "loesung": "Die Reibung"
      },
      {
        "frage": "Wie nennt man eine Stange, mit der man Kraft spart, wie bei einer Wippe?",
        "antworten": [
          "hebel"
        ],
        "loesung": "Ein Hebel"
      },
      {
        "frage": "Wie nennt man die gespeicherte Energie eines hochgehobenen Körpers?",
        "antworten": [
          "lageenergie",
          "potenzielle energie",
          "höhenenergie"
        ],
        "loesung": "Die Lageenergie"
      },
      {
        "frage": "Wie nennt man die Energie eines bewegten Körpers?",
        "antworten": [
          "bewegungsenergie",
          "kinetische energie"
        ],
        "loesung": "Die Bewegungsenergie"
      },
      {
        "frage": "Wie heißt die Temperaturskala, die beim absoluten Nullpunkt beginnt?",
        "antworten": [
          "kelvin"
        ],
        "loesung": "Die Kelvin-Skala"
      },
      {
        "frage": "Was passiert mit den meisten Stoffen, wenn man sie erwärmt?",
        "antworten": [
          "dehnen sich aus",
          "ausdehnen",
          "werden größer"
        ],
        "loesung": "Sie dehnen sich aus"
      },
      {
        "frage": "Wie nennt man die Wärmeübertragung durch direkte Berührung?",
        "antworten": [
          "wärmeleitung"
        ],
        "loesung": "Die Wärmeleitung"
      },
      {
        "frage": "Wie nennt man die Wärmeübertragung ohne Materie dazwischen?",
        "antworten": [
          "wärmestrahlung",
          "strahlung"
        ],
        "loesung": "Die Wärmestrahlung"
      },
      {
        "frage": "Kann sich Schall im Vakuum ausbreiten?",
        "antworten": [
          "nein"
        ],
        "loesung": "Nein"
      },
      {
        "frage": "Wie heißt das chemische Zeichen für Kupfer?",
        "antworten": [
          "cu"
        ],
        "loesung": "Cu"
      },
      {
        "frage": "Wie viele Atome hat ein Wassermolekül?",
        "antworten": [
          "3",
          "drei"
        ],
        "loesung": "3",
        "zahlenbereich": [
          3,
          3
        ]
      },
      {
        "frage": "Wie nennt man einen Stoff, der nur aus einer Atomsorte besteht?",
        "antworten": [
          "element"
        ],
        "loesung": "Ein Element"
      },
      {
        "frage": "Wie nennt man einen Stoff aus mehreren miteinander verbundenen Elementen?",
        "antworten": [
          "verbindung",
          "chemische verbindung"
        ],
        "loesung": "Eine Verbindung"
      },
      {
        "frage": "Wie trennt man Salz von Wasser?",
        "antworten": [
          "verdampfen",
          "eindampfen",
          "verdunsten"
        ],
        "loesung": "Durch Verdampfen"
      },
      {
        "frage": "Wie trennt man Sand von Wasser?",
        "antworten": [
          "filtern",
          "filtrieren"
        ],
        "loesung": "Durch Filtern"
      },
      {
        "frage": "Wie nennt man Lösungen mit einem pH-Wert unter sieben?",
        "antworten": [
          "säuren",
          "sauer"
        ],
        "loesung": "Säuren"
      },
      {
        "frage": "Wie nennt man Lösungen mit einem pH-Wert über sieben?",
        "antworten": [
          "laugen",
          "basen",
          "basisch"
        ],
        "loesung": "Laugen"
      },
      {
        "frage": "Womit prüft man, ob eine Lösung sauer ist?",
        "antworten": [
          "indikator",
          "ph papier",
          "lackmus"
        ],
        "loesung": "Mit einem Indikator"
      },
      {
        "frage": "Was entsteht, wenn Eisen rostet?",
        "antworten": [
          "rost",
          "eisenoxid"
        ],
        "loesung": "Rost, also Eisenoxid"
      },
      {
        "frage": "Was braucht Eisen, damit es rostet?",
        "antworten": [
          "sauerstoff und wasser",
          "wasser und luft",
          "feuchtigkeit"
        ],
        "loesung": "Sauerstoff und Wasser"
      },
      {
        "frage": "Wie nennt man eine chemische Reaktion mit Sauerstoff?",
        "antworten": [
          "oxidation"
        ],
        "loesung": "Eine Oxidation"
      },
      {
        "frage": "Welcher Planet liegt zwischen Merkur und Erde?",
        "antworten": [
          "venus"
        ],
        "loesung": "Die Venus"
      },
      {
        "frage": "Welcher Planet ist am weitesten von der Sonne entfernt?",
        "antworten": [
          "neptun"
        ],
        "loesung": "Der Neptun"
      },
      {
        "frage": "Wie nennt man die vielen kleinen Körper zwischen Mars und Jupiter?",
        "antworten": [
          "asteroiden",
          "asteroidengürtel"
        ],
        "loesung": "Asteroiden"
      },
      {
        "frage": "Wie nennt man einen Himmelskörper mit leuchtendem Schweif?",
        "antworten": [
          "komet"
        ],
        "loesung": "Ein Komet"
      },
      {
        "frage": "Wodurch entstehen die Jahreszeiten?",
        "antworten": [
          "neigung der erdachse",
          "erdachse",
          "schiefe der erdachse"
        ],
        "loesung": "Durch die Neigung der Erdachse"
      },
      {
        "frage": "Um wie viel Grad ist die Erdachse geneigt?",
        "antworten": [
          "23,5",
          "23"
        ],
        "loesung": "Um 23,5 Grad",
        "zahlenbereich": [
          22,
          25
        ]
      },
      {
        "frage": "Wie heißt der längste Tag des Jahres?",
        "antworten": [
          "sommersonnenwende",
          "sonnenwende"
        ],
        "loesung": "Die Sommersonnenwende"
      },
      {
        "frage": "Welche Schicht der Atmosphäre schützt vor UV-Strahlung?",
        "antworten": [
          "ozonschicht",
          "ozon"
        ],
        "loesung": "Die Ozonschicht"
      },
      {
        "frage": "Wie heißt die unterste Schicht der Atmosphäre?",
        "antworten": [
          "troposphäre"
        ],
        "loesung": "Die Troposphäre"
      },
      {
        "frage": "Wie nennt man die Erwärmung der Erde durch Gase in der Luft?",
        "antworten": [
          "treibhauseffekt"
        ],
        "loesung": "Der Treibhauseffekt"
      },
      {
        "frage": "Wodurch entstehen Ebbe und Flut?",
        "antworten": [
          "mond",
          "anziehung des mondes",
          "mondanziehung"
        ],
        "loesung": "Durch die Anziehungskraft des Mondes"
      },
      {
        "frage": "Wie nennt man geschmolzenes Gestein unter der Erdoberfläche?",
        "antworten": [
          "magma"
        ],
        "loesung": "Magma"
      },
      {
        "frage": "Wie heißen die großen Platten, aus denen die Erdkruste besteht?",
        "antworten": [
          "erdplatten",
          "kontinentalplatten",
          "lithosphärenplatten"
        ],
        "loesung": "Die Erdplatten"
      },
      {
        "frage": "Wie nennt man Gestein, das aus erstarrter Lava entsteht?",
        "antworten": [
          "erstarrungsgestein",
          "vulkangestein",
          "magmatisches gestein"
        ],
        "loesung": "Erstarrungsgestein"
      },
      {
        "frage": "Wie heißt die Schicht unter der Erdkruste?",
        "antworten": [
          "erdmantel",
          "mantel"
        ],
        "loesung": "Der Erdmantel"
      },
      {
        "frage": "Wie nennt man die Kraft, mit der die Erde alles anzieht, in einer Zahl?",
        "antworten": [
          "9,81",
          "9,8",
          "10"
        ],
        "loesung": "Rund 9,81 Meter pro Sekunde im Quadrat",
        "zahlenbereich": [
          9,
          10
        ]
      },
      {
        "frage": "Wie nennt man Energie, die nicht verbraucht wird, sondern nur umgewandelt?",
        "antworten": [
          "energieerhaltung",
          "umwandlung"
        ],
        "loesung": "Die Energieerhaltung"
      },
      {
        "frage": "Wie nennt man ein Gerät, das Bewegung in Strom umwandelt?",
        "antworten": [
          "generator",
          "dynamo"
        ],
        "loesung": "Ein Generator"
      },
      {
        "frage": "Wie nennt man ein Gerät, das Strom in Bewegung umwandelt?",
        "antworten": [
          "motor",
          "elektromotor"
        ],
        "loesung": "Ein Elektromotor"
      },
      {
        "frage": "Wie nennt man den Widerstand, den Luft einem bewegten Körper entgegensetzt?",
        "antworten": [
          "luftwiderstand"
        ],
        "loesung": "Der Luftwiderstand"
      },
      {
        "frage": "Wie nennt man den Punkt, an dem ein Körper im Gleichgewicht ist?",
        "antworten": [
          "schwerpunkt"
        ],
        "loesung": "Der Schwerpunkt"
      },
      {
        "frage": "Schätzfrage: Wie dick ist die Erdkruste unter den Kontinenten?",
        "schaetzfrage": true,
        "loesung": "rund 35 Kilometer"
      },
      {
        "frage": "Schätzfrage: Wie heiß ist der Erdkern?",
        "schaetzfrage": true,
        "loesung": "rund 5000 Grad"
      }
    ],
    "mittelstufe": [
      {
        "frage": "Wie heißt die Einheit der Energie?",
        "antworten": [
          "joule"
        ],
        "loesung": "Das Joule"
      },
      {
        "frage": "Wie berechnet man die Geschwindigkeit?",
        "antworten": [
          "weg durch zeit",
          "strecke durch zeit",
          "s durch t"
        ],
        "loesung": "Weg geteilt durch Zeit"
      },
      {
        "frage": "Wie heißt das Gesetz, das Spannung, Stromstärke und Widerstand verbindet?",
        "antworten": [
          "ohmsches gesetz",
          "ohm"
        ],
        "loesung": "Das ohmsche Gesetz"
      },
      {
        "frage": "Wie heißt die Einheit des elektrischen Widerstands?",
        "antworten": [
          "ohm"
        ],
        "loesung": "Das Ohm"
      },
      {
        "frage": "Wie heißt die Einheit der Frequenz?",
        "antworten": [
          "hertz"
        ],
        "loesung": "Das Hertz"
      },
      {
        "frage": "Wie heißt die Einheit der Masse im internationalen Einheitensystem?",
        "antworten": [
          "kilogramm"
        ],
        "loesung": "Das Kilogramm"
      },
      {
        "frage": "Wie viele Protonen hat ein Kohlenstoffatom?",
        "antworten": [
          "6",
          "sechs"
        ],
        "loesung": "6",
        "zahlenbereich": [
          6,
          6
        ]
      },
      {
        "frage": "Welche Teilchen bilden den Atomkern?",
        "antworten": [
          "protonen und neutronen",
          "protonen",
          "neutronen"
        ],
        "loesung": "Protonen und Neutronen"
      },
      {
        "frage": "Welche Ladung trägt ein Elektron?",
        "antworten": [
          "negativ",
          "minus"
        ],
        "loesung": "Eine negative Ladung"
      },
      {
        "frage": "Wie heißt die geordnete Übersicht aller chemischen Elemente?",
        "antworten": [
          "periodensystem"
        ],
        "loesung": "Das Periodensystem"
      },
      {
        "frage": "Wie heißt die Verbindung aus Natrium und Chlor im Alltag?",
        "antworten": [
          "kochsalz",
          "salz",
          "natriumchlorid"
        ],
        "loesung": "Kochsalz"
      },
      {
        "frage": "Wie nennt man eine Reaktion, bei der Wärme frei wird?",
        "antworten": [
          "exotherm"
        ],
        "loesung": "Exotherm"
      },
      {
        "frage": "Wie nennt man eine Reaktion, die Wärme aufnimmt?",
        "antworten": [
          "endotherm"
        ],
        "loesung": "Endotherm"
      },
      {
        "frage": "In welchem Bereich liegt der pH-Wert von Säuren?",
        "antworten": [
          "unter 7",
          "kleiner 7",
          "unter sieben"
        ],
        "loesung": "Unter 7"
      },
      {
        "frage": "Wie heißt die kleinste Einheit eines chemischen Elements?",
        "antworten": [
          "atom"
        ],
        "loesung": "Das Atom"
      },
      {
        "frage": "Wie heißt der vierte Aggregatzustand mit frei beweglichen Ladungen?",
        "antworten": [
          "plasma"
        ],
        "loesung": "Das Plasma"
      },
      {
        "frage": "Wie nennt man unsichtbares Licht mit mehr Energie als Violett?",
        "antworten": [
          "ultraviolett",
          "uv",
          "uv strahlung"
        ],
        "loesung": "Ultraviolettes Licht"
      },
      {
        "frage": "Wie nennt man die Strahlung jenseits von Rot, die wir als Wärme spüren?",
        "antworten": [
          "infrarot"
        ],
        "loesung": "Infrarotstrahlung"
      },
      {
        "frage": "Wie nennt man die Richtungsänderung von Licht an einer Grenzfläche?",
        "antworten": [
          "brechung",
          "lichtbrechung",
          "refraktion"
        ],
        "loesung": "Die Lichtbrechung"
      },
      {
        "frage": "Wie nennt man das Zurückwerfen von Licht an einer Oberfläche?",
        "antworten": [
          "reflexion"
        ],
        "loesung": "Die Reflexion"
      },
      {
        "frage": "Wie heißt das Weltraumteleskop, das seit 1990 die Erde umkreist?",
        "antworten": [
          "hubble"
        ],
        "loesung": "Das Hubble-Teleskop"
      },
      {
        "frage": "Wie heißt die Galaxie, in der sich unser Sonnensystem befindet?",
        "antworten": [
          "milchstraße"
        ],
        "loesung": "Die Milchstraße"
      },
      {
        "frage": "Wie heißt der Vorgang, bei dem schwere Atomkerne gespalten werden?",
        "antworten": [
          "kernspaltung"
        ],
        "loesung": "Die Kernspaltung"
      },
      {
        "frage": "Wie heißt der Vorgang in der Sonne, bei dem leichte Kerne verschmelzen?",
        "antworten": [
          "kernfusion"
        ],
        "loesung": "Die Kernfusion"
      },
      {
        "frage": "Welches Treibhausgas entsteht vor allem beim Verbrennen von Kohle, Öl und Gas?",
        "antworten": [
          "kohlenstoffdioxid",
          "kohlendioxid",
          "co2"
        ],
        "loesung": "Kohlenstoffdioxid"
      },
      {
        "frage": "Wie nennt man Energie aus Wind, Sonne und Wasser?",
        "antworten": [
          "erneuerbare energie",
          "regenerative energie",
          "erneuerbar"
        ],
        "loesung": "Erneuerbare Energie"
      },
      {
        "frage": "Um wie viel nimmt die Geschwindigkeit eines frei fallenden Körpers pro Sekunde zu?",
        "antworten": [
          "9,81",
          "9,8",
          "10"
        ],
        "loesung": "Um rund 9,81 Meter pro Sekunde",
        "zahlenbereich": [
          9,
          10
        ]
      },
      {
        "frage": "Wie heißt der Fachbegriff für die Umwandlung von Licht in elektrischen Strom?",
        "antworten": [
          "photoeffekt",
          "fotoeffekt",
          "photovoltaik"
        ],
        "loesung": "Der photoelektrische Effekt"
      },
      {
        "frage": "Schätzfrage: Wie viele chemische Elemente umfasst das Periodensystem?",
        "schaetzfrage": true,
        "loesung": "118 Elemente"
      },
      {
        "frage": "Schätzfrage: Wie lange braucht das Sonnenlicht bis zur Erde?",
        "schaetzfrage": true,
        "loesung": "rund 8 Minuten"
      }
    ],
    "erwachsene": [
      {
        "frage": "Welches Element hat die Ordnungszahl 1?",
        "antworten": [
          "wasserstoff"
        ],
        "loesung": "Wasserstoff"
      },
      {
        "frage": "Welches Element hat das Symbol Fe?",
        "antworten": [
          "eisen"
        ],
        "loesung": "Eisen"
      },
      {
        "frage": "Welches chemische Symbol steht für Gold?",
        "antworten": [
          "au"
        ],
        "loesung": "Au"
      },
      {
        "frage": "Welches chemische Symbol steht für Natrium?",
        "antworten": [
          "na"
        ],
        "loesung": "Na"
      },
      {
        "frage": "Wie heißt die Einheit der elektrischen Spannung?",
        "antworten": [
          "volt"
        ],
        "loesung": "Volt"
      },
      {
        "frage": "Wie heißt die Einheit der elektrischen Stromstärke?",
        "antworten": [
          "ampere"
        ],
        "loesung": "Ampere"
      },
      {
        "frage": "Wie heißt die Einheit der Leistung?",
        "antworten": [
          "watt"
        ],
        "loesung": "Watt"
      },
      {
        "frage": "Wer formulierte die spezielle Relativitätstheorie?",
        "antworten": [
          "einstein"
        ],
        "loesung": "Albert Einstein"
      },
      {
        "frage": "Wer stellte die Bewegungsgesetze und das Gravitationsgesetz auf?",
        "antworten": [
          "newton"
        ],
        "loesung": "Isaac Newton"
      },
      {
        "frage": "Welche Forscherin erhielt zwei Nobelpreise und entdeckte das Radium mit?",
        "antworten": [
          "curie",
          "marie curie"
        ],
        "loesung": "Marie Curie"
      },
      {
        "frage": "Welches Gas macht mit rund 78 Prozent den größten Teil der Erdatmosphäre aus?",
        "antworten": [
          "stickstoff"
        ],
        "loesung": "Stickstoff"
      },
      {
        "frage": "Welches Gas entsteht bei der vollständigen Verbrennung von Kohlenstoff?",
        "antworten": [
          "kohlenstoffdioxid",
          "kohlendioxid",
          "co2"
        ],
        "loesung": "Kohlenstoffdioxid"
      },
      {
        "frage": "Bei wie viel Grad Celsius liegt der absolute Nullpunkt?",
        "antworten": [
          "-273,15",
          "minus 273"
        ],
        "loesung": "minus 273,15 Grad",
        "zahlenbereich": [
          -274,
          -272
        ]
      },
      {
        "frage": "Welchen pH-Wert hat eine neutrale Lösung?",
        "antworten": [
          "7",
          "sieben"
        ],
        "loesung": "7",
        "zahlenbereich": [
          7,
          7
        ]
      },
      {
        "frage": "Wie heißt das schwerste natürlich vorkommende Element?",
        "antworten": [
          "uran"
        ],
        "loesung": "Uran"
      },
      {
        "frage": "Wie heißt der Satz, nach dem Energie weder erzeugt noch vernichtet wird?",
        "antworten": [
          "energieerhaltung",
          "energieerhaltungssatz",
          "erster hauptsatz"
        ],
        "loesung": "Der Energieerhaltungssatz"
      },
      {
        "frage": "Wie nennt man den direkten Übergang von fest zu gasförmig?",
        "antworten": [
          "sublimation"
        ],
        "loesung": "Sublimation"
      },
      {
        "frage": "Wie heißt die Konstante, die die Teilchenzahl in einem Mol angibt?",
        "antworten": [
          "avogadro",
          "avogadro-konstante"
        ],
        "loesung": "Die Avogadro-Konstante"
      },
      {
        "frage": "Schätzfrage: Wie schnell ist Licht im Vakuum?",
        "schaetzfrage": true,
        "loesung": "rund 300.000 Kilometer pro Sekunde"
      },
      {
        "frage": "Schätzfrage: Wie weit ist die Sonne von der Erde entfernt?",
        "schaetzfrage": true,
        "loesung": "rund 150 Millionen Kilometer"
      },
      {
        "frage": "Wie heißt die Einheit für die Aktivität radioaktiver Stoffe?",
        "antworten": [
          "becquerel"
        ],
        "loesung": "Das Becquerel"
      },
      {
        "frage": "Wie heißt die Einheit für die Strahlendosis beim Menschen?",
        "antworten": [
          "sievert"
        ],
        "loesung": "Das Sievert"
      },
      {
        "frage": "Wie heißt die Einheit der elektrischen Ladung?",
        "antworten": [
          "coulomb"
        ],
        "loesung": "Das Coulomb"
      },
      {
        "frage": "Welches Element hat das Symbol K?",
        "antworten": [
          "kalium"
        ],
        "loesung": "Kalium"
      },
      {
        "frage": "Welches Element hat das Symbol Pb?",
        "antworten": [
          "blei"
        ],
        "loesung": "Blei"
      },
      {
        "frage": "Welche Zahl gibt die Anzahl der Protonen eines Elements an?",
        "antworten": [
          "ordnungszahl",
          "kernladungszahl"
        ],
        "loesung": "Die Ordnungszahl"
      },
      {
        "frage": "Wer ordnete die Elemente erstmals nach steigender Masse zu einem System?",
        "antworten": [
          "mendelejew",
          "dmitri mendelejew"
        ],
        "loesung": "Dmitri Mendelejew"
      },
      {
        "frage": "Wie heißt das Prinzip, nach dem Ort und Impuls nicht gleichzeitig genau bestimmbar sind?",
        "antworten": [
          "unschärferelation",
          "heisenberg"
        ],
        "loesung": "Die Unschärferelation"
      },
      {
        "frage": "Wie heißt die Theorie zur Entstehung des Universums?",
        "antworten": [
          "urknall",
          "urknalltheorie",
          "big bang"
        ],
        "loesung": "Die Urknalltheorie"
      },
      {
        "frage": "Wie nennt man Materie, die nicht leuchtet und sich nur über ihre Schwerkraft bemerkbar macht?",
        "antworten": [
          "dunkle materie"
        ],
        "loesung": "Dunkle Materie"
      }
    ]
  }
};
