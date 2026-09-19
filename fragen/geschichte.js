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
      },
      {
        "frage": "Wie nannte man die Kämpfer, die im alten Rom in der Arena antraten?",
        "antworten": [
          "gladiatoren",
          "gladiator"
        ],
        "loesung": "Gladiatoren"
      },
      {
        "frage": "Wie heißt das große runde Kampfgebäude in Rom?",
        "antworten": [
          "kolosseum"
        ],
        "loesung": "Das Kolosseum"
      },
      {
        "frage": "Wie nennt man die Wasserleitungen der Römer auf hohen Bögen?",
        "antworten": [
          "aquädukt",
          "aquädukte"
        ],
        "loesung": "Ein Aquädukt"
      },
      {
        "frage": "Wie nannte man den Herrscher im alten Rom?",
        "antworten": [
          "kaiser"
        ],
        "loesung": "Der Kaiser"
      },
      {
        "frage": "Wie nennt man einen König im alten Ägypten?",
        "antworten": [
          "pharao"
        ],
        "loesung": "Ein Pharao"
      },
      {
        "frage": "Wie nennt man einen einbalsamierten Toten aus Ägypten?",
        "antworten": [
          "mumie"
        ],
        "loesung": "Eine Mumie"
      },
      {
        "frage": "Welches Tier war im alten Ägypten heilig?",
        "antworten": [
          "katze",
          "katzen"
        ],
        "loesung": "Die Katze"
      },
      {
        "frage": "Womit jagten die Menschen in der Steinzeit?",
        "antworten": [
          "speer",
          "pfeil und bogen",
          "bogen"
        ],
        "loesung": "Mit Speer, Pfeil und Bogen"
      },
      {
        "frage": "Woraus machten die Menschen in der Steinzeit ihre Kleidung?",
        "antworten": [
          "fell",
          "felle",
          "tierfelle"
        ],
        "loesung": "Aus Tierfellen"
      },
      {
        "frage": "Wie nennt man die Bilder, die Steinzeitmenschen an Höhlenwände malten?",
        "antworten": [
          "höhlenmalerei",
          "höhlenbilder"
        ],
        "loesung": "Höhlenmalerei"
      },
      {
        "frage": "Womit fuhren die Wikinger über das Meer?",
        "antworten": [
          "langschiff",
          "drachenboot",
          "boot",
          "schiff"
        ],
        "loesung": "Mit Langschiffen"
      },
      {
        "frage": "Wie heißt die Zeit der Ritter und Burgen?",
        "antworten": [
          "mittelalter"
        ],
        "loesung": "Das Mittelalter"
      },
      {
        "frage": "Wie nennt man den Wettkampf, bei dem Ritter mit Lanzen gegeneinander ritten?",
        "antworten": [
          "ritterturnier",
          "turnier",
          "tjost"
        ],
        "loesung": "Ein Ritterturnier"
      },
      {
        "frage": "Wie hieß der junge Helfer, der einem Ritter diente?",
        "antworten": [
          "knappe"
        ],
        "loesung": "Der Knappe"
      },
      {
        "frage": "Welcher Handwerker stellte früher Schwerter und Hufeisen her?",
        "antworten": [
          "schmied"
        ],
        "loesung": "Der Schmied"
      },
      {
        "frage": "Womit machte man früher abends Licht, als es noch keinen Strom gab?",
        "antworten": [
          "kerze",
          "kerzen",
          "öllampe",
          "fackel"
        ],
        "loesung": "Mit Kerzen"
      },
      {
        "frage": "Wie hieß das erste Fahrzeug auf Schienen, das mit Dampf fuhr?",
        "antworten": [
          "dampflokomotive",
          "dampflok",
          "eisenbahn"
        ],
        "loesung": "Die Dampflokomotive"
      },
      {
        "frage": "Wer baute in Deutschland das erste Auto mit Motor?",
        "antworten": [
          "benz",
          "carl benz"
        ],
        "loesung": "Carl Benz"
      },
      {
        "frage": "Wer flog als Erste mit einem Motorflugzeug?",
        "antworten": [
          "gebrüder wright",
          "wright"
        ],
        "loesung": "Die Gebrüder Wright"
      },
      {
        "frage": "Wie nannte man die Seefahrer, die früher neue Länder suchten?",
        "antworten": [
          "entdecker",
          "seefahrer"
        ],
        "loesung": "Entdecker"
      },
      {
        "frage": "Wo kann man alte Dinge aus der Geschichte anschauen?",
        "antworten": [
          "museum"
        ],
        "loesung": "Im Museum"
      },
      {
        "frage": "Wie heißt der Mann, der vor über 5000 Jahren lebte und im Eis gefunden wurde?",
        "antworten": [
          "ötzi"
        ],
        "loesung": "Ötzi"
      },
      {
        "frage": "In welchem Gebirge wurde Ötzi gefunden?",
        "antworten": [
          "alpen"
        ],
        "loesung": "In den Alpen"
      },
      {
        "frage": "Wie hieß die Mauer, die Berlin lange in zwei Teile trennte?",
        "antworten": [
          "berliner mauer",
          "mauer"
        ],
        "loesung": "Die Berliner Mauer"
      },
      {
        "frage": "Welches Tier zog früher den Pflug auf dem Feld?",
        "antworten": [
          "ochse",
          "pferd",
          "ochsen",
          "pferde"
        ],
        "loesung": "Der Ochse oder das Pferd"
      },
      {
        "frage": "Wie heißt die Zeit, in der die Menschen zum ersten Mal Metall benutzten?",
        "antworten": [
          "bronzezeit"
        ],
        "loesung": "Die Bronzezeit"
      },
      {
        "frage": "Womit schrieben die Römer in weiches Wachs?",
        "antworten": [
          "griffel"
        ],
        "loesung": "Mit einem Griffel"
      },
      {
        "frage": "Wie nennt man ein sehr altes, wichtiges Schriftstück?",
        "antworten": [
          "urkunde"
        ],
        "loesung": "Eine Urkunde"
      },
      {
        "frage": "Schätzfrage: Vor wie vielen Jahren lebte Ötzi?",
        "schaetzfrage": true,
        "loesung": "vor rund 5300 Jahren"
      },
      {
        "frage": "Schätzfrage: Wie schwer war eine Ritterrüstung?",
        "schaetzfrage": true,
        "loesung": "rund 25 Kilogramm"
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
      },
      {
        "frage": "Welche Stadt wurde 79 nach Christus vom Vesuv verschüttet?",
        "antworten": [
          "pompeji"
        ],
        "loesung": "Pompeji"
      },
      {
        "frage": "Wie hieß der griechische Feldherr, der bis nach Indien zog?",
        "antworten": [
          "alexander",
          "alexander der große"
        ],
        "loesung": "Alexander der Große"
      },
      {
        "frage": "Welcher Fund half, die ägyptischen Hieroglyphen zu entschlüsseln?",
        "antworten": [
          "stein von rosette",
          "rosetta",
          "rosettestein"
        ],
        "loesung": "Der Stein von Rosette"
      },
      {
        "frage": "Wie nannte man die Stadtstaaten im alten Griechenland?",
        "antworten": [
          "polis"
        ],
        "loesung": "Polis"
      },
      {
        "frage": "In welcher griechischen Stadt entstand die Demokratie?",
        "antworten": [
          "athen"
        ],
        "loesung": "In Athen"
      },
      {
        "frage": "Wie hießen die für ihre Härte bekannten Krieger Griechenlands?",
        "antworten": [
          "spartaner",
          "sparta"
        ],
        "loesung": "Die Spartaner"
      },
      {
        "frage": "Wohin führten die Kreuzzüge des Mittelalters?",
        "antworten": [
          "heiliges land",
          "jerusalem",
          "palästina"
        ],
        "loesung": "Ins Heilige Land"
      },
      {
        "frage": "Wie hieß die Seuche, die im 14. Jahrhundert Europa heimsuchte?",
        "antworten": [
          "pest",
          "schwarzer tod"
        ],
        "loesung": "Die Pest"
      },
      {
        "frage": "Wie hieß der Bund der Handelsstädte an Nord- und Ostsee?",
        "antworten": [
          "hanse"
        ],
        "loesung": "Die Hanse"
      },
      {
        "frage": "Wie wird die französische Nationalheldin Jeanne d Arc auch genannt?",
        "antworten": [
          "jungfrau von orleans",
          "jungfrau von orléans"
        ],
        "loesung": "Die Jungfrau von Orléans"
      },
      {
        "frage": "Wer leitete die erste Weltumsegelung?",
        "antworten": [
          "magellan",
          "ferdinand magellan"
        ],
        "loesung": "Ferdinand Magellan"
      },
      {
        "frage": "Wie nannte man die spanischen Eroberer Amerikas?",
        "antworten": [
          "konquistadoren"
        ],
        "loesung": "Konquistadoren"
      },
      {
        "frage": "Welches Reich in Mexiko eroberten die Spanier im 16. Jahrhundert?",
        "antworten": [
          "azteken",
          "aztekenreich"
        ],
        "loesung": "Das Aztekenreich"
      },
      {
        "frage": "Welches Reich in Südamerika hatte seine Hauptstadt in Cusco?",
        "antworten": [
          "inka",
          "inkareich"
        ],
        "loesung": "Das Inkareich"
      },
      {
        "frage": "In welchem Jahr endete der Erste Weltkrieg?",
        "antworten": [
          "1918"
        ],
        "loesung": "1918",
        "zahlenbereich": [
          1918,
          1918
        ]
      },
      {
        "frage": "Wer war der letzte deutsche Kaiser?",
        "antworten": [
          "wilhelm",
          "wilhelm ii",
          "wilhelm der zweite"
        ],
        "loesung": "Wilhelm II."
      },
      {
        "frage": "Wie hieß die erste deutsche Demokratie nach 1918?",
        "antworten": [
          "weimarer republik",
          "weimar"
        ],
        "loesung": "Die Weimarer Republik"
      },
      {
        "frage": "In welchem Jahr kamen die Nationalsozialisten an die Macht?",
        "antworten": [
          "1933"
        ],
        "loesung": "1933",
        "zahlenbereich": [
          1933,
          1933
        ]
      },
      {
        "frage": "Wie nennt man den Völkermord an den europäischen Juden?",
        "antworten": [
          "holocaust",
          "schoa",
          "shoah"
        ],
        "loesung": "Der Holocaust"
      },
      {
        "frage": "Wie hießen die beiden deutschen Staaten zwischen 1949 und 1990?",
        "antworten": [
          "brd und ddr",
          "bundesrepublik und ddr"
        ],
        "loesung": "BRD und DDR"
      },
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
        "frage": "Wie nennt man den Gegensatz zwischen USA und Sowjetunion ohne offenen Krieg?",
        "antworten": [
          "kalter krieg"
        ],
        "loesung": "Der Kalte Krieg"
      },
      {
        "frage": "Wer war der erste Mensch im Weltall?",
        "antworten": [
          "gagarin",
          "juri gagarin"
        ],
        "loesung": "Juri Gagarin"
      },
      {
        "frage": "Wer war die erste Frau im Weltall?",
        "antworten": [
          "tereschkowa",
          "walentina tereschkowa"
        ],
        "loesung": "Walentina Tereschkowa"
      },
      {
        "frage": "Welche Erfindung von James Watt trieb die Industrialisierung an?",
        "antworten": [
          "dampfmaschine"
        ],
        "loesung": "Die Dampfmaschine"
      },
      {
        "frage": "Wie nennt man den Umbruch durch Fabriken und Maschinen im 19. Jahrhundert?",
        "antworten": [
          "industrialisierung",
          "industrielle revolution"
        ],
        "loesung": "Die Industrialisierung"
      },
      {
        "frage": "Wer machte die Glühlampe massentauglich?",
        "antworten": [
          "edison",
          "thomas edison"
        ],
        "loesung": "Thomas Edison"
      },
      {
        "frage": "Wie hieß die Reformbewegung der Kirche, die 1517 begann?",
        "antworten": [
          "reformation"
        ],
        "loesung": "Die Reformation"
      },
      {
        "frage": "Schätzfrage: Wie lange dauerte der Erste Weltkrieg?",
        "schaetzfrage": true,
        "loesung": "gut 4 Jahre"
      },
      {
        "frage": "Schätzfrage: Wie alt ist die Stadt Rom ungefähr?",
        "schaetzfrage": true,
        "loesung": "rund 2700 Jahre"
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
      },
      {
        "frage": "Wie heißt der Frieden, der 1648 den Dreißigjährigen Krieg beendete?",
        "antworten": [
          "westfälischer friede",
          "westfälischer frieden",
          "westfalen"
        ],
        "loesung": "Der Westfälische Friede"
      },
      {
        "frage": "Wer war der erste Reichskanzler des Deutschen Kaiserreichs?",
        "antworten": [
          "bismarck",
          "otto von bismarck"
        ],
        "loesung": "Otto von Bismarck"
      },
      {
        "frage": "Auf welchem Kongress wurde Europa 1815 neu geordnet?",
        "antworten": [
          "wiener kongress",
          "wien"
        ],
        "loesung": "Auf dem Wiener Kongress"
      },
      {
        "frage": "Welcher französische Kaiser wurde 1815 bei Waterloo endgültig besiegt?",
        "antworten": [
          "napoleon"
        ],
        "loesung": "Napoleon"
      },
      {
        "frage": "Nach welcher Stadt ist die deutsche Verfassung von 1919 benannt?",
        "antworten": [
          "weimar"
        ],
        "loesung": "Nach Weimar"
      },
      {
        "frage": "An welchem Datum kam es 1953 zum Volksaufstand in der DDR?",
        "antworten": [
          "17 juni",
          "siebzehnter juni"
        ],
        "loesung": "Am 17. Juni"
      },
      {
        "frage": "Wie hieß die Versorgung Westberlins aus der Luft 1948 und 1949?",
        "antworten": [
          "berliner luftbrücke",
          "luftbrücke"
        ],
        "loesung": "Die Berliner Luftbrücke"
      },
      {
        "frage": "In welchem Jahr wurde die Sowjetunion aufgelöst?",
        "antworten": [
          "1991"
        ],
        "loesung": "1991",
        "zahlenbereich": [
          1991,
          1991
        ]
      },
      {
        "frage": "Wie hieß das Militärbündnis der Ostblockstaaten?",
        "antworten": [
          "warschauer pakt"
        ],
        "loesung": "Der Warschauer Pakt"
      },
      {
        "frage": "Welcher sowjetische Staatschef leitete Glasnost und Perestroika ein?",
        "antworten": [
          "gorbatschow",
          "michail gorbatschow"
        ],
        "loesung": "Michail Gorbatschow"
      }
    ]
  }
};
