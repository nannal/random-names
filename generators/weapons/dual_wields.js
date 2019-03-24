function generator$weapons$dual_wields() {
  const nm1 = ['Mercy and Malice', 'Song and Symphony', 'Love and Hate', 'King and Queen', 'Check and Mate', 'Savior and Saboteur', 'Crime and Corruption', 'Slam and Shear', 'Venom and Poison', 'Sunrise and Sundown', 'Sunrise and Nightfall', 'Oathkeeper and Oathbreaker', 'Alpha and Omega', 'Abide and Endure', 'Action and Reaction', 'Aim and Maim', 'Amaze and Astonish', 'Amuse and Annoy', 'Angel and Demon', 'Anger and Rage', 'Anguish and Agony', 'Anguish and Gloom', 'Apathy and Lethargy', 'Arise and Awake', 'Ascend and Descend', 'Assault and Battery', 'Back and Forth', 'Bane and Burden', 'Bane and Pain', 'Bark and Bite', 'Beauty and Glamour', 'Bemuse and Bewilder', 'Bend and Break', 'Black and White', 'Blessing and Curse', 'Blight and Darkness', 'Blink and Shrink', 'Blink and Sink', 'Blink and Think', 'Blood and Gore', 'Blood and Guts', 'Blunt and Dull', 'Bore and Tire', 'Bread and Butter', 'Breaking and Entering', 'Bribe and Bait', 'Brother and Sister', 'Bubble and Squeak', 'Burn and Bury', 'Cause and Causality', 'Cease and Desist', 'Chaos and Disorder', 'Charm and Chain', 'Charm and Grace', 'Cheap and Easy', 'Choice and Consequence', 'Choice and Truth', 'Chop and Cleave', 'Cinders and Ashes', 'Clean and Clear', 'Clutter and Cloud', 'Command and Control', 'Confuse and Confound', 'Courage and Conscience', 'Courage and Consequence', 'Courage and Conviction', 'Courage and Fear', 'Crack and Smack', 'Crash and Smash', 'Criss and Cross', 'Croak and Choke', 'Cunning and Instinct', 'Dark and Light', 'Darkness and Lightness', 'Dead and Alive', 'Death and Decay', 'Death and Destruction', 'Deceit and Duplicity', 'Deep and Dark', 'Demon and Daemon', 'Deny and Disown', 'Destiny and Downfall', 'Devide and Conquer', 'Devil and Demon', 'Disrupt and Despair', 'Disrupt and Disturb', 'Distract and Deceit', 'Distract and Disorient', 'Do and Die', 'Do and Don\'t', 'Doom and Despair', 'Dream and Fantasy', 'Dusk and Dawn', 'Earth and Moon', 'Ebb and Flow', 'Ebony and Ivory', 'End and Hope', 'Enthrall and Enchant', 'Fact and Certainty', 'Faith and Tribute', 'Fame and Fortune', 'Fame and Glory', 'Fast and Furious', 'Fear and Tremble', 'Fiend and Foe', 'Fiend and Freak', 'Fight and Flight', 'Fight and Fright', 'Fire and Brimstone', 'Fire and Ice', 'Fire and Smoke', 'Flash and Dash', 'Fling and Fly', 'Flip and Flop', 'Foresight and Hindsight', 'Forever and Always', 'Freak and Monster', 'Freak and Villain', 'Fright and Flight', 'Frost and Bite', 'Fuddle and Faze', 'Fury and Frenzy', 'Ghost and Ghoul', 'Gin and Tonic', 'Glamour and Glitz', 'Glamour and Grace', 'Gloat and Relish', 'Glory and Triumph', 'Glut and Gorge', 'Gore and Carnage', 'Grace and Favour', 'Greed and Gluttony', 'Heart and Courage', 'Heart and Soul', 'Hero and Villain', 'Hide and Seek', 'High and Mighty', 'Hit and Run', 'Hither and Thither', 'Honesty and Fairness', 'Honor and Homage', 'Honor and Pride', 'Honor and Truth', 'Hope and Fear', 'Howl and Roar', 'Hurt and Deceit', 'Husband and Wife', 'Hustle and Bustle', 'Illusion and Delusion', 'In and Out', 'Input and Output', 'Invisible and Invincible', 'Itchy and Scatchy', 'Jab and Jag', 'Jekyll and Hyde', 'Joy and Despair', 'Joy and Sorrow', 'Judge and Jury', 'Kicking and Screaming', 'Kill and Joy', 'Kill and Thrill', 'Kiss and Hug', 'Kiss and Kill', 'Kneel and Obey', 'Knock and Block', 'Knock and Rock', 'Lady and the Tramp', 'Law and Order', 'Lead and Follow', 'Leap and Twirl', 'Lie and Deceit', 'Light and Darkness', 'Lineage and Legacy', 'Lost and Found', 'Love and Hate', 'Love and Peace', 'Master and Commander', 'Master and Slave', 'Mayhem and Madness', 'Melody and Harmony', 'Mesmerize and Hypnotize', 'Might and Majesty', 'Mischief and Malice', 'Mislead and Mystify', 'Morning and Evening', 'Mourning and Misery', 'Muffle and Ruffle', 'Night and Day', 'Nip and Tuck', 'Nook and Cranny', 'Now and Forever', 'Now and Never', 'Numb and Dazed', 'Oath and Honor', 'Overwhelm and Overpower', 'Pain and Devestation', 'Pain and Gain', 'Pain and Killer', 'Pain and Relief', 'Pain and Remorse', 'Pain and Suffering', 'Payment and Debt', 'Phantom and Specter', 'Phoenix and Fiend', 'Pierce and Plunge', 'Pillage and Plunder', 'Plague and Pest', 'Plan and Foil', 'Please and Release', 'Please and Thank You', 'Pleasure and Pain', 'Plot and Twist', 'Power and Prominence', 'Praise and Award', 'Praise and Glory', 'Praise and Prestige', 'Prayer and Curse', 'Prayer and Praise', 'Prestige and Glory', 'Prick and Stick', 'Prince and Princess', 'Problem and Solution', 'Profit and Gain', 'Progress and Regress', 'Promise and Betrayal', 'Pump and Dump', 'Puzzle and Perplex', 'Quake and Shake', 'Quake and Tremble', 'Question and Answer', 'Raise and Praise', 'Razor and Burn', 'Reap and Harvest', 'Reap and Sow', 'Refuse and Deny', 'Refuse and Reject', 'Reign and Control', 'Reign and Fall', 'Reign and Serve', 'Reign and Snow', 'Reign and Thunder', 'Reject and Repel', 'Rend and Sunder', 'Renew and Rebirth', 'Rest and Rejoice', 'Revel and Relish', 'Riddle and Enigma', 'Rip and Snarl', 'Rip and Tear', 'Ripper and Reaper', 'Rise and Fall', 'Rise and Shine', 'Rot and Spoil', 'Rumble and Roar', 'Rush and Push', 'Sadness and Sorrow', 'Salt and Pepper', 'Search and Destroy', 'Secret and Riddle', 'Secrets and Lies', 'Seduce and Induce', 'Seduce and Strangle', 'Seek and Destroy', 'Serve and Protect', 'Serve and Satisfy', 'Shade and Shadow', 'Shake and Stagger', 'Shank and Shiv', 'Shank and Slice', 'Shimmer and Glimmer', 'Shiver and Quiver', 'Show and Tell', 'Sick and Twisted', 'Silent and Deadly', 'Sin and Sorrow', 'Sink and Subdue', 'Slash and Crash', 'Slash and Dash', 'Slice and Dice', 'Slip and Dip', 'Slow and Steady', 'Soul and Shadow', 'Soul and Specter', 'Spark and Glimmer', 'Spark and Hustle', 'Spirit and Specter', 'Spring and Fall', 'Stand and Deliver', 'Still and Silent', 'Strength and Honor', 'Stroke and Dagger', 'Stun and Stagger', 'Submit and Surrender', 'Succumb and Submit', 'Sugar and Spice', 'Supply and Demand', 'Surprise and Wonder', 'Surrender and Succomb', 'Sweeper and Keeper', 'Teaser and Twister', 'Terror and Mayhem', 'Things and Stuff', 'Think and Sink', 'Thirst and Hunger', 'Thorn and Bloom', 'Thrust and Turn', 'Thunder and Lightning', 'Tickle and Tease', 'Tooth and Claw', 'Trap and Ambush', 'Trap and Decoy', 'Treachery and Deceit', 'Tremble and Tremor', 'Trial and Tribute', 'Tried and Tested', 'Trinket and Charm', 'Trinket and Trash', 'Trip and Trap', 'Trust and Endure', 'Truth and Fact', 'Truth and Fantasy', 'Truth and Lie', 'Twist and Turn', 'Ugly and Beauty', 'Use and Abuse', 'Valiant and Defiant', 'Vengeance and Glory', 'Victory and Defeat', 'Villain and Fiend', 'Vim and Vigor', 'Virtue and Faith', 'Virtue and Honor', 'Virtue and Purity', 'Virtue and Vice', 'Vision and Mirage', 'Watch and Weep', 'Whack and Crack', 'Whack and Smack', 'Wither and Die', 'Wonder and Sensation', 'Wraith and Wrath'];
  const nm2 = ['Axes', 'Betrayers', 'Blades', 'Blessed Blades', 'Blood Blades', 'Breakers', 'Bringers', 'Butchers', 'Carvers', 'Champions', 'Conquerors', 'Crusaders', 'Daggers', 'Dark Blades', 'Defenders', 'Defilers', 'Destroyers', 'Doomblades', 'Dual Blades', 'Dual Guns', 'Dual Swords', 'Edges', 'Etchers', 'Executioners', 'Favors', 'Foes', 'Gifts', 'Greatswords', 'Guardians', 'Guns', 'Hammers', 'Heirlooms', 'Jaws', 'Katanas', 'Legacies', 'Longblades', 'Longswords', 'Mageblades', 'Memories', 'Might', 'Oaths', 'Pacts', 'Pledges', 'Promises', 'Protectors', 'Quickblades', 'Rapiers', 'Ravagers', 'Razors', 'Reapers', 'Reavers', 'Runed Blades', 'Sabers', 'Scimitars', 'Sculptors', 'Secrets', 'Shortswords', 'Skewers', 'Slicers', 'Spellblades', 'Spines', 'Swiftblades', 'Swords', 'Tokens', 'Tributes', 'Twin Axes', 'Twin Blades', 'Twin Daggers', 'Twin Guns', 'Twin Hammers', 'Twin Pistols', 'Twin Swords', 'Twin Razors', 'Twins', 'Warblades', 'Warglaives', 'Whispers'];
  const nm3 = ['Agony', 'Ancient Power', 'Anguish', 'Ashes', 'Assassins', 'Black Magic', 'Blessed Fortune', 'Blessings', 'Blight', 'Blood', 'Bloodlust', 'Broken Bones', 'Broken Dreams', 'Broken Families', 'Burdens', 'Chaos', 'Closing Eyes', 'Conquered Worlds', 'Corruption', 'Cruelty', 'Cunning', 'Dark Magic', 'Dark Souls', 'Darkness', 'Decay', 'Deception', 'Degradation', 'Delusions', 'Denial', 'Desecration', 'Diligence', 'Dismay', 'Dragonsouls', 'Due Diligence', 'Echoes', 'Ended Dreams', 'Ending Hope', 'Ending Misery', 'Eternal Bloodlust', 'Eternal Damnation', 'Eternal Glory', 'Eternal Justice', 'Eternal Rest', 'Eternal Sorrow', 'Eternal Struggles', 'Eternity', 'Executions', 'Faded Memories', 'Fallen Souls', 'Fools', 'Frost', 'Frozen Hells', 'Fury', 'Giants', 'Giantslaying', 'Grace', 'Grieving Widows', 'Hate', 'Hatred', 'Hell\'s Games', 'Hellish Torment', 'Heroes', 'Holy Might', 'Honor', 'Hope', 'Horrid Dreams', 'Horrors', 'Illuminated Dreams', 'Illumination', 'Immortality', 'Inception', 'Infinite Trials', 'Insanity', 'Invocation', 'Justice', 'Light\'s Hope', 'Lost Comrades', 'Lost Hope', 'Lost Voices', 'Lost Worlds', 'Magic', 'Mercy', 'Misery', 'Mountains', 'Mourning', 'Mystery', 'Necromancy', 'Nightmares', 'Oblivion', 'Perdition', 'Phantoms', 'Power', 'Pride', 'Pride\'s Fall', 'Putrefaction', 'Reckoning', 'Redemption', 'Regret', 'Riddles', 'Secrecy', 'Secrets', 'Shadow Strikes', 'Shadows', 'Shifting Sands', 'Shifting Worlds', 'Silence', 'Slaughter', 'Souls', 'Stealth', 'Storms', 'Subtlety', 'Suffering', 'Suffering\'s End', 'Summoning', 'Terror', 'Thunder', 'Time-Lost Memories', 'Timeless Battles', 'Titans', 'Torment', 'Traitors', 'Trembling Hands', 'Trials', 'Truth', 'Twilight\'s End', 'Twisted Visions', 'Unholy Blight', 'Unholy Might', 'Vengeance', 'Visions', 'Wasted Time', 'Widows', 'Wizardry', 'Woe', 'Wraiths', 'Zeal', 'the Ancients', 'the Banished', 'the Basilisk', 'the Beast', 'the Blessed', 'the Breaking Storm', 'the Brotherhood', 'the Burning Sun', 'the Caged Mind', 'the Cataclysm', 'the Champion', 'the Claw', 'the Corrupted', 'the Covenant', 'the Crown', 'the Damned', 'the Daywalker', 'the Dead', 'the Depth', 'the Dreadlord', 'the Earth', 'the East', 'the Emperor', 'the Empty Void', 'the End', 'the Enigma', 'the Fallen', 'the Falling Sky', 'the Flame', 'the Forest', 'the Forgotten', 'the Forsaken', 'the Gladiator', 'the Harvest', 'the Immortal', 'the Incoming Storm', 'the Insane', 'the King', 'the Lasting Night', 'the Leviathan', 'the Light', 'the Lion', 'the Lionheart', 'the Lone Victor', 'the Lone Wolf', 'the Lost', 'the Moon', 'the Moonwalker', 'the Night Sky', 'the Night', 'the Nightstalker', 'the North', 'the Occult', 'the Oracle', 'the Phoenix', 'the Plague', 'the Prince', 'the Protector', 'the Queen', 'the Serpent', 'the Setting Sun', 'the Shadows', 'the Sky', 'the South', 'the Stars', 'the Storm', 'the Summoner', 'the Sun', 'the Sunwalker', 'the Talon', 'the Undying', 'the Victor', 'the Void', 'the West', 'the Whispers', 'the Wicked', 'the Wind', 'the Wolf', 'the World', 'the Wretched'];


  i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm1.length);
    if (i < 5) {
      names = nm1[rnd];
    } else {
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      names = `${nm1[rnd]}, ${nm2[rnd2]} of ${nm3[rnd3]}`;
    }
    return names;
  }
}
