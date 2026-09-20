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
      },
      {
        "frage": "Auf welchem Erdteil leben Löwen und Elefanten in freier Wildbahn?",
        "antworten": [
          "afrika"
        ],
        "loesung": "In Afrika"
      },
      {
        "frage": "In welchem Land steht die Freiheitsstatue?",
        "antworten": [
          "usa",
          "amerika",
          "vereinigte staaten"
        ],
        "loesung": "In den USA"
      },
      {
        "frage": "In welchem Land leben Kängurus?",
        "antworten": [
          "australien"
        ],
        "loesung": "In Australien"
      },
      {
        "frage": "In welchem Land steht die Chinesische Mauer?",
        "antworten": [
          "china"
        ],
        "loesung": "In China"
      },
      {
        "frage": "In welchem Land wurden Pizza und Spaghetti erfunden?",
        "antworten": [
          "italien"
        ],
        "loesung": "In Italien"
      },
      {
        "frage": "Welches Land ist für Tulpen und Windmühlen bekannt?",
        "antworten": [
          "niederlande",
          "holland"
        ],
        "loesung": "Die Niederlande"
      },
      {
        "frage": "Welche Stadt hat einen berühmten schiefen Turm?",
        "antworten": [
          "pisa"
        ],
        "loesung": "Pisa"
      },
      {
        "frage": "Welcher Fluss fließt durch Paris?",
        "antworten": [
          "seine"
        ],
        "loesung": "Die Seine"
      },
      {
        "frage": "Welches Meer liegt zwischen Deutschland und Schweden?",
        "antworten": [
          "ostsee"
        ],
        "loesung": "Die Ostsee"
      },
      {
        "frage": "Welche Farbe hat die Flagge der Schweiz?",
        "antworten": [
          "rot",
          "rot mit weißem kreuz"
        ],
        "loesung": "Rot mit weißem Kreuz"
      },
      {
        "frage": "Wie nennt man den Ort, an dem Schiffe anlegen?",
        "antworten": [
          "hafen"
        ],
        "loesung": "Ein Hafen"
      },
      {
        "frage": "In welcher deutschen Stadt ist der größte Hafen?",
        "antworten": [
          "hamburg"
        ],
        "loesung": "In Hamburg"
      },
      {
        "frage": "Wie nennt man die Stelle, an der ein Fluss ins Meer fließt?",
        "antworten": [
          "mündung"
        ],
        "loesung": "Die Mündung"
      },
      {
        "frage": "Wie nennt man den Anfang eines Flusses?",
        "antworten": [
          "quelle"
        ],
        "loesung": "Die Quelle"
      },
      {
        "frage": "Wie nennt man das Eis, das auf hohen Bergen liegt und langsam fließt?",
        "antworten": [
          "gletscher"
        ],
        "loesung": "Ein Gletscher"
      },
      {
        "frage": "Wie heißt der längste Fluss Afrikas?",
        "antworten": [
          "nil"
        ],
        "loesung": "Der Nil"
      },
      {
        "frage": "Auf welchem Erdteil leben Pinguine?",
        "antworten": [
          "antarktis",
          "südpol"
        ],
        "loesung": "In der Antarktis"
      },
      {
        "frage": "Wie nennt man Menschen, die in der Wüste mit Zelten umherziehen?",
        "antworten": [
          "nomaden"
        ],
        "loesung": "Nomaden"
      },
      {
        "frage": "Wie nennt man eine Karte, auf der alle Straßen eingezeichnet sind?",
        "antworten": [
          "straßenkarte",
          "landkarte"
        ],
        "loesung": "Eine Straßenkarte"
      },
      {
        "frage": "Wie nennt man ein Gebiet, in dem es das ganze Jahr sehr warm ist?",
        "antworten": [
          "tropen",
          "tropisch"
        ],
        "loesung": "Die Tropen"
      },
      {
        "frage": "Wie heißen die vier Himmelsrichtungen?",
        "antworten": [
          "norden osten süden westen",
          "norden süden osten westen"
        ],
        "loesung": "Norden, Osten, Süden, Westen"
      },
      {
        "frage": "Welche Himmelsrichtung liegt Norden gegenüber?",
        "antworten": [
          "süden"
        ],
        "loesung": "Süden"
      },
      {
        "frage": "Welche Himmelsrichtung ist auf einer Landkarte oben?",
        "antworten": [
          "norden"
        ],
        "loesung": "Norden"
      },
      {
        "frage": "Welche Farbe haben Berge auf vielen Landkarten?",
        "antworten": [
          "braun"
        ],
        "loesung": "Braun"
      },
      {
        "frage": "Wie nennt man die Erklärung der Zeichen auf einer Karte?",
        "antworten": [
          "legende"
        ],
        "loesung": "Die Legende"
      },
      {
        "frage": "Wie nennt man eine Karte, die nur eine Stadt zeigt?",
        "antworten": [
          "stadtplan"
        ],
        "loesung": "Ein Stadtplan"
      },
      {
        "frage": "Wie nennt man die Linie, an der Himmel und Erde sich zu berühren scheinen?",
        "antworten": [
          "horizont"
        ],
        "loesung": "Der Horizont"
      },
      {
        "frage": "An welchem Fluss liegt Köln?",
        "antworten": [
          "rhein"
        ],
        "loesung": "Am Rhein"
      },
      {
        "frage": "An welchem Fluss liegt Frankfurt?",
        "antworten": [
          "main"
        ],
        "loesung": "Am Main"
      },
      {
        "frage": "Wie heißt die größte Stadt Deutschlands?",
        "antworten": [
          "berlin"
        ],
        "loesung": "Berlin"
      },
      {
        "frage": "Wie heißt die zweitgrößte Stadt Deutschlands?",
        "antworten": [
          "hamburg"
        ],
        "loesung": "Hamburg"
      },
      {
        "frage": "In welchem Bundesland liegt München?",
        "antworten": [
          "bayern"
        ],
        "loesung": "In Bayern"
      },
      {
        "frage": "In welchem Bundesland liegt Dresden?",
        "antworten": [
          "sachsen"
        ],
        "loesung": "In Sachsen"
      },
      {
        "frage": "Welches Bundesland liegt ganz im Norden?",
        "antworten": [
          "schleswig-holstein",
          "schleswig holstein"
        ],
        "loesung": "Schleswig-Holstein"
      },
      {
        "frage": "Wie heißt die Insel in der Nordsee mit den roten Felsen?",
        "antworten": [
          "helgoland"
        ],
        "loesung": "Helgoland"
      },
      {
        "frage": "Wie heißt das Meer, das bei Ebbe trockenfällt?",
        "antworten": [
          "wattenmeer",
          "watt"
        ],
        "loesung": "Das Wattenmeer"
      },
      {
        "frage": "Was passiert bei Ebbe?",
        "antworten": [
          "wasser geht zurück",
          "wasser läuft ab",
          "es wird weniger"
        ],
        "loesung": "Das Wasser läuft ab"
      },
      {
        "frage": "Was passiert bei Flut?",
        "antworten": [
          "wasser kommt",
          "wasser steigt"
        ],
        "loesung": "Das Wasser kommt zurück"
      },
      {
        "frage": "Auf welchem Erdteil liegt Indien?",
        "antworten": [
          "asien"
        ],
        "loesung": "In Asien"
      },
      {
        "frage": "Auf welchem Erdteil liegt Brasilien?",
        "antworten": [
          "südamerika"
        ],
        "loesung": "In Südamerika"
      },
      {
        "frage": "Auf welchem Erdteil liegt Kanada?",
        "antworten": [
          "nordamerika"
        ],
        "loesung": "In Nordamerika"
      },
      {
        "frage": "In welchem Land leben Pandas in freier Natur?",
        "antworten": [
          "china"
        ],
        "loesung": "In China"
      },
      {
        "frage": "Welches Tier mit Beutel lebt in Australien?",
        "antworten": [
          "känguru",
          "koala"
        ],
        "loesung": "Das Känguru"
      },
      {
        "frage": "In welchem Land steht der Kreml?",
        "antworten": [
          "russland"
        ],
        "loesung": "In Russland"
      },
      {
        "frage": "In welchem Land steht die Akropolis?",
        "antworten": [
          "griechenland"
        ],
        "loesung": "In Griechenland"
      },
      {
        "frage": "Welche Stadt ist für ihre Kanäle und Gondeln bekannt?",
        "antworten": [
          "venedig"
        ],
        "loesung": "Venedig"
      },
      {
        "frage": "In welchem Land steht der Big Ben?",
        "antworten": [
          "england",
          "großbritannien",
          "vereinigtes königreich"
        ],
        "loesung": "In England"
      },
      {
        "frage": "Wie heißt die Hauptstadt von England?",
        "antworten": [
          "london"
        ],
        "loesung": "London"
      },
      {
        "frage": "Welches große Land liegt östlich von Deutschland?",
        "antworten": [
          "polen"
        ],
        "loesung": "Polen"
      },
      {
        "frage": "Wie viele Ozeane gibt es?",
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
        "frage": "Wie nennt man mehrere Inseln, die zusammenliegen?",
        "antworten": [
          "inselgruppe",
          "archipel"
        ],
        "loesung": "Eine Inselgruppe"
      },
      {
        "frage": "Was ist größer: ein See oder ein Meer?",
        "antworten": [
          "meer",
          "das meer"
        ],
        "loesung": "Das Meer"
      },
      {
        "frage": "Wie nennt man einen besonders großen Fluss?",
        "antworten": [
          "strom"
        ],
        "loesung": "Ein Strom"
      },
      {
        "frage": "Wie nennt man Regen, Sonne und Wind zusammen?",
        "antworten": [
          "wetter"
        ],
        "loesung": "Das Wetter"
      },
      {
        "frage": "Wie nennt man das Wetter, gemessen über viele Jahre?",
        "antworten": [
          "klima"
        ],
        "loesung": "Das Klima"
      },
      {
        "frage": "Wo auf der Erde ist es am kältesten?",
        "antworten": [
          "pole",
          "an den polen",
          "nordpol",
          "südpol"
        ],
        "loesung": "An den Polen"
      },
      {
        "frage": "Wo auf der Erde ist es am wärmsten?",
        "antworten": [
          "äquator",
          "am äquator"
        ],
        "loesung": "Am Äquator"
      },
      {
        "frage": "Wie nennt man ein Land ohne Zugang zum Meer?",
        "antworten": [
          "binnenland"
        ],
        "loesung": "Ein Binnenland"
      },
      {
        "frage": "Welche Sprache spricht man in Frankreich?",
        "antworten": [
          "französisch"
        ],
        "loesung": "Französisch"
      },
      {
        "frage": "Welche Sprache spricht man in Spanien?",
        "antworten": [
          "spanisch"
        ],
        "loesung": "Spanisch"
      },
      {
        "frage": "Welche Sprache spricht man in Italien?",
        "antworten": [
          "italienisch"
        ],
        "loesung": "Italienisch"
      },
      {
        "frage": "In welchem Land liegt Wien?",
        "antworten": [
          "österreich"
        ],
        "loesung": "In Österreich"
      },
      {
        "frage": "In welchem Land liegt Zürich?",
        "antworten": [
          "schweiz"
        ],
        "loesung": "In der Schweiz"
      },
      {
        "frage": "Wie heißt das kleine Nachbarland mit der Hauptstadt Luxemburg?",
        "antworten": [
          "luxemburg"
        ],
        "loesung": "Luxemburg"
      },
      {
        "frage": "Welches Land ist für seine Fjorde bekannt?",
        "antworten": [
          "norwegen"
        ],
        "loesung": "Norwegen"
      },
      {
        "frage": "Welches Inselland im Norden ist für Vulkane und heiße Quellen bekannt?",
        "antworten": [
          "island"
        ],
        "loesung": "Island"
      },
      {
        "frage": "Wie nennt man eine Stelle, an der Wasser über eine Felskante stürzt?",
        "antworten": [
          "wasserfall"
        ],
        "loesung": "Ein Wasserfall"
      },
      {
        "frage": "Wie nennt man ein Tal, durch das ein Fluss fließt?",
        "antworten": [
          "flusstal",
          "tal"
        ],
        "loesung": "Ein Flusstal"
      },
      {
        "frage": "Schätzfrage: Wie viele Nachbarländer hat Deutschland?",
        "schaetzfrage": true,
        "loesung": "9 Nachbarländer"
      },
      {
        "frage": "Schätzfrage: Wie weit ist es von Hamburg nach München Luftlinie?",
        "schaetzfrage": true,
        "loesung": "rund 600 Kilometer"
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
      },
      {
        "frage": "Wie heißt die Hauptstadt von Belgien?",
        "antworten": [
          "brüssel"
        ],
        "loesung": "Brüssel"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Dänemark?",
        "antworten": [
          "kopenhagen"
        ],
        "loesung": "Kopenhagen"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Schweden?",
        "antworten": [
          "stockholm"
        ],
        "loesung": "Stockholm"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Griechenland?",
        "antworten": [
          "athen"
        ],
        "loesung": "Athen"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Russland?",
        "antworten": [
          "moskau"
        ],
        "loesung": "Moskau"
      },
      {
        "frage": "Wie heißt die Hauptstadt von China?",
        "antworten": [
          "peking",
          "beijing"
        ],
        "loesung": "Peking"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Bayern?",
        "antworten": [
          "münchen"
        ],
        "loesung": "München"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Nordrhein-Westfalen?",
        "antworten": [
          "düsseldorf"
        ],
        "loesung": "Düsseldorf"
      },
      {
        "frage": "Nenne ein Bundesland, das zugleich eine Stadt ist.",
        "antworten": [
          "berlin",
          "hamburg",
          "bremen"
        ],
        "loesung": "Berlin, Hamburg oder Bremen"
      },
      {
        "frage": "Welcher Fluss fließt durch Frankfurt?",
        "antworten": [
          "main"
        ],
        "loesung": "Der Main"
      },
      {
        "frage": "Welcher Fluss fließt durch Dresden?",
        "antworten": [
          "elbe"
        ],
        "loesung": "Die Elbe"
      },
      {
        "frage": "Welches Mittelgebirge in Baden-Württemberg ist für Kuckucksuhren bekannt?",
        "antworten": [
          "schwarzwald"
        ],
        "loesung": "Der Schwarzwald"
      },
      {
        "frage": "Wie heißt die größte deutsche Insel?",
        "antworten": [
          "rügen"
        ],
        "loesung": "Rügen"
      },
      {
        "frage": "Wie heißt der zweitgrößte Ozean der Erde?",
        "antworten": [
          "atlantik",
          "atlantischer ozean"
        ],
        "loesung": "Der Atlantik"
      },
      {
        "frage": "Wie heißt die große Wüste in der Mongolei und in China?",
        "antworten": [
          "gobi"
        ],
        "loesung": "Die Gobi"
      },
      {
        "frage": "Auf welchem Kontinent liegt Brasilien?",
        "antworten": [
          "südamerika"
        ],
        "loesung": "In Südamerika"
      },
      {
        "frage": "Wie heißt der größte Regenwald der Erde?",
        "antworten": [
          "amazonas",
          "amazonas regenwald",
          "amazonien"
        ],
        "loesung": "Der Amazonas-Regenwald"
      },
      {
        "frage": "Wie heißt der Breitenkreis, ab dem die Sonne im Sommer nicht untergeht?",
        "antworten": [
          "polarkreis",
          "nördlicher polarkreis"
        ],
        "loesung": "Der Polarkreis"
      },
      {
        "frage": "Wie heißt der höchste Berg Österreichs?",
        "antworten": [
          "großglockner"
        ],
        "loesung": "Der Großglockner"
      },
      {
        "frage": "Welcher südostasiatische Staat besteht aus über 17000 Inseln?",
        "antworten": [
          "indonesien"
        ],
        "loesung": "Indonesien"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Finnland?",
        "antworten": [
          "helsinki"
        ],
        "loesung": "Helsinki"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Irland?",
        "antworten": [
          "dublin"
        ],
        "loesung": "Dublin"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Tschechien?",
        "antworten": [
          "prag"
        ],
        "loesung": "Prag"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Ägypten?",
        "antworten": [
          "kairo"
        ],
        "loesung": "Kairo"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Indien?",
        "antworten": [
          "neu delhi",
          "delhi",
          "neu-delhi"
        ],
        "loesung": "Neu-Delhi"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Südkorea?",
        "antworten": [
          "seoul"
        ],
        "loesung": "Seoul"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Argentinien?",
        "antworten": [
          "buenos aires"
        ],
        "loesung": "Buenos Aires"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Mexiko?",
        "antworten": [
          "mexiko stadt",
          "mexiko-stadt",
          "mexico city"
        ],
        "loesung": "Mexiko-Stadt"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Sachsen?",
        "antworten": [
          "dresden"
        ],
        "loesung": "Dresden"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Niedersachsen?",
        "antworten": [
          "hannover"
        ],
        "loesung": "Hannover"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Hessen?",
        "antworten": [
          "wiesbaden"
        ],
        "loesung": "Wiesbaden"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Rheinland-Pfalz?",
        "antworten": [
          "mainz"
        ],
        "loesung": "Mainz"
      },
      {
        "frage": "Wie heißt die Hauptstadt von Thüringen?",
        "antworten": [
          "erfurt"
        ],
        "loesung": "Erfurt"
      },
      {
        "frage": "Welcher Fluss mündet bei Cuxhaven ins Meer?",
        "antworten": [
          "elbe"
        ],
        "loesung": "Die Elbe"
      },
      {
        "frage": "Welcher Fluss bildet einen Teil der Grenze zu Polen?",
        "antworten": [
          "oder",
          "neiße"
        ],
        "loesung": "Die Oder"
      },
      {
        "frage": "Welcher Fluss fließt durch Bremen?",
        "antworten": [
          "weser"
        ],
        "loesung": "Die Weser"
      },
      {
        "frage": "Welcher deutsche Fluss entspringt im Schwarzwald und fließt zum Schwarzen Meer?",
        "antworten": [
          "donau"
        ],
        "loesung": "Die Donau"
      },
      {
        "frage": "In welches Meer mündet der Rhein?",
        "antworten": [
          "nordsee"
        ],
        "loesung": "In die Nordsee"
      },
      {
        "frage": "Wie heißt das höchste Gebirge der Erde?",
        "antworten": [
          "himalaya"
        ],
        "loesung": "Der Himalaya"
      },
      {
        "frage": "Wie heißt das längste Gebirge der Erde?",
        "antworten": [
          "anden"
        ],
        "loesung": "Die Anden"
      },
      {
        "frage": "Welches Gebirge trennt Frankreich von Spanien?",
        "antworten": [
          "pyrenäen"
        ],
        "loesung": "Die Pyrenäen"
      },
      {
        "frage": "Wie heißt der höchste Berg der Alpen?",
        "antworten": [
          "mont blanc"
        ],
        "loesung": "Der Mont Blanc"
      },
      {
        "frage": "Wie heißt der größte See an der deutschen Grenze?",
        "antworten": [
          "bodensee"
        ],
        "loesung": "Der Bodensee"
      },
      {
        "frage": "An wie viele Länder grenzt der Bodensee?",
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
        "frage": "Wie heißt der tiefste See der Erde?",
        "antworten": [
          "baikalsee",
          "baikal"
        ],
        "loesung": "Der Baikalsee"
      },
      {
        "frage": "Wie nennt man eine Landmasse, die weit ins Meer ragt?",
        "antworten": [
          "halbinsel"
        ],
        "loesung": "Eine Halbinsel"
      },
      {
        "frage": "Wie heißt die größte Insel der Erde?",
        "antworten": [
          "grönland"
        ],
        "loesung": "Grönland"
      },
      {
        "frage": "Wie heißt der kleinste Kontinent?",
        "antworten": [
          "australien"
        ],
        "loesung": "Australien"
      },
      {
        "frage": "Wie heißt der kälteste Kontinent?",
        "antworten": [
          "antarktis"
        ],
        "loesung": "Die Antarktis"
      },
      {
        "frage": "Wie nennt man die Klimazone mit vier ausgeprägten Jahreszeiten?",
        "antworten": [
          "gemäßigte zone",
          "gemäßigt"
        ],
        "loesung": "Die gemäßigte Zone"
      },
      {
        "frage": "Wie nennt man die Klimazone an den Polen?",
        "antworten": [
          "polarzone",
          "polar",
          "kalte zone"
        ],
        "loesung": "Die Polarzone"
      },
      {
        "frage": "Wie heißt die Grassteppe in Nordamerika?",
        "antworten": [
          "prärie"
        ],
        "loesung": "Die Prärie"
      },
      {
        "frage": "Wie heißt die Grassteppe in Südamerika?",
        "antworten": [
          "pampa"
        ],
        "loesung": "Die Pampa"
      },
      {
        "frage": "Wie heißt die baumlose Kältesteppe im hohen Norden?",
        "antworten": [
          "tundra"
        ],
        "loesung": "Die Tundra"
      },
      {
        "frage": "Wie heißt der breite Nadelwaldgürtel im Norden?",
        "antworten": [
          "taiga"
        ],
        "loesung": "Die Taiga"
      },
      {
        "frage": "Wie heißt der Kanal, der Nordsee und Ostsee verbindet?",
        "antworten": [
          "nord ostsee kanal",
          "nord-ostsee-kanal"
        ],
        "loesung": "Der Nord-Ostsee-Kanal"
      },
      {
        "frage": "Wie heißt die Meerenge zwischen England und Frankreich?",
        "antworten": [
          "ärmelkanal"
        ],
        "loesung": "Der Ärmelkanal"
      },
      {
        "frage": "An der Grenze welcher beiden Länder liegen die Niagarafälle?",
        "antworten": [
          "usa und kanada",
          "kanada und usa",
          "kanada"
        ],
        "loesung": "Zwischen den USA und Kanada"
      },
      {
        "frage": "In welcher Stadt hat die UNO ihren Hauptsitz?",
        "antworten": [
          "new york"
        ],
        "loesung": "In New York"
      },
      {
        "frage": "Welcher Erdteil hat die meisten Staaten?",
        "antworten": [
          "afrika"
        ],
        "loesung": "Afrika"
      },
      {
        "frage": "Wie nennt man die Länder südlich der Sahara zusammenfassend?",
        "antworten": [
          "subsahara",
          "subsahara afrika",
          "schwarzafrika"
        ],
        "loesung": "Subsahara-Afrika"
      },
      {
        "frage": "Wie nennt man die Angabe, um wie viel eine Karte verkleinert ist?",
        "antworten": [
          "maßstab"
        ],
        "loesung": "Der Maßstab"
      },
      {
        "frage": "Wie heißt das Land mit den meisten Einwohnern in Europa?",
        "antworten": [
          "russland"
        ],
        "loesung": "Russland"
      },
      {
        "frage": "Wie heißt die längste Landgrenze der Erde?",
        "antworten": [
          "usa und kanada",
          "kanada und usa"
        ],
        "loesung": "Zwischen den USA und Kanada"
      },
      {
        "frage": "Wie nennt man eine dauerhaft gefrorene Bodenschicht?",
        "antworten": [
          "permafrost"
        ],
        "loesung": "Permafrost"
      },
      {
        "frage": "Wie heißt das größte Land Südamerikas?",
        "antworten": [
          "brasilien"
        ],
        "loesung": "Brasilien"
      },
      {
        "frage": "Wie heißt der längste Fluss Asiens?",
        "antworten": [
          "jangtse",
          "yangtze"
        ],
        "loesung": "Der Jangtse"
      },
      {
        "frage": "Wie nennt man einen Zufluss eines größeren Flusses?",
        "antworten": [
          "nebenfluss"
        ],
        "loesung": "Ein Nebenfluss"
      },
      {
        "frage": "Schätzfrage: Wie viele Staaten hat Afrika?",
        "schaetzfrage": true,
        "loesung": "54 Staaten"
      },
      {
        "frage": "Schätzfrage: Wie tief ist der Bodensee an der tiefsten Stelle?",
        "schaetzfrage": true,
        "loesung": "rund 250 Meter"
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
