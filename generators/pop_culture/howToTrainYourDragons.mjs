var sample = require ('lodash.sample')

export default function howToTrainYourDragons() {
  let names;
  const nm1 = ['Adder', 'Alder', 'Arrow', 'Bewilder', 'Blaze', 'Blubber', 'Bone', 'Bull', 'Burro', 'Change', 'Cloud', 'Crooked', 'Dark', 'Dawn', 'Day', 'Dead', 'Death', 'Desert', 'Doom', 'Dragon', 'Dread', 'Dream', 'Dull', 'Dusk', 'Elder', 'Eternal', 'Fire', 'Flame', 'Flapper', 'Flutter', 'Forever', 'Frost', 'Fury', 'Ghost', 'Gloom', 'Glow', 'Gore', 'Great', 'Grim', 'Ground', 'Hallow', 'Hell', 'Hollow', 'Hook', 'Hypno', 'Inferno', 'Light', 'Little', 'Mild', 'Mud', 'Night', 'Rage', 'Razor', 'Rocket', 'Rumble', 'Sand', 'Sea', 'Shadow', 'Shiver', 'Shock', 'Silver', 'Snow', 'Song', 'Speed', 'Storm', 'Swift', 'Sword', 'Talon', 'Terror', 'Thunder', 'Torch', 'Tranquil', 'Tumble', 'Venom', 'Whirl', 'Wild'];
  const nm2 = ['back', 'beast', 'belly', 'breath', 'claw', 'cutter', 'drum', 'eye', 'eyes', 'fang', 'flight', 'glider', 'grunt', 'horn', 'hunter', 'jaw', 'jumper', 'nose', 'paw', 'ripper', 'roar', 'smasher', 'song', 'striker', 'tail', 'tongue', 'tooth', 'twister', 'whip', 'wing'];
  const nm3 = ['Awe', 'Bait', 'Bead', 'Bellow', 'Bigby', 'Blare', 'Blue', 'Bluster', 'Bolt', 'Bones', 'Boom', 'Boulder', 'Burst', 'Buster', 'Chase', 'Chinook', 'Cobble', 'Cower', 'Crackle', 'Crest', 'Crimson', 'Crisscross', 'Crumb', 'Curly', 'Dart', 'Dash', 'Dire', 'Ditch', 'Dodge', 'Dozer', 'Dread', 'Dribble', 'Drifter', 'Drool', 'Droplet', 'Dusty', 'Echo', 'Eclipse', 'Enigma', 'Fawn', 'Fay', 'Feather', 'Feint', 'Flare', 'Flash', 'Flinch', 'Flo', 'Fluff', 'Flurry', 'Gale', 'Ghast', 'Ghost', 'Glider', 'Glimmer', 'Glint', 'Glum', 'Gnaw', 'Gobbles', 'Goof', 'Gravel', 'Grim', 'Grime', 'Grouch', 'Grumpy', 'Grunt', 'Gust', 'Haze', 'Helix', 'Hogger', 'Honey', 'Hue', 'Itchy', 'Jitters', 'Juke', 'Knot', 'Looper', 'Magma', 'Manes', 'Muds', 'Munchy', 'Muzzle', 'Needle', 'Nibble', 'Night', 'Nimbles', 'Nip', 'Nozzle', 'Paradox', 'Pebble', 'Phanom', 'Pickle', 'Pinch', 'Pitch', 'Plume', 'Plummet', 'Prickle', 'Puds', 'Pugs', 'Quill', 'Rainbow', 'Riddle', 'Rumble', 'Saliva', 'Sally', 'Sapphire', 'Scruffy', 'Scuddle', 'Shade', 'Shadow', 'Shay', 'Shuffle', 'Sidestep', 'Skip', 'Sky', 'Skyler', 'Slobber', 'Slush', 'Smudge', 'Snare', 'Sneak', 'Snookum', 'Snout', 'Snowflake', 'Soot', 'Sparkle', 'Spice', 'Squall', 'Squeak', 'Sting', 'Storm', 'Subs', 'Surge', 'Surly', 'Swifty', 'Tails', 'Thorn', 'Thunder', 'Tickles', 'Tingle', 'Trace', 'Tremble', 'Tumble', 'Twilight', 'Twinkle', 'Twist', 'Twister', 'Typhoon', 'Umbra', 'Veil', 'Whallop', 'Whammy', 'Wiggle', 'Wriggle', 'Zap', 'Zigzag', 'Zip'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1) + sample(nm2);
    } else {
      names = sample(nm3);
    }
    return names;
  }
}
