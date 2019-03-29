var sample = require ('lodash.sample')

function villains() {
  let names;
  const nm1 = ['The Absent', 'The Accidental', 'The Adorable', 'The Aggressive', 'The Alien', 'The Ancient', 'The Anxious', 'The Aqua', 'The Armed', 'The Awful', 'The Bad', 'The Bitter', 'The Bizarre', 'The Black', 'The Bloody', 'The Blue', 'The Brass', 'The Broad', 'The Broken', 'The Bronze', 'The Careless', 'The Colossal', 'The Confident', 'The Copper', 'The Cowardly', 'The Crazy', 'The Creepy', 'The Crimson', 'The Cruel', 'The Curious', 'The Dangerous', 'The Dark', 'The Dazzling', 'The Dead', 'The Defiant', 'The Delirious', 'The Deranged', 'The Devilish', 'The Diamond', 'The Dirty', 'The Dramatic', 'The Drunk', 'The Drunken', 'The Dynamic', 'The Eager', 'The Earth', 'The Earthen', 'The Electric', 'The Electron', 'The Elegant', 'The Elite', 'The Excited', 'The False', 'The Famous', 'The Fearless', 'The Fiery', 'The Filthy', 'The Fire', 'The First', 'The Flashy', 'The Fluffy', 'The Foolish', 'The Frightening', 'The Frozen', 'The Galactic', 'The Ghastly', 'The Ghost', 'The Giant', 'The Gifted', 'The Gigantic', 'The Golden', 'The Goofy', 'The Gray', 'The Greasy', 'The Green', 'The Groovy', 'The Gruesome', 'The Grumpy', 'The Gullible', 'The Handy', 'The Harsh', 'The Hissing', 'The Hollow', 'The Huge', 'The Hungry', 'The Hypnotic', 'The Ice', 'The Impossible', 'The Incredible', 'The Infamous', 'The Iron', 'The Jagged', 'The Jealous', 'The Jolly', 'The Last', 'The Laughing', 'The Lazy', 'The Lean', 'The Light', 'The Limping', 'The Little', 'The Lonely', 'The Loud', 'The Lucky', 'The Lying', 'The Macho', 'The Mammoth', 'The Maniacal', 'The Marked', 'The Massive', 'The Mean', 'The Messy', 'The Mighty', 'The Misty', 'The Molten', 'The Mute', 'The Mysterious', 'The Nasty', 'The Naughty', 'The Needy', 'The Nervous', 'The Nifty', 'The Nimble', 'The Nuclear', 'The Obnoxious', 'The Odd', 'The Old', 'The Opposite', 'The Orange', 'The Outrageous', 'The Parallel', 'The Pathetic', 'The Pink', 'The Poor', 'The Proud', 'The Psychotic', 'The Purple', 'The Puzzled', 'The Puzzling', 'The Quantum', 'The Quick', 'The Quiet', 'The Rabid', 'The Rapid', 'The Rare', 'The Real', 'The Rebellious', 'The Red', 'The Repulsive', 'The Rotten', 'The Ruthless', 'The Sad', 'The Scarlet', 'The Scary', 'The Second', 'The Secret', 'The Shaggy', 'The Short', 'The Sick', 'The Silver', 'The Simple', 'The Skilled', 'The Smelly', 'The Smiling', 'The Smooth', 'The Special', 'The Spectacular', 'The Spooky', 'The Storm', 'The Swift', 'The Talented', 'The Terrible', 'The Terrific', 'The Thin', 'The Third', 'The Threatening', 'The Thunder', 'The Towering', 'The Tricky', 'The Ugly', 'The Undefeated', 'The Unknown', 'The Unnatural', 'The Unusual', 'The Unwritten', 'The Upset', 'The Vengeful', 'The Venomous', 'The Violent', 'The Violet', 'The Voiceless', 'The Vulgar', 'The Wacky', 'The Wandering', 'The Water', 'The Whispering', 'The Wicked', 'The Wild', 'The Wise', 'The Wretched', 'The Wrong', 'The Yellow', 'The Young'];
  const nm2 = ['Robin', 'Owl', 'Vulture', 'Condor', 'Falcon', 'Merlin', 'Eagle', 'Hawk', 'Swan', 'Ibis', 'Hornet', 'Crane', 'Snipe', 'Macaw', 'Butcher', 'Amazon', 'Nighthawk', 'Nightowl', 'Monarch', 'Lord', 'Crow', 'Raven', 'Swallow', 'Starling', 'Sparrow', 'Ant', 'Antman', 'Wasp', 'Phoenix', 'Waspman', 'Grasshopper', 'Cricket', 'Beetle', 'Assassin', 'Mantis', 'Mothman', 'Moth', 'Termite', 'Dragonfly', 'Elephantman', 'Wolf', 'Wolfman', 'Bat', 'Rhino', 'Rhinoceros', 'Cat', 'Catman', 'Lynx', 'Gorilla', 'Leopard', 'Armadillo', 'Bear', 'Tiger', 'Lion', 'Fox', 'Raccoon', 'Ox', 'Oxman', 'Puma', 'Panther', 'Wolverine', 'Cheetah', 'Mongoose', 'Jackal', 'Hornet', 'Warrior', 'Fighter', 'Angel', 'Devil', 'Slayer', 'Killer', 'Soldier', 'Marksman', 'Sniper', 'Commando', 'Gunner', 'Mercenary', 'Scout', 'Volunteer', 'Sentinel', 'Magician', 'Charmer', 'Conjurer', 'Enchanter', 'Genius', 'Illusionist', 'Prophet', 'Seer', 'Shaman', 'Siren', 'Wizard', 'Mage', 'Master', 'Mastermind', 'Prodigy', 'Sage', 'Wonder', 'Wonderman', 'Whiz', 'Spectacle', 'Duke', 'Baron', 'Prince', 'Shield', 'Sword', 'Dagger', 'Trident', 'Knuckles', 'Daggers', 'Swordsman', 'Scimitar', 'Katana', 'Axeman', 'Scepter', 'Hammer', 'Gladiator', 'Shadow', 'Shade', 'Gloom', 'Spy', 'Agent', 'Mole', 'Vindicator', 'Captain', 'Chief', 'Doctor', 'General', 'Smasher', 'Spirit', 'Scorpion', 'Spider', 'Thief', 'Trickster', 'Artist', 'Bandit', 'Burglar', 'Cheat', 'Criminal', 'Crook', 'Robber', 'Hijacker', 'Arsonist', 'Mugger', 'Pirate', 'Plunderer', 'Swindler', 'Murderer', 'Beast', 'Barbarian', 'Creature', 'Fiend', 'Gargoyle', 'Monster', 'Swine', 'Banshee', 'Daemon', 'Demon', 'Devil', 'Haunt', 'Soul', 'Specter', 'Vampire', 'Shadow', 'Wraith', 'Zombie', 'Robot', 'Android', 'Clown', 'Buffoon', 'Comedian', 'Comic', 'Fool', 'Gangster', 'Harlequin', 'Jester', 'Joker', 'Mime', 'Prankster', 'Brute', 'Freak', 'Giant', 'Horror', 'Savage', 'Villain', 'Fiend', 'Ninja', 'Assassin'];
  const nm3 = ['Doctor', 'Captain', 'Doctor', 'Captain', 'Lord', 'Professor', 'Professor', 'Mister', 'Commander', 'Master', 'Agent', 'Master', 'Agent', 'Count', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['Absent', 'Accidental', 'Adorable', 'Aggressive', 'Alien', 'Ancient', 'Anxious', 'Aqua', 'Armed', 'Awful', 'Bad', 'Bitter', 'Bizarre', 'Black', 'Bloody', 'Blue', 'Brass', 'Broad', 'Broken', 'Bronze', 'Careless', 'Colossal', 'Confident', 'Copper', 'Cowardly', 'Crazy', 'Creepy', 'Crimson', 'Cruel', 'Curious', 'Dangerous', 'Dark', 'Dazzling', 'Dead', 'Defiant', 'Delirious', 'Deranged', 'Devilish', 'Diamond', 'Dirty', 'Dramatic', 'Drunk', 'Drunken', 'Dynamic', 'Eager', 'Earth', 'Earthen', 'Electric', 'Electron', 'Elegent', 'Elite', 'Excited', 'False', 'Famous', 'Fearless', 'Fiery', 'Filthy', 'Fire', 'First', 'Flashy', 'Fluffy', 'Foolish', 'Frightening', 'Frozen', 'Galactic', 'Ghastly', 'Ghost', 'Giant', 'Gifted', 'Gigantic', 'Golden', 'Goofy', 'Gray', 'Greasy', 'Green', 'Groovy', 'Gruesome', 'Grumpy', 'Gullible', 'Handy', 'Harsh', 'Hissing', 'Hollow', 'Huge', 'Hungry', 'Hypnotic', 'Ice', 'Impossible', 'Incredible', 'Infamous', 'Iron', 'Jagged', 'Jealous', 'Jolly', 'Last', 'Laughing', 'Lazy', 'Lean', 'Light', 'Limping', 'Little', 'Lonely', 'Loud', 'Lucky', 'Lying', 'Macho', 'Mammoth', 'Maniacal', 'Marked', 'Massive', 'Mean', 'Messy', 'Mighty', 'Misty', 'Molten', 'Mute', 'Mysterious', 'Nasty', 'Naughty', 'Needy', 'Nervous', 'Nifty', 'Nimble', 'Nuclear', 'Obnoxious', 'Odd', 'Old', 'Opposite', 'Orange', 'Outrageous', 'Parallel', 'Pathetic', 'Pink', 'Poor', 'Proud', 'Psychotic', 'Purple', 'Puzzled', 'Puzzling', 'Quantum', 'Quick', 'Quiet', 'Rabid', 'Rapid', 'Rare', 'Real', 'Rebelious', 'Red', 'Repulsive', 'Rotten', 'Ruthless', 'Sad', 'Scarlet', 'Scary', 'Second', 'Secret', 'Shaggy', 'Short', 'Sick', 'Silver', 'Simple', 'Skilled', 'Smelly', 'Smiling', 'Smooth', 'Special', 'Spectacular', 'Spooky', 'Storm', 'Swift', 'Talented', 'Terrible', 'Terrific', 'Thin', 'Third', 'Threatening', 'Thunder', 'Towering', 'Tricky', 'Ugly', 'Undefeated', 'Unknown', 'Unnatural', 'Unusual', 'Unwritten', 'Upset', 'Vengeful', 'Venomous', 'Violent', 'Violet', 'Voiceless', 'Vulgar', 'Wacky', 'Wandering', 'Water', 'Whispering', 'Wicked', 'Wild', 'Wise', 'Wretched', 'Wrong', 'Yellow', 'Young'];
  const nm5 = ['Masquerade', 'Robin', 'Owl', 'Vulture', 'Condor', 'Falcon', 'Merlin', 'Eagle', 'Hawk', 'Swan', 'Ibis', 'Hornet', 'Crane', 'Snipe', 'Macaw', 'Butcher', 'Amazon', 'Nighthawk', 'Nightowl', 'Monarch', 'Lord', 'Crow', 'Raven', 'Swallow', 'Starling', 'Sparrow', 'Ant', 'Antman', 'Wasp', 'Phoenix', 'Waspman', 'Grasshopper', 'Cricket', 'Beetle', 'Assassin', 'Mantis', 'Mothman', 'Moth', 'Termite', 'Dragonfly', 'Elephantman', 'Wolf', 'Wolfman', 'Bat', 'Rhino', 'Rhinoceros', 'Cat', 'Catman', 'Lynx', 'Gorilla', 'Leopard', 'Armadillo', 'Bear', 'Tiger', 'Lion', 'Fox', 'Raccoon', 'Ox', 'Oxman', 'Puma', 'Panther', 'Wolverine', 'Cheetah', 'Mongoose', 'Jackal', 'Hornet', 'Warrior', 'Fighter', 'Angel', 'Devil', 'Slayer', 'Killer', 'Soldier', 'Marksman', 'Sniper', 'Commando', 'Gunner', 'Mercenary', 'Scout', 'Volunteer', 'Sentinel', 'Magician', 'Charmer', 'Conjurer', 'Enchanter', 'Genius', 'Illusionist', 'Prophet', 'Seer', 'Shaman', 'Siren', 'Wizard', 'Mage', 'Master', 'Mastermind', 'Prodigy', 'Sage', 'Wonder', 'Wonderman', 'Whiz', 'Spectacle', 'Duke', 'Baron', 'Prince', 'Shield', 'Sword', 'Dagger', 'Trident', 'Knuckles', 'Daggers', 'Swordsman', 'Scimitar', 'Katana', 'Axeman', 'Scepter', 'Hammer', 'Gladiator', 'Shadow', 'Shade', 'Gloom', 'Spy', 'Agent', 'Mole', 'Vindicator', 'Captain', 'Chief', 'Doctor', 'General', 'Smasher', 'Spirit', 'Scorpion', 'Spider', 'Thief', 'Trickster', 'Artist', 'Bandit', 'Burglar', 'Cheat', 'Criminal', 'Crook', 'Robber', 'Hijacker', 'Arsonist', 'Mugger', 'Pirate', 'Plunderer', 'Swindler', 'Murderer', 'Beast', 'Barbarian', 'Creature', 'Fiend', 'Gargoyle', 'Monster', 'Swine', 'Banshee', 'Daemon', 'Demon', 'Devil', 'Haunt', 'Soul', 'Specter', 'Vampire', 'Shadow', 'Wraith', 'Zombie', 'Robot', 'Android', 'Clown', 'Buffoon', 'Comedian', 'Comic', 'Fool', 'Gangster', 'Harlequin', 'Jester', 'Joker', 'Mime', 'Prankster', 'Brute', 'Freak', 'Giant', 'Horror', 'Savage', 'Villain', 'Fiend', 'Ninja', 'Assassin', 'Scorpion', 'Spider'];
  const nm6 = ['Dire Shade', 'Corruption Claw', 'The Granite Menace', 'Herald of Ashes', 'The Blood Smith', 'Necro', 'The Annihilator', 'Experion', 'Catastrophe', 'Megahertz', 'Razor Claw', 'The Black Falcon', 'The Human Blade', 'Soul Slayer', 'Surge', 'Disembowler', 'Exterminator', 'Micros', 'Dr. Wrath', 'Crimson Demon', 'Sonic Shriek', 'Rewind', 'Freeze Frame', 'Tecton', 'Titanio', 'Solar Flare', 'Alley Cat', 'Snow Storm', 'Absolute Zero', 'Remix', 'Alpha Dog', 'Brain Matter', 'Dark Warrior', 'The Crusher', 'Incognito', 'Gray Granite', 'Gamma', 'Spark Plug', 'Heat-Wave', 'Xavior', 'Abominabel Angel', 'Anne Arkist', 'Anne-Amy', 'Antbeast', 'Aquila', 'Arachnis', 'Atomic Machine', 'B.B. Gunne', 'Benny Diction', 'Black Cat', 'Black Death', 'Black Striker', 'Black Thunder', 'Bloodwing', 'Bohr the Constrictor', 'Bonestealer', 'Bonkers', 'Brain Freeze', 'Bronze Butcher', 'Brutal Beast', 'Candycane', 'Captain Darkness', 'Captain Skull', 'Celticknot', 'Count Von Drake', 'Crazy Clawz', 'Crazy Coyote', 'Crimson Wings', 'Dark Elf', 'Darkstar', 'Doctor Genius', 'Doctor Hurricane', 'Doctor Milipede', 'Earthshatter', 'Electric Elephant', 'Eva Destruction', 'Explode', 'Faker', 'Fallen Angel', 'Faye Tality', 'Faye Tallflawes', 'Firedagger', 'Fritzy', 'Galactic Knight', 'Giganto', 'Heart Stealer', 'Hissing Hornet', 'Jumpdeath', 'Knitemare', 'Lead Beetle', 'Lethal Lynx', 'Lucky Dice', 'Mad Mongrel', 'Mas Terr', 'Masked Stranger', 'Master Merlin', 'Master Morpher', 'Melle Licious', 'Meltdown ', 'Mental Mercenary', 'Minimizer', 'Miss Behave', 'Miss Calculated', 'Miss Chievous', 'Miss Direction', 'Miss Fortune', 'Miss Guidance', 'Miss Ion', 'Miss Judgement', 'Miss Masher', 'Molly Qule', 'Moonsable', 'Moonstar', 'Mystery Shadow', 'Necrotic Ninja', 'Nightfish', 'Octopus', 'Open Wound', 'Parallel Plunderer', 'Peculiar', 'Phantom Clown', 'Phantom Trickster', 'Phorus', 'Plague', 'Poison Child', 'Poison Dart', 'Poison Princess', 'Professor Mutant', 'Psychotic Savage', 'Queen Cobra', 'Quizzer', 'Rancid Randy', 'Rattlesnake', 'Revenge', 'Rick O\'Shay', 'Royal Kill', 'Ruth Lessheart', 'Savage Starling', 'Scarlet Scorpion', 'Shade', 'Shadow Elite', 'Silver Shadow', 'Silverclaw', 'Sly', 'Spinebreaker', 'Staker', 'Stormer', 'Story Breaker', 'Strange Illusion', 'Tasmanian Tiger', 'The Assassin', 'The Freak', 'The Hood', 'The Poltergeist', 'The Reaper', 'The Shadow Stranger', 'The Wanderer', 'Timber', 'Vampirellina', 'Venom Hunter', 'Venom-Blast', 'Viktorai', 'Void', 'Voluptuous', 'Vortex', 'Warped Warrior', 'Wicked Wasp'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = `${sample(nm1)} ${sample(nm2)}`;
    } else if (i < 8) {
      names = `${sample(nm3)} ${sample(nm4)} ${sample(nm5)}`;
    } else {
      names = sample(nm6);
    }
    return names;
  }
}
module.exports = villains
