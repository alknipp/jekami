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
      },
      {
        "frage": "Mit welchem Körperteil köpft man einen Ball?",
        "antworten": [
          "kopf"
        ],
        "loesung": "Mit dem Kopf"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man auf einem Brett über Wellen fährt?",
        "antworten": [
          "surfen",
          "wellenreiten"
        ],
        "loesung": "Surfen"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man auf einem Brett den Schneeberg hinunterfährt?",
        "antworten": [
          "snowboarden",
          "snowboard"
        ],
        "loesung": "Snowboarden"
      },
      {
        "frage": "Was setzt man beim Radfahren zum Schutz auf den Kopf?",
        "antworten": [
          "helm",
          "fahrradhelm"
        ],
        "loesung": "Einen Helm"
      },
      {
        "frage": "Wie heißt die Disziplin, bei der man so weit wie möglich springt?",
        "antworten": [
          "weitsprung"
        ],
        "loesung": "Der Weitsprung"
      },
      {
        "frage": "Wie heißt die Disziplin, bei der man so hoch wie möglich springt?",
        "antworten": [
          "hochsprung"
        ],
        "loesung": "Der Hochsprung"
      },
      {
        "frage": "Welche Medaille bekommt der Sieger bei Olympia?",
        "antworten": [
          "gold",
          "goldmedaille"
        ],
        "loesung": "Die Goldmedaille"
      },
      {
        "frage": "Welche Medaille bekommt der Zweite?",
        "antworten": [
          "silber",
          "silbermedaille"
        ],
        "loesung": "Silber"
      },
      {
        "frage": "Welche Medaille bekommt der Dritte?",
        "antworten": [
          "bronze",
          "bronzemedaille"
        ],
        "loesung": "Bronze"
      },
      {
        "frage": "Wie heißt die Person, die beim Fußball auf die Regeln achtet?",
        "antworten": [
          "schiedsrichter"
        ],
        "loesung": "Der Schiedsrichter"
      },
      {
        "frage": "Womit gibt der Schiedsrichter ein Signal?",
        "antworten": [
          "pfeife",
          "trillerpfeife"
        ],
        "loesung": "Mit einer Pfeife"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man einen kleinen Ball über ein Netz auf einem Tisch spielt?",
        "antworten": [
          "tischtennis",
          "pingpong"
        ],
        "loesung": "Tischtennis"
      },
      {
        "frage": "Wie heißt der Sport, bei dem ein Federball über ein Netz geschlagen wird?",
        "antworten": [
          "badminton",
          "federball"
        ],
        "loesung": "Badminton"
      },
      {
        "frage": "Wie viele Spieler stehen sich beim Tennis-Einzel gegenüber?",
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
        "frage": "Womit fährt man beim Rodeln den Hügel hinunter?",
        "antworten": [
          "schlitten"
        ],
        "loesung": "Mit einem Schlitten"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man an einer Wand hochklettert?",
        "antworten": [
          "klettern"
        ],
        "loesung": "Klettern"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man Rollen unter den Schuhen hat?",
        "antworten": [
          "inlineskaten",
          "rollschuhlaufen",
          "skaten"
        ],
        "loesung": "Inlineskaten"
      },
      {
        "frage": "Wie nennt man eine Gruppe, die zusammen Sport macht?",
        "antworten": [
          "mannschaft",
          "team",
          "verein"
        ],
        "loesung": "Eine Mannschaft"
      },
      {
        "frage": "Wie heißt das Gebäude, in dem man drinnen Sport treibt?",
        "antworten": [
          "turnhalle",
          "sporthalle"
        ],
        "loesung": "Die Turnhalle"
      },
      {
        "frage": "Welchen Untergrund hat ein Fußballplatz?",
        "antworten": [
          "rasen",
          "gras"
        ],
        "loesung": "Rasen"
      },
      {
        "frage": "Wie viele Minuten dauert eine Halbzeit beim Fußball?",
        "antworten": [
          "45",
          "fünfundvierzig"
        ],
        "loesung": "45 Minuten",
        "zahlenbereich": [
          45,
          45
        ]
      },
      {
        "frage": "Wie viele Halbzeiten hat ein Fußballspiel?",
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
        "frage": "Wie nennt man die Übungen, die man vor dem Sport macht?",
        "antworten": [
          "aufwärmen",
          "warm machen",
          "dehnen"
        ],
        "loesung": "Aufwärmen"
      },
      {
        "frage": "Wie heißt das Turngerät, an dem man sich mit den Händen hochzieht und schwingt?",
        "antworten": [
          "reck"
        ],
        "loesung": "Das Reck"
      },
      {
        "frage": "Wie heißt das Turngerät mit zwei parallelen Holmen?",
        "antworten": [
          "barren"
        ],
        "loesung": "Der Barren"
      },
      {
        "frage": "Wie heißt die dicke Matte, auf der man beim Turnen landet?",
        "antworten": [
          "weichbodenmatte",
          "matte"
        ],
        "loesung": "Die Weichbodenmatte"
      },
      {
        "frage": "Wie heißt der Sport, bei dem zwei Menschen mit Handschuhen boxen?",
        "antworten": [
          "boxen"
        ],
        "loesung": "Boxen"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man mit einem Ball Kegel umwirft?",
        "antworten": [
          "bowling",
          "kegeln"
        ],
        "loesung": "Bowling"
      },
      {
        "frage": "Schätzfrage: Wie lang ist eine Runde auf der Laufbahn im Stadion?",
        "schaetzfrage": true,
        "loesung": "400 Meter"
      },
      {
        "frage": "Schätzfrage: Wie hoch ist ein Fußballtor?",
        "schaetzfrage": true,
        "loesung": "2,44 Meter"
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
        "frage": "Wie viele Spieler einer Basketballmannschaft stehen auf dem Feld?",
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
        "frage": "Welche Farbe hat ein Basketball meistens?",
        "antworten": [
          "orange"
        ],
        "loesung": "Orange"
      },
      {
        "frage": "Wie nennt man den Wurf von der Seitenlinie beim Fußball?",
        "antworten": [
          "einwurf"
        ],
        "loesung": "Der Einwurf"
      },
      {
        "frage": "Wie nennt man den Stoß aus der Spielfeldecke beim Fußball?",
        "antworten": [
          "eckball",
          "ecke",
          "eckstoß"
        ],
        "loesung": "Der Eckball"
      },
      {
        "frage": "Wie nennt man es, wenn der Ball das Spielfeld verlässt?",
        "antworten": [
          "aus",
          "im aus"
        ],
        "loesung": "Aus"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man Pfeile auf eine runde Scheibe wirft?",
        "antworten": [
          "darts",
          "dart"
        ],
        "loesung": "Darts"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man mit einem Paddel ein Boot bewegt?",
        "antworten": [
          "kanu",
          "kanufahren",
          "paddeln",
          "rudern"
        ],
        "loesung": "Kanufahren"
      },
      {
        "frage": "Wie heißt der Sport, bei dem schwere Gewichte gehoben werden?",
        "antworten": [
          "gewichtheben"
        ],
        "loesung": "Gewichtheben"
      },
      {
        "frage": "Wie heißt der Lauf über kleine Hindernisse auf der Bahn?",
        "antworten": [
          "hürdenlauf",
          "hürden"
        ],
        "loesung": "Der Hürdenlauf"
      },
      {
        "frage": "Wie heißt der Sport mit Schläger und Puck auf dem Eis?",
        "antworten": [
          "eishockey"
        ],
        "loesung": "Eishockey"
      },
      {
        "frage": "Wie heißt der Sport, bei dem man einen kleinen Ball in Löcher schlägt?",
        "antworten": [
          "golf"
        ],
        "loesung": "Golf"
      },
      {
        "frage": "Wie nennt man den Ersten in einem Wettkampf?",
        "antworten": [
          "sieger",
          "gewinner"
        ],
        "loesung": "Der Sieger"
      },
      {
        "frage": "Wie nennt man ein Spiel, das mit gleichem Spielstand endet?",
        "antworten": [
          "unentschieden"
        ],
        "loesung": "Unentschieden"
      },
      {
        "frage": "Wie nennt man die Menschen, die beim Spiel zuschauen?",
        "antworten": [
          "zuschauer",
          "publikum"
        ],
        "loesung": "Die Zuschauer"
      },
      {
        "frage": "Wie nennt man die Person, die eine Mannschaft anleitet?",
        "antworten": [
          "trainer",
          "trainerin"
        ],
        "loesung": "Der Trainer"
      },
      {
        "frage": "Wie nennt man den Anführer einer Mannschaft auf dem Feld?",
        "antworten": [
          "kapitän"
        ],
        "loesung": "Der Kapitän"
      },
      {
        "frage": "Was zieht eine Mannschaft an, damit man sie erkennt?",
        "antworten": [
          "trikot",
          "trikots"
        ],
        "loesung": "Ein Trikot"
      },
      {
        "frage": "Welche Rückennummer trägt ein Torwart oft?",
        "antworten": [
          "1",
          "eins"
        ],
        "loesung": "Die 1",
        "zahlenbereich": [
          1,
          1
        ]
      },
      {
        "frage": "Wie nennt man Schuhe mit Stollen unter der Sohle?",
        "antworten": [
          "fußballschuhe",
          "stollenschuhe"
        ],
        "loesung": "Fußballschuhe"
      },
      {
        "frage": "Wie nennt man das Schwimmen auf dem Rücken?",
        "antworten": [
          "rückenschwimmen",
          "rücken"
        ],
        "loesung": "Rückenschwimmen"
      },
      {
        "frage": "Wie nennt man das Schwimmen mit Froschbeinen?",
        "antworten": [
          "brustschwimmen",
          "brust"
        ],
        "loesung": "Brustschwimmen"
      },
      {
        "frage": "Wie heißt das erste Schwimmabzeichen für Kinder?",
        "antworten": [
          "seepferdchen"
        ],
        "loesung": "Das Seepferdchen"
      },
      {
        "frage": "Wie nennt man Bewegung zur Musik?",
        "antworten": [
          "tanzen",
          "tanz"
        ],
        "loesung": "Tanzen"
      },
      {
        "frage": "Wie nennt man einen Purzelbaum im Sportunterricht?",
        "antworten": [
          "rolle vorwärts",
          "rolle",
          "purzelbaum"
        ],
        "loesung": "Die Rolle vorwärts"
      },
      {
        "frage": "Wie heißt der Sprung, bei dem man sich in der Luft überschlägt?",
        "antworten": [
          "salto"
        ],
        "loesung": "Der Salto"
      },
      {
        "frage": "Wie nennt man das Springen mit einer langen Stange über eine Latte?",
        "antworten": [
          "stabhochsprung"
        ],
        "loesung": "Der Stabhochsprung"
      },
      {
        "frage": "Wie nennt man das Reiten über Hindernisse?",
        "antworten": [
          "springreiten"
        ],
        "loesung": "Springreiten"
      },
      {
        "frage": "Wie nennt man Radfahren im Gelände?",
        "antworten": [
          "mountainbiken",
          "mountainbike"
        ],
        "loesung": "Mountainbiken"
      },
      {
        "frage": "Was schützt beim Skaten die Knie?",
        "antworten": [
          "knieschoner",
          "schoner",
          "protektoren"
        ],
        "loesung": "Knieschoner"
      },
      {
        "frage": "Wie heißt das Spiel, bei dem man sich gegenseitig mit dem Ball abwirft?",
        "antworten": [
          "völkerball"
        ],
        "loesung": "Völkerball"
      },
      {
        "frage": "Wie heißt das Spiel, bei dem einer fängt und alle weglaufen?",
        "antworten": [
          "fangen",
          "fangis",
          "fangspiel"
        ],
        "loesung": "Fangen"
      },
      {
        "frage": "Wie heißt das Spiel, bei dem zwei Mannschaften an einem Seil ziehen?",
        "antworten": [
          "tauziehen"
        ],
        "loesung": "Tauziehen"
      },
      {
        "frage": "Wie nennt man das Schwimmen unter Wasser mit Maske?",
        "antworten": [
          "tauchen"
        ],
        "loesung": "Tauchen"
      },
      {
        "frage": "Wie heißt das Netz hinter dem Fußballtor?",
        "antworten": [
          "tornetz",
          "netz"
        ],
        "loesung": "Das Tornetz"
      },
      {
        "frage": "Wie heißt die Pause zwischen den beiden Halbzeiten?",
        "antworten": [
          "halbzeitpause",
          "halbzeit",
          "pause"
        ],
        "loesung": "Die Halbzeitpause"
      },
      {
        "frage": "Welche Sportart wird auf einer Bahn mit Kugeln und neun Kegeln gespielt?",
        "antworten": [
          "kegeln",
          "bowling"
        ],
        "loesung": "Kegeln"
      },
      {
        "frage": "Wie heißt das Turnen an einem Seil, das von der Decke hängt?",
        "antworten": [
          "seilklettern",
          "klettern"
        ],
        "loesung": "Seilklettern"
      },
      {
        "frage": "Wie nennt man das Werfen eines kleinen Balls möglichst weit?",
        "antworten": [
          "schlagballwurf",
          "weitwurf",
          "ballwurf"
        ],
        "loesung": "Der Weitwurf"
      },
      {
        "frage": "Wie nennt man die Linie, hinter der man beim Werfen stehen bleiben muss?",
        "antworten": [
          "abwurflinie",
          "linie"
        ],
        "loesung": "Die Abwurflinie"
      },
      {
        "frage": "Wie nennt man den Sport, bei dem man auf Händen läuft — als Übung im Turnen?",
        "antworten": [
          "handstand",
          "handstandlaufen"
        ],
        "loesung": "Der Handstand"
      },
      {
        "frage": "Wie heißt das Gerät, auf dem man im Turnen balanciert?",
        "antworten": [
          "schwebebalken",
          "balken"
        ],
        "loesung": "Der Schwebebalken"
      },
      {
        "frage": "Wie nennt man ein Spiel ohne Sieger und Verlierer?",
        "antworten": [
          "unentschieden",
          "remis"
        ],
        "loesung": "Unentschieden"
      },
      {
        "frage": "Wie heißt die Sportart mit Ball und Korb am Strand — nein, wie heißt Volleyball am Strand?",
        "antworten": [
          "beachvolleyball"
        ],
        "loesung": "Beachvolleyball"
      },
      {
        "frage": "Wie nennt man eine Mannschaft, die gegen eine andere spielt?",
        "antworten": [
          "gegner",
          "gegnerische mannschaft"
        ],
        "loesung": "Der Gegner"
      },
      {
        "frage": "Wie nennt man das Ende eines Spiels?",
        "antworten": [
          "schlusspfiff",
          "abpfiff",
          "ende"
        ],
        "loesung": "Der Abpfiff"
      },
      {
        "frage": "Wie nennt man den Beginn eines Fußballspiels?",
        "antworten": [
          "anpfiff",
          "anstoß"
        ],
        "loesung": "Der Anpfiff"
      },
      {
        "frage": "Schätzfrage: Wie viele Spieler stehen bei einem Fußballspiel insgesamt auf dem Feld?",
        "schaetzfrage": true,
        "loesung": "22 Spieler"
      },
      {
        "frage": "Schätzfrage: Wie schwer ist ein Basketball?",
        "schaetzfrage": true,
        "loesung": "rund 600 Gramm"
      },
      {
        "frage": "Schätzfrage: Wie viele Kilometer läuft man bei einem Marathon?",
        "schaetzfrage": true,
        "loesung": "gut 42 Kilometer"
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
      },
      {
        "frage": "Welche Karte bedeutet beim Fußball eine Verwarnung?",
        "antworten": [
          "gelbe karte",
          "gelb"
        ],
        "loesung": "Die Gelbe Karte"
      },
      {
        "frage": "Wie lang ist die Verlängerung im Fußball insgesamt?",
        "antworten": [
          "30",
          "dreißig"
        ],
        "loesung": "30 Minuten",
        "zahlenbereich": [
          30,
          30
        ]
      },
      {
        "frage": "Wie viele Schwimmstile gibt es bei Wettkämpfen?",
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
        "frage": "Nenne einen olympischen Schwimmstil.",
        "antworten": [
          "kraul",
          "freistil",
          "brust",
          "rücken",
          "delfin",
          "schmetterling"
        ],
        "loesung": "Zum Beispiel Brustschwimmen"
      },
      {
        "frage": "Aus wie vielen Disziplinen besteht ein Zehnkampf?",
        "antworten": [
          "10",
          "zehn"
        ],
        "loesung": "10",
        "zahlenbereich": [
          10,
          10
        ]
      },
      {
        "frage": "Aus wie vielen Disziplinen besteht ein Siebenkampf?",
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
        "frage": "Wie heißt die Wurfdisziplin mit einer flachen Scheibe?",
        "antworten": [
          "diskus",
          "diskuswurf"
        ],
        "loesung": "Der Diskuswurf"
      },
      {
        "frage": "Wie heißt die Wurfdisziplin mit einem langen Stab mit Spitze?",
        "antworten": [
          "speerwurf",
          "speer"
        ],
        "loesung": "Der Speerwurf"
      },
      {
        "frage": "Wie hoch hängt das Volleyballnetz bei den Männern?",
        "antworten": [
          "2,43",
          "2,43 meter"
        ],
        "loesung": "2,43 Meter",
        "zahlenbereich": [
          2.3,
          2.5
        ]
      },
      {
        "frage": "Wie viele Sätze muss eine Volleyballmannschaft für den Sieg gewinnen?",
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
        "frage": "Wie viele Punkte braucht man für einen Volleyballsatz?",
        "antworten": [
          "25",
          "fünfundzwanzig"
        ],
        "loesung": "25",
        "zahlenbereich": [
          25,
          25
        ]
      },
      {
        "frage": "Welcher Punktestand folgt beim Tennis auf null?",
        "antworten": [
          "15",
          "fünfzehn"
        ],
        "loesung": "15",
        "zahlenbereich": [
          15,
          15
        ]
      },
      {
        "frage": "Wie heißt der Gleichstand beim Tennis bei 40 zu 40?",
        "antworten": [
          "einstand",
          "deuce"
        ],
        "loesung": "Einstand"
      },
      {
        "frage": "Wie viele Spiele braucht man mindestens für einen Tennissatz?",
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
        "frage": "Wie heißt die italienische Landesrundfahrt im Radsport?",
        "antworten": [
          "giro",
          "giro d italia"
        ],
        "loesung": "Der Giro d'Italia"
      },
      {
        "frage": "Wie heißt die Sportart, bei der mit Pfeil und Bogen auf eine Scheibe geschossen wird?",
        "antworten": [
          "bogenschießen"
        ],
        "loesung": "Bogenschießen"
      },
      {
        "frage": "Wie heißt die Kombination aus Skilanglauf und Schießen?",
        "antworten": [
          "biathlon"
        ],
        "loesung": "Biathlon"
      },
      {
        "frage": "Wie heißt die Kombination aus Skispringen und Langlauf?",
        "antworten": [
          "nordische kombination"
        ],
        "loesung": "Die Nordische Kombination"
      },
      {
        "frage": "Wie lange dauert ein Drittel im Eishockey?",
        "antworten": [
          "20",
          "zwanzig"
        ],
        "loesung": "20 Minuten",
        "zahlenbereich": [
          20,
          20
        ]
      },
      {
        "frage": "Aus wie vielen Dritteln besteht ein Eishockeyspiel?",
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
        "frage": "Wie heißt die Hartgummischeibe im Eishockey?",
        "antworten": [
          "puck"
        ],
        "loesung": "Der Puck"
      },
      {
        "frage": "Wie heißt der Schlag beim Golf, mit dem man den Ball ins Loch rollt?",
        "antworten": [
          "putt",
          "putten"
        ],
        "loesung": "Der Putt"
      },
      {
        "frage": "Wie heißt der japanische Kampfsport mit Würfen und Haltegriffen?",
        "antworten": [
          "judo"
        ],
        "loesung": "Judo"
      },
      {
        "frage": "Wie heißt der koreanische Kampfsport mit hohen Fußtritten?",
        "antworten": [
          "taekwondo"
        ],
        "loesung": "Taekwondo"
      },
      {
        "frage": "Wie viele Spieler hat eine Eishockeymannschaft auf dem Eis?",
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
        "frage": "Wie nennt man den Startsprung ins Wasser beim Schwimmwettkampf?",
        "antworten": [
          "startsprung",
          "kopfsprung"
        ],
        "loesung": "Der Startsprung"
      },
      {
        "frage": "Wie heißt der Wettkampf im Reiten über Hindernisse?",
        "antworten": [
          "springreiten"
        ],
        "loesung": "Das Springreiten"
      },
      {
        "frage": "Wie heißt das Turngerät, an dem nur Männer turnen und das aus zwei hängenden Ringen besteht?",
        "antworten": [
          "ringe"
        ],
        "loesung": "Die Ringe"
      },
      {
        "frage": "Schätzfrage: Wie weit springen die besten Weitspringer der Welt?",
        "schaetzfrage": true,
        "loesung": "rund 8,95 Meter"
      },
      {
        "frage": "Schätzfrage: Wie schnell ist der Aufschlag eines Tennisprofis höchstens?",
        "schaetzfrage": true,
        "loesung": "rund 250 km/h"
      },
      {
        "frage": "Wie viele Spieler hat ein Beachvolleyball-Team?",
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
        "frage": "Wie viele Sätze hat ein Volleyballspiel höchstens?",
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
        "frage": "Auf wie viele Punkte wird der fünfte Satz im Volleyball gespielt?",
        "antworten": [
          "15",
          "fünfzehn"
        ],
        "loesung": "15",
        "zahlenbereich": [
          15,
          15
        ]
      },
      {
        "frage": "Wie lange dauert ein Viertel im internationalen Basketball?",
        "antworten": [
          "10",
          "zehn"
        ],
        "loesung": "10 Minuten",
        "zahlenbereich": [
          10,
          10
        ]
      },
      {
        "frage": "Wie viele Schritte darf man beim Handball mit dem Ball gehen?",
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
        "frage": "Aus welcher Entfernung wird der Strafwurf im Handball geworfen?",
        "antworten": [
          "7",
          "sieben",
          "7 meter"
        ],
        "loesung": "Aus 7 Metern",
        "zahlenbereich": [
          7,
          7
        ]
      },
      {
        "frage": "Wie viele Minuten dauert eine Zeitstrafe im Handball?",
        "antworten": [
          "2",
          "zwei"
        ],
        "loesung": "2 Minuten",
        "zahlenbereich": [
          2,
          2
        ]
      },
      {
        "frage": "Wie heißt es beim Tennis, wenn beide Aufschläge misslingen?",
        "antworten": [
          "doppelfehler"
        ],
        "loesung": "Ein Doppelfehler"
      },
      {
        "frage": "Wie heißt der Entscheidungssatz beim Tennis bei sechs zu sechs?",
        "antworten": [
          "tiebreak",
          "tie break"
        ],
        "loesung": "Der Tiebreak"
      },
      {
        "frage": "Über wie viele Gewinnsätze spielen Frauen bei Grand Slams?",
        "antworten": [
          "2",
          "zwei"
        ],
        "loesung": "2 Gewinnsätze",
        "zahlenbereich": [
          2,
          2
        ]
      },
      {
        "frage": "Wie viele Spieler einer Baseballmannschaft stehen im Feld?",
        "antworten": [
          "9",
          "neun"
        ],
        "loesung": "9",
        "zahlenbereich": [
          9,
          9
        ]
      },
      {
        "frage": "Wie heißt der Wurf zum Schlagmann im Baseball?",
        "antworten": [
          "pitch"
        ],
        "loesung": "Der Pitch"
      },
      {
        "frage": "Über wie viele Runden geht ein olympischer Boxkampf?",
        "antworten": [
          "3",
          "drei"
        ],
        "loesung": "3 Runden",
        "zahlenbereich": [
          3,
          3
        ]
      },
      {
        "frage": "Wie heißt die schwerste Gewichtsklasse im Boxen?",
        "antworten": [
          "schwergewicht"
        ],
        "loesung": "Das Schwergewicht"
      },
      {
        "frage": "Wie heißt der Kampfsport, bei dem man am Boden ringt und keine Schläge erlaubt sind?",
        "antworten": [
          "ringen"
        ],
        "loesung": "Ringen"
      },
      {
        "frage": "Welche Gürtelfarbe tragen Fortgeschrittene im Judo?",
        "antworten": [
          "schwarz",
          "schwarzer gürtel"
        ],
        "loesung": "Schwarz"
      },
      {
        "frage": "Wie heißt die Skidisziplin mit engen Toren?",
        "antworten": [
          "slalom"
        ],
        "loesung": "Der Slalom"
      },
      {
        "frage": "Wie heißt die schnellste Skidisziplin?",
        "antworten": [
          "abfahrt"
        ],
        "loesung": "Die Abfahrt"
      },
      {
        "frage": "Wie heißt der Eiskanalsport, bei dem man kopfvoran auf dem Schlitten liegt?",
        "antworten": [
          "skeleton"
        ],
        "loesung": "Skeleton"
      },
      {
        "frage": "Wie heißt der Eiskanalsport mit einem geschlossenen Schlitten für zwei oder vier?",
        "antworten": [
          "bob",
          "bobfahren"
        ],
        "loesung": "Bob"
      },
      {
        "frage": "Wie heißt der Sport auf dem Eis mit Steinen und Besen?",
        "antworten": [
          "curling"
        ],
        "loesung": "Curling"
      },
      {
        "frage": "Wie heißt die kürzeste Laufdisziplin der Leichtathletik bei Olympia?",
        "antworten": [
          "100 meter",
          "hundert meter",
          "100 meter lauf"
        ],
        "loesung": "Der 100-Meter-Lauf"
      },
      {
        "frage": "Was wird bei einem Staffellauf übergeben?",
        "antworten": [
          "staffelstab",
          "stab"
        ],
        "loesung": "Der Staffelstab"
      },
      {
        "frage": "Wie heißt die Disziplin mit drei Sprüngen hintereinander?",
        "antworten": [
          "dreisprung"
        ],
        "loesung": "Der Dreisprung"
      },
      {
        "frage": "Wie schwer ist der Diskus bei den Männern?",
        "antworten": [
          "2",
          "zwei",
          "2 kilo"
        ],
        "loesung": "2 Kilogramm",
        "zahlenbereich": [
          2,
          2
        ]
      },
      {
        "frage": "Wie lang ist die kürzeste olympische Schwimmstrecke?",
        "antworten": [
          "50",
          "fünfzig",
          "50 meter"
        ],
        "loesung": "50 Meter",
        "zahlenbereich": [
          50,
          50
        ]
      },
      {
        "frage": "Welcher Schwimmstil ist der schnellste?",
        "antworten": [
          "kraul",
          "freistil"
        ],
        "loesung": "Das Kraulschwimmen"
      },
      {
        "frage": "Mit welchem Stil beginnt das Lagenschwimmen?",
        "antworten": [
          "schmetterling",
          "delfin"
        ],
        "loesung": "Mit Schmetterling"
      },
      {
        "frage": "Wie viele Spieler hat eine Wasserballmannschaft im Wasser?",
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
        "frage": "Wie heißt der Fußballwettbewerb der europäischen Nationalmannschaften?",
        "antworten": [
          "europameisterschaft",
          "em"
        ],
        "loesung": "Die Europameisterschaft"
      },
      {
        "frage": "Alle wie viele Jahre findet die Fußball-Europameisterschaft statt?",
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
        "frage": "Wie viele Mannschaften spielen in der Fußball-Bundesliga?",
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
        "frage": "Wie viele Spiele bestreitet ein Bundesligist in einer Saison?",
        "antworten": [
          "34",
          "vierunddreißig"
        ],
        "loesung": "34",
        "zahlenbereich": [
          34,
          34
        ]
      },
      {
        "frage": "Wie heißt der deutsche Fußball-Pokalwettbewerb?",
        "antworten": [
          "dfb pokal",
          "dfb-pokal",
          "pokal"
        ],
        "loesung": "Der DFB-Pokal"
      },
      {
        "frage": "Wie heißt die Regel, die einen Angreifer hinter der Abwehr bestraft?",
        "antworten": [
          "abseits"
        ],
        "loesung": "Das Abseits"
      },
      {
        "frage": "Wie nennt man das Annehmen und Kontrollieren des Balls?",
        "antworten": [
          "ballannahme",
          "mitnahme"
        ],
        "loesung": "Die Ballannahme"
      },
      {
        "frage": "Wie heißt die Marke am Hang, die beim Skispringen als Zielweite gilt?",
        "antworten": [
          "k punkt",
          "k-punkt"
        ],
        "loesung": "Der K-Punkt"
      },
      {
        "frage": "Wie heißt das Turnier der acht besten Tennisspieler am Saisonende?",
        "antworten": [
          "atp finals",
          "masters",
          "weltmeisterschaft"
        ],
        "loesung": "Die ATP Finals"
      },
      {
        "frage": "Wie nennt man den Wechsel eines Spielers während des Spiels?",
        "antworten": [
          "auswechslung",
          "einwechslung",
          "wechsel"
        ],
        "loesung": "Eine Auswechslung"
      },
      {
        "frage": "Wie nennt man die Mannschaft, die im eigenen Stadion spielt?",
        "antworten": [
          "heimmannschaft",
          "gastgeber"
        ],
        "loesung": "Die Heimmannschaft"
      },
      {
        "frage": "Wie nennt man den Abstieg in die nächsttiefere Liga?",
        "antworten": [
          "abstieg"
        ],
        "loesung": "Der Abstieg"
      },
      {
        "frage": "Wie heißt das Spiel um den Klassenerhalt zwischen zwei Ligen?",
        "antworten": [
          "relegation"
        ],
        "loesung": "Die Relegation"
      },
      {
        "frage": "Wie viele Ringe hat eine Zielscheibe beim Bogenschießen?",
        "antworten": [
          "10",
          "zehn"
        ],
        "loesung": "10",
        "zahlenbereich": [
          10,
          10
        ]
      },
      {
        "frage": "Wie nennt man die Sportart aus Laufen, Schwimmen, Radfahren mit langen Distanzen?",
        "antworten": [
          "triathlon",
          "ironman"
        ],
        "loesung": "Der Triathlon"
      },
      {
        "frage": "Wie heißt die Grundstellung beim Fechten?",
        "antworten": [
          "en garde",
          "grundstellung"
        ],
        "loesung": "En garde"
      },
      {
        "frage": "Wie heißt die Waffe beim Fechten mit biegsamer Klinge?",
        "antworten": [
          "florett",
          "degen",
          "säbel"
        ],
        "loesung": "Das Florett"
      },
      {
        "frage": "Wie nennt man die Höchstleistung eines Sportlers in einer Disziplin?",
        "antworten": [
          "bestleistung",
          "rekord",
          "persönliche bestzeit"
        ],
        "loesung": "Die Bestleistung"
      },
      {
        "frage": "Schätzfrage: Wie viele Runden hat ein Formel-1-Rennen ungefähr?",
        "schaetzfrage": true,
        "loesung": "rund 60 Runden"
      },
      {
        "frage": "Schätzfrage: Wie schnell läuft der Weltrekordhalter die 100 Meter?",
        "schaetzfrage": true,
        "loesung": "9,58 Sekunden"
      },
      {
        "frage": "Schätzfrage: Wie hoch ist der Hochsprung-Weltrekord der Männer?",
        "schaetzfrage": true,
        "loesung": "2,45 Meter"
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
      },
      {
        "frage": "Welcher Verein gewann die meisten Europapokal- und Champions-League-Titel?",
        "antworten": [
          "real madrid",
          "real"
        ],
        "loesung": "Real Madrid"
      },
      {
        "frage": "Wie heißt der deutsche Rekordmeister im Fußball?",
        "antworten": [
          "bayern",
          "bayern münchen",
          "fc bayern"
        ],
        "loesung": "Der FC Bayern München"
      },
      {
        "frage": "In welcher deutschen Stadt fanden 1972 die Olympischen Sommerspiele statt?",
        "antworten": [
          "münchen"
        ],
        "loesung": "In München"
      },
      {
        "frage": "In welchem Jahr fanden die Olympischen Sommerspiele in Berlin statt?",
        "antworten": [
          "1936"
        ],
        "loesung": "1936",
        "zahlenbereich": [
          1936,
          1936
        ]
      },
      {
        "frage": "Wie heißt der älteste Fußballpokalwettbewerb der Welt?",
        "antworten": [
          "fa cup"
        ],
        "loesung": "Der FA Cup"
      },
      {
        "frage": "Wie viele Spieler hat eine Rugby-Union-Mannschaft auf dem Feld?",
        "antworten": [
          "15",
          "fünfzehn"
        ],
        "loesung": "15",
        "zahlenbereich": [
          15,
          15
        ]
      },
      {
        "frage": "Welcher Boxer nannte sich selbst The Greatest?",
        "antworten": [
          "muhammad ali",
          "ali",
          "cassius clay"
        ],
        "loesung": "Muhammad Ali"
      },
      {
        "frage": "Wie heißt die spanische Landesrundfahrt im Radsport?",
        "antworten": [
          "vuelta"
        ],
        "loesung": "Die Vuelta"
      },
      {
        "frage": "In welchem Ort fanden 1924 die ersten Olympischen Winterspiele statt?",
        "antworten": [
          "chamonix"
        ],
        "loesung": "In Chamonix"
      },
      {
        "frage": "Wie nennt man es, wenn ein Spieler alle vier Grand-Slam-Turniere in einem Jahr gewinnt?",
        "antworten": [
          "grand slam",
          "kalender slam",
          "golden slam"
        ],
        "loesung": "Einen Kalender-Grand-Slam"
      }
    ]
  }
};
