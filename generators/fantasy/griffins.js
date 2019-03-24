export default function griffins() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const namesFemale = ['Aceso', 'Achelois', 'Adrastea', 'Aegle', 'Aello', 'Aetna', 'Aglaea', 'Aglaope', 'Alcyone', 'Alectrona', 'Ananke', 'Anatole', 'Antheia', 'Aoide', 'Aphaea', 'Aphrodite', 'Apollonis', 'Arche', 'Artemis', 'Asteria', 'Astraea', 'Athena', 'Auge', 'Aura', 'Auxesia', 'Auxo', 'Beroe', 'Britomartis', 'Calaeno', 'Calleis', 'Calliope', 'Calypso', 'Celaeno', 'Cheimon', 'Chione', 'Chloris', 'Circe', 'Clemene', 'Cleta', 'Clio', 'Clytie', 'Damia', 'Daphne', 'Demeter', 'Despoina', 'Dione', 'Dysis', 'Echo', 'Eiar', 'Eidyia', 'Electra', 'Elete', 'Enyo', 'Eos', 'Epione', 'Erato', 'Eunostus', 'Euphrosyne', 'Euporie', 'Eurybia', 'Eurynome', 'Gaia', 'Hegemone', 'Hemera', 'Hera', 'Herse', 'Hesperis', 'Hestia', 'Himerope', 'Hygieia', 'Iaso', 'Ichnaea', 'Iynx', 'Karpo', 'Leto', 'Leucosia', 'Ligeia', 'Maia', 'Melete', 'Meliae', 'Melpomene', 'Merope', 'Mese', 'Methe', 'Metis', 'Metope', 'Minthe', 'Mneme', 'Molpe', 'Nete', 'Nicothoe', 'Nyx', 'Ocypete', 'Orthosie', 'Paidia', 'Panacea', 'Parthenope', 'Pasithea', 'Peisinoe', 'Phaenna', 'Pherousa', 'Phoebe', 'Podarge', 'Raidne', 'Rhapso', 'Rhea', 'Scylla', 'Selene', 'Sterope', 'Styx', 'Taygete', 'Teles', 'Telete', 'Tethys', 'Thalia', 'Thallo', 'Theia', 'Thelxiope', 'Themis', 'Theros', 'Thoosa', 'Urania'];
  const namesMale = ['Achelous', 'Aegaeon', 'Aeolus', 'Aether', 'Alexiares', 'Anicetus', 'Aparctias', 'Apheliotes', 'Apollo', 'Ares', 'Argestes', 'Aristaeus', 'Asbetos', 'Asbolus', 'Astraeus', 'Astraios', 'Atlas', 'Attis', 'Boreas', 'Caicias', 'Carmanor', 'Ceraon', 'Chariclo', 'Chiron', 'Chrysus', 'Coeus', 'Comus', 'Corymbus', 'Cricios', 'Crius', 'Cyamites', 'Deipneus', 'Dionysus', 'Enyalius', 'Eos', 'Erebos', 'Erebus', 'Eros', 'Euronotus', 'Eurus', 'Eurytion', 'Glaucus', 'Hades', 'Harpocrates', 'Hecaterus', 'Helios', 'Hephaestus', 'Hermes', 'Hesperus', 'Hydros', 'Hymenaios', 'Hyperion', 'Hypnos', 'Iapetus', 'Kronos', 'Krotos', 'Lelantos', 'Matton', 'Menoetius', 'Nereus', 'Nessus', 'Notus', 'Omodamos', 'Ophion', 'Ouranos', 'Palaemon', 'Pallas', 'Perses', 'Phaenon', 'Phaethon', 'Phanes', 'Pholus', 'Phorcys', 'Plutus', 'Pontos', 'Pontus', 'Poseidon', 'Priapus', 'Prometheus', 'Proteus', 'Pyroeis', 'Skeiron', 'Smaragos', 'Syntribos', 'Tartarus', 'Thanatos', 'Thaumas', 'Triton', 'Zephyrus', 'Zeus'];
  const names2 = ['Angel', 'Beam', 'Black', 'Blue', 'Bright', 'Bronze', 'Cloud', 'Crown', 'Dark', 'Death', 'Doom', 'Dawn', 'Demon', 'Dream', 'Dusk', 'Dwarf', 'Ebon', 'Forest', 'Foul', 'Frown', 'Ghost', 'Gold', 'Green', 'Grey', 'Grim', 'Grin', 'Heaven', 'Hell', 'Light', 'Lightning', 'Lunar', 'Marsh', 'Mist', 'Moon', 'Mountain', 'Mud', 'Murk', 'Night', 'Nightmare', 'Petal', 'Phantom', 'Rain', 'Red', 'River', 'Rose', 'Shadow', 'Silver', 'Smirk', 'Soft', 'Solar', 'Star', 'Storm', 'Sun', 'Thorn', 'Thunder', 'Twilight', 'White', 'Worm'];
  const names3 = ['beak', 'bill', 'breath', 'claw', 'crest', 'feather', 'feathers', 'fluff', 'nail', 'plume', 'quill', 'quills', 'spike', 'tail', 'talon', 'wing', 'wings'];
  const names4 = ['Thistle', 'Aarne', 'Acquilina', 'Addler', 'Adlar', 'Adler', 'Adrien', 'Aerodactyl', 'Aetius', 'Aiah', 'Aja', 'Akilina', 'Akulina', 'Ala', 'Alcatraz', 'Alerio', 'Alphonse', 'Altair', 'Aman', 'Amethyst', 'Andor', 'Andre', 'Angel', 'Angelica', 'Annbjorg', 'Anne', 'Antigra', 'Antinanco', 'April', 'Aquata', 'Aquila', 'Aquilina', 'Aquiline', 'Aras', 'Archangel', 'Archimedes', 'Arden', 'Ares', 'Ari', 'Ariel', 'Arkell', 'Arlette', 'Arlie', 'Arn', 'Arnaldo', 'Arnau', 'Arnaud', 'Arnaude', 'Arnborg', 'Arndt', 'Arne', 'Arnie', 'Arnkell', 'Arnold', 'Arnthor', 'Arny', 'Artzouig', 'Arvid', 'Athena', 'Athene', 'Aubrey', 'Aurora', 'Aya', 'Azurisz', 'Azurys', 'Azuryz', 'Azusa', 'BB', 'BW3', 'Bailey', 'Baldy', 'Baltimore', 'Bama', 'Bangles', 'Barbie', 'Barrett', 'BeakaBoo', 'Beakers', 'Beaky', 'BeakyJo', 'BeeBop', 'Bella', 'Belphegor', 'Benny', 'Bephelgor', 'Berry', 'Bertram', 'BigBird', 'Bijou', 'Bloodtalon', 'Blue', 'Blues', 'Boannan', 'Bobbit', 'Bolo', 'Bonnie', 'Boris', 'Bowser', 'Bran', 'Branwen', 'Breeze', 'Breezy', 'Brennus', 'Brittany', 'BruceCrayne', 'Bubo', 'Budda', 'Buddy', 'Bugs', 'Butterbean', 'Buzby', 'Cackle', 'Cameo', 'Camulatz', 'Canouah', 'Capri', 'Casey', 'Casper', 'Cassie', 'Ceci', 'Ceres', 'Chanco', 'Chandria', 'Chantey', 'Charlie', 'Chatot', 'Cheeko', 'Cher', 'Chicken', 'Chicklet', 'Chico', 'Chik-fil-a', 'Chirp', 'Chives', 'Chloe', 'Chouette', 'Churches', 'Cleo', 'Clever', 'Clirk', 'Clive', 'Clown', 'Cluck', 'Clyde', 'Coco', 'Colm', 'Connie', 'Copesetic', 'Corbae', 'Corbin', 'Cornelius', 'Cory', 'Crackers', 'Cricket', 'Cuauhtemoc', 'Cuddles', 'Cynthia', 'Dahlia', 'Daisi', 'Daisy', 'Dante', 'Dexter', 'Digger', 'Dilly', 'Discordia', 'DontPollute', 'Dooku', 'Dotty', 'Dreadbird', 'Dredd', 'Drumsticks', 'Duke', 'Dundee', 'Dusty', 'Earl', 'EarlyBird', 'EdgarAllenCrow', 'Eggo', 'Elania', 'Erion', 'Errol', 'Ethel', 'Ethon', 'Ewoska', 'Excalibird', 'Ezio', 'Falcor', 'Famine', 'Fang', 'Fanteriso', 'Fearow', 'Featherbutt', 'Featherduster', 'Feathers', 'Fechin', 'Fenemaso', 'Fenghuang', 'Fiachna', 'Fiachra', 'Fiddle', 'Fidei', 'Fina', 'Fishfood', 'Flamingo', 'Flappy', 'Flaps', 'Flirt', 'Flock', 'Floyde', 'Flute', 'Flygon', 'Fred', 'Freddy', 'Fresaie', 'Frida', 'Frodo', 'Fujian', 'Furious', 'GaHoole', 'Gabby', 'Gabriel', 'Gale', 'Garuda', 'Gatimu', 'Genghis', 'Ginger', 'Gobbles', 'Goldenia', 'Goldie', 'Goober', 'Goofey', 'Goose', 'Guinevere', 'Hannibird', 'Hannible', 'Harley', 'Hathor', 'Hawk', 'Hedwig', 'Heresa', 'Heron', 'Hibou', 'Hippo', 'Holly', 'Homa', 'Homer', 'Homero', 'Honey', 'Hoot', 'HootHoot', 'Hooter', 'Hooters', 'Hoothoot', 'Hootie', 'Hoots', 'Horton', 'Hrafn', 'Huen', 'Huerans', 'Huey', 'Huggin', 'Hugin', 'Huhan', 'Hyacinth', 'Iago', 'Icarus', 'Impereon', 'Indira', 'Iris', 'Isabella', 'Itsy', 'JD', 'Jade', 'Jaden', 'Jambo', 'Jasper', 'Jatayu', 'Javelin', 'Jay', 'JayBird', 'Jazz', 'Jeffery', 'Jennie', 'Jerry', 'Jersey', 'Jesse James', 'Jingles', 'Jinn', 'JoJo', 'Jocasta', 'Joey', 'Judah', 'KFC', 'Kamaria', 'Kanga', 'Kasey', 'Katana', 'Keanu', 'Keeya', 'Kiate', 'Kila', 'Kipu', 'Kira', 'Kishiko', 'Kiwi', 'Kody', 'Konane', 'Koshi', 'Kwatoko', 'Kynthia', 'LaMans', 'Laila', 'Lance', 'Larry', 'Lavender', 'Lawny', 'Lechuza', 'Leggy', 'Lewanna', 'Lewis', 'Lexiy', 'Liberace', 'Lilli', 'Lilly', 'Lily', 'Loki', 'Lonit', 'Loquita', 'Lorenzo', 'Loryss', 'Louie', 'Lucine', 'Lucky', 'Lucy', 'Luna', 'Lyoco', 'Mango', 'MaxSterling', 'Maynard', 'Merlin', 'Meztli', 'Mia', 'Mickey', 'Midnight', 'Mimiteh', 'Mine', 'Minerva', 'Mirabelle', 'Misty', 'Mohanadas', 'Mollicut', 'Molting', 'Molty', 'Momoko', 'Morningstar', 'Mortimer', 'Mousebreath', 'Mubariz', 'Mumbles', 'Munin', 'Munnin', 'Muraco', 'Murcrow', 'Nowai', 'Naginata', 'Nancy', 'Nasr', 'Nekhbet', 'Nell', 'Nereida', 'Nicky', 'Nicticorax', 'Nile', 'Noah', 'Noctowl', 'Nocturna', 'Nocturne', 'Norman', 'Nyctea', 'Nycticorax', 'ORLY', 'OfAFeather', 'Oliver', 'Ollie', 'Opal', 'Ophelia', 'Oreilly', 'Oscar', 'Oswald', 'Owen', 'Owlagator', 'Owlbeback', 'Owlbundy', 'Owlforceone', 'Owlgore', 'Owliby', 'Ozzy', 'PanAm', 'Pantaloon', 'Paris', 'Pauley', 'Pax', 'PePe', 'Peaches', 'Pearl', 'Peck', 'Pengfei', 'Perky', 'Persephone', 'Petey', 'Petrie', 'Picasso', 'Pidgeot', 'Pidgeotto', 'Pigeon', 'Pikachu', 'Pike', 'Pinfeathers', 'PipSqueek', 'Pipper', 'Pita', 'Pixie', 'Pixy', 'Plague', 'Plainthro', 'Polly', 'Poppadom', 'Pretty', 'Pretzel', 'Prince', 'Pumpkin', 'Qiang', 'Quentynn', 'Quigley', 'Quilla', 'Quillestra', 'Quilstream', 'Raben', 'Rafiki', 'Rainy', 'Ralph', 'Ralti', 'Ramsay', 'Relica', 'Rhain', 'Ricky', 'Rose', 'Roudy', 'Roughles', 'Rowley', 'Ruqualash', 'Rythum', 'Sahar', 'Sahil', 'Saki', 'Salana', 'Sam', 'Sammy', 'Satchimo', 'Sativa', 'Scavenger', 'Scooby', 'Screech', 'Selena', 'Seraph', 'Seraphim', 'Serena', 'Severance', 'Shadow', 'Shaka', 'Shakira', 'Shamrock', 'Shania', 'Shasta', 'Sherbert', 'Sherry', 'Shikoba', 'Shiv', 'Shqipe', 'Sierra', 'Sifu', 'Simone', 'Skarmory', 'Skye', 'Smokie', 'Snappah', 'Snowflake', 'Snowy', 'Snuffles', 'Socretes', 'Solo', 'Somara', 'Sonny', 'Soren', 'Soulstealer', 'Southwest', 'Spangle', 'Speckles', 'Spike', 'Spyestra', 'Star', 'Staraptor', 'Staravia', 'Stinker', 'Stinky', 'Storm', 'Stormy', 'Strike', 'Strix', 'Suki', 'Sunny', 'Sunshine', 'Sunshynne', 'Suzie', 'Sweetie', 'Sweetpea', 'Swllow', 'Syrinx', 'Taillow', 'Taini', 'Takeshi', 'Tango', 'Tanner', 'Tasty', 'Taz', 'TenCents', 'Theodore', 'Thirsha', 'Thoth', 'Threelicks', 'Thunderwear', 'Tiberius', 'Tiki', 'Tislora', 'Tolend', 'Tootsiepop', 'Torr', 'Trigger', 'Tsifira', 'Tucker', 'Turkey', 'Tweakers', 'Tweek', 'Tweety', 'Twinkle', 'Twitch', 'Tzipora', 'Ulula', 'Urubutsin', 'Vivi', 'Vultros', 'Whitey', 'WingMan', 'Wingull', 'Wisdom', 'Woodstock', 'WormHunter', 'Wulfric', 'Xavea', 'Xeno', 'Xiao', 'Yarly', 'Yagers', 'Yakky', 'Yaralla', 'Ying', 'Yoshi', 'Yugar', 'Yulthi', 'Yutussal', 'Zaharia', 'Zelda', 'Zena', 'Zenith', 'Zephyr', 'Zhentou', 'Zipper', 'Zorphax'];

  const names1 = type === 1 ? namesFemale : namesMale;

  const i = Math.floor(Math.random() * 10);
  {
    if (i < 3) {
      rnd = Math.floor(Math.random() * names1.length);
      names = names1[rnd];
    } else if (i < 7) {
      rnd = Math.floor(Math.random() * names2.length);
      rnd1 = Math.floor(Math.random() * names3.length);
      names = names2[rnd] + names3[rnd1];
    } else {
      rnd = Math.floor(Math.random() * names4.length);
      names = names4[rnd];
    }
    return names;
  }
}
