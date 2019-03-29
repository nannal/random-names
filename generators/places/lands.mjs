var sample = require ('lodash.sample')

function lands() {
  let names;
  const nm1 = ['Haunted', 'Naked', 'Angry', 'Arctic', 'Arid', 'Bare', 'Barren', 'Black', 'Bleak', 'Boiling', 'Bone-Dry', 'Burned', 'Burning', 'Calm', 'Calmest', 'Charmed', 'Cunning', 'Cursed', 'Dangerous', 'Dark', 'Darkest', 'Dead', 'Decayed', 'Decaying', 'Dehydrated', 'Depraved', 'Deserted', 'Desolate', 'Desolated', 'Distant', 'Dread', 'Dreaded', 'Dreadful', 'Dreary', 'Dry', 'Eastern', 'Empty', 'Enchanted', 'Ethereal', 'Ever Reaching', 'Everlasting', 'Feared', 'Fearsome', 'Fiery', 'Flat', 'Forbidden', 'Forbidding', 'Frightening', 'Frozen', 'Grave', 'Grim', 'Hellish', 'Homeless', 'Hopeless', 'Hot', 'Hungry', 'Infernal', 'Infinite', 'Isolated', 'Killing', 'Laughing', 'Lifeless', 'Light', 'Lightest', 'Lonely', 'Malevolent', 'Malicious', 'Mighty', 'Mirrored', 'Misty', 'Moaning', 'Monotonous', 'Motionless', 'Mysterious', 'Narrow', 'Neverending', 'Northern', 'Open', 'Painful', 'Parched', 'Perfumed', 'Quiet', 'Raging', 'Red', 'Restless', 'Rocky', 'Sad', 'Sandy', 'Sanguine', 'Savage', 'Scorching', 'Scorched', 'Shadowed', 'Silent', 'Sly', 'Soundless', 'Southern', 'Sterile', 'Thundering', 'Treacherous', 'Twisting', 'Uncanny', 'Uninteresting', 'Uninviting', 'Unknown', 'Unresting', 'Unwelcoming', 'Vast', 'Violent', 'Voiceless', 'Waterless', 'Western', 'Whispering', 'White', 'Windy', 'Withered', 'Yelling', 'Yellow'];
  const nm2 = ['Badlands', 'Barrens', 'Borderlands', 'Desert', 'Expanse', 'Fields', 'Grasslands', 'Hinterland', 'Prairie', 'Savanna', 'Steppes', 'Tundra', 'Wasteland', 'Wastes', 'Wilderness', 'Wilds', 'Emptyness', 'Frontier', 'Flatlands'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = `The ${sample(nm1)} ${sample(nm2)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm2)}`;
    }
    return names;
  }
}
module.exports = lands
