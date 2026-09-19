/* ------------------------------------------------------------
   Jekami Quiz - Themengebiet: Geschichte

   Aufbau einer normalen Frage:
     { frage: "...", antworten: ["variante","variante"], loesung: "..." }
     optional: zahlenbereich: [min, max]

   Schaetzfrage:
     { frage: "Schaetzfrage: ...", schaetzfrage: true, loesung: "rund 105 Meter" }

   Ziel: mindestens 20 Fragen je Altersstufe, davon 2 bis 3 Schaetzfragen.
   Reihenfolge egal - die App mischt bei jeder Runde.
   Regeln und Alterskalibrierung stehen in CLAUDE.md.
   ------------------------------------------------------------ */

JEKAMI_FRAGEN.geschichte = {
  "name": "Geschichte",
  "symbol": "📜",
  "stufen": {
    "grundschule": [
      {
        "frage": "In was für einem Haus wohnte ein Ritter?",
        "antworten": [
          "burg",
          "ritterburg"
        ],
        "loesung": "In einer Burg"
      },
      {
        "frage": "Wie heißen die riesigen Tiere, die vor sehr langer Zeit lebten und ausgestorben sind?",
        "antworten": [
          "dinosaurier",
          "dinos",
          "dino"
        ],
        "loesung": "Dinosaurier"
      },
      {
        "frage": "Wer war früher in einem Königreich der Chef?",
        "antworten": [
          "könig",
          "königin"
        ],
        "loesung": "Der König"
      },
      {
        "frage": "Wie nennt man die Seefahrer aus dem Norden mit den langen Booten?",
        "antworten": [
          "wikinger"
        ],
        "loesung": "Die Wikinger"
      },
      {
        "frage": "Wie heißt die Zeit, in der die Menschen in Höhlen lebten und Werkzeuge aus Stein hatten?",
        "antworten": [
          "steinzeit"
        ],
        "loesung": "Die Steinzeit"
      },
      {
        "frage": "Welches Volk baute die Pyramiden?",
        "antworten": [
          "ägypter"
        ],
        "loesung": "Die Ägypter"
      },
      {
        "frage": "Womit schrieben die Menschen früher, lange bevor es Kugelschreiber gab?",
        "antworten": [
          "feder",
          "federkiel",
          "tinte"
        ],
        "loesung": "Mit Feder und Tinte"
      },
      {
        "frage": "Was trug ein Ritter zum Schutz im Kampf?",
        "antworten": [
          "rüstung",
          "ritterrüstung"
        ],
        "loesung": "Eine Rüstung"
      },
      {
        "frage": "Wie nennt man den Graben mit Wasser rund um eine Burg?",
        "antworten": [
          "burggraben",
          "wassergraben",
          "graben"
        ],
        "loesung": "Der Burggraben"
      },
      {
        "frage": "Womit fuhren die Menschen, bevor es Autos gab?",
        "antworten": [
          "kutsche",
          "pferdekutsche",
          "pferd",
          "pferdewagen"
        ],
        "loesung": "Mit der Pferdekutsche"
      },
      {
        "frage": "Wie hießen die Menschen, die im alten Rom lebten?",
        "antworten": [
          "römer"
        ],
        "loesung": "Die Römer"
      },
      {
        "frage": "Wie nennt man die alte Bilderschrift der Ägypter?",
        "antworten": [
          "hieroglyphen"
        ],
        "loesung": "Hieroglyphen"
      },
      {
        "frage": "Was entdeckten die Menschen in der Steinzeit, das wärmt und leuchtet?",
        "antworten": [
          "feuer"
        ],
        "loesung": "Das Feuer"
      },
      {
        "frage": "Wie nennt man einen Forscher, der alte Dinge ausgräbt?",
        "antworten": [
          "archäologe",
          "archäologin"
        ],
        "loesung": "Ein Archäologe"
      },
      {
        "frage": "Mit welchem Fahrzeug flogen Menschen zum Mond?",
        "antworten": [
          "rakete",
          "raumschiff"
        ],
        "loesung": "Mit einer Rakete"
      },
      {
        "frage": "Wie heißt der hohe Turm mitten in einer Burg?",
        "antworten": [
          "bergfried",
          "turm"
        ],
        "loesung": "Der Bergfried"
      },
      {
        "frage": "Wer schrieb im Mittelalter die Bücher mit der Hand ab?",
        "antworten": [
          "mönche",
          "mönch"
        ],
        "loesung": "Mönche"
      },
      {
        "frage": "Welches Metall war so wertvoll, dass Könige Kronen daraus machen ließen?",
        "antworten": [
          "gold"
        ],
        "loesung": "Gold"
      },
      {
        "frage": "Schätzfrage: Wie alt sind die Pyramiden von Gizeh ungefähr?",
        "schaetzfrage": true,
        "loesung": "rund 4500 Jahre"
      },
      {
        "frage": "Schätzfrage: Vor wie vielen Jahren starben die Dinosaurier aus?",
        "schaetzfrage": true,
        "loesung": "vor rund 66 Millionen Jahren"
      }
    ],
    "unterstufe": [
      {
        "frage": "Welche Stadt war die Hauptstadt des Römischen Reiches?",
        "antworten": [
          "rom"
        ],
        "loesung": "Rom"
      },
      {
        "frage": "Wer betrat 1969 als erster Mensch den Mond?",
        "antworten": [
          "neil armstrong",
          "armstrong"
        ],
        "loesung": "Neil Armstrong"
      },
      {
        "frage": "In welchem Jahr fiel die Berliner Mauer?",
        "antworten": [
          "1989"
        ],
        "loesung": "1989",
        "zahlenbereich": [
          1989,
          1989
        ]
      },
      {
        "frage": "In welchem Jahr begann der Zweite Weltkrieg?",
        "antworten": [
          "1939"
        ],
        "loesung": "1939",
        "zahlenbereich": [
          1939,
          1939
        ]
      },
      {
        "frage": "In welchem Jahr endete der Zweite Weltkrieg?",
        "antworten": [
          "1945"
        ],
        "loesung": "1945",
        "zahlenbereich": [
          1945,
          1945
        ]
      },
      {
        "frage": "Wer erreichte 1492 mit drei Schiffen Amerika?",
        "antworten": [
          "kolumbus",
          "columbus"
        ],
        "loesung": "Christoph Kolumbus"
      },
      {
        "frage": "Wer erfand in Europa den Buchdruck mit beweglichen Lettern?",
        "antworten": [
          "gutenberg"
        ],
        "loesung": "Johannes Gutenberg"
      },
      {
        "frage": "Wie hieß die Mauer, die die Römer quer durch Nordengland bauten?",
        "antworten": [
          "hadrianswall",
          "hadrian"
        ],
        "loesung": "Der Hadrianswall"
      },
      {
        "frage": "Wie hieß der römische Feldherr, der Gallien eroberte und 44 vor Christus ermordet wurde?",
        "antworten": [
          "caesar",
          "cäsar"
        ],
        "loesung": "Julius Caesar"
      },
      {
        "frage": "Wie nennt man die Epoche zwischen Antike und Neuzeit?",
        "antworten": [
          "mittelalter"
        ],
        "loesung": "Das Mittelalter"
      },
      {
        "frage": "Wie heißt die Epoche der Wiederentdeckung der Antike ab dem 15. Jahrhundert?",
        "antworten": [
          "renaissance"
        ],
        "loesung": "Die Renaissance"
      },
      {
        "frage": "In welchem Land steht die Akropolis?",
        "antworten": [
          "griechenland"
        ],
        "loesung": "In Griechenland"
      },
      {
        "frage": "Wie hieß das Schiff, das 1912 nach einer Kollision mit einem Eisberg sank?",
        "antworten": [
          "titanic"
        ],
        "loesung": "Die Titanic"
      },
      {
        "frage": "Wie heißt die riesige Schutzmauer, die die Chinesen gegen Angreifer bauten?",
        "antworten": [
          "chinesische mauer",
          "große mauer"
        ],
        "loesung": "Die Chinesische Mauer"
      },
      {
        "frage": "Welcher Pharao wurde 1922 in einem nahezu unberührten Grab gefunden?",
        "antworten": [
          "tutanchamun"
        ],
        "loesung": "Tutanchamun"
      },
      {
        "frage": "Wer veröffentlichte 1517 die 95 Thesen?",
        "antworten": [
          "luther"
        ],
        "loesung": "Martin Luther"
      },
      {
        "frage": "Wie hieß das Reich, dessen Hauptstadt Konstantinopel war?",
        "antworten": [
          "byzantinisches reich",
          "byzanz",
          "oströmisches reich"
        ],
        "loesung": "Das Byzantinische Reich"
      },
      {
        "frage": "Wie heißt das typische Steinwerkzeug der Altsteinzeit?",
        "antworten": [
          "faustkeil"
        ],
        "loesung": "Der Faustkeil"
      },
      {
        "frage": "Schätzfrage: Wie hoch ist die Cheops-Pyramide heute?",
        "schaetzfrage": true,
        "loesung": "rund 139 Meter"
      },
      {
        "frage": "Schätzfrage: Wie lang ist die Chinesische Mauer mit allen Abschnitten?",
        "schaetzfrage": true,
        "loesung": "rund 21.000 Kilometer"
      }
    ],
    "mittelstufe": [],
    "erwachsene": [
      {
        "frage": "In welchem Jahr wurde die Berliner Mauer gebaut?",
        "antworten": [
          "1961"
        ],
        "loesung": "1961",
        "zahlenbereich": [
          1961,
          1961
        ]
      },
      {
        "frage": "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?",
        "antworten": [
          "adenauer"
        ],
        "loesung": "Konrad Adenauer"
      },
      {
        "frage": "Wer war die erste Bundeskanzlerin Deutschlands?",
        "antworten": [
          "merkel"
        ],
        "loesung": "Angela Merkel"
      },
      {
        "frage": "In welchem Jahr wurde das Grundgesetz verkündet?",
        "antworten": [
          "1949"
        ],
        "loesung": "1949",
        "zahlenbereich": [
          1949,
          1949
        ]
      },
      {
        "frage": "In welchem Jahr wurde die deutsche Wiedervereinigung vollzogen?",
        "antworten": [
          "1990"
        ],
        "loesung": "1990",
        "zahlenbereich": [
          1990,
          1990
        ]
      },
      {
        "frage": "In welchem Jahr wurde das Deutsche Kaiserreich gegründet?",
        "antworten": [
          "1871"
        ],
        "loesung": "1871",
        "zahlenbereich": [
          1871,
          1871
        ]
      },
      {
        "frage": "Mit welchem Ereignis begann 1789 die Französische Revolution?",
        "antworten": [
          "bastille"
        ],
        "loesung": "Mit dem Sturm auf die Bastille"
      },
      {
        "frage": "Wer war der erste römische Kaiser?",
        "antworten": [
          "augustus",
          "oktavian",
          "octavian"
        ],
        "loesung": "Augustus"
      },
      {
        "frage": "Welcher Vertrag regelte 1919 den Frieden mit Deutschland nach dem Ersten Weltkrieg?",
        "antworten": [
          "versailler vertrag",
          "versailles"
        ],
        "loesung": "Der Versailler Vertrag"
      },
      {
        "frage": "In welchem Jahr begann der Erste Weltkrieg?",
        "antworten": [
          "1914"
        ],
        "loesung": "1914",
        "zahlenbereich": [
          1914,
          1914
        ]
      },
      {
        "frage": "In welchem Jahr endete der Dreißigjährige Krieg?",
        "antworten": [
          "1648"
        ],
        "loesung": "1648",
        "zahlenbereich": [
          1648,
          1648
        ]
      },
      {
        "frage": "Wie hieß das US-Programm zum Wiederaufbau Westeuropas nach 1945?",
        "antworten": [
          "marshallplan"
        ],
        "loesung": "Der Marshallplan"
      },
      {
        "frage": "Welche englische Königin regierte von 1558 bis 1603?",
        "antworten": [
          "elisabeth",
          "elizabeth"
        ],
        "loesung": "Elisabeth I."
      },
      {
        "frage": "Wie hieß der bekannteste Grenzübergang der Berliner Mauer?",
        "antworten": [
          "checkpoint charlie"
        ],
        "loesung": "Checkpoint Charlie"
      },
      {
        "frage": "Wer war der erste Präsident der Vereinigten Staaten?",
        "antworten": [
          "washington"
        ],
        "loesung": "George Washington"
      },
      {
        "frage": "Auf welcher Konferenz entschieden die Siegermächte 1945 über Deutschland?",
        "antworten": [
          "potsdam",
          "potsdamer konferenz"
        ],
        "loesung": "Auf der Potsdamer Konferenz"
      },
      {
        "frage": "In welchem Jahr fiel Konstantinopel an die Osmanen?",
        "antworten": [
          "1453"
        ],
        "loesung": "1453",
        "zahlenbereich": [
          1453,
          1453
        ]
      },
      {
        "frage": "In welchem Jahr wurde Karl der Große zum Kaiser gekrönt?",
        "antworten": [
          "800"
        ],
        "loesung": "Im Jahr 800",
        "zahlenbereich": [
          800,
          800
        ]
      },
      {
        "frage": "Schätzfrage: In welchem Jahr wurde Rom der Sage nach gegründet?",
        "schaetzfrage": true,
        "loesung": "753 vor Christus"
      },
      {
        "frage": "Schätzfrage: Wie viele Menschen lebten um 1900 im Deutschen Reich?",
        "schaetzfrage": true,
        "loesung": "rund 56 Millionen"
      }
    ]
  }
};
