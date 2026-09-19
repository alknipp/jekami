/* ------------------------------------------------------------
   Jekami Quiz - Themengebiet: Sport

   Aufbau einer normalen Frage:
     { frage: "...", antworten: ["variante","variante"], loesung: "..." }
     optional: zahlenbereich: [min, max]

   Schaetzfrage:
     { frage: "Schaetzfrage: ...", schaetzfrage: true, loesung: "rund 105 Meter" }

   Ziel: mindestens 20 Fragen je Altersstufe, davon 2 bis 3 Schaetzfragen.
   Reihenfolge egal - die App mischt bei jeder Runde.
   Regeln und Alterskalibrierung stehen in CLAUDE.md.
   ------------------------------------------------------------ */

JEKAMI_FRAGEN.sport = {
  "name": "Sport",
  "symbol": "⚽",
  "stufen": {
    "grundschule": [
      {
        "frage": "Wie viele Räder hat ein normales Fahrrad?",
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
        "frage": "Wie heißt der Sport, bei dem man sich im Wasser fortbewegt?",
        "antworten": [
          "schwimmen"
        ],
        "loesung": "Schwimmen"
      },
      {
        "frage": "Bei welcher Sportart springt man über ein Seil?",
        "antworten": [
          "seilspringen",
          "seilhüpfen"
        ],
        "loesung": "Seilspringen"
      },
      {
        "frage": "Wie nennt man es beim Fußball, wenn der Ball ins Netz geht?",
        "antworten": [
          "tor",
          "treffer"
        ],
        "loesung": "Ein Tor"
      },
      {
        "frage": "Mit welchem Körperteil darf nur der Torwart den Ball fangen?",
        "antworten": [
          "hand",
          "händen",
          "hände"
        ],
        "loesung": "Mit den Händen"
      },
      {
        "frage": "Wie viele Spieler einer Mannschaft stehen beim Fußball auf dem Feld?",
        "antworten": [
          "11",
          "elf"
        ],
        "loesung": "11",
        "zahlenbereich": [
          11,
          11
        ]
      },
      {
        "frage": "Wie viele Tore stehen auf einem Fußballfeld?",
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
        "frage": "Wie viele Ringe hat das Zeichen der Olympischen Spiele?",
        "antworten": [
          "5",
          "fünf"
        ],
        "loesung": "5",
        "zahlenbereich": [
          5,
          5
        ]
      },
      {
        "frage": "Welche Farbe hat die Karte, die es beim Fußball für eine sehr schlimme Regelverletzung gibt?",
        "antworten": [
          "rot",
          "rote karte"
        ],
        "loesung": "Rot"
      },
      {
        "frage": "Womit spielt man Tennis?",
        "antworten": [
          "schläger",
          "tennisschläger"
        ],
        "loesung": "Mit einem Schläger"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man auf Schnee den Berg hinunterfährt?",
        "antworten": [
          "skifahren",
          "ski",
          "skilaufen"
        ],
        "loesung": "Skifahren"
      },
      {
        "frage": "Bei welchem Spiel wirft man den Ball in einen Korb?",
        "antworten": [
          "basketball"
        ],
        "loesung": "Basketball"
      },
      {
        "frage": "Wie heißt die Sportart, bei der zwei Mannschaften den Ball über ein Netz schlagen?",
        "antworten": [
          "volleyball"
        ],
        "loesung": "Volleyball"
      },
      {
        "frage": "Was zieht man an den Füßen an, um übers Eis zu laufen?",
        "antworten": [
          "schlittschuhe"
        ],
        "loesung": "Schlittschuhe"
      },
      {
        "frage": "Wie nennt man den Anfang eines Rennens?",
        "antworten": [
          "start"
        ],
        "loesung": "Der Start"
      },
      {
        "frage": "Wie heißt die Linie, an der ein Rennen zu Ende ist?",
        "antworten": [
          "ziel",
          "ziellinie"
        ],
        "loesung": "Die Ziellinie"
      },
      {
        "frage": "Auf welchem Tier sitzt man beim Reiten?",
        "antworten": [
          "pferd",
          "pony"
        ],
        "loesung": "Auf einem Pferd"
      },
      {
        "frage": "Wie heißt das Turngerät, über das man im Sportunterricht springt?",
        "antworten": [
          "bock",
          "kasten",
          "sprungkasten"
        ],
        "loesung": "Bock oder Kasten"
      },
      {
        "frage": "Schätzfrage: Wie lang ist das Becken in einem normalen Hallenbad?",
        "schaetzfrage": true,
        "loesung": "25 Meter"
      },
      {
        "frage": "Schätzfrage: Wie schwer ist ein Fußball?",
        "schaetzfrage": true,
        "loesung": "rund 430 Gramm"
      }
    ],
    "unterstufe": [
      {
        "frage": "Alle wie viele Jahre finden die Olympischen Sommerspiele statt?",
        "antworten": [
          "4",
          "vier"
        ],
        "loesung": "Alle 4 Jahre",
        "zahlenbereich": [
          4,
          4
        ]
      },
      {
        "frage": "Wie viele Spieler einer Mannschaft stehen beim Basketball auf dem Feld?",
        "antworten": [
          "5",
          "fünf"
        ],
        "loesung": "5",
        "zahlenbereich": [
          5,
          5
        ]
      },
      {
        "frage": "Wie viele Spieler einer Volleyballmannschaft stehen auf dem Feld?",
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
        "frage": "Wie viele Spieler einer Handballmannschaft stehen auf dem Feld?",
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
        "frage": "Welches Land ist mit fünf Titeln Fußball-Rekordweltmeister?",
        "antworten": [
          "brasilien"
        ],
        "loesung": "Brasilien"
      },
      {
        "frage": "Wie viele Kilometer ist ein Marathon lang?",
        "antworten": [
          "42,195",
          "42"
        ],
        "loesung": "42,195 Kilometer",
        "zahlenbereich": [
          42,
          43
        ]
      },
      {
        "frage": "In welchem Land fanden die Olympischen Winterspiele 2026 statt?",
        "antworten": [
          "italien"
        ],
        "loesung": "Italien"
      },
      {
        "frage": "Wie viele Sätze muss ein Mann bei einem Grand-Slam-Turnier gewinnen, um das Match zu gewinnen?",
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
        "frage": "Wie hoch hängt ein Basketballkorb über dem Boden?",
        "antworten": [
          "3,05 meter",
          "3 meter"
        ],
        "loesung": "3,05 Meter",
        "zahlenbereich": [
          2.9,
          3.2
        ]
      },
      {
        "frage": "Wie lange dauert ein Fußballspiel ohne Verlängerung?",
        "antworten": [
          "90",
          "neunzig"
        ],
        "loesung": "90 Minuten",
        "zahlenbereich": [
          90,
          90
        ]
      },
      {
        "frage": "Wie viele Punkte bringt beim Basketball ein Wurf hinter der Dreierlinie?",
        "antworten": [
          "3",
          "drei"
        ],
        "loesung": "3 Punkte",
        "zahlenbereich": [
          3,
          3
        ]
      },
      {
        "frage": "Wie oft darf eine Volleyballmannschaft den Ball berühren, bevor er über das Netz muss?",
        "antworten": [
          "3",
          "drei"
        ],
        "loesung": "3 Mal",
        "zahlenbereich": [
          3,
          3
        ]
      },
      {
        "frage": "Wie heißt die olympische Disziplin aus Schwimmen, Radfahren und Laufen?",
        "antworten": [
          "triathlon"
        ],
        "loesung": "Triathlon"
      },
      {
        "frage": "In welcher Sportart wird die Tour de France ausgetragen?",
        "antworten": [
          "radsport",
          "radfahren",
          "radrennen"
        ],
        "loesung": "Im Radsport"
      },
      {
        "frage": "Wie heißt die Leichtathletik-Disziplin, bei der man rückwärts über eine Latte springt?",
        "antworten": [
          "hochsprung"
        ],
        "loesung": "Hochsprung"
      },
      {
        "frage": "Wie heißt die Strafe beim Fußball für ein Foul im Strafraum?",
        "antworten": [
          "elfmeter",
          "strafstoß"
        ],
        "loesung": "Ein Elfmeter"
      },
      {
        "frage": "Welche Farbe hat ein Tennisball meistens?",
        "antworten": [
          "gelb",
          "grün"
        ],
        "loesung": "Gelb"
      },
      {
        "frage": "Wie viele Bahnen schwimmt man bei 100 Metern in einem 50-Meter-Becken?",
        "antworten": [
          "2",
          "zwei"
        ],
        "loesung": "2 Bahnen",
        "zahlenbereich": [
          2,
          2
        ]
      },
      {
        "frage": "Schätzfrage: Wie lang ist ein Fußballfeld im Profibereich?",
        "schaetzfrage": true,
        "loesung": "rund 105 Meter"
      },
      {
        "frage": "Schätzfrage: Wie schnell fährt ein Radprofi bei einem flachen Zeitfahren im Schnitt?",
        "schaetzfrage": true,
        "loesung": "rund 50 km/h"
      }
    ],
    "mittelstufe": [],
    "erwachsene": [
      {
        "frage": "Welche Sportart wird in Wimbledon gespielt?",
        "antworten": [
          "tennis"
        ],
        "loesung": "Tennis"
      },
      {
        "frage": "Welches Trikot trägt der Führende der Gesamtwertung bei der Tour de France?",
        "antworten": [
          "gelbes trikot",
          "gelb",
          "maillot jaune"
        ],
        "loesung": "Das gelbe Trikot"
      },
      {
        "frage": "Wie oft wurde Deutschland bisher Fußball-Weltmeister?",
        "antworten": [
          "4",
          "vier",
          "viermal"
        ],
        "loesung": "4 Mal",
        "zahlenbereich": [
          4,
          4
        ]
      },
      {
        "frage": "In welchen beiden Orten fanden die Olympischen Winterspiele 2026 statt?",
        "antworten": [
          "mailand",
          "cortina",
          "mailand und cortina",
          "milano cortina"
        ],
        "loesung": "In Mailand und Cortina d'Ampezzo"
      },
      {
        "frage": "Welches Land wurde 2026 Fußball-Weltmeister?",
        "antworten": [
          "spanien"
        ],
        "loesung": "Spanien"
      },
      {
        "frage": "Welche Nation gewann die Fußball-Europameisterschaft 2024 in Deutschland?",
        "antworten": [
          "spanien"
        ],
        "loesung": "Spanien"
      },
      {
        "frage": "Über wie viele Runden geht ein Profi-Boxkampf um einen Weltmeistertitel maximal?",
        "antworten": [
          "12",
          "zwölf"
        ],
        "loesung": "12 Runden",
        "zahlenbereich": [
          12,
          12
        ]
      },
      {
        "frage": "Welcher Kenianer unterbot 2026 in London erstmals offiziell die Zwei-Stunden-Marke im Marathon?",
        "antworten": [
          "sawe"
        ],
        "loesung": "Sabastian Sawe"
      },
      {
        "frage": "Wie viele Spieler einer Eishockeymannschaft stehen auf dem Eis?",
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
        "frage": "In welcher Stadt fanden 1896 die ersten modernen Olympischen Spiele statt?",
        "antworten": [
          "athen"
        ],
        "loesung": "In Athen"
      },
      {
        "frage": "Wie viele Löcher hat eine vollständige Golfrunde?",
        "antworten": [
          "18",
          "achtzehn"
        ],
        "loesung": "18",
        "zahlenbereich": [
          18,
          18
        ]
      },
      {
        "frage": "Wie heißt der Fußballwettbewerb der besten europäischen Vereine?",
        "antworten": [
          "champions league"
        ],
        "loesung": "Die Champions League"
      },
      {
        "frage": "Wie heißt die höchste deutsche Fußballliga?",
        "antworten": [
          "bundesliga"
        ],
        "loesung": "Die Bundesliga"
      },
      {
        "frage": "Welcher Schwimmer gewann 2008 in Peking achtmal olympisches Gold?",
        "antworten": [
          "phelps"
        ],
        "loesung": "Michael Phelps"
      },
      {
        "frage": "Wie oft wurde Michael Schumacher Formel-1-Weltmeister?",
        "antworten": [
          "7",
          "sieben"
        ],
        "loesung": "7 Mal",
        "zahlenbereich": [
          7,
          7
        ]
      },
      {
        "frage": "In welchem Jahr fand die Fußball-WM in Deutschland statt, das Sommermärchen?",
        "antworten": [
          "2006"
        ],
        "loesung": "2006",
        "zahlenbereich": [
          2006,
          2006
        ]
      },
      {
        "frage": "Wie viele Punkte bringt ein Touchdown im American Football?",
        "antworten": [
          "6",
          "sechs"
        ],
        "loesung": "6 Punkte",
        "zahlenbereich": [
          6,
          6
        ]
      },
      {
        "frage": "Wie heißt das berühmte 24-Stunden-Autorennen in Frankreich?",
        "antworten": [
          "le mans",
          "24 stunden von le mans"
        ],
        "loesung": "Die 24 Stunden von Le Mans"
      },
      {
        "frage": "Schätzfrage: Wie viele Kilometer legt das Feld bei der Tour de France insgesamt zurück?",
        "schaetzfrage": true,
        "loesung": "rund 3350 Kilometer"
      },
      {
        "frage": "Schätzfrage: Wie viele Zuschauer fasst das Dortmunder Stadion?",
        "schaetzfrage": true,
        "loesung": "rund 81.000"
      }
    ]
  }
};
