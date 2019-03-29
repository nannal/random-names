function dwarfs() {
  let nameLast;
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd7;
  let rnd8;
  let rnd9;
  let rnd10;
  let rnd11;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'br', 'd', 'dr', 'f', 'g', 'gr', 'h', 'j', 'k', 'm', 'r', 'sr', 'st', 'str', 't', 'tr', 'v', 'w', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'o', 'u', 'a', 'o', 'u', 'a', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'y', 'y', 'aa', 'ai', 'oo', 'uu', 'io', 'io'];
  const nm3 = ['b', 'br', 'bm', 'bn', 'cr', 'cd', 'cn', 'cm', 'd', 'dd', 'dg', 'dn', 'dm', 'g', 'gr', 'gn', 'gm', 'gr', 'gg', 'gd', 'k', 'kk', 'kl', 'kn', 'l', 'ld', 'lb', 'lbr', 'ldr', 'lg', 'lgr', 'lm', 'lk', 'mg', 'md', 'n', 'nf', 'nm', 'nth', 'ng', 'ngr', 'ndr', 'nr', 'r', 'rg', 'rgr', 'rs', 'rst', 'rd', 'rb', 'v', 'zm', 'zb', 'zd'];
  const nm4 = ['c', 'ck', 'd', 'dd', 'g', 'k', 'l', 'ls', 'ld', 'm', 'n', 'r', 'rd', 'rsk', 'rg', 't'];
  const nm5 = ['', '', '', '', '', '', 'b', 'bh', 'd', 'dr', 'f', 'g', 'gr', 'gh', 'h', 'k', 'kh', 'l', 'm', 'n', 'r', 's', 'sr', 't', 'thr', 'y', 'v', 'w'];
  const nm6 = ['a', 'e', 'i', 'o', 'u'];
  const nm7 = ['bn', 'bh', 'bb', 'b', 'cw', 'cn', 'd', 'dw', 'dn', 'dg', 'dd', 'dr', 'dl', 'h', 'hn', 'hl', 'hg', 'gn', 'gl', 'gw', 'gr', 'gv', 'k', 'kk', 'l', 'll', 'ld', 'lw', 'lgr', 'lgw', 'lb', 'lk', 'm', 'mm', 'mw', 'mgw', 'mr', 'n', 'nd', 'ng', 'ngr', 'ngv', 'nn', 'nngv', 'nw', 'r', 'rg', 'rgw', 'rl', 'rb', 's', 'ss', 'tr', 'v', 'vr', 'vl', 'z', 'zl', 'zw'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'h', 'l', 'll', 'm', 'n', 'mn', 's', 'r', 't', 'th'];
  const nm9 = ['b', 'br', 'bh', 'd', 'dr', 'f', 'g', 'gr', 'gh', 'h', 'j', 'k', 'kh', 'l', 'm', 'n', 'r', 's', 'sr', 'st', 'str', 't', 'thr', 'tr', 'v', 'w', 'y', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'o', 'u', 'a', 'o', 'u', 'a', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'y', 'y'];
  const nm11 = ['b', 'bb', 'bh', 'bm', 'bn', 'br', 'cd', 'cm', 'cn', 'cr', 'cw', 'd', 'dd', 'dg', 'dl', 'dm', 'dn', 'dr', 'dw', 'g', 'gd', 'gg', 'gl', 'gm', 'gn', 'gr', 'gv', 'gw', 'h', 'hg', 'hl', 'hn', 'k', 'kk', 'kl', 'kn', 'l', 'lb', 'lbr', 'ld', 'ldr', 'lg', 'lgr', 'lgw', 'lk', 'll', 'lm', 'lw', 'm', 'md', 'mg', 'mgw', 'mm', 'mr', 'mw', 'n', 'nd', 'ndr', 'nf', 'ng', 'ngr', 'ngv', 'nm', 'nn', 'nngv', 'nr', 'nth', 'nw', 'r', 'rb', 'rd', 'rg', 'rgr', 'rgw', 'rl', 'rs', 'rst', 's', 'ss', 'tr', 'v', 'vl', 'vr', 'z', 'zb', 'zd', 'zl', 'zm', 'zw'];
  const nm12 = ['b', 'c', 'ck', 'd', 'dd', 'g', 'h', 'k', 'l', 'll', 'ls', 'ld', 'm', 'n', 'mn', 'r', 'rd', 'rsk', 'rg', 's', 't', 'th'];
  const nm13 = ['Amber', 'Axe', 'Battle', 'Black', 'Blaze', 'Boulder', 'Bright', 'Bronze', 'Cinder', 'Cloud', 'Cold', 'Common', 'Crag', 'Dark', 'Deep', 'Dew', 'Earth', 'Ember', 'Fair', 'Fire', 'Fist', 'Flame', 'Flat', 'Flint', 'Free', 'Full', 'Fuse', 'Gold', 'Grand', 'Great', 'Hammer', 'Hard', 'Heavy', 'High', 'Humble', 'Iron', 'Keen', 'Lone', 'Low', 'Molten', 'Noble', 'Plain', 'Pride', 'Proud', 'Pyre', 'Rock', 'Rumble', 'Shield', 'Silent', 'Simple', 'Single', 'Soft', 'Solid', 'Steel', 'Stern', 'Stone', 'Storm', 'Stout', 'Strong', 'Terra', 'Thunder', 'Titan', 'True', 'War', 'Wild', 'Winter', 'Wise'];
  const nm14 = ['arm', 'bash', 'beam', 'beard', 'belly', 'bend', 'blaze', 'bluff', 'bough', 'brace', 'brand', 'breath', 'brew', 'brow', 'crest', 'crusher', 'dew', 'fall', 'fell', 'flare', 'flow', 'force', 'forge', 'fury', 'gaze', 'gem', 'gleam', 'glide', 'glow', 'grip', 'guard', 'gut', 'hair', 'hand', 'heart', 'helm', 'hide', 'horn', 'ingot', 'mane', 'mantle', 'maul', 'might', 'more', 'pelt', 'punch', 'ridge', 'roar', 'scar', 'shade', 'shadow', 'shard', 'shot', 'shout', 'sky', 'snow', 'spark', 'steam', 'strength', 'stride', 'strike', 'surge', 'sword', 'thorn', 'track', 'ward'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd7 = Math.floor(Math.random() * nm9.length);
    rnd8 = Math.floor(Math.random() * nm10.length);
    rnd10 = Math.floor(Math.random() * nm12.length);
    if (i % 3 === 0 && i % 2 !== 0) {
      nameLast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
    } else if (i % 2 === 0) {
      rnd9 = Math.floor(Math.random() * nm13.length);
      rnd10 = Math.floor(Math.random() * nm14.length);
      nameLast = nm13[rnd9] + nm14[rnd10];
    } else {
      rnd9 = Math.floor(Math.random() * nm10.length);
      rnd11 = Math.floor(Math.random() * nm11.length);
      nameLast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 5) {
        while (rnd < 6) {
          rnd = Math.floor(Math.random() * nm5.length);
        }
        names = `${nm5[rnd] + nm6[rnd2] + nm8[rnd5]}  ${nameLast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5]} ${nameLast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd5]}  ${nameLast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} ${nameLast}`;
      }
    }
    return names;
  }
}
module.exports = dwarfs
