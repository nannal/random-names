var sample = require ('lodash.sample')

export default function daggers() {
  let names;
  const nm1 = ['Tie Breaker', 'Redemption', 'Laceration', 'Forever', 'Silver Slicer', 'Eternity', 'Goodbye', 'Abyssal Shard', 'Aetherius', 'Agatha', 'Wyrmtooth', 'Alpha', 'Amnesia', 'Amnesty', 'Anarchy', 'Anduril', 'Anger�s Tear', 'Angerfang', 'Apocalypse', 'Armageddon', 'Ashrune', 'Backtwister', 'Barb', 'Betrayal', 'Betrayer', 'Blackfang', 'Blackout', 'Blacktalon', 'Blade of a Thousand Cuts', 'Blazefury', 'Blind Justice', 'Blindstrike', 'Blink', 'Blinkstrike', 'Blood Weeper', 'Bloodquench', 'Bloodsipper', 'Bloodweep', 'Bonescraper', 'Bonespike', 'Brainpicker', 'Broken Promise', 'Brutality', 'Cataclysm', 'Catastrophe', 'Celeste', 'Chaos', 'Chisel', 'Cometfell', 'Convergence', 'Crisscross', 'Crucifix', 'Darkheart', 'Darkness', 'Dawn', 'Death\'s Bite', 'Death\'s Kiss', 'Death\'s Sting', 'Deathraze', 'Decimation', 'Dementia', 'Desolation', 'Despair', 'Destiny\'s Song', 'Devine', 'Dirge', 'Dissector', 'Divinity', 'Doomblade', 'Doombringer', 'Doomspike', 'Dragonclaw', 'Dragonfang', 'Dragontooth', 'Draughtbane', 'Due Diligence', 'Dustbringer', 'Ebony', 'Echo', 'Eclipse', 'Edge of Eternity', 'Edge of Insanity', 'Edge of Time', 'Endbringer', 'Enigma', 'Epilogue', 'Eternal Rest', 'Extinction', 'Faithkeeper', 'Fate', 'Fear', 'Felstriker', 'Fleshrender', 'Fleshshaper', 'Flicker', 'Frenzy', 'Frightalon', 'Fury', 'Garotte', 'Ghost Reaver', 'Ghost Shard', 'Ghostwalker', 'Gladius', 'Glimmer', 'Grasscutter', 'Grieving Blade', 'Gutrender', 'Gutwrencher', 'Harmony', 'Hatred\'s Bite', 'Heartpierce', 'Heartrazor', 'Heartseeker', 'Heartshiver', 'Heartstriker', 'Hell\'s Scream', 'Hellfire', 'Hollow Silence', 'Honor\'s Call', 'Hope\'s End', 'Hysteria', 'Icefall', 'Incision', 'Infamy', 'Infinity', 'Insanity', 'Interrogator', 'Ivory', 'Justice', 'Kingsbane', 'Kingsfall', 'Kinslayer', 'Knight\'s Fall', 'Knightfall', 'Lament', 'Last Rites', 'Last Words', 'Lazarus', 'Lifedrinker', 'Lightbane', 'Lightning', 'Limbo', 'Lobotomizer', 'Loyalty', 'Lynch', 'Maelstrom', 'Malice', 'Mangler', 'Massacre', 'Mercy', 'Meteor', 'Midnight', 'Moonlight', 'Mournblade', 'Murder', 'Mutilator', 'Nail', 'Narcoleptic', 'Needle', 'Nemesis', 'Nethersbane', 'Night\'s Edge', 'Night\'s Fall', 'Nightbane', 'Nightbite', 'Nightcrackle', 'Nightfall', 'Nightkiss', 'Nimble', 'Nirvana', 'Oathbreaker', 'Oathkeeper', 'Oblivion', 'Omega', 'Omen', 'Peacekeeper', 'Persuasion', 'Phantom', 'Phantom Shard', 'Phantomstrike', 'Phobia', 'Piece Maker', 'Prick', 'Purify', 'Quicksilver', 'Rage', 'Ragespike', 'Reaper', 'Reckoning', 'Remorse', 'Requiem', 'Riddle', 'Rigormortis', 'Sacrifice', 'Sanguine', 'Savagery', 'Scalpel', 'Scar', 'Scarlet', 'Seethe', 'Severance', 'Shadow Strike', 'Shadowbite', 'Shadowfall', 'Shadowkiss', 'Shadowrazor', 'Shadowshiver', 'Shadowsong', 'Silence', 'Silencer', 'Silver Saber', 'Silverlight', 'Siphon', 'Slander', 'Slice of Life', 'Solarflare', 'Spiderfang', 'Spike', 'Spineripper', 'Spiritsever', 'Spiteblade', 'Stalker', 'Starlight', 'Starshard', 'Stickler', 'Sting', 'Stinger', 'Storm', 'Stormbringer', 'Stormcaller', 'Stormtip', 'Striker', 'Sun Strike', 'Sunflare', 'Sunshard', 'Suspension', 'Swan Song', 'Teaser', 'The Black Blade', 'The End', 'The Facelifter', 'The Sleeper', 'The Stake', 'The Unmaker', 'The Void', 'Thorn', 'Thunder', 'Timeslicer', 'Toothpick', 'Torment', 'Treachery', 'Trickster', 'Trinity', 'Twilight', 'Twinkle', 'Twister', 'Twitch', 'Tyrhung', 'Valkyrie', 'Vengeance', 'Venom', 'Venombite', 'Venomkiss', 'Venomshank', 'Venomtip', 'Warmonger', 'Widow Maker', 'Widowkiller', 'Widowmaker', 'Winterthorn'];
  const nm2 = ['Ancient', 'Anguish\'', 'Annihilation', 'Antique', 'Apocalypse', 'Apocalyptic', 'Arcane', 'Arched', 'Assassination', 'Atuned', 'Bandit\'s', 'Baneful', 'Banished', 'Barbarian', 'Barbaric', 'Battleworn', 'Blazefury', 'Blood Infused', 'Blood-Forged', 'Bloodcursed', 'Bloodied', 'Bloodlord\'s', 'Bloodsurge', 'Bloodvenom', 'Bonecarvin', 'Brutal', 'Brutality', 'Burnished', 'Cataclysm', 'Cataclysmic', 'Cold-Forged', 'Corroded', 'Corrupted', 'Crazed', 'Crying', 'Cursed', 'Curved', 'Dancing', 'Dark', 'Darkness', 'Defiled', 'Defiling', 'Deluded', 'Deserted', 'Desire\'s', 'Desolation', 'Destiny\'s', 'Diabolical', 'Dire', 'Doom', 'Doom\'s', 'Dragon\'s', 'Eerie', 'Enchanted', 'Engraved', 'Eternal', 'Executing', 'Exiled', 'Extinction', 'Faith\'s', 'Faithful', 'Fancy', 'Fearful', 'Feral', 'Ferocious', 'Fierce', 'Fiery', 'Fire Infused', 'Fireguard', 'Firesoul', 'Firestorm', 'Flaming', 'Flimsy', 'Forsaken', 'Fortune\'s', 'Foul', 'Fragile', 'Frail', 'Frenzied', 'Frost', 'Frozen', 'Furious', 'Fusion', 'Ghastly', 'Ghost-Forged', 'Ghostly', 'Gladiator', 'Gladiator\'s', 'Gleaming', 'Glinting', 'Greedy', 'Grieving', 'Grim', 'Guard\'s', 'Guardian\'s', 'Hailstorm', 'Hateful', 'Haunted', 'Heartless', 'Heinous', 'Hollow', 'Holy', 'Honed', 'Honor\'s', 'Hope\'s', 'Hopeless', 'Howling', 'Hungering', 'Improved', 'Impure', 'Incarnated', 'Infused', 'Inherited', 'Isolated', 'Jade Infused', 'Judgement', 'Knightly', 'Legionnaire\'s', 'Liar\'s', 'Lich', 'Lightning', 'Lonely', 'Loyal', 'Lustful', 'Lusting', 'Mage\'s', 'Malevolent', 'Malicious', 'Malificent', 'Malignant', 'Massive', 'Mended', 'Mercenary', 'Military', 'Misfortune\'s', 'Misty', 'Moonlit', 'Mourning', 'Nightmare', 'Oathkeeper\'s', 'Ominous', 'Peacekeeper\'s', 'Phantom', 'Polished', 'Possessed', 'Pride\'s', 'Prideful', 'Primitive', 'Promised', 'Protector\'s', 'Proud', 'Pure', 'Putrid', 'Raging', 'Recruit\'s', 'Reforged', 'Reincarnated', 'Relentless', 'Remorseful', 'Renewed', 'Renovated', 'Replica', 'Restored', 'Retribution', 'Ritual', 'Roaring', 'Ruby Infused', 'Rune-Forged', 'Rusty', 'Savage', 'Shadow', 'Sharpened', 'Silent', 'Singed', 'Singing', 'Sinister', 'Smooth', 'Solitude\'s', 'Sorrow\'s', 'Soul', 'Soul Infused', 'Soul-Forged', 'Soulcursed', 'Soulless', 'Spectral', 'Spectral-Forged', 'Spiteful', 'Storm', 'Storm-Forged', 'Stormfury', 'Stormguard', 'Terror', 'Thirsting', 'Thirsty', 'Thunder', 'Thunder-Forged', 'Thunderfury', 'Thunderguard', 'Thundersoul', 'Thunderstorm', 'Timeworn', 'Tormented', 'Trainee\'s', 'Treachery\'s', 'Twilight', 'Twilight\'s', 'Twisted', 'Tyrannical', 'Undead', 'Unholy', 'Vengeance', 'Vengeful', 'Venom', 'Vicious', 'Vile', 'Vindication', 'Vindictive', 'Void', 'Volcanic', 'Vowed', 'War-Forged', 'Warlord\'s', 'Warp', 'Warped', 'Whistling', 'Wicked', 'Wind\'s', 'Wind-Forged', 'Windsong', 'Woeful', 'Wrathful', 'Wretched', 'Yearning', 'Zealous'];
  const nm3 = ['Adamantite', 'Bronze', 'Copper', 'Diamond', 'Ebon', 'Ebonsteel', 'Ebony', 'Glass', 'Gold', 'Iron', 'Ironbark', 'Ivory', 'Mithril', 'Obsidian', 'Onyx', 'Phantomsteel', 'Shadowsteel', 'Silver', 'Skeletal', 'Steel'];
  const nm4 = ['Bayonet', 'Blade', 'Carver', 'Dagger', 'Deflector', 'Dirk', 'Doomblade', 'Ebonblade', 'Etcher', 'Fang', 'Guardian', 'Knife', 'Kris', 'Mageblade', 'Piercer', 'Protector', 'Quickblade', 'Razor', 'Reaver', 'Sabre', 'Scalpel', 'Sculptor', 'Shanker', 'Shiv', 'Shortblade', 'Shortsword', 'Skewer', 'Slicer', 'Spellblade', 'Stiletto', 'Swiftblade'];
  const nm5 = ['Annihilation', 'Bayonet', 'Betrayer', 'Blade', 'Blessed Blade', 'Blood Blade', 'Bond', 'Boon', 'Breaker', 'Bringer', 'Butcher', 'Call', 'Carver', 'Champion', 'Conqueror', 'Crusader', 'Cry', 'Cunning', 'Dagger', 'Dark Blade', 'Dawn', 'Defender', 'Defiler', 'Deflector', 'Destroyer', 'Dirk', 'Doomblade', 'Ebonblade', 'Edge', 'Ender', 'Etcher', 'Executioner', 'Fang', 'Favor', 'Ferocity', 'Foe', 'Gift', 'Glory', 'Guardian', 'Heirloom', 'Hope', 'Incarnation', 'Jaws', 'Knife', 'Kris', 'Last Hope', 'Last Stand', 'Legacy', 'Mageblade', 'Memory', 'Might', 'Oath', 'Pact', 'Piercer', 'Pledge', 'Promise', 'Protector', 'Quickblade', 'Ravager', 'Razor', 'Reach', 'Reaper', 'Reaver', 'Runed Blade', 'Saber', 'Sabre', 'Savagery', 'Scalpel', 'Sculptor', 'Secret', 'Shanker', 'Shiv', 'Shortblade', 'Skewer', 'Slayer', 'Slicer', 'Soul', 'Spellblade', 'Spine', 'Stiletto', 'Swiftblade', 'Terror', 'Token', 'Tribute', 'Vengeance', 'Voice', 'Warblade', 'Whisper', 'Wit'];
  const nm6 = ['of Agony', 'of Ancient Power', 'of Anguish', 'of Ashes', 'of Assassins', 'of Black Magic', 'of Blessed Fortune', 'of Blessings', 'of Blight', 'of Blood', 'of Bloodlust', 'of Broken Bones', 'of Broken Dreams', 'of Broken Families', 'of Burdens', 'of Chaos', 'of Closing Eyes', 'of Conquered Worlds', 'of Corruption', 'of Cruelty', 'of Cunning', 'of Dark Magic', 'of Dark Souls', 'of Darkness', 'of Decay', 'of Deception', 'of Degradation', 'of Delusions', 'of Denial', 'of Desecration', 'of Diligence', 'of Dismay', 'of Dragonsouls', 'of Due Diligence', 'of Echoes', 'of Ended Dreams', 'of Ending Hope', 'of Ending Misery', 'of Eternal Bloodlust', 'of Eternal Damnation', 'of Eternal Glory', 'of Eternal Justice', 'of Eternal Rest', 'of Eternal Sorrow', 'of Eternal Struggles', 'of Eternity', 'of Executions', 'of Faded Memories', 'of Fallen Souls', 'of Fools', 'of Frost', 'of Frozen Hells', 'of Fury', 'of Giants', 'of Giantslaying', 'of Grace', 'of Grieving Widows', 'of Hate', 'of Hatred', 'of Hell\'s Games', 'of Hellish Torment', 'of Heroes', 'of Holy Might', 'of Honor', 'of Hope', 'of Horrid Dreams', 'of Horrors', 'of Illuminated Dreams', 'of Illumination', 'of Immortality', 'of Inception', 'of Infinite Trials', 'of Insanity', 'of Invocation', 'of Justice', 'of Light\'s Hope', 'of Lost Comrades', 'of Lost Hope', 'of Lost Voices', 'of Lost Worlds', 'of Magic', 'of Mercy', 'of Misery', 'of Mountains', 'of Mourning', 'of Mystery', 'of Necromancy', 'of Nightmares', 'of Oblivion', 'of Perdition', 'of Phantoms', 'of Power', 'of Pride', 'of Pride\'s Fall', 'of Putrefaction', 'of Reckoning', 'of Redemption', 'of Regret', 'of Riddles', 'of Secrecy', 'of Secrets', 'of Shadow Strikes', 'of Shadows', 'of Shifting Sands', 'of Shifting Worlds', 'of Silence', 'of Slaughter', 'of Souls', 'of Stealth', 'of Storms', 'of Subtlety', 'of Suffering', 'of Suffering\'s End', 'of Summoning', 'of Terror', 'of Thunder', 'of Time-Lost Memories', 'of Timeless Battles', 'of Titans', 'of Torment', 'of Traitors', 'of Trembling Hands', 'of Trials', 'of Truth', 'of Twilight\'s End', 'of Twisted Visions', 'of Unholy Blight', 'of Unholy Might', 'of Vengeance', 'of Visions', 'of Wasted Time', 'of Widows', 'of Wizardry', 'of Woe', 'of Wraiths', 'of Zeal', 'of the Ancients', 'of the Banished', 'of the Basilisk', 'of the Beast', 'of the Blessed', 'of the Breaking Storm', 'of the Brotherhood', 'of the Burning Sun', 'of the Caged Mind', 'of the Cataclysm', 'of the Champion', 'of the Claw', 'of the Corrupted', 'of the Covenant', 'of the Crown', 'of the Damned', 'of the Daywalker', 'of the Dead', 'of the Depth', 'of the Dreadlord', 'of the Earth', 'of the East', 'of the Emperor', 'of the Empty Void', 'of the End', 'of the Enigma', 'of the Fallen', 'of the Falling Sky', 'of the Flame', 'of the Forest', 'of the Forgotten', 'of the Forsaken', 'of the Gladiator', 'of the Harvest', 'of the Immortal', 'of the Incoming Storm', 'of the Insane', 'of the King', 'of the Lasting Night', 'of the Leviathan', 'of the Light', 'of the Lion', 'of the Lionheart', 'of the Lone Victor', 'of the Lone Wolf', 'of the Lost', 'of the Moon', 'of the Moonwalker', 'of the Night Sky', 'of the Night', 'of the Nightstalker', 'of the North', 'of the Occult', 'of the Oracle', 'of the Phoenix', 'of the Plague', 'of the Prince', 'of the Protector', 'of the Queen', 'of the Serpent', 'of the Setting Sun', 'of the Shadows', 'of the Sky', 'of the South', 'of the Stars', 'of the Storm', 'of the Summoner', 'of the Sun', 'of the Sunwalker', 'of the Talon', 'of the Undying', 'of the Victor', 'of the Void', 'of the West', 'of the Whispers', 'of the Wicked', 'of the Wind', 'of the Wolf', 'of the World', 'of the Wretched'];
  const nm7 = ['Tie Breaker', 'Laceration', 'Forever', 'Silver Slicer', 'Eternity', 'Goodbye', 'Aetherius', 'Agatha', 'Alpha', 'Amnesia', 'Amnesty', 'Anarchy', 'Anduril', 'Anger�s Tear', 'Angerfang', 'Apocalypse', 'Armageddon', 'Ashrune', 'Backtwister', 'Barb', 'Betrayal', 'Betrayer', 'Blackfang', 'Blackout', 'Blacktalon', 'Blazefury', 'Blind Justice', 'Blindstrike', 'Blink', 'Blinkstrike', 'Blood Weeper', 'Bloodquench', 'Bloodsipper', 'Bloodweep', 'Bonescraper', 'Bonespike', 'Brainpicker', 'Broken Promise', 'Brutality', 'Cataclysm', 'Catastrophe', 'Celeste', 'Chaos', 'Chisel', 'Cometfell', 'Convergence', 'Crisscross', 'Crucifix', 'Darkheart', 'Darkness', 'Dawn', 'Death\'s Bite', 'Death\'s Kiss', 'Death\'s Sting', 'Deathraze', 'Decimation', 'Dementia', 'Desolation', 'Despair', 'Devine', 'Dirge', 'Dissector', 'Divinity', 'Doomblade', 'Doombringer', 'Doomspike', 'Dragonclaw', 'Dragonfang', 'Dragontooth', 'Draughtbane', 'Due Diligence', 'Dustbringer', 'Echo', 'Eclipse', 'Edge of Eternity', 'Edge of Insanity', 'Edge of Time', 'Endbringer', 'Enigma', 'Epilogue', 'Eternal Rest', 'Extinction', 'Faithkeeper', 'Fate', 'Fear', 'Felstriker', 'Fleshrender', 'Fleshshaper', 'Flicker', 'Frenzy', 'Frightalon', 'Fury', 'Garotte', 'Ghost Reaver', 'Ghost Shard', 'Ghostwalker', 'Glimmer', 'Gutrender', 'Gutwrencher', 'Harmony', 'Hatred\'s Bite', 'Heartpierce', 'Heartrazor', 'Heartseeker', 'Heartshiver', 'Heartstriker', 'Hell\'s Scream', 'Hellfire', 'Honor\'s Call', 'Hope\'s End', 'Hysteria', 'Icefall', 'Incision', 'Infamy', 'Infinity', 'Insanity', 'Interrogator', 'Ivory', 'Justice', 'Kingsbane', 'Kingsfall', 'Kinslayer', 'Knight\'s Fall', 'Knightfall', 'Lament', 'Last Rites', 'Last Words', 'Lazarus', 'Lifedrinker', 'Lightbane', 'Lightning', 'Limbo', 'Lobotomizer', 'Lynch', 'Maelstrom', 'Malice', 'Mangler', 'Massacre', 'Mercy', 'Meteor', 'Midnight', 'Moonlight', 'Mournblade', 'Murder', 'Mutilator', 'Nail', 'Narcoleptic', 'Needle', 'Nemesis', 'Nethersbane', 'Night\'s Edge', 'Night\'s Fall', 'Nightbane', 'Nightbite', 'Nightcrackle', 'Nightfall', 'Nightkiss', 'Nimble', 'Nirvana', 'Oathbreaker', 'Oathkeeper', 'Oblivion', 'Omega', 'Omen', 'Peacekeeper', 'Persuasion', 'Phantom', 'Phantom Shard', 'Phantomstrike', 'Phobia', 'Piece Maker', 'Prick', 'Purify', 'Quicksilver', 'Rage', 'Ragespike', 'Reaper', 'Reckoning', 'Remorse', 'Requiem', 'Riddle', 'Rigormortis', 'Sacrifice', 'Sanguine', 'Savagery', 'Scalpel', 'Scar', 'Scarlet', 'Seethe', 'Severance', 'Shadow Strike', 'Shadowbite', 'Shadowfall', 'Shadowkiss', 'Shadowrazor', 'Shadowshiver', 'Shadowsong', 'Silence', 'Silencer', 'Silver Saber', 'Silverlight', 'Siphon', 'Slander', 'Slice of Life', 'Solarflare', 'Spiderfang', 'Spike', 'Spineripper', 'Spiritsever', 'Spiteblade', 'Stalker', 'Starlight', 'Starshard', 'Stickler', 'Sting', 'Stinger', 'Storm', 'Stormbringer', 'Stormcaller', 'Stormtip', 'Striker', 'Sun Strike', 'Sunflare', 'Sunshard', 'Suspension', 'Swan Song', 'Teaser', 'The Black Blade', 'The End', 'The Facelifter', 'The Sleeper', 'The Taker', 'The Undertaker', 'The Stake', 'The Unmaker', 'The Void', 'Thorn', 'Thunder', 'Timeslicer', 'Toothpick', 'Torment', 'Treachery', 'Trickster', 'Trinity', 'Twilight', 'Twinkle', 'Twister', 'Twitch', 'Tyrhung', 'Valkyrie', 'Vengeance', 'Venom', 'Venombite', 'Venomkiss', 'Venomshank', 'Venomtip', 'Warmonger', 'Widow Maker', 'Widowkiller', 'Widowmaker', 'Winterthorn'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 3) {
      names = sample(nm1);
    } else if (i < 5) {
      names = `${sample(nm2)} ${sample(nm4)}`;
    } else if (i < 7) {
      names = `${sample(nm2)} ${sample(nm3)} ${sample(nm4)}`;
    } else {
      names = `${sample(nm7)}, ${sample(nm5)} ${sample(nm6)}`;
    }
    return names;
  }
}
