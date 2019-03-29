var sample = require ('lodash.sample')

function waterfalls() {
  let names;
  const nm1 = ['Angel Wing', 'Bat Cove', 'Beaver', 'Beaver Brook', 'Big Baron', 'Big Rock', 'Blackwater', 'Blue Water', 'Broken Window', 'Bronze Boulder', 'Butterfly', 'Cannonball', 'Cascading', 'Clearwater', 'Copper Creek', 'Crescent', 'Crescent Moon', 'Crimson', 'Crystal', 'Crystal Creek', 'Crystal Shower', 'Crystalized', 'Deadly', 'Death', 'Diamond Creek', 'Dragon', 'Dragonfly', 'Dual Branch', 'Eagle Cliff', 'Eagle Eye', 'Eagle Feather', 'Ebony', 'Echo', 'Emerald', 'Emerald Lake', 'Emperor', 'Eternal Drop', 'Eternal Fog', 'Fairy', 'Fall River', 'Feather', 'Five', 'Forest', 'Forestsong', 'Forgotten', 'Four', 'Foxtail', 'Frozen Lake', 'Golden Cliff', 'Golden Gate', 'Golden Nugget', 'Golden Strand', 'Grizzly Creek', 'Heavenly', 'Hidden', 'Hidden Cave', 'Hidden Rock', 'Hidden Rogue', 'Hollow Point', 'Hollow Rock', 'Horseshoe', 'Horsetail', 'Hourglass', 'Hunter', 'Iron Lake', 'Ivory', 'Ivory Cliff', 'Jade', 'Jade Glacier', 'King\'s Cloak', 'Laughing', 'Leaping Frog', 'Liberty', 'Lily Pond', 'Little Creek', 'Little Rock', 'Little Spring', 'Livingstone', 'Lonely Creek', 'Marble', 'Meadow Brook', 'Meteor', 'Middle Brook', 'Middle Stream', 'Mirror', 'Mirror Pools', 'Misty', 'Moonshadow', 'Mosquito', 'Mountain River', 'Mystic', 'Narrow', 'New Rainbow', 'New Water', 'Oaken', 'Obsidian', 'Onyx', 'Paradise', 'Phantom', 'Pirate Cove', 'Queen\'s Veil', 'Razorrock', 'Red Ribbon', 'River Rock', 'Ruby', 'Salmon', 'Salt River', 'Sapphire', 'Serpent', 'Serpentine', 'Seven Stones', 'Shadow', 'Silent Glacier', 'Silk Ribbon', 'Silken Cloak', 'Silken Veil', 'Silver Shower', 'Silver Wolf', 'Silverband', 'Silverstone', 'Silverthread', 'Single Branch', 'Sister', 'Sleepy', 'Sliding Rock', 'Slumbering', 'Spring Blossom', 'Spring Meadow', 'Spring River', 'Stoney Creek', 'Storm Peak', 'Summerset', 'Sunny Point', 'Surprise', 'Surprise Creek', 'The', 'Triplet', 'Turtleshell', 'Twin Mountain', 'Twin Sisters', 'Twister', 'Umbrella', 'Vanishing', 'Virgin', 'Virgin Valley', 'Whispering', 'Whisperwind', 'Whitewater', 'Willowwood', 'Young River'];
  const nm2 = ['Falls', 'Cascades', 'Rapids', 'Falls', 'Falls', 'Falls'];
  const nm3 = ['b', 'br', 'bl', 'c', 'cl', 'cr', 'd', 'dr', 'f', 'fr', 'fl', 'g', 'gr', 'gl', 'gn', 'h', 'j', 'k', 'kr', 'kl', 'kn', 'm', 'n', 'p', 'pr', 'pl', 'q', 'qr', 'ql', 'r', 's', 'st', 'sr', 'str', 'sl', 't', 'tr', 'tl', 'v', 'vl', 'vr', 'w', 'wr', 'x', 'z', '', '', '', '', ''];
  const nm4 = ['a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u'];
  const nm5 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', '', '', '', '', '', ''];
  const nm6 = ['', '', 'b', 'd', 'g', 'gh', 'h', 'hr', 'hs', 'ht', 'hst', 'hsh', 'hn', 'hm', 'hl', 'hz', 'hx', 'hq', 'k', 'ks', 'kx', 'l', 'll', 'lk', 'ln', 'lm', 'lz', 'lp', 'lt', 'ls', 'lst', 'lf', 'm', 'mn', 'mm', 'mt', 'ms', 'n', 'nn', 'nt', 'ns', 'p', 'ps', 'pt', 'ph', 'q', 'r', 'rs', 'rt', 'rst', 'rq', 'rk', 'rc', 'rf', 'rb', 'rd', 's', 'st', 'ss', 'sh', 'sk', 'sp', 't', 'th', 'ts', 'w', 'wth', 'x', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = `${sample(nm1)} ${sample(nm2)}`;
    } else if (i < 7) {
      names = `${sample(nm3) + sample(nm4) + sample(nm6)} ${sample(nm2)}`;
    } else {
      names = `${sample(nm3) + sample(nm4) + sample(nm5) + sample(nm4) + sample(nm6)} ${sample(nm2)}`;
    }
    return names;
  }
}
module.exports = waterfalls
