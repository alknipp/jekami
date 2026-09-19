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
      }
    ],
    "mittelstufe": [],
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
      }
    ]
  }
};
