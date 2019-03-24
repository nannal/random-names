export default function dark_elfs() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['c', 'd', 'g', 'k', 'l', 'm', 'n', 'q', 'r', 't', 'v'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ou', 'au'];
  const nm3 = ['c', 'cc', 'cr', 'ch', 'g', 'gh', 'gr', 'gn', 'k', 'kh', 'kr', 'kk', 'kz', 'l', 'll', 'lk', 'lc', 'lg', 'n', 'nn', 'nk', 'r', 'rv', 'rk', 'rc', 'rg', 'rz', 'rl', 'tr', 'th', 'vr', 'v', 'c', 'g', 'k', 'l', 'n', 'r', 'v', 'c', 'g', 'k', 'l', 'n', 'r', 'v', 'c', 'g', 'k', 'l', 'n', 'r', 'v'];
  const nm4 = ['c', 'k', 'l', 'n', 'r', 's', 't', 'th'];
  const nm5 = ['c', 'f', 'h', 'l', 'm', 'n', 'r', 's', 'sh', 'th', 'v'];
  const nm6 = ['a', 'e', 'i', 'o'];
  const nm7 = ['b', 'bh', 'c', 'ch', 'gh', 'gg', 'h', 'hh', 'kh', 'l', 'll', 'lr', 'ln', 'lv', 'r', 'rr', 'rt', 'rl', 'rs', 'rn', 'rv', 's', 'ss', 'sh', 't', 'tt', 'th', 'v', 'vh', 'b', 'c', 'h', 'l', 'r', 's', 't', 'v', 'kh', 'b', 'c', 'h', 'l', 'r', 's', 't', 'v', 'kh'];
  const nm8 = ['h', 'n', 'l', 'sh', 's', 'th', '', '', '', '', ''];
  const nm9 = ['amber', 'ash', 'battle', 'blood', 'cinder', 'dark', 'dawn', 'dead', 'death', 'doom', 'dread', 'dusk', 'dust', 'ember', 'fall', 'fallen', 'fell', 'fire', 'flame', 'gloom', 'grim', 'haze', 'hell', 'nether', 'night', 'pyre', 'rage', 'rain', 'shade', 'shadow', 'silent', 'skull', 'steel', 'storm', 'thunder', 'void', 'war', 'wild'];
  const nm10 = ['arm', 'arrow', 'axe', 'bane', 'basher', 'binder', 'blade', 'blaze', 'bleeder', 'blight', 'breaker', 'bringer', 'caller', 'cleaver', 'crusher', 'cutter', 'eye', 'eyes', 'fall', 'fury', 'grip', 'hand', 'heart', 'hunter', 'mantle', 'maul', 'might', 'more', 'reaper', 'reaver', 'rider', 'ripper', 'runner', 'scar', 'seeker', 'shade', 'shadow', 'shard', 'slayer', 'sorrow', 'stalker', 'stride', 'strike', 'striker', 'surge', 'taker'];


  const i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm9.length);
    rnd2 = Math.floor(Math.random() * nm10.length);
    while (nm9[rnd] === nm10[rnd2]) {
      rnd2 = Math.floor(Math.random() * nm10.length);
    }
    nameL = nm9[rnd] + nm10[rnd2];
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 5) {
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5]} ${nameL}`;
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5]} ${nameL}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} ${nameL}`;
      } else {
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5]} ${nameL}`;
      }
    }
    return names;
  }
}
