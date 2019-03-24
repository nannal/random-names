function generator$fantasy$fantasy_races() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abyss', 'Abyssal', 'Aerial', 'Aerie', 'Ancient', 'Aquatic', 'Arcane', 'Arctic', 'Argent', 'Ashen', 'Astral', 'Aurelian', 'Aurora', 'Austral', 'Autumn', 'Awoken', 'Azure', 'Barren', 'Blessed', 'Blight', 'Blood', 'Bog', 'Boreal', 'Boulder', 'Bronze', 'Brood', 'Canyon', 'Cave', 'Cavern', 'Celestial', 'Chaos', 'Chasm', 'Chromatic', 'Clockwork', 'Common', 'Copper', 'Core', 'Crimson', 'Cursed', 'Dark', 'Dawn', 'Death', 'Deep', 'Demi', 'Desert', 'Dew', 'Dire', 'Divine', 'Doom', 'Dread', 'Dusk', 'Earthen', 'Eastern', 'Ebon', 'Ebony', 'Eerie', 'Elder', 'Elemental', 'Ember', 'Empyrean', 'Enchanted', 'Eternal', 'Ethereal', 'Exo', 'Faerie', 'Fair', 'Fallen', 'False', 'Fel', 'Feral', 'Fey', 'Fire', 'First', 'Flame', 'Forest', 'Forged', 'Forgotten', 'Forlorn', 'Forsaken', 'Free', 'Frost', 'Fury', 'Ghastly', 'Ghost', 'Gilded', 'Glacial', 'Gold', 'Grand', 'Grave', 'Green', 'Grey', 'Grim', 'Grotto', 'Half', 'Hallowed', 'Harmony', 'Hellish', 'High', 'Highborn', 'Hive', 'Hollow', 'Ice', 'Immortal', 'Impure', 'Infernal', 'Iron', 'Island', 'Ivory', 'Jungle', 'Juvenile', 'Lake', 'Light', 'Lost', 'Low', 'Lucent', 'Lunar', 'Marsh', 'Mimic', 'Mist', 'Moon', 'Morass', 'Moss', 'Mountain', 'Mud', 'Mystic', 'Nebula', 'Nether', 'Night', 'Nimbus', 'Noble', 'Nomad', 'Northern', 'Oblivion', 'Obsidian', 'Occult', 'Ocean', 'Onyx', 'Painted', 'Pale', 'Paragon', 'Phantom', 'Pinnacle', 'Planar', 'Plane', 'Poison', 'Primal', 'Prime', 'Primeval', 'Primordial', 'Proto', 'Pure', 'Pygmy', 'Radiant', 'Regal', 'River', 'Rock', 'Royal', 'Sable', 'Sacred', 'Sanguine', 'Savage', 'Scourge', 'Sea', 'Shadow', 'Shard', 'Shore', 'Silent', 'Silver', 'Sky', 'Snow', 'Solar', 'Southern', 'Spectral', 'Spirit', 'Spring', 'Star', 'Storm', 'Subterranean', 'Summer', 'Sun', 'Surface', 'Swamp', 'Tempest', 'Timber', 'Titan', 'Tomb', 'Torment', 'Tundra', 'Twilight', 'Valley', 'Veiled', 'Venom', 'Vile', 'Void', 'Western', 'Wild', 'Winter', 'Wood', 'Wrath', 'Zephyr'];
  const nm2 = ['Angels', 'Beasts', 'Boggart', 'Centaurs', 'Demons', 'Dragonborn', 'Dryads', 'Dwarves', 'Elementals', 'Elves', 'Ents', 'Fairies', 'Faun', 'Fiends', 'Folk', 'Giants', 'Gnolls', 'Gnomes', 'Goblins', 'Golems', 'Goliaths', 'Gorgons', 'Gremlins', 'Hagravens', 'Hags', 'Halflings', 'Harpies', 'Hobbits', 'Hobgoblins', 'Humans', 'Imps', 'Kobolds', 'Lamia', 'Men', 'Merfolk', 'Minotaurs', 'Naga', 'Nymphs', 'Oceanids', 'Ogres', 'Lich', 'Gargoyles', 'Grendels', 'Draugr', 'Kappa', 'Oni', 'Wendigo', 'Drake', 'Dragonborn', 'Ghouls', 'Grell', 'Hydra', 'Trogg', 'Orcs', 'People', 'Satyr', 'Siren', 'Spriggan', 'Sylphs', 'Trolls', 'Undine', 'Valkyrie', 'Vampires', 'Werewolves', 'Women'];


  i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    names = `${nm1[rnd]} ${nm2[rnd2]}`;
    nm1.splice(rnd, 1);
    nm2.splice(rnd2, 1);
    return names;
  }
}
