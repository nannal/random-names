var sample = require ('lodash.sample')

function humanoids() {
  let name5;
  let name;
  let name2;
  let name3;
  let name4;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Two', 'Two', 'Two', 'Three', 'Four', 'Two'];
  const nm2 = ['beady', 'broad', 'bug-eyed', 'clear', 'close-set', 'dead', 'doe-eyed', 'enormous', 'giant', 'glassy', 'glowing', 'heavy', 'hollow', 'hooded', 'large', 'narrow', 'shiny', 'shuttered', 'small', 'sunken', 'thin', 'tiny', 'wide'];
  const nm3 = ['observe', 'study', 'watch', 'inspect', 'examine', 'monitor', 'survey', 'look at', 'view'];
  const nm4 = ['narrow', 'wide', 'broad', 'large', 'thin', 'deep', 'huge', 'bony'];
  const nm5 = ['big', 'broad', 'crooked', 'flat', 'gentle', 'large', 'narrow', 'pig-like', 'pointy', 'round', 'short', 'small', 'tiny', 'wide'];
  const nm6 = ['narrow', 'large', 'wide', 'long', 'shallow', 'deep', 'average', 'normal', 'ordinary', 'small'];
  const nm7 = ['sly', 'shy', 'wide', 'happy', 'gentle', 'creepy', 'brittle', 'gummy', 'lazy', 'sardonic', 'thin'];
  const nm8 = ['sharp', 'long', 'pointy', 'short', 'small', 'stubby', 'dull', 'thin', 'crooked', 'large', 'creepy', 'eerie'];
  const nm9 = ['flat', 'broad', 'thin', 'long', 'wide', 'small', 'large'];
  const nm10 = ['Short', 'Long', 'Narrow', 'Wide', 'Broad', 'Large', 'Small', 'Thin'];
  const nm11 = ['pointy', 'round', 'bent', 'squared'];
  const nm12 = ['long', 'short', 'average', 'small', 'large'];
  const nm13 = ['narrow', 'wide', 'thin', 'broad', 'rounded', 'squared', 'pointy'];
  const nm14 = ['thick', 'curly', 'thin', 'long', 'short', 'wavy', 'coarse', 'soft', 'very long', 'silken'];
  const nm15 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ' and has two small horns protruding from the top', ' and has two small horns protruding from the sides', ' and has two curved horns protruding from the top', ' and has two curved horns protruding from the sides', ' and has two stubby horns protruding from the top', ' and has two stubby horns protruding from the sides', ' and has two thin horns protruding from the top', ' and has two thin horns protruding from the sides', ' and has two broad horns protruding from the top', ' and has two broad horns protruding from the sides'];
  const nm16 = ['short', 'long', 'tall', 'small', 'low', 'average'];
  const nm17 = ['muscular', 'broad', 'thin', 'skinny', 'lean', 'fat', 'slender', 'bulky', 'chunky', 'hefty', 'athletic', 'stout', 'brawny'];
  const nm18 = ['stands straight', 'is slightly hunched over', 'is hunched over', 'stands straight'];
  const nm19 = ['long', 'thick', 'short', 'broad', 'average', 'thin', 'lean'];
  const nm20 = ['dangle', 'hang', 'rest'];
  const nm21 = ['small', 'gentle', 'graceful', 'large', 'thin', 'narrow', 'wide', 'broad'];
  const nm22 = ['long', 'thick', 'thin', 'short', 'stubby', 'small', 'curvy'];
  const nm23 = ['normal', 'long', 'sharp', 'claw-like', 'dull', 'thin', 'pointy', 'broad'];
  const nm24 = ['long', 'muscular', 'broad', 'short', 'small', 'tall', 'wide', 'lean', 'thin', 'skinny'];
  const nm25 = ['stand straight', 'are slightly bent', 'are bent', 'stand straight'];
  const nm26 = ['large', 'broad', 'small', 'short', 'wide', 'big', 'hairy', 'flat'];
  const nm27 = ['short fur', 'coarse skin', 'smooth skin', 'soft skin', 'delicate skin', 'coarse fur', 'thick fur', 'coarse skin', 'smooth skin', 'soft skin', 'delicate skin', 'small scales', 'thick skin', 'thick scales'];
  const nm28 = ['broader than', 'narrower than', 'about the same width as'];
  const nm29 = ['', '', '', '', '', '', '', '', '', '', '', '', ', from which a long tail sways back and forth', ', from which a short tail sways back and forth', ', from which a broad tail sways back and forth', ', from which a thin tail sways back and forth', ', from which a small tail sways back and forth', ', from which a large tail sways back and forth', ', from which a narrow tail sways back and forth'];
  const nm34 = ['narrow', 'wide', 'broad', 'large', 'thin', 'deep', 'huge', 'bony', 'scaly', 'eerie', 'slimy', 'bulging', 'enormous', 'giant', 'tiny'];
  const nm35 = ['big', 'broad', 'crooked', 'flat', 'gentle', 'large', 'narrow', 'pig-like', 'pointy', 'round', 'short', 'small', 'tiny', 'wide', 'barely existing', 'snake-like', 'reptilian', 'bony', 'spiky', 'hollow', 'bent', 'sharp', 'hooked', 'thin', 'narrow'];
  const nm36 = ['narrow', 'large', 'wide', 'long', 'shallow', 'deep', 'normal', 'small', 'huge', 'massive', 'tiny', 'giant', 'overbite', 'underbite', 'enormous'];
  const nm37 = ['sly', 'shy', 'wide', 'happy', 'gentle', 'creepy', 'brittle', 'gummy', 'lazy', 'sardonic', 'thin'];
  const nm38 = ['rows upon rows of small teeth', 'rows upon rows of teeth', 'two large fangs', 'two small fangs', 'two large canines', 'two small canines', 'rows of eerie looking teeth', 'several rows of sharp teeth', 'monstrous teeth', 'curved fangs', 'rows of crooked teeth', 'rows of dull teeth', 'only a few teeth here and there', 'rows of huge teeth', 'several huge dull teeth', 'several huge sharp teeth', 'several large broken teeth', 'rows of broken teeth', 'rows of shark-like teeth'];
  const nm39 = ['flat', 'broad', 'thin', 'long', 'wide', 'small', 'large', 'very long', 'forked', 'huge', 'coarse', 'slimy'];
  const nm40 = ['Short', 'Long', 'Narrow', 'Wide', 'Broad', 'Large', 'Small', 'Thin', 'Huge', 'Enormous', 'Tiny', 'Massive'];
  const nm41 = ['pointy', 'round', 'bent', 'squared', 'fan-like', 'spiky', 'bony', 'warped', 'hanging', 'flappy', 'stubby', 'wrinkled', 'jagged'];
  const nm42 = ['long', 'short', 'average', 'small', 'large', 'huge', 'tiny', 'massive'];
  const nm43 = ['narrow', 'wide', 'thin', 'broad', 'rounded', 'squared', 'pointy', 'oval', 'angular', 'wrinkled', 'lean', 'bony', 'triangular'];
  const nm44 = ['long hairs', 'coarse hairs', 'short hairs', 'rows of small horns', 'rows of small spikes', 'small tentacles', 'thin hair-like tentacles', 'bony ridges', 'bony spikes', 'web-like fans', 'tiny hairs', 'tattoo-like markings', 'scar-like carvings', 'soft hair', 'scaly ridges'];
  const nm45 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ' and has two small horns protruding from the top', ' and has two small horns protruding from the sides', ' and has two curved horns protruding from the top', ' and has two curved horns protruding from the sides', ' and has two stubby horns protruding from the top', ' and has two stubby horns protruding from the sides', ' and has two thin horns protruding from the top', ' and has two thin horns protruding from the sides', ' and has two broad horns protruding from the top', ' and has two broad horns protruding from the sides', ' and has two large tentacles protruding from the top', ' and has two large tentacles protruding from the sides', ' and has two large antlers protruding from the top', ' and has two large antlers protruding from the sides', ' and has two bony spikes protruding from the top', ' and has two bony spikes protruding from the sides', ' and has two huge horns protruding from the top', ' and has two huge horns protruding from the sides', ' and has two small tentacles protruding from the top', ' and has two small tentacles protruding from the sides', ' and has two small antlers protruding from the top', ' and has two small antlers protruding from the sides', ' and has several bony spikes protruding from the top', ' and has several bony spikes protruding from the sides', ' and has several large tentacles protruding from the top', ' and has several large tentacles protruding from the sides'];
  const nm49 = ['long', 'thick', 'short', 'broad', 'average', 'thin', 'lean'];
  const nm50 = ['arms', 'tentacle-like arms', 'bony arms', 'almost branch-like arms', 'stone-like arms', 'fleshy arms', 'warping arms', 'crooked arms'];
  const nm51 = ['small', 'large', 'thin', 'narrow', 'wide', 'broad', 'bony', 'webbed', 'tentacle-like', 'claw-like', 'bent', 'crooked', 'massive', 'huge', 'tiny', 'stone-like'];
  const nm52 = ['long', 'thick', 'thin', 'short', 'stubby', 'small', 'curvy', 'bent', 'very long', 'sharp nailed', 'long nailed', 'claw-like'];
  const nm53 = ['6', '8', '10', '12'];
  const nm54 = ['long', 'muscular', 'broad', 'short', 'small', 'wide', 'lean', 'thin', 'skinny', 'crooked'];
  const nm55 = ['feet', 'hooves', 'feet', 'paws'];
  const nm57 = ['short fur', 'coarse skin', 'smooth skin', 'soft skin', 'delicate skin', 'coarse fur', 'thick fur', 'coarse skin', 'smooth skin', 'soft skin', 'delicate skin', 'small scales', 'thick skin', 'thick scales', 'slime', 'slimy scales', 'large scales', 'rock-like scales', 'fluffy fur', 'nasty skin', 'wood-like skin', 'small feathers', 'large feathers', 'feathers', 'oily skin', 'armor-like scales', 'large armor-like scales'];
  const nm59 = ['', '', '', '', '', '', '', '', '', '', '', '', ', from which a long tail sways back and forth', ', from which a short tail sways back and forth', ', from which a broad tail sways back and forth', ', from which a thin tail sways back and forth', ', from which a small tail sways back and forth', ', from which a large tail sways back and forth', ', from which a narrow tail sways back and forth', ', from which a massive tail sways back and forth', ', from which a bony tail sways back and forth', ', from which a spiked tail sways back and forth', ', from which a tentacle-like tail grows', ', from which a coarse tail sways back and forth', ', from which a split tail sways back and forth', ', from which a forked tail sways back and forth', ', from which a bladed tail sways back and forth', ', from which a fanned tail sways back and forth'];
  if (type === 1) {
    name = `${sample(nm1)} ${sample(nm2)} eyes ${sample(nm3)} their surroundings from their ${sample(nm34)} sockets. A ${sample(nm35)} nose rests below, but it's the ${sample(nm36)} mouth below that takes all the attention. A ${sample(nm37)} smile reveals ${sample(nm38)} and a ${sample(nm39)} tongue.`;
    name2 = `${sample(nm40)} ${sample(nm41)} ears sit on each side of its ${sample(nm42)}, ${sample(nm43)} head, which itself is covered in ${sample(nm44)}${sample(nm45)}.`;
    name3 = `Its ${sample(nm16)} ${sample(nm17)} body ${sample(nm18)}. Two ${sample(nm49)} ${sample(nm50)} ${sample(nm20)} at its sides and end in ${sample(nm51)} hands with ${sample(nm52)} fingers, of which it has ${sample(nm53)} in total.`;
    name4 = `Its legs are ${sample(nm24)} and ${sample(nm25)}, each ending in ${sample(nm54)} ${sample(nm55)}.`;
    name5 = `Its body is covered in ${sample(nm57)} and its shoulders are ${sample(nm28)} its pelvis${sample(nm59)}.`;
  } else {
    name = `${sample(nm1)} ${sample(nm2)} eyes ${sample(nm3)} their surroundings from their ${sample(nm4)} sockets. A ${sample(nm5)} nose rests below, but it's the ${sample(nm6)} mouth below that takes all the attention. A ${sample(nm7)} smile reveals two ${sample(nm8)} canines and a ${sample(nm9)} tongue.`;
    name2 = `${sample(nm10)} ${sample(nm11)} ears sit on each side of its ${sample(nm12)}, ${sample(nm13)} head, which itself is covered in ${sample(nm14)}${sample(nm15)} hair.`;
    name3 = `Its ${sample(nm16)} ${sample(nm17)} body ${sample(nm18)}. Two ${sample(nm19)} arms ${sample(nm20)} at its sides and end in ${sample(nm21)} hands with ${sample(nm22)} fingers, each with ${sample(nm23)} nails.`;
    name4 = `Its legs are ${sample(nm24)} and ${sample(nm25)}, each ending in ${sample(nm26)} feet.`;
    name5 = `Its body is covered in ${sample(nm27)} and its shoulders are ${sample(nm28)} its pelvis${sample(nm29)}.`;
  }
  let result = '';
  result += name;
  result += '\n';
  result += name2;
  result += '\n';
  result += '\n';
  result += name3;
  result += '\n';
  result += name4;
  result += '\n';
  result += '\n';
  result += name5;
  return result;
}
module.exports = humanoids