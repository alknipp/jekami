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
      }
    ],
    "mittelstufe": [],
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
      }
    ]
  }
};
