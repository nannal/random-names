function trills() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let rnd9;
  let rnd10;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', 'b', 'c', 'd', 'g', 'gr', 'h', 'j', 'k', 'm', 'n', 'r', 's', 't', 'v', 'vr', 'y'];
  const nm2 = ['ia', 'aa', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u'];
  const nm3 = ['b', 'd', 'dr', 'g', 'hj', 'j', 'l', 'm', 'mbl', 'n', 'r', 'rv', 'rz', 'rj'];
  const nm4 = ['', 'd', 'g', 'l', 'm', 'n', 'r', 'ss'];
  const nm5 = ['', 'b', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 's', 'r', 'v', 'y'];
  const nm6 = ['au', 'ia', 'ee', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u'];
  const nm7 = ['b', 'dr', 'dz', 'l', 'll', 'm', 'n', 'nh', 'r', 's', 'ss', 'sr', 'z', 'zr'];
  const nm8 = ['', '', '', '', '', 'd', 'h', 'l', 'll', 'm', 'n', 's'];
  const nm9 = ['b', 'd', 'gr', 'k', 'l', 'm', 'n', 'p', 'pr', 'r', 't', 'v'];
  const nm10 = ['', '', 'ee', 'ia', 'au', 'aa', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u'];
  const nm11 = ['', '', '', '', '', '', '', '', 'b', 'd', 'g', 'gr', 'gn', 'l', 'll', 'm', 'n', 'rr', 'r', 's', 'tn', 'v', 'z'];
  const nm12 = ['d', 'g', 'hn', 'hl', 'l', 'm', 'n', 'r', 'rs', 's', 'x'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      rnd6 = Math.floor(Math.random() * nm9.length);
      rnd7 = Math.floor(Math.random() * nm10.length);
      while (rnd7 < 2) {
        rnd7 = Math.floor(Math.random() * nm10.length);
      }
      rnd8 = Math.floor(Math.random() * nm11.length);
      rnd9 = Math.floor(Math.random() * nm10.length);
      if (rnd8 < 4) {
        while (rnd9 > 1) {
          rnd9 = Math.floor(Math.random() * nm10.length);
        }
      } else {
        while (rnd9 < 2) {
          rnd9 = Math.floor(Math.random() * nm10.length);
        }
      }
      rnd10 = Math.floor(Math.random() * nm12.length);
      names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5]} ${nm9[rnd6]}${nm10[rnd7]}${nm11[rnd8]}${nm10[rnd9]}${nm12[rnd10]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      if (rnd2 < 2) {
        while (rnd4 < 2) {
          rnd4 = Math.floor(Math.random() * nm2.length);
        }
      }
      rnd5 = Math.floor(Math.random() * nm4.length);
      rnd6 = Math.floor(Math.random() * nm9.length);
      rnd7 = Math.floor(Math.random() * nm10.length);
      while (rnd7 < 2) {
        rnd7 = Math.floor(Math.random() * nm10.length);
      }
      rnd8 = Math.floor(Math.random() * nm11.length);
      rnd9 = Math.floor(Math.random() * nm10.length);
      if (rnd8 < 4) {
        while (rnd9 > 1) {
          rnd9 = Math.floor(Math.random() * nm10.length);
        }
      } else {
        while (rnd9 < 2) {
          rnd9 = Math.floor(Math.random() * nm10.length);
        }
      }
      rnd10 = Math.floor(Math.random() * nm12.length);
      names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} ${nm9[rnd6]}${nm10[rnd7]}${nm11[rnd8]}${nm10[rnd9]}${nm12[rnd10]}`;
    }
    return names;
  }
}
module.exports = trills
