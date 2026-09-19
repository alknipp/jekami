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
