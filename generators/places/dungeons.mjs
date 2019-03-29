var sample = require ('lodash.sample')

function dungeons() {
  let names;
  const nm1 = ['Abandoned', 'Abominable', 'Abomination', 'Abysmal', 'Abyss', 'Adamantine', 'Adamantite', 'Ancient', 'Angry', 'Arcane', 'Arching', 'Arctic', 'Arid', 'Bare', 'Bellowing', 'Black', 'Black Forest', 'Black Mountain', 'Bleak', 'Bloodfall', 'Bloodlust', 'Boiling', 'Bottomless', 'Brilliant', 'Broken Bones', 'Broken Curse', 'Bronze', 'Brutal', 'Buried', 'Burned', 'Burning', 'Burning Forest', 'Buried', 'Chaos', 'Chaotic', 'Cobalt', 'Cold', 'Collapsing', 'Coral', 'Courage', 'Crescent Moon', 'Crystal', 'Cunning', 'Cursed', 'Damned', 'Dancing', 'Dark', 'Daydream', 'Dead', 'Deadly', 'Death Talon', 'Decayed', 'Decaying', 'Deep', 'Deepest', 'Deepwood', 'Delusion', 'Demonic', 'Depraved', 'Desert', 'Deserted', 'Desolate', 'Desolated', 'Destroyed', 'Destruction', 'Diamond', 'Dire', 'Distant', 'Dragon', 'Dragonclaw', 'Dragontooth', 'Dread', 'Dreaded', 'Dreadful', 'Dream', 'Dreary', 'Dry', 'Dying', 'Earth', 'Eastern', 'Eclipse', 'Emerald', 'Empty', 'Enchanted', 'Ender', 'Erased', 'Eternal', 'Eternal Agony', 'Eternal Rest', 'Ethereal', 'Fabled', 'Fallen Legion', 'False', 'Feared', 'Fearsome', 'Fire', 'Fire Mountain', 'Flowing', 'Foaming', 'Forbidden', 'Forgotten', 'Forsaken', 'Fractured', 'Frozen', 'Full Moon', 'Ghost', 'Glistening', 'Gloomy', 'Glowing', 'Goblin', 'Gold Mine', 'Grey', 'Grim', 'Grizzly', 'Hallucination', 'Haunted', 'Hidden', 'Hollow', 'Howling', 'Hungry', 'Illusion', 'Infernal', 'Infinite', 'Invisible', 'Iron', 'Iron Mine', 'Ironbark', 'Isolated', 'Jade', 'Jagged', 'Killing', 'Laughing', 'Laughing Skulls', 'Lifeless', 'Light', 'Lion Tooth', 'Living', 'Living Dead', 'Lonely', 'Lost', 'Lower', 'Lucent', 'Lurking Shadow', 'Malicious', 'Mesmerizing', 'Mighty', 'Mirage', 'Mirrored', 'Misty', 'Mithril', 'Mithril Mine', 'Moaning', 'Mocking', 'Molten', 'Motionless', 'Mourning', 'Murky', 'Mysterious', 'Mystic', 'Narrow', 'Nether', 'Neverending', 'Nightmare', 'Northern', 'Obliterated', 'Oblivion', 'Ogre', 'Oracle', 'Orc', 'Overhanging', 'Perfumed', 'Phantom', 'Phoenix', 'Prisoner', 'Quiet', 'Raging', 'Red', 'Restless', 'Roaring', 'Rocking', 'Rugged', 'Sad', 'Sanguine', 'Savage', 'Scarlet', 'Scheming', 'Scorching', 'Screaming', 'Secret', 'Serene', 'Shadow', 'Shadowed', 'Shadowy', 'Shimmering', 'Shrieking', 'Silent', 'Silver', 'Sleeping', 'Smoky', 'Smoldering', 'Sorrow', 'Southern', 'Specter', 'Spirit', 'Steel', 'Sterile', 'Sunken', 'Swamp', 'Terraced', 'Thief', 'Thundering', 'Tormented', 'Tranquil', 'Turbulent', 'Twilight', 'Twisted', 'Twisting', 'Unholy', 'Unknown', 'Unstable', 'Vicious', 'Violent', 'Voiceless', 'Voiceless Whimpers', 'Volcanic', 'Wailing', 'Wasted', 'Watching Eyes', 'Western', 'Whispering', 'Whispering Shadows', 'White', 'White Forest', 'Wicked', 'Wild', 'Wind', 'Windy', 'Winter', 'Withered', 'Wondering', 'Wraith', 'Wrath', 'Yawning'];
  const nm2 = ['Burrows', 'Catacombs', 'Caverns', 'Cells', 'Chambers', 'Crypt', 'Delves', 'Dungeon', 'Grotto', 'Haunt', 'Labyrinth', 'Lair', 'Maze', 'Pits', 'Point', 'Quarters', 'Tombs', 'Tunnels', 'Vault'];
  const nm3 = ['Black', 'White', 'Silver', 'Golden', 'Crystal', 'Fallen', 'Ghost', 'Phantom', 'Hidden', 'Secret', 'Hopeless', 'Forsaken', 'Gentle', 'Chaotic', 'Conquered', 'Burning', 'Poisoned', 'Whispering', 'Mourning', 'Crying', 'Lost', 'Infernal', 'Vanished', 'Rejected', 'Neglected', 'Shunned', 'Impostor', 'Renegade', 'Betrayed', 'Vanquished', 'Burning', 'Frozen', 'Destroyed', 'Cursed', 'Ancient', 'Obsidian', 'Ebon', 'Forbidden', 'Lonely', 'Nameless', 'Dark', 'Cold', 'Haunted', 'Forgotten', 'Scarlet', 'Shrouded', 'Uncanny', 'Unspoken', 'Vanishing', 'Nightmare', 'Mystic', 'Mythic', 'Enigmatic', 'Doomed', 'Death\'s', 'Spirit', 'Spirit\'s', 'Unknown', 'Shadow', 'Elemental', 'Savage', 'Storm', 'Thunder', 'Barbaric', 'Cruel', 'Brutal', 'Blooded', 'Ruthless', 'Raging', 'Furious', 'Mad', 'Granite', 'Dishonored', 'Perished'];
  const nm4 = ['Arachnid', 'Army', 'Basilisk', 'Bat', 'Bear', 'Cult', 'Desert', 'Dragon', 'Eagle', 'Elf', 'Emperor', 'Forest', 'Giant', 'Goblin', 'Guardian', 'Horsemen', 'Hound', 'Hunter', 'Jungle', 'King', 'Knight', 'Legion', 'Leopard', 'Lion', 'Mage', 'Marsh', 'Monk', 'Morass', 'Mountain', 'Occult', 'Ogre', 'Oracle', 'Orc', 'Paladin', 'Panther', 'Phoenix', 'Priest', 'Queen', 'Raven', 'Scorpion', 'Serpent', 'Soldier', 'Spider', 'Swamp', 'Tiger', 'Warrior', 'Widow', 'Witch', 'Wizard', 'Warlord', 'Wolf'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = `${sample(nm2)} of the ${sample(nm3)} ${sample(nm4)}`;
    } else {
      names = `The ${sample(nm1)} ${sample(nm2)}`;
    }
    return names;
  }
}
module.exports = dungeons
