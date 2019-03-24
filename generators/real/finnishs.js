function generator$real$finnishs() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aleksi', 'Antero', 'Antti', 'Armas', 'Heikki', 'Juhani', 'Jari', 'Jarmo', 'Kaleva', 'Kari', 'Mikko', 'Paavo', 'Pekka', 'Risto', 'Tauno', 'Toivo', 'Usko', 'Vaino', 'Valtteri', 'Aake', 'Aapeli', 'Aapo', 'Aappo', 'Aarne', 'Aarni', 'Aarno', 'Aaro', 'Aaron', 'Aarre', 'Aatami', 'Aato', 'Aatos', 'Aatto', 'Aatu', 'Ahti', 'Ahto', 'Ahvo', 'Aimo', 'Aki', 'Akseli', 'Aku', 'Alarik', 'Albert', 'Ale', 'Aleksanteri', 'Aleksi', 'Aleksis', 'Alex', 'Alfred', 'Ali', 'Allan', 'Alpi', 'Alpo', 'Altti', 'Alvar', 'Alvari', 'Alvi', 'Andreas', 'Ano', 'Anselmi', 'Anssi', 'Antero', 'Anton', 'Antti', 'Antto', 'Antton', 'Anttoni', 'Arhippa', 'Arho', 'Ari', 'Armas', 'Arsi', 'Arto', 'Arttu', 'Arttur', 'Artturi', 'Arvi', 'Arvo', 'Asko', 'Aslak', 'Asmo', 'Asser', 'Asseri', 'Atro', 'Atso', 'Atte', 'August', 'Aukusti', 'Aulis', 'Auno', 'Auvo', 'Benjam', 'Benjamin', 'Daavid', 'Daniel', 'Edvard', 'Eeli', 'Eelis', 'Eemeli', 'Eemil', 'Eerik', 'Eerikki', 'Eero', 'Eetu', 'Eevert', 'Eevertti', 'Einari', 'Eino', 'Elia', 'Elias', 'Eliel', 'Eljas', 'Elmer', 'Elmeri', 'Elmo', 'Elo', 'Ensio', 'Erkki', 'Ernesti', 'Erno', 'Esa', 'Esaias', 'Esko', 'Gabriel', 'Gideon', 'Hannes', 'Hannu', 'Harri', 'Heikki', 'Heimo', 'Heino', 'Hemminki', 'Hemmo', 'Henri', 'Henrik', 'Henrikki', 'Herkko', 'Herman', 'Hermanni', 'Huugo', 'Iikka', 'Iiro', 'Iisak', 'Iisakki', 'Iivana', 'Iivari', 'Iivo', 'Ilari', 'Ilkka', 'Ilmari', 'Ilmo', 'Ilpo', 'Ilppo', 'Immanuel', 'Immo', 'Inari', 'Into', 'Isko', 'Ismael', 'Ismo', 'Isto', 'Jaakkima', 'Jaakko', 'Jaakoppi', 'Jalmar', 'Jalmari', 'Jalo', 'Jami', 'Jani', 'Janne', 'Jari', 'Jarkko', 'Jarmo', 'Jarno', 'Jasper', 'Jere', 'Jeremias', 'Jesse', 'Jimi', 'Joel', 'Johannes', 'Joni', 'Jonne', 'Joona', 'Joonas', 'Joonatan', 'Jooseppi', 'Jori', 'Jorma', 'Jouko', 'Jouni', 'Juha', 'Juhana', 'Juhani', 'Juho', 'Jukka', 'Julius', 'Jussi', 'Justus', 'Juuso', 'Jyri', 'Jyrki', 'Kaapo', 'Kaappo', 'Kaapro', 'Kaarle', 'Kaarlo', 'Kai', 'Kain', 'Kaino', 'Kalervo', 'Kaleva', 'Kalevi', 'Kalle', 'Kari', 'Karri', 'Kasperi', 'Kauko', 'Kauno', 'Keijo', 'Kimi', 'Kimmo', 'Klaus', 'Klemetti', 'Konsta', 'Kosti', 'Kristian', 'Kristo', 'Kuisma', 'Kullervo', 'Kustaa', 'Kusti', 'Kyösti', 'Lari', 'Lasse', 'Lassi', 'Lauri', 'Leevi', 'Lennart', 'Lenni', 'Leo', 'Luukas', 'Manne', 'Manu', 'Markku', 'Marko', 'Markus', 'Martti', 'Matias', 'Matteus', 'Matti', 'Mattias', 'Mauno', 'Maunu', 'Mauri', 'Miika', 'Miikka', 'Mika', 'Mikael', 'Mikko', 'Miko', 'Miska', 'Mooses', 'Natanael', 'Nestori', 'Niilo', 'Niklas', 'Niko', 'Nikolai', 'Nooa', 'Nuutti', 'Nyyrikki', 'Ohto', 'Oiva', 'Olavi', 'Oliver', 'Olli', 'Onni', 'Orvo', 'Oskari', 'Osmo', 'Ossi', 'Ossian', 'Otso', 'Otto', 'Päiviö', 'Paavali', 'Paavo', 'Panu', 'Pasi', 'Patrik', 'Paul', 'Pauli', 'Pekka', 'Pekko', 'Pellervo', 'Pentti', 'Pertti', 'Perttu', 'Petri', 'Petteri', 'Pietari', 'Pirkka', 'Pyry', 'Raimo', 'Raine', 'Raino', 'Raitis', 'Ralf', 'Rami', 'Rauli', 'Rauni', 'Rauno', 'Reijo', 'Reima', 'Reino', 'Riku', 'Risto', 'Roni', 'Roope', 'Ruuben', 'Sakari', 'Sakarias', 'Saku', 'Salomo', 'Salomon', 'Sami', 'Sampo', 'Sampsa', 'Samu', 'Samuel', 'Samuli', 'Santeri', 'Santtu', 'Sasu', 'Sauli', 'Seem', 'Seet', 'Seppo', 'Severi', 'Siimon', 'Simeoni', 'Simo', 'Soini', 'Sulevi', 'Sulo', 'Taavetti', 'Taavi', 'Taisto', 'Taito', 'Taneli', 'Tapani', 'Tapio', 'Tarmo', 'Tarvo', 'Tatu', 'Tauno', 'Teemu', 'Teijo', 'Tenho', 'Teppo', 'Terho', 'Tero', 'Teuvo', 'Tiitus', 'Timo', 'Toimi', 'Toivo', 'Tomi', 'Tommi', 'Toni', 'Topi', 'Topias', 'Torsti', 'Totti', 'Touko', 'Tuomas', 'Tuomo', 'Tuukka', 'Tuure', 'Ukko', 'Uljas', 'Untamo', 'Unto', 'Uolevi', 'Urho', 'Urmas', 'Urpo', 'Usko', 'Uuno', 'Väinämö', 'Väinö', 'Valde', 'Valdemar', 'Valto', 'Valtter', 'Valtteri', 'Veeti', 'Veijo', 'Veikka', 'Veikko', 'Veli', 'Verneri', 'Vesa', 'Vieno', 'Vihtori', 'Vilhelm', 'Vilhelmi', 'Vilho', 'Vili', 'Viljam', 'Viljami', 'Viljo', 'Ville', 'Villiam', 'Vilppu', 'Voitto', 'Waltteri', 'Ylermi', 'Yrjänä', 'Yrjö'];
  const nm2 = ['Aino', 'Anja', 'Anneli', 'Anni', 'Annikki', 'Anu', 'Eeva', 'Jaana', 'Henna', 'Elina', 'Helmi', 'Miina', 'Katariina', 'Kirsi', 'Mari', 'Marja', 'Riitta', 'Roosa', 'Aada', 'Aallotar', 'Aamu', 'Aija', 'Aila', 'Aili', 'Aina', 'Aini', 'Ainikki', 'Aino', 'Aira', 'Airi', 'Aleksandra', 'Aliina', 'Aliisa', 'Alina', 'Alisa', 'Alli', 'Alma', 'Amalia', 'Amanda', 'Anelma', 'Anita', 'Anitta', 'Anja', 'Anna', 'Anna-Liisa', 'Anne', 'Annele', 'Anneli', 'Anni', 'Anniina', 'Annika', 'Annikki', 'Annina', 'Annukka', 'Anu', 'Arja', 'Armi', 'Asta', 'Auli', 'Aulikki', 'Aune', 'Aura', 'Aurora', 'Bertta', 'Eedit', 'Eelin', 'Eerika', 'Eerin', 'Eeva', 'Eevi', 'Eija', 'Eila', 'Eine', 'Eini', 'Eira', 'Elena', 'Eleonoora', 'Eliina', 'Eliisa', 'Eliisabet', 'Elina', 'Elisa', 'Elisabet', 'Ella', 'Ellen', 'Elli', 'Elma', 'Elsa', 'Elsi', 'Elvi', 'Elviira', 'Emilia', 'Emma', 'Emmi', 'Enni', 'Eriika', 'Erika', 'Erin', 'Erja', 'Essi', 'Ester', 'Esteri', 'Eveliina', 'Fanni', 'Fiona', 'Hanna', 'Hanne', 'Hannele', 'Heidi', 'Heini', 'Heleena', 'Helena', 'Heli', 'Helinä', 'Heljä', 'Helka', 'Hellevi', 'Helli', 'Hellin', 'Hellä', 'Helmi', 'Helmiina', 'Helvi', 'Hely', 'Henna', 'Henriikka', 'Hertta', 'Heta', 'Hilda', 'Hilja', 'Hilkka', 'Hilla', 'Hille', 'Hillevi', 'Hilma', 'Hilppa', 'Hulda', 'Iida', 'Iina', 'Iines', 'Iiris', 'Ilma', 'Ilmatar', 'Ilmi', 'Ilona', 'Ilta', 'Impi', 'Inari', 'Inka', 'Inkeri', 'Irene', 'Irina', 'Irja', 'Irma', 'Irmeli', 'Jaana', 'Jade', 'Janika', 'Janina', 'Janita', 'Janna', 'Jasmiina', 'Jasmin', 'Jemina', 'Jenna', 'Jenni', 'Jessika', 'Johanna', 'Jonna', 'Josefiina', 'Julia', 'Justiina', 'Jutta', 'Juulia', 'Kaarin', 'Kaarina', 'Kaija', 'Kaino', 'Kaisa', 'Kaisu', 'Kanerva', 'Karita', 'Karoliina', 'Kata', 'Katariina', 'Kati', 'Katja', 'Katri', 'Katriina', 'Kerttu', 'Kiia', 'Kiira', 'Kirsi', 'Kirsi-Marja', 'Kirsti', 'Kreeta', 'Krista', 'Kristiina', 'Kylli', 'Kyllikki', 'Lahja', 'Laila', 'Laimi', 'Laina', 'Laura', 'Lea', 'Leea', 'Leena', 'Leila', 'Lemmikki', 'Lemmitty', 'Lempi', 'Liina', 'Liisa', 'Liisi', 'Lilja', 'Lilli', 'Linda', 'Linnea', 'Lotta', 'Loviisa', 'Lumi', 'Lumikki', 'Lyydi', 'Lyydia', 'Lyyli', 'Lyyti', 'Maaret', 'Maaria', 'Maarit', 'Maija', 'Maiju', 'Maikki', 'Maila', 'Mailis', 'Maire', 'Margareeta', 'Margareetta', 'Mari', 'Maria', 'Marianne', 'Mariia', 'Mariitta', 'Marika', 'Marita', 'Maritta', 'Marja', 'Marja-Leena', 'Marja-Liisa', 'Marja-Terttu', 'Marjaana', 'Marjatta', 'Marjo', 'Marjukka', 'Marjut', 'Marketta', 'Marleena', 'Martta', 'Matilda', 'Matleena', 'Meeri', 'Meri', 'Merja', 'Mervi', 'Mette', 'Mielikki', 'Miia', 'Miina', 'Mikaela', 'Mila', 'Milja', 'Milka', 'Milla', 'Mimmi', 'Mimosa', 'Minea', 'Minja', 'Minna', 'Minttu', 'Mira', 'Mirja', 'Mirjam', 'Mirjami', 'Mirka', 'Mirva', 'Moona', 'Naemi', 'Naima', 'Naimi', 'Nana', 'Nea', 'Neea', 'Nelli', 'Netta', 'Niina', 'Nina', 'Noomi', 'Noora', 'Oili', 'Olga', 'Olivia', 'Onerva', 'Oona', 'Orvokki', 'Outi', 'Paula', 'Pauliina', 'Peppi', 'Petra', 'Pihla', 'Piia', 'Pilvi', 'Pinja', 'Pirita', 'Piritta', 'Pirjo', 'Pirkko', 'Päivi', 'Päivikki', 'Päiviö', 'Raakel', 'Raija', 'Raila', 'Raili', 'Raisa', 'Raita', 'Rauha', 'Rauna', 'Rauni', 'Rebekka', 'Reeta', 'Reetta', 'Reija', 'Riikka', 'Riina', 'Riitta', 'Ritva', 'Ronja', 'Roosa', 'Ruut', 'Saana', 'Saara', 'Saija', 'Saila', 'Saima', 'Saimi', 'Saini', 'Salla', 'Salli', 'Salme', 'Sanelma', 'Sanna', 'Sanni', 'Sara', 'Sari', 'Sarita', 'Satu', 'Seidi', 'Seija', 'Selja', 'Selma', 'Senja', 'Senni', 'Serafiina', 'Siiri', 'Silja', 'Sini', 'Sinikka', 'Sirkka', 'Sirkku', 'Sirpa', 'Sisko', 'Siviä', 'Sofia', 'Sohvi', 'Soila', 'Soile', 'Soili', 'Soilikki', 'Sointu', 'Sonja', 'Stiina', 'Suoma', 'Susanna', 'Suvi', 'Sylvi', 'Sylvia', 'Säde', 'Taija', 'Taimi', 'Taina', 'Talvikki', 'Tanja', 'Tarja', 'Taru', 'Tea', 'Teija', 'Tekla', 'Tellervo', 'Terhi', 'Terhikki', 'Terttu', 'Tiia', 'Tiina', 'Tilda', 'Titta', 'Toini', 'Tuija', 'Tuire', 'Tuovi', 'Tuula', 'Tuuli', 'Tuulia', 'Tuulikki', 'Tytti', 'Tyyne', 'Tyyni', 'Ulla', 'Unelma', 'Urpu', 'Valma', 'Valpuri', 'Vanamo', 'Vappu', 'Varpu', 'Veera', 'Vellamo', 'Venla', 'Verna', 'Vieno', 'Viivi', 'Vilhelmiina', 'Vilja', 'Viola', 'Virpi', 'Virva', 'Virve', 'Vuokko', 'Wilhelmiina'];
  const nm3 = ['Hämäläinen', 'Heikkinen', 'Järvi', 'Laine', 'Mäkelä', 'Nieminen', 'Pihlaja', 'Talo', 'Virtanen', 'Villanen', 'Aalto', 'Aaltonen', 'Aho', 'Ahola', 'Ahonen', 'Ahtisaari', 'Alatalo', 'Annala', 'Anttila', 'Anttonen', 'Aravirta', 'Arola', 'Asikainen', 'Eerola', 'Elo', 'Erkkilä', 'Eskola', 'Häkämies', 'Häkkinen', 'Hämäläinen', 'Hänninen', 'Härmälä', 'Haapala', 'Haapalainen', 'Haavisto', 'Hakala', 'Hakkarainen', 'Halonen', 'Hannula', 'Harju', 'Harjula', 'Hautala', 'Heikkilä', 'Heikkinen', 'Heino', 'Heinonen', 'Heiskanen', 'Helminen', 'Hemilä', 'Hietala', 'Hiltunen', 'Hirvonen', 'Honkala', 'Honkanen', 'Huhtala', 'Huttunen', 'Hyvärinen', 'Hyvönen', 'Ihalainen', 'Iivonen', 'Ikonen', 'Ilves', 'Immonen', 'Inha', 'Isometsä', 'Isotalo', 'Järvelä', 'Järveläinen', 'Järvenpää', 'Järvinen', 'Jaakkola', 'Jaakola', 'Janhunen', 'Jantunen', 'Joensuu', 'Johansson', 'Jokela', 'Jokelainen', 'Jokinen', 'Joutsen', 'Juhola', 'Junnila', 'Junttila', 'Juntunen', 'Jussila', 'Juvonen', 'Kärkkäinen', 'Kaila', 'Kallio', 'Kanerva', 'Kangas', 'Kankkunen', 'Kapanen', 'Karhu', 'Kari', 'Karjalainen', 'Karlsson', 'Karppinen', 'Karttunen', 'Karvonen', 'Kauko', 'Kauppi', 'Kauppila', 'Kauppinen', 'Kekkonen', 'Kemppainen', 'Keskitalo', 'Ketola', 'Kettunen', 'Kimmo', 'Kinnunen', 'Kivelä', 'Kivi', 'Kivimäki', 'Kivinen', 'Klemetti', 'Knuutila', 'Koivisto', 'Koivu', 'Koivula', 'Kokko', 'Kokkonen', 'Koponen', 'Korhonen', 'Korpela', 'Koskela', 'Koski', 'Koskinen', 'Kotilainen', 'Kotka', 'Kuisma', 'Kujala', 'Kukkonen', 'Kulmala', 'Kumpulainen', 'Kuoppala', 'Kuusela', 'Laakkonen', 'Laakso', 'Laaksonen', 'Lahti', 'Lahtinen', 'Laine', 'Laitinen', 'Lajunen', 'Lappalainen', 'Lappi', 'Lassila', 'Latvala', 'Laukkanen', 'Laurila', 'Lehti', 'Lehtinen', 'Lehto', 'Lehtola', 'Lehtonen', 'Leino', 'Leinonen', 'Leppälä', 'Leppänen', 'Leskinen', 'Liikanen', 'Lindholm', 'Lipponen', 'Litmanen', 'Luoma', 'Määttä', 'Mäenpää', 'Mäkelä', 'Mäkeläinen', 'Mäki', 'Mäkilä', 'Mäkinen', 'Mäkitalo', 'Mäntylä', 'Maijala', 'Makkonen', 'Malinen', 'Mannerheim', 'Manninen', 'Markkula', 'Marttila', 'Marttinen', 'Mattila', 'Maunu', 'Meri', 'Miettinen', 'Mikkola', 'Mikkonen', 'Moilanen', 'Mustonen', 'Myllylä', 'Nenonen', 'Nevalainen', 'Niemelä', 'Niemi', 'Nieminen', 'Niinistö', 'Nikkilä', 'Nikula', 'Niskala', 'Niskanen', 'Nurmi', 'Nurminen', 'Nykänen', 'Nyman', 'Oiva', 'Oivio', 'Ojala', 'Oksanen', 'Olli', 'Ollila', 'Paananen', 'Paasio', 'Paavola', 'Palander', 'Palo', 'Partanen', 'Parviainen', 'Pekkala', 'Pekkanen', 'Pekkarinen', 'Peltola', 'Peltonen', 'Pentti', 'Penttilä', 'Penttinen', 'Perttula', 'Pesonen', 'Pietarinen', 'Pietilä', 'Pirhonen', 'Pitkänen', 'Pukki', 'Pulkkinen', 'Räisänen', 'Räsänen', 'Raita', 'Rajala', 'Ranta', 'Rantala', 'Rantanen', 'Rautiainen', 'Rautio', 'Rehn', 'Reijonen', 'Rekola', 'Repo', 'Rissanen', 'Ruotsalainen', 'Saarela', 'Saari', 'Saarinen', 'Salmela', 'Salmi', 'Salminen', 'Salo', 'Salonen', 'Savela', 'Savolainen', 'Selänne', 'Seppälä', 'Seppänen', 'Sibelius', 'Siimes', 'Sillanpää', 'Siltala', 'Simola', 'Simonen', 'Soini', 'Soininen', 'Somerkoski', 'Soro', 'Sundqvist', 'Suomalainen', 'Suomi', 'Suominen', 'Tammi', 'Tamminen', 'Tapio', 'Terho', 'Tikkanen', 'Timonen', 'Toivanen', 'Toivonen', 'Tuomaala', 'Tuomainen', 'Tuomela', 'Tuominen', 'Tuomioja', 'Tuomola', 'Turunen', 'Ukkonen', 'Uljas', 'Uosukainen', 'Uotila', 'Uusitalo', 'Väisänen', 'Väyrynen', 'Vainio', 'Valtonen', 'Vanhatalo', 'Varis', 'Venäläinen', 'Vennamo', 'Vepsäläinen', 'Vesa', 'Viinanen', 'Viitala', 'Viitanen', 'Virolainen', 'Virta', 'Virtanen', 'Vuorela', 'Vuorinen', 'Waris', 'Wirtanen', 'Ylitalo', 'Yrjölä'];


  i = Math.floor(Math.random() * 10);
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
    }
    return names;
  }
}
