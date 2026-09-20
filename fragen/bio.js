/* ------------------------------------------------------------
   Jekami Quiz - Themengebiet: Biologie

   Aufbau einer normalen Frage:
     { frage: "...", antworten: ["variante","variante"], loesung: "..." }
     optional: zahlenbereich: [min, max]

   Schaetzfrage:
     { frage: "Schaetzfrage: ...", schaetzfrage: true, loesung: "rund 105 Meter" }

   Ziel: mindestens 20 Fragen je Altersstufe, davon 2 bis 3 Schaetzfragen.
   Reihenfolge egal - die App mischt bei jeder Runde.
   Regeln und Alterskalibrierung stehen in CLAUDE.md.
   ------------------------------------------------------------ */

JEKAMI_FRAGEN.bio = {
  "name": "Biologie",
  "symbol": "🌿",
  "stufen": {
    "grundschule": [
      {
        "frage": "Welches Tier macht Honig?",
        "antworten": [
          "biene",
          "bienen",
          "honigbiene"
        ],
        "loesung": "Die Biene"
      },
      {
        "frage": "Woraus schlüpft ein Küken?",
        "antworten": [
          "ei",
          "aus dem ei"
        ],
        "loesung": "Aus dem Ei"
      },
      {
        "frage": "Was frisst eine Kuh hauptsächlich?",
        "antworten": [
          "gras",
          "heu"
        ],
        "loesung": "Gras und Heu"
      },
      {
        "frage": "Wie heißt das Junge von einem Hund?",
        "antworten": [
          "welpe",
          "welpen"
        ],
        "loesung": "Ein Welpe"
      },
      {
        "frage": "Wie heißt das Junge von einer Katze?",
        "antworten": [
          "kätzchen",
          "katzenbaby"
        ],
        "loesung": "Ein Kätzchen"
      },
      {
        "frage": "Wie heißt das Junge von einem Schaf?",
        "antworten": [
          "lamm"
        ],
        "loesung": "Ein Lamm"
      },
      {
        "frage": "Wie viele Beine hat eine Spinne?",
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
        "frage": "Wie viele Beine hat ein Käfer?",
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
        "frage": "Was brauchen Pflanzen zum Wachsen außer Wasser und Erde?",
        "antworten": [
          "licht",
          "sonne",
          "sonnenlicht"
        ],
        "loesung": "Licht"
      },
      {
        "frage": "Welcher Teil der Pflanze steckt in der Erde?",
        "antworten": [
          "wurzel",
          "wurzeln"
        ],
        "loesung": "Die Wurzel"
      },
      {
        "frage": "Wo wachsen Äpfel?",
        "antworten": [
          "baum",
          "apfelbaum"
        ],
        "loesung": "Am Apfelbaum"
      },
      {
        "frage": "Welches Tier hat einen Rüssel?",
        "antworten": [
          "elefant"
        ],
        "loesung": "Der Elefant"
      },
      {
        "frage": "Nenne ein Tier, das Winterschlaf hält.",
        "antworten": [
          "igel",
          "bär",
          "murmeltier",
          "siebenschläfer",
          "fledermaus",
          "hamster"
        ],
        "loesung": "Zum Beispiel der Igel"
      },
      {
        "frage": "Womit atmen Fische unter Wasser?",
        "antworten": [
          "kiemen"
        ],
        "loesung": "Mit Kiemen"
      },
      {
        "frage": "Was wird aus einer Raupe?",
        "antworten": [
          "schmetterling"
        ],
        "loesung": "Ein Schmetterling"
      },
      {
        "frage": "Welche Farbe haben die Blätter der meisten Pflanzen?",
        "antworten": [
          "grün"
        ],
        "loesung": "Grün"
      },
      {
        "frage": "Wie heißt das größte Tier der Welt?",
        "antworten": [
          "blauwal",
          "wal"
        ],
        "loesung": "Der Blauwal"
      },
      {
        "frage": "Welches Tier legt Eier und kann fliegen?",
        "antworten": [
          "vogel",
          "vögel"
        ],
        "loesung": "Vögel"
      },
      {
        "frage": "Schätzfrage: Wie viele Zähne hat ein erwachsener Mensch?",
        "schaetzfrage": true,
        "loesung": "32 Zähne"
      },
      {
        "frage": "Schätzfrage: Wie alt wird ein Hund durchschnittlich?",
        "schaetzfrage": true,
        "loesung": "rund 13 Jahre"
      },
      {
        "frage": "Wie heißt das Junge von einem Pferd?",
        "antworten": [
          "fohlen"
        ],
        "loesung": "Ein Fohlen"
      },
      {
        "frage": "Wie heißt das Junge von einer Kuh?",
        "antworten": [
          "kalb"
        ],
        "loesung": "Ein Kalb"
      },
      {
        "frage": "Welches Tier hat einen langen Hals und frisst Blätter von hohen Bäumen?",
        "antworten": [
          "giraffe"
        ],
        "loesung": "Die Giraffe"
      },
      {
        "frage": "Welches Tier trägt sein Haus auf dem Rücken?",
        "antworten": [
          "schnecke"
        ],
        "loesung": "Die Schnecke"
      },
      {
        "frage": "Wie nennt man Tiere, die nachts wach sind?",
        "antworten": [
          "nachttiere",
          "nachtaktiv"
        ],
        "loesung": "Nachtaktive Tiere"
      },
      {
        "frage": "Welcher Teil einer Blume lockt die Bienen an?",
        "antworten": [
          "blüte",
          "blütenblätter"
        ],
        "loesung": "Die Blüte"
      },
      {
        "frage": "Was sammeln Bienen aus den Blüten?",
        "antworten": [
          "nektar",
          "pollen"
        ],
        "loesung": "Nektar"
      },
      {
        "frage": "Wie heißt der Baum, an dem Eicheln wachsen?",
        "antworten": [
          "eiche"
        ],
        "loesung": "Die Eiche"
      },
      {
        "frage": "Welche Farbe haben die Blätter im Herbst?",
        "antworten": [
          "bunt",
          "gelb",
          "rot",
          "braun",
          "orange"
        ],
        "loesung": "Bunt, zum Beispiel gelb und rot"
      },
      {
        "frage": "Wie viele Flügel hat ein Schmetterling?",
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
        "frage": "Schätzfrage: Wie viele Knochen hat ein Mensch ungefähr?",
        "schaetzfrage": true,
        "loesung": "rund 200 Knochen"
      },
      {
        "frage": "Wie heißt das Junge vom Schwein?",
        "antworten": [
          "ferkel"
        ],
        "loesung": "Ein Ferkel"
      },
      {
        "frage": "Wie heißt das Junge von der Ziege?",
        "antworten": [
          "zicklein",
          "kitz"
        ],
        "loesung": "Ein Zicklein"
      },
      {
        "frage": "Welcher Vogel legt die größten Eier?",
        "antworten": [
          "strauß",
          "vogel strauß"
        ],
        "loesung": "Der Strauß"
      },
      {
        "frage": "Wie nennt man Tiere, die ihre Jungen mit Milch säugen?",
        "antworten": [
          "säugetiere",
          "säugetier"
        ],
        "loesung": "Säugetiere"
      },
      {
        "frage": "Welches Tier kann seinen Schwanz abwerfen und neu wachsen lassen?",
        "antworten": [
          "eidechse"
        ],
        "loesung": "Die Eidechse"
      },
      {
        "frage": "Wie heißt das Zuhause eines Bienenvolks?",
        "antworten": [
          "bienenstock",
          "stock"
        ],
        "loesung": "Der Bienenstock"
      },
      {
        "frage": "Wie nennt man das Zuhause, das ein Vogel für seine Eier baut?",
        "antworten": [
          "nest"
        ],
        "loesung": "Ein Nest"
      },
      {
        "frage": "Welches Tier baut Dämme aus Ästen?",
        "antworten": [
          "biber"
        ],
        "loesung": "Der Biber"
      },
      {
        "frage": "Welches Meerestier hat acht Arme?",
        "antworten": [
          "krake",
          "oktopus",
          "tintenfisch"
        ],
        "loesung": "Der Krake"
      },
      {
        "frage": "Welcher Baum bleibt auch im Winter grün?",
        "antworten": [
          "tanne",
          "fichte",
          "nadelbaum",
          "kiefer"
        ],
        "loesung": "Die Tanne"
      },
      {
        "frage": "Was machen viele Vögel im Herbst?",
        "antworten": [
          "in den süden fliegen",
          "wegfliegen",
          "ziehen"
        ],
        "loesung": "Sie fliegen in den Süden"
      },
      {
        "frage": "Welcher Vogel kann seinen Kopf fast ganz herumdrehen?",
        "antworten": [
          "eule"
        ],
        "loesung": "Die Eule"
      },
      {
        "frage": "Wie nennt man die spitzen Haare eines Igels?",
        "antworten": [
          "stacheln"
        ],
        "loesung": "Stacheln"
      },
      {
        "frage": "Wovon ernährt sich ein Marienkäfer?",
        "antworten": [
          "blattläuse",
          "läuse"
        ],
        "loesung": "Von Blattläusen"
      },
      {
        "frage": "Wie viele Punkte hat der häufigste Marienkäfer?",
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
        "frage": "Wie heißt der Teil der Pflanze, der die Blüte trägt?",
        "antworten": [
          "stängel",
          "stiel"
        ],
        "loesung": "Der Stängel"
      },
      {
        "frage": "Was wird aus einer Blüte, nachdem die Biene sie bestäubt hat?",
        "antworten": [
          "frucht",
          "früchte"
        ],
        "loesung": "Eine Frucht"
      },
      {
        "frage": "Welches Tier wechselt seine Farbe, um sich zu tarnen?",
        "antworten": [
          "chamäleon"
        ],
        "loesung": "Das Chamäleon"
      },
      {
        "frage": "Womit riecht ein Hund besonders gut?",
        "antworten": [
          "nase"
        ],
        "loesung": "Mit der Nase"
      },
      {
        "frage": "Wie heißt das Junge vom Huhn?",
        "antworten": [
          "küken"
        ],
        "loesung": "Ein Küken"
      },
      {
        "frage": "Wie heißt das männliche Huhn?",
        "antworten": [
          "hahn"
        ],
        "loesung": "Der Hahn"
      },
      {
        "frage": "Welches Tier gibt uns Wolle?",
        "antworten": [
          "schaf"
        ],
        "loesung": "Das Schaf"
      },
      {
        "frage": "Welches Tier legt die Eier, die wir essen?",
        "antworten": [
          "huhn",
          "hühner"
        ],
        "loesung": "Das Huhn"
      },
      {
        "frage": "Welches Tier läuft an Land am schnellsten?",
        "antworten": [
          "gepard"
        ],
        "loesung": "Der Gepard"
      },
      {
        "frage": "Welches ist das größte Tier an Land?",
        "antworten": [
          "elefant"
        ],
        "loesung": "Der Elefant"
      },
      {
        "frage": "Welches Tier trägt einen Panzer und zieht sich hinein zurück?",
        "antworten": [
          "schildkröte"
        ],
        "loesung": "Die Schildkröte"
      },
      {
        "frage": "Welches Tier hüpft und quakt?",
        "antworten": [
          "frosch"
        ],
        "loesung": "Der Frosch"
      },
      {
        "frage": "Welches Tier sammelt Nüsse für den Winter?",
        "antworten": [
          "eichhörnchen"
        ],
        "loesung": "Das Eichhörnchen"
      },
      {
        "frage": "Welcher Vogel kann nicht fliegen und lebt im Eis?",
        "antworten": [
          "pinguin"
        ],
        "loesung": "Der Pinguin"
      },
      {
        "frage": "Welches Tier hat schwarze und weiße Streifen?",
        "antworten": [
          "zebra"
        ],
        "loesung": "Das Zebra"
      },
      {
        "frage": "Welches Tier wird König der Tiere genannt?",
        "antworten": [
          "löwe"
        ],
        "loesung": "Der Löwe"
      },
      {
        "frage": "Wie viele Höcker hat ein Dromedar?",
        "antworten": [
          "1",
          "einen",
          "eins"
        ],
        "loesung": "1",
        "zahlenbereich": [
          1,
          1
        ]
      },
      {
        "frage": "Welches Tier trägt sein Junges in einem Beutel?",
        "antworten": [
          "känguru",
          "koala"
        ],
        "loesung": "Das Känguru"
      },
      {
        "frage": "Welches Tier im Meer ist ein Säugetier?",
        "antworten": [
          "wal",
          "delfin"
        ],
        "loesung": "Der Wal"
      },
      {
        "frage": "Welches Tier frisst am liebsten Bambus?",
        "antworten": [
          "panda"
        ],
        "loesung": "Der Panda"
      },
      {
        "frage": "Wie nennt man ein Tier, das bei Menschen zu Hause lebt?",
        "antworten": [
          "haustier"
        ],
        "loesung": "Ein Haustier"
      },
      {
        "frage": "Wie heißt der Baum mit der weißen Rinde?",
        "antworten": [
          "birke"
        ],
        "loesung": "Die Birke"
      },
      {
        "frage": "Welche Frucht ist gelb und krumm?",
        "antworten": [
          "banane"
        ],
        "loesung": "Die Banane"
      },
      {
        "frage": "Wo wachsen Kartoffeln?",
        "antworten": [
          "erde",
          "in der erde",
          "unter der erde"
        ],
        "loesung": "In der Erde"
      },
      {
        "frage": "Welche große gelbe Blume dreht sich zur Sonne?",
        "antworten": [
          "sonnenblume"
        ],
        "loesung": "Die Sonnenblume"
      },
      {
        "frage": "Woraus wächst eine neue Pflanze?",
        "antworten": [
          "samen",
          "aus einem samen",
          "korn"
        ],
        "loesung": "Aus einem Samen"
      },
      {
        "frage": "Wie heißt die Frucht der Eiche?",
        "antworten": [
          "eichel"
        ],
        "loesung": "Die Eichel"
      },
      {
        "frage": "Was braucht ein Samen, damit er keimt?",
        "antworten": [
          "wasser",
          "wärme",
          "wasser und wärme"
        ],
        "loesung": "Wasser und Wärme"
      },
      {
        "frage": "Welche Farbe hat eine reife Tomate?",
        "antworten": [
          "rot"
        ],
        "loesung": "Rot"
      },
      {
        "frage": "Wie nennt man Pilze, die man nicht essen darf?",
        "antworten": [
          "giftpilze",
          "giftig"
        ],
        "loesung": "Giftpilze"
      },
      {
        "frage": "Womit hört der Mensch?",
        "antworten": [
          "ohren",
          "ohr"
        ],
        "loesung": "Mit den Ohren"
      },
      {
        "frage": "Womit schmeckt der Mensch?",
        "antworten": [
          "zunge"
        ],
        "loesung": "Mit der Zunge"
      },
      {
        "frage": "Wie viele Sinne hat der Mensch?",
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
        "frage": "Welches Organ pumpt das Blut durch den Körper?",
        "antworten": [
          "herz"
        ],
        "loesung": "Das Herz"
      },
      {
        "frage": "Wo sitzt das Gehirn?",
        "antworten": [
          "kopf",
          "im kopf",
          "schädel"
        ],
        "loesung": "Im Kopf"
      },
      {
        "frage": "Wie nennt man die Zähne, die Kinder wieder verlieren?",
        "antworten": [
          "milchzähne"
        ],
        "loesung": "Milchzähne"
      },
      {
        "frage": "Was atmet der Mensch ein?",
        "antworten": [
          "luft",
          "sauerstoff"
        ],
        "loesung": "Luft"
      },
      {
        "frage": "Warum sollen wir Obst und Gemüse essen?",
        "antworten": [
          "gesund",
          "vitamine",
          "weil es gesund ist"
        ],
        "loesung": "Weil es gesund ist"
      },
      {
        "frage": "Wie nennt man Tiere und Pflanzen mit einem Wort?",
        "antworten": [
          "lebewesen"
        ],
        "loesung": "Lebewesen"
      },
      {
        "frage": "Wie heißt der Ort, an dem man viele Tiere anschauen kann?",
        "antworten": [
          "zoo",
          "tierpark"
        ],
        "loesung": "Der Zoo"
      },
      {
        "frage": "Was passiert mit Blättern, die lange am Boden liegen?",
        "antworten": [
          "verrotten",
          "zu erde",
          "vermodern"
        ],
        "loesung": "Sie verrotten zu Erde"
      },
      {
        "frage": "Welches Tier baut Waben aus Wachs?",
        "antworten": [
          "biene",
          "bienen"
        ],
        "loesung": "Die Biene"
      },
      {
        "frage": "Welches Tier hat einen Stachel und kann stechen?",
        "antworten": [
          "biene",
          "wespe",
          "hummel"
        ],
        "loesung": "Die Biene oder die Wespe"
      },
      {
        "frage": "Welches Tier lebt im Wasser und hat Flossen?",
        "antworten": [
          "fisch",
          "fische"
        ],
        "loesung": "Der Fisch"
      },
      {
        "frage": "Wie nennt man ein junges Tier allgemein?",
        "antworten": [
          "jungtier",
          "baby"
        ],
        "loesung": "Ein Jungtier"
      },
      {
        "frage": "Welches Tier gräbt Gänge unter der Wiese und macht Hügel?",
        "antworten": [
          "maulwurf"
        ],
        "loesung": "Der Maulwurf"
      },
      {
        "frage": "Welcher Vogel hämmert mit dem Schnabel an Bäume?",
        "antworten": [
          "specht"
        ],
        "loesung": "Der Specht"
      },
      {
        "frage": "Welches Tier wird oft Meister Lampe genannt?",
        "antworten": [
          "hase"
        ],
        "loesung": "Der Hase"
      },
      {
        "frage": "Welches Tier ist bekannt dafür, sehr langsam zu sein?",
        "antworten": [
          "schnecke",
          "faultier"
        ],
        "loesung": "Die Schnecke"
      },
      {
        "frage": "Wie nennt man eine Pflanze, die man essen kann?",
        "antworten": [
          "gemüse",
          "nutzpflanze"
        ],
        "loesung": "Gemüse"
      },
      {
        "frage": "Wie nennt man die harte Schale einer Nuss?",
        "antworten": [
          "nussschale",
          "schale"
        ],
        "loesung": "Die Schale"
      },
      {
        "frage": "Wie nennt man den Saft, den Bienen zu Honig machen?",
        "antworten": [
          "nektar"
        ],
        "loesung": "Nektar"
      },
      {
        "frage": "Schätzfrage: Wie viele Rippen hat ein Mensch?",
        "schaetzfrage": true,
        "loesung": "24 Rippen"
      },
      {
        "frage": "Schätzfrage: Wie alt kann eine Eiche werden?",
        "schaetzfrage": true,
        "loesung": "über 500 Jahre"
      }
    ],
    "unterstufe": [
      {
        "frage": "Wie heißt das größte Organ des Menschen?",
        "antworten": [
          "haut"
        ],
        "loesung": "Die Haut"
      },
      {
        "frage": "Wie viele Kammern hat das menschliche Herz?",
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
        "frage": "Wie viele Lungenflügel hat der Mensch?",
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
        "frage": "Wie nennt man Tiere, die sich ausschließlich von Pflanzen ernähren?",
        "antworten": [
          "pflanzenfresser",
          "herbivoren"
        ],
        "loesung": "Pflanzenfresser"
      },
      {
        "frage": "Wie nennt man Tiere, die Fleisch und Pflanzen fressen?",
        "antworten": [
          "allesfresser",
          "omnivoren"
        ],
        "loesung": "Allesfresser"
      },
      {
        "frage": "Wie heißt der Vorgang, bei dem Pflanzen mit Licht Zucker herstellen?",
        "antworten": [
          "fotosynthese",
          "photosynthese"
        ],
        "loesung": "Die Fotosynthese"
      },
      {
        "frage": "Welches Gas nehmen Pflanzen dabei aus der Luft auf?",
        "antworten": [
          "kohlenstoffdioxid",
          "kohlendioxid",
          "co2"
        ],
        "loesung": "Kohlenstoffdioxid"
      },
      {
        "frage": "Wie heißt der Farbstoff, der Blätter grün macht?",
        "antworten": [
          "chlorophyll",
          "blattgrün"
        ],
        "loesung": "Chlorophyll"
      },
      {
        "frage": "In welchem Organ wird die Nahrung nach dem Magen weiter verdaut?",
        "antworten": [
          "dünndarm",
          "darm"
        ],
        "loesung": "Im Dünndarm"
      },
      {
        "frage": "Wie viele Knochen hat ein erwachsener Mensch ungefähr?",
        "antworten": [
          "206"
        ],
        "loesung": "206",
        "zahlenbereich": [
          190,
          215
        ]
      },
      {
        "frage": "Wie heißen die kleinsten Bausteine, aus denen alle Lebewesen bestehen?",
        "antworten": [
          "zellen",
          "zelle"
        ],
        "loesung": "Zellen"
      },
      {
        "frage": "Wie nennt man Tiere mit einer Wirbelsäule?",
        "antworten": [
          "wirbeltiere"
        ],
        "loesung": "Wirbeltiere"
      },
      {
        "frage": "Wie heißen die Tiere, die im Wasser und an Land leben, zum Beispiel Frösche?",
        "antworten": [
          "amphibien",
          "lurche"
        ],
        "loesung": "Amphibien"
      },
      {
        "frage": "Welches Blutgefäß transportiert Blut vom Herzen weg?",
        "antworten": [
          "arterie",
          "arterien",
          "schlagader"
        ],
        "loesung": "Eine Arterie"
      },
      {
        "frage": "Wie nennt man die Verwandlung vom Ei über die Larve zum fertigen Insekt?",
        "antworten": [
          "metamorphose",
          "verwandlung"
        ],
        "loesung": "Metamorphose"
      },
      {
        "frage": "Welches Organ filtert das Blut und bildet den Urin?",
        "antworten": [
          "niere",
          "nieren"
        ],
        "loesung": "Die Niere"
      },
      {
        "frage": "In welchem Körperteil sitzt das Gleichgewichtsorgan?",
        "antworten": [
          "ohr",
          "innenohr"
        ],
        "loesung": "Im Innenohr"
      },
      {
        "frage": "Wie heißt das Organ, mit dem wir atmen?",
        "antworten": [
          "lunge"
        ],
        "loesung": "Die Lunge"
      },
      {
        "frage": "Schätzfrage: Wie oft schlägt das Herz eines Erwachsenen in Ruhe pro Minute?",
        "schaetzfrage": true,
        "loesung": "rund 70 Mal"
      },
      {
        "frage": "Schätzfrage: Wie viele Atemzüge macht ein Erwachsener in Ruhe pro Minute?",
        "schaetzfrage": true,
        "loesung": "rund 14"
      },
      {
        "frage": "Wie heißen die männlichen Keimzellen bei Tieren?",
        "antworten": [
          "spermien",
          "samenzellen"
        ],
        "loesung": "Spermien"
      },
      {
        "frage": "Wie nennt man Tiere, die sich von Fleisch ernähren?",
        "antworten": [
          "fleischfresser",
          "karnivoren"
        ],
        "loesung": "Fleischfresser"
      },
      {
        "frage": "Wie heißt das Organ, das Nahrung zerkleinert und mit Säure vermischt?",
        "antworten": [
          "magen"
        ],
        "loesung": "Der Magen"
      },
      {
        "frage": "Wie viele Herzkammern hat ein Fisch?",
        "antworten": [
          "1",
          "eine"
        ],
        "loesung": "1",
        "zahlenbereich": [
          1,
          1
        ]
      },
      {
        "frage": "Welches Blutgefäß führt Blut zum Herzen hin?",
        "antworten": [
          "vene",
          "venen"
        ],
        "loesung": "Eine Vene"
      },
      {
        "frage": "Wie heißen die kleinen Öffnungen an der Blattunterseite für den Gasaustausch?",
        "antworten": [
          "spaltöffnungen"
        ],
        "loesung": "Spaltöffnungen"
      },
      {
        "frage": "Wie nennt man Lebewesen, die abgestorbenes Material zersetzen?",
        "antworten": [
          "destruenten",
          "zersetzer"
        ],
        "loesung": "Destruenten"
      },
      {
        "frage": "Wie heißt der Vorgang, bei dem Insekten Blüten bestäuben?",
        "antworten": [
          "bestäubung"
        ],
        "loesung": "Die Bestäubung"
      },
      {
        "frage": "Welches Sinnesorgan sitzt in der Nase?",
        "antworten": [
          "geruchssinn",
          "riechen",
          "nase"
        ],
        "loesung": "Der Geruchssinn"
      },
      {
        "frage": "Wie heißt die Schutzschicht, die Knochen an den Gelenken überzieht?",
        "antworten": [
          "knorpel",
          "gelenkknorpel"
        ],
        "loesung": "Der Knorpel"
      },
      {
        "frage": "Schätzfrage: Wie viele Muskeln hat der menschliche Körper ungefähr?",
        "schaetzfrage": true,
        "loesung": "über 600"
      },
      {
        "frage": "Wie heißen die weiblichen Keimzellen?",
        "antworten": [
          "eizellen",
          "eizelle"
        ],
        "loesung": "Eizellen"
      },
      {
        "frage": "Wie viele Zähne hat das Milchgebiss eines Kindes?",
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
        "frage": "Wie heißt der längste Knochen des Menschen?",
        "antworten": [
          "oberschenkelknochen",
          "oberschenkel"
        ],
        "loesung": "Der Oberschenkelknochen"
      },
      {
        "frage": "Wie heißt der Muskel unter der Lunge, der beim Atmen hilft?",
        "antworten": [
          "zwerchfell"
        ],
        "loesung": "Das Zwerchfell"
      },
      {
        "frage": "Wie heißt der Blutkreislauf, der den ganzen Körper versorgt?",
        "antworten": [
          "körperkreislauf",
          "großer kreislauf"
        ],
        "loesung": "Der Körperkreislauf"
      },
      {
        "frage": "Wie nennt man Tiere ohne Wirbelsäule?",
        "antworten": [
          "wirbellose",
          "wirbellose tiere"
        ],
        "loesung": "Wirbellose Tiere"
      },
      {
        "frage": "Wie heißt die Tiergruppe mit Federn?",
        "antworten": [
          "vögel"
        ],
        "loesung": "Die Vögel"
      },
      {
        "frage": "Wie nennt man Tiere, deren Körpertemperatur von der Umgebung abhängt?",
        "antworten": [
          "wechselwarm",
          "wechselwarme tiere",
          "poikilotherm"
        ],
        "loesung": "Wechselwarme Tiere"
      },
      {
        "frage": "Wie nennt man die Fressbeziehungen in einem Lebensraum?",
        "antworten": [
          "nahrungskette",
          "nahrungsnetz"
        ],
        "loesung": "Die Nahrungskette"
      },
      {
        "frage": "Was steht am Anfang jeder Nahrungskette?",
        "antworten": [
          "pflanzen",
          "produzenten"
        ],
        "loesung": "Pflanzen"
      },
      {
        "frage": "Wie vermehren sich Farne und Moose?",
        "antworten": [
          "sporen",
          "durch sporen"
        ],
        "loesung": "Durch Sporen"
      },
      {
        "frage": "Wie nennt man Bäume, die im Herbst ihre Blätter abwerfen?",
        "antworten": [
          "laubbäume",
          "laubbaum"
        ],
        "loesung": "Laubbäume"
      },
      {
        "frage": "Wie nennt man Bäume mit Nadeln statt Blättern?",
        "antworten": [
          "nadelbäume",
          "nadelbaum"
        ],
        "loesung": "Nadelbäume"
      },
      {
        "frage": "Welches Pflanzenorgan nimmt Wasser aus dem Boden auf?",
        "antworten": [
          "wurzel",
          "wurzeln"
        ],
        "loesung": "Die Wurzel"
      },
      {
        "frage": "Wie heißt der Vorgang, bei dem Pflanzen über die Blätter Wasser abgeben?",
        "antworten": [
          "transpiration",
          "verdunstung"
        ],
        "loesung": "Die Transpiration"
      },
      {
        "frage": "Wie nennt man eine Art, der das Aussterben droht?",
        "antworten": [
          "bedrohte art",
          "gefährdete art",
          "vom aussterben bedroht"
        ],
        "loesung": "Eine bedrohte Art"
      },
      {
        "frage": "Wie nennt man die Muskeln, die wir bewusst steuern können?",
        "antworten": [
          "skelettmuskeln",
          "willkürliche muskulatur"
        ],
        "loesung": "Die Skelettmuskeln"
      },
      {
        "frage": "Wie nennt man Pflanzen, die Blüten und Samen bilden?",
        "antworten": [
          "blütenpflanzen",
          "samenpflanzen"
        ],
        "loesung": "Blütenpflanzen"
      },
      {
        "frage": "Welches Organ baut Giftstoffe im Blut ab?",
        "antworten": [
          "leber"
        ],
        "loesung": "Die Leber"
      },
      {
        "frage": "Wie viele Zähne hat ein erwachsener Mensch?",
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
        "frage": "Wie heißt die harte Schicht außen auf den Zähnen?",
        "antworten": [
          "zahnschmelz"
        ],
        "loesung": "Der Zahnschmelz"
      },
      {
        "frage": "Welches Organ steuert alle Vorgänge im Körper?",
        "antworten": [
          "gehirn"
        ],
        "loesung": "Das Gehirn"
      },
      {
        "frage": "Wie heißt der Nervenstrang im Rückgrat?",
        "antworten": [
          "rückenmark"
        ],
        "loesung": "Das Rückenmark"
      },
      {
        "frage": "Welcher Knochen schützt das Gehirn?",
        "antworten": [
          "schädel",
          "schädelknochen"
        ],
        "loesung": "Der Schädel"
      },
      {
        "frage": "Wie nennt man die bewegliche Verbindung zweier Knochen?",
        "antworten": [
          "gelenk"
        ],
        "loesung": "Ein Gelenk"
      },
      {
        "frage": "Wie heißen die Stränge, die Muskeln mit Knochen verbinden?",
        "antworten": [
          "sehnen",
          "sehne"
        ],
        "loesung": "Sehnen"
      },
      {
        "frage": "Wie viele Rippenpaare hat der Mensch?",
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
        "frage": "Wie heißt die Flüssigkeit im Magen, die Nahrung zersetzt?",
        "antworten": [
          "magensäure"
        ],
        "loesung": "Die Magensäure"
      },
      {
        "frage": "Wie heißt der Darmabschnitt nach dem Dünndarm?",
        "antworten": [
          "dickdarm"
        ],
        "loesung": "Der Dickdarm"
      },
      {
        "frage": "Wie nennt man die körpereigene Abwehr gegen Krankheitserreger?",
        "antworten": [
          "immunsystem",
          "abwehr"
        ],
        "loesung": "Das Immunsystem"
      },
      {
        "frage": "Was bewirkt eine Impfung im Körper?",
        "antworten": [
          "trainiert das immunsystem",
          "abwehr lernt",
          "antikörper"
        ],
        "loesung": "Sie trainiert das Immunsystem"
      },
      {
        "frage": "Welcher Teil des Auges bündelt das Licht?",
        "antworten": [
          "linse",
          "augenlinse"
        ],
        "loesung": "Die Linse"
      },
      {
        "frage": "Wie heißen die Sinneszellen der Netzhaut?",
        "antworten": [
          "stäbchen und zapfen",
          "stäbchen",
          "zapfen"
        ],
        "loesung": "Stäbchen und Zapfen"
      },
      {
        "frage": "Wie heißen die fünf Klassen der Wirbeltiere?",
        "antworten": [
          "fische amphibien reptilien vögel säugetiere"
        ],
        "loesung": "Fische, Amphibien, Reptilien, Vögel, Säugetiere"
      },
      {
        "frage": "Zu welcher Wirbeltierklasse gehören Schlangen?",
        "antworten": [
          "reptilien"
        ],
        "loesung": "Zu den Reptilien"
      },
      {
        "frage": "Womit atmen Insekten?",
        "antworten": [
          "tracheen"
        ],
        "loesung": "Mit Tracheen"
      },
      {
        "frage": "Aus wie vielen Abschnitten besteht ein Insektenkörper?",
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
        "frage": "Wie nennt man es, wenn ein Insekt seine Hülle abstreift?",
        "antworten": [
          "häutung"
        ],
        "loesung": "Die Häutung"
      },
      {
        "frage": "Wie nennt man Tiere mit weichem Körper wie Schnecken und Muscheln?",
        "antworten": [
          "weichtiere",
          "mollusken"
        ],
        "loesung": "Weichtiere"
      },
      {
        "frage": "Wie nennt man Tiere mit Außenskelett wie Krebse und Insekten?",
        "antworten": [
          "gliederfüßer",
          "arthropoden"
        ],
        "loesung": "Gliederfüßer"
      },
      {
        "frage": "Womit findet sich eine Fledermaus im Dunkeln zurecht?",
        "antworten": [
          "echoortung",
          "ultraschall",
          "echolot"
        ],
        "loesung": "Mit Echoortung"
      },
      {
        "frage": "Wie nennt man das Wegfliegen der Vögel im Herbst?",
        "antworten": [
          "vogelzug"
        ],
        "loesung": "Der Vogelzug"
      },
      {
        "frage": "Wie nennt man Tiere, die andere Tiere jagen?",
        "antworten": [
          "raubtiere",
          "räuber"
        ],
        "loesung": "Raubtiere"
      },
      {
        "frage": "Wie nennt man das Tier, das gejagt wird?",
        "antworten": [
          "beute",
          "beutetier"
        ],
        "loesung": "Die Beute"
      },
      {
        "frage": "Wie nennt man es, wenn ein harmloses Tier wie ein gefährliches aussieht?",
        "antworten": [
          "mimikry"
        ],
        "loesung": "Mimikry"
      },
      {
        "frage": "Welche Stoffe braucht eine Pflanze für die Fotosynthese?",
        "antworten": [
          "wasser und kohlenstoffdioxid",
          "wasser co2 licht",
          "wasser und co2"
        ],
        "loesung": "Wasser, Kohlenstoffdioxid und Licht"
      },
      {
        "frage": "Was entsteht bei der Fotosynthese neben Zucker?",
        "antworten": [
          "sauerstoff"
        ],
        "loesung": "Sauerstoff"
      },
      {
        "frage": "Wie heißt der Vorgang, bei dem Zellen Zucker mit Sauerstoff verbrennen?",
        "antworten": [
          "zellatmung"
        ],
        "loesung": "Die Zellatmung"
      },
      {
        "frage": "Wie heißen die Blütenteile, die Pollen bilden?",
        "antworten": [
          "staubblätter",
          "staubgefäße"
        ],
        "loesung": "Die Staubblätter"
      },
      {
        "frage": "Wie heißt der weibliche Teil einer Blüte?",
        "antworten": [
          "stempel",
          "fruchtblatt"
        ],
        "loesung": "Der Stempel"
      },
      {
        "frage": "Wie nennt man die Verbreitung von Samen durch den Wind?",
        "antworten": [
          "windverbreitung",
          "anemochorie"
        ],
        "loesung": "Windverbreitung"
      },
      {
        "frage": "Wie heißt der Samenbehälter der Nadelbäume?",
        "antworten": [
          "zapfen"
        ],
        "loesung": "Der Zapfen"
      },
      {
        "frage": "Wie nennt man die oberste Schicht eines Waldes?",
        "antworten": [
          "kronenschicht",
          "baumschicht"
        ],
        "loesung": "Die Kronenschicht"
      },
      {
        "frage": "Wie nennt man Pflanzen in der Nahrungskette mit dem Fachwort?",
        "antworten": [
          "produzenten",
          "erzeuger"
        ],
        "loesung": "Produzenten"
      },
      {
        "frage": "Wie nennt man Tiere in der Nahrungskette mit dem Fachwort?",
        "antworten": [
          "konsumenten",
          "verbraucher"
        ],
        "loesung": "Konsumenten"
      },
      {
        "frage": "Wie nennt man Lebewesen und Umwelt zusammen als System?",
        "antworten": [
          "ökosystem"
        ],
        "loesung": "Ein Ökosystem"
      },
      {
        "frage": "Was bewirkt zu viel Dünger in einem See?",
        "antworten": [
          "überdüngung",
          "algenblüte",
          "algen"
        ],
        "loesung": "Eine Überdüngung mit Algenblüte"
      },
      {
        "frage": "Wie nennt man Pflanzen, die Wasser in dicken Blättern speichern?",
        "antworten": [
          "sukkulenten",
          "kakteen"
        ],
        "loesung": "Sukkulenten"
      },
      {
        "frage": "Wie nennt man Tiere, die Eier legen?",
        "antworten": [
          "eierleger",
          "ovipar",
          "eierlegend"
        ],
        "loesung": "Eierlegende Tiere"
      },
      {
        "frage": "Zu welcher Wirbeltierklasse gehört der Frosch?",
        "antworten": [
          "amphibien",
          "lurche"
        ],
        "loesung": "Zu den Amphibien"
      },
      {
        "frage": "Wie nennt man Pflanzen, die auf anderen Pflanzen wachsen?",
        "antworten": [
          "aufsitzerpflanzen",
          "epiphyten"
        ],
        "loesung": "Epiphyten"
      },
      {
        "frage": "Wie viel Blut hat ein erwachsener Mensch ungefähr?",
        "antworten": [
          "5",
          "fünf",
          "5 liter",
          "6"
        ],
        "loesung": "Rund 5 Liter",
        "zahlenbereich": [
          4,
          7
        ]
      },
      {
        "frage": "Wie nennt man die Übertragung von Pollen zwischen Blüten?",
        "antworten": [
          "bestäubung"
        ],
        "loesung": "Die Bestäubung"
      },
      {
        "frage": "Welches Organ reguliert den Wasserhaushalt des Körpers?",
        "antworten": [
          "niere",
          "nieren"
        ],
        "loesung": "Die Nieren"
      },
      {
        "frage": "Wie heißt die Haut, die das Trommelfell im Ohr bildet?",
        "antworten": [
          "trommelfell"
        ],
        "loesung": "Das Trommelfell"
      },
      {
        "frage": "Wie nennt man die jährliche Wanderung von Tieren über weite Strecken?",
        "antworten": [
          "wanderung",
          "migration",
          "tierwanderung"
        ],
        "loesung": "Die Tierwanderung"
      },
      {
        "frage": "Wie nennt man Bakterien, die Krankheiten auslösen?",
        "antworten": [
          "krankheitserreger",
          "erreger"
        ],
        "loesung": "Krankheitserreger"
      },
      {
        "frage": "Schätzfrage: Wie viele Insektenarten sind weltweit beschrieben?",
        "schaetzfrage": true,
        "loesung": "rund 1 Million"
      },
      {
        "frage": "Schätzfrage: Wie viele Liter Blut pumpt das Herz an einem Tag?",
        "schaetzfrage": true,
        "loesung": "rund 7000 Liter"
      }
    ],
    "mittelstufe": [
      {
        "frage": "Wie heißen die Grundbausteine der Eiweiße?",
        "antworten": [
          "aminosäuren"
        ],
        "loesung": "Aminosäuren"
      },
      {
        "frage": "Wie heißt der Zellbestandteil, in dem die Erbinformation liegt?",
        "antworten": [
          "zellkern"
        ],
        "loesung": "Der Zellkern"
      },
      {
        "frage": "Was unterscheidet eine Pflanzenzelle von einer Tierzelle?",
        "antworten": [
          "zellwand",
          "chloroplasten",
          "vakuole"
        ],
        "loesung": "Zellwand, Chloroplasten und Vakuole"
      },
      {
        "frage": "Wie heißt die Zellteilung, bei der Keimzellen entstehen?",
        "antworten": [
          "meiose"
        ],
        "loesung": "Die Meiose"
      },
      {
        "frage": "Wie lautet die Summenformel der Fotosynthese als Endprodukt?",
        "antworten": [
          "traubenzucker",
          "glucose",
          "glukose"
        ],
        "loesung": "Traubenzucker und Sauerstoff"
      },
      {
        "frage": "Wie heißt das Hormon, das den Blutzucker senkt?",
        "antworten": [
          "insulin"
        ],
        "loesung": "Insulin"
      },
      {
        "frage": "Wie heißt der Gegenspieler dieses Hormons?",
        "antworten": [
          "glucagon",
          "glukagon"
        ],
        "loesung": "Glucagon"
      },
      {
        "frage": "Wie nennt man Merkmale, die sich in einer Generation nicht zeigen?",
        "antworten": [
          "rezessiv"
        ],
        "loesung": "Rezessiv"
      },
      {
        "frage": "Wie nennt man Merkmale, die sich immer durchsetzen?",
        "antworten": [
          "dominant"
        ],
        "loesung": "Dominant"
      },
      {
        "frage": "Wer formulierte die Regeln der Vererbung an Erbsenpflanzen?",
        "antworten": [
          "mendel",
          "gregor mendel"
        ],
        "loesung": "Gregor Mendel"
      },
      {
        "frage": "Wie heißen die Zellen des Nervensystems?",
        "antworten": [
          "nervenzellen",
          "neuronen"
        ],
        "loesung": "Nervenzellen"
      },
      {
        "frage": "Wie heißt die Stelle, an der zwei Nervenzellen Signale austauschen?",
        "antworten": [
          "synapse"
        ],
        "loesung": "Die Synapse"
      },
      {
        "frage": "Wie heißt der Teil des Gehirns, der Bewegungen koordiniert?",
        "antworten": [
          "kleinhirn"
        ],
        "loesung": "Das Kleinhirn"
      },
      {
        "frage": "Wie nennt man Lebewesen, die ihre Körpertemperatur selbst regeln?",
        "antworten": [
          "gleichwarm",
          "warmblüter",
          "homoiotherm"
        ],
        "loesung": "Gleichwarme Tiere"
      },
      {
        "frage": "Wie nennt man die Gesamtheit aller Lebewesen eines Lebensraums?",
        "antworten": [
          "biozönose",
          "lebensgemeinschaft"
        ],
        "loesung": "Die Biozönose"
      },
      {
        "frage": "Wie heißt die Beziehung, bei der ein Lebewesen auf Kosten eines anderen lebt?",
        "antworten": [
          "parasitismus"
        ],
        "loesung": "Parasitismus"
      },
      {
        "frage": "Wie nennt man die Anpassung eines Tieres an seine Umgebung durch Färbung?",
        "antworten": [
          "tarnung",
          "mimese"
        ],
        "loesung": "Tarnung"
      },
      {
        "frage": "Wie heißt der Vorgang, bei dem Zellen ohne Sauerstoff Energie gewinnen?",
        "antworten": [
          "gärung"
        ],
        "loesung": "Die Gärung"
      },
      {
        "frage": "Wie viele Wirbel hat die menschliche Wirbelsäule ungefähr?",
        "antworten": [
          "33",
          "32",
          "34"
        ],
        "loesung": "33",
        "zahlenbereich": [
          32,
          34
        ]
      },
      {
        "frage": "Wie heißt das Organ, in dem rote Blutkörperchen gebildet werden?",
        "antworten": [
          "knochenmark"
        ],
        "loesung": "Das Knochenmark"
      },
      {
        "frage": "Wie nennt man Bakterien, die dem Menschen nützen, etwa im Darm?",
        "antworten": [
          "darmflora",
          "mikrobiom",
          "darmbakterien"
        ],
        "loesung": "Die Darmflora"
      },
      {
        "frage": "Wie heißt die äußere Hautschicht?",
        "antworten": [
          "oberhaut",
          "epidermis"
        ],
        "loesung": "Die Oberhaut"
      },
      {
        "frage": "Welches Vitamin ist für die Blutgerinnung wichtig?",
        "antworten": [
          "vitamin k",
          "k"
        ],
        "loesung": "Vitamin K"
      },
      {
        "frage": "Wie heißt der Fachbegriff für die Lehre von den Lebewesen?",
        "antworten": [
          "biologie"
        ],
        "loesung": "Die Biologie"
      },
      {
        "frage": "Wie nennt man Arten, die nur in einem einzigen Gebiet vorkommen?",
        "antworten": [
          "endemisch",
          "endemiten"
        ],
        "loesung": "Endemisch"
      },
      {
        "frage": "Wie heißt der Kreislauf, der Blut durch die Lunge führt?",
        "antworten": [
          "lungenkreislauf",
          "kleiner kreislauf"
        ],
        "loesung": "Der Lungenkreislauf"
      },
      {
        "frage": "Wie nennt man die Entwicklung der Arten über lange Zeiträume?",
        "antworten": [
          "evolution"
        ],
        "loesung": "Die Evolution"
      },
      {
        "frage": "Wie heißt der Prozess, mit dem der Körper Krankheitserreger bekämpft?",
        "antworten": [
          "immunantwort",
          "immunsystem",
          "immunreaktion"
        ],
        "loesung": "Die Immunantwort"
      },
      {
        "frage": "Schätzfrage: Wie viele Gene hat der Mensch ungefähr?",
        "schaetzfrage": true,
        "loesung": "rund 20.000"
      },
      {
        "frage": "Schätzfrage: Wie viele Liter Luft atmet ein Erwachsener pro Minute in Ruhe?",
        "schaetzfrage": true,
        "loesung": "rund 7 Liter"
      }
    ],
    "erwachsene": [
      {
        "frage": "Wie heißt der Träger der Erbinformation?",
        "antworten": [
          "dna",
          "dns"
        ],
        "loesung": "Die DNA"
      },
      {
        "frage": "Wer begründete mit Die Entstehung der Arten die Evolutionstheorie?",
        "antworten": [
          "darwin"
        ],
        "loesung": "Charles Darwin"
      },
      {
        "frage": "Welcher Mönch erforschte die Vererbungsregeln an Erbsen?",
        "antworten": [
          "mendel"
        ],
        "loesung": "Gregor Mendel"
      },
      {
        "frage": "Welches Organ produziert Insulin?",
        "antworten": [
          "bauchspeicheldrüse",
          "pankreas"
        ],
        "loesung": "Die Bauchspeicheldrüse"
      },
      {
        "frage": "Wie heißt der rote Blutfarbstoff, der Sauerstoff transportiert?",
        "antworten": [
          "hämoglobin"
        ],
        "loesung": "Hämoglobin"
      },
      {
        "frage": "Wie heißen die Zellen, die im Blut den Sauerstoff transportieren?",
        "antworten": [
          "rote blutkörperchen",
          "erythrozyten"
        ],
        "loesung": "Die roten Blutkörperchen"
      },
      {
        "frage": "Welche Zellorganellen nennt man die Kraftwerke der Zelle?",
        "antworten": [
          "mitochondrien"
        ],
        "loesung": "Die Mitochondrien"
      },
      {
        "frage": "Wie viele Chromosomenpaare hat der Mensch?",
        "antworten": [
          "23",
          "dreiundzwanzig"
        ],
        "loesung": "23",
        "zahlenbereich": [
          23,
          23
        ]
      },
      {
        "frage": "Wie heißt die Zellteilung, bei der zwei identische Tochterzellen entstehen?",
        "antworten": [
          "mitose"
        ],
        "loesung": "Die Mitose"
      },
      {
        "frage": "Wie heißen die Eiweiße, die biochemische Reaktionen beschleunigen?",
        "antworten": [
          "enzyme"
        ],
        "loesung": "Enzyme"
      },
      {
        "frage": "Welches Vitamin bildet die Haut unter Sonneneinstrahlung?",
        "antworten": [
          "vitamin d",
          "d"
        ],
        "loesung": "Vitamin D"
      },
      {
        "frage": "Wie heißen die Botenstoffe, die Signale zwischen Nervenzellen übertragen?",
        "antworten": [
          "neurotransmitter"
        ],
        "loesung": "Neurotransmitter"
      },
      {
        "frage": "Wie nennt man Lebewesen, die aus nur einer Zelle bestehen?",
        "antworten": [
          "einzeller"
        ],
        "loesung": "Einzeller"
      },
      {
        "frage": "Wie nennt man das Zusammenleben zweier Arten zum beiderseitigen Nutzen?",
        "antworten": [
          "symbiose"
        ],
        "loesung": "Symbiose"
      },
      {
        "frage": "Wie viele Halswirbel hat ein Mensch?",
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
        "frage": "Wie heißt der größte Muskel des menschlichen Körpers?",
        "antworten": [
          "gesäßmuskel",
          "glutaeus",
          "glutäus"
        ],
        "loesung": "Der große Gesäßmuskel"
      },
      {
        "frage": "Wie heißt die Gesamtheit aller Gene eines Lebewesens?",
        "antworten": [
          "genom"
        ],
        "loesung": "Das Genom"
      },
      {
        "frage": "Schätzfrage: Wie lang ist der menschliche Dünndarm ungefähr?",
        "schaetzfrage": true,
        "loesung": "rund 5 bis 6 Meter"
      },
      {
        "frage": "Schätzfrage: Wie lang sind alle Blutgefäße eines Menschen zusammengerechnet?",
        "schaetzfrage": true,
        "loesung": "rund 100.000 Kilometer"
      },
      {
        "frage": "Wie heißt der Fachbegriff für den programmierten Zelltod?",
        "antworten": [
          "apoptose"
        ],
        "loesung": "Die Apoptose"
      },
      {
        "frage": "Wie heißen die Zellen des Immunsystems, die Antikörper bilden?",
        "antworten": [
          "b zellen",
          "b lymphozyten",
          "plasmazellen"
        ],
        "loesung": "B-Lymphozyten"
      },
      {
        "frage": "Wie heißt der Erreger, der keine eigene Zelle besitzt und einen Wirt braucht?",
        "antworten": [
          "virus",
          "viren"
        ],
        "loesung": "Ein Virus"
      },
      {
        "frage": "Wie nennt man die Anzahl aller Arten in einem Lebensraum?",
        "antworten": [
          "artenvielfalt",
          "biodiversität"
        ],
        "loesung": "Die Artenvielfalt"
      },
      {
        "frage": "Wie heißt der Botenstoff, der als Glückshormon gilt?",
        "antworten": [
          "serotonin",
          "dopamin"
        ],
        "loesung": "Serotonin"
      },
      {
        "frage": "Wie heißt die Schilddrüsenhormongruppe, die den Stoffwechsel steuert?",
        "antworten": [
          "thyroxin",
          "t4",
          "schilddrüsenhormone"
        ],
        "loesung": "Thyroxin"
      },
      {
        "frage": "Wie heißt die Erbkrankheit, bei der ein Chromosom dreifach vorliegt?",
        "antworten": [
          "trisomie",
          "trisomie 21"
        ],
        "loesung": "Eine Trisomie"
      },
      {
        "frage": "Wie nennt man die Gesamtheit der chemischen Vorgänge in einer Zelle?",
        "antworten": [
          "stoffwechsel",
          "metabolismus"
        ],
        "loesung": "Der Stoffwechsel"
      },
      {
        "frage": "Wie heißt das Verfahren, mit dem DNA im Labor vervielfältigt wird?",
        "antworten": [
          "pcr",
          "polymerase kettenreaktion"
        ],
        "loesung": "Die PCR"
      },
      {
        "frage": "Wie heißt die Methode, mit der sich Gene gezielt verändern lassen und die 2020 den Nobelpreis erhielt?",
        "antworten": [
          "crispr",
          "crispr cas9"
        ],
        "loesung": "CRISPR/Cas9"
      },
      {
        "frage": "Schätzfrage: Wie viele Basenpaare hat das menschliche Erbgut?",
        "schaetzfrage": true,
        "loesung": "rund 3 Milliarden"
      }
    ]
  }
};
