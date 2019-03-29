var sample = require ('lodash.sample')

function vampires() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Quelii', 'Zintius', 'Fertuitus', 'Dorlus', 'Versum', 'Zegrath', 'Sebastian', 'Christoph', 'Kristoph', 'Thaddeus', 'Abel', 'Abraham', 'Acheron', 'Adam', 'Adrian', 'Alaric', 'Alec', 'Aleister', 'Aleron', 'Alexander', 'Alfred', 'Aliester', 'Angel', 'Angelus', 'Anton', 'Arad', 'Aramastus', 'Archibald', 'Armand', 'Arnold', 'Arthur', 'Asa', 'Ascelin', 'Asema', 'Asmodeus', 'Astaroth', 'Astrophel', 'Athanasius', 'Auberon', 'Aubrey', 'Aurel', 'Azerrad', 'Azriel', 'Balthazar', 'Barnabas', 'Bartholomew', 'Benedict', 'Benjamin', 'Bertram', 'Bjorn', 'Blayze', 'Boris', 'Brander', 'Brandyn', 'Brendan', 'Bryce', 'Byron', 'Cadell', 'Cadogan', 'Caedmon', 'Cain', 'Caleb', 'Cassius', 'Cazimir', 'Christian', 'Church', 'Ciaran', 'Ciro', 'Clarence', 'Cleon', 'Cole', 'Colin', 'Constantine', 'Corbett', 'Corbin', 'Creighton', 'Cynfael', 'Cyprian', 'Cyran', 'D\'Arcy', 'Daire', 'Damascus', 'Damian', 'Damien', 'Damon', 'Danag', 'Daniel', 'Dante', 'Darick', 'Darius', 'Darren', 'Darrien', 'Davon', 'Davorin', 'Demetrius', 'Demidicus', 'Demitri', 'Desmond', 'Deverell', 'Devin', 'Dimitri', 'Dommik', 'Donovan', 'Dorian', 'Doru', 'Dragon', 'Dragos', 'Drake', 'Draven', 'Dregan', 'Dreven', 'Duncan', 'Duradel', 'Echo', 'Edmund', 'Edward', 'Edwin', 'Eldon', 'Elijah', 'Elwin', 'Emery', 'Emil', 'Enoch', 'Eoghan', 'Eoin', 'Erasmus', 'Etienne', 'Everild', 'Ezekiel', 'Ezra', 'Fabian', 'Fane', 'Florin', 'Francis', 'Frank', 'Frederick', 'Frey', 'Gabe', 'Gabriel', 'Gadiel', 'Gair', 'Gale', 'Gareth', 'Garrett', 'Garroway', 'Garth', 'Gattas', 'Gawain', 'Gdalicanu', 'Gethin', 'Ghislaine', 'Gilbert', 'Godfrey', 'Gossom', 'Gregory', 'Griffin', 'Grimbald', 'Griswold', 'Hacan', 'Hale', 'Hannibal', 'Harland', 'Harold', 'Heathcliffe', 'Hendrik', 'Henry', 'Heskel', 'Holstein', 'Horace', 'Horatio', 'Hunter', 'Iancu', 'Ichabod', 'Idris', 'Ingram', 'Isaac', 'Isaiah', 'Ishmael', 'Jacob', 'Jael', 'Jagger', 'Jairus', 'James', 'Jarlath', 'Jarlen', 'Jasper', 'Jedediah', 'Jeffrey', 'Jeremy', 'Jett', 'Jonas', 'Jonathan', 'Jorin', 'Joseph', 'Joshua', 'Julian', 'Julien', 'Julius', 'Justin', 'Kalon', 'Kane', 'Kapral', 'Karpov', 'Kayne', 'Kazimir', 'Keenan', 'Keir', 'Keiran', 'Kellam', 'Kern', 'Khalid', 'Killian', 'Kirnon', 'Klyn', 'Kozani', 'Kragen', 'Kristopher', 'Lafayette', 'Lance', 'Lancelot', 'Lauden', 'Laurent', 'Lawrence', 'Lazarus', 'Leander', 'Leandro', 'Lennix', 'Leon', 'Leopold', 'Lestat', 'Liam', 'Lionel', 'London', 'Lothaire', 'Louis', 'Lucas', 'Lucian', 'Lucien', 'Luther', 'Lycidas', 'Lysander', 'Mabon', 'Maggard', 'Maggart', 'Magna', 'Magnus', 'Malachi', 'Malik', 'Marcel', 'Marcellus', 'Marcus', 'Marius', 'Martel', 'Mathias', 'Maxius', 'Maxwell', 'Melchior', 'Merle', 'Merlin', 'Moldark', 'Mordecai', 'Mordred', 'Morgan', 'Mortas', 'Mullo', 'Nathan', 'Nathaniel', 'Neculai', 'Nehemiah', 'Nelo', 'Niall', 'Nicholas', 'Nicodemus', 'Nicolai', 'Nicu', 'Nikolas', 'Niles', 'Nodin', 'Norrix', 'Nostro', 'Obediah', 'Oberon', 'Obsidian', 'Octavian', 'Odolff', 'Oliver', 'Orien', 'Orion', 'Orsova', 'Owen', 'Ozul', 'Paine', 'Perseus', 'Peter', 'Phaeron', 'Phelan', 'Phoenix', 'Qadir', 'Quillan', 'Quillon', 'Quinn', 'Radomir', 'Radu', 'Randal', 'Ransley', 'Raoul', 'Raphael', 'Rapheal', 'Raymond', 'Remus', 'Renwick', 'Reyes', 'Rhain', 'Rhazien', 'Richard', 'Riordan', 'Riskel', 'Roderick', 'Roman', 'Rufus', 'Rune', 'Ruse', 'Saber', 'Sabien', 'Salem', 'Samuel', 'Sandor', 'Santiago', 'Saxon', 'Seain', 'Sebastian', 'Seskel', 'Seth', 'Severn', 'Seymour', 'Silas', 'Silvan', 'Simon', 'Sin', 'Sirius', 'Sliske', 'Solomon', 'Soran', 'Spencer', 'Spike', 'Star', 'Stelian', 'Sterling', 'Strix', 'Sullivan', 'Sun', 'Tallon', 'Talon', 'Tama', 'Taos', 'Tearle', 'Theron', 'Thomas', 'Thorin', 'Thorne', 'Tobias', 'Treznor', 'Ulfred', 'Ulysses', 'Urien', 'Valentine', 'Valerian', 'Vance', 'Vasile', 'Vernon', 'Victor', 'Viktor', 'Vincent', 'Virgil', 'Viscardi', 'Vlad', 'Vladimir', 'Vorigan', 'Waldron', 'Walter', 'Warren', 'Wilfred', 'William', 'Wolf', 'Wolfram', 'Xanthus', 'Xavier', 'Xenos', 'Ywain', 'Zachaeus', 'Zachariah', 'Zadicus', 'Zadimus', 'Zaff', 'Zane', 'Zaros', 'Zeidan', 'Zeke', 'Zoltan'];
  const nm2 = ['Deyja', 'Abby', 'Abigale', 'Ada', 'Adriana', 'Adrienne', 'Aerin', 'Aisling', 'Akasha', 'Aleron', 'Alessandra', 'Alexandra', 'Alexandria', 'Alice', 'Alvira', 'Amalia', 'Amaris', 'Amber', 'Amelia', 'Amelie', 'Ana', 'Anastasia', 'Angelica', 'Angelika', 'Angelina', 'Angelique', 'Antoinette', 'Arabella', 'Arachne', 'Arora', 'Artemia', 'Asphodel', 'Athena', 'Aubrey', 'Aurelia', 'Aurora', 'Austra', 'Autumn', 'Babylon', 'Badriyah', 'Baptista', 'Beatrice', 'Beatrix', 'Becca', 'Bella', 'Belladonna', 'Bellatrix', 'Bernia', 'Bianca', 'Bijou', 'Branwen', 'Briallen', 'Brienne', 'Brigid', 'Buffy', 'Caera', 'Calamity', 'Calantha', 'Calista', 'Callidora', 'Calliope', 'Carmilla', 'Caroline', 'Cassandra', 'Cassara', 'Ceiridwen', 'Celeste', 'Celosia', 'Chandra', 'Chantrea', 'Charity', 'Charlotte', 'Chaseleigh', 'Chastity', 'Circe', 'Claire', 'Clara', 'Claudia', 'Clementine', 'Constantia', 'Cordelia', 'Crimson', 'Cristina', 'Daniela', 'Danika', 'Daria', 'Darian', 'Darla', 'Dawn', 'December', 'Deidre', 'Delia', 'Deliliah', 'Demelza', 'Demetria', 'Denisa', 'Desdemona', 'Destiny', 'Dominique', 'Dru', 'Druilla', 'Drusilla', 'Ebony', 'Echo', 'Edana', 'Eden', 'Eirisse', 'Eirlys', 'Eldia', 'Eleanor', 'Electra', 'Elena', 'Elenor', 'Elisabeta', 'Elissa', 'Elizabeth', 'Ellanora', 'Ellanore', 'Ellena', 'Ellie', 'Elvira', 'Emberlynn', 'Emerande', 'Emilia', 'Emily', 'Emma', 'Emmanuelle', 'Emmeranne', 'Ennata', 'Eranthe', 'Erylis', 'Esmeralda', 'Esmeralde', 'Esther', 'Estrella', 'Ethelinda', 'Eunice', 'Eva', 'Evangeline', 'Eventide', 'Fae', 'Faine', 'Faith', 'Faline', 'Fanchon', 'Fawn', 'Felicia', 'Fern', 'Feronia', 'Fleurdelice', 'Florence', 'Fortune', 'Gabriela', 'Gabrielle', 'Galexialyn', 'Garnette', 'Genevieve', 'Gertrude', 'Grace', 'Gretchen', 'Griselda', 'Guinevere', 'Gwendoline', 'Gwendydd', 'Haera', 'Hagar', 'Hazelmere', 'Hecate', 'Hegna', 'Helana', 'Helen', 'Helena', 'Helga', 'Henrietta', 'Herma', 'Hesperia', 'Hestia', 'Hilda', 'Hildegarde', 'Ianira', 'Ianthe', 'Ileana', 'Illythia', 'Indigo', 'Iolana', 'Iolanthe', 'Iona', 'Ione', 'Irene', 'Irina', 'Isabella', 'Isadora', 'Isis', 'Isolabella', 'Ivory', 'Ivy', 'Izora', 'Jacqueline', 'Jade', 'Jane', 'Janet', 'Jett', 'Jevera', 'Jillian', 'Jocasta', 'Joliette', 'Joscelyn', 'Josephine', 'Julia', 'Julianna', 'Julienne', 'Juliet', 'Kafara', 'Kairos', 'Kala', 'Kali', 'Kalonice', 'Kamra', 'Karlene', 'Kat', 'Katherine', 'Kathryx', 'Katrina', 'Kavita', 'Kenia', 'Ketura', 'Khalida', 'Kiara', 'Kismet', 'Kolfinna', 'Krista', 'Kristian', 'Kynthia', 'Lahmia', 'Lamia', 'Lamya', 'Lavinia', 'Layla', 'Leandra', 'Lechsinska', 'Lenora', 'Lenore', 'Leontine', 'Leora', 'Lethia', 'Levana', 'Lien', 'Lilah', 'Liliana', 'Lilith', 'Lisa', 'Lisha', 'Loredana', 'Lorelei', 'Loren', 'Lorraine', 'Lucia', 'Lucilla', 'Lucinda', 'Lucretia', 'Lucy', 'Lullaby', 'Luna', 'Lupe', 'Lycoris', 'Lyllith', 'Lynede', 'Lynexia', 'Lyra', 'Lysa', 'Madeline', 'Madison', 'Maeve', 'Magda', 'Magdalena', 'Magdelena', 'Magena', 'Mallory', 'Margaret', 'Maria', 'Mariana', 'Marianne', 'Marta', 'Matilda', 'Mehira', 'Melantha', 'Mercedes', 'Mercy', 'Meredith', 'Merle', 'Mildred', 'Minerva', 'Mira', 'Misty', 'Monique', 'Mora', 'Morgan', 'Morrisey', 'Morticia', 'Morwenna', 'Musette', 'Myth', 'Myvanwy', 'Naida', 'Narcisa', 'Natalia', 'Nebula', 'Neferata', 'Nessa', 'Nevada', 'Nezera', 'Niamh', 'Nichole', 'Nicole', 'Nicolette', 'Nirvana', 'Nisha', 'Nissa', 'Nokomis', 'Nora', 'Nyx', 'Oana', 'Odile', 'Opal', 'Ophelia', 'Ordelia', 'Orenda', 'Osanna', 'Pandora', 'Parthena', 'Permelia', 'Persephone', 'Petra', 'Phaelyn', 'Phaidra', 'Philomena', 'Phoenix', 'Pixie', 'Poison', 'Prudence', 'Psyche', 'Purity', 'Pythea', 'Qadira', 'Quintella', 'Radella', 'Raelinn', 'Ramona', 'Raphaelle', 'Raven', 'Ravette', 'Rebecca', 'Renee', 'Renita', 'Rhapsody', 'Rhiannon', 'Rhodanthe', 'Riah', 'River', 'Rosalie', 'Rosalyn', 'Rowena', 'Ruby', 'Sabina', 'Sabrione', 'Samantha', 'Sapphira', 'Sapphire', 'Sarah', 'SarahAnn', 'Scarlett', 'Seiran', 'Selena', 'Selene', 'Selina', 'Senna', 'Seraphine', 'Seren', 'Sierra', 'Silvana', 'Silver', 'Silvia', 'Simone', 'Sky', 'Skylar', 'Sorcha', 'Sorina', 'Star', 'Stefania', 'Stella', 'Sylvia', 'Tabitha', 'Tanith', 'Tatiana', 'Tempesta', 'Tereza', 'Tessa', 'Thalia', 'Thelma', 'Thessalia', 'Thora', 'Thordis', 'Tiana', 'Tierney', 'Timandra', 'Tizane', 'Topaz', 'Tourmaline', 'Trista', 'Turaya', 'Ulva', 'Urania', 'Ursula', 'Ursulette', 'Ursuline', 'Valaine', 'Valenthia', 'Valentina', 'Valeria', 'Valerie', 'Vanessa', 'Vanita', 'Vanity', 'Vasilisa', 'Velika', 'Velorina', 'Velvet', 'Venette', 'Venus', 'Vesper', 'Vespera', 'Victoire', 'Victoria', 'Viessa', 'Viktoria', 'Violet', 'Violeta', 'Wanette', 'Wilhelmina', 'Willow', 'Wilma', 'Winnifred', 'Wren', 'Xanthe', 'Xaverie', 'Xena', 'Xylia', 'Yolanthe', 'Ysabelle', 'Yvonne', 'Zabrina', 'Zada', 'Zafrina', 'Zakira', 'Zaleria', 'Zara', 'Zella', 'Zephirah', 'Zetta', 'Zola'];
  {
    if (type === 1) {
      names = sample(nm2);
    } else {
      names = sample(nm1);
    }
    return names;
  }
}
module.exports = vampires
