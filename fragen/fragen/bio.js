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
        "frage": "Welches Organ speichert die Galle?",
        "antworten": [
          "gallenblase"
        ],
        "loesung": "Die Gallenblase"
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
