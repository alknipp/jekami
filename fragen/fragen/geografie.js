/* ------------------------------------------------------------
   Jekami Quiz - Themengebiet: Geografie

   Aufbau einer normalen Frage:
     { frage: "...", antworten: ["variante","variante"], loesung: "..." }
     optional: zahlenbereich: [min, max]

   Schaetzfrage:
     { frage: "Schaetzfrage: ...", schaetzfrage: true, loesung: "rund 105 Meter" }

   Reihenfolge egal - die App mischt bei jeder Runde.
   Regeln und Alterskalibrierung stehen in CLAUDE.md.
   ------------------------------------------------------------ */

JEKAMI_FRAGEN.geografie = {
  "name": "Geografie",
  "symbol": "🌍",
  "stufen": {
    "grundschule": [
      {
        "frage": "In welchem Land wohnen wir?",
        "antworten": [
          "deutschland"
        ],
        "loesung": "Deutschland"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Deutschland?",
        "antworten": [
          "berlin"
        ],
        "loesung": "Berlin"
      },
      {
        "frage": "Wie nennt man eine Weltkarte in Form einer Kugel?",
        "antworten": [
          "globus"
        ],
        "loesung": "Ein Globus"
      },
      {
        "frage": "Welche Farbe hat das Wasser auf einer Landkarte?",
        "antworten": [
          "blau"
        ],
        "loesung": "Blau"
      },
      {
        "frage": "Welche Farbe haben Wälder auf einer Landkarte?",
        "antworten": [
          "grün"
        ],
        "loesung": "Grün"
      },
      {
        "frage": "In welcher Himmelsrichtung geht die Sonne auf?",
        "antworten": [
          "osten"
        ],
        "loesung": "Im Osten"
      },
      {
        "frage": "In welcher Himmelsrichtung geht die Sonne unter?",
        "antworten": [
          "westen"
        ],
        "loesung": "Im Westen"
      },
      {
        "frage": "Wie nennt man einen Berg, aus dem Feuer und Lava kommen?",
        "antworten": [
          "vulkan"
        ],
        "loesung": "Ein Vulkan"
      },
      {
        "frage": "Wie nennt man Land, das ringsum von Wasser umgeben ist?",
        "antworten": [
          "insel"
        ],
        "loesung": "Eine Insel"
      },
      {
        "frage": "Wie heißt das Meer im Norden Deutschlands, das mit N anfängt?",
        "antworten": [
          "nordsee"
        ],
        "loesung": "Die Nordsee"
      },
      {
        "frage": "Wie heißt der höchste Berg Deutschlands?",
        "antworten": [
          "zugspitze"
        ],
        "loesung": "Die Zugspitze"
      },
      {
        "frage": "Wie nennt man ein sehr trockenes Gebiet voller Sand?",
        "antworten": [
          "wüste"
        ],
        "loesung": "Eine Wüste"
      },
      {
        "frage": "Wie nennt man einen Wald, in dem es fast jeden Tag regnet?",
        "antworten": [
          "regenwald"
        ],
        "loesung": "Ein Regenwald"
      },
      {
        "frage": "Welches Land hat die Form eines Stiefels?",
        "antworten": [
          "italien"
        ],
        "loesung": "Italien"
      },
      {
        "frage": "In welcher Stadt steht der Eiffelturm?",
        "antworten": [
          "paris"
        ],
        "loesung": "In Paris"
      },
      {
        "frage": "In welchem Land steht der Eiffelturm?",
        "antworten": [
          "frankreich"
        ],
        "loesung": "In Frankreich"
      },
      {
        "frage": "Welches Tier lebt am Nordpol?",
        "antworten": [
          "eisbär",
          "eisbären"
        ],
        "loesung": "Der Eisbär"
      },
      {
        "frage": "Welches Tier lebt am Südpol?",
        "antworten": [
          "pinguin",
          "pinguine"
        ],
        "loesung": "Der Pinguin"
      },
      {
        "frage": "Wie heißt der Erdteil, in dem Deutschland liegt?",
        "antworten": [
          "europa"
        ],
        "loesung": "Europa"
      },
      {
        "frage": "An welchem Fluss liegt Hamburg?",
        "antworten": [
          "elbe"
        ],
        "loesung": "An der Elbe"
      },
      {
        "frage": "Wie nennt man einen Berg aus Eis, der im Meer schwimmt?",
        "antworten": [
          "eisberg"
        ],
        "loesung": "Ein Eisberg"
      },
      {
        "frage": "Wie nennt man die Stadt, in der die Regierung eines Landes sitzt?",
        "antworten": [
          "hauptstadt"
        ],
        "loesung": "Die Hauptstadt"
      },
      {
        "frage": "Wie nennt man viele hohe Berge nebeneinander?",
        "antworten": [
          "gebirge"
        ],
        "loesung": "Ein Gebirge"
      },
      {
        "frage": "Wie heißen die hohen Berge im Süden Deutschlands und in Österreich?",
        "antworten": [
          "alpen"
        ],
        "loesung": "Die Alpen"
      },
      {
        "frage": "Warum kann man Meerwasser nicht trinken?",
        "antworten": [
          "salz",
          "salzig"
        ],
        "loesung": "Weil es salzig ist"
      },
      {
        "frage": "Welches Land südlich von Deutschland ist für Käse und hohe Berge bekannt?",
        "antworten": [
          "schweiz"
        ],
        "loesung": "Die Schweiz"
      },
      {
        "frage": "Wie nennt man das große Wasser, in dem Wale und Haie leben?",
        "antworten": [
          "meer",
          "ozean"
        ],
        "loesung": "Das Meer"
      },
      {
        "frage": "Schätzfrage: Wie viele Bundesländer hat Deutschland?",
        "schaetzfrage": true,
        "loesung": "16 Bundesländer"
      },
      {
        "frage": "Schätzfrage: Wie viele Kontinente gibt es?",
        "schaetzfrage": true,
        "loesung": "7 Kontinente"
      },
      {
        "frage": "Schätzfrage: Wie viele Menschen leben in Deutschland?",
        "schaetzfrage": true,
        "loesung": "rund 84 Millionen"
      }
    ],
    "unterstufe": [
      {
        "frage": "Wie heißt die Hauptstadt von Frankreich?",
        "antworten": [
          "paris"
        ],
        "loesung": "Paris"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Italien?",
        "antworten": [
          "rom"
        ],
        "loesung": "Rom"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Spanien?",
        "antworten": [
          "madrid"
        ],
        "loesung": "Madrid"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Österreich?",
        "antworten": [
          "wien"
        ],
        "loesung": "Wien"
      },
      {
        "frage": "Wie heißt die Hauptstadt der Schweiz?",
        "antworten": [
          "bern"
        ],
        "loesung": "Bern"
      },
      {
        "frage": "Wie heißt die Hauptstadt der Niederlande?",
        "antworten": [
          "amsterdam"
        ],
        "loesung": "Amsterdam"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Baden-Württemberg?",
        "antworten": [
          "stuttgart"
        ],
        "loesung": "Stuttgart"
      },
      {
        "frage": "Wie viele Bundesländer hat Deutschland?",
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
        "frage": "Welches Bundesland ist flächenmäßig das größte?",
        "antworten": [
          "bayern"
        ],
        "loesung": "Bayern"
      },
      {
        "frage": "Welcher Fluss fließt durch Köln?",
        "antworten": [
          "rhein"
        ],
        "loesung": "Der Rhein"
      },
      {
        "frage": "Welcher Fluss fließt durch Wien?",
        "antworten": [
          "donau"
        ],
        "loesung": "Die Donau"
      },
      {
        "frage": "An welchem Meer liegt Kiel?",
        "antworten": [
          "ostsee"
        ],
        "loesung": "An der Ostsee"
      },
      {
        "frage": "Welcher Fluss ist auf deutschem Gebiet der längste?",
        "antworten": [
          "rhein"
        ],
        "loesung": "Der Rhein"
      },
      {
        "frage": "Wie heißt der größte See, der vollständig in Deutschland liegt?",
        "antworten": [
          "müritz"
        ],
        "loesung": "Die Müritz"
      },
      {
        "frage": "Wie heißt der höchste Berg der Erde?",
        "antworten": [
          "mount everest",
          "everest"
        ],
        "loesung": "Der Mount Everest"
      },
      {
        "frage": "Wie heißt der größte Ozean der Erde?",
        "antworten": [
          "pazifik",
          "pazifischer ozean",
          "stiller ozean"
        ],
        "loesung": "Der Pazifik"
      },
      {
        "frage": "Welches Meer liegt zwischen Europa und Afrika?",
        "antworten": [
          "mittelmeer"
        ],
        "loesung": "Das Mittelmeer"
      },
      {
        "frage": "Wie viele Kontinente gibt es?",
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
        "frage": "Welcher Kontinent ist der größte?",
        "antworten": [
          "asien"
        ],
        "loesung": "Asien"
      },
      {
        "frage": "In welchem Erdteil liegt Ägypten?",
        "antworten": [
          "afrika"
        ],
        "loesung": "In Afrika"
      },
      {
        "frage": "Wie heißt die größte Wüste Afrikas?",
        "antworten": [
          "sahara"
        ],
        "loesung": "Die Sahara"
      },
      {
        "frage": "Welches Land ist flächenmäßig das größte der Welt?",
        "antworten": [
          "russland"
        ],
        "loesung": "Russland"
      },
      {
        "frage": "Welches Land hat die meisten Einwohner?",
        "antworten": [
          "indien"
        ],
        "loesung": "Indien"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Japan?",
        "antworten": [
          "tokio",
          "tokyo"
        ],
        "loesung": "Tokio"
      },
      {
        "frage": "Wie heißt die Hauptstadt der Vereinigten Staaten?",
        "antworten": [
          "washington"
        ],
        "loesung": "Washington"
      },
      {
        "frage": "Wie nennt man die gedachte Linie, die die Erde in Nord und Süd teilt?",
        "antworten": [
          "äquator"
        ],
        "loesung": "Der Äquator"
      },
      {
        "frage": "Welches Gebirge trennt Europa von Asien?",
        "antworten": [
          "ural"
        ],
        "loesung": "Der Ural"
      },
      {
        "frage": "Wie nennt man ein Buch voller Landkarten?",
        "antworten": [
          "atlas"
        ],
        "loesung": "Ein Atlas"
      },
      {
        "frage": "Schätzfrage: Wie hoch ist der Mount Everest?",
        "schaetzfrage": true,
        "loesung": "8849 Meter"
      },
      {
        "frage": "Schätzfrage: Wie viele Menschen leben auf der Erde?",
        "schaetzfrage": true,
        "loesung": "rund 8 Milliarden"
      }
    ],
    "mittelstufe": [
      {
        "frage": "Wie heißt die Hauptstadt von Kanada?",
        "antworten": [
          "ottawa"
        ],
        "loesung": "Ottawa"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Australien?",
        "antworten": [
          "canberra"
        ],
        "loesung": "Canberra"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Brasilien?",
        "antworten": [
          "brasilia",
          "brasília"
        ],
        "loesung": "Brasília"
      },
      {
        "frage": "Wie heißt die Hauptstadt der Türkei?",
        "antworten": [
          "ankara"
        ],
        "loesung": "Ankara"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Polen?",
        "antworten": [
          "warschau"
        ],
        "loesung": "Warschau"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Norwegen?",
        "antworten": [
          "oslo"
        ],
        "loesung": "Oslo"
      },
      {
        "frage": "Wie heißt der Regierungssitz Südafrikas?",
        "antworten": [
          "pretoria"
        ],
        "loesung": "Pretoria"
      },
      {
        "frage": "Wie nennt man die Lehre von den sich bewegenden Erdplatten?",
        "antworten": [
          "plattentektonik"
        ],
        "loesung": "Die Plattentektonik"
      },
      {
        "frage": "Wie heißt die Klimazone beiderseits des Äquators?",
        "antworten": [
          "tropen",
          "tropisch"
        ],
        "loesung": "Die Tropen"
      },
      {
        "frage": "Wie heißt die Meerenge zwischen Spanien und Marokko?",
        "antworten": [
          "gibraltar"
        ],
        "loesung": "Die Straße von Gibraltar"
      },
      {
        "frage": "Welcher Kanal verbindet das Mittelmeer mit dem Roten Meer?",
        "antworten": [
          "suezkanal",
          "suez"
        ],
        "loesung": "Der Suezkanal"
      },
      {
        "frage": "Welcher Kanal verbindet Atlantik und Pazifik in Mittelamerika?",
        "antworten": [
          "panamakanal",
          "panama"
        ],
        "loesung": "Der Panamakanal"
      },
      {
        "frage": "Wie heißt die tiefste Stelle der Weltmeere?",
        "antworten": [
          "marianengraben"
        ],
        "loesung": "Der Marianengraben"
      },
      {
        "frage": "Wie viele Mitgliedstaaten hat die Europäische Union?",
        "antworten": [
          "27",
          "siebenundzwanzig"
        ],
        "loesung": "27",
        "zahlenbereich": [
          27,
          27
        ]
      },
      {
        "frage": "Wie heißt der wasserreichste Fluss der Erde?",
        "antworten": [
          "amazonas"
        ],
        "loesung": "Der Amazonas"
      },
      {
        "frage": "Welcher Fluss durchfließt Ägypten?",
        "antworten": [
          "nil"
        ],
        "loesung": "Der Nil"
      },
      {
        "frage": "Wie nennt man Boden, der dauerhaft gefroren bleibt?",
        "antworten": [
          "permafrost"
        ],
        "loesung": "Permafrost"
      },
      {
        "frage": "Wie heißt das kleinste Land der Welt?",
        "antworten": [
          "vatikan",
          "vatikanstadt"
        ],
        "loesung": "Die Vatikanstadt"
      },
      {
        "frage": "Wie heißt das Gebirge entlang der Westküste Südamerikas?",
        "antworten": [
          "anden"
        ],
        "loesung": "Die Anden"
      },
      {
        "frage": "Wie nennt man die Windsysteme, die Südasien die Regenzeit bringen?",
        "antworten": [
          "monsun"
        ],
        "loesung": "Der Monsun"
      },
      {
        "frage": "Wie heißt der größte Binnensee der Erde?",
        "antworten": [
          "kaspisches meer",
          "kaspisee"
        ],
        "loesung": "Das Kaspische Meer"
      },
      {
        "frage": "Wie heißt der größte See Afrikas?",
        "antworten": [
          "victoriasee",
          "viktoriasee"
        ],
        "loesung": "Der Victoriasee"
      },
      {
        "frage": "Wie nennt man die Trockenzone südlich der Sahara?",
        "antworten": [
          "sahelzone",
          "sahel"
        ],
        "loesung": "Die Sahelzone"
      },
      {
        "frage": "Welches Bundesland hat die meisten Einwohner?",
        "antworten": [
          "nordrhein-westfalen",
          "nrw",
          "nordrhein westfalen"
        ],
        "loesung": "Nordrhein-Westfalen"
      },
      {
        "frage": "Wie nennt man die Linie im Pazifik, an der ein Kalendertag wechselt?",
        "antworten": [
          "datumsgrenze"
        ],
        "loesung": "Die Datumsgrenze"
      },
      {
        "frage": "Wie nennt man Linien gleicher Höhe auf einer Karte?",
        "antworten": [
          "höhenlinien",
          "isohypsen"
        ],
        "loesung": "Höhenlinien"
      },
      {
        "frage": "Wie nennt man eine Stadt mit mehr als einer Million Einwohnern?",
        "antworten": [
          "millionenstadt"
        ],
        "loesung": "Eine Millionenstadt"
      },
      {
        "frage": "Welches Meer trennt Schweden von Estland?",
        "antworten": [
          "ostsee"
        ],
        "loesung": "Die Ostsee"
      },
      {
        "frage": "Schätzfrage: Wie viele Staaten gibt es auf der Erde?",
        "schaetzfrage": true,
        "loesung": "rund 195"
      },
      {
        "frage": "Schätzfrage: Wie tief ist der Marianengraben?",
        "schaetzfrage": true,
        "loesung": "rund 11.000 Meter"
      }
    ],
    "erwachsene": [
      {
        "frage": "Wie heißt die Hauptstadt von Neuseeland?",
        "antworten": [
          "wellington"
        ],
        "loesung": "Wellington"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Portugal?",
        "antworten": [
          "lissabon"
        ],
        "loesung": "Lissabon"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Ungarn?",
        "antworten": [
          "budapest"
        ],
        "loesung": "Budapest"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Kasachstan?",
        "antworten": [
          "astana"
        ],
        "loesung": "Astana"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Marokko?",
        "antworten": [
          "rabat"
        ],
        "loesung": "Rabat"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Kenia?",
        "antworten": [
          "nairobi"
        ],
        "loesung": "Nairobi"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Vietnam?",
        "antworten": [
          "hanoi"
        ],
        "loesung": "Hanoi"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Chile?",
        "antworten": [
          "santiago"
        ],
        "loesung": "Santiago de Chile"
      },
      {
        "frage": "Wie heißt der höchste Berg Afrikas?",
        "antworten": [
          "kilimandscharo",
          "kilimanjaro"
        ],
        "loesung": "Der Kilimandscharo"
      },
      {
        "frage": "Wie heißt der höchste Berg Südamerikas?",
        "antworten": [
          "aconcagua"
        ],
        "loesung": "Der Aconcagua"
      },
      {
        "frage": "Wie heißt die Meerenge, an der Istanbul liegt?",
        "antworten": [
          "bosporus"
        ],
        "loesung": "Der Bosporus"
      },
      {
        "frage": "Welches Land hat die längste Küstenlinie der Welt?",
        "antworten": [
          "kanada"
        ],
        "loesung": "Kanada"
      },
      {
        "frage": "Wie heißt der größte Gletscher der Alpen?",
        "antworten": [
          "aletschgletscher",
          "aletsch"
        ],
        "loesung": "Der Große Aletschgletscher"
      },
      {
        "frage": "In welcher Stadt fließen Rhein und Mosel zusammen?",
        "antworten": [
          "koblenz"
        ],
        "loesung": "In Koblenz"
      },
      {
        "frage": "Welches Land Afrikas ist flächenmäßig das größte?",
        "antworten": [
          "algerien"
        ],
        "loesung": "Algerien"
      },
      {
        "frage": "Zu welcher Inselgruppe gehört Teneriffa?",
        "antworten": [
          "kanaren",
          "kanarische inseln"
        ],
        "loesung": "Zu den Kanarischen Inseln"
      },
      {
        "frage": "Welcher Staat liegt vollständig innerhalb Südafrikas?",
        "antworten": [
          "lesotho"
        ],
        "loesung": "Lesotho"
      },
      {
        "frage": "Welches Land der Europäischen Union hat die meisten Einwohner?",
        "antworten": [
          "deutschland"
        ],
        "loesung": "Deutschland"
      },
      {
        "frage": "Wie heißt der längste Fluss Europas?",
        "antworten": [
          "wolga"
        ],
        "loesung": "Die Wolga"
      },
      {
        "frage": "Wie heißt der größte Seehafen Deutschlands?",
        "antworten": [
          "hamburg"
        ],
        "loesung": "Hamburg"
      },
      {
        "frage": "Mit welchem Land hat Deutschland die längste gemeinsame Grenze?",
        "antworten": [
          "österreich"
        ],
        "loesung": "Mit Österreich"
      },
      {
        "frage": "Welches Land war früher unter dem Namen Persien bekannt?",
        "antworten": [
          "iran"
        ],
        "loesung": "Der Iran"
      },
      {
        "frage": "Welche beiden Staaten teilen sich die Insel Hispaniola?",
        "antworten": [
          "haiti",
          "dominikanische republik"
        ],
        "loesung": "Haiti und die Dominikanische Republik"
      },
      {
        "frage": "Wie heißt das größte Korallenriff der Erde?",
        "antworten": [
          "great barrier reef",
          "großes barriereriff"
        ],
        "loesung": "Das Great Barrier Reef"
      },
      {
        "frage": "Wie heißt der Breitenkreis bei 23,5 Grad nördlicher Breite?",
        "antworten": [
          "wendekreis des krebses",
          "nördlicher wendekreis"
        ],
        "loesung": "Der Wendekreis des Krebses"
      },
      {
        "frage": "Wie nennt man es, wenn fruchtbares Land zur Wüste wird?",
        "antworten": [
          "desertifikation",
          "wüstenbildung"
        ],
        "loesung": "Desertifikation"
      },
      {
        "frage": "In welchem Land liegt Machu Picchu?",
        "antworten": [
          "peru"
        ],
        "loesung": "In Peru"
      },
      {
        "frage": "Wie heißt der kalte Meeresstrom vor der Küste Perus?",
        "antworten": [
          "humboldtstrom",
          "humboldt"
        ],
        "loesung": "Der Humboldtstrom"
      },
      {
        "frage": "Schätzfrage: Wie groß ist die Fläche Deutschlands?",
        "schaetzfrage": true,
        "loesung": "rund 358.000 Quadratkilometer"
      },
      {
        "frage": "Schätzfrage: Wie lang ist der Äquator?",
        "schaetzfrage": true,
        "loesung": "rund 40.000 Kilometer"
      }
    ]
  }
};
