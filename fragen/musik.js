/* ------------------------------------------------------------
   Jekami Quiz - Themengebiet: Musik

   Normale Frage:
     { frage: "...", antworten: ["variante","variante"], loesung: "..." }
     optional: zahlenbereich: [min, max]
   Schaetzfrage:
     { frage: "Schaetzfrage: ...", schaetzfrage: true, loesung: "..." }
   geprueft: "JJJJ-MM" markiert Angaben, die sich aendern koennen.

   Reihenfolge egal - die App mischt bei jeder Runde.
   Regeln und Alterskalibrierung stehen in CLAUDE.md.
   ------------------------------------------------------------ */

JEKAMI_FRAGEN.musik = {
  "name": "Musik",
  "symbol": "🎵",
  "stufen": {
    "grundschule": [
      {
        "frage": "Welches Instrument hat schwarze und weiße Tasten?",
        "antworten": [
          "klavier",
          "piano",
          "keyboard"
        ],
        "loesung": "Das Klavier"
      },
      {
        "frage": "Wie viele Saiten hat eine normale Gitarre?",
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
        "frage": "Welches Blasinstrument aus Holz lernen viele Kinder zuerst?",
        "antworten": [
          "blockflöte",
          "flöte"
        ],
        "loesung": "Die Blockflöte"
      },
      {
        "frage": "Womit schlägt man auf ein Schlagzeug?",
        "antworten": [
          "sticks",
          "stöcke",
          "schlägel",
          "trommelstöcke"
        ],
        "loesung": "Mit Stöcken"
      },
      {
        "frage": "Wie nennt man die Person, die vor einem Orchester steht und den Takt vorgibt?",
        "antworten": [
          "dirigent",
          "dirigentin"
        ],
        "loesung": "Der Dirigent"
      },
      {
        "frage": "Wie nennt man viele Musiker, die zusammen spielen?",
        "antworten": [
          "orchester"
        ],
        "loesung": "Ein Orchester"
      },
      {
        "frage": "Wie nennt man viele Menschen, die zusammen singen?",
        "antworten": [
          "chor"
        ],
        "loesung": "Ein Chor"
      },
      {
        "frage": "Wie heißen die Töne der Tonleiter, die mit C beginnt?",
        "antworten": [
          "c d e f g a h c",
          "c d e f g a h"
        ],
        "loesung": "C, D, E, F, G, A, H, C"
      },
      {
        "frage": "Wie nennt man die Zeichen, mit denen man Musik aufschreibt?",
        "antworten": [
          "noten"
        ],
        "loesung": "Noten"
      },
      {
        "frage": "Wie viele Linien hat ein Notensystem?",
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
        "frage": "Wie heißt das Zeichen am Anfang einer Notenzeile für hohe Töne?",
        "antworten": [
          "violinschlüssel",
          "notenschlüssel",
          "g schlüssel"
        ],
        "loesung": "Der Violinschlüssel"
      },
      {
        "frage": "Welches Instrument spielt man mit einem Bogen?",
        "antworten": [
          "geige",
          "violine",
          "cello",
          "streichinstrument"
        ],
        "loesung": "Zum Beispiel die Geige"
      },
      {
        "frage": "Wie heißt das größte Streichinstrument?",
        "antworten": [
          "kontrabass"
        ],
        "loesung": "Der Kontrabass"
      },
      {
        "frage": "Welches Instrument hat viele Pfeifen und steht oft in Kirchen?",
        "antworten": [
          "orgel"
        ],
        "loesung": "Die Orgel"
      },
      {
        "frage": "Welches Instrument zieht man auseinander und drückt es wieder zusammen?",
        "antworten": [
          "akkordeon",
          "ziehharmonika",
          "handharmonika"
        ],
        "loesung": "Das Akkordeon"
      },
      {
        "frage": "Wie nennt man ein Lied, das man zum Einschlafen singt?",
        "antworten": [
          "schlaflied",
          "wiegenlied"
        ],
        "loesung": "Ein Schlaflied"
      },
      {
        "frage": "Wie nennt man Lieder, die man zu Weihnachten singt?",
        "antworten": [
          "weihnachtslieder",
          "weihnachtslied"
        ],
        "loesung": "Weihnachtslieder"
      },
      {
        "frage": "Welches Instrument besteht aus einem Fell, das über einen Rahmen gespannt ist?",
        "antworten": [
          "trommel"
        ],
        "loesung": "Die Trommel"
      },
      {
        "frage": "Wie heißen die beiden Metallteller, die man zusammenschlägt?",
        "antworten": [
          "becken"
        ],
        "loesung": "Die Becken"
      },
      {
        "frage": "Welches Blechblasinstrument hat drei Ventile und klingt hell?",
        "antworten": [
          "trompete"
        ],
        "loesung": "Die Trompete"
      },
      {
        "frage": "Welches Blasinstrument hat einen Zug, den man hin und her schiebt?",
        "antworten": [
          "posaune"
        ],
        "loesung": "Die Posaune"
      },
      {
        "frage": "Welches kleine Instrument bläst man und schiebt es dabei am Mund hin und her?",
        "antworten": [
          "mundharmonika"
        ],
        "loesung": "Die Mundharmonika"
      },
      {
        "frage": "Wie heißt das große dreieckige Instrument mit vielen Saiten und Pedalen?",
        "antworten": [
          "harfe"
        ],
        "loesung": "Die Harfe"
      },
      {
        "frage": "Wie nennt man den Tanz im Dreivierteltakt?",
        "antworten": [
          "walzer"
        ],
        "loesung": "Der Walzer"
      },
      {
        "frage": "Wie nennt man jemanden, der Musik erfindet und aufschreibt?",
        "antworten": [
          "komponist",
          "komponistin"
        ],
        "loesung": "Ein Komponist"
      },
      {
        "frage": "Wie nennt man jemanden, der berufsmäßig singt?",
        "antworten": [
          "sänger",
          "sängerin"
        ],
        "loesung": "Ein Sänger"
      },
      {
        "frage": "Wie heißt die höchste Stimmlage bei Frauen?",
        "antworten": [
          "sopran"
        ],
        "loesung": "Der Sopran"
      },
      {
        "frage": "Wie heißt die tiefste Stimmlage bei Männern?",
        "antworten": [
          "bass"
        ],
        "loesung": "Der Bass"
      },
      {
        "frage": "Wie heißt das Gerät, das gleichmäßig den Takt klopft?",
        "antworten": [
          "metronom"
        ],
        "loesung": "Das Metronom"
      },
      {
        "frage": "Wie nennt man mehrere Töne, die gleichzeitig erklingen?",
        "antworten": [
          "akkord"
        ],
        "loesung": "Ein Akkord"
      },
      {
        "frage": "Wie nennt man den Teil eines Liedes, der immer wiederkehrt?",
        "antworten": [
          "refrain"
        ],
        "loesung": "Der Refrain"
      },
      {
        "frage": "Wie nennt man den Ort, auf dem Musiker vor Publikum spielen?",
        "antworten": [
          "bühne"
        ],
        "loesung": "Die Bühne"
      },
      {
        "frage": "Wie nennt man ein Musikstück, das ein Einzelner allein spielt?",
        "antworten": [
          "solo"
        ],
        "loesung": "Ein Solo"
      },
      {
        "frage": "Wie nennt man Musik ohne Gesang?",
        "antworten": [
          "instrumentalmusik",
          "instrumental",
          "ohne text"
        ],
        "loesung": "Instrumentalmusik"
      },
      {
        "frage": "Wie nennt man die Stelle in Noten, an der man kurz nicht spielt?",
        "antworten": [
          "pause"
        ],
        "loesung": "Eine Pause"
      },
      {
        "frage": "Wie nennt man Musik, die zu einem Film geschrieben wurde?",
        "antworten": [
          "filmmusik",
          "soundtrack"
        ],
        "loesung": "Filmmusik"
      },
      {
        "frage": "In welchem Land wurde Mozart geboren?",
        "antworten": [
          "österreich"
        ],
        "loesung": "In Österreich"
      },
      {
        "frage": "Wie hieß der Komponist mit den Vornamen Wolfgang Amadeus?",
        "antworten": [
          "mozart"
        ],
        "loesung": "Mozart"
      },
      {
        "frage": "Welcher berühmte Komponist wurde taub und komponierte trotzdem weiter?",
        "antworten": [
          "beethoven"
        ],
        "loesung": "Ludwig van Beethoven"
      },
      {
        "frage": "Wie nennt man es, wenn Musik sehr leise gespielt wird?",
        "antworten": [
          "leise",
          "piano"
        ],
        "loesung": "Leise, auf Italienisch piano"
      },
      {
        "frage": "Wie nennt man es, wenn Musik sehr laut gespielt wird?",
        "antworten": [
          "laut",
          "forte"
        ],
        "loesung": "Laut, auf Italienisch forte"
      },
      {
        "frage": "Welche Instrumentengruppe umfasst Geige, Bratsche und Cello?",
        "antworten": [
          "streicher",
          "streichinstrumente"
        ],
        "loesung": "Die Streicher"
      },
      {
        "frage": "Wie nennt man ein Instrument, bei dem Luft durch ein Rohr geblasen wird?",
        "antworten": [
          "blasinstrument",
          "bläser"
        ],
        "loesung": "Ein Blasinstrument"
      },
      {
        "frage": "Womit erzeugt eine Gitarre ihren Ton?",
        "antworten": [
          "saiten",
          "schwingende saiten"
        ],
        "loesung": "Mit schwingenden Saiten"
      },
      {
        "frage": "Wie nennt man das Instrument mit Tasten, das man auf dem Schoß trägt und elektrisch ist?",
        "antworten": [
          "keyboard"
        ],
        "loesung": "Das Keyboard"
      },
      {
        "frage": "Wie nennt man ein Lied, bei dem mehrere nacheinander dieselbe Melodie singen?",
        "antworten": [
          "kanon"
        ],
        "loesung": "Ein Kanon"
      },
      {
        "frage": "Wie nennt man die Lautstärke in der Musik mit einem Fachwort?",
        "antworten": [
          "dynamik"
        ],
        "loesung": "Die Dynamik"
      },
      {
        "frage": "Schätzfrage: Wie viele Tasten hat ein normales Klavier?",
        "schaetzfrage": true,
        "loesung": "88 Tasten"
      },
      {
        "frage": "Schätzfrage: Wie viele Musiker spielen in einem großen Sinfonieorchester?",
        "schaetzfrage": true,
        "loesung": "rund 80"
      },
      {
        "frage": "Schätzfrage: Wie lange dauert ein typischer Popsong?",
        "schaetzfrage": true,
        "loesung": "rund 3 Minuten"
      }
    ],
    "unterstufe": [
      {
        "frage": "Wie heißen die vier Instrumentengruppen eines Orchesters?",
        "antworten": [
          "streicher holzbläser blechbläser schlagwerk",
          "streicher holzbläser blechbläser schlagzeug"
        ],
        "loesung": "Streicher, Holzbläser, Blechbläser, Schlagwerk"
      },
      {
        "frage": "Zu welcher Instrumentengruppe gehört die Klarinette?",
        "antworten": [
          "holzbläser",
          "holzblasinstrument"
        ],
        "loesung": "Zu den Holzbläsern"
      },
      {
        "frage": "Zu welcher Instrumentengruppe gehört die Trompete?",
        "antworten": [
          "blechbläser",
          "blechblasinstrument"
        ],
        "loesung": "Zu den Blechbläsern"
      },
      {
        "frage": "Wie heißt das Vorzeichen, das einen Ton um einen Halbton erhöht?",
        "antworten": [
          "kreuz"
        ],
        "loesung": "Das Kreuz"
      },
      {
        "frage": "Wie heißt das Vorzeichen, das einen Ton um einen Halbton erniedrigt?",
        "antworten": [
          "b",
          "be"
        ],
        "loesung": "Das b"
      },
      {
        "frage": "Wie heißt das Zeichen, das ein Vorzeichen wieder aufhebt?",
        "antworten": [
          "auflösungszeichen",
          "auflösung"
        ],
        "loesung": "Das Auflösungszeichen"
      },
      {
        "frage": "Wie viele Viertelnoten passen in einen Viervierteltakt?",
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
        "frage": "Wie heißt der Notenschlüssel für tiefe Töne?",
        "antworten": [
          "bassschlüssel",
          "f schlüssel"
        ],
        "loesung": "Der Bassschlüssel"
      },
      {
        "frage": "Wie nennt man den Abstand zwischen zwei Tönen?",
        "antworten": [
          "intervall"
        ],
        "loesung": "Ein Intervall"
      },
      {
        "frage": "Wie heißt das Intervall von C nach G?",
        "antworten": [
          "quinte"
        ],
        "loesung": "Die Quinte"
      },
      {
        "frage": "Wie viele Halbtonschritte umfasst eine Oktave?",
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
        "frage": "Wie nennt man eine Tonart mit hellem, fröhlichem Klang?",
        "antworten": [
          "dur"
        ],
        "loesung": "Dur"
      },
      {
        "frage": "Wie nennt man eine Tonart mit dunklem, traurigem Klang?",
        "antworten": [
          "moll"
        ],
        "loesung": "Moll"
      },
      {
        "frage": "Welche Molltonart hat dieselben Vorzeichen wie C-Dur?",
        "antworten": [
          "a moll",
          "a-moll"
        ],
        "loesung": "a-Moll"
      },
      {
        "frage": "Wie nennt man die Geschwindigkeit eines Musikstücks?",
        "antworten": [
          "tempo"
        ],
        "loesung": "Das Tempo"
      },
      {
        "frage": "Was bedeutet die Vortragsbezeichnung Allegro?",
        "antworten": [
          "schnell",
          "lebhaft"
        ],
        "loesung": "Schnell"
      },
      {
        "frage": "Was bedeutet die Vortragsbezeichnung Adagio?",
        "antworten": [
          "langsam"
        ],
        "loesung": "Langsam"
      },
      {
        "frage": "Was bedeutet Crescendo?",
        "antworten": [
          "lauter werden",
          "lauter"
        ],
        "loesung": "Lauter werden"
      },
      {
        "frage": "Wer komponierte die Neunte Sinfonie mit der Ode an die Freude?",
        "antworten": [
          "beethoven"
        ],
        "loesung": "Ludwig van Beethoven"
      },
      {
        "frage": "Welches Werk Beethovens dient als Europahymne?",
        "antworten": [
          "ode an die freude",
          "neunte sinfonie",
          "neunte"
        ],
        "loesung": "Die Ode an die Freude"
      },
      {
        "frage": "Wer komponierte die Oper Die Zauberflöte?",
        "antworten": [
          "mozart"
        ],
        "loesung": "Wolfgang Amadeus Mozart"
      },
      {
        "frage": "Wer komponierte Die vier Jahreszeiten?",
        "antworten": [
          "vivaldi"
        ],
        "loesung": "Antonio Vivaldi"
      },
      {
        "frage": "Wer komponierte die Brandenburgischen Konzerte?",
        "antworten": [
          "bach",
          "johann sebastian bach"
        ],
        "loesung": "Johann Sebastian Bach"
      },
      {
        "frage": "In welcher Musikepoche lebte Johann Sebastian Bach?",
        "antworten": [
          "barock"
        ],
        "loesung": "Im Barock"
      },
      {
        "frage": "Welche Musikepoche folgte auf den Barock?",
        "antworten": [
          "klassik",
          "wiener klassik"
        ],
        "loesung": "Die Klassik"
      },
      {
        "frage": "Welche Musikepoche folgte auf die Klassik?",
        "antworten": [
          "romantik"
        ],
        "loesung": "Die Romantik"
      },
      {
        "frage": "Wie nennt man ein Bühnenwerk, in dem durchgehend gesungen wird?",
        "antworten": [
          "oper"
        ],
        "loesung": "Eine Oper"
      },
      {
        "frage": "Wie nennt man ein Bühnenwerk mit Gesang, Tanz und Sprechtext?",
        "antworten": [
          "musical"
        ],
        "loesung": "Ein Musical"
      },
      {
        "frage": "Wie heißt ein großes mehrsätziges Werk für Orchester?",
        "antworten": [
          "sinfonie",
          "symphonie"
        ],
        "loesung": "Eine Sinfonie"
      },
      {
        "frage": "Wie heißt ein Werk für ein Soloinstrument und Orchester?",
        "antworten": [
          "konzert",
          "solokonzert"
        ],
        "loesung": "Ein Konzert"
      },
      {
        "frage": "Wie nennt man eine Gruppe aus zwei Geigen, Bratsche und Cello?",
        "antworten": [
          "streichquartett",
          "quartett"
        ],
        "loesung": "Ein Streichquartett"
      },
      {
        "frage": "Welche Musikrichtung entstand um 1900 in New Orleans?",
        "antworten": [
          "jazz"
        ],
        "loesung": "Der Jazz"
      },
      {
        "frage": "Welche Musikrichtung entstand in den 1970er-Jahren in New York mit Sprechgesang?",
        "antworten": [
          "hip hop",
          "hiphop",
          "rap"
        ],
        "loesung": "Der Hip-Hop"
      },
      {
        "frage": "Wie nennt man den Sprechgesang im Hip-Hop?",
        "antworten": [
          "rap"
        ],
        "loesung": "Rap"
      },
      {
        "frage": "Aus welchem Land stammt die Musikrichtung Reggae?",
        "antworten": [
          "jamaika"
        ],
        "loesung": "Aus Jamaika"
      },
      {
        "frage": "Wie heißt die Band aus Liverpool mit John, Paul, George und Ringo?",
        "antworten": [
          "beatles",
          "die beatles"
        ],
        "loesung": "Die Beatles"
      },
      {
        "frage": "Wie nennt man das Gerät, das den Klang einer E-Gitarre laut macht?",
        "antworten": [
          "verstärker",
          "amp"
        ],
        "loesung": "Der Verstärker"
      },
      {
        "frage": "Wie viele Saiten hat ein E-Bass meistens?",
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
        "frage": "Nach welchem Ton werden Instrumente im Orchester gestimmt?",
        "antworten": [
          "a",
          "kammerton a",
          "kammerton"
        ],
        "loesung": "Nach dem Kammerton A"
      },
      {
        "frage": "Auf wie viel Hertz ist der Kammerton A gestimmt?",
        "antworten": [
          "440"
        ],
        "loesung": "440 Hertz",
        "zahlenbereich": [
          435,
          445
        ]
      },
      {
        "frage": "Wie nennt man ein Stück, in dem mehrere Stimmen dieselbe Melodie versetzt singen?",
        "antworten": [
          "kanon"
        ],
        "loesung": "Ein Kanon"
      },
      {
        "frage": "Wie nennt man die Lautstärkeangaben in einem Notentext?",
        "antworten": [
          "dynamik"
        ],
        "loesung": "Die Dynamik"
      },
      {
        "frage": "Wie heißt das Zeichen, das eine Wiederholung anzeigt?",
        "antworten": [
          "wiederholungszeichen"
        ],
        "loesung": "Das Wiederholungszeichen"
      },
      {
        "frage": "Wie nennt man den tiefsten und wichtigsten Ton einer Tonart?",
        "antworten": [
          "grundton",
          "tonika"
        ],
        "loesung": "Der Grundton"
      },
      {
        "frage": "Wie nennt man drei Töne, die zusammen einen Akkord bilden?",
        "antworten": [
          "dreiklang"
        ],
        "loesung": "Ein Dreiklang"
      },
      {
        "frage": "Wie heißt das Instrument mit 47 Saiten und sieben Pedalen?",
        "antworten": [
          "harfe",
          "konzertharfe"
        ],
        "loesung": "Die Konzertharfe"
      },
      {
        "frage": "Wie nennt man die Stimmlage zwischen Sopran und Tenor bei Frauen?",
        "antworten": [
          "alt"
        ],
        "loesung": "Der Alt"
      },
      {
        "frage": "Schätzfrage: Wie viele Saiten hat ein Konzertflügel ungefähr?",
        "schaetzfrage": true,
        "loesung": "rund 230"
      },
      {
        "frage": "Schätzfrage: Wie lange dauert Beethovens Neunte Sinfonie?",
        "schaetzfrage": true,
        "loesung": "rund 70 Minuten"
      },
      {
        "frage": "Schätzfrage: Wie viele Durtonarten gibt es?",
        "schaetzfrage": true,
        "loesung": "12"
      }
    ],
    "mittelstufe": [],
    "erwachsene": [
      {
        "frage": "Wer komponierte den Opernzyklus Der Ring des Nibelungen?",
        "antworten": [
          "wagner",
          "richard wagner"
        ],
        "loesung": "Richard Wagner"
      },
      {
        "frage": "Wer komponierte die Oper Don Giovanni?",
        "antworten": [
          "mozart"
        ],
        "loesung": "Wolfgang Amadeus Mozart"
      },
      {
        "frage": "Wer komponierte Ein deutsches Requiem?",
        "antworten": [
          "brahms",
          "johannes brahms"
        ],
        "loesung": "Johannes Brahms"
      },
      {
        "frage": "Wer komponierte die sinfonische Dichtung Die Moldau?",
        "antworten": [
          "smetana",
          "bedrich smetana"
        ],
        "loesung": "Bedřich Smetana"
      },
      {
        "frage": "Wer komponierte den Boléro?",
        "antworten": [
          "ravel",
          "maurice ravel"
        ],
        "loesung": "Maurice Ravel"
      },
      {
        "frage": "Wer komponierte Das Wohltemperierte Klavier?",
        "antworten": [
          "bach",
          "johann sebastian bach"
        ],
        "loesung": "Johann Sebastian Bach"
      },
      {
        "frage": "Wer schrieb die Oper Carmen?",
        "antworten": [
          "bizet",
          "georges bizet"
        ],
        "loesung": "Georges Bizet"
      },
      {
        "frage": "Wie heißt das berühmte Opernhaus in Mailand?",
        "antworten": [
          "scala",
          "la scala"
        ],
        "loesung": "Die Scala"
      },
      {
        "frage": "In welcher Stadt finden die Festspiele für Wagners Opern statt?",
        "antworten": [
          "bayreuth"
        ],
        "loesung": "In Bayreuth"
      },
      {
        "frage": "In welchem Wiener Saal findet das Neujahrskonzert statt?",
        "antworten": [
          "musikverein",
          "goldener saal"
        ],
        "loesung": "Im Goldenen Saal des Musikvereins"
      },
      {
        "frage": "Wie heißt die fünfstufige Tonleiter ohne Halbtonschritte?",
        "antworten": [
          "pentatonik"
        ],
        "loesung": "Die Pentatonik"
      },
      {
        "frage": "Wie nennt man die Lehre von den Akkorden und ihren Verbindungen?",
        "antworten": [
          "harmonielehre"
        ],
        "loesung": "Die Harmonielehre"
      },
      {
        "frage": "Wie nennt man die gleichzeitige Führung mehrerer selbstständiger Stimmen?",
        "antworten": [
          "polyphonie",
          "kontrapunkt"
        ],
        "loesung": "Die Polyphonie"
      },
      {
        "frage": "Wie heißt die Kompositionstechnik mit zwölf gleichberechtigten Tönen?",
        "antworten": [
          "zwölftontechnik",
          "dodekaphonie",
          "zwölftonmusik"
        ],
        "loesung": "Die Zwölftontechnik"
      },
      {
        "frage": "Wer entwickelte die Zwölftontechnik?",
        "antworten": [
          "schönberg",
          "arnold schönberg"
        ],
        "loesung": "Arnold Schönberg"
      },
      {
        "frage": "Welcher Musikstil entstand in den 1950er-Jahren aus Blues und Country?",
        "antworten": [
          "rock and roll",
          "rock n roll",
          "rocknroll"
        ],
        "loesung": "Der Rock ’n’ Roll"
      },
      {
        "frage": "Welcher Sänger wird als King of Pop bezeichnet?",
        "antworten": [
          "michael jackson",
          "jackson"
        ],
        "loesung": "Michael Jackson"
      },
      {
        "frage": "Welche Band veröffentlichte das Album The Dark Side of the Moon?",
        "antworten": [
          "pink floyd"
        ],
        "loesung": "Pink Floyd"
      },
      {
        "frage": "Wie heißt der wichtigste Musikpreis der Vereinigten Staaten?",
        "antworten": [
          "grammy"
        ],
        "loesung": "Der Grammy"
      },
      {
        "frage": "Wie heißt der europäische Gesangswettbewerb, der seit 1956 ausgetragen wird?",
        "antworten": [
          "eurovision song contest",
          "esc",
          "grand prix"
        ],
        "loesung": "Der Eurovision Song Contest"
      },
      {
        "frage": "Wie nennt man ein Instrument, das Klänge elektronisch erzeugt?",
        "antworten": [
          "synthesizer"
        ],
        "loesung": "Der Synthesizer"
      },
      {
        "frage": "Wie heißt die Schnittstelle, über die elektronische Instrumente Steuerdaten austauschen?",
        "antworten": [
          "midi"
        ],
        "loesung": "MIDI"
      },
      {
        "frage": "Wie nennt man ein Musikstück in freier Form ohne festes Schema?",
        "antworten": [
          "fantasie",
          "improvisation"
        ],
        "loesung": "Eine Fantasie"
      },
      {
        "frage": "Welcher elektronische Musikstil entstand in den 1980er-Jahren in Detroit?",
        "antworten": [
          "techno"
        ],
        "loesung": "Der Techno"
      },
      {
        "frage": "Welcher Dirigent leitete die Berliner Philharmoniker von 1955 bis 1989?",
        "antworten": [
          "karajan",
          "herbert von karajan"
        ],
        "loesung": "Herbert von Karajan"
      },
      {
        "frage": "Wie hieß der italienische Tenor mit dem Vornamen Luciano?",
        "antworten": [
          "pavarotti"
        ],
        "loesung": "Luciano Pavarotti"
      },
      {
        "frage": "Wie nennt man eine Melodie, die in einer Oper immer wieder einer Figur zugeordnet wird?",
        "antworten": [
          "leitmotiv"
        ],
        "loesung": "Das Leitmotiv"
      },
      {
        "frage": "Wie nennt man den Übergang von einer Tonart in eine andere?",
        "antworten": [
          "modulation"
        ],
        "loesung": "Die Modulation"
      },
      {
        "frage": "Schätzfrage: Wie viele Sinfonien komponierte Joseph Haydn?",
        "schaetzfrage": true,
        "loesung": "104 Sinfonien"
      },
      {
        "frage": "Schätzfrage: Wie viele Werke umfasst das Bach-Werke-Verzeichnis?",
        "schaetzfrage": true,
        "loesung": "über 1100"
      }
    ]
  }
};
