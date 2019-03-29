var sample = require ('lodash.sample')

export default function plateArmors() {
  const nm1 = ['rounded helm', 'squared helm', 'flat top helm', 'pointed helm'];
  const nm2 = ['a face guard shaped in the face of a bear', 'a face guard shaped in the face of a boar', 'a face guard shaped in the face of a demon', 'a face guard shaped in the face of a dragon', 'a face guard shaped in the face of a god', 'a face guard shaped in the face of a hawk', 'a face guard shaped in the face of a lion', 'a face guard shaped in the face of a screaming warrior', 'a face guard shaped in the face of a snake', 'a face guard shaped in the face of a tiger', 'a face guard shaped in the face of a wolf', 'a face guard shaped in the face of an angel', 'a face guard shaped in the face of an owl', 'a face guard shaped in the face of hound', 'a face guard shaped like a skull', 'a pointed opening for the eyes, which curves downwards into a narrow opening up to the mouth', 'a pointed opening leaving just the eyes exposed', 'a pointed, t-shaped opening leaving the eyes and mouth exposed, a pointed nose guard protects the nose', 'a pointed, t-shaped opening leaving the eyes, nose and mouth exposed', 'a pointed, v-shaped opening leaving the eyes and mouth exposed, a pointed nose guard protects the nose', 'a pointed, v-shaped opening leaving the eyes, nose and mouth exposed', 'a rounded opening for the eyes, which curves downwards into a narrow opening up to the mouth', 'a rounded opening leaving just the eyes exposed', 'a rounded, t-shaped opening leaving the eyes and mouth exposed, a rounded nose guard protects the nose', 'a rounded, t-shaped opening leaving the eyes, nose and mouth exposed', 'a rounded, v-shaped opening leaving the eyes and mouth exposed, a rounded nose guard protects the nose', 'a rounded, v-shaped opening leaving the eyes, nose and mouth exposed', 'a squared opening for the eyes, which curves downwards into a narrow opening up to the mouth', 'a squared opening leaving just the eyes exposed', 'a squared, t-shaped opening leaving the eyes and mouth exposed, a squared nose guard protects the nose', 'a squared, t-shaped opening leaving the eyes, nose and mouth exposed', 'a squared, v-shaped opening leaving the eyes and mouth exposed, a squared nose guard protects the nose', 'a squared, v-shaped opening leaving the eyes, nose and mouth exposed', 'an open face, covering just up to the cheeks', 'an open face, covering just up to the ears', 'an open face, covering just up to the eyes', 'half a face guard shaped like the eyes of a boar', 'half a face guard shaped like the eyes of a demon', 'half a face guard shaped like the eyes of a dragon', 'half a face guard shaped like the eyes of a snake', 'half a face guard shaped like the eyes of a tiger', 'half a face guard shaped like the eyes of an angel', 'half a face guard shaped like the eyes of an owl', 'half a face guard shaped like the top of a skull', 'half a pointed face guard with two pointed openings for the eyes', 'half a rounded face guard with two rounded openings for the eyes', 'half a squared face guard with two squared openings for the eyes', 'only a nose guard as protection for the face', 'two oval holes leaving the eyes minimally exposed', 'two pointed holes leaving the eyes minimally exposed', 'two rounded holes leaving the eyes minimally exposed', 'two small metal plates at each side of the eyes to protect the face', 'two squared holes leaving the eyes minimally exposed'];
  const nm3 = ['its side are two curled animal horns', 'its side are two small antlers', 'its side are two large antlers', 'its side are two horns which curve upwards', 'its side are two horns which curve downwards', 'its side are two horns which curve backwards', 'its side are two horns which curve forwards', 'its side are two huge horns which curve upwards', 'its side are two huge horns which curve downwards', 'its side are two huge horns which curve backwards', 'its side are two huge horns which curve forwards', 'its side are two curled animal horns, one of which is partially broken', 'its side are two small antlers, one of which is partially broken', 'its side are two large antlers, one of which is partially broken', 'its side are two horns which curve upwards, one of which is partially broken', 'its side are two horns which curve downwards, one of which is partially broken', 'its side are two horns which curve backwards, one of which is partially broken', 'its side are two horns which curve forwards, one of which is partially broken', 'its side are two small, pointy horns', 'its side are two straight horns', 'its side are two tall angel wing shaped ornaments', 'its side are two wide angel wing shaped ornaments', 'its side are two tall demon wing shaped ornaments', 'its side are two wide demon wing shaped ornaments', 'its side are two tall wing shaped ornaments', 'its side are two wide wing shaped ornaments', 'its side are two tall dragon wing shaped ornaments', 'its side are two wide dragon wing shaped ornaments', 'its side are two tall bird wing shaped ornaments', 'its side are two wide bird wing shaped ornaments', 'its side are leaf shaped ornaments', 'its side are two wide bat wing shaped ornaments', 'its side are two tall bat wing shaped ornaments', 'the forehead area is a bird beak shaped ornament', 'the forehead area is a dragon face shaped ornament', 'the forehead area are snake fang shaped ornaments', 'the forehead area is a lion mouth shaped ornament', 'the forehead area is a bear face shaped ornament', 'the forehead area is an angel wing shaped ornament', 'the forehead area is a demon wing shaped ornament', 'the forehead area is a skull shaped ornament', 'the forehead area is a long horn', 'the forehead area is a broken animal horn', 'the forehead area are two tall spikes', 'the forehead area is a row of small spikes', 'the forehead area and running towards the back is a snake shaped ornament', 'the forehead area and running towards the back is a dragon shaped ornament', 'the forehead area is a bat shaped ornament', 'the forehead area are two tall, wing-like ornaments', 'the forehead area are two wide, wing-like ornaments', 'the forehead area is a tall, wing-like ornament piece', 'the forehead area is a wide, wing-like ornament piece', 'the forehead area are two small antlers', 'the forehead area are two large antlers', 'the forehead area are two curved animal horns', 'the forehead area are two outward curving, wing-like ornaments', 'the forehead area and the backside are two tall, wing-like ornament pieces', 'the forehead area are three tall spikes', 'the forehead area and the backside are two wide, wing-like ornament pieces', 'the forehead area is a crown-shaped ornament piece', 'the forehead area is a shield-shaped ornament piece', 'the forehead area two small crossed bones as an ornament piece', 'the forehead area two small crossed swords as an ornament piece', 'the forehead area two small crossed daggers as an ornament piece', 'the forehead area is a lightning shaped ornament piece', 'the forehead area is a claw-shaped ornament piece', 'the top are small spikes, scattered all over', 'the top are large, tall spikes in a circle, like some sort of evil crown', 'the top is a metal, mohawk-like ornament, ending in a sharp pointed edge', 'the top is a metal, mohawk-like ornament with a row of feathers inserted into it', 'the top is a metal, mohawk-like ornament with long, colored hair attached to it', 'the top is a metal ring used to attach long, colored hairs which flow towards the back', 'the top is a metal ring used to attach short, colored hairs which flow towards the back', 'the top is a long, wing-shaped ornament curving across the helm, towards the backside', 'the top is a long, wing-shaped ornament, standing up straight similar to a mohawk', 'the top are small, rounded spikes scattered all over', 'the top is a bear head shaped ornament piece', 'the top is a dragon head shaped ornament piece', 'the top is a bird head shaped ornament piece', 'the top is a wolf head shaped ornament piece', 'the top is a tiger head shaped ornament piece', 'the top is a serpent head shaped ornament piece', 'the top are several curved pieces of metal shaped like a mohawk', 'the top is a dragon claw shaped ornament piece, covering the helmet and curved towards the back', 'the top are small pieces of metal lined up like a mohawk', 'the top are feather-shaped pieces of metal, covering the entire top of the helm', 'the top are leaf-shaped pieces of metal, covering the entire top of the helm', 'the top is a row of long, horn-like metal ornaments, lined up like a mohawk', 'the top is a row of long, horn-like metal ornaments, curving towards the back of the helm', 'the top are two horn-like metal ornaments, pointed backwards in a sharp angle', 'the top is a row of horns which gradually increase in size, they\'re lined up like a mohawk', 'the top are many small spikes in circle, similar to a crown', 'the top is a long, curved metal blade which curves forward and ends in a sharp point', 'the top is a curved, v-shaped blade, the middle is attached to the center of the helm', 'the top is a sharp metal spike pointing directly upwards', 'the top is a small metal ring which holds 3 colored feathers, the feathers curve towards the back', 'the top are several tentacle shaped metal ornaments', 'the top is covered in long, colored hairs which cover the entire helm except for the face', 'the top is a sun-shaped metal ornament piece', 'the top is a star-shaped metal ornament piece'];
  const nm4 = ['fairly rounded', 'rounded', 'fairly oval', 'oval', 'fairly pointy', 'pointy', 'squared', 'fairly squared'];
  const nm5 = ['long', 'narrow', 'quite narrow', 'quite short', 'short', 'tall', 'very long', 'very wide', 'wide'];
  const nm6 = ['enormous', 'fairly small in size', 'huge', 'large in size', 'moderate in size', 'quite large', 'small in size'];
  const nm7 = ['a bear\'s head on each side', 'a coiled up snake on each side, the heads are pointing forwards', 'a coiled up snake on each side, the heads are pointing outwards', 'a dragonskull on one side', 'a hawk\'s head shaped metal ornament', 'a huge bearclaw on each side', 'a huge hammer head on each side', 'a large antler on each side, pointing backwards', 'a large antler on each side, pointing sidewards', 'a large skull shaped metal ornament piece', 'a lion\'s head on each side', 'a lion\'s head shaped metal ornament piece on each side', 'a long metal plate, curving outwards and downwards at first, but narrowing and curving upwards towards the end', 'a long, curved metal ornament piece on each side, starting at the neck and reaching forehead height', 'a masterfully crafted metal face on each side, both faces are blindfolded', 'a masterfully crafted metal face on each side, one side has a crying emotion while the other is smiling', 'a masterfully crafted, small-scale version of a dragon spine on each side', 'a metal angel wing on each side', 'a metal bat\'s wing on each side, curved towards the sides', 'a metal bird-of-prey claw-shaped metal ornament piece on each side', 'a metal blade, starting at the front, curving towards the back and ending in a sharp point', 'a metal bull head on each side, both with a ring through its nose', 'a metal demon wing on each side', 'a metal dragonwing on each side, curved to the sides', 'a metal dragonwing on each side, curved towards the back', 'a row of metal feathers, all pointing upwards. The row reaches from side to side', 'a row of upwards facing daggers', 'a scythe-like blade on each side, the blade starts near the neck and curves outwards', 'a serpent\'s head shaped metal ornament piece on each side', 'a small antler on each side, pointing backwards', 'a small antler on each side, pointing sidewards', 'a small pointed tip, which is curved towards the back', 'a small shield on each side, facing downwards', 'a small shield on each side, facing outwards', 'a star-shaped, thick, metal ornament piece', 'a straight line of spikes, reaching from side to side', 'a straight line of spikes, starting at the front and ending at the back', 'a sun-shaped, thick, metal ornament piece', 'a tiger\'s head on each side', 'a wide piece of thick, colored cloth, draped over each shoulderplate and hanging over the edges', 'a wolf\'s head on each side', 'an axe head on each side, pointing upwards and from side to side', 'an enormous dragonclaw on each side', 'an owl\'s head shaped metal ornament piece on each side', 'gear-like metal ornament pieces, placed in several rows reaching from side to side', 'hundreds of small metal fragments, mimicking the scales of fish', 'hundreds of small metal fragments, mimicking the scales of reptiles', 'intricate gilded design patterns', 'layered pieces of curved metal, forming the rough shape of wings', 'layered pieces of curved metal, starting at the inner sides and curving outwards', 'layered, spiky pieces of metal and ending in two sharp spikes facing outwards and downwards', 'layers upon layers of long, colored feathers', 'many metal spikes scattered around on each shoulderplate', 'masterfully crafted metal hands on each side', 'masterfully crafted layers of metal in the shape of dragon scales', 'metal chains covering nearly every part of the shoulderplates', 'metal chains, hanging from the edges of the shoulderplates', 'metal daggers lined up in two lines, one on the front and one on the back', 'metal feathers covering both shoulderplates entirely', 'pieces of crystal-shaped metal, creating the illusion of shards of ice or rock', 'rows and rows of teeth, enemy teeth to be exact', 'rows of colored crystals and gems', 'rows upon rows of animal claws, all of them curved towards the backside', 'rows upon rows of animal teeth, all of them from predators', 'several layers of skulls, possibly of slain enemies', 'several rows of small, sharp spikes. Each row reaches from back to front', 'several rows of small, sharp spikes. Each row reaches from side to side', 'several snakes on each side, they\'re one entangled mess of snake bodies and snake heads', 'three large metal spikes on each side, lined up from back to front', 'three large, dragonclaw-like spikes on each side, curved towards the back', 'three small horns on each side, curved towards the back', 'three small horns on each side, curved towards the sides', 'three stacked turtle shells on each side, each smaller than the one below it', 'three sword handles on each side, they\'re all pointing downwards as if a sword has been pierced through the shoulderguards', 'two curved animal horns on each side, placed on the front and backside', 'two large horns on each side, curved towards the back', 'two large horns on each side, curved towards the sides', 'two rows of bones on each side, one row is at the front and the other on the backside', 'two rows of teeth-like spikes, one row faces upwards and the other downwards, creating a jaw-like appearance', 'two smaller blades on each side, curved towards the backside'];
  const nm8 = ['rounded, half covering', 'pointed, half covering', 'squared, half covering', 'rounded, layered metal', 'chainmail', 'pointed, layered metal', 'squared, layered metal', 'rounded, fully covering', 'pointed, fully covering', 'squared, fully covering'];
  const nm9 = ['nicely', 'loosely', 'perfectly', 'well', 'quite well'];
  const nm10 = ['a bear claw attached on the outer sides', 'a curved animal bone attached to each outer side, the bone curves upwards towards the shoulder', 'a dagger attached on the outer sides', 'a dragon tooth attached on the outer sides', 'a large metal feather on each outer side', 'a large sharkfin-like spike attached to each outer side', 'a layer of chainmail covering the outer sides', 'a masterfully crafted upper bear jaw attached on the outer sides', 'a masterfully crafted upper bird beak attached on each outer side', 'a masterfully crafted upper dragon jaw attached on the outer sides', 'a masterfully crafted upper skeleton jaw attached on the outer sides', 'a metal snake curling around them', 'a row of hook-like barbs attached to each outer side', 'a row of long, curved spikes on the outer sides', 'a skull shaped metal ornament piece on each outer side', 'a small antler attached on each outer side, pointing upwards and following the arm', 'a tentacle-like metal ornament attached to each side and wrapping around each vambrace', 'an axe head attached on each outer side, sharp enough to be used as a weapon', 'an intricately crafted sigil attached to each outer side', 'curved, pointed edge at the elbow point', 'intricate gilded design patterns covering everything', 'layers of colored feathers on the outer sides', 'many small, metal spikes covering the vambraces all over', 'metal flower ornament pieces covering the outer sides', 'metal leaves covering the outer sides', 'rows upon rows of small metal pieces, mimicking dragon scales', 'rows upon rows of small metal pieces, mimicking fish scales', 'rows upon rows of small metal pieces, mimicking reptile scales', 'several small metal chains hanging on the outer sides', 'several arrow heads attached in a row on the outer sides, as if arrows have pierced the arms', 'several claw-like barbs in a row on the outer sides', 'several curved spikes attached near the bottom, shaped like a claw', 'several huge, sharp spikes on the outer sides', 'several layered metal sheets on the outer sides', 'several layers of curved metal attached to the outer sides, they form a wing-like pattern', 'several masterfully crafted metal sheets, shaped like dragon scales on the outer sides', 'several metal rings attached to the outer sides', 'several rows of barb-like spikes on the outer sides', 'sharp pointed tip at the elbow point', 'two blades attached on each outer side, all sharpened and ready to be used as a weapon'];
  const nm11 = ['a couple of layers of metal, mimicking dragon scales', 'several separate pieces which are layered on top of each other', 'several layers of metal sheets, which perfectly sit just under the shoulderplates', 'one large piece of metal, which sits perfectly just under the shoulderplates', 'one large piece of metal, but crafted to mimic the appearance of muscles', 'one large piece of metal', 'various layers of pointed metal sheets', 'various layers of rounded metal sheets', 'various layers of squared metal sheets', 'many layers of pointed metal sheets', 'many layers of rounded metal sheets', 'many layers of squared metal sheets', 'many layers of smaller metal pieces, mimicking the scales of a reptile', 'many layers of smaller metal pieces, mimicking the scales of a fish', 'many layers of smaller metal pieces, mimicking the scales of a dragon'];
  const nm12 = ['everything from the neck down and ending at the groin', 'almost everything from the neck down, it narrows near the groin and leaves part the sides exposed', 'the entire front and back side, but the attachment straps leave the sides under the arms exposed', 'everything from the neck down and ending at the groin, but the shoulder area is fairly exposed to allow for more movement space', 'only the front, the back is where the attachment straps are and they offer no real protection', 'almost everything from the neck down and ending at the groin, but the sides are only covered near the bottom', 'everything from the neck down and ending at the groin, but there\'s a fairly wide neck line which is somewhat exposed'];
  const nm13 = ['a chainmail skirt reaching down to the knee', 'a chainmail skirt reaching just below the groin', 'a skirt of several layered metal sheets reaching down to the knee', 'a skirt of many layers of metal sheets reaching down to the knee', 'a skirt of several layered metal sheets reaching just below the groin', 'a skirt of many layers of metal sheets reaching just below the groin', 'rounded, half covering cuisses', 'pointed, half covering cuisses', 'squared, half covering cuisses', 'rounded, layered metal cuisses', 'pointed, layered metal cuisses', 'squared, layered metal cuisses', 'rounded, fully covering cuisses', 'pointed, fully covering cuisses', 'squared, fully covering cuisses'];
  const nm14 = ['a curved animal bone attached to each outer side, the bone curves upwards towards the pelvis', 'a dagger attached on the outer sides', 'a dragon tooth attached on the outer sides', 'a large metal feather on each outer side', 'a large sharkfin-like spike attached to each outer side', 'a layer of chainmail covering the outer sides', 'a metal snake curling around them', 'a row of hook-like barbs attached to each outer side', 'a row of long, curved spikes on the outer sides', 'a skull shaped metal ornament piece on each outer side', 'a tentacle-like metal ornament attached to each side and wrapping around the greaves', 'an small axe head attached on each outer side', 'an intricately crafted sigil attached to each outer side', 'curved, pointed edge at the knee point', 'intricate gilded design patterns covering everything', 'layers of colored feathers on the outer sides', 'many small, metal spikes covering the greaves all over', 'metal flower ornament pieces covering the outer sides', 'metal leaves covering the outer sides', 'rows upon rows of small metal piece, mimicking dragon scales', 'rows upon rows of small metal piece, mimicking fish scales', 'rows upon rows of small metal piece, mimicking reptile scales', 'several arrow heads attached in a row on the outer sides, as if arrows have pierced the legs', 'several claw-like barbs in a row on the outer sides', 'several curved spikes attached near the bottom, shaped like a claw', 'several large, sharp spikes on the outer sides', 'several layered metal sheets on the outer sides', 'several layers of curved metal attached to the outer sides, they form a wing-like pattern', 'several masterfully crafted metal sheets, shaped like dragon scales on the outer sides', 'several metal rings attached to the outer sides', 'several rows of barb-like spikes on the outer sides', 'sharp pointed tip at the knee point'];
  const name = `This set of armor has a ${sample(nm1)} with ${sample(nm2)}. Attached to ${sample(nm3)}.`;
  const name2 = `The shoulders are ${sample(nm4)}, ${sample(nm5)} and ${sample(nm6)}. They're decorated with ${sample(nm7)}.`;
  const name3 = `The upper arms are protected by ${sample(nm8)} rerebraces which sit ${sample(nm9)} under the shoulderplates. The lower arms are covered by vambraces which have ${sample(nm10)}.`;
  const name4 = `The breastplate is made from ${sample(nm11)}. It covers ${sample(nm12)}.`;
  const name5 = `The upper legs are covered by ${sample(nm13)}. The lower legs are protected by greaves which have ${sample(nm14)}.`;
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
  result += '\n';
  result += name5;
  return result;
}
