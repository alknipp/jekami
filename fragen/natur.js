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
