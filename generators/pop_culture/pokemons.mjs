var sample = require ('lodash.sample')

function pokemons() {
  let names;
  let rnd0;
  let rnd1;
  const type = Math.random() > 0.5 ? 0 : 1;
  const names1 = ['Dra', 'Drago', 'Chame', 'Alba', 'Alli', 'Alliga', 'Ante', 'Arma', 'Barra', 'Ba', 'Bea', 'Bi', 'Buffa', 'Cate', 'Chimpa', 'Coyo', 'Cro', 'Croco', 'Dino', 'Ele', 'Ela', 'Falco', 'Fla', 'Flami', 'Gaze', 'Gira', 'Gori', 'Hippo', 'Hye', 'Jagua', 'Kanga', 'Koa', 'Leo', 'Mana', 'Octo', 'Peli', 'Pigeo', 'Porcu', 'Rhino', 'Sala', 'Salama', 'Scorpi', 'Sha', 'Swa', 'Toa', 'Walla', 'Wolve'];
  const names2 = ['bite', 'buff', 'byss', 'ceon', 'coon', 'cross', 'ctric', 'dily', 'dos', 'drill', 'free', 'lax', 'lite', 'lix', 'loon', 'lord', 'low', 'ly', 'mire', 'mish', 'mite', 'nite', 'nium', 'nub', 'nyte', 'pet', 'phy', 'pip', 'pix', 'plume', 'pod', 'rak', 'reon', 'ron', 'ros', 'saur', 'sion', 'sire', 'slash', 'star', 'tar', 'tic', 'tine', 'tle', 'ton', 'tone', 'tric', 'tuff', 'zar', 'zel'];
  const names3 = ['Allig', 'Albatr', 'Armad', 'Donk', 'Badg', 'Barrac', 'Bis', 'Buff', 'Caterp', 'Chick', 'Chimpanz', 'Chimp', 'Cobr', 'Croc', 'Crocod', 'Dinos', 'Dolph', 'Drag', 'Drac', 'Eleph', 'Falc', 'Flam', 'Gaz', 'Pand', 'Hamst', 'Hippop', 'Hyen', 'Jag', 'Kangar', 'Koal', 'Komod', 'Leop', 'Lem', 'Lobst', 'Mant', 'Mosq', 'Octop', 'Ostr', 'Oyst', 'Panth', 'Parr', 'Pelic', 'Peng', 'Salam', 'Rhin', 'Rhinoc', 'Pand', 'Scorp', 'Spid', 'Term', 'Tig', 'Turt', 'Vult', 'Vultur', 'Weas', 'Wolv'];
  const names4 = ['aid', 'air', 'airy', 'ama', 'aring', 'ash', 'ath', 'aza', 'eaf', 'eat', 'ee', 'eler', 'ena', 'eo', 'eon', 'epi', 'ette', 'evoir', 'ia', 'ig', 'ion', 'ire', 'ita', 'itar', 'ite', 'ith', 'ithe', 'ius', 'ix', 'oal', 'oke', 'ola', 'oom', 'ops', 'ora', 'ord', 'ory', 'oss', 'oth', 'otic', 'otto', 'ou', 'ow', 'una', 'ung', 'uno', 'uzz', 'ygon', 'yle', 'yss'];
  const names5 = ['Iro', 'Gole', 'Magma', 'Blast', 'Veno', 'Gro', 'Electri', 'Ele', 'Magi', 'Spi', 'Qui', 'Gladia', 'Fie', 'Glaci', 'Skele', 'Flu', 'Aqua', 'Hype', 'Kine', 'Speci', 'Chime', 'Terro', 'Horro', 'Gho', 'Bone', 'Craze', 'Flame', 'Steel', 'War', 'Char', 'Doom', 'Slow', 'Quick', 'Elec', 'Spin', 'Quil', 'Ash', 'Shel', 'Chill', 'Fier', 'Volt', 'Star', 'Ram', 'Whirl', 'Stun'];
  const names6 = ['bat', 'bil', 'boon', 'bug', 'dine', 'fly', 'meleon', 'guin', 'hawk', 'hog', 'hopper', 'key', 'king', 'ling', 'madillo', 'mingo', 'mite', 'nea', 'pecker', 'phant', 'phin', 'pie', 'pion', 'quito', 'raffe', 'ray', 'rilla', 'roach', 'ron', 'sel', 'ster', 'tile', 'topus', 'vark', 'whale', 'wing', 'zelle'];
  const names7 = ['Aquat', 'Ash', 'Bell', 'Blast', 'Bon', 'Burn', 'Carn', 'Char', 'Chill', 'Chim', 'Dem', 'Dew', 'Doom', 'Drop', 'Earth', 'Elec', 'Electr', 'Fier', 'Fluff', 'Glac', 'Glad', 'Glas', 'Gold', 'Goth', 'Grow', 'Herb', 'Hunt', 'Hyp', 'Iron', 'Kinet', 'Kyn', 'Magic', 'Magm', 'Marsh', 'Meg', 'Melt', 'Molt', 'Mount', 'Ninj', 'Odd', 'Quick', 'Quil', 'Ram', 'Ramp', 'Rock', 'Sand', 'Shel', 'Silver', 'Skel', 'Slow', 'Spec', 'Spin', 'Star', 'Steel', 'Stun', 'Terr', 'Venom', 'Volt', 'War', 'Whirl', 'Wint'];
  const names8 = ['abura', 'aby', 'acle', 'acuda', 'adger', 'adillo', 'alo', 'amander', 'amel', 'ander', 'anzee', 'api', 'arak', 'aroo', 'aros', 'atee', 'atross', 'ecta', 'een', 'ela', 'elope', 'ena', 'eon', 'ephant', 'erine', 'erpillar', 'eton', 'ey', 'ibia', 'ibou', 'ican', 'ida', 'igator', 'illa', 'ing', 'ingale', 'ingo', 'ish', 'itar', 'eleon', 'ypus', 'ite', 'ium', 'oceros', 'oda', 'odile', 'odo', 'onite', 'oon', 'oose', 'opotamus', 'opus', 'ora', 'orb', 'os', 'osaur', 'ossum', 'oth', 'owary', 'oyote', 'uar', 'uin', 'uito', 'upine', 'utor', 'ybara', 'yte'];
  const names9 = ['Alpaking', 'Alphatross', 'Antelobster', 'Antethereal', 'Apricode', 'Aquail', 'Arachnibble', 'Arachnite', 'Autoad', 'Baboom', 'Badgerbil', 'Bambinosaur', 'Bamboa', 'Bamboozle', 'Barracupid', 'Beauty-Rex', 'Beavermin', 'Berriot', 'Bisong', 'Blazebra', 'Boaris', 'Brasselle', 'Brasshopper', 'Brawlphin', 'Brawnkey', 'Bumble Beetle', 'Bunnibs', 'Butterflux', 'Cabarrage', 'Caesardine', 'Camoose', 'Camosquito', 'Camouse', 'Caterpixie', 'Celestiger', 'Charachnid', 'Cheeturbo', 'Chickombo', 'Chimpanther', 'Clovertex', 'Cobrawl', 'Cocobra', 'Cottonic', 'Cowl', 'Crabbit', 'Crocodoom', 'Demongoose', 'Demonkey', 'Dinoscythe', 'Discorpion', 'Dolphire', 'Donkhi', 'Dragonightmare', 'Drummingbird', 'Eaglide', 'Echound', 'Elandroid', 'Elephantom', 'Falcondor', 'Fearkat', 'Flamimic', 'Flyte', 'Frogre', 'Frostrich', 'Fuseal', 'Fuzebra', 'Geishark', 'Gerbile', 'Ghostrich', 'Giraffle', 'Globster', 'Gnuke', 'Goath', 'Groundog', 'Hamstorm', 'Hamstun', 'Harlequill', 'Hawkward', 'Hedgehawk', 'Hippong', 'Hippony', 'Hippounce', 'Hitmantis', 'Hornettle', 'Hypony', 'Ingotter', 'Jackalfa', 'Jaguava', 'Jellyfists', 'Jestingray', 'Jollygator', 'Kangaroar', 'Kangarookie', 'Kingray', 'Knightingale', 'Koalamb', 'Koalasso', 'Koalava', 'Komodough', 'Komodozer', 'Laserpent', 'Lemonster', 'Leopanther', 'Leopaws', 'Lionic', 'Llamagic', 'Lobsteroid', 'Magmeleon', 'Magnettle', 'Magpine', 'Manateeth', 'Mascotton', 'Mermantis', 'Mockroach', 'Mohawk', 'Monkeye', 'Neopard', 'Numbat', 'Octopine', 'Octopuds', 'Octopup', 'Orcabbage', 'Ottermite', 'Oysterminate', 'Pandaisy', 'Pandame', 'Pandamonium', 'Pandarkness', 'Pandata', 'Pandaw', 'Pandaze', 'Panthug', 'Papayak', 'Parriot', 'Parsnipe', 'Pelicanine', 'Penguage', 'Penguine', 'Penguinite', 'Pigeode', 'Pigeoid', 'Pigeonite', 'Pigloo', 'Ponymph', 'Porcupid', 'Porcupike', 'Porpoison', 'Potatoad', 'Proctopus', 'Propelican', 'Psychound', 'Pyrose', 'Quackal', 'Quailava', 'Quaileaf', 'Quailynx', 'Rabbite', 'Rabbyte', 'Raccoconut', 'Raccocoon', 'Recyclops', 'Repelican', 'Rhinome', 'Rhinosaur', 'Rhinova', 'Riotter', 'Salamaniac', 'Salamantis', 'Salmonk', 'Sardeeno', 'Scarabyte', 'Scorpike', 'Scorpine', 'Scorpish', 'Sharcade', 'Sharctic', 'Snailment', 'Soyak', 'Soyster', 'Squidle', 'Squidol', 'Stingrage', 'Sumouse', 'Swanna', 'Termime', 'Termitis', 'Thortoise', 'Tomatoad', 'Tortoros', 'Troutlaw', 'Tsardine', 'Tucanine', 'Turtoro', 'Turtoy', 'Turtusk', 'Tuturkey', 'Twilightingale', 'Ursign', 'Ursire', 'Vanillama', 'Vaporc', 'Vilemon', 'Viperil', 'Viperk', 'Vultune', 'Wallabyte', 'Walruse', 'Walrust', 'Warachnid', 'Warthawk', 'Weaseal', 'Whaleaf', 'Wispider', 'Wolfix', 'Wombattle', 'Woolf', 'Wrathhog', 'Yetiger', 'Zapple', 'Zebrawl'];
  const nm1 = ['Aitchetuo (Water)', 'Aquara (Water)', 'Aquira (Water)', 'Aquis (Water)', 'Flo (Water)', 'Hydran (Water)', 'Layke (Water)', 'O\'Sean (Water)', 'Ocean (Water)', 'Poole (Water)', 'Puddle (Water)', 'Puddles (Water)', 'Rane (Water)', 'Retaw (Water)', 'River (Water)', 'Sea (Water)', 'Sprinkle (Water)', 'Vape (Water)', 'Alloy (Steel)', 'Anville (Steel)', 'Blade (Steel)', 'Bond (Steel)', 'Braze (Steel)', 'Brand (Steel)', 'Brandey (Steel)', 'Ferric (Steel)', 'Firm (Steel)', 'Fort (Steel)', 'Forte (Steel)', 'Ingi (Steel)', 'Ingot (Steel)', 'Lance (Steel)', 'Leets (Steel)', 'Nobrac (Steel)', 'Steele (Steel)', 'Basalt (Rock)', 'Basselt (Rock)', 'Boulder (Rock)', 'Cliff (Rock)', 'Cobble (Rock)', 'Cobbles (Rock)', 'Core (Rock)', 'Craig (Rock)', 'Grant (Rock)', 'Grav (Rock)', 'Oris (Rock)', 'Pebble (Rock)', 'Quary (Rock)', 'Roc (Rock)', 'Slab (Rock)', 'Slate (Rock)', 'Stowne (Rock)', 'Psy (Psychic)', 'Psi (Psychic)', 'Sye (Psychic)', 'Alph (Psychic)', 'Alpha (Psychic)', 'Omega (Psychic)', 'Cerebra (Psychic)', 'Rebral (Psychic)', 'Sent (Psychic)', 'Kineti (Psychic)', 'Sentey (Psychic)', 'Cept (Psychic)', 'Ceptio (Psychic)', 'Kinese (Psychic)', 'Pheno (Psychic)', 'Tarot (Psychic)', 'Concio (Psychic)', 'Bane (Poison)', 'Blight (Poison)', 'Blite (Poison)', 'Fang (Poison)', 'Itch (Poison)', 'Monev (Poison)', 'Poise (Poison)', 'Poyse (Poison)', 'Snake (Poison)', 'Sonpoi (Poison)', 'Suriv (Poison)', 'Tainte (Poison)', 'Venin (Poison)', 'Venno (Poison)', 'Xinto (Poison)', 'Norm (Normal)', 'Norman (Normal)', 'Regie (Normal)', 'Averon (Normal)', 'Averis (Normal)', 'Nary (Normal)', 'Naidem (Normal)', 'Lamron (Normal)', 'Raluger (Normal)', 'Brice (Ice)', 'Chilled (Ice)', 'Chilly (Ice)', 'Chilrie (Ice)', 'Coled (Ice)', 'Flo (Ice)', 'Fridge (Ice)', 'Frigi (Ice)', 'Glaze (Ice)', 'Hale (Ice)', 'Nipp (Ice)', 'Nippy (Ice)', 'Nord (Ice)', 'Pierce (Ice)', 'Silver (Ice)', 'Sno (Ice)', 'Thaw (Ice)', 'Whitey (Ice)', 'Claye (Ground)', 'Dune (Ground)', 'Duster (Ground)', 'Graund (Ground)', 'Grimes (Ground)', 'Grime (Ground)', 'Gritt (Ground)', 'Sod (Ground)', 'Turf (Ground)', 'Tera (Ground)', 'Bailey (Grass)', 'Blade (Grass)', 'Bud (Grass)', 'Buddy (Grass)', 'Flax (Grass)', 'Flowe (Grass)', 'Forrest (Grass)', 'Herb (Grass)', 'Herbert (Grass)', 'Leaf (Grass)', 'Meadow (Grass)', 'Meddo (Grass)', 'Petal (Grass)', 'Rye (Grass)', 'Vayne (Grass)', 'Eeris (Ghost)', 'Fanto (Ghost)', 'Ghost (Ghost)', 'Grimm (Ghost)', 'LeStrange (Ghost)', 'Manes (Ghost)', 'Mort (Ghost)', 'Omi (Ghost)', 'Phantos (Ghost)', 'Raith (Ghost)', 'Salem (Ghost)', 'Saul (Ghost)', 'Shade (Ghost)', 'Sounimo (Ghost)', 'Specter (Ghost)', 'Trace (Ghost)', 'Aero (Flying)', 'Avian (Flying)', 'Azure (Flying)', 'Bert (Flying)', 'Bill (Flying)', 'Cloud (Flying)', 'Daw (Flying)', 'Falcon (Flying)', 'Fowle (Flying)', 'Hawk (Flying)', 'Lark (Flying)', 'Pliume (Flying)', 'Roc (Flying)', 'Skyler (Flying)', 'Snipe (Flying)', 'Zephyr (Flying)', 'Volant (Flying)', 'Volarian (Flying)', 'Draco (Dragon)', 'Ash (Fire)', 'Blaze (Fire)', 'Boyle (Fire)', 'Brun (Fire)', 'Charlie (Fire)', 'Cole (Fire)', 'Ferno (Fire)', 'Fye (Fire)', 'Glo (Fire)', 'Igneous (Fire)', 'Kindle (Fire)', 'Pyre (Fire)', 'Pyro (Fire)', 'Red (Fire)', 'Sear (Fire)', 'Smo (Fire)', 'Smokey (Fire)', 'Spark (Fire)', 'Tinder (Fire)', 'Bear (Fighting)', 'Bonk (Fighting)', 'Brawler (Fighting)', 'Brawley (Fighting)', 'Brawn (Fighting)', 'Brush (Fighting)', 'Clash (Fighting)', 'Clobb (Fighting)', 'Crash (Fighting)', 'Fuzz (Fighting)', 'Havoc (Fighting)', 'Pound (Fighting)', 'Pummel (Fighting)', 'Rowe (Fighting)', 'Rumble (Fighting)', 'Scuff (Fighting)', 'Strife (Fighting)', 'Striker (Fighting)', 'Tugg (Fighting)', 'Wrest (Fighting)', 'Chant (Fairy)', 'Elba (Fairy)', 'Eruza (Fairy)', 'Fabe (Fairy)', 'Gaes (Fairy)', 'Glimm (Fairy)', 'Pixis (Fairy)', 'Prite (Fairy)', 'Sage (Fairy)', 'Sprye (Fairy)', 'Sprytz (Fairy)', 'Yriaf (Fairy)', 'Acey (Electric)', 'Amp (Electric)', 'Bolt (Electric)', 'Bulb (Electric)', 'Buzz (Electric)', 'Deecey (Electric)', 'Dyno (Electric)', 'Fizz (Electric)', 'Fuze (Electric)', 'Galve (Electric)', 'Jet (Electric)', 'Jot (Electric)', 'Light (Electric)', 'Magny (Electric)', 'Paul (Electric)', 'Ray (Electric)', 'Spark (Electric)', 'Spike (Electric)', 'Sprite (Electric)', 'Statt (Electric)', 'Surge (Electric)', 'Thunder (Electric)', 'Behmo (Dragon)', 'Bello (Dragon)', 'Brath (Dragon)', 'Drahy (Dragon)', 'Drake (Dragon)', 'Glyede (Dragon)', 'Gondra (Dragon)', 'Grant (Dragon)', 'Hyde (Dragon)', 'Keard (Dragon)', 'Levi (Dragon)', 'Mons (Dragon)', 'Myth (Dragon)', 'Rage (Dragon)', 'Rago (Dragon)', 'Sceal (Dragon)', 'Soar (Dragon)', 'Verwyn (Dragon)', 'Auster (Dark)', 'Bleek (Dark)', 'Churley (Dark)', 'Cloud (Dark)', 'Cole (Dark)', 'Daerc (Dark)', 'Dark (Dark)', 'Ebon (Dark)', 'Gloom (Dark)', 'Glum (Dark)', 'Grim (Dark)', 'Grimes (Dark)', 'Grimm (Dark)', 'Horrad (Dark)', 'Jet (Dark)', 'Morose (Dark)', 'Mort (Dark)', 'Murky (Dark)', 'Omi (Dark)', 'Raye (Dark)', 'Sable (Dark)', 'Shade (Dark)', 'Sinis (Dark)', 'Sootey (Dark)', 'Sully (Dark)', 'Swart (Dark)', 'Roach (Bug)', 'Ent (Bug)', 'Entsy (Bug)', 'Flye (Bug)', 'Mott (Bug)', 'Rachnid (Bug)', 'Snay (Bug)', 'Cica (Bug)', 'Cada (Bug)', 'Ricket (Bug)', 'Worrem (Bug)', 'Slug (Bug)', 'Weevil (Bug)', 'Grubsy (Bug)', 'Louise (Bug)', 'Pede (Bug)', 'Pupa (Bug)', 'Leech (Bug)', 'Locus (Bug)', 'Myte (Bug)', 'Montis (Bug)', 'Termi (Bug)', 'Badel (Bug)', 'Scara (Bug)', 'Skip (Bug)', 'Skipper (Bug)', 'Nat (Bug)', 'Qito (Bug)'];
  const nm2 = ['Aquara (Water)', 'Aquira (Water)', 'Aquis (Water)', 'Flo (Water)', 'Hydris (Water)', 'Layke (Water)', 'Ocean (Water)', 'Puddle (Water)', 'Puddles (Water)', 'Purity (Water)', 'Rane (Water)', 'River (Water)', 'Sea (Water)', 'Sprinkle (Water)', 'Vape (Water)', 'Vapore (Water)', 'Aloye (Steel)', 'Anvi (Steel)', 'Brace (Steel)', 'Brande (Steel)', 'Brandey (Steel)', 'Braze (Steel)', 'Carbonne (Steel)', 'Forte (Steel)', 'Ingi (Steel)', 'Ingot (Steel)', 'Cobble (Rock)', 'Cobbles (Rock)', 'Gemma (Rock)', 'Granni (Rock)', 'Marbles (Rock)', 'Oria (Rock)', 'Oris (Rock)', 'Pebble (Rock)', 'Psychick (Psychic)', 'Psy (Psychic)', 'Psi (Psychic)', 'Sye (Psychic)', 'Alpha (Psychic)', 'Omega (Psychic)', 'Claire (Psychic)', 'Cerebra (Psychic)', 'Rebral (Psychic)', 'Sent (Psychic)', 'Sentey (Psychic)', 'Kineti (Psychic)', 'Kinese (Psychic)', 'Pathi (Psychic)', 'Pheno (Psychic)', 'Nomena (Psychic)', 'Tarot (Psychic)', 'Concio (Psychic)', 'Arachni (Poison)', 'Blight (Poison)', 'Blite (Poison)', 'Dote (Poison)', 'Itch (Poison)', 'Ivy (Poison)', 'Maligna (Poison)', 'Noxi (Poison)', 'Poise (Poison)', 'Poyse (Poison)', 'Sonpoi (Poison)', 'Tainte (Poison)', 'Tamina (Poison)', 'Toxy (Poison)', 'Venin (Poison)', 'Vira (Poison)', 'Regie (Normal)', 'Averis (Normal)', 'Nary (Normal)', 'Medianne (Normal)', 'Naidem (Normal)', 'Ordia (Normal)', 'Blizzy (Ice)', 'Brice (Ice)', 'Chilly (Ice)', 'Chilrie (Ice)', 'Claire (Ice)', 'Clarity (Ice)', 'Crystal (Ice)', 'Flo (Ice)', 'Fridge (Ice)', 'Frigi (Ice)', 'Glace (Ice)', 'Glaze (Ice)', 'Hale (Ice)', 'Ivory (Ice)', 'Nippy (Ice)', 'Silver (Ice)', 'Sno (Ice)', 'Thaw (Ice)', 'Whitey (Ice)', 'Whitney (Ice)', 'Grime (Ground)', 'Grine (Ground)', 'Gritt (Ground)', 'Lois (Ground)', 'Lios (Ground)', 'Sandy (Ground)', 'Soil (Ground)', 'Tera (Ground)', 'Terra (Ground)', 'Terrane (Ground)', 'Anemone (Grass)', 'Bailey (Grass)', 'Blossom (Grass)', 'Clover (Grass)', 'Dahlia (Grass)', 'Daisy (Grass)', 'Florette (Grass)', 'Flowe (Grass)', 'Herb (Grass)', 'Leaf (Grass)', 'Lily (Grass)', 'Meadow (Grass)', 'Meddo (Grass)', 'Peach (Grass)', 'Petal (Grass)', 'Petunia (Grass)', 'Poinsetta (Grass)', 'Rose (Grass)', 'Rye (Grass)', 'Banshee (Ghost)', 'Claire (Ghost)', 'Demi (Ghost)', 'Eeria (Ghost)', 'Eerie (Ghost)', 'Eeris (Ghost)', 'Kelpie (Ghost)', 'LeStrange (Ghost)', 'Omi (Ghost)', 'Raith (Ghost)', 'Shade (Ghost)', 'Shaye (Ghost)', 'Sounimo (Ghost)', 'Trace (Ghost)', 'Tracey (Ghost)', 'Trinity (Ghost)', 'Aeria (Flying)', 'Aero (Flying)', 'Aura (Flying)', 'Aurora (Flying)', 'Avia (Flying)', 'Aviana (Flying)', 'Azura (Flying)', 'Azure (Flying)', 'Celeste (Flying)', 'Cerulea (Flying)', 'Daw (Flying)', 'Fowley (Flying)', 'Pliume (Flying)', 'Raven (Flying)', 'Skye (Flying)', 'Skyler (Flying)', 'Ash (Fire)', 'Ashley (Fire)', 'Bonnie (Fire)', 'Boyle (Fire)', 'Charlie (Fire)', 'Claire (Fire)', 'Ember (Fire)', 'Flair (Fire)', 'Fye (Fire)', 'Glo (Fire)', 'Pyre (Fire)', 'Sizzle (Fire)', 'Smo (Fire)', 'Soots (Fire)', 'Sparkle (Fire)', 'Summer (Fire)', 'Tinder (Fire)', 'Blo (Fighting)', 'Bonk (Fighting)', 'Boxey (Fighting)', 'Brawley (Fighting)', 'Brawn (Fighting)', 'Clamore (Fighting)', 'Duelle (Fighting)', 'Fighe (Fighting)', 'Fraye (Fighting)', 'Rowe (Fighting)', 'Scuff (Fighting)', 'Rumble (Fighting)', 'Azura (Fairy)', 'Chant (Fairy)', 'Chantey (Fairy)', 'Elba (Fairy)', 'Enchay (Fairy)', 'Eruza (Fairy)', 'Faye (Fairy)', 'Flae (Fairy)', 'Lucy (Fairy)', 'Pixey (Fairy)', 'Prite (Fairy)', 'Queste (Fairy)', 'Sage (Fairy)', 'Sprye (Fairy)', 'Trixie (Fairy)', 'Whimsey (Fairy)', 'Yria (Fairy)', 'Zure (Fairy)', 'Acey (Electric)', 'Amp (Electric)', 'Deecey (Electric)', 'Dyno (Electric)', 'Fizz (Electric)', 'Flo (Electric)', 'Jet (Electric)', 'Jot (Electric)', 'Lectrice (Electric)', 'Light (Electric)', 'Maggy (Electric)', 'Magny (Electric)', 'Spark (Electric)', 'Sparkle (Electric)', 'Sprite (Electric)', 'Sprye (Electric)', 'Behmo (Dragon)', 'Bello (Dragon)', 'Celeste (Dragon)', 'Chime (Dragon)', 'Fye (Dragon)', 'Glyede (Dragon)', 'Gondra (Dragon)', 'Keard (Dragon)', 'Levi (Dragon)', 'Levia (Dragon)', 'Mera (Dragon)', 'Myth (Dragon)', 'Sceal (Dragon)', 'Wyverin (Dragon)', 'Ashley (Dark)', 'Bleek (Dark)', 'Churley (Dark)', 'Dawn (Dark)', 'Ebony (Dark)', 'Raven (Dark)', 'Glum (Dark)', 'Omi (Dark)', 'Murky (Dark)', 'Morose (Dark)', 'Ruth (Dark)', 'Sable (Dark)', 'Shade (Dark)', 'Shay (Dark)', 'Sherly (Dark)', 'Sinis (Dark)', 'Vyle (Dark)', 'Wicky (Dark)', 'Sully (Dark)', 'Entsy (Bug)', 'Flye (Bug)', 'Snay (Bug)', 'Beezee (Bug)', 'Rachni (Bug)', 'Cica (Bug)', 'Cada (Bug)', 'Grubsy (Bug)', 'Louise (Bug)', 'Pupa (Bug)', 'Katy (Bug)', 'Maggy (Bug)', 'Locus (Bug)', 'Myte (Bug)', 'Termi (Bug)', 'Badel (Bug)', 'Scara (Bug)', 'Midge (Bug)'];
  const nm3 = ['Acey (Electric)', 'Aloye (Steel)', 'Alph (Psychic)', 'Alpha (Psychic)', 'Amp (Electric)', 'Anvi (Steel)', 'Anville (Steel)', 'Aquara (Water)', 'Aquira (Water)', 'Averis (Normal)', 'Avia (Flying)', 'Badel (Bug)', 'Bailey (Grass)', 'Beezee (Bug)', 'Behmo (Dragon)', 'Bello (Dragon)', 'Bleek (Dark)', 'Blight (Poison)', 'Blite (Poison)', 'Blo (Fighting)', 'Boyle (Fire)', 'Brace (Steel)', 'Brande (Steel)', 'Brawn (Fighting)', 'Braze (Steel)', 'Brice (Ice)', 'Cada (Bug)', 'Carbonne (Steel)', 'Cerebra (Psychic)', 'Charlie (Fire)', 'Chilrie (Ice)', 'Chime (Dragon)', 'Cica (Bug)', 'Clamore (Fighting)', 'Claye (Ground)', 'Cobble (Rock)', 'Cobbles (Rock)', 'Daw (Flying)', 'Deecey (Electric)', 'Dune (Ground)', 'Dyno (Electric)', 'Ebon (Dark)', 'Eerie (Ghost)', 'Ember (Fire)', 'Entsy (Bug)', 'Fabe (Fairy)', 'Ferno (Fire)', 'Fighe (Fighting)', 'Fizz (Electric)', 'Flae (Fairy)', 'Flax (Grass)', 'Flo (Electric)', 'Flo (Ice)', 'Flo (Water)', 'Flowe (Grass)', 'Flye (Bug)', 'Fowley (Flying)', 'Fraye (Fighting)', 'Frigi (Ice)', 'Fuze (Electric)', 'Fye (Dragon)', 'Fye (Fire)', 'Glace (Ice)', 'Glaze (Ice)', 'Glimm (Fairy)', 'Glo (Fire)', 'Glyede (Dragon)', 'Grine (Ground)', 'Gritt (Ground)', 'Grubsy (Bug)', 'Hale (Ice)', 'Hydris (Water)', 'Ingi (Steel)', 'Ingot (Steel)', 'Itch (Poison)', 'Kindle (Fire)', 'Kinese (Psychic)', 'Layke (Water)', 'LeStrange (Ghost)', 'Leaf (Grass)', 'Levi (Dragon)', 'Light (Electric)', 'Lois (Ground)', 'Marbles (Rock)', 'Meadow (Grass)', 'Meddo (Grass)', 'Monev (Poison)', 'Morose (Dark)', 'Mott (Bug)', 'Murky (Dark)', 'Myte (Bug)', 'Myth (Dragon)', 'Naidem (Normal)', 'Nippy (Ice)', 'Ocean (Water)', 'Omega (Psychic)', 'Omi (Dark)', 'Omi (Ghost)', 'Oris (Rock)', 'Pebble (Rock)', 'Petal (Grass)', 'Pheno (Psychic)', 'Pixis (Fairy)', 'Pliume (Flying)', 'Poise (Poison)', 'Poyse (Poison)', 'Prite (Fairy)', 'Psi (Psychic)', 'Psy (Psychic)', 'Puddle (Water)', 'Puddles (Water)', 'Pupa (Bug)', 'Pyre (Fire)', 'Qito (Bug)', 'Rane (Water)', 'River (Water)', 'Rowe (Fighting)', 'Rye (Grass)', 'Sable (Dark)', 'Sage (Fairy)', 'Salem (Ghost)', 'Sea (Water)', 'Shade (Dark)', 'Shade (Ghost)', 'Shay (Dark)', 'Shaye (Ghost)', 'Silver (Ice)', 'Sinis (Dark)', 'Sizzle (Fire)', 'Skye (Flying)', 'Smo (Fire)', 'Sno (Ice)', 'Soots (Fire)', 'Sounimo (Ghost)', 'Sparkle (Electric)', 'Sparkle (Fire)', 'Sprinkle (Water)', 'Sprye (Electric)', 'Sprye (Fairy)', 'Sye (Psychic)', 'Termi (Bug)', 'Terra (Ground)', 'Thaw (Ice)', 'Tinder (Fire)', 'Trace (Ghost)', 'Vape (Water)', 'Vapore (Water)', 'Venin (Poison)', 'Verwyn (Dragon)', 'Vyle (Dark)', 'Whimsey (Fairy)', 'Whitey (Ice)', 'Zure (Fairy)'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 3) {
        names = sample(nm1);
      } else if (i < 7) {
        names = sample(nm3);
      } else {
        names = sample(nm2);
      }
    } else if (i < 2) {
      rnd0 = Math.floor(Math.random() * names1.length);
      rnd1 = Math.floor(Math.random() * names2.length);
      names = names1[rnd0] + names2[rnd1];
    } else if (i < 4) {
      rnd0 = Math.floor(Math.random() * names3.length);
      rnd1 = Math.floor(Math.random() * names4.length);
      names = names3[rnd0] + names4[rnd1];
    } else if (i < 6) {
      rnd0 = Math.floor(Math.random() * names5.length);
      rnd1 = Math.floor(Math.random() * names6.length);
      names = names5[rnd0] + names6[rnd1];
    } else if (i < 8) {
      rnd0 = Math.floor(Math.random() * names7.length);
      rnd1 = Math.floor(Math.random() * names8.length);
      names = names7[rnd0] + names8[rnd1];
    } else {
      rnd0 = Math.floor(Math.random() * names9.length);
      names = names9[rnd0];
    }
    return names;
  }
}
module.exports = pokemons
