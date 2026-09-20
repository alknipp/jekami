/* ------------------------------------------------------------
   Jekami Quiz - Themengebiet: Unterhaltung

   Aufbau einer normalen Frage:
     { frage: "...", antworten: ["variante","variante"], loesung: "..." }
     optional: zahlenbereich: [min, max]

   Schaetzfrage:
     { frage: "Schaetzfrage: ...", schaetzfrage: true, loesung: "..." }

   Reihenfolge egal - die App mischt bei jeder Runde.
   Regeln und Alterskalibrierung stehen in CLAUDE.md.
   ------------------------------------------------------------ */

JEKAMI_FRAGEN.unterhaltung = {
  "name": "Unterhaltung",
  "symbol": "🎬",
  "stufen": {
    "grundschule": [
      {
        "frage": "Wie heißt das Mädchen im Märchen, das eine rote Kappe trägt?",
        "antworten": [
          "rotkäppchen"
        ],
        "loesung": "Rotkäppchen"
      },
      {
        "frage": "Wie viele Zwerge leben bei Schneewittchen?",
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
        "frage": "Welches Märchenmädchen verliert um Mitternacht einen Schuh?",
        "antworten": [
          "aschenputtel",
          "cinderella"
        ],
        "loesung": "Aschenputtel"
      },
      {
        "frage": "In welchem Märchen wächst eine Bohnenranke bis in den Himmel?",
        "antworten": [
          "hans und die bohnenranke",
          "bohnenranke"
        ],
        "loesung": "Hans und die Bohnenranke"
      },
      {
        "frage": "In welcher Stadt wollten vier Tiere Musikanten werden?",
        "antworten": [
          "bremen"
        ],
        "loesung": "In Bremen"
      },
      {
        "frage": "Wie heißen diese vier Tiere zusammen?",
        "antworten": [
          "bremer stadtmusikanten"
        ],
        "loesung": "Die Bremer Stadtmusikanten"
      },
      {
        "frage": "Wer sammelte viele bekannte deutsche Märchen und war zu zweit?",
        "antworten": [
          "brüder grimm",
          "grimm"
        ],
        "loesung": "Die Brüder Grimm"
      },
      {
        "frage": "Wie heißt das Zauberwort, mit dem sich in einem Märchen ein Felsen öffnet?",
        "antworten": [
          "sesam öffne dich",
          "sesam"
        ],
        "loesung": "Sesam, öffne dich"
      },
      {
        "frage": "Wie heißt das Mädchen mit den roten Zöpfen, das das stärkste der Welt ist?",
        "antworten": [
          "pippi langstrumpf",
          "pippi"
        ],
        "loesung": "Pippi Langstrumpf"
      },
      {
        "frage": "Wie heißt Pippi Langstrumpfs Pferd?",
        "antworten": [
          "kleiner onkel"
        ],
        "loesung": "Kleiner Onkel"
      },
      {
        "frage": "Wie heißt Pippi Langstrumpfs Affe?",
        "antworten": [
          "herr nilsson",
          "nilsson"
        ],
        "loesung": "Herr Nilsson"
      },
      {
        "frage": "Wer schrieb die Bücher über Pippi Langstrumpf?",
        "antworten": [
          "astrid lindgren",
          "lindgren"
        ],
        "loesung": "Astrid Lindgren"
      },
      {
        "frage": "In welchem Land spielen die Geschichten von Michel aus Lönneberga?",
        "antworten": [
          "schweden"
        ],
        "loesung": "In Schweden"
      },
      {
        "frage": "Wer schrieb Der Räuber Hotzenplotz?",
        "antworten": [
          "otfried preußler",
          "preußler"
        ],
        "loesung": "Otfried Preußler"
      },
      {
        "frage": "Wie heißt das Buch von Erich Kästner über zwei Mädchen, die sich im Ferienlager treffen?",
        "antworten": [
          "das doppelte lottchen",
          "doppelte lottchen"
        ],
        "loesung": "Das doppelte Lottchen"
      },
      {
        "frage": "Welche Farbe hat die Maus in der Sendung mit der Maus?",
        "antworten": [
          "orange"
        ],
        "loesung": "Orange"
      },
      {
        "frage": "Wie heißt der Junge im Dschungelbuch, der von Wölfen aufgezogen wird?",
        "antworten": [
          "mogli",
          "mowgli"
        ],
        "loesung": "Mogli"
      },
      {
        "frage": "Welches Tier ist Bambi?",
        "antworten": [
          "reh",
          "rehkitz",
          "hirsch"
        ],
        "loesung": "Ein Reh"
      },
      {
        "frage": "Welches Tier ist Nemo in Findet Nemo?",
        "antworten": [
          "fisch",
          "clownfisch"
        ],
        "loesung": "Ein Clownfisch"
      },
      {
        "frage": "Wie heißt der Bär aus dem Kinderbuch, der Honig über alles liebt?",
        "antworten": [
          "winnie puuh",
          "pu der bär",
          "winnie pooh"
        ],
        "loesung": "Winnie Puuh"
      },
      {
        "frage": "Wie heißt das Mädchen, das durch einen Kaninchenbau ins Wunderland fällt?",
        "antworten": [
          "alice"
        ],
        "loesung": "Alice"
      },
      {
        "frage": "Welches Tier zieht an Weihnachten den Schlitten?",
        "antworten": [
          "rentier",
          "rentiere"
        ],
        "loesung": "Ein Rentier"
      },
      {
        "frage": "Wie heißt der Weihnachtsmann auf Englisch?",
        "antworten": [
          "santa claus",
          "santa"
        ],
        "loesung": "Santa Claus"
      },
      {
        "frage": "Wie heißt das Brettspiel mit König, Dame, Turm und Bauer?",
        "antworten": [
          "schach"
        ],
        "loesung": "Schach"
      },
      {
        "frage": "Wie heißt das Spiel, bei dem man Zahlen würfelt und Figuren nach Hause bringt?",
        "antworten": [
          "mensch ärgere dich nicht"
        ],
        "loesung": "Mensch ärgere dich nicht"
      },
      {
        "frage": "Welches Instrument spielt man, indem man auf schwarze und weiße Tasten drückt?",
        "antworten": [
          "klavier",
          "keyboard"
        ],
        "loesung": "Das Klavier"
      },
      {
        "frage": "Wie heißt der Zirkuskünstler, der mit mehreren Bällen gleichzeitig wirft?",
        "antworten": [
          "jongleur"
        ],
        "loesung": "Ein Jongleur"
      },
      {
        "frage": "Schätzfrage: Wie viele Felder hat ein Schachbrett?",
        "schaetzfrage": true,
        "loesung": "64 Felder"
      },
      {
        "frage": "Schätzfrage: Wie viele Bücher über Harry Potter gibt es?",
        "schaetzfrage": true,
        "loesung": "7 Bände"
      },
      {
        "frage": "Schätzfrage: Wie lange dauert ein Kinofilm für Kinder ungefähr?",
        "schaetzfrage": true,
        "loesung": "rund 90 Minuten"
      },
      {
        "frage": "Wer weckt Dornröschen aus dem Schlaf?",
        "antworten": [
          "prinz",
          "ein prinz",
          "kuss"
        ],
        "loesung": "Ein Prinz"
      },
      {
        "frage": "Wie lange schläft Dornröschen?",
        "antworten": [
          "100",
          "hundert",
          "hundert jahre"
        ],
        "loesung": "100 Jahre",
        "zahlenbereich": [
          100,
          100
        ]
      },
      {
        "frage": "In welchem Märchen steht ein Haus aus Lebkuchen im Wald?",
        "antworten": [
          "hänsel und gretel",
          "hänsel gretel"
        ],
        "loesung": "Hänsel und Gretel"
      },
      {
        "frage": "Wer wohnt in dem Lebkuchenhaus?",
        "antworten": [
          "hexe",
          "eine hexe"
        ],
        "loesung": "Eine Hexe"
      },
      {
        "frage": "In welchem Märchen fressen sich sieben kleine Ziegen vor einem Wolf?",
        "antworten": [
          "wolf und die sieben geißlein",
          "sieben geißlein",
          "geißlein"
        ],
        "loesung": "Der Wolf und die sieben Geißlein"
      },
      {
        "frage": "In welchem Märchen wird Stroh zu Gold gesponnen?",
        "antworten": [
          "rumpelstilzchen"
        ],
        "loesung": "Rumpelstilzchen"
      },
      {
        "frage": "In welchem Märchen wird ein Frosch zum Prinzen?",
        "antworten": [
          "froschkönig",
          "der froschkönig"
        ],
        "loesung": "Der Froschkönig"
      },
      {
        "frage": "Wie viele Wünsche hat man bei einer Wunderlampe im Märchen?",
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
        "frage": "Welches Tier ist Käpt'n Blaubär?",
        "antworten": [
          "bär",
          "blaubär"
        ],
        "loesung": "Ein Bär"
      },
      {
        "frage": "Welches Tier ist Paddington?",
        "antworten": [
          "bär"
        ],
        "loesung": "Ein Bär"
      },
      {
        "frage": "Wie heißt das Buch von Michael Ende über einen Lokführer und einen Jungen?",
        "antworten": [
          "jim knopf"
        ],
        "loesung": "Jim Knopf"
      },
      {
        "frage": "Wie heißt die Lokomotive von Jim Knopf?",
        "antworten": [
          "emma"
        ],
        "loesung": "Emma"
      },
      {
        "frage": "Welches Tier ist die Hauptfigur in der kleinen Raupe Nimmersatt?",
        "antworten": [
          "raupe"
        ],
        "loesung": "Eine Raupe"
      },
      {
        "frage": "Wie heißt die Zeichentrickserie über eine kleine Biene?",
        "antworten": [
          "biene maja",
          "maja"
        ],
        "loesung": "Biene Maja"
      },
      {
        "frage": "Wie heißt der beste Freund der Biene Maja?",
        "antworten": [
          "willi"
        ],
        "loesung": "Willi"
      },
      {
        "frage": "Wie nennt man ein Buch mit vielen Bildern und wenig Text?",
        "antworten": [
          "bilderbuch"
        ],
        "loesung": "Ein Bilderbuch"
      },
      {
        "frage": "Wie heißt das Spiel, bei dem man verdeckte Karten aufdeckt und Paare sucht?",
        "antworten": [
          "memory"
        ],
        "loesung": "Memory"
      },
      {
        "frage": "Wie heißt das Spiel, bei dem man aus Buchstaben Wörter legt?",
        "antworten": [
          "scrabble"
        ],
        "loesung": "Scrabble"
      },
      {
        "frage": "Wie nennt man eine Vorstellung mit Clowns und Artisten im Zelt?",
        "antworten": [
          "zirkus"
        ],
        "loesung": "Der Zirkus"
      },
      {
        "frage": "Wie nennt man Puppen, die an Fäden bewegt werden?",
        "antworten": [
          "marionetten",
          "marionette"
        ],
        "loesung": "Marionetten"
      },
      {
        "frage": "Wer half Aschenputtel, die Linsen aus der Asche zu lesen?",
        "antworten": [
          "tauben",
          "die tauben",
          "vögel"
        ],
        "loesung": "Die Tauben"
      },
      {
        "frage": "In welchem Märchen lässt ein Mädchen seine Haare aus dem Turm herunter?",
        "antworten": [
          "rapunzel"
        ],
        "loesung": "Rapunzel"
      },
      {
        "frage": "Womit wird Schneewittchen von der Königin vergiftet?",
        "antworten": [
          "apfel",
          "einem apfel",
          "giftiger apfel"
        ],
        "loesung": "Mit einem Apfel"
      },
      {
        "frage": "Wer rettet Rotkäppchen und die Großmutter aus dem Bauch des Wolfs?",
        "antworten": [
          "jäger",
          "der jäger"
        ],
        "loesung": "Der Jäger"
      },
      {
        "frage": "In welchem Märchen spuckt ein Esel Goldstücke?",
        "antworten": [
          "tischlein deck dich"
        ],
        "loesung": "Tischlein deck dich"
      },
      {
        "frage": "In welchem Märchen trägt ein Kater Stiefel?",
        "antworten": [
          "gestiefelter kater",
          "der gestiefelte kater"
        ],
        "loesung": "Der gestiefelte Kater"
      },
      {
        "frage": "Wer schrieb das Märchen von der kleinen Meerjungfrau?",
        "antworten": [
          "andersen",
          "hans christian andersen"
        ],
        "loesung": "Hans Christian Andersen"
      },
      {
        "frage": "In welchem Märchen wird aus einem hässlichen Küken ein Schwan?",
        "antworten": [
          "hässliches entlein",
          "das hässliche entlein"
        ],
        "loesung": "Das hässliche Entlein"
      },
      {
        "frage": "Mit welchen Worten beginnen viele Märchen?",
        "antworten": [
          "es war einmal"
        ],
        "loesung": "Es war einmal"
      },
      {
        "frage": "Wie heißt das Buch über einen kleinen Maulwurf, der einen Übeltäter sucht?",
        "antworten": [
          "kleiner maulwurf",
          "vom kleinen maulwurf"
        ],
        "loesung": "Vom kleinen Maulwurf"
      },
      {
        "frage": "Wie heißt das gestreifte Stofftier aus den Büchern von Janosch?",
        "antworten": [
          "tigerente"
        ],
        "loesung": "Die Tigerente"
      },
      {
        "frage": "Wie heißt der kleine Drache aus den Kinderbüchern mit Namen einer Frucht?",
        "antworten": [
          "kokosnuss",
          "der kleine drache kokosnuss"
        ],
        "loesung": "Der kleine Drache Kokosnuss"
      },
      {
        "frage": "Was für ein Wesen ist Pumuckl?",
        "antworten": [
          "kobold"
        ],
        "loesung": "Ein Kobold"
      },
      {
        "frage": "Welche Farbe haben Pumuckls Haare?",
        "antworten": [
          "rot"
        ],
        "loesung": "Rot"
      },
      {
        "frage": "Bei welchem Handwerker wohnt Pumuckl?",
        "antworten": [
          "meister eder",
          "schreiner",
          "eder"
        ],
        "loesung": "Bei Meister Eder"
      },
      {
        "frage": "Wie heißt das Mädchen aus den Hörspielen, das hexen kann?",
        "antworten": [
          "bibi blocksberg",
          "bibi"
        ],
        "loesung": "Bibi Blocksberg"
      },
      {
        "frage": "Wie heißt das Buch von Astrid Lindgren über eine Räubertochter?",
        "antworten": [
          "ronja",
          "ronja räubertochter"
        ],
        "loesung": "Ronja Räubertochter"
      },
      {
        "frage": "Wie heißt der gelbe Schwamm aus der Zeichentrickserie unter Wasser?",
        "antworten": [
          "spongebob"
        ],
        "loesung": "SpongeBob"
      },
      {
        "frage": "Wie heißt das Spiel, bei dem man Klötze aus einem Turm zieht?",
        "antworten": [
          "jenga",
          "wackelturm"
        ],
        "loesung": "Jenga"
      },
      {
        "frage": "Wie heißt das Spiel mit runden Steinen auf einem Schachbrett?",
        "antworten": [
          "dame",
          "damespiel"
        ],
        "loesung": "Dame"
      },
      {
        "frage": "Wie viele Würfel braucht man für Mensch ärgere dich nicht?",
        "antworten": [
          "1",
          "einen",
          "eins"
        ],
        "loesung": "Einen",
        "zahlenbereich": [
          1,
          1
        ]
      },
      {
        "frage": "Wie nennt man ein Rätsel, bei dem man Wörter in Kästchen einträgt?",
        "antworten": [
          "kreuzworträtsel"
        ],
        "loesung": "Ein Kreuzworträtsel"
      },
      {
        "frage": "Wie nennt man ein Bild, das man aus vielen Teilen zusammensetzt?",
        "antworten": [
          "puzzle"
        ],
        "loesung": "Ein Puzzle"
      },
      {
        "frage": "Wie nennt man ein Buch, in dem man Bilder ausmalt?",
        "antworten": [
          "malbuch"
        ],
        "loesung": "Ein Malbuch"
      },
      {
        "frage": "Wie nennt man eine Geschichte, die man anhört statt sie zu lesen?",
        "antworten": [
          "hörspiel",
          "hörbuch"
        ],
        "loesung": "Ein Hörspiel"
      },
      {
        "frage": "Wie nennt man den Ort, an dem man Filme auf einer großen Leinwand sieht?",
        "antworten": [
          "kino"
        ],
        "loesung": "Das Kino"
      },
      {
        "frage": "Was isst man im Kino besonders gern?",
        "antworten": [
          "popcorn"
        ],
        "loesung": "Popcorn"
      },
      {
        "frage": "Wie nennt man eine Bühne, auf der Puppen spielen?",
        "antworten": [
          "puppentheater",
          "kasperletheater"
        ],
        "loesung": "Ein Puppentheater"
      },
      {
        "frage": "Wie heißt das Fest, an dem sich alle verkleiden?",
        "antworten": [
          "fasching",
          "karneval",
          "fastnacht"
        ],
        "loesung": "Fasching"
      },
      {
        "frage": "Wer bringt an Ostern der Tradition nach die Eier?",
        "antworten": [
          "osterhase",
          "der osterhase"
        ],
        "loesung": "Der Osterhase"
      },
      {
        "frage": "Wie nennt man Filme mit gezeichneten Figuren?",
        "antworten": [
          "zeichentrickfilm",
          "zeichentrick",
          "trickfilm"
        ],
        "loesung": "Zeichentrickfilme"
      },
      {
        "frage": "Wie nennt man Figuren aus Knete, die Bild für Bild gefilmt werden?",
        "antworten": [
          "knetfiguren",
          "stop motion",
          "knetanimation"
        ],
        "loesung": "Knetfiguren"
      },
      {
        "frage": "Wie nennt man einen Trick, bei dem etwas verschwindet?",
        "antworten": [
          "zaubertrick",
          "zauberei"
        ],
        "loesung": "Ein Zaubertrick"
      },
      {
        "frage": "Wie nennt man jemanden, der in einem Film eine Rolle spielt?",
        "antworten": [
          "schauspieler",
          "schauspielerin"
        ],
        "loesung": "Ein Schauspieler"
      },
      {
        "frage": "Wie nennt man ein Heft mit Bildergeschichten?",
        "antworten": [
          "comicheft",
          "comic"
        ],
        "loesung": "Ein Comicheft"
      },
      {
        "frage": "Wie heißt das Spiel, bei dem man gemalte Begriffe erraten muss?",
        "antworten": [
          "montagsmaler",
          "pictionary",
          "malspiel"
        ],
        "loesung": "Montagsmaler"
      },
      {
        "frage": "Wie heißt das Kartenspiel mit dem Wort Mau Mau?",
        "antworten": [
          "mau mau"
        ],
        "loesung": "Mau Mau"
      },
      {
        "frage": "Wie nennt man Lieder, die man am Lagerfeuer singt?",
        "antworten": [
          "lagerfeuerlieder",
          "volkslieder"
        ],
        "loesung": "Lagerfeuerlieder"
      },
      {
        "frage": "Wie nennt man eine Sammlung von Bildern in einem Buch?",
        "antworten": [
          "fotoalbum",
          "album",
          "bildband"
        ],
        "loesung": "Ein Fotoalbum"
      },
      {
        "frage": "Wie nennt man eine Geschichte, die frei erfunden ist?",
        "antworten": [
          "märchen",
          "erfundene geschichte",
          "fantasie"
        ],
        "loesung": "Eine erfundene Geschichte"
      },
      {
        "frage": "Wie nennt man eine lustige Geschichte mit Pointe?",
        "antworten": [
          "witz"
        ],
        "loesung": "Ein Witz"
      },
      {
        "frage": "Wie nennt man ein Buch, in das man selbst schreibt, was man erlebt hat?",
        "antworten": [
          "tagebuch"
        ],
        "loesung": "Ein Tagebuch"
      },
      {
        "frage": "Wie heißt der Zirkuskünstler, der auf einem Seil balanciert?",
        "antworten": [
          "seiltänzer",
          "artist"
        ],
        "loesung": "Der Seiltänzer"
      },
      {
        "frage": "Wie nennt man eine Figur, die in einem Buch die Hauptrolle spielt?",
        "antworten": [
          "hauptfigur",
          "held",
          "hauptperson"
        ],
        "loesung": "Die Hauptfigur"
      },
      {
        "frage": "Wie nennt man die Sammlung von Büchern, aus der man ausleihen kann?",
        "antworten": [
          "bücherei",
          "bibliothek"
        ],
        "loesung": "Die Bücherei"
      },
      {
        "frage": "Wie nennt man die Bilder in einem Kinderbuch?",
        "antworten": [
          "illustrationen",
          "bilder"
        ],
        "loesung": "Illustrationen"
      },
      {
        "frage": "Wie nennt man das Lied am Anfang einer Fernsehserie?",
        "antworten": [
          "titelmelodie",
          "titellied",
          "vorspann"
        ],
        "loesung": "Die Titelmelodie"
      },
      {
        "frage": "Schätzfrage: Wie viele Karten hat ein Skatspiel?",
        "schaetzfrage": true,
        "loesung": "32 Karten"
      },
      {
        "frage": "Schätzfrage: Wie viele Teile hat ein großes Kinderpuzzle?",
        "schaetzfrage": true,
        "loesung": "rund 100 Teile"
      },
      {
        "frage": "Schätzfrage: Wie lange dauert eine Folge einer Kinderserie?",
        "schaetzfrage": true,
        "loesung": "rund 25 Minuten"
      }
    ],
    "unterstufe": [
      {
        "frage": "Wie heißt die Zauberschule in den Harry-Potter-Romanen?",
        "antworten": [
          "hogwarts"
        ],
        "loesung": "Hogwarts"
      },
      {
        "frage": "Wer schrieb die Harry-Potter-Romane?",
        "antworten": [
          "rowling",
          "joanne k rowling",
          "j k rowling"
        ],
        "loesung": "Joanne K. Rowling"
      },
      {
        "frage": "Wie heißen Harry Potters beste Freunde?",
        "antworten": [
          "ron und hermine",
          "ron",
          "hermine"
        ],
        "loesung": "Ron und Hermine"
      },
      {
        "frage": "Wie heißt der Hobbit, der bei Tolkien den Ring findet?",
        "antworten": [
          "bilbo",
          "bilbo beutlin"
        ],
        "loesung": "Bilbo Beutlin"
      },
      {
        "frage": "Wie erreicht man in den Narnia-Büchern das Zauberland?",
        "antworten": [
          "schrank",
          "kleiderschrank",
          "durch einen schrank"
        ],
        "loesung": "Durch einen Kleiderschrank"
      },
      {
        "frage": "Wer schrieb Die unendliche Geschichte und Momo?",
        "antworten": [
          "michael ende",
          "ende"
        ],
        "loesung": "Michael Ende"
      },
      {
        "frage": "Wie heißt der Klempner mit der roten Mütze aus den Nintendo-Spielen?",
        "antworten": [
          "mario",
          "super mario"
        ],
        "loesung": "Mario"
      },
      {
        "frage": "Wie heißt Marios Bruder?",
        "antworten": [
          "luigi"
        ],
        "loesung": "Luigi"
      },
      {
        "frage": "In welchem Spiel baut man eine Welt aus Blöcken?",
        "antworten": [
          "minecraft"
        ],
        "loesung": "Minecraft"
      },
      {
        "frage": "Wie heißt das gelbe Pokémon, das mit Strom kämpft?",
        "antworten": [
          "pikachu"
        ],
        "loesung": "Pikachu"
      },
      {
        "frage": "In welchem Land wurden die Pokémon-Spiele entwickelt?",
        "antworten": [
          "japan"
        ],
        "loesung": "In Japan"
      },
      {
        "frage": "Wie heißt der beste Freund von Asterix?",
        "antworten": [
          "obelix"
        ],
        "loesung": "Obelix"
      },
      {
        "frage": "Was verleiht Asterix seine übermenschlichen Kräfte?",
        "antworten": [
          "zaubertrank"
        ],
        "loesung": "Der Zaubertrank"
      },
      {
        "frage": "Wie heißt der Hund von Obelix?",
        "antworten": [
          "idefix"
        ],
        "loesung": "Idefix"
      },
      {
        "frage": "Wie heißt der Detektiv, der in der Baker Street wohnt?",
        "antworten": [
          "sherlock holmes",
          "holmes"
        ],
        "loesung": "Sherlock Holmes"
      },
      {
        "frage": "Wie heißt der reichste Erpel von Entenhausen?",
        "antworten": [
          "dagobert duck",
          "dagobert"
        ],
        "loesung": "Dagobert Duck"
      },
      {
        "frage": "Wie heißen die drei Neffen von Donald Duck?",
        "antworten": [
          "tick trick und track",
          "tick trick track"
        ],
        "loesung": "Tick, Trick und Track"
      },
      {
        "frage": "In welcher Stadt kämpft Batman gegen Verbrecher?",
        "antworten": [
          "gotham",
          "gotham city"
        ],
        "loesung": "In Gotham City"
      },
      {
        "frage": "Wie heißt Spider-Man mit bürgerlichem Namen?",
        "antworten": [
          "peter parker",
          "parker"
        ],
        "loesung": "Peter Parker"
      },
      {
        "frage": "Wie heißt die Filmreihe mit Jedi-Rittern und Lichtschwertern?",
        "antworten": [
          "star wars",
          "krieg der sterne"
        ],
        "loesung": "Star Wars"
      },
      {
        "frage": "Wie heißt der kleine grüne Jedi-Meister in Star Wars?",
        "antworten": [
          "yoda"
        ],
        "loesung": "Yoda"
      },
      {
        "frage": "Wie heißt der Roboter in Star Wars, der pfeift und piepst?",
        "antworten": [
          "r2 d2",
          "r2d2",
          "artoo"
        ],
        "loesung": "R2-D2"
      },
      {
        "frage": "Wie heißt der Zeichentrickfilm über einen jungen Löwen, der König wird?",
        "antworten": [
          "könig der löwen",
          "der könig der löwen"
        ],
        "loesung": "Der König der Löwen"
      },
      {
        "frage": "Wie heißt der Disney-Film über die Schwestern Elsa und Anna?",
        "antworten": [
          "die eiskönigin",
          "eiskönigin",
          "frozen"
        ],
        "loesung": "Die Eiskönigin"
      },
      {
        "frage": "Wie heißt das Brettspiel, bei dem man Straßen und Häuser kauft?",
        "antworten": [
          "monopoly"
        ],
        "loesung": "Monopoly"
      },
      {
        "frage": "Wie heißt das Brettspiel, bei dem man Rohstoffe tauscht und Siedlungen baut?",
        "antworten": [
          "siedler von catan",
          "catan",
          "die siedler von catan"
        ],
        "loesung": "Die Siedler von Catan"
      },
      {
        "frage": "Wie heißt der Film von Steven Spielberg über einen Jungen und einen Außerirdischen?",
        "antworten": [
          "e t",
          "et"
        ],
        "loesung": "E.T."
      },
      {
        "frage": "Wie nennt man ein Buch, das eine Geschichte in Bildern erzählt?",
        "antworten": [
          "comic",
          "graphic novel"
        ],
        "loesung": "Ein Comic"
      },
      {
        "frage": "Schätzfrage: Wie viele Harry-Potter-Filme gibt es?",
        "schaetzfrage": true,
        "loesung": "8 Filme"
      },
      {
        "frage": "Schätzfrage: Wie viele Asterix-Bände sind bisher erschienen?",
        "schaetzfrage": true,
        "loesung": "rund 40"
      },
      {
        "frage": "Wie heißt der Schulleiter von Hogwarts?",
        "antworten": [
          "dumbledore",
          "albus dumbledore"
        ],
        "loesung": "Albus Dumbledore"
      },
      {
        "frage": "Wie heißt die Eule von Harry Potter?",
        "antworten": [
          "hedwig"
        ],
        "loesung": "Hedwig"
      },
      {
        "frage": "Wie heißt der Sport, der bei Harry Potter auf Besen gespielt wird?",
        "antworten": [
          "quidditch"
        ],
        "loesung": "Quidditch"
      },
      {
        "frage": "Wer schrieb den Roman Der Hobbit?",
        "antworten": [
          "tolkien",
          "j r r tolkien"
        ],
        "loesung": "J. R. R. Tolkien"
      },
      {
        "frage": "Wie heißt der Hobbit, der den Ring nach Mordor bringt?",
        "antworten": [
          "frodo",
          "frodo beutlin"
        ],
        "loesung": "Frodo Beutlin"
      },
      {
        "frage": "Wie heißt die Prinzessin in den Super-Mario-Spielen?",
        "antworten": [
          "peach",
          "prinzessin peach"
        ],
        "loesung": "Prinzessin Peach"
      },
      {
        "frage": "Wie heißt Marios größter Gegenspieler?",
        "antworten": [
          "bowser"
        ],
        "loesung": "Bowser"
      },
      {
        "frage": "Wie heißt die Spielkonsole von Sony?",
        "antworten": [
          "playstation"
        ],
        "loesung": "Die PlayStation"
      },
      {
        "frage": "Wie heißt die Spielkonsole von Microsoft?",
        "antworten": [
          "xbox"
        ],
        "loesung": "Die Xbox"
      },
      {
        "frage": "In welchem Spiel füllt man mit fallenden Klötzen Reihen aus?",
        "antworten": [
          "tetris"
        ],
        "loesung": "Tetris"
      },
      {
        "frage": "Wie heißt der Held der Legend-of-Zelda-Spiele?",
        "antworten": [
          "link"
        ],
        "loesung": "Link"
      },
      {
        "frage": "Wie heißt der Superheld, der vom Planeten Krypton stammt?",
        "antworten": [
          "superman"
        ],
        "loesung": "Superman"
      },
      {
        "frage": "Wer zeichnete die Asterix-Bände?",
        "antworten": [
          "uderzo",
          "albert uderzo"
        ],
        "loesung": "Albert Uderzo"
      },
      {
        "frage": "Wer schrieb die Texte der Asterix-Bände?",
        "antworten": [
          "goscinny",
          "rene goscinny"
        ],
        "loesung": "René Goscinny"
      },
      {
        "frage": "Wie heißt der belgische Comicreporter mit dem weißen Hund?",
        "antworten": [
          "tim",
          "tintin"
        ],
        "loesung": "Tim"
      },
      {
        "frage": "Wie heißt der Hund von Tim?",
        "antworten": [
          "struppi",
          "struppy"
        ],
        "loesung": "Struppi"
      },
      {
        "frage": "Wie heißt die Buchreihe von Cornelia Funke über einen Jungen, der Figuren aus Büchern liest?",
        "antworten": [
          "tintenherz"
        ],
        "loesung": "Tintenherz"
      },
      {
        "frage": "Wie heißt die Buchreihe über einen Halbgott und die griechischen Sagen?",
        "antworten": [
          "percy jackson"
        ],
        "loesung": "Percy Jackson"
      },
      {
        "frage": "Wie heißt der Ghibli-Film über ein Mädchen in einer Geisterwelt?",
        "antworten": [
          "chihiro",
          "chihiros reise ins zauberland"
        ],
        "loesung": "Chihiros Reise ins Zauberland"
      },
      {
        "frage": "Wie heißt das Kartenspiel, bei dem man bei der vorletzten Karte etwas ruft?",
        "antworten": [
          "uno"
        ],
        "loesung": "UNO"
      },
      {
        "frage": "Wie heißen die vier Häuser in Hogwarts?",
        "antworten": [
          "gryffindor slytherin hufflepuff ravenclaw",
          "gryffindor slytherin"
        ],
        "loesung": "Gryffindor, Slytherin, Hufflepuff und Ravenclaw"
      },
      {
        "frage": "In welchem Haus ist Harry Potter?",
        "antworten": [
          "gryffindor"
        ],
        "loesung": "In Gryffindor"
      },
      {
        "frage": "Wie heißt Harry Potters größter Gegenspieler?",
        "antworten": [
          "voldemort"
        ],
        "loesung": "Lord Voldemort"
      },
      {
        "frage": "Wie heißt der Berg, in dem der Eine Ring vernichtet wird?",
        "antworten": [
          "schicksalsberg",
          "mount doom"
        ],
        "loesung": "Der Schicksalsberg"
      },
      {
        "frage": "Wer schrieb die Narnia-Bücher?",
        "antworten": [
          "lewis",
          "c s lewis"
        ],
        "loesung": "C. S. Lewis"
      },
      {
        "frage": "Wie heißt der Löwe in den Narnia-Büchern?",
        "antworten": [
          "aslan"
        ],
        "loesung": "Aslan"
      },
      {
        "frage": "Wie heißt das Buch von Cornelia Funke über einen Silberdrachen?",
        "antworten": [
          "drachenreiter"
        ],
        "loesung": "Drachenreiter"
      },
      {
        "frage": "Wie heißt der Roman von Jules Verne über eine Wette um eine Weltreise?",
        "antworten": [
          "in 80 tagen um die welt",
          "80 tage"
        ],
        "loesung": "In 80 Tagen um die Welt"
      },
      {
        "frage": "Wie heißt der Roman von Jules Verne über ein geheimnisvolles U-Boot?",
        "antworten": [
          "20000 meilen unter dem meer",
          "zwanzigtausend meilen"
        ],
        "loesung": "20.000 Meilen unter dem Meer"
      },
      {
        "frage": "Wer schrieb die Abenteuer von Tom Sawyer?",
        "antworten": [
          "mark twain",
          "twain"
        ],
        "loesung": "Mark Twain"
      },
      {
        "frage": "Wie heißt der beste Freund von Tom Sawyer?",
        "antworten": [
          "huckleberry finn",
          "huck finn",
          "huck"
        ],
        "loesung": "Huckleberry Finn"
      },
      {
        "frage": "Wer schrieb den Roman Die Schatzinsel?",
        "antworten": [
          "stevenson",
          "robert louis stevenson"
        ],
        "loesung": "Robert Louis Stevenson"
      },
      {
        "frage": "Wie heißt der einbeinige Schiffskoch in der Schatzinsel?",
        "antworten": [
          "long john silver",
          "silver"
        ],
        "loesung": "Long John Silver"
      },
      {
        "frage": "Wie heißt das Mädchen, das bei seinem Großvater in den Alpen lebt?",
        "antworten": [
          "heidi"
        ],
        "loesung": "Heidi"
      },
      {
        "frage": "Wie heißt Heidis Freund, der die Ziegen hütet?",
        "antworten": [
          "geißenpeter",
          "peter"
        ],
        "loesung": "Der Geißenpeter"
      },
      {
        "frage": "Wie heißen die drei jugendlichen Detektive aus Rocky Beach?",
        "antworten": [
          "justus peter bob",
          "die drei fragezeichen",
          "justus"
        ],
        "loesung": "Justus, Peter und Bob"
      },
      {
        "frage": "Wie heißt die bekannte Kinderbuchreihe von Enid Blyton über vier Kinder und einen Hund?",
        "antworten": [
          "fünf freunde"
        ],
        "loesung": "Fünf Freunde"
      },
      {
        "frage": "Wie heißt das Mädchen, das im Zauberer von Oz nach Hause will?",
        "antworten": [
          "dorothy"
        ],
        "loesung": "Dorothy"
      },
      {
        "frage": "Wie heißt der Film über Spielzeug, das lebendig wird?",
        "antworten": [
          "toy story"
        ],
        "loesung": "Toy Story"
      },
      {
        "frage": "Wie heißt der Cowboy in Toy Story?",
        "antworten": [
          "woody"
        ],
        "loesung": "Woody"
      },
      {
        "frage": "Wie heißt der Raumfahrer in Toy Story?",
        "antworten": [
          "buzz",
          "buzz lightyear"
        ],
        "loesung": "Buzz Lightyear"
      },
      {
        "frage": "Wie heißt der Film über einen Roboter, der die verlassene Erde aufräumt?",
        "antworten": [
          "wall e",
          "walle"
        ],
        "loesung": "WALL·E"
      },
      {
        "frage": "Wie heißt der Film über eine Ratte, die Koch werden will?",
        "antworten": [
          "ratatouille"
        ],
        "loesung": "Ratatouille"
      },
      {
        "frage": "Wie heißt die vergessliche Fischdame in Findet Nemo?",
        "antworten": [
          "dorie",
          "dory"
        ],
        "loesung": "Dorie"
      },
      {
        "frage": "Wie heißt der Film über einen Wikingerjungen und seinen Drachen?",
        "antworten": [
          "drachenzähmen leicht gemacht",
          "drachenzähmen"
        ],
        "loesung": "Drachenzähmen leicht gemacht"
      },
      {
        "frage": "Wie heißt der Marvel-Held mit dem Hammer aus der nordischen Sage?",
        "antworten": [
          "thor"
        ],
        "loesung": "Thor"
      },
      {
        "frage": "Wie heißt der Marvel-Held mit dem runden Schild?",
        "antworten": [
          "captain america"
        ],
        "loesung": "Captain America"
      },
      {
        "frage": "Wie heißt der Marvel-Held in der Rüstung aus Metall?",
        "antworten": [
          "iron man"
        ],
        "loesung": "Iron Man"
      },
      {
        "frage": "Wie heißt der blaue Igel aus den Sega-Spielen?",
        "antworten": [
          "sonic"
        ],
        "loesung": "Sonic"
      },
      {
        "frage": "Wie heißt das Rennspiel mit Mario und seinen Freunden?",
        "antworten": [
          "mario kart"
        ],
        "loesung": "Mario Kart"
      },
      {
        "frage": "Wie heißt die Spielfigur, die in einem Labyrinth Punkte frisst?",
        "antworten": [
          "pac man",
          "pacman"
        ],
        "loesung": "Pac-Man"
      },
      {
        "frage": "Wie heißt die Nintendo-Konsole, die man auch unterwegs nutzen kann?",
        "antworten": [
          "switch",
          "nintendo switch"
        ],
        "loesung": "Die Nintendo Switch"
      },
      {
        "frage": "Wie nennt man Spiele, die man gemeinsam über das Internet spielt?",
        "antworten": [
          "online spiele",
          "multiplayer",
          "onlinespiele"
        ],
        "loesung": "Online-Spiele"
      },
      {
        "frage": "Wie nennt man Wettkämpfe im Videospielen?",
        "antworten": [
          "e sport",
          "esport"
        ],
        "loesung": "E-Sport"
      },
      {
        "frage": "Wie heißt das Brettspiel, bei dem man Länder erobert?",
        "antworten": [
          "risiko"
        ],
        "loesung": "Risiko"
      },
      {
        "frage": "Wie heißt das Spiel, bei dem man Begriffe erklärt, ohne bestimmte Wörter zu benutzen?",
        "antworten": [
          "tabu"
        ],
        "loesung": "Tabu"
      },
      {
        "frage": "Wie nennt man eine einzelne Folge einer Serie?",
        "antworten": [
          "episode",
          "folge"
        ],
        "loesung": "Eine Episode"
      },
      {
        "frage": "Wie nennt man eine zusammengehörende Reihe von Folgen?",
        "antworten": [
          "staffel",
          "season"
        ],
        "loesung": "Eine Staffel"
      },
      {
        "frage": "Wie nennt man die kurze Vorschau auf einen Film?",
        "antworten": [
          "trailer"
        ],
        "loesung": "Der Trailer"
      },
      {
        "frage": "Wie nennt man die Übertragung eines Films in eine andere Sprache?",
        "antworten": [
          "synchronisation",
          "synchro"
        ],
        "loesung": "Die Synchronisation"
      },
      {
        "frage": "Wie nennt man den Text am unteren Bildrand fremdsprachiger Filme?",
        "antworten": [
          "untertitel"
        ],
        "loesung": "Untertitel"
      },
      {
        "frage": "Wie nennt man die Person, die bei einem Film die Regie führt?",
        "antworten": [
          "regisseur",
          "regisseurin"
        ],
        "loesung": "Der Regisseur"
      },
      {
        "frage": "Wie nennt man die Musik, die unter einer Filmszene läuft?",
        "antworten": [
          "filmmusik",
          "soundtrack",
          "score"
        ],
        "loesung": "Die Filmmusik"
      },
      {
        "frage": "Wie nennt man die Person, die gefährliche Szenen statt des Schauspielers spielt?",
        "antworten": [
          "stuntman",
          "double",
          "stuntfrau"
        ],
        "loesung": "Ein Stuntman"
      },
      {
        "frage": "Wie nennt man die Technik, mit der am Computer Figuren erzeugt werden?",
        "antworten": [
          "computeranimation",
          "cgi",
          "animation"
        ],
        "loesung": "Computeranimation"
      },
      {
        "frage": "Wie nennt man ein Buch, das vor dem Film erschien und die Vorlage war?",
        "antworten": [
          "buchvorlage",
          "roman",
          "vorlage"
        ],
        "loesung": "Die Buchvorlage"
      },
      {
        "frage": "Wie nennt man eine Geschichte, die in der Zukunft spielt?",
        "antworten": [
          "science fiction",
          "zukunftsroman"
        ],
        "loesung": "Science-Fiction"
      },
      {
        "frage": "Wie nennt man eine Geschichte mit Zauberei und erfundenen Welten?",
        "antworten": [
          "fantasy"
        ],
        "loesung": "Fantasy"
      },
      {
        "frage": "Schätzfrage: Wie viele Staffeln hat die Serie Die Simpsons?",
        "schaetzfrage": true,
        "loesung": "über 35 Staffeln"
      },
      {
        "frage": "Schätzfrage: Wie lange dauert ein Kinofilm im Durchschnitt?",
        "schaetzfrage": true,
        "loesung": "rund 110 Minuten"
      }
    ],
    "mittelstufe": [
      {
        "frage": "Wer führte Regie bei Jurassic Park und Schindlers Liste?",
        "antworten": [
          "spielberg",
          "steven spielberg"
        ],
        "loesung": "Steven Spielberg"
      },
      {
        "frage": "Wer schrieb Der Herr der Ringe?",
        "antworten": [
          "tolkien",
          "j r r tolkien"
        ],
        "loesung": "J. R. R. Tolkien"
      },
      {
        "frage": "Wie heißt der Zauberer mit dem grauen Umhang im Herrn der Ringe?",
        "antworten": [
          "gandalf"
        ],
        "loesung": "Gandalf"
      },
      {
        "frage": "Wie heißt die Zeichentrickfamilie aus Springfield?",
        "antworten": [
          "die simpsons",
          "simpsons"
        ],
        "loesung": "Die Simpsons"
      },
      {
        "frage": "Wie heißt der Vater der Simpsons?",
        "antworten": [
          "homer",
          "homer simpson"
        ],
        "loesung": "Homer Simpson"
      },
      {
        "frage": "Wie heißt die Fantasy-Serie nach den Romanen von George R. R. Martin?",
        "antworten": [
          "game of thrones"
        ],
        "loesung": "Game of Thrones"
      },
      {
        "frage": "Wie heißt der Film von 1997 über den Untergang eines Ozeandampfers?",
        "antworten": [
          "titanic"
        ],
        "loesung": "Titanic"
      },
      {
        "frage": "Wer führte Regie bei Titanic und Avatar?",
        "antworten": [
          "cameron",
          "james cameron"
        ],
        "loesung": "James Cameron"
      },
      {
        "frage": "Wie nennt man japanische Comics?",
        "antworten": [
          "manga"
        ],
        "loesung": "Manga"
      },
      {
        "frage": "Wie nennt man japanische Zeichentrickfilme?",
        "antworten": [
          "anime"
        ],
        "loesung": "Anime"
      },
      {
        "frage": "Welches Studio drehte Chihiros Reise ins Zauberland?",
        "antworten": [
          "ghibli",
          "studio ghibli"
        ],
        "loesung": "Studio Ghibli"
      },
      {
        "frage": "Welche Nummer trägt der britische Geheimagent James Bond?",
        "antworten": [
          "007",
          "null null sieben"
        ],
        "loesung": "007"
      },
      {
        "frage": "Wie heißt der erste abendfüllende Zeichentrickfilm von Disney?",
        "antworten": [
          "schneewittchen",
          "schneewittchen und die sieben zwerge"
        ],
        "loesung": "Schneewittchen und die sieben Zwerge"
      },
      {
        "frage": "In welchem Kurzfilm trat Micky Maus 1928 auf?",
        "antworten": [
          "steamboat willie"
        ],
        "loesung": "In Steamboat Willie"
      },
      {
        "frage": "Wie heißt der Filmpreis der amerikanischen Filmakademie?",
        "antworten": [
          "oscar",
          "academy award"
        ],
        "loesung": "Der Oscar"
      },
      {
        "frage": "Bei welchem Festival wird der Goldene Bär vergeben?",
        "antworten": [
          "berlinale",
          "filmfestspiele berlin"
        ],
        "loesung": "Bei der Berlinale"
      },
      {
        "frage": "Welcher Preis wird beim Filmfestival in Cannes vergeben?",
        "antworten": [
          "goldene palme"
        ],
        "loesung": "Die Goldene Palme"
      },
      {
        "frage": "Wie heißt die Superheldengruppe von Marvel um Iron Man und Captain America?",
        "antworten": [
          "avengers",
          "die avengers"
        ],
        "loesung": "Die Avengers"
      },
      {
        "frage": "Wie heißt die Filmreihe mit dem Piraten Jack Sparrow?",
        "antworten": [
          "fluch der karibik",
          "pirates of the caribbean"
        ],
        "loesung": "Fluch der Karibik"
      },
      {
        "frage": "Wie nennt man einen Film, der die Vorgeschichte eines bekannten Films erzählt?",
        "antworten": [
          "prequel"
        ],
        "loesung": "Ein Prequel"
      },
      {
        "frage": "Wie nennt man die Fortsetzung eines Films?",
        "antworten": [
          "sequel",
          "fortsetzung"
        ],
        "loesung": "Ein Sequel"
      },
      {
        "frage": "Wie heißt das Videospiel von 2017, in dem hundert Spieler auf einer Insel gegeneinander antreten?",
        "antworten": [
          "fortnite"
        ],
        "loesung": "Fortnite"
      },
      {
        "frage": "Wie heißt die Videoplattform, die 2005 gegründet wurde und heute zu Google gehört?",
        "antworten": [
          "youtube"
        ],
        "loesung": "YouTube"
      },
      {
        "frage": "Wie heißt der Streamingdienst mit dem roten N im Logo?",
        "antworten": [
          "netflix"
        ],
        "loesung": "Netflix"
      },
      {
        "frage": "Wie nennt man das Ansehen mehrerer Folgen einer Serie hintereinander?",
        "antworten": [
          "binge watching",
          "bingen"
        ],
        "loesung": "Binge-Watching"
      },
      {
        "frage": "Wie heißt der Gründer des Disney-Konzerns?",
        "antworten": [
          "walt disney",
          "disney"
        ],
        "loesung": "Walt Disney"
      },
      {
        "frage": "Wie heißt der Roman von Suzanne Collins über tödliche Spiele in einem Staat namens Panem?",
        "antworten": [
          "die tribute von panem",
          "tribute von panem",
          "hunger games"
        ],
        "loesung": "Die Tribute von Panem"
      },
      {
        "frage": "Wie nennt man die Musik, die eigens für einen Film komponiert wird?",
        "antworten": [
          "filmmusik",
          "soundtrack",
          "score"
        ],
        "loesung": "Filmmusik"
      },
      {
        "frage": "Schätzfrage: In welchem Jahr kam der erste Star-Wars-Film ins Kino?",
        "schaetzfrage": true,
        "loesung": "1977"
      },
      {
        "frage": "Schätzfrage: Wie lang ist die Kinofassung von Der Herr der Ringe, Die Rückkehr des Königs?",
        "schaetzfrage": true,
        "loesung": "rund 200 Minuten"
      }
    ],
    "erwachsene": [
      {
        "frage": "Wer spielte die Hauptrolle in Der Pate von 1972?",
        "antworten": [
          "brando",
          "marlon brando"
        ],
        "loesung": "Marlon Brando"
      },
      {
        "frage": "Wer führte Regie bei Der Pate?",
        "antworten": [
          "coppola",
          "francis ford coppola"
        ],
        "loesung": "Francis Ford Coppola"
      },
      {
        "frage": "Wie heißt der Film von 1942 mit Humphrey Bogart und Ingrid Bergman in Marokko?",
        "antworten": [
          "casablanca"
        ],
        "loesung": "Casablanca"
      },
      {
        "frage": "Welcher Hitchcock-Film ist für seine Szene in einer Motel-Dusche bekannt?",
        "antworten": [
          "psycho"
        ],
        "loesung": "Psycho"
      },
      {
        "frage": "In welchem Film von Stanley Kubrick meutert ein Computer namens HAL 9000?",
        "antworten": [
          "2001",
          "odyssee im weltraum",
          "2001 odyssee im weltraum"
        ],
        "loesung": "2001 – Odyssee im Weltraum"
      },
      {
        "frage": "Wer schrieb den Roman Der Name der Rose?",
        "antworten": [
          "eco",
          "umberto eco"
        ],
        "loesung": "Umberto Eco"
      },
      {
        "frage": "Wer schrieb Die Blechtrommel?",
        "antworten": [
          "grass",
          "günter grass"
        ],
        "loesung": "Günter Grass"
      },
      {
        "frage": "Wer schrieb den Roman Das Parfum?",
        "antworten": [
          "süskind",
          "patrick süskind"
        ],
        "loesung": "Patrick Süskind"
      },
      {
        "frage": "Wer schrieb den Roman 1984 über einen Überwachungsstaat?",
        "antworten": [
          "orwell",
          "george orwell"
        ],
        "loesung": "George Orwell"
      },
      {
        "frage": "Wer schrieb Schöne neue Welt?",
        "antworten": [
          "huxley",
          "aldous huxley"
        ],
        "loesung": "Aldous Huxley"
      },
      {
        "frage": "Wie heißt das Shakespeare-Stück über den Prinzen von Dänemark?",
        "antworten": [
          "hamlet"
        ],
        "loesung": "Hamlet"
      },
      {
        "frage": "Wie heißt der Film von Wolfgang Petersen über ein deutsches U-Boot?",
        "antworten": [
          "das boot"
        ],
        "loesung": "Das Boot"
      },
      {
        "frage": "Wer führte Regie bei Lola rennt?",
        "antworten": [
          "tykwer",
          "tom tykwer"
        ],
        "loesung": "Tom Tykwer"
      },
      {
        "frage": "Wer führte Regie bei Das Leben der Anderen?",
        "antworten": [
          "donnersmarck",
          "florian henckel von donnersmarck"
        ],
        "loesung": "Florian Henckel von Donnersmarck"
      },
      {
        "frage": "Wer führte Regie bei Pulp Fiction?",
        "antworten": [
          "tarantino",
          "quentin tarantino"
        ],
        "loesung": "Quentin Tarantino"
      },
      {
        "frage": "Welcher Film gewann 2020 als erster nicht englischsprachiger Film den Oscar als bester Film?",
        "antworten": [
          "parasite"
        ],
        "loesung": "Parasite"
      },
      {
        "frage": "Wie heißt der italienische Regisseur von La Dolce Vita?",
        "antworten": [
          "fellini",
          "federico fellini"
        ],
        "loesung": "Federico Fellini"
      },
      {
        "frage": "Welche Schauspielerin spielte Holly Golightly in Frühstück bei Tiffany?",
        "antworten": [
          "hepburn",
          "audrey hepburn"
        ],
        "loesung": "Audrey Hepburn"
      },
      {
        "frage": "Welche Figur spielt Anthony Hopkins in Das Schweigen der Lämmer?",
        "antworten": [
          "lecter",
          "hannibal lecter"
        ],
        "loesung": "Hannibal Lecter"
      },
      {
        "frage": "Welcher Schauspieler verkörperte als erster James Bond im Kino?",
        "antworten": [
          "connery",
          "sean connery"
        ],
        "loesung": "Sean Connery"
      },
      {
        "frage": "Wie heißt der Film von Ridley Scott über einen römischen Feldherrn, der Gladiator wird?",
        "antworten": [
          "gladiator"
        ],
        "loesung": "Gladiator"
      },
      {
        "frage": "Wie heißt die längstlaufende deutsche Krimireihe im Ersten?",
        "antworten": [
          "tatort"
        ],
        "loesung": "Der Tatort"
      },
      {
        "frage": "Seit welchem Jahr läuft der Tatort?",
        "antworten": [
          "1970"
        ],
        "loesung": "Seit 1970",
        "zahlenbereich": [
          1970,
          1970
        ]
      },
      {
        "frage": "Wie heißt die Quizsendung, die Günther Jauch seit 1999 moderiert?",
        "antworten": [
          "wer wird millionär"
        ],
        "loesung": "Wer wird Millionär"
      },
      {
        "frage": "Wie heißt das Musical von Andrew Lloyd Webber über ein Phantom in einem Opernhaus?",
        "antworten": [
          "das phantom der oper",
          "phantom der oper"
        ],
        "loesung": "Das Phantom der Oper"
      },
      {
        "frage": "Wie heißt die Serie über eine Mafiafamilie in New Jersey?",
        "antworten": [
          "die sopranos",
          "sopranos"
        ],
        "loesung": "Die Sopranos"
      },
      {
        "frage": "Wie nennt man einen Film, der bewusst billig und überzeichnet gedreht ist?",
        "antworten": [
          "trash",
          "b movie",
          "trashfilm"
        ],
        "loesung": "Ein Trashfilm"
      },
      {
        "frage": "Wie heißt die Buchmesse, die jedes Jahr im Oktober stattfindet?",
        "antworten": [
          "frankfurter buchmesse",
          "frankfurt"
        ],
        "loesung": "Die Frankfurter Buchmesse"
      },
      {
        "frage": "Schätzfrage: In welchem Jahr kam der erste abendfüllende Tonfilm in die Kinos?",
        "schaetzfrage": true,
        "loesung": "1927"
      },
      {
        "frage": "Schätzfrage: Wie viele Oscars gewann Der Herr der Ringe, Die Rückkehr des Königs?",
        "schaetzfrage": true,
        "loesung": "11 Oscars"
      }
    ]
  }
};
