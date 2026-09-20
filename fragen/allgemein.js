/* ------------------------------------------------------------
   Jekami Quiz - Themengebiet: Allgemeinbildung

   Aufbau einer normalen Frage:
     { frage: "...", antworten: ["variante","variante"], loesung: "..." }
     optional: zahlenbereich: [min, max]

   Schaetzfrage:
     { frage: "Schaetzfrage: ...", schaetzfrage: true, loesung: "rund 105 Meter" }

   Ziel: mindestens 20 Fragen je Altersstufe, davon 2 bis 3 Schaetzfragen.
   Reihenfolge egal - die App mischt bei jeder Runde.
   Regeln und Alterskalibrierung stehen in CLAUDE.md.
   ------------------------------------------------------------ */

JEKAMI_FRAGEN.allgemein = {
  "name": "Allgemeinbildung",
  "symbol": "🧠",
  "stufen": {
    "grundschule": [
      {
        "frage": "Wie heißt das Schulfach, in dem man rechnet?",
        "antworten": [
          "mathematik",
          "mathe"
        ],
        "loesung": "Mathematik"
      },
      {
        "frage": "Wie nennt man den Platz, auf dem ihr in der Pause spielt?",
        "antworten": [
          "schulhof",
          "pausenhof",
          "hof"
        ],
        "loesung": "Schulhof"
      },
      {
        "frage": "Welche Farbe hat der Stift, mit dem Lehrer Fehler anstreichen?",
        "antworten": [
          "rot"
        ],
        "loesung": "Rot"
      },
      {
        "frage": "Wie heißt das Schulfach, in dem man singt?",
        "antworten": [
          "musik"
        ],
        "loesung": "Musik"
      },
      {
        "frage": "Wie heißt das Schulfach, in dem man turnt?",
        "antworten": [
          "sport"
        ],
        "loesung": "Sport"
      },
      {
        "frage": "Wie viele Buchstaben hat das Wort Schule?",
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
        "frage": "Was ergibt acht plus sieben?",
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
        "frage": "Was ergibt zwanzig minus vier?",
        "antworten": [
          "16",
          "sechzehn"
        ],
        "loesung": "16",
        "zahlenbereich": [
          16,
          16
        ]
      },
      {
        "frage": "Was ergibt drei mal vier?",
        "antworten": [
          "12",
          "zwölf"
        ],
        "loesung": "12",
        "zahlenbereich": [
          12,
          12
        ]
      },
      {
        "frage": "Wie viele Buchstaben hat das deutsche Alphabet?",
        "antworten": [
          "26",
          "sechsundzwanzig"
        ],
        "loesung": "26",
        "zahlenbereich": [
          26,
          26
        ]
      },
      {
        "frage": "Welcher Buchstabe kommt im Alphabet nach dem M?",
        "antworten": [
          "n"
        ],
        "loesung": "N"
      },
      {
        "frage": "Wie heißt die große Fläche vorne im Klassenzimmer, auf die geschrieben wird?",
        "antworten": [
          "tafel"
        ],
        "loesung": "Die Tafel"
      },
      {
        "frage": "Wie heißt das Heft, in das man die Hausaufgaben schreibt?",
        "antworten": [
          "hausaufgabenheft"
        ],
        "loesung": "Das Hausaufgabenheft"
      },
      {
        "frage": "Womit malt man im Kunstunterricht mit Wasser?",
        "antworten": [
          "wasserfarben",
          "deckfarben",
          "tuschkasten",
          "farbkasten"
        ],
        "loesung": "Mit Wasserfarben"
      },
      {
        "frage": "An wie vielen Tagen in der Woche geht man normalerweise zur Schule?",
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
        "frage": "Wie nennt man die Person, die vor der Klasse unterrichtet?",
        "antworten": [
          "lehrer",
          "lehrerin"
        ],
        "loesung": "Lehrer oder Lehrerin"
      },
      {
        "frage": "Wie heißt das Zeichen am Ende eines Fragesatzes?",
        "antworten": [
          "fragezeichen"
        ],
        "loesung": "Das Fragezeichen"
      },
      {
        "frage": "Wie nennt man die lange Zeit im Sommer, in der keine Schule ist?",
        "antworten": [
          "sommerferien",
          "ferien"
        ],
        "loesung": "Die Sommerferien"
      },
      {
        "frage": "Schätzfrage: Wie viele Kinder sitzen in einer durchschnittlichen deutschen Grundschulklasse?",
        "schaetzfrage": true,
        "loesung": "rund 21 Kinder"
      },
      {
        "frage": "Schätzfrage: Wie viele Seiten hat ein normales Schulheft mit 16 Blatt?",
        "schaetzfrage": true,
        "loesung": "32 Seiten"
      },
      {
        "frage": "Wie viele Minuten hat eine Stunde?",
        "antworten": [
          "60",
          "sechzig"
        ],
        "loesung": "60",
        "zahlenbereich": [
          60,
          60
        ]
      },
      {
        "frage": "Wie viele Stunden hat ein Tag?",
        "antworten": [
          "24",
          "vierundzwanzig"
        ],
        "loesung": "24",
        "zahlenbereich": [
          24,
          24
        ]
      },
      {
        "frage": "Wie viele Monate hat ein Jahr?",
        "antworten": [
          "12",
          "zwölf"
        ],
        "loesung": "12",
        "zahlenbereich": [
          12,
          12
        ]
      },
      {
        "frage": "Welcher Monat kommt nach dem März?",
        "antworten": [
          "april"
        ],
        "loesung": "Der April"
      },
      {
        "frage": "Wie heißt der erste Tag der Arbeitswoche?",
        "antworten": [
          "montag"
        ],
        "loesung": "Der Montag"
      },
      {
        "frage": "Was ist die Hälfte von zwanzig?",
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
        "frage": "Wie viele Finger hat ein Mensch an beiden Händen zusammen?",
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
        "frage": "Wie viele Cent sind ein Euro?",
        "antworten": [
          "100",
          "hundert"
        ],
        "loesung": "100",
        "zahlenbereich": [
          100,
          100
        ]
      },
      {
        "frage": "Wie viele Ecken hat ein Dreieck?",
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
        "frage": "Welche beiden Farben ergeben zusammen Grün?",
        "antworten": [
          "blau und gelb",
          "gelb und blau"
        ],
        "loesung": "Blau und Gelb"
      },
      {
        "frage": "Wie viele Tage hat eine Woche?",
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
        "frage": "Welcher Tag kommt nach dem Mittwoch?",
        "antworten": [
          "donnerstag"
        ],
        "loesung": "Der Donnerstag"
      },
      {
        "frage": "Wie heißen die beiden Tage am Wochenende?",
        "antworten": [
          "samstag und sonntag",
          "samstag sonntag"
        ],
        "loesung": "Samstag und Sonntag"
      },
      {
        "frage": "Welcher Monat ist der kürzeste?",
        "antworten": [
          "februar"
        ],
        "loesung": "Der Februar"
      },
      {
        "frage": "Wie viele Wochen hat ein Monat ungefähr?",
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
        "frage": "Wie viele Minuten sind eine Viertelstunde?",
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
        "frage": "Wie viele Zentimeter hat ein Meter?",
        "antworten": [
          "100",
          "hundert"
        ],
        "loesung": "100",
        "zahlenbereich": [
          100,
          100
        ]
      },
      {
        "frage": "Was ergibt fünf mal fünf?",
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
        "frage": "Was ergibt hundert minus dreißig?",
        "antworten": [
          "70",
          "siebzig"
        ],
        "loesung": "70",
        "zahlenbereich": [
          70,
          70
        ]
      },
      {
        "frage": "Was ist das Doppelte von fünfzehn?",
        "antworten": [
          "30",
          "dreißig"
        ],
        "loesung": "30",
        "zahlenbereich": [
          30,
          30
        ]
      },
      {
        "frage": "Wie viele Ecken hat ein Viereck?",
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
        "frage": "Wie viele Seiten hat ein Würfel?",
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
        "frage": "Welche Farbe entsteht aus Rot und Gelb?",
        "antworten": [
          "orange"
        ],
        "loesung": "Orange"
      },
      {
        "frage": "Welche Farbe entsteht aus Rot und Blau?",
        "antworten": [
          "lila",
          "violett"
        ],
        "loesung": "Lila"
      },
      {
        "frage": "Wie viele Buchstaben hat das Wort Haus?",
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
        "frage": "Wie nennt man Wörter, die gleich klingen wie Haus und Maus?",
        "antworten": [
          "reim",
          "reime",
          "reimwörter"
        ],
        "loesung": "Reime"
      },
      {
        "frage": "Wie heißt das Zeichen am Ende eines normalen Satzes?",
        "antworten": [
          "punkt"
        ],
        "loesung": "Der Punkt"
      },
      {
        "frage": "Wie heißt der erste Buchstabe im Alphabet?",
        "antworten": [
          "a"
        ],
        "loesung": "A"
      },
      {
        "frage": "Wie heißt der letzte Buchstabe im Alphabet?",
        "antworten": [
          "z"
        ],
        "loesung": "Z"
      },
      {
        "frage": "Wie viele Beine hat ein Tisch meistens?",
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
        "frage": "Was ergibt zwölf plus acht?",
        "antworten": [
          "20",
          "zwanzig"
        ],
        "loesung": "20",
        "zahlenbereich": [
          20,
          20
        ]
      },
      {
        "frage": "Was ergibt dreißig minus zwölf?",
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
        "frage": "Was ergibt vier mal sechs?",
        "antworten": [
          "24",
          "vierundzwanzig"
        ],
        "loesung": "24",
        "zahlenbereich": [
          24,
          24
        ]
      },
      {
        "frage": "Was ergibt sieben mal sieben?",
        "antworten": [
          "49",
          "neunundvierzig"
        ],
        "loesung": "49",
        "zahlenbereich": [
          49,
          49
        ]
      },
      {
        "frage": "Was ergibt neun mal zehn?",
        "antworten": [
          "90",
          "neunzig"
        ],
        "loesung": "90",
        "zahlenbereich": [
          90,
          90
        ]
      },
      {
        "frage": "Was ergibt fünfzig geteilt durch fünf?",
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
        "frage": "Was ergibt achtzehn geteilt durch drei?",
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
        "frage": "Was ist die Hälfte von fünfzig?",
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
        "frage": "Was ist das Doppelte von sieben?",
        "antworten": [
          "14",
          "vierzehn"
        ],
        "loesung": "14",
        "zahlenbereich": [
          14,
          14
        ]
      },
      {
        "frage": "Was ergibt fünfundzwanzig plus fünfundzwanzig?",
        "antworten": [
          "50",
          "fünfzig"
        ],
        "loesung": "50",
        "zahlenbereich": [
          50,
          50
        ]
      },
      {
        "frage": "Welche Zahl kommt vor der hundert?",
        "antworten": [
          "99",
          "neunundneunzig"
        ],
        "loesung": "99",
        "zahlenbereich": [
          99,
          99
        ]
      },
      {
        "frage": "Welche Zahl ist größer: 67 oder 76?",
        "antworten": [
          "76"
        ],
        "loesung": "76",
        "zahlenbereich": [
          76,
          76
        ]
      },
      {
        "frage": "Wie viele Zehner stecken in der Zahl vierzig?",
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
        "frage": "Wie viele Paare sind zehn Socken?",
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
        "frage": "Welche Zahlen stehen auf einem Würfel?",
        "antworten": [
          "1 bis 6",
          "eins bis sechs"
        ],
        "loesung": "Eins bis sechs"
      },
      {
        "frage": "Wie viele Tage hat der Januar?",
        "antworten": [
          "31",
          "einunddreißig"
        ],
        "loesung": "31",
        "zahlenbereich": [
          31,
          31
        ]
      },
      {
        "frage": "Welcher Monat ist der erste im Jahr?",
        "antworten": [
          "januar"
        ],
        "loesung": "Der Januar"
      },
      {
        "frage": "Welcher Monat ist der letzte im Jahr?",
        "antworten": [
          "dezember"
        ],
        "loesung": "Der Dezember"
      },
      {
        "frage": "In welcher Jahreszeit fällt bei uns Schnee?",
        "antworten": [
          "winter"
        ],
        "loesung": "Im Winter"
      },
      {
        "frage": "In welcher Jahreszeit blühen die meisten Blumen?",
        "antworten": [
          "frühling",
          "frühjahr"
        ],
        "loesung": "Im Frühling"
      },
      {
        "frage": "Wie viele Stunden hat ein halber Tag?",
        "antworten": [
          "12",
          "zwölf"
        ],
        "loesung": "12",
        "zahlenbereich": [
          12,
          12
        ]
      },
      {
        "frage": "Wie viele Minuten sind eine halbe Stunde?",
        "antworten": [
          "30",
          "dreißig"
        ],
        "loesung": "30",
        "zahlenbereich": [
          30,
          30
        ]
      },
      {
        "frage": "Wie viele Buchstaben hat das Wort Blume?",
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
        "frage": "Wie heißt die Mehrzahl von Kind?",
        "antworten": [
          "kinder"
        ],
        "loesung": "Kinder"
      },
      {
        "frage": "Wie heißt die Mehrzahl von Buch?",
        "antworten": [
          "bücher"
        ],
        "loesung": "Bücher"
      },
      {
        "frage": "Womit beginnt jeder Satz?",
        "antworten": [
          "großer buchstabe",
          "großbuchstabe",
          "groß"
        ],
        "loesung": "Mit einem großen Buchstaben"
      },
      {
        "frage": "Welche Wörter schreibt man im Deutschen immer groß?",
        "antworten": [
          "nomen",
          "hauptwörter",
          "namenwörter"
        ],
        "loesung": "Die Nomen"
      },
      {
        "frage": "Wie nennt man ein Wort, das eine Tätigkeit beschreibt?",
        "antworten": [
          "verb",
          "tunwort",
          "tuwort"
        ],
        "loesung": "Ein Verb"
      },
      {
        "frage": "Wie heißt das Zeichen am Ende eines Ausrufs?",
        "antworten": [
          "ausrufezeichen"
        ],
        "loesung": "Das Ausrufezeichen"
      },
      {
        "frage": "Nenne einen Selbstlaut.",
        "antworten": [
          "a",
          "e",
          "i",
          "o",
          "u"
        ],
        "loesung": "Zum Beispiel A"
      },
      {
        "frage": "Wie viele Selbstlaute gibt es im Deutschen?",
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
        "frage": "Wie heißt das Gegenteil von groß?",
        "antworten": [
          "klein"
        ],
        "loesung": "Klein"
      },
      {
        "frage": "Wie heißt das Gegenteil von hell?",
        "antworten": [
          "dunkel"
        ],
        "loesung": "Dunkel"
      },
      {
        "frage": "Wie heißt das Gegenteil von alt?",
        "antworten": [
          "neu",
          "jung"
        ],
        "loesung": "Neu"
      },
      {
        "frage": "Wie heißt das Gegenteil von laut?",
        "antworten": [
          "leise"
        ],
        "loesung": "Leise"
      },
      {
        "frage": "Wie viele Räder hat ein Auto?",
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
        "frage": "Welche Farbe hat ein Stoppschild?",
        "antworten": [
          "rot"
        ],
        "loesung": "Rot"
      },
      {
        "frage": "Wie viele Farben hat eine Ampel?",
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
        "frage": "Wo überquert man eine Straße am sichersten?",
        "antworten": [
          "zebrastreifen",
          "ampel",
          "fußgängerüberweg"
        ],
        "loesung": "Am Zebrastreifen"
      },
      {
        "frage": "Welche Nummer wählt man bei der Polizei?",
        "antworten": [
          "110"
        ],
        "loesung": "Die 110",
        "zahlenbereich": [
          110,
          110
        ]
      },
      {
        "frage": "Wie viele Finger hat man an einer Hand?",
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
        "frage": "Wie viele Zehen hat ein Mensch?",
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
        "frage": "Wie nennt man den Beruf, der Brot backt?",
        "antworten": [
          "bäcker",
          "bäckerin"
        ],
        "loesung": "Der Bäcker"
      },
      {
        "frage": "Wie nennt man den Beruf, der Haare schneidet?",
        "antworten": [
          "friseur",
          "friseurin"
        ],
        "loesung": "Der Friseur"
      },
      {
        "frage": "Wie nennt man den Beruf, der kranke Tiere behandelt?",
        "antworten": [
          "tierarzt",
          "tierärztin"
        ],
        "loesung": "Der Tierarzt"
      },
      {
        "frage": "Wie nennt man den Beruf, der Häuser baut?",
        "antworten": [
          "maurer",
          "bauarbeiter"
        ],
        "loesung": "Der Maurer"
      },
      {
        "frage": "Woraus wird Butter gemacht?",
        "antworten": [
          "milch",
          "sahne"
        ],
        "loesung": "Aus Milch"
      },
      {
        "frage": "Woraus wird Brot gebacken?",
        "antworten": [
          "mehl",
          "getreide"
        ],
        "loesung": "Aus Mehl"
      },
      {
        "frage": "Woraus wird Käse gemacht?",
        "antworten": [
          "milch"
        ],
        "loesung": "Aus Milch"
      },
      {
        "frage": "Wie nennt man das Buch, in dem Wörter erklärt werden?",
        "antworten": [
          "wörterbuch",
          "lexikon"
        ],
        "loesung": "Ein Wörterbuch"
      }
    ],
    "unterstufe": [
      {
        "frage": "Wie viele Minuten dauert eine Schulstunde normalerweise?",
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
        "frage": "Wie heißt das Fach, in dem man Länder, Gebirge und Klimazonen lernt?",
        "antworten": [
          "erdkunde",
          "geografie",
          "geographie"
        ],
        "loesung": "Erdkunde"
      },
      {
        "frage": "In welchem Fach lernt man über Zellen und Lebewesen?",
        "antworten": [
          "biologie",
          "bio"
        ],
        "loesung": "Biologie"
      },
      {
        "frage": "Was ergibt 144 geteilt durch 12?",
        "antworten": [
          "12",
          "zwölf"
        ],
        "loesung": "12",
        "zahlenbereich": [
          12,
          12
        ]
      },
      {
        "frage": "Was ergibt 15 mal 6?",
        "antworten": [
          "90",
          "neunzig"
        ],
        "loesung": "90",
        "zahlenbereich": [
          90,
          90
        ]
      },
      {
        "frage": "Was ist ein Viertel von 200?",
        "antworten": [
          "50",
          "fünfzig"
        ],
        "loesung": "50",
        "zahlenbereich": [
          50,
          50
        ]
      },
      {
        "frage": "Wie viele Grad hat ein rechter Winkel?",
        "antworten": [
          "90",
          "neunzig"
        ],
        "loesung": "90 Grad",
        "zahlenbereich": [
          90,
          90
        ]
      },
      {
        "frage": "Wie berechnet man den Flächeninhalt eines Rechtecks?",
        "antworten": [
          "länge mal breite",
          "a mal b",
          "länge x breite"
        ],
        "loesung": "Länge mal Breite"
      },
      {
        "frage": "Wie heißt die obere Zahl in einem Bruch?",
        "antworten": [
          "zähler"
        ],
        "loesung": "Der Zähler"
      },
      {
        "frage": "Wie heißt die untere Zahl in einem Bruch?",
        "antworten": [
          "nenner"
        ],
        "loesung": "Der Nenner"
      },
      {
        "frage": "Wie heißt die Kreiszahl, die den Umfang durch den Durchmesser beschreibt?",
        "antworten": [
          "pi",
          "kreiszahl"
        ],
        "loesung": "Pi"
      },
      {
        "frage": "Wie nennt man Wörter, die ungefähr dasselbe bedeuten?",
        "antworten": [
          "synonyme",
          "synonym"
        ],
        "loesung": "Synonyme"
      },
      {
        "frage": "Wie nennt man Wörter mit gegenteiliger Bedeutung?",
        "antworten": [
          "antonyme",
          "gegenteile",
          "gegenwörter"
        ],
        "loesung": "Antonyme"
      },
      {
        "frage": "Wie nennt man das Satzglied, das man mit Wer oder Was erfragt?",
        "antworten": [
          "subjekt"
        ],
        "loesung": "Das Subjekt"
      },
      {
        "frage": "Wie heißt die Vergangenheitsform, die man früher Imperfekt nannte?",
        "antworten": [
          "präteritum"
        ],
        "loesung": "Das Präteritum"
      },
      {
        "frage": "Wie heißt die Wortart, die ein Nomen begleitet, zum Beispiel der, die, das?",
        "antworten": [
          "artikel",
          "begleiter"
        ],
        "loesung": "Der Artikel"
      },
      {
        "frage": "Wie heißt die Wortart, die ein Nomen näher beschreibt?",
        "antworten": [
          "adjektiv",
          "eigenschaftswort"
        ],
        "loesung": "Das Adjektiv"
      },
      {
        "frage": "Wie nennt man die vier Fälle im Deutschen mit einem Fachwort?",
        "antworten": [
          "kasus",
          "fälle"
        ],
        "loesung": "Die Kasus"
      },
      {
        "frage": "Schätzfrage: Wie viele Unterrichtsstunden hat ein Sechstklässler pro Woche?",
        "schaetzfrage": true,
        "loesung": "rund 30 Stunden"
      },
      {
        "frage": "Schätzfrage: Wie viele Schülerinnen und Schüler sitzen in einer typischen Klasse 6 am Gymnasium?",
        "schaetzfrage": true,
        "loesung": "rund 27"
      },
      {
        "frage": "Wie viele Gramm sind ein Kilogramm?",
        "antworten": [
          "1000",
          "tausend"
        ],
        "loesung": "1000",
        "zahlenbereich": [
          1000,
          1000
        ]
      },
      {
        "frage": "Wie viele Meter sind ein Kilometer?",
        "antworten": [
          "1000",
          "tausend"
        ],
        "loesung": "1000",
        "zahlenbereich": [
          1000,
          1000
        ]
      },
      {
        "frage": "Wie viele Millimeter hat ein Zentimeter?",
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
        "frage": "Wie nennt man das Ergebnis einer Addition?",
        "antworten": [
          "summe"
        ],
        "loesung": "Die Summe"
      },
      {
        "frage": "Wie nennt man das Ergebnis einer Multiplikation?",
        "antworten": [
          "produkt"
        ],
        "loesung": "Das Produkt"
      },
      {
        "frage": "Wie nennt man das Ergebnis einer Division?",
        "antworten": [
          "quotient"
        ],
        "loesung": "Der Quotient"
      },
      {
        "frage": "Wie groß ist die Winkelsumme in einem Dreieck?",
        "antworten": [
          "180"
        ],
        "loesung": "180 Grad",
        "zahlenbereich": [
          180,
          180
        ]
      },
      {
        "frage": "Wie nennt man eine Zahl, die nur durch eins und sich selbst teilbar ist?",
        "antworten": [
          "primzahl"
        ],
        "loesung": "Eine Primzahl"
      },
      {
        "frage": "Wie heißt die Zeitform, mit der man im Deutschen die Zukunft ausdrückt?",
        "antworten": [
          "futur"
        ],
        "loesung": "Das Futur"
      },
      {
        "frage": "Welches Satzglied erfragt man mit Wen oder was?",
        "antworten": [
          "akkusativobjekt",
          "akkusativ"
        ],
        "loesung": "Das Akkusativobjekt"
      },
      {
        "frage": "Wie viele Sekunden hat eine Minute?",
        "antworten": [
          "60",
          "sechzig"
        ],
        "loesung": "60",
        "zahlenbereich": [
          60,
          60
        ]
      },
      {
        "frage": "Wie viele Liter hat ein Kubikmeter?",
        "antworten": [
          "1000",
          "tausend"
        ],
        "loesung": "1000",
        "zahlenbereich": [
          1000,
          1000
        ]
      },
      {
        "frage": "Wie viel Grad hat ein voller Kreis?",
        "antworten": [
          "360"
        ],
        "loesung": "360 Grad",
        "zahlenbereich": [
          360,
          360
        ]
      },
      {
        "frage": "Wie nennt man den Abstand vom Kreismittelpunkt zum Rand?",
        "antworten": [
          "radius"
        ],
        "loesung": "Der Radius"
      },
      {
        "frage": "Wie nennt man die Strecke durch den Kreismittelpunkt von Rand zu Rand?",
        "antworten": [
          "durchmesser"
        ],
        "loesung": "Der Durchmesser"
      },
      {
        "frage": "Was ergibt sieben mal acht?",
        "antworten": [
          "56",
          "sechsundfünfzig"
        ],
        "loesung": "56",
        "zahlenbereich": [
          56,
          56
        ]
      },
      {
        "frage": "Wie viel Prozent sind die Hälfte?",
        "antworten": [
          "50",
          "fünfzig"
        ],
        "loesung": "50 Prozent",
        "zahlenbereich": [
          50,
          50
        ]
      },
      {
        "frage": "Wie lautet drei Viertel als Dezimalzahl?",
        "antworten": [
          "0,75",
          "null komma sieben fünf"
        ],
        "loesung": "0,75",
        "zahlenbereich": [
          0.75,
          0.75
        ]
      },
      {
        "frage": "Wie nennt man Zahlen, die durch zwei teilbar sind?",
        "antworten": [
          "gerade",
          "gerade zahlen"
        ],
        "loesung": "Gerade Zahlen"
      },
      {
        "frage": "Wie heißt die Zahl, die bei einer Division geteilt wird?",
        "antworten": [
          "dividend"
        ],
        "loesung": "Der Dividend"
      },
      {
        "frage": "Wie viele Fälle hat die deutsche Sprache?",
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
        "frage": "Wie heißen die vier Fälle des Deutschen?",
        "antworten": [
          "nominativ genitiv dativ akkusativ"
        ],
        "loesung": "Nominativ, Genitiv, Dativ, Akkusativ"
      },
      {
        "frage": "Welches Satzglied erfragt man mit Wem?",
        "antworten": [
          "dativobjekt",
          "dativ"
        ],
        "loesung": "Das Dativobjekt"
      },
      {
        "frage": "Wie nennt man die Wortart, die ein Verb näher bestimmt?",
        "antworten": [
          "adverb",
          "umstandswort"
        ],
        "loesung": "Das Adverb"
      },
      {
        "frage": "Wie heißt die Grundform eines Verbs?",
        "antworten": [
          "infinitiv",
          "grundform"
        ],
        "loesung": "Der Infinitiv"
      },
      {
        "frage": "Wie heißt die Zeitform, die eine abgeschlossene Handlung mit Bezug zur Gegenwart ausdrückt?",
        "antworten": [
          "perfekt"
        ],
        "loesung": "Das Perfekt"
      },
      {
        "frage": "Wie nennt man die wörtliche Rede in Anführungszeichen?",
        "antworten": [
          "direkte rede",
          "wörtliche rede"
        ],
        "loesung": "Die direkte Rede"
      },
      {
        "frage": "Wie nennt man ein Wort, das mehrere Bedeutungen hat?",
        "antworten": [
          "homonym",
          "teekesselchen"
        ],
        "loesung": "Ein Homonym"
      },
      {
        "frage": "Wie lautet die Mehrzahl von Atlas?",
        "antworten": [
          "atlanten"
        ],
        "loesung": "Atlanten"
      },
      {
        "frage": "Wie viele Zentimeter hat ein Zoll ungefähr?",
        "antworten": [
          "2,54",
          "2,5"
        ],
        "loesung": "2,54 Zentimeter",
        "zahlenbereich": [
          2.4,
          2.7
        ]
      },
      {
        "frage": "Was ergibt dreizehn mal vier?",
        "antworten": [
          "52",
          "zweiundfünfzig"
        ],
        "loesung": "52",
        "zahlenbereich": [
          52,
          52
        ]
      },
      {
        "frage": "Was ergibt 256 geteilt durch acht?",
        "antworten": [
          "32",
          "zweiunddreißig"
        ],
        "loesung": "32",
        "zahlenbereich": [
          32,
          32
        ]
      },
      {
        "frage": "Was ist ein Fünftel von 250?",
        "antworten": [
          "50",
          "fünfzig"
        ],
        "loesung": "50",
        "zahlenbereich": [
          50,
          50
        ]
      },
      {
        "frage": "Wie viel Prozent sind ein Viertel?",
        "antworten": [
          "25",
          "fünfundzwanzig"
        ],
        "loesung": "25 Prozent",
        "zahlenbereich": [
          25,
          25
        ]
      },
      {
        "frage": "Wie viel sind zwanzig Prozent von achtzig?",
        "antworten": [
          "16",
          "sechzehn"
        ],
        "loesung": "16",
        "zahlenbereich": [
          16,
          16
        ]
      },
      {
        "frage": "Wie lautet null Komma fünf als Bruch?",
        "antworten": [
          "ein halb",
          "1/2",
          "die hälfte"
        ],
        "loesung": "Ein Halb"
      },
      {
        "frage": "Wie viel Grad hat ein gestreckter Winkel?",
        "antworten": [
          "180"
        ],
        "loesung": "180 Grad",
        "zahlenbereich": [
          180,
          180
        ]
      },
      {
        "frage": "Wie nennt man ein Dreieck mit drei gleich langen Seiten?",
        "antworten": [
          "gleichseitig",
          "gleichseitiges dreieck"
        ],
        "loesung": "Gleichseitig"
      },
      {
        "frage": "Wie nennt man ein Dreieck mit einem rechten Winkel?",
        "antworten": [
          "rechtwinklig",
          "rechtwinkliges dreieck"
        ],
        "loesung": "Rechtwinklig"
      },
      {
        "frage": "Wie berechnet man den Umfang eines Rechtecks?",
        "antworten": [
          "zwei mal länge plus zwei mal breite",
          "2a plus 2b"
        ],
        "loesung": "Zweimal Länge plus zweimal Breite"
      },
      {
        "frage": "Wie viele Kanten hat ein Würfel?",
        "antworten": [
          "12",
          "zwölf"
        ],
        "loesung": "12",
        "zahlenbereich": [
          12,
          12
        ]
      },
      {
        "frage": "Wie viele Flächen hat ein Würfel?",
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
        "frage": "Wie heißt der Körper mit zwei Kreisen als Grund- und Deckfläche?",
        "antworten": [
          "zylinder"
        ],
        "loesung": "Der Zylinder"
      },
      {
        "frage": "Wie viel ist die Wurzel aus 81?",
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
        "frage": "Was ergibt zwei hoch fünf?",
        "antworten": [
          "32",
          "zweiunddreißig"
        ],
        "loesung": "32",
        "zahlenbereich": [
          32,
          32
        ]
      },
      {
        "frage": "Wie nennt man Zahlen, die kleiner als null sind?",
        "antworten": [
          "negative zahlen",
          "negativ"
        ],
        "loesung": "Negative Zahlen"
      },
      {
        "frage": "Auf welchen Zehner rundet man 47?",
        "antworten": [
          "50",
          "fünfzig"
        ],
        "loesung": "Auf 50",
        "zahlenbereich": [
          50,
          50
        ]
      },
      {
        "frage": "Wie viele Nullen hat eine Billion?",
        "antworten": [
          "12",
          "zwölf"
        ],
        "loesung": "12",
        "zahlenbereich": [
          12,
          12
        ]
      },
      {
        "frage": "Wie nennt man ein Wort, das ein Nomen ersetzt?",
        "antworten": [
          "pronomen",
          "fürwort"
        ],
        "loesung": "Ein Pronomen"
      },
      {
        "frage": "Wie heißt die Zeitform der Vorvergangenheit?",
        "antworten": [
          "plusquamperfekt",
          "vorvergangenheit"
        ],
        "loesung": "Das Plusquamperfekt"
      },
      {
        "frage": "Wie nennt man das Satzglied mit dem Verb?",
        "antworten": [
          "prädikat"
        ],
        "loesung": "Das Prädikat"
      },
      {
        "frage": "Wie nennt man einen Satz aus Hauptsatz und Nebensatz?",
        "antworten": [
          "satzgefüge"
        ],
        "loesung": "Ein Satzgefüge"
      },
      {
        "frage": "Wie nennt man Bindewörter wie und, oder und aber?",
        "antworten": [
          "konjunktionen",
          "bindewörter"
        ],
        "loesung": "Konjunktionen"
      },
      {
        "frage": "Wie lautet die Steigerung von gut?",
        "antworten": [
          "besser",
          "besser am besten"
        ],
        "loesung": "Besser, am besten"
      },
      {
        "frage": "Wie nennt man die Beugung eines Verbs?",
        "antworten": [
          "konjugation"
        ],
        "loesung": "Die Konjugation"
      },
      {
        "frage": "Wie nennt man die Beugung eines Nomens?",
        "antworten": [
          "deklination"
        ],
        "loesung": "Die Deklination"
      },
      {
        "frage": "Wie nennt man ein Wort, das aus einer anderen Sprache übernommen wurde?",
        "antworten": [
          "fremdwort",
          "lehnwort"
        ],
        "loesung": "Ein Fremdwort"
      },
      {
        "frage": "Wie nennt man eine kurze Geschichte mit Tieren und einer Lehre?",
        "antworten": [
          "fabel"
        ],
        "loesung": "Eine Fabel"
      },
      {
        "frage": "Wie nennt man ein Gedicht mit vierzehn Versen?",
        "antworten": [
          "sonett"
        ],
        "loesung": "Ein Sonett"
      },
      {
        "frage": "Wie nennt man den Gleichklang am Ende zweier Verszeilen?",
        "antworten": [
          "reim",
          "endreim"
        ],
        "loesung": "Der Reim"
      },
      {
        "frage": "Wie nennt man das Betonungsmuster eines Gedichts?",
        "antworten": [
          "metrum",
          "versmaß"
        ],
        "loesung": "Das Metrum"
      },
      {
        "frage": "Wie viele Stunden hat eine Woche?",
        "antworten": [
          "168"
        ],
        "loesung": "168",
        "zahlenbereich": [
          168,
          168
        ]
      },
      {
        "frage": "Wie viele Tage hat ein Schaltjahr?",
        "antworten": [
          "366"
        ],
        "loesung": "366",
        "zahlenbereich": [
          366,
          366
        ]
      },
      {
        "frage": "Wie heißt die Währung der Vereinigten Staaten?",
        "antworten": [
          "dollar",
          "us dollar"
        ],
        "loesung": "Der Dollar"
      },
      {
        "frage": "Wofür steht die Abkürzung PC?",
        "antworten": [
          "personal computer"
        ],
        "loesung": "Personal Computer"
      },
      {
        "frage": "Wofür steht die Abkürzung WWW?",
        "antworten": [
          "world wide web"
        ],
        "loesung": "World Wide Web"
      },
      {
        "frage": "Wie nennt man ein Programm zum Aufrufen von Internetseiten?",
        "antworten": [
          "browser"
        ],
        "loesung": "Ein Browser"
      },
      {
        "frage": "Wie nennt man schädliche Software allgemein?",
        "antworten": [
          "schadsoftware",
          "malware",
          "virus",
          "viren"
        ],
        "loesung": "Schadsoftware"
      },
      {
        "frage": "Wie heißt das bekannteste deutsche Rechtschreibwörterbuch?",
        "antworten": [
          "duden"
        ],
        "loesung": "Der Duden"
      },
      {
        "frage": "Wie nennt man die Nummer, mit der ein Buch eindeutig gekennzeichnet ist?",
        "antworten": [
          "isbn"
        ],
        "loesung": "Die ISBN"
      },
      {
        "frage": "Wie nennt man ein Nachschlagewerk mit Sachartikeln?",
        "antworten": [
          "lexikon",
          "enzyklopädie"
        ],
        "loesung": "Ein Lexikon"
      },
      {
        "frage": "Wie heißt die Zahl null mit einem anderen Wort?",
        "antworten": [
          "nichts",
          "nix",
          "zero"
        ],
        "loesung": "Nichts"
      },
      {
        "frage": "Wie nennt man die Einheiten Meter, Kilogramm und Sekunde zusammen?",
        "antworten": [
          "grundeinheiten",
          "si einheiten",
          "basiseinheiten"
        ],
        "loesung": "Grundeinheiten"
      },
      {
        "frage": "Wie viele Millimeter hat ein Meter?",
        "antworten": [
          "1000",
          "tausend"
        ],
        "loesung": "1000",
        "zahlenbereich": [
          1000,
          1000
        ]
      },
      {
        "frage": "Wie viele Milliliter hat ein Liter?",
        "antworten": [
          "1000",
          "tausend"
        ],
        "loesung": "1000",
        "zahlenbereich": [
          1000,
          1000
        ]
      },
      {
        "frage": "Wie viele Kilogramm hat eine Tonne?",
        "antworten": [
          "1000",
          "tausend"
        ],
        "loesung": "1000",
        "zahlenbereich": [
          1000,
          1000
        ]
      },
      {
        "frage": "Wie nennt man den Bruchstrich in Worten?",
        "antworten": [
          "geteilt durch",
          "durch"
        ],
        "loesung": "Geteilt durch"
      },
      {
        "frage": "Wie heißt das Zeichen für Prozent?",
        "antworten": [
          "prozentzeichen"
        ],
        "loesung": "Das Prozentzeichen"
      },
      {
        "frage": "Wie nennt man eine Zahl, die sich nicht als Bruch schreiben lässt?",
        "antworten": [
          "irrational",
          "irrationale zahl"
        ],
        "loesung": "Eine irrationale Zahl"
      },
      {
        "frage": "Wie nennt man die Anrede am Anfang eines Briefes?",
        "antworten": [
          "anrede"
        ],
        "loesung": "Die Anrede"
      }
    ],
    "mittelstufe": [
      {
        "frage": "Wie nennt man das Ergebnis einer Subtraktion?",
        "antworten": [
          "differenz"
        ],
        "loesung": "Die Differenz"
      },
      {
        "frage": "Wie lautet der Satz des Pythagoras?",
        "antworten": [
          "a quadrat plus b quadrat gleich c quadrat",
          "a²+b²=c²"
        ],
        "loesung": "a² plus b² gleich c²"
      },
      {
        "frage": "Wie berechnet man den Flächeninhalt eines Kreises?",
        "antworten": [
          "pi mal radius zum quadrat",
          "pi r quadrat",
          "pi mal r hoch 2"
        ],
        "loesung": "Pi mal Radius zum Quadrat"
      },
      {
        "frage": "Wie nennt man eine Gleichung, in der x im Quadrat vorkommt?",
        "antworten": [
          "quadratische gleichung"
        ],
        "loesung": "Eine quadratische Gleichung"
      },
      {
        "frage": "Wie viel ist ein Prozent von 400?",
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
        "frage": "Wie nennt man den Durchschnitt mehrerer Zahlen mit dem Fachwort?",
        "antworten": [
          "mittelwert",
          "arithmetisches mittel"
        ],
        "loesung": "Das arithmetische Mittel"
      },
      {
        "frage": "Wie nennt man Brüche mit gleichem Nenner?",
        "antworten": [
          "gleichnamig"
        ],
        "loesung": "Gleichnamig"
      },
      {
        "frage": "Wie viele Nullen hat eine Million?",
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
        "frage": "Wie viele Nullen hat eine Milliarde?",
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
        "frage": "Wie heißt das Stilmittel, bei dem etwas mit dem Wort wie verglichen wird?",
        "antworten": [
          "vergleich"
        ],
        "loesung": "Der Vergleich"
      },
      {
        "frage": "Wie heißt das Stilmittel, bei dem mehrere Wörter mit demselben Laut beginnen?",
        "antworten": [
          "alliteration"
        ],
        "loesung": "Die Alliteration"
      },
      {
        "frage": "Wie nennt man eine starke Übertreibung als Stilmittel?",
        "antworten": [
          "hyperbel",
          "übertreibung"
        ],
        "loesung": "Die Hyperbel"
      },
      {
        "frage": "Wie nennt man die Erzählform, in der eine Figur von sich selbst erzählt?",
        "antworten": [
          "ich erzähler",
          "ich perspektive",
          "ichform"
        ],
        "loesung": "Der Ich-Erzähler"
      },
      {
        "frage": "Wie nennt man die Vorsilbe eines Wortes mit dem Fachwort?",
        "antworten": [
          "präfix",
          "vorsilbe"
        ],
        "loesung": "Das Präfix"
      },
      {
        "frage": "Wie nennt man ein Wort, das aus zwei Wörtern zusammengesetzt ist?",
        "antworten": [
          "kompositum",
          "zusammensetzung"
        ],
        "loesung": "Ein Kompositum"
      },
      {
        "frage": "Wofür steht die Abkürzung z B?",
        "antworten": [
          "zum beispiel"
        ],
        "loesung": "Zum Beispiel"
      },
      {
        "frage": "Wie viele Bit hat ein Byte?",
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
        "frage": "Wie heißt die kleinste Informationseinheit im Computer?",
        "antworten": [
          "bit"
        ],
        "loesung": "Das Bit"
      },
      {
        "frage": "Wie heißt die Währung Großbritanniens?",
        "antworten": [
          "pfund",
          "britisches pfund"
        ],
        "loesung": "Das Pfund"
      },
      {
        "frage": "Wie heißt die Währung der Schweiz?",
        "antworten": [
          "franken",
          "schweizer franken"
        ],
        "loesung": "Der Schweizer Franken"
      },
      {
        "frage": "Wie viele Zeitzonen hat die Erde?",
        "antworten": [
          "24",
          "vierundzwanzig"
        ],
        "loesung": "24",
        "zahlenbereich": [
          24,
          24
        ]
      },
      {
        "frage": "Alle wie viele Jahre gibt es ein Schaltjahr?",
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
        "frage": "Wie viele Tage hat der Februar in einem Schaltjahr?",
        "antworten": [
          "29",
          "neunundzwanzig"
        ],
        "loesung": "29",
        "zahlenbereich": [
          29,
          29
        ]
      },
      {
        "frage": "Aus welcher Sprache stammen die meisten medizinischen Fachbegriffe?",
        "antworten": [
          "latein",
          "lateinisch"
        ],
        "loesung": "Aus dem Lateinischen"
      },
      {
        "frage": "Welche Sprache ist die internationale Verkehrssprache der Luftfahrt?",
        "antworten": [
          "englisch"
        ],
        "loesung": "Englisch"
      },
      {
        "frage": "Wie heißt die Schrift, die Blinde mit den Fingern lesen?",
        "antworten": [
          "blindenschrift",
          "brailleschrift",
          "braille"
        ],
        "loesung": "Die Brailleschrift"
      },
      {
        "frage": "Welche römische Zahl steht für 50?",
        "antworten": [
          "l"
        ],
        "loesung": "L"
      },
      {
        "frage": "Welche römische Zahl steht für 1000?",
        "antworten": [
          "m"
        ],
        "loesung": "M"
      },
      {
        "frage": "Schätzfrage: Wie viele Sekunden hat ein Tag?",
        "schaetzfrage": true,
        "loesung": "86.400 Sekunden"
      },
      {
        "frage": "Schätzfrage: Wie viele Stunden hat ein Jahr?",
        "schaetzfrage": true,
        "loesung": "rund 8760 Stunden"
      }
    ],
    "erwachsene": [
      {
        "frage": "Welche internationale Schulleistungsstudie löste 2001 in Deutschland einen Schock aus?",
        "antworten": [
          "pisa"
        ],
        "loesung": "Die PISA-Studie"
      },
      {
        "frage": "Welche Ärztin und Pädagogin begründete eine Reformpädagogik mit Freiarbeit?",
        "antworten": [
          "montessori"
        ],
        "loesung": "Maria Montessori"
      },
      {
        "frage": "Welcher Reformpädagoge begründete die Waldorfpädagogik?",
        "antworten": [
          "steiner"
        ],
        "loesung": "Rudolf Steiner"
      },
      {
        "frage": "Wer gilt als Begründer des Kindergartens?",
        "antworten": [
          "fröbel"
        ],
        "loesung": "Friedrich Fröbel"
      },
      {
        "frage": "Welcher Schweizer Pädagoge prägte das Lernen mit Kopf, Herz und Hand?",
        "antworten": [
          "pestalozzi"
        ],
        "loesung": "Johann Heinrich Pestalozzi"
      },
      {
        "frage": "Welcher preußische Gelehrte prägte das humanistische Bildungsideal und reformierte das Gymnasium?",
        "antworten": [
          "humboldt"
        ],
        "loesung": "Wilhelm von Humboldt"
      },
      {
        "frage": "Wie viele Bundesländer regeln in Deutschland die Schulpolitik eigenständig?",
        "antworten": [
          "16",
          "sechzehn"
        ],
        "loesung": "16",
        "zahlenbereich": [
          16,
          16
        ]
      },
      {
        "frage": "Wie heißt das Gremium, in dem sich die Kultusministerien der Länder abstimmen?",
        "antworten": [
          "kultusministerkonferenz",
          "kmk"
        ],
        "loesung": "Die Kultusministerkonferenz"
      },
      {
        "frage": "Wie heißt das Prinzip, dass Bildung in Deutschland Ländersache ist?",
        "antworten": [
          "kulturhoheit",
          "föderalismus"
        ],
        "loesung": "Die Kulturhoheit der Länder"
      },
      {
        "frage": "In welchem Jahrhundert wurde in Preußen die allgemeine Schulpflicht eingeführt?",
        "antworten": [
          "18",
          "achtzehnten"
        ],
        "loesung": "Im 18. Jahrhundert",
        "zahlenbereich": [
          18,
          18
        ]
      },
      {
        "frage": "Wie heißt die Schulform, die Haupt-, Real- und Gymnasialbildung unter einem Dach vereint?",
        "antworten": [
          "gesamtschule"
        ],
        "loesung": "Die Gesamtschule"
      },
      {
        "frage": "Welchen Abschluss braucht man in Deutschland regulär für ein Universitätsstudium?",
        "antworten": [
          "abitur",
          "allgemeine hochschulreife"
        ],
        "loesung": "Das Abitur"
      },
      {
        "frage": "Wie heißt das Ausbildungssystem aus Betrieb und Berufsschule?",
        "antworten": [
          "duale ausbildung",
          "duales system"
        ],
        "loesung": "Die duale Ausbildung"
      },
      {
        "frage": "Wie heißt die europäische Studienreform, die Bachelor und Master einführte?",
        "antworten": [
          "bologna"
        ],
        "loesung": "Der Bologna-Prozess"
      },
      {
        "frage": "Nach welchem griechischen Philosophen ist die Gesprächsmethode im Unterricht benannt?",
        "antworten": [
          "sokrates"
        ],
        "loesung": "Sokrates"
      },
      {
        "frage": "Wie heißt die schriftliche Arbeit, mit der man den Doktortitel erwirbt?",
        "antworten": [
          "dissertation",
          "doktorarbeit"
        ],
        "loesung": "Die Dissertation"
      },
      {
        "frage": "Mit welcher Klassenstufe endet in den meisten Bundesländern die Grundschule?",
        "antworten": [
          "4",
          "vierte",
          "vier"
        ],
        "loesung": "Mit Klasse 4",
        "zahlenbereich": [
          4,
          4
        ]
      },
      {
        "frage": "In welchem Jahr wurde die Universität Heidelberg als älteste Deutschlands gegründet?",
        "antworten": [
          "1386"
        ],
        "loesung": "1386",
        "zahlenbereich": [
          1386,
          1386
        ]
      },
      {
        "frage": "Schätzfrage: Wie viele Schülerinnen und Schüler besuchen in Deutschland allgemeinbildende Schulen?",
        "schaetzfrage": true,
        "loesung": "rund 8,5 Millionen"
      },
      {
        "frage": "Schätzfrage: Wie viele Lehrkräfte arbeiten an allgemeinbildenden Schulen in Deutschland?",
        "schaetzfrage": true,
        "loesung": "rund 700.000"
      },
      {
        "frage": "Wie viele Buchstaben hat das griechische Alphabet?",
        "antworten": [
          "24",
          "vierundzwanzig"
        ],
        "loesung": "24",
        "zahlenbereich": [
          24,
          24
        ]
      },
      {
        "frage": "Wofür steht die Abkürzung EU?",
        "antworten": [
          "europäische union"
        ],
        "loesung": "Europäische Union"
      },
      {
        "frage": "Wie heißt die Währung Japans?",
        "antworten": [
          "yen"
        ],
        "loesung": "Der Yen"
      },
      {
        "frage": "Wie nennt man die Lehre von der richtigen Rechtschreibung?",
        "antworten": [
          "orthografie",
          "orthographie",
          "rechtschreibung"
        ],
        "loesung": "Die Orthografie"
      },
      {
        "frage": "Wie nennt man eine Aussage, die sich selbst zu widersprechen scheint?",
        "antworten": [
          "paradoxon",
          "paradox"
        ],
        "loesung": "Ein Paradoxon"
      },
      {
        "frage": "Welche Sprache ist Amtssprache im Vatikan?",
        "antworten": [
          "latein",
          "lateinisch"
        ],
        "loesung": "Latein"
      },
      {
        "frage": "Wofür steht die Abkürzung i d R?",
        "antworten": [
          "in der regel"
        ],
        "loesung": "In der Regel"
      },
      {
        "frage": "Wie viele Bogenminuten hat ein Winkelgrad?",
        "antworten": [
          "60",
          "sechzig"
        ],
        "loesung": "60",
        "zahlenbereich": [
          60,
          60
        ]
      },
      {
        "frage": "Durch welchen Londoner Stadtteil verläuft der Nullmeridian?",
        "antworten": [
          "greenwich"
        ],
        "loesung": "Greenwich"
      },
      {
        "frage": "Wie heißt das Rechtsgebiet, das Verträge zwischen Privatpersonen regelt?",
        "antworten": [
          "zivilrecht",
          "bürgerliches recht",
          "privatrecht"
        ],
        "loesung": "Das Zivilrecht"
      }
    ]
  }
};
