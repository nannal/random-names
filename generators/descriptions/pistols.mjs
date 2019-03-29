var sample = require ('lodash.sample')

function pistols() {
  const nm1 = ['very small', 'small', 'small', 'fairy small', 'fairly small', 'average', 'fairly large', 'fairly large', 'large', 'large', 'very large'];
  const nm2 = ['pistol', 'double-barreled pistol', 'derringer', 'pepperbox', 'double-barreled derringer', 'double-barreled pepperbox', 'revolver', 'semi-automatic pistol', 'machine pistol', 'revolver', 'revolver', 'pistol'];
  const nm3 = ['a beloved choice', 'a celebrated pick', 'a common choice', 'a famous model', 'a favorable model', 'a favored pick', 'a leading choice', 'a noteworthy choice', 'a peculiar choice', 'a pleasing choice', 'a popular choice', 'a preferred model', 'a preferred option', 'a prominent choice', 'a sought after model', 'a suitable choice', 'a well-liked model', 'an eccentric choice', 'an exceptional choice', 'an extraordinary model', 'an in demand model', 'an often promoted choice', 'an uncommon pick'];
  const nm4 = ['civilians looking for a little extra protection', 'civilians looking to expand their existing collection', 'civilians looking for their first firearm', 'civilians who wish to feel a little safer at night', 'civilians looking for a well rounded model', 'civilians who need an effective way to protect themselves', 'civilians who just want a nice extra piece for their collection', 'civilians who need an easy to train with model', 'civilians who need a more powerful model', 'civilians who are looking for a fun model', 'service people who require extra fire power', 'service people who need a more reliable model', 'service people looking for a well rounded secondary piece', 'service people in need of an easy to hide model', 'service people who just want more than the standard'];
  const nm5 = ['light', 'balanced', 'fairly light', 'decent', 'stable', 'counterbalanced', 'delicate', 'significant', 'substantial', 'average', 'decent', 'subtle'];
  const nm6 = ['easy', 'very easy', 'fairly easy', 'quite easy', 'not too difficult', 'simple', 'straightforward', 'not demanding', 'not very demanding', 'not hard'];
  const nm7 = ['packs a punch', 'packs a big bunch', 'has a lot of power', 'has a decent amount of firepower', 'brings a lot of firepower', 'brings a good amount of firepower', 'has a fair amount of firepower', 'has a great amount of firepower'];
  const nm8 = ['with deadly precision', 'with great accuracy', 'with a nice accuracy', 'with good precision', 'with very good precision', 'with excellent accuracy', 'with extraordinary precision', 'with tremendous precision', 'with high precision', 'with extreme accuracy'];
  const nm9 = ['an expensive wooden grip', 'an ivory grip', 'a wooden grip', 'a cheaper wooden grip', 'a metal grip', 'a plastic grip', 'an expensive metal grip', 'a cheaper metal grip'];
  const nm10 = ['optional engravings at the bottom', 'optional engravings at the top', 'expensive decorations', 'decorational gems', 'decorational horns', 'decorations made of horn', 'decorations made of ivory', 'ivory decorations', 'no decorations added to it', 'metalwork decorations', 'gilded decorations'];
  const nm11 = ['a standard', 'a heavy duty', 'a light duty', 'an expensive metal', 'a cheaper metal', 'a medium duty'];
  const nm12 = ['engraved', 'gilded', 'decorated', 'inscribed', 'ornamented', 'etched'];
  const nm13 = ['a gift', 'a testing project', 'an alternative version of another weapon', 'a makeshift weapon', 'a hobby', 'secret technology project', 'a cheaper alternative to another version', 'a more basic version of another weapon', 'a means to win a contest', 'a result of a bet', 'a test of the designer\'s abilities'];
  const nm14 = ['became popular across the world', 'became popular in many countries', 'became famous across the world', 'became infamous across the world', 'turned into a popular weapon around the world', 'turned into a new hype in many countries', 'became a known name across the world', 'turned into a huge mass production project', 'became a household name among gun owners', 'turned into a serious weapon with huge sales'];
  const nm15 = ['many military forces', 'a lot of civil protection forces', 'many recreational gun owners', 'many enthusiastic gun owners', 'gangs and civil forces alike', 'both civilians and the military', 'many hunters around the world', 'various civil protection forces', 'various military branches', 'many hired protection forces'];
  const nm16 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const nm17 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm18 = ['Amigo', 'Amnesia', 'Blackout', 'Comet', 'Crimson', 'Cruiser', 'Dawn', 'Deadeye', 'Dominion', 'Echo', 'Eclipse', 'Enigma', 'Envy', 'Frenzy', 'Fury', 'Justice', 'Lightning', 'Limbo', 'Lockjaw', 'Malice', 'Midnight', 'Nightmare', 'Pendulum', 'Popeye', 'Scar', 'Serenity'];
  const name = `This ${sample(nm1)} ${sample(nm2)} is ${sample(nm3)} amongsts ${sample(nm4)}.`;
  const name2 = `Its ${sample(nm5)} weight makes it ${sample(nm6)} to handle. It ${sample(nm7)} ${sample(nm8)}.`;
  const name3 = `This particular ${sample(nm2)} comes with ${sample(nm9)}, with ${sample(nm10)} and ${sample(nm11)} barrel, which could be ${sample(nm12)} if so desired.`;
  const name4 = `This weapon was originally designed as ${sample(nm13)}, but it soon ${sample(nm14)} and is now in use by ${sample(nm15)}.`;
  const name5 = `Its official name is the ${sample(nm16)}${sample(nm17)}-${sample(nm16)}${sample(nm16)}${sample(nm17)}, but it generall goes by its unofficial name: ${sample(nm18)}.`;
  let result = '';
  result += name;
  result += '\n';
  result += name2;
  result += '\n';
  result += '\n';
  result += name3;
  result += '\n';
  result += '\n';
  result += name4;
  result += '\n';
  result += name5;
  return result;
}
module.exports = pistols
