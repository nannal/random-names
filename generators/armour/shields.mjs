export default function shields() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const nm1 = ['Aegeus', 'Alpha', 'Amnesia', 'Anguish', 'Apocalypse', 'Armageddon', 'Barrage', 'Bear', 'Behemoth', 'Berg', 'Betrayal', 'Blackest Heart', 'Blackout', 'Blazeguard', 'Blind Hate', 'Blind Hatred', 'Bloodlust', 'Bombardment', 'Broken Promise', 'Calamity', 'Cataclysm', 'Catastrophe', 'Cerberus', 'Chaos', 'Chasm', 'Coliseum', 'Colossus', 'Combustion', 'Cometfall', 'Convergence', 'Curator', 'Cyclone', 'Darkheart', 'Darkness', 'Dawn', 'Dawnbreaker', 'Dawnguard', 'Death\'s Bargain', 'Death\'s Deflection', 'Death\'s Touch', 'Deathgate', 'Deluge', 'Desolation', 'Despair', 'Destiny\'s Song', 'Destiny\'s Will', 'Devinity', 'Divine Light', 'Domination', 'Doom', 'Dragonheart', 'Dragonscale', 'Due Diligence', 'Dusk', 'Ebony', 'Echo', 'Eclipse', 'Enforcer', 'Enigma', 'Epilogue', 'Eruption', 'Eulogy', 'Extinction', 'Face of Death', 'Face of Insanity', 'Faithkeeper', 'Fate', 'Final Favor', 'Ghostwalker', 'Glacier', 'Glimmer', 'Gloom', 'Headache', 'Hell\'s Scream', 'Hero\'s Calling', 'Hero\'s Stand', 'Hero\'s Surrender', 'Honor\'s Call', 'Honor\'s End', 'Honor\'s Grasp', 'Honor\'s Guard', 'Honor\'s Pride', 'Honor\'s Will', 'Hope', 'Interrogator', 'Ironbark', 'Ivory', 'Justice', 'King\'s Defender', 'King\'s Honor', 'King\'s Legacy', 'Kingdom\'s Heart', 'Kingdom\'s Honor', 'Kingdom\'s Pride', 'Knight\'s Fall', 'Knightfall', 'Lament', 'Last Rites', 'Last Words', 'Lazarus', 'Lightbringer', 'Limbo', 'Lionheart', 'Lost Paradise', 'Loyalty', 'Maelstrom', 'Malice', 'Mercy', 'Misery\'s End', 'Monster', 'Moonlight', 'Nethersbane', 'Night\'s End', 'Night\'s Fall', 'Nightbane', 'Nightfall', 'Nirvana', 'Oathbreaker', 'Oathkeeper', 'Oathsworn', 'Oblivion', 'Ogre', 'Omega', 'Overture', 'Painkiller', 'Path of Exile', 'Peace Maker', 'Peacekeeper', 'Perfect Storm', 'Permission', 'Persuasion', 'Prelude', 'Pride\'s Honor', 'Prologue', 'Purifier', 'Rage', 'Ragnarok', 'Rand', 'Reckoning', 'Red Dwarf', 'Redemption', 'Reign Breaker', 'Reign Maker', 'Remorse', 'Requiem', 'Retirement', 'Ruin', 'Rumpel Steelskin', 'Sanctify', 'Scar', 'Selfreflection', 'Shepherd', 'Shroud', 'Sierra', 'Silence', 'Silverlight', 'Skullcrusher', 'Stalker', 'Starlight', 'Steelskin', 'Storm', 'Storm Breaker', 'Stormbringer', 'Stormcaller', 'Sunward', 'Supernova', 'Supremacy', 'Suspension', 'Swan Song', 'The Abyss', 'The Ambassador', 'The Barricade', 'The Beast', 'The Black Hole', 'The Blockade', 'The Boon', 'The Brute', 'The Curator', 'The End', 'The Grand Slam', 'The Iron Maid', 'The Iron Maiden', 'The Keeper', 'The Light', 'The Mirror', 'The Mountain', 'The Observer', 'The Oculus', 'The Righteous', 'The Sentinel', 'The Sentry', 'The Shadow', 'The Titan', 'The Voice', 'The Void', 'Thunder', 'Thundercloud', 'Torrent', 'Tranquility', 'Treachery', 'Trinity', 'Triumph', 'Truthbreaker', 'Typhoon', 'Tyranny', 'Vacancy', 'Vacuum', 'Valkyrie', 'Vanquisher', 'Vengeance', 'Vigilant', 'Vigilante', 'Voice of Honor', 'Voice of Insanity', 'Voice of Madness', 'Voice of Pride', 'Voice of Reason', 'Volcano', 'Vortex', 'Wall of Honor', 'Wall of Insanity', 'Wall of Madness', 'Wall of Pain', 'Wall of Pride', 'Wall of Sorrow', 'Wall of the Dead', 'Warcry', 'Warmonger', 'Warsong', 'Willbreaker', 'Wisdom\'s Grasp', 'Wisdom\'s Hold', 'Wit\'s End', 'Witherbrand'];
  const nm2 = ['Ancient', 'Antique', 'Arcane', 'Atuned', 'Bandit\'s', 'Baneful', 'Banished', 'Barbarian', 'Barbaric', 'Battleworn', 'Blood Infused', 'Blood-Forged', 'Bloodcursed', 'Bloodied', 'Bloodlord\'s', 'Bloodsurge', 'Bloodvenom', 'Brutal', 'Brutality', 'Burnished', 'Captain\'s', 'Cataclysm', 'Cataclysmic', 'Challenger', 'Challenger\'s', 'Champion', 'Champion\'s', 'Cold-Forged', 'Conqueror', 'Conqueror\'s', 'Corroded', 'Corrupted', 'Crazed', 'Crying', 'Curator', 'Cursed', 'Curved', 'Dancing', 'Defender', 'Defender\'s', 'Defiled', 'Deluded', 'Demonic', 'Deserted', 'Desire\'s', 'Desolation', 'Destiny\'s', 'Dire', 'Doom', 'Doom\'s', 'Dragon\'s', 'Dragonbreath', 'Ebon', 'Eerie', 'Enchanted', 'Engraved', 'Eternal', 'Exiled', 'Extinction', 'Faith\'s', 'Faithful', 'Fancy', 'Fearful', 'Feral', 'Fierce', 'Fiery', 'Fire Infused', 'Firesoul', 'Flimsy', 'Forsaken', 'Fortune\'s', 'Fragile', 'Frail', 'Frenzied', 'Frost', 'Frozen', 'Furious', 'Fusion', 'Ghastly', 'Ghost-Forged', 'Ghostly', 'Gladiator', 'Gladiator\'s', 'Grieving', 'Guard\'s', 'Guardian\'s', 'Hailstorm', 'Hateful', 'Haunted', 'Heartless', 'Hero', 'Hero\'s', 'Hollow', 'Holy', 'Honed', 'Honor\'s', 'Hope\'s', 'Hopeless', 'Howling', 'Hungering', 'Improved', 'Incarnated', 'Infused', 'Inherited', 'Isolated', 'Jade Infused', 'Judgement', 'Keeper\'s', 'Knightly', 'Legionnaire\'s', 'Liar\'s', 'Lich', 'Lightning', 'Lonely', 'Loyal', 'Lustful', 'Lusting', 'Malevolent', 'Malicious', 'Malignant', 'Massive', 'Mended', 'Mercenary', 'Military', 'Misfortune\'s', 'Mourning', 'Nightmare', 'Oathkeeper\'s', 'Ominous', 'Peacekeeper', 'Peacekeeper\'s', 'Phantom', 'Polished', 'Possessed', 'Pride\'s', 'Prideful', 'Primal', 'Prime', 'Primitive', 'Promised', 'Protector\'s', 'Proud', 'Recruit\'s', 'Reforged', 'Reincarnated', 'Relentless', 'Remorseful', 'Renewed', 'Renovated', 'Replica', 'Restored', 'Retribution', 'Ritual', 'Roaring', 'Ruby Infused', 'Rune-Forged', 'Savage', 'Sentinel', 'Shadow', 'Silent', 'Singing', 'Sinister', 'Skyfall', 'Smooth', 'Soldier\'s', 'Solitude\'s', 'Sorrow\'s', 'Soul', 'Soul Infused', 'Soul-Forged', 'Soulless', 'Spectral', 'Spiteful', 'Storm', 'Storm-Forged', 'Stormfury', 'Stormguard', 'Terror', 'Thirsting', 'Thirsty', 'Thunder', 'Thunder-Forged', 'Thunderfury', 'Thunderguard', 'Thundersoul', 'Thunderstorm', 'Timeworn', 'Tormented', 'Trainee\'s', 'Treachery\'s', 'Twilight', 'Twilight\'s', 'Twisted', 'Tyrannical', 'Undead', 'Unholy', 'Vanquisher', 'Vengeance', 'Vengeful', 'Venom', 'Vicious', 'Victor', 'Vindication', 'Vindicator', 'Vindictive', 'Volcanic', 'Vowed', 'War-Forged', 'Warden\'s', 'Warlord\'s', 'Warp', 'Warped', 'Warrior', 'Warrior\'s', 'Whistling', 'Wicked', 'Wind\'s', 'Wind-Forged', 'Windsong', 'Woeful', 'Wrathful', 'Wretched', 'Yearning', 'Zealous'];
  const nm3 = ['Adamantite', 'Ashwood', 'Bone', 'Bronze', 'Bronzed', 'Copper', 'Ivory', 'Ebon', 'Glass', 'Golden', 'Hardwood', 'Iron', 'Ironbark', 'Maple', 'Mithril', 'Oak', 'Obsidian', 'Redwood', 'Silver', 'Skeletal', 'Steel', 'Titanium', 'Warpwood', 'Willow', 'Yew'];
  const nm4 = ['Shield', 'Bulwark', 'Carapace', 'Ward', 'Wall', 'Visage', 'Armament', 'Barrier', 'Greatshield', 'Barricade', 'Blockade', 'Kite Shield', 'Buckler', 'Heater', 'Light Shield', 'Heavy Shield', 'Tower Shield', 'Shield Wall', 'Buffer', 'Guard', 'Aegis', 'Warden', 'Guardian', 'Keeper', 'Defender', 'Bastion'];
  const nm5 = ['Aegis', 'Angel', 'Armament', 'Bane', 'Barricade', 'Barrier', 'Bastion', 'Blockade', 'Bond', 'Boon', 'Breaker', 'Bringer', 'Buckler', 'Buffer', 'Bulwark', 'Call', 'Caretaker', 'Champion', 'Conqueror', 'Conservator', 'Crusader', 'Cry', 'Cunning', 'Curator', 'Dawn', 'Defender', 'Defiler', 'Deflector', 'Destroyer', 'Emissary', 'Ender', 'Favor', 'Ferocity', 'Foe', 'Gift', 'Glory', 'Greatshield', 'Guard', 'Guardian', 'Heater', 'Heavy Shield', 'Heirloom', 'Hero', 'Hope', 'Incarnation', 'Keeper', 'Kite Shield', 'Last Hope', 'Last Stand', 'Legacy', 'Light Shield', 'Memory', 'Might', 'Oath', 'Pact', 'Pledge', 'Promise', 'Protection', 'Protector', 'Reach', 'Savagery', 'Secret', 'Shepherd', 'Shield', 'Shield Wall', 'Soul', 'Steward', 'Terror', 'Token', 'Tower Shield', 'Tribute', 'Vengeance', 'Vindicator', 'Visage', 'Voice', 'Wall', 'Ward', 'Warden', 'Whisper', 'Wit'];
  const nm6 = ['of Agony', 'of Ancient Power', 'of Anguish', 'of Ashes', 'of Assassins', 'of Black Magic', 'of Blessed Fortune', 'of Blessings', 'of Blight', 'of Blood', 'of Bloodlust', 'of Broken Bones', 'of Broken Dreams', 'of Broken Families', 'of Burdens', 'of Chaos', 'of Closing Eyes', 'of Conquered Worlds', 'of Corruption', 'of Cruelty', 'of Cunning', 'of Dark Magic', 'of Dark Souls', 'of Darkness', 'of Decay', 'of Deception', 'of Degradation', 'of Delusions', 'of Denial', 'of Desecration', 'of Diligence', 'of Dismay', 'of Dragonsouls', 'of Due Diligence', 'of Echoes', 'of Ended Dreams', 'of Ending Hope', 'of Ending Misery', 'of Eternal Bloodlust', 'of Eternal Damnation', 'of Eternal Glory', 'of Eternal Justice', 'of Eternal Rest', 'of Eternal Sorrow', 'of Eternal Struggles', 'of Eternity', 'of Executions', 'of Faded Memories', 'of Fallen Souls', 'of Fools', 'of Frost', 'of Frozen Hells', 'of Fury', 'of Giants', 'of Giantslaying', 'of Grace', 'of Grieving Widows', 'of Hate', 'of Hatred', 'of Hell\'s Games', 'of Hellish Torment', 'of Heroes', 'of Holy Might', 'of Honor', 'of Hope', 'of Horrid Dreams', 'of Horrors', 'of Illuminated Dreams', 'of Illumination', 'of Immortality', 'of Inception', 'of Infinite Trials', 'of Insanity', 'of Invocation', 'of Justice', 'of Light\'s Hope', 'of Lost Comrades', 'of Lost Hope', 'of Lost Voices', 'of Lost Worlds', 'of Magic', 'of Mercy', 'of Misery', 'of Mountains', 'of Mourning', 'of Mystery', 'of Necromancy', 'of Nightmares', 'of Oblivion', 'of Perdition', 'of Phantoms', 'of Power', 'of Pride', 'of Pride\'s Fall', 'of Putrefaction', 'of Reckoning', 'of Redemption', 'of Regret', 'of Riddles', 'of Secrecy', 'of Secrets', 'of Shadow Strikes', 'of Shadows', 'of Shifting Sands', 'of Shifting Worlds', 'of Silence', 'of Slaughter', 'of Souls', 'of Stealth', 'of Storms', 'of Subtlety', 'of Suffering', 'of Suffering\'s End', 'of Summoning', 'of Terror', 'of Thunder', 'of Time-Lost Memories', 'of Timeless Battles', 'of Titans', 'of Torment', 'of Traitors', 'of Trembling Hands', 'of Trials', 'of Truth', 'of Twilight\'s End', 'of Twisted Visions', 'of Unholy Blight', 'of Unholy Might', 'of Vengeance', 'of Visions', 'of Wasted Time', 'of Widows', 'of Wizardry', 'of Woe', 'of Wraiths', 'of Zeal', 'of the Ancients', 'of the Banished', 'of the Basilisk', 'of the Beast', 'of the Blessed', 'of the Breaking Storm', 'of the Brotherhood', 'of the Burning Sun', 'of the Caged Mind', 'of the Cataclysm', 'of the Champion', 'of the Claw', 'of the Corrupted', 'of the Covenant', 'of the Crown', 'of the Damned', 'of the Daywalker', 'of the Dead', 'of the Depth', 'of the Dreadlord', 'of the Earth', 'of the East', 'of the Emperor', 'of the Empty Void', 'of the End', 'of the Enigma', 'of the Fallen', 'of the Falling Sky', 'of the Flame', 'of the Forest', 'of the Forgotten', 'of the Forsaken', 'of the Gladiator', 'of the Harvest', 'of the Immortal', 'of the Incoming Storm', 'of the Insane', 'of the King', 'of the Lasting Night', 'of the Leviathan', 'of the Light', 'of the Lion', 'of the Lionheart', 'of the Lone Victor', 'of the Lone Wolf', 'of the Lost', 'of the Moon', 'of the Moonwalker', 'of the Night Sky', 'of the Night', 'of the Nightstalker', 'of the North', 'of the Occult', 'of the Oracle', 'of the Phoenix', 'of the Plague', 'of the Prince', 'of the Protector', 'of the Queen', 'of the Serpent', 'of the Setting Sun', 'of the Shadows', 'of the Sky', 'of the South', 'of the Stars', 'of the Storm', 'of the Summoner', 'of the Sun', 'of the Sunwalker', 'of the Talon', 'of the Undying', 'of the Victor', 'of the Void', 'of the West', 'of the Whispers', 'of the Wicked', 'of the Wind', 'of the Wolf', 'of the World', 'of the Wretched'];
  const nm7 = ['Aegeus', 'Alpha', 'Amnesia', 'Anguish', 'Apocalypse', 'Armageddon', 'Barrage', 'Bear', 'Behemoth', 'Berg', 'Betrayal', 'Blackout', 'Blazeguard', 'Blind Hate', 'Blind Hatred', 'Bloodlust', 'Bombardment', 'Broken Promise', 'Calamity', 'Cataclysm', 'Catastrophe', 'Cerberus', 'Chaos', 'Chasm', 'Coliseum', 'Colossus', 'Combustion', 'Cometfall', 'Convergence', 'Curator', 'Cyclone', 'Darkheart', 'Darkness', 'Dawn', 'Dawnbreaker', 'Dawnguard', 'Death\'s Bargain', 'Deathgate', 'Deluge', 'Desolation', 'Despair', 'Destiny\'s Song', 'Destiny\'s Will', 'Devinity', 'Divine Light', 'Domination', 'Doom', 'Dragonheart', 'Dragonscale', 'Due Diligence', 'Dusk', 'Ebony', 'Echo', 'Eclipse', 'Enforcer', 'Enigma', 'Epilogue', 'Eruption', 'Eulogy', 'Extinction', 'Faithkeeper', 'Fate', 'Final Favor', 'Ghostwalker', 'Glacier', 'Glimmer', 'Gloom', 'Headache', 'Hell\'s Scream', 'Hero\'s Calling', 'Hero\'s Stand', 'Hero\'s Surrender', 'Honor\'s Call', 'Honor\'s End', 'Honor\'s Grasp', 'Honor\'s Guard', 'Honor\'s Pride', 'Honor\'s Will', 'Hope', 'Interrogator', 'Ironbark', 'Ivory', 'Justice', 'King\'s Defender', 'King\'s Honor', 'King\'s Legacy', 'Kingdom\'s Heart', 'Kingdom\'s Honor', 'Kingdom\'s Pride', 'Knight\'s Fall', 'Knightfall', 'Lament', 'Last Rites', 'Last Words', 'Lazarus', 'Lightbringer', 'Limbo', 'Lionheart', 'Lost Paradise', 'Loyalty', 'Maelstrom', 'Malice', 'Mercy', 'Misery\'s End', 'Monster', 'Moonlight', 'Nethersbane', 'Night\'s End', 'Night\'s Fall', 'Nightbane', 'Nightfall', 'Nirvana', 'Oathbreaker', 'Oathkeeper', 'Oathsworn', 'Oblivion', 'Ogre', 'Omega', 'Overture', 'Painkiller', 'Path of Exile', 'Peace Maker', 'Peacekeeper', 'Perfect Storm', 'Permission', 'Persuasion', 'Prelude', 'Pride\'s Honor', 'Prologue', 'Purifier', 'Rage', 'Ragnarok', 'Rand', 'Reckoning', 'Red Dwarf', 'Redemption', 'Reign Breaker', 'Reign Maker', 'Remorse', 'Requiem', 'Retirement', 'Ruin', 'Sanctify', 'Scar', 'Shepherd', 'Shroud', 'Sierra', 'Silence', 'Silverlight', 'Skullcrusher', 'Stalker', 'Starlight', 'Steelskin', 'Storm', 'Storm Breaker', 'Stormbringer', 'Stormcaller', 'Sunward', 'Supernova', 'Supremacy', 'Suspension', 'Swan Song', 'The Abyss', 'The Ambassador', 'The Barricade', 'The Beast', 'The Black Hole', 'The Blockade', 'The Boon', 'The Brute', 'The Curator', 'The End', 'The Grand Slam', 'The Iron Maid', 'The Iron Maiden', 'The Keeper', 'The Light', 'The Mirror', 'The Mountain', 'The Observer', 'The Oculus', 'The Righteous', 'The Sentinel', 'The Sentry', 'The Shadow', 'The Titan', 'The Voice', 'The Void', 'Thunder', 'Thundercloud', 'Torrent', 'Tranquility', 'Treachery', 'Trinity', 'Triumph', 'Truthbreaker', 'Typhoon', 'Tyranny', 'Vacancy', 'Vacuum', 'Valkyrie', 'Vanquisher', 'Vengeance', 'Vigilant', 'Vigilante', 'Voice of Honor', 'Voice of Insanity', 'Voice of Madness', 'Voice of Pride', 'Voice of Reason', 'Volcano', 'Vortex', 'Warcry', 'Warmonger', 'Warsong', 'Willbreaker', 'Wisdom\'s Grasp', 'Wisdom\'s Hold', 'Wit\'s End', 'Witherbrand'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 3) {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    } else if (i < 5) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = `${nm2[rnd]} ${nm4[rnd2]}`;
    } else if (i < 7) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      names = `${nm2[rnd]} ${nm3[rnd2]} ${nm4[rnd3]}`;
    } else {
      rnd = Math.floor(Math.random() * nm7.length);
      rnd2 = Math.floor(Math.random() * nm5.length);
      rnd3 = Math.floor(Math.random() * nm6.length);
      names = `${nm7[rnd]}, ${nm5[rnd2]} ${nm6[rnd3]}`;
    }
    return names;
  }
}