var sample = require ('lodash.sample')

function slovenians() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Æamil', 'Æazim', 'Èedo', 'Èedomir', 'Èrt', 'Èrtomir', 'Ðevad', 'Ðorðe', 'Ðorðo', 'Ðuro', 'Šaban', 'Šefik', 'Šemso', 'Šemsudin', 'Šerif', 'Štefan', 'Žak', 'Žan', 'Žan Luka', 'Žarko', 'Želimir', 'Željko', 'Žiga', 'Živan', 'Živko', 'Živojin', 'Živorad', 'Ažbe', 'Abdulah', 'Aco', 'Adam', 'Adel', 'Adem', 'Adi', 'Adian', 'Adil', 'Adin', 'Adis', 'Admir', 'Adnan', 'Adolf', 'Adrian', 'Adriano', 'Adrijan', 'Adrijano', 'Afrim', 'Agan', 'Agim', 'Agron', 'Ahmed', 'Ahmet', 'Ahmo', 'Ajdin', 'Aladin', 'Alaga', 'Alan', 'Alban', 'Albert', 'Albin', 'Aldin', 'Aldo', 'Aleš', 'Ale', 'Aleks', 'Aleksa', 'Aleksandar', 'Aleksander', 'Aleksej', 'Alem', 'Alen', 'Alessandro', 'Alex', 'Alexander', 'Alfonz', 'Alfred', 'Ali', 'Alija', 'Aljaž', 'Aljoša', 'Almedin', 'Almin', 'Almir', 'Alojz', 'Alojzij', 'Amadej', 'Amar', 'Ambrož', 'Amel', 'Amer', 'Amin', 'Amir', 'Ammar', 'Anðelko', 'Anže', 'Anžej', 'Andi', 'Andraž', 'Andrea', 'Andreas', 'Andrej', 'Andrija', 'Anej', 'Anel', 'Anes', 'Angel', 'Anis', 'Ante', 'Anto', 'Anton', 'Antonio', 'Antun', 'Arben', 'Ardian', 'Ardit', 'Arian', 'Arif', 'Arijan', 'Arlind', 'Armando', 'Armend', 'Armin', 'Arne', 'Arnel', 'Arnes', 'Aron', 'Arpad', 'Arsen', 'Arsim', 'Artan', 'Arton', 'Artur', 'Asim', 'Asmir', 'Atif', 'August', 'Augustin', 'Avdo', 'Avguštin', 'Avgust', 'Avni', 'Azem', 'Aziz', 'Bajram', 'Bajro', 'Bashkim', 'Bastian', 'Beæir', 'Bego', 'Bekim', 'Bela', 'Belmin', 'Ben', 'Benedikt', 'Benjamin', 'Beno', 'Bernard', 'Besim', 'Besnik', 'Bine', 'Blaž', 'Blagoj', 'Blagoja', 'Blagoje', 'Blerim', 'Boško', 'Boštjan', 'Božidar', 'Božo', 'Boban', 'Bogdan', 'Bogoljub', 'Bogomil', 'Bogomir', 'Bojan', 'Bor', 'Boris', 'Borislav', 'Borivoj', 'Borko', 'Boro', 'Borut', 'Brane', 'Branimir', 'Branislav', 'Branko', 'Bratislav', 'Brin', 'Bruno', 'Budimir', 'Bujar', 'Burim', 'Cene', 'Christian', 'Ciril', 'Claudio', 'Cvetko', 'Cveto', 'Cvijetin', 'Džemal', 'Dževad', 'Dalibor', 'Damijan', 'Damir', 'Damjan', 'Dan', 'Dane', 'Dani', 'Daniel', 'Danijel', 'Danilo', 'Danjel', 'Danko', 'Darij', 'Darijan', 'Darijo', 'Darinko', 'Dario', 'Daris', 'Darjan', 'Darjo', 'Darko', 'David', 'Davor', 'Davorin', 'Davud', 'Dean', 'Dejan', 'Dejvid', 'Demir', 'Deni', 'Denis', 'Derviš', 'Desimir', 'Diego', 'Dimitrij', 'Dimitrije', 'Din', 'Dinko', 'Dino', 'Djordje', 'Djuro', 'Dobrivoje', 'Domen', 'Dominik', 'Dorian', 'Dorijan', 'Dorjan', 'Draško', 'Dražen', 'Draženko', 'Dragan', 'Dragiša', 'Dragi', 'Drago', 'Dragoljub', 'Dragomir', 'Dragoslav', 'Dragotin', 'Dragutin', 'Drejc', 'Driton', 'Dušan', 'Duško', 'Dubravko', 'Ešef', 'Edhem', 'Edi', 'Edin', 'Edis', 'Edmond', 'Edmund', 'Edo', 'Eduard', 'Edvard', 'Edvin', 'Egidij', 'Egon', 'Egzon', 'Ekrem', 'Eldar', 'Eldin', 'Elmedin', 'Elmin', 'Elmir', 'Elvedin', 'Elvin', 'Elvir', 'Elvis', 'Eman', 'Emanuel', 'Emerik', 'Emil', 'Emilijan', 'Emin', 'Emir', 'Emrah', 'Emsud', 'Endrit', 'Enej', 'Enes', 'Engelbert', 'Enis', 'Eniz', 'Enver', 'Erazem', 'Erih', 'Erik', 'Ermin', 'Ernad', 'Ernes', 'Ernest', 'Ervin', 'Esad', 'Esed', 'Esmir', 'Etien', 'Evan', 'Evgen', 'Fabijan', 'Fabio', 'Fadil', 'Fahrudin', 'Faik', 'Faruk', 'Fatmir', 'Faton', 'Fedja', 'Fehim', 'Feliks', 'Ferdinand', 'Ferdo', 'Ferenc', 'Ferid', 'Fikret', 'Filip', 'Fitim', 'Florian', 'Florijan', 'Florim', 'Florjan', 'Franèek', 'Franèišek', 'Fran', 'Franc', 'France', 'Franci', 'Franjo', 'Franko', 'Frano', 'Fredi', 'Frenk', 'Friderik', 'Fuad', 'Gašper', 'Gaber', 'Gabriel', 'Gabrijel', 'Gaj', 'Gal', 'Gani', 'Gazmend', 'Geza', 'Goce', 'Gojko', 'Goran', 'Gorazd', 'Gordan', 'Grega', 'Gregor', 'Gustav', 'Gvido', 'Hašim', 'Hajrudin', 'Hakija', 'Halid', 'Halil', 'Halim', 'Hamdija', 'Hamid', 'Hamza', 'Hari', 'Haris', 'Harun', 'Hasan', 'Hase', 'Hasib', 'Haxhi', 'Hazim', 'Helmut', 'Henrik', 'Herbert', 'Herman', 'Hidajet', 'Hilmija', 'Himzo', 'Hinko', 'Hrvoje', 'Hubert', 'Hugo', 'Huse', 'Husein', 'Husejin', 'Husejn', 'Husnija', 'Huso', 'Ian', 'Ibrahim', 'Ibro', 'Idriz', 'Ignac', 'Ignacij', 'Igor', 'Ilija', 'Ilir', 'Imer', 'Irenej', 'Irfan', 'Isa', 'Isak', 'Islam', 'Ismail', 'Ismet', 'Istok', 'Ivan', 'Ivica', 'Ivo', 'Izak', 'Izet', 'Izidor', 'Iztok', 'Izudin', 'József', 'Jaš', 'Jaša', 'Jadran', 'Jadranko', 'Jaka', 'Jakob', 'Jakov', 'Jan', 'Janez', 'Jani', 'Janko', 'Janoš', 'Januš', 'Jaroslav', 'Jasmin', 'Jelenko', 'Jelko', 'Jerko', 'Jernej', 'Jetmir', 'Jeton', 'Joško', 'Jošt', 'Joža', 'Jože', 'Jožef', 'Jožek', 'Jožko', 'Job', 'Jon', 'Jonas', 'Jonatan', 'Jordan', 'Josip', 'Joso', 'Jovan', 'Jovica', 'Jovo', 'Jozo', 'Juš', 'Julian', 'Julij', 'Julijan', 'Jurèek', 'Juraj', 'Jure', 'Jurij', 'Juro', 'Justin', 'Jusuf', 'Kai', 'Kajetan', 'Karel', 'Karl', 'Karli', 'Karlo', 'Karol', 'Kasim', 'Kazimir', 'Kemal', 'Kenan', 'Kevin', 'Klaudio', 'Klavdij', 'Klavdijo', 'Klemen', 'Koloman', 'Konrad', 'Kosta', 'Kostja', 'Krešimir', 'Krištof', 'Kris', 'Kristian', 'Kristijan', 'Kristjan', 'Krunoslav', 'Kujtim', 'Ladislav', 'Lado', 'Lan', 'Lars', 'Latif', 'Lazar', 'Lazo', 'Lenart', 'Leo', 'Leon', 'Leonard', 'Leonardo', 'Leopold', 'Lev', 'Liam', 'Lian', 'Lin', 'Lino', 'Liridon', 'Ljuban', 'Ljubiša', 'Ljubinko', 'Ljubo', 'Ljubomir', 'Lojze', 'Loris', 'Lovrenc', 'Lovro', 'Luan', 'Luca', 'Lucas', 'Luciano', 'Lucijan', 'Ludovik', 'Ludvik', 'Luka', 'Lukas', 'Lulzim', 'Mahmut', 'Mai', 'Maid', 'Maj', 'Mak', 'Maks', 'Maksim', 'Maksimilijan', 'Maksimiljan', 'Manfred', 'Manuel', 'Marcel', 'Marco', 'Marij', 'Marijan', 'Marijo', 'Marin', 'Marinko', 'Marino', 'Mario', 'Marjan', 'Marjo', 'Mark', 'Marko', 'Markus', 'Marsel', 'Martin', 'Mate', 'Matej', 'Mateo', 'Matevž', 'Matias', 'Matic', 'Matija', 'Matjaž', 'Matko', 'Mato', 'Matteo', 'Mauro', 'Mavricij', 'Max', 'Medin', 'Mehmed', 'Mehmedalija', 'Mehmet', 'Meho', 'Mensur', 'Mentor', 'Mersad', 'Mersudin', 'Mesud', 'Metod', 'Mevludin', 'Miæo', 'Mišel', 'Mišo', 'Michael', 'Michel', 'Midhat', 'Miha', 'Mihael', 'Mihailo', 'Mihajlo', 'Mihec', 'Mijo', 'Miklavž', 'Miladin', 'Milan', 'Milanko', 'Mile', 'Milenko', 'Milisav', 'Milivoj', 'Milivoje', 'Miljan', 'Miljenko', 'Milko', 'Miloš', 'Milomir', 'Milorad', 'Milosav', 'Milovan', 'Milutin', 'Miodrag', 'Miralem', 'Miran', 'Mirhad', 'Mirjan', 'Mirko', 'Mirnes', 'Miro', 'Miroljub', 'Miroslav', 'Mirsad', 'Mirza', 'Mirzet', 'Mitar', 'Mitja', 'Mitko', 'Mladen', 'Mohor', 'Mojmir', 'Momèilo', 'Momir', 'Moreno', 'Muamer', 'Muhamed', 'Muhamet', 'Muharem', 'Mujaga', 'Mujo', 'Mumin', 'Munib', 'Munir', 'Murat', 'Mustafa', 'Nace', 'Nai', 'Nail', 'Naim', 'Naj', 'Nal', 'Naser', 'Natan', 'Nazif', 'Nazmi', 'Neðeljko', 'Neðo', 'Nebojša', 'Nedžad', 'Nedeljko', 'Nedim', 'Nedjeljko', 'Nedo', 'Nej', 'Nejc', 'Nel', 'Nemanja', 'Nenad', 'Neo', 'Nermin', 'Neven', 'Nevio', 'Nezir', 'Nick', 'Nihad', 'Nijaz', 'Nik', 'Niki', 'Nikica', 'Niko', 'Nikola', 'Nikolaj', 'Nikolas', 'Nil', 'Nino', 'Nisvet', 'Noel', 'Norbert', 'Novak', 'Novica', 'Novo', 'Nurija', 'Nusret', 'Ožbe', 'Ožbej', 'Obrad', 'Ognjen', 'Oliver', 'Omar', 'Omer', 'Oskar', 'Osman', 'Ostoja', 'Otmar', 'Oto', 'Oton', 'Paolo', 'Pascal', 'Paskal', 'Patrick', 'Patrik', 'Pavao', 'Pavel', 'Pavle', 'Pejo', 'Perica', 'Pero', 'Petar', 'Peter', 'Peter Pavel', 'Petja', 'Petko', 'Pino', 'Predrag', 'Primož', 'Rašid', 'Rade', 'Radenko', 'Radiša', 'Radislav', 'Radivoj', 'Radivoje', 'Radko', 'Radoš', 'Rado', 'Radomir', 'Radoslav', 'Radovan', 'Rafael', 'Rafko', 'Rajko', 'Rajmund', 'Ramadan', 'Ramiz', 'Ramo', 'Ranko', 'Rasim', 'Rastko', 'Ratko', 'Redžep', 'Redžo', 'Refik', 'Remzija', 'Renato', 'Rene', 'Reuf', 'Rexhep', 'Rifat', 'Rifet', 'Rihard', 'Risto', 'Rožle', 'Robert', 'Roberto', 'Robi', 'Robin', 'Rok', 'Roki', 'Roko', 'Roland', 'Rolando', 'Roman', 'Romeo', 'Ruben', 'Rudi', 'Rudolf', 'Rupert', 'Rusmir', 'Saša', 'Saško', 'Sašo', 'Sabahudin', 'Sabit', 'Sadik', 'Sadmir', 'Safet', 'Said', 'Sakib', 'Salih', 'Salko', 'Samed', 'Sami', 'Samir', 'Samo', 'Samuel', 'Sandi', 'Sandro', 'Sanel', 'Sani', 'Sava', 'Savo', 'Sead', 'Sebastian', 'Sebastijan', 'Sebastjan', 'Sedin', 'Sejad', 'Selim', 'Selmir', 'Selvedin', 'Semir', 'Senad', 'Senaid', 'Sergej', 'Sergey', 'Sergij', 'Sergio', 'Severin', 'Shaban', 'Sifet', 'Silvan', 'Silvano', 'Silvester', 'Silvo', 'Simeon', 'Simo', 'Simon', 'Sinan', 'Siniša', 'Skender', 'Slaðan', 'Slaven', 'Slaviša', 'Slavko', 'Slavoljub', 'Slobodan', 'Smail', 'Smajil', 'Smajo', 'Smiljan', 'Srðan', 'Sreæko', 'Sreèko', 'Sreèo', 'Sreten', 'Sretko', 'Staš', 'Stane', 'Stanimir', 'Stanislav', 'Stanko', 'Stefan', 'Stevan', 'Stevo', 'Stipo', 'Stjepan', 'Stojan', 'Suad', 'Sulejman', 'Suljo', 'Suvad', 'Sven', 'Svetislav', 'Sveto', 'Svetozar', 'Svit', 'Tadej', 'Tahir', 'Tai', 'Taj', 'Taras', 'Tarik', 'Tej', 'Teo', 'Teodor', 'Tevž', 'Thomas', 'Tian', 'Tibor', 'Tihomir', 'Tijan', 'Til', 'Tilen', 'Tim', 'Timi', 'Timo', 'Timon', 'Timotej', 'Tin', 'Tine', 'Tinej', 'Tit', 'Tjaš', 'Tjaž', 'Tjan', 'Tobias', 'Tobija', 'Todor', 'Tom', 'Tomaž', 'Tomas', 'Tomi', 'Tomislav', 'Tomo', 'Tonèek', 'Tone', 'Toni', 'Tristan', 'Urban', 'Urh', 'Uroš', 'Vahid', 'Val', 'Valent', 'Valentin', 'Valentino', 'Valerij', 'Valon', 'Valter', 'Vancho', 'Vane', 'Vanja', 'Vasilij', 'Vasilije', 'Vasja', 'Vasko', 'Vaso', 'Vedran', 'Vehid', 'Vekoslav', 'Velibor', 'Velid', 'Velimir', 'Veljko', 'Venèeslav', 'Venceslav', 'Veselin', 'Veselko', 'Vid', 'Vido', 'Viktor', 'Vili', 'Vilibald', 'Vilijem', 'Viljem', 'Vilko', 'Vincenc', 'Vincencij', 'Vinko', 'Vital', 'Vitan', 'Vitja', 'Vitko', 'Vito', 'Vitomir', 'Vjekoslav', 'Vladan', 'Vladimir', 'Vladislav', 'Vladko', 'Vlado', 'Vlatko', 'Vojin', 'Vojislav', 'Vojko', 'Vojmir', 'Vojo', 'Vojteh', 'Voranc', 'Vukašin', 'Walter', 'Xhavit', 'Zahid', 'Zaim', 'Zdenko', 'Zdravko', 'Zijad', 'Zikret', 'Zlatan', 'Zlatko', 'Zmago', 'Zmagoslav', 'Zoltan', 'Zoran', 'Zorko', 'Zuhdija', 'Zvezdan', 'Zvone', 'Zvonimir', 'Zvonko'];
  const nm2 = ['Ðurða', 'Ðurðica', 'Šarika', 'Šarolta', 'Šefika', 'Šejla', 'Šemsa', 'Špela', 'Špelca', 'Štefanija', 'Štefica', 'Štefka', 'Žaklina', 'Žana', 'Žanet', 'Željka', 'Živa', 'Živana', 'Živka', 'Ada', 'Adela', 'Adelina', 'Adelisa', 'Adisa', 'Admira', 'Adna', 'Adriana', 'Adrijana', 'Aferdita', 'Agata', 'Agica', 'Agnes', 'Aiša', 'Aida', 'Ajša', 'Aja', 'Ajda', 'Ajiša', 'Ajka', 'Ajla', 'Ajna', 'Alberta', 'Albina', 'Alda', 'Aldijana', 'Aldina', 'Aleša', 'Aleksandra', 'Alekseja', 'Alenèica', 'Alena', 'Alenka', 'Alexandra', 'Alida', 'Alijana', 'Alin', 'Alina', 'Alisa', 'Alja', 'Aljana', 'Aljoša', 'Alma', 'Almedina', 'Almina', 'Almira', 'Alojzija', 'Amadea', 'Amadeja', 'Amalija', 'Amanda', 'Amela', 'Amelija', 'Amila', 'Amina', 'Amira', 'Amna', 'Amra', 'Anèka', 'Anða', 'Anðela', 'Anðelka', 'Ana', 'Ana Maria', 'Ana Marija', 'Anabela', 'Anaja', 'Anamari', 'Anamarija', 'Anastasia', 'Anastasija', 'Anastazija', 'Andja', 'Andrea', 'Andreja', 'Andrejka', 'Andrijana', 'Aneja', 'Anela', 'Anemari', 'Anesa', 'Aneta', 'Angela', 'Angelca', 'Angelika', 'Angelina', 'Ani', 'Anica', 'Anika', 'Anina', 'Anisa', 'Anita', 'Anja', 'Anka', 'Ankica', 'Anna', 'Antonija', 'Anuša', 'Anuška', 'Apolonija', 'Ariana', 'Arifa', 'Arijana', 'Armina', 'Arnela', 'Arta', 'Asima', 'Asja', 'Asmira', 'Astrid', 'Aurora', 'Ava', 'Avguština', 'Avgusta', 'Avrelija', 'Azemina', 'Azra', 'Bara', 'Barbara', 'Barbka', 'Barica', 'Belma', 'Bernarda', 'Bernardina', 'Bernardka', 'Berta', 'Besima', 'Beti', 'Betka', 'Bibijana', 'Biljana', 'Biserka', 'Blaženka', 'Blažka', 'Blagica', 'Blanka', 'Boža', 'Božana', 'Božena', 'Boženka', 'Božica', 'Božidara', 'Božislava', 'Bogdana', 'Bogomila', 'Bogomira', 'Boja', 'Bojana', 'Bojanka', 'Borislava', 'Borka', 'Bosiljka', 'Branislava', 'Branka', 'Brankica', 'Breda', 'Brigita', 'Brina', 'Bronislava', 'Bruna', 'Bukurije', 'Carmen', 'Cecilija', 'Celestina', 'Chiara', 'Cilka', 'Cirila', 'Cita', 'Claudia', 'Cveta', 'Cvetka', 'Cvijeta', 'Džemila', 'Dženana', 'Daša', 'Dagmar', 'Dajana', 'Daliborka', 'Dalija', 'Dalila', 'Damijana', 'Damjana', 'Dana', 'Danaja', 'Danica', 'Daniela', 'Danijela', 'Danila', 'Danjela', 'Danka', 'Dara', 'Daria', 'Darija', 'Darinka', 'Darja', 'Darka', 'Davorina', 'Davorka', 'Dea', 'Debora', 'Deja', 'Dejana', 'Denis', 'Denisa', 'Denise', 'Derviša', 'Desa', 'Desanka', 'Diana', 'Dijana', 'Dina', 'Divna', 'Dobrila', 'Dolores', 'Dominika', 'Dora', 'Dorica', 'Doris', 'Dorotea', 'Doroteja', 'Draga', 'Dragana', 'Dragica', 'Draginja', 'Dragomira', 'Dragoslava', 'Dragotina', 'Drita', 'Duša', 'Dušanka', 'Dušica', 'Duška', 'Dubravka', 'Dunja', 'Eda', 'Edina', 'Edisa', 'Edita', 'Edvina', 'Ela', 'Elda', 'Eldina', 'Elen', 'Elena', 'Eleonora', 'Elfrida', 'Eli', 'Elica', 'Elida', 'Elin', 'Elina', 'Elisa', 'Eliza', 'Elizabeta', 'Ella', 'Elma', 'Elmedina', 'Elvedina', 'Elvira', 'Elvisa', 'Elza', 'Ema', 'Emanuela', 'Emica', 'Emili', 'Emilija', 'Emilijana', 'Emina', 'Emine', 'Emira', 'Emma', 'Ena', 'Eneja', 'Enesa', 'Enisa', 'Enja', 'Erika', 'Erin', 'Ermina', 'Erna', 'Ernesta', 'Ernestina', 'Esma', 'Ester', 'Estera', 'Etelka', 'Eva', 'Evelin', 'Evelina', 'Evgenija', 'Evica', 'Evita', 'Fadila', 'Fani', 'Fanika', 'Fata', 'Fatima', 'Fatime', 'Fatma', 'Felicita', 'Ferida', 'Fikreta', 'Flora', 'Florijana', 'Florjana', 'Franèiška', 'Franca', 'Franciska', 'Francka', 'Franja', 'Franka', 'Frida', 'Friderika', 'Gabi', 'Gabriela', 'Gabrijela', 'Gaia', 'Gaja', 'Gala', 'Ganimete', 'Gea', 'Genovefa', 'Gertruda', 'Gina', 'Gizela', 'Gloria', 'Glorija', 'Gorana', 'Gordana', 'Gorica', 'Gospa', 'Gracijela', 'Greta', 'Grozdana', 'Hajra', 'Hajrija', 'Halida', 'Hamida', 'Hana', 'Hanifa', 'Hanka', 'Hanna', 'Haseda', 'Hasiba', 'Hasnija', 'Hata', 'Hatidža', 'Hava', 'Hedviga', 'Hedvika', 'Heidi', 'Helena', 'Helenca', 'Helga', 'Hema', 'Hermina', 'Herta', 'Hilda', 'Hildegarda', 'Ida', 'Ifeta', 'Ika', 'Ilinka', 'Ilona', 'Ilonka', 'Ina', 'Inaja', 'Indira', 'Ines', 'Inge', 'Ingeborg', 'Ingrid', 'Inja', 'Inna', 'Inti', 'Irena', 'Irenca', 'Irina', 'Iris', 'Irma', 'Iryna', 'Isa', 'Isabel', 'Isabela', 'Isabella', 'Ismeta', 'Iva', 'Ivana', 'Ivana Marija', 'Ivanka', 'Ivica', 'Ivka', 'Ivona', 'Iza', 'Izabela', 'Izeta', 'Izidora', 'Jadranka', 'Jagoda', 'Jana', 'Janina', 'Janja', 'Janka', 'Jasenka', 'Jasmina', 'Jasminka', 'Jasna', 'Jela', 'Jelena', 'Jelica', 'Jelka', 'Jera', 'Jerca', 'Jerica', 'Jerneja', 'Joža', 'Jožefa', 'Jožefa Marija', 'Jožefina', 'Joži', 'Jožica', 'Joka', 'Jolanda', 'Jolanka', 'Jona', 'Josipa', 'Josipina', 'Jovana', 'Jovanka', 'Jozefa', 'Jozefina', 'Judita', 'Julia', 'Julija', 'Julijana', 'Julka', 'Justina', 'Kaja', 'Kalina', 'Karin', 'Karina', 'Karla', 'Karlina', 'Karmela', 'Karmen', 'Karolina', 'Kata', 'Katarina', 'Katerina', 'Kati', 'Katica', 'Katja', 'Katjuša', 'Katka', 'Katra', 'Katrin', 'Kiara', 'Kim', 'Klara', 'Klarisa', 'Klaudia', 'Klaudija', 'Klavdija', 'Klementina', 'Korina', 'Kornelija', 'Koviljka', 'Krista', 'Kristina', 'Ksenija', 'Ksenja', 'Ladislava', 'Lamija', 'Lana', 'Lara', 'Larisa', 'Larissa', 'Laura', 'Lavra', 'Lea', 'Leila', 'Leja', 'Lejla', 'Lela', 'Lena', 'Leni', 'Lenka', 'Leona', 'Leonarda', 'Leonida', 'Leonora', 'Leopolda', 'Leopoldina', 'Lia', 'Liana', 'Lidija', 'Lija', 'Lijana', 'Lili', 'Lilijana', 'Liljana', 'Lina', 'Linda', 'Livija', 'Liza', 'Ljerka', 'Ljilja', 'Ljiljana', 'Ljuba', 'Ljubica', 'Ljubinka', 'Ljubomira', 'Ljudmila', 'Lojzka', 'Lora', 'Loredana', 'Lorena', 'Lori', 'Loti', 'Luèka', 'Luana', 'Luca', 'Lucia', 'Lucija', 'Lucijana', 'Ludmila', 'Ludvika', 'Luna', 'Maša', 'Magda', 'Magdalena', 'Maida', 'Maja', 'Majda', 'Majda Marija', 'Maksimiljana', 'Malèi', 'Manca', 'Manda', 'Manica', 'Manja', 'Manuela', 'Marèela', 'Mara', 'Marcela', 'Margareta', 'Margerita', 'Margit', 'Margita', 'Maria', 'Marica', 'Marija', 'Marija Ana', 'Marija Jožefa', 'Marija Magdalena', 'Marija Majda', 'Marija Mojca', 'Marija Terezija', 'Marijana', 'Marijanca', 'Marika', 'Marina', 'Marinela', 'Marinka', 'Marisa', 'Mariza', 'Marja', 'Marjana', 'Marjanca', 'Marjeta', 'Marjetica', 'Marjetka', 'Marta', 'Martina', 'Martinka', 'Maruša', 'Maruška', 'Matea', 'Mateja', 'Matejka', 'Matilda', 'Maya', 'Medeja', 'Mediha', 'Medina', 'Megi', 'Mejra', 'Melani', 'Melanie', 'Melanija', 'Meliha', 'Melina', 'Melisa', 'Melissa', 'Melita', 'Meri', 'Merima', 'Merisa', 'Merita', 'Mersiha', 'Meta', 'Metka', 'Metoda', 'Mevlida', 'Miša', 'Mia', 'Michelle', 'Mihaela', 'Mihela', 'Mihelca', 'Mija', 'Mila', 'Milana', 'Milanka', 'Milena', 'Milena Marija', 'Milenca', 'Milenka', 'Mileva', 'Milica', 'Milijana', 'Milja', 'Miljana', 'Milka', 'Milojka', 'Milosava', 'Mimica', 'Mina', 'Mine', 'Minea', 'Mineja', 'Minela', 'Minka', 'Mira', 'Miranda', 'Mirela', 'Miriam', 'Mirica', 'Mirijam', 'Mirjam', 'Mirjana', 'Mirka', 'Mirna', 'Miroslava', 'Mirsada', 'Mirzeta', 'Mladenka', 'Mojca', 'Monika', 'Monja', 'Muharema', 'Munira', 'Nada', 'Nada Marija', 'Nadežda', 'Nadia', 'Nadica', 'Nadija', 'Nadja', 'Naja', 'Nana', 'Naomi', 'Nasiha', 'Nastja', 'Nataša', 'Natali', 'Natalia', 'Natalija', 'Nataliya', 'Neža', 'Nežika', 'Nežka', 'Nea', 'Neca', 'Neda', 'Nedeljka', 'Neja', 'Nejka', 'Nejla', 'Nejra', 'Nela', 'Neli', 'Nelly', 'Nena', 'Nensi', 'Nerina', 'Nermina', 'Neva', 'Nevena', 'Nevenka', 'Nevija', 'Nevzeta', 'Nia', 'Nicole', 'Nihada', 'Nija', 'Nika', 'Nike', 'Niki', 'Nikita', 'Nikolaja', 'Nikolina', 'Nina', 'Nisveta', 'Nives', 'Noemi', 'Norma', 'Nuša', 'Nuška', 'Nura', 'Oksana', 'Olena', 'Olga', 'Olgica', 'Olivera', 'Olivija', 'Olja', 'Ondina', 'Orjana', 'Ota', 'Otilija', 'Palmira', 'Pamela', 'Patricia', 'Patricija', 'Paula', 'Paulina', 'Pavla', 'Pavlina', 'Pepca', 'Petja', 'Petra', 'Pia', 'Pija', 'Pika', 'Pina', 'Polona', 'Polonca', 'Rabija', 'Rada', 'Radica', 'Radmila', 'Radojka', 'Rafaela', 'Rahela', 'Rajka', 'Ramiza', 'Ranka', 'Rasema', 'Rasima', 'Razija', 'Rebecca', 'Rebeka', 'Refija', 'Refika', 'Regina', 'Remzija', 'Renata', 'Rezija', 'Rina', 'Roža', 'Rožica', 'Roberta', 'Rolanda', 'Romana', 'Romanca', 'Romina', 'Ronja', 'Rosa', 'Rosana', 'Rosanda', 'Rosvita', 'Roza', 'Rozalija', 'Rozana', 'Rozi', 'Rozika', 'Rozina', 'Ruža', 'Ružica', 'Rubi', 'Saša', 'Saška', 'Sabiha', 'Sabina', 'Sabrina', 'Sadeta', 'Sadija', 'Sadika', 'Safeta', 'Safija', 'Sajra', 'Samanta', 'Samantha', 'Samira', 'Samra', 'Sanda', 'Sandra', 'Sanela', 'Sanija', 'Sanije', 'Sanja', 'Sara', 'Sarah', 'Sava', 'Savica', 'Savina', 'Savka', 'Sebina', 'Sedina', 'Selena', 'Selina', 'Selma', 'Semira', 'Senada', 'Senija', 'Senka', 'Senta', 'Sergeja', 'Severina', 'Sidonija', 'Silva', 'Silvana', 'Silvestra', 'Silvia', 'Silvija', 'Simona', 'Simonca', 'Sintija', 'Slaðana', 'Sladjana', 'Slava', 'Slavica', 'Slavka', 'Slavojka', 'Slobodanka', 'Smilja', 'Smiljana', 'Smiljka', 'Snežana', 'Snježana', 'Sofia', 'Sofija', 'Sonja', 'Sonja Marija', 'Spomenka', 'Staša', 'Stana', 'Stanislava', 'Stanka', 'Stela', 'Stella', 'Stoja', 'Stojana', 'Stojanka', 'Suada', 'Sumeja', 'Suvada', 'Suzana', 'Svetlana', 'Svitlana', 'Svjetlana', 'Taša', 'Tadeja', 'Taja', 'Tajana', 'Tajda', 'Tajra', 'Tamara', 'Tana', 'Tanaja', 'Tanita', 'Tanja', 'Tara', 'Tatiana', 'Tatjana', 'Tea', 'Teja', 'Teodora', 'Tereza', 'Terezija', 'Terezija Cvetka', 'Terezika', 'Tetyana', 'Teuta', 'Tia', 'Tiana', 'Tiara', 'Tija', 'Tijana', 'Tilka', 'Timea', 'Timeja', 'Tina', 'Tinca', 'Tinka', 'Tinkara', 'Tisa', 'Tita', 'Tjaša', 'Tonèka', 'Tonja', 'Tonka', 'Trina', 'Ula', 'Uma', 'Una', 'Urša', 'Urška', 'Uršula', 'Vahida', 'Valburga', 'Valentina', 'Valerija', 'Vanda', 'Vanesa', 'Vanessa', 'Vanja', 'Varja', 'Vasilija', 'Vedrana', 'Vekoslava', 'Velinka', 'Vera', 'Verena', 'Verica', 'Verona', 'Veronika', 'Veselka', 'Vesna', 'Višnja', 'Vida', 'Vidosava', 'Vika', 'Vikica', 'Viktoria', 'Viktorija', 'Viljemina', 'Vilma', 'Vincencija', 'Vinka', 'Violeta', 'Vita', 'Vladimira', 'Vladislava', 'Vladka', 'Vlasta', 'Vojka', 'Yuliya', 'Zagorka', 'Zahida', 'Zala', 'Zalika', 'Zalka', 'Zana', 'Zara', 'Zarja', 'Zdenka', 'Zdravka', 'Zehida', 'Zehra', 'Zejna', 'Zekija', 'Zemira', 'Zerina', 'Zineta', 'Zinka', 'Zlata', 'Zlatica', 'Zlatka', 'Zmaga', 'Zmagoslava', 'Zofija', 'Zofka', 'Zoja', 'Zora', 'Zorana', 'Zorica', 'Zorislava', 'Zorka', 'Zoya', 'Zuhra', 'Zumra', 'Zumreta', 'Zvezdana', 'Zvonimira', 'Zvonka'];
  const nm3 = ['Æosiæ', 'Èadež', 'Èarman', 'Èas', 'Èasar', 'Èauševiæ', 'Èeh', 'Èepin', 'Èermelj', 'Èerne', 'Èernigoj', 'Èesnik', 'Èop', 'Èrešnar', 'Èretnik', 'Èuèek', 'Èuš', 'Èuk', 'Ðukiæ', 'Ðuriæ', 'Šabiæ', 'Šalamon', 'Šalamun', 'Šarkezi', 'Šauperl', 'Šega', 'Šegula', 'Šeruga', 'Šimenc', 'Šinko', 'Šinkovec', 'Škafar', 'Šket', 'Škoberne', 'Škof', 'Škorjanc', 'Škrinjar', 'Škrjanec', 'Škrlec', 'Škrlj', 'Škufca', 'Škulj', 'Šmid', 'Šmigoc', 'Šoštariè', 'Šolar', 'Špacapan', 'Špes', 'Štefanèiè', 'Štefaniè', 'Štemberger', 'Štern', 'Štraus', 'Štravs', 'Štrukelj', 'Štuhec', 'Štular', 'Štumberger', 'Šturm', 'Šuštaršiè', 'Šuštar', 'Šušteršiè', 'Šubic', 'Šuligoj', 'Švab', 'Švajger', 'Švigelj', 'Žagar', 'Žakelj', 'Železnik', 'Žerjav', 'Žižek', 'Žibert', 'Žigon', 'Žitnik', 'Živkoviæ', 'Žnidaršiè', 'Žnidar', 'Žnidariè', 'Žohar', 'Žužek', 'Žunko', 'Ažman', 'Abram', 'Adamiè', 'Aliè', 'Ambrož', 'Ambrožiè', 'Amon', 'Antolin', 'Arh', 'Arko', 'Arnuš', 'Arzenšek', 'Avbelj', 'Avdiæ', 'Avguštin', 'Avsec', 'Baša', 'Bašiæ', 'Babiæ', 'Babiè', 'Babnik', 'Bajc', 'Bajec', 'Bajriæ', 'Bajt', 'Balažic', 'Baloh', 'Ban', 'Baranja', 'Bartol', 'Bauman', 'Bešiæ', 'Beganoviæ', 'Begiæ', 'Belšak', 'Bele', 'Belec', 'Benèina', 'Benedièiè', 'Benedik', 'Benko', 'Berce', 'Bergant', 'Berginc', 'Berisha', 'Bernik', 'Bertoncelj', 'Bevc', 'Bevk', 'Bezjak', 'Birsa', 'Bitenc', 'Bizjak', 'Blažiè', 'Blagojeviæ', 'Blatnik', 'Boštjanèiè', 'Božiæ', 'Božiè', 'Bobnar', 'Bogataj', 'Bohinc', 'Borštnar', 'Borko', 'Borovnik', 'Braèiè', 'Braèko', 'Braèun', 'Brajdiè', 'Bratina', 'Bratkoviè', 'Bratuša', 'Brdnik', 'Breèko', 'Bregar', 'Bremec', 'Breznik', 'Brezovnik', 'Brglez', 'Brkiæ', 'Brumec', 'Brumen', 'Brus', 'Brvar', 'Buèar', 'Buh', 'Bukovec', 'Burja', 'Bytyqi', 'Cafuta', 'Cankar', 'Car', 'Ceglar', 'Cener', 'Cerar', 'Cesar', 'Cestnik', 'Ciglar', 'Cimerman', 'Cvelbar', 'Cvetko', 'Cvikl', 'Džafiæ', 'Dajèman', 'Deèman', 'Deželak', 'Dežman', 'Debelak', 'Debeljak', 'Debevec', 'Dediæ', 'Dekleva', 'Deliæ', 'Demšar', 'Divjak', 'Dizdareviæ', 'Doberšek', 'Dobnik', 'Dobnikar', 'Dobravec', 'Dolar', 'Dolenc', 'Dolinšek', 'Dolinar', 'Dornik', 'Draksler', 'Dremelj', 'Drevenšek', 'Drnovšek', 'Drobniè', 'Drofenik', 'Drolc', 'Duh', 'Durakoviæ', 'Dvoršak', 'Emeršiè', 'Eržen', 'Erjavec', 'Fabjan', 'Fajdiga', 'Fajfar', 'Fekonja', 'Ferjanèiè', 'Ferk', 'Fišer', 'Ficko', 'Fijavž', 'Filipiè', 'Filipoviæ', 'Fink', 'Flis', 'Flisar', 'Florjanèiè', 'Fortuna', 'Frangež', 'Frank', 'Franko', 'Fras', 'Frelih', 'Fujs', 'Furlan', 'Furman', 'Gaènik', 'Gašpariè', 'Gašperšiè', 'Gaber', 'Gabrovšek', 'Gabrovec', 'Gajšek', 'Gajiæ', 'Gale', 'Galun', 'Gantar', 'Gartner', 'Gashi', 'Gazvoda', 'Glavaè', 'Glavan', 'Gobec', 'Godec', 'Golja', 'Golob', 'Golobiè', 'Gomboc', 'Gorše', 'Gorenc', 'Gorièan', 'Gorišek', 'Gorjanc', 'Gorjup', 'Gornik', 'Grèar', 'Graèner', 'Grašiè', 'Grabnar', 'Gradišar', 'Gradišnik', 'Grah', 'Gregorèiè', 'Gregorc', 'Gregoriè', 'Grièar', 'Gril', 'Grilc', 'Grm', 'Grmek', 'Grošelj', 'Grobelnik', 'Gros', 'Gruden', 'Grum', 'Guèek', 'Habjan', 'Habjaniè', 'Hadžiæ', 'Hafner', 'Hajdinjak', 'Haliloviæ', 'Hari', 'Hartman', 'Hauptman', 'Hercog', 'Herman', 'Hladnik', 'Hoèevar', 'Hodžiæ', 'Hodnik', 'Hojnik', 'Horvat', 'Hostnik', 'Hozjan', 'Hrastnik', 'Hren', 'Hribar', 'Hriberšek', 'Hribernik', 'Hrovat', 'Hrvatin', 'Hudorovac', 'Humar', 'Husiæ', 'Huskiæ', 'Hvala', 'Iliæ', 'Intihar', 'Ipavec', 'Iršiè', 'Iskra', 'Isteniè', 'Ivanèiè', 'Ivanoviæ', 'Ivanuša', 'Jager', 'Jagodiè', 'Jagodic', 'Jakše', 'Jakliè', 'Jakopiè', 'Jamšek', 'Jamnik', 'Janèar', 'Janèiè', 'Janžekoviè', 'Jan', 'Janc', 'Janežiè', 'Jankoviæ', 'Jankoviè', 'Jarc', 'Jaušovec', 'Javornik', 'Jazbec', 'Jazbinšek', 'Jež', 'Jelen', 'Jelenc', 'Jelenko', 'Jelovèan', 'Jemec', 'Jenko', 'Jeraj', 'Jereb', 'Jerebic', 'Jeriè', 'Jerman', 'Jeseniènik', 'Jesenko', 'Jezernik', 'Jošt', 'Jordan', 'Jovanoviæ', 'Joviæ', 'Jug', 'Juhart', 'Jurca', 'Juriè', 'Jurkoviè', 'Justin', 'Juvan', 'Kac', 'Kadunc', 'Kalan', 'Kamenšek', 'Kapun', 'Kastelec', 'Kastelic', 'Kauèiè', 'Kavèiè', 'Kavaš', 'Keber', 'Kejžar', 'Kenda', 'Kerèmar', 'Kerec', 'Kerin', 'Kern', 'Kirbiš', 'Kirn', 'Kladnik', 'Klanèar', 'Klanènik', 'Klemenèiè', 'Klemen', 'Klemenc', 'Klenovšek', 'Klinar', 'Klinc', 'Klobasa', 'Klobuèar', 'Klopèiè', 'Klun', 'Kmetec', 'Kmetiè', 'Knavs', 'Kneževiæ', 'Knez', 'Koèar', 'Koèevar', 'Košèak', 'Košak', 'Košir', 'Koštomaj', 'Kožar', 'Koželj', 'Kožuh', 'Kobal', 'Kobe', 'Kocbek', 'Kociper', 'Kocjanèiè', 'Kocjan', 'Kodriè', 'Kogoj', 'Kogovšek', 'Kokalj', 'Kokol', 'Kokot', 'Kolar', 'Kolariè', 'Kolenc', 'Kolman', 'Komac', 'Komel', 'Konèan', 'Kondiæ', 'Kopaè', 'Koprivc', 'Koprivec', 'Koren', 'Korez', 'Koritnik', 'Korošec', 'Kos', 'Kosec', 'Kosi', 'Kosmaè', 'Kostanjevec', 'Kotar', 'Kotnik', 'Kovše', 'Kovaè', 'Kovaèec', 'Kovaèeviæ', 'Kovaèiè', 'Kozar', 'Kozel', 'Kozjek', 'Kozole', 'Kržiè', 'Kržišnik', 'Kraševec', 'Krašovec', 'Kragelj', 'Krajnc', 'Krajnik', 'Kralj', 'Kramar', 'Kramberger', 'Kramer', 'Kraner', 'Kranjc', 'Kranjec', 'Krapež', 'Krasniqi', 'Kravanja', 'Kregar', 'Kresnik', 'Križaj', 'Križan', 'Križman', 'Križnar', 'Križnik', 'Kristan', 'Krivec', 'Krmelj', 'Krušiè', 'Kušar', 'Kužnik', 'Kuhar', 'Kukovec', 'Kukoviè', 'Kumar', 'Kumer', 'Kunej', 'Kurnik', 'Kuzma', 'Kvas', 'Lah', 'Lampe', 'Lampret', 'Lapajne', 'Lavrenèiè', 'Lavriè', 'Lazar', 'Lazareviæ', 'Laziæ', 'Laznik', 'Lešnik', 'Leban', 'Lebar', 'Leben', 'Ledinek', 'Lekše', 'Lenarèiè', 'Lenart', 'Lesar', 'Lesjak', 'Leskovšek', 'Leskovar', 'Leskovec', 'Levstek', 'Lièen', 'Likar', 'Lindiè', 'Lipovšek', 'Lipovec', 'Lisjak', 'Ljubijankiæ', 'Logar', 'Lonèar', 'Lonèariè', 'Lorbek', 'Lorber', 'Lorenèiè', 'Lotriè', 'Lovšin', 'Lovrec', 'Lozar', 'Lužar', 'Lužnik', 'Lubej', 'Lukaè', 'Lukan', 'Lukiæ', 'Lukman', 'Luzar', 'Maèek', 'Magdiè', 'Mahne', 'Mahniè', 'Majcen', 'Majer', 'Majeriè', 'Makovec', 'Maksimoviæ', 'Mali', 'Malnar', 'Malovrh', 'Marèiè', 'Marc', 'Mariæ', 'Mariè', 'Marinèiè', 'Marinšek', 'Marin', 'Mariniè', 'Marinko', 'Marjanoviæ', 'Markelj', 'Markiè', 'Markoviæ', 'Markoviè', 'Marn', 'Marolt', 'Martinèiè', 'Marušiè', 'Mastnak', 'Matiæ', 'Matjašiè', 'Matko', 'Mauèec', 'Maver', 'Mavriè', 'Mavsar', 'Meško', 'Mežnar', 'Medvešek', 'Medved', 'Megliè', 'Mehiæ', 'Mehle', 'Mernik', 'Mesariè', 'Metelko', 'Mihaliè', 'Mihelèiè', 'Miheliè', 'Mihevc', 'Miklavèiè', 'Miklavc', 'Mikliè', 'Mikoliè', 'Mikuž', 'Milavec', 'Miloševiæ', 'Mirt', 'Mitroviæ', 'Mlakar', 'Mlinar', 'Mlinariè', 'Moènik', 'Možina', 'Modic', 'Mohar', 'Mohoriè', 'Mohorko', 'Mori', 'Mozetiè', 'Mrak', 'Mušiæ', 'Mušiè', 'Muhiè', 'Mulec', 'Mulej', 'Munda', 'Muršec', 'Muratoviæ', 'Murko', 'Murn', 'Nagliè', 'Nagode', 'Nahtigal', 'Nemaniè', 'Nemec', 'Nikoliæ', 'Nose', 'Novak', 'Novakoviæ', 'Nuhanoviæ', 'Oèko', 'Oblak', 'Obreza', 'Ocepek', 'Ocvirk', 'Ogorevc', 'Ogrin', 'Ogrinc', 'Ogrizek', 'Ojsteršek', 'Okorn', 'Omahen', 'Oman', 'Omeroviæ', 'Oražem', 'Orešnik', 'Orel', 'Ornik', 'Osojnik', 'Osolnik', 'Osredkar', 'Ovèar', 'Oven', 'Ozmec', 'Pšeniènik', 'Pahor', 'Pajk', 'Palèiè', 'Paniæ', 'Papež', 'Pavšiè', 'Pavliè', 'Pavlin', 'Pavloviæ', 'Pavloviè', 'Peèar', 'Peènik', 'Peèovnik', 'Pejiæ', 'Peklar', 'Pelko', 'Penko', 'Perèiè', 'Perc', 'Periæ', 'Perko', 'Perme', 'Pernat', 'Pestotnik', 'Petan', 'Petek', 'Petelin', 'Peterka', 'Peterlin', 'Peternel', 'Peternelj', 'Petkovšek', 'Petkoviæ', 'Petriè', 'Petrovèiè', 'Petroviæ', 'Petroviè', 'Pevec', 'Pezdirc', 'Pišek', 'Pintar', 'Pintariè', 'Pinter', 'Pipan', 'Pirš', 'Pirc', 'Pirih', 'Pirnat', 'Pivec', 'Pivk', 'Plahuta', 'Planinšek', 'Planinc', 'Plavèak', 'Plestenjak', 'Plevnik', 'Pliberšek', 'Plohl', 'Ploj', 'Plut', 'Požar', 'Podgoršek', 'Podgornik', 'Podlesnik', 'Podlogar', 'Podobnik', 'Podpeèan', 'Podržaj', 'Pogaèar', 'Pogaènik', 'Pogorevc', 'Polajžer', 'Polajnar', 'Polak', 'Polanec', 'Poljšak', 'Poljanšek', 'Poljanec', 'Ponikvar', 'Popoviæ', 'Porenta', 'Potoènik', 'Potokar', 'Potrè', 'Povše', 'Prašnikar', 'Prah', 'Praprotnik', 'Praznik', 'Pregelj', 'Prelog', 'Pretnar', 'Prezelj', 'Prijatelj', 'Primc', 'Primožiè', 'Prinèiè', 'Prosen', 'Puèko', 'Pušnik', 'Puc', 'Pucelj', 'Pugelj', 'Pungartnik', 'Radiæ', 'Rajh', 'Rak', 'Rakovec', 'Rakuša', 'Ramšak', 'Ramiæ', 'Ravnik', 'Ravnikar', 'Ravnjak', 'Razboršek', 'Razpotnik', 'Režonja', 'Rebec', 'Rebernik', 'Rebolj', 'Recek', 'Rejc', 'Remic', 'Renko', 'Repnik', 'Resman', 'Resnik', 'Ribiè', 'Rihter', 'Rijavec', 'Ristiæ', 'Rošer', 'Roškar', 'Rožiè', 'Rožman', 'Robiè', 'Robnik', 'Rode', 'Rogelj', 'Rojc', 'Rojko', 'Romih', 'Rot', 'Rotar', 'Rozman', 'Rudolf', 'Rupar', 'Rupnik', 'Rus', 'Rutar', 'Sagadin', 'Saje', 'Sajovic', 'Saksida', 'Salkiæ', 'Samec', 'Satler', 'Saviæ', 'Sedej', 'Selan', 'Seliè', 'Selimoviæ', 'Seljak', 'Senèar', 'Senekoviè', 'Senica', 'Sevšek', 'Sever', 'Simèiè', 'Simiæ', 'Simonèiè', 'Simoniè', 'Sirk', 'Sitar', 'Skok', 'Skubic', 'Slabe', 'Sladiè', 'Slak', 'Slana', 'Slapar', 'Slapnik', 'Sluga', 'Smodiš', 'Smole', 'Smolej', 'Smrekar', 'Snoj', 'Soboèan', 'Sodja', 'Sotlar', 'Soviè', 'Staniè', 'Stankoviæ', 'Stanonik', 'Starc', 'Stare', 'Stariè', 'Sterle', 'Stevanoviæ', 'Stojanoviæ', 'Stopar', 'Strašek', 'Strajnar', 'Strgar', 'Strle', 'Strmšek', 'Strnad', 'Strniša', 'Stropnik', 'Sušec', 'Sušnik', 'Suhadolnik', 'Sukiè', 'Svenšek', 'Svetina', 'Tavèar', 'Tekavec', 'Tkalec', 'Todoroviæ', 'Tomše', 'Tomšiè', 'Tomažiè', 'Tomažin', 'Tomc', 'Tomiæ', 'Topiæ', 'Toplak', 'Topolovec', 'Torkar', 'Tovornik', 'Trèek', 'Tratnik', 'Tratnjek', 'Treven', 'Trošt', 'Trobec', 'Troha', 'Trstenjak', 'Tušar', 'Tušek', 'Turšiè', 'Turk', 'Turnšek', 'Udovè', 'Udoviè', 'Umek', 'Uršiè', 'Urankar', 'Urbanèiè', 'Urbanc', 'Urbanija', 'Urbas', 'Urh', 'Valenèiè', 'Valentinèiè', 'Varga', 'Vatovec', 'Vaupotiè', 'Veber', 'Vehovec', 'Veliæ', 'Velikonja', 'Verbiè', 'Verdnik', 'Vesel', 'Veseliè', 'Vièiè', 'Vidic', 'Vidmar', 'Vidoviæ', 'Vidoviè', 'Vidrih', 'Vindiš', 'Virant', 'Vodeb', 'Vodnik', 'Vodopivec', 'Vodovnik', 'Vodušek', 'Voglar', 'Vogrinèiè', 'Vogrin', 'Vogrinec', 'Volf', 'Volk', 'Vonèina', 'Vovk', 'Vrbnjak', 'Vreèar', 'Vreèko', 'Vrhovec', 'Vrhovnik', 'Vrtaènik', 'Vuèko', 'Vuk', 'Vukoviæ', 'Zabukovec', 'Zadnik', 'Zadravec', 'Zagorc', 'Zajc', 'Zajec', 'Zakrajšek', 'Zalar', 'Zaletel', 'Zaletelj', 'Založnik', 'Zalokar', 'Zamuda', 'Zavec', 'Završnik', 'Zavrl', 'Zemljiè', 'Zevnik', 'Zidar', 'Zorc', 'Zore', 'Zorec', 'Zorko', 'Zorman', 'Zupanèiè', 'Zupan', 'Zupanc', 'Zupaniè', 'Zver'];
  {
    if (type === 1) {
      names = `${sample(nm2)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm3)}`;
    }
    return names;
  }
}
module.exports = slovenians
