var sample = require ('lodash.sample')

export default function ents() {
  let names;
  const nm1 = ['Algal', 'Bare', 'Barren', 'Dense', 'Dwarf', 'Hard', 'Pygmy', 'Scorched', 'Scorch', 'Scrub', 'Tender', 'Wild', 'Nettle', 'Shadow', 'Splint', 'Splinter', 'Mad', 'Gentle', 'Spring', 'Summer', 'Winter', 'Autumn', 'Fall', 'Snow', 'Iron', 'Wise', 'Clever', 'Cunning', 'Sharp', 'Bland', 'Taint', 'Tainted', 'Mellow', 'Weeping', 'Tender', 'Kind', 'Soft', 'Quiet', 'Silent', 'Mild', 'Bitter', 'Cruel', 'Mean', 'Vine', 'Black', 'Gray', 'Charred', 'Burn', 'Burned'];
  const nm2 = ['acorn', 'alder', 'ash', 'beech', 'birch', 'cedar', 'cherry', 'cypress', 'elm', 'fir', 'juniper', 'larch', 'locust', 'maple', 'oak', 'peach', 'pine', 'poplar', 'spruce', 'walnut', 'willow', 'yew', 'tree', 'hazel', 'twig', 'trunk', 'root', 'nut', 'trunk', 'herb', 'limb', 'beard', 'leaf', 'husk', 'spur', 'sprout', 'wood', 'stump', 'thorn', 'talon', 'blossom', 'leg', 'legs', 'limbs', 'tendril'];
  const nm3 = ['Acorn', 'Alder', 'Ash', 'Beech', 'Birch', 'Cedar', 'Cherry', 'Cypress', 'Elm', 'Fir', 'Juniper', 'Larch', 'Locust', 'Maple', 'Oak', 'Oaken', 'Peach', 'Pine', 'Poplar', 'Spruce', 'Walnut', 'Willow', 'Yew', 'Tree', 'Hazel', 'Thistle'];
  const nm4 = ['bark', 'beard', 'blade', 'bramble', 'nettle', 'spray', 'bush', 'shell', 'husk', 'claw', 'fang', 'talon', 'paw', 'crown', 'fern', 'copse', 'scrub', 'flesh', 'fury', 'grove', 'covert', 'stand', 'herb', 'leaf', 'growl', 'howl', 'trunk', 'root', 'bellow', 'roar', 'snarl', 'shade', 'shadow', 'flower', 'blossom', 'limb', 'lock', 'spine', 'pad', 'needle', 'stalk', 'splint', 'splinter', 'spur', 'twig', 'stub', 'stump', 'shrub', 'skin', 'thorn', 'tip', 'tooth', 'twig', 'wood', 'burn', 'scar', 'eye', 'brow', 'sprout', 'tendril'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1) + sample(nm2);
    } else {
      names = sample(nm3) + sample(nm4);
    }
    return names;
  }
}
