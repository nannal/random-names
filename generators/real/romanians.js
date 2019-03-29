var sample = require ('lodash.sample')

function romanians() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abel', 'Adam', 'Adi', 'Adrian', 'Alex', 'Alexandru', 'Alin', 'Anatolie', 'Andrei', 'Anghel', 'Anton', 'Antonio', 'Apostol', 'Arsenie', 'Artur', 'Augustin', 'Aurel', 'Beniamin', 'Beryx', 'Bodgan', 'Bogdan', 'Boian', 'Calin', 'Carol', 'Catalin', 'Catarino', 'Cezar', 'Ciodaru', 'Ciprian', 'Claudiu', 'Codrin', 'Constantin', 'Cornel', 'Corneliu', 'Cosmin', 'Costache', 'Costea', 'Costel', 'Costi', 'Costica', 'Costin', 'Cristian', 'Cristinel', 'Cristofor', 'Dan', 'Daniel', 'Danus', 'Danut', 'Darius', 'David', 'Denis', 'Dimitrie', 'Dimitry', 'Dinu', 'Dionisie', 'Dominik', 'Dorin', 'Doru', 'Dracul', 'Dragomir', 'Dragos', 'Dragoslav', 'Drahoslav', 'Dumitru', 'Eduard', 'Eftemie', 'Emanuel', 'Emil', 'Emilian', 'Eugen', 'Felix', 'Ferka', 'Filip', 'Flaviu', 'Flavius', 'Florentin', 'Florin', 'Gabi', 'Gabriel', 'Gavril', 'George', 'Geza', 'Gheorghe', 'Glad', 'Gogu', 'Grigore', 'Haralamb', 'Horasiu', 'Horatiu', 'Horea', 'Horia', 'Iancu', 'Ilie', 'Ioan', 'Ion', 'Ionache', 'Ionatan', 'Ionel', 'Ionus', 'Ionut', 'Iorghu', 'Iosif', 'Iulian', 'Iulien', 'Iulio', 'Iuliu', 'Ivan', 'Ivantie', 'Jan', 'Jean', 'Laurensiu', 'Laurentiu', 'Liviu', 'Luca', 'Lucian', 'Manuel', 'Marcel', 'Marin', 'Mario', 'Marius', 'Marku', 'Martin', 'Matei', 'Mazonn', 'Mihai', 'Mihail', 'Mihaita', 'Miron', 'Nandru', 'Neculai', 'Nelu', 'Nic', 'Nicolae', 'Nicolas', 'Nicu', 'Niculaie', 'Nicusor', 'Octavian', 'Ovidiu', 'Paul', 'Pereteanu', 'Petar', 'Petre', 'Petru', 'Radu', 'Rares', 'Rasvan', 'Raul', 'Razvan', 'Remus', 'Rica', 'Robert', 'Sanda', 'Sandu', 'Sebastian', 'Serafim', 'Serban', 'Serghei', 'Sergiu', 'Shaithis', 'Silviu', 'Simion', 'Simon', 'Simu', 'Skender', 'Soare', 'Sorin', 'Stan', 'Stefan', 'Stelian', 'Tavian', 'Teo', 'Teodor', 'Teodosie', 'Theodor', 'Tiberiu', 'Timotei', 'Toma', 'Traian', 'Tudor', 'Valentin', 'Valerian', 'Valeriu', 'Vali', 'Varujan', 'Vasile', 'Vasilescu', 'Veaceslav', 'Velkan', 'Victor', 'Viorel', 'Virgil', 'Virgiliu', 'Vlad', 'Vladimir', 'Wadim'];
  const nm2 = ['Adela', 'Adelina', 'Adriana', 'Adrianna', 'Afina', 'Alexandra', 'Alexandreina', 'Alin', 'Alina', 'Amalia', 'Amelia', 'Ana', 'Ana-maria', 'Anamaria', 'Anca', 'Andreea', 'Anemona', 'Angela', 'Angelica', 'Anica', 'Antanasia', 'Antoaneta', 'Atanasia', 'Augustina', 'Aurelia', 'Aurica', 'Aurika', 'Aurora', 'Beatrix', 'Bianca', 'Bogdana', 'Brandusa', 'Brigita', 'Brindusa', 'Camelia', 'Cami', 'Carla', 'Carmen', 'Catalena', 'Catalina', 'Catina', 'Cecilia', 'Celestina', 'Cristina', 'Cici', 'Clara', 'Claudia', 'Codruta', 'Constansa', 'Constanta', 'Corina', 'Corinna', 'Cornelia', 'Cosmina', 'Costela', 'Craita', 'Crina', 'Cristina', 'Daciana', 'Dana', 'Daniela', 'Daria', 'Delia', 'Denisa', 'Diana', 'Diona', 'Doina', 'Dominique', 'Dorina', 'Dorota', 'Draguta', 'Dumitra', 'Dumitrita', 'Ecaterina', 'Elena', 'Elisabeta', 'Eliza', 'Ema', 'Emilia', 'Emiliana', 'Erika', 'Estera', 'Eugenia', 'Eveline', 'Felicia', 'Flavia', 'Floarea', 'Florenta', 'Flori', 'Florica', 'Florina', 'Gabi', 'Gabriela', 'Gabriella', 'Georgeta', 'Georgiana', 'Georgina', 'Gheorghita', 'Gina', 'Elena', 'Helga', 'Ihrin', 'Ileana', 'Ilena', 'Ilinca', 'Imanuela', 'Ioana', 'Ioanela', 'Iolanda', 'Iona', 'Ionela', 'Irina', 'Isabela', 'Isabella', 'Iulia', 'Iuliana', 'Ivona', 'Izabela', 'Jeni', 'Jenica', 'Ioana', 'Juana', 'Kathryn', 'Lacramioara', 'Laura', 'Laurentia', 'Lavinia', 'Lenusa', 'Lenuta', 'Leunta', 'Lia', 'Ligia', 'Lilian', 'Liliana', 'Lina', 'Livia', 'Lizuca', 'Loredana', 'Lucia', 'Luiza', 'Luminisa', 'Luminita', 'Madalina', 'Magda', 'Magdalena', 'Manuela', 'Mara', 'Marcela', 'Margareta', 'Maria', 'Mariana', 'Marica', 'Marilena', 'Marina', 'Marinela', 'Marioara', 'Mariutza', 'Marta', 'Melania', 'Melita', 'Mihaela', 'Michaela', 'Mihaela', 'Mirela', 'Miruna', 'Monica', 'Monique', 'Nadezhda', 'Narcisa', 'Natalia', 'Nedelcu', 'Neulai', 'Nicoleta', 'Nina', 'Oana', 'Octavia', 'Olga', 'Olimpia', 'Olivia', 'Olympia', 'Paula', 'Petronela', 'Rahela', 'Raluca', 'Ramona', 'Regina', 'Relia', 'Reveka', 'Rodica', 'Rodika', 'Romanitza', 'Roxana', 'Rozalia', 'Ruxandra', 'Sabina', 'Sanda', 'Sandra', 'Silvia', 'Simona', 'Sofia', 'Sonia', 'Sorana', 'Sorina', 'Sorinah', 'Sorine', 'Sorinna', 'Stefana', 'Stefania', 'Stela', 'Tabitha', 'Tara', 'Tatiana', 'Teadora', 'Teodora', 'Teofila', 'Tereza', 'Trandafira', 'Uta', 'Valentina', 'Valeria', 'Valerica', 'Vanda', 'Varduhi', 'Vasilica', 'Veronica', 'Victoria', 'Violeta', 'Viorela', 'Viorica', 'Virginia', 'Viviana', 'Voctorita', 'Voileta', 'Yessenia', 'Ylenia', 'Zana', 'Zina'];
  const nm3 = ['Adamache', 'Albescu', 'Albu', 'Alecsandri', 'Alexandrescu', 'Amanar', 'Andreescu', 'Anghelescu', 'Antonescu', 'Apostol', 'Apostu', 'Arcos', 'Ardelean', 'Argetoianu', 'Artenie', 'Avramescu', 'Bârladeanu', 'Babes', 'Baboescu', 'Baicu', 'Balan', 'Balauru', 'Balcescu', 'Balitiu', 'Banciu', 'Banica', 'Barbu', 'Barbulescu', 'Barnutiu', 'Belododia', 'Bengescu', 'Blaga', 'Blerinca', 'Bogoescu', 'Bogza', 'Boroi', 'Brâncoveanu', 'Bratianu', 'Breban', 'Bucsa', 'Bucur', 'Bumbescu', 'Bunea', 'Bus', 'Butacu', 'Calinescu', 'Cantacuzino', 'Caragiale', 'Caramitru', 'Cardei', 'Catargiu', 'Ceausescu', 'Celibidache', 'Cernat', 'Cernea', 'Checiches', 'Chirila', 'Chitu', 'Chivu', 'Cinca', 'Ciobanu', 'Ciora', 'Ciumak', 'Cocis', 'Codreanu', 'Cojoc', 'Cojocar', 'Cojocaru', 'Comeaga', 'Constantin', 'Constantinescu', 'Corbeanu', 'Cornea', 'Cosma', 'Cosmescu', 'Cosovei', 'Costache', 'Costin', 'Costiniu', 'Covaci', 'Cozma', 'Craciun', 'Cretu', 'Cristea', 'Cristescu', 'Croditier', 'Cutov', 'Cuza', 'Dalca', 'Diaconescu', 'Diaconu', 'Dimir', 'Dimitru', 'Dinescu', 'Dinu', 'Dita', 'Dobre', 'Dobrescu', 'Donceanu', 'Dragan', 'Draghicescu', 'Draghici', 'Dragomir', 'Dumitrescu', 'Dumitru', 'Eliade', 'Enache', 'Ene', 'Enescu', 'Epureanu', 'Fidatov', 'Fieraru', 'Filipescu', 'Filotti', 'Florea', 'Florentina', 'Florescu', 'Funar', 'Gabor', 'Gaina', 'Galca', 'Ganea', 'Georgesco', 'Georgescu', 'Georghiou', 'Gheorghe', 'Gheorghiu', 'Gherea', 'Ghezzo', 'Ghita', 'Gilca', 'Giurescu', 'Giurgiu', 'Goga', 'Gogean', 'Goian', 'Goldis', 'Grasu', 'Grigorescu', 'Groza', 'Grul', 'Gusa', 'Hagi', 'Hanganu', 'Hasdeu', 'Hila', 'Hurgoi', 'Hutopila', 'Iacobescu', 'Iagar', 'Ianculescu', 'Ilica', 'Ilie', 'Iliescu', 'Ilionescu', 'Ionesco', 'Ionescu', 'Ionita', 'Iordache', 'Iordanescu', 'Ioveanu', 'Istrati', 'Izbasa', 'Jonker', 'Kazaku', 'Kinczllers', 'Kiritescu', 'Kogalniceanu', 'Kogalniceaunu', 'Korzha', 'Kreanga', 'Lacusta', 'Lahovary', 'Lascar', 'Lazar', 'Lazarescu', 'Leonte', 'Lixandroiu', 'Luca', 'Lucescu', 'Lungu', 'Lupei', 'Lupescu', 'Lupu', 'Lupul', 'Macedonski', 'Macek', 'Mandruleanu', 'Manea', 'Manescu', 'Maniu', 'Manole', 'Marandici', 'Marcovici', 'Marin', 'Marinescu', 'Martinescu', 'Matei', 'Mechitbayeva', 'Mihai', 'Mihaili', 'Mihalache', 'Mihnea', 'Miklos', 'Milcu', 'Milosovici', 'Minea', 'Mircea', 'Mironescu', 'Mitu', 'Mocanu', 'Moculescu', 'Moisuc', 'Moldovan', 'Moldovanu', 'Mondragon', 'Morariu', 'Morosanu', 'Moscovici', 'Movila', 'Munteanu', 'Muresan', 'Muresanu', 'Musat', 'Nastase', 'Neacsu', 'Neagoe', 'Nechita', 'Negoitescu', 'Negrescu', 'Negutesco', 'Nemes', 'Nica', 'Nicolae', 'Nicolescu', 'Nicu', 'Niculaie', 'Niculescu', 'Nistor', 'Nita', 'Noica', 'Ojacarcu', 'Olaru', 'Olinescu', 'Olteanu', 'Oprea', 'Osmochescu', 'Otvos', 'Pârvulescu', 'Pîrvulescu', 'Pacuraru', 'Paler', 'Pangratiu', 'Parasca', 'Pavel', 'Pavlenco', 'Pekurar', 'Pescariu', 'Petran', 'Petrescu', 'Petri', 'Pirvu', 'Piturca', 'Plesu', 'Poénaru', 'Poenaru', 'Pogonat', 'Poienaru', 'Pop', 'Popa', 'Popescu', 'Preda', 'Predoiu', 'Presecan', 'Proca', 'Prunea', 'Puiu', 'Puscas', 'Raceanu', 'Radacanu', 'Radu', 'Raducan', 'Raducanu', 'Raducioiu', 'Ragar', 'Randa', 'Rebreanu', 'Ripnu', 'Roman', 'Romanescu', 'Rosetti', 'Rotaru', 'Rudeanu', 'Rusu', 'Saftoiu', 'Saguna', 'Sala', 'Sandulescu', 'Savu', 'Selymes', 'Serban', 'Serbanescu', 'Silivasi', 'Simeonescu', 'Skutnik', 'Sollomovici', 'Stan', 'Stanasila', 'Stanca', 'Stancu', 'Stanescu', 'Stefan', 'Stefanescu', 'Stefoniou', 'Stelymes', 'Stinga', 'Stirbei', 'Stoenescu', 'Stoica', 'Stolojan', 'Suciu', 'Szilágyi', 'Tanase', 'Tarus', 'Tatarescu', 'Tavitian', 'Teodorescu', 'Theodorescu', 'Tilea', 'Tismaneanu', 'Toma', 'Tomescu', 'Tomoiaga', 'Torje', 'Trelles', 'Troester', 'Tudor', 'Tugurlan', 'Ungur', 'Ungureanu', 'Urzica', 'Vântu', 'Vãduva', 'Vaduva', 'Varias', 'Vasile', 'Vasilescu', 'Vasiliu', 'Vianu', 'Vladimirescu', 'Vladimiri', 'Vladu', 'Vlaicu', 'Voicu', 'Voiculescu', 'Voiculet', 'Voinea', 'Vulcan', 'Vulpes', 'Yonescu', 'Zaituc', 'Zamfir'];
  {
    if (type === 1) {
      names = `${sample(nm2)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm3)}`;
    }
    return names;
  }
}
module.exports = romanians