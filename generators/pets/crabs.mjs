var sample = require ('lodash.sample')

function crabs() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['AlPinchino', 'Alpha', 'Apollo', 'Aqua', 'Atoll', 'Aura', 'Azure', 'BamBam', 'Barnacle', 'Biscuit', 'Blazer', 'Blister', 'Boulder', 'Bounce', 'Butters', 'Buttons', 'Carapace', 'Checkers', 'Chester', 'Chowder', 'Chuck', 'Clacker', 'Clawford', 'Claws', 'Clawz', 'Clicker', 'Clipper', 'Clyde', 'Cobbler', 'CrabCake', 'Crabanasty', 'Crabapple', 'Crabbitz', 'Crabohydrate', 'Crack', 'Crane', 'Crash', 'Cruncher', 'Crunchy', 'Crust', 'Crusty', 'DrZoidberg', 'Dude', 'Escape', 'Fang', 'Fangs', 'Fuzzball', 'Fuzzy', 'Gil', 'Gillian', 'Grabandhold', 'Grabby', 'Grabs', 'Griper', 'Grouch', 'Grouchy', 'Grump', 'Hardhead', 'Hardy', 'Herman', 'Hermi', 'Hermie', 'Hermit', 'Hermy', 'Hifive', 'Hyde', 'Kingler', 'Krabby', 'Krabs', 'Kraken', 'Kuka', 'MaxPayne', 'Muffin', 'Nemo', 'Neptune', 'Nero', 'Norbert', 'Omega', 'Onyx', 'Orea', 'Pace', 'Patty', 'Payne', 'Piccolo', 'Pinch', 'Pincher', 'Pinchino', 'Pinchy', 'Pinstripe', 'Pointy', 'Popeye', 'Poseidon', 'Prawn', 'Ranger', 'Reef', 'Ripple', 'Riptide', 'Rock', 'Rocklobster', 'Rocky', 'Rogue', 'Salt', 'Salty', 'Saul', 'Scratch', 'Scratchy', 'Sebastion', 'Sellfish', 'Shabby', 'Shade', 'Shadow', 'Shamrock', 'Sheldon', 'Shell', 'Shelly', 'Sideways', 'Skipper', 'SmallFry', 'Snap', 'Snapp', 'Snappah', 'Snapper', 'Snappy', 'Snaps', 'Snipper', 'Snippy', 'Snips', 'Snookums', 'Softshell', 'Softy', 'Sparkle', 'Spike', 'Spikes', 'Spot', 'Surf', 'Surimi', 'Twitch', 'Waddle', 'Waddles', 'Wave', 'Waves', 'Whopper', 'Wobble', 'Wobbles', 'Zippy', 'Zoidberg', 'iClaw', 'iPinch', 'iSnap'];
  const nm2 = ['Aphrodite', 'Arial', 'Aqua', 'Ariel', 'Atolle', 'Aura', 'Ava', 'Aurora', 'Ava', 'Azure', 'Azura', 'Bashful', 'Bashy', 'Bash', 'Bay', 'Baye', 'Biscuit', 'Bitsy', 'Star', 'Bo', 'Bounce', 'Bouncy', 'Brooke', 'Bubble', 'Bubbles', 'Button', 'Buttons', 'Cake', 'Cami', 'Carapace', 'Checkers', 'Chesty', 'Clawford', 'Snips', 'Snippy', 'Snipsnap', 'Clacks', 'Clacky', 'Clawdia', 'Clawdis', 'Claws', 'Clips', 'Clippy', 'Cobble', 'Coco', 'Coral', 'Cora', 'Cakes', 'Crabine', 'Crabina', 'Crackle', 'Crackles', 'Crash', 'Crunchey', 'Dazzle', 'Dora', 'Sandy', 'Nemo', 'Escape', 'Fuzzball', 'Fuzzy', 'Gill', 'Gilly', 'Grabby', 'Grabbis', 'Gripes', 'Hermine', 'Hermione', 'Hermi', 'Hermilia', 'Hermyse', 'Pinchy', 'Itsy', 'Krabsy', 'MsKraken', 'Lily', 'Lime', 'MrsCrabapple', 'Crabapple', 'Muffin', 'MsPinch', 'MrsKrabs', 'Oasis', 'Oceane', 'Oceana', 'Pinchys', 'Pinchy', 'Pique', 'Pixie', 'Princess', 'Rainbow', 'Sparkle', 'Reefe', 'Ria', 'Ripples', 'Ripple', 'Rogue', 'Shadow', 'Shade', 'Ruby', 'Sally', 'Sandy', 'Sapphire', 'Scratches', 'Biscuit', 'Shelly', 'Shine', 'Snappy', 'Snips', 'Snaps', 'Sparkles', 'Sparkle', 'Spot', 'Dot', 'Dots', 'Surimi', 'Waddles', 'Wobble', 'Wobbles', 'Waddle'];
  {
    if (type === 1) {
      names = sample(nm2);
    } else {
      names = sample(nm1);
    }
    return names;
  }
}
module.exports = crabs
