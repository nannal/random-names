function jemhadars() {
  let names;
  let names1;
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
  let rnd11;
  let rnd12;
  const nm1 = ['a', 'i', 'o', '', '', ''];
  const nm2 = ['d', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'y', 'z'];
  const nm3 = ['a', 'u', 'o', 'i', 'e', 'a'];
  const nm4 = ['d', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'z'];
  const nm5 = ['', '', 'd', 'g', 'k', 'n', 't'];
  const nm6 = ['a', '', '', '', ''];
  const nm7 = ['i', 'a', 'e', 'o', 'u', 'a', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm8 = ['d', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'x', 'y', 'z', 'kl', 'cl'];
  const nm9 = ['i', 'a', 'e', 'o', 'u', 'a', '', '', '', '', '', '', '', ''];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd6 = Math.floor(Math.random() * nm5.length);
      names1 = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm3[rnd3] + nm5[rnd6];
    } else {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      rnd4 = Math.floor(Math.random() * nm3.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      rnd6 = Math.floor(Math.random() * nm6.length);
      if (rnd5 < 2) {
        rnd6 = 1;
      }
      names1 = nm2[rnd] + nm3[rnd2] + nm4[rnd3] + nm3[rnd4] + nm5[rnd5] + nm6[rnd6];
    }
    rnd7 = Math.floor(Math.random() * nm7.length);
    rnd8 = Math.floor(Math.random() * nm8.length);
    rnd9 = Math.floor(Math.random() * nm3.length);
    rnd10 = Math.floor(Math.random() * nm4.length);
    rnd11 = Math.floor(Math.random() * nm9.length);
    rnd12 = Math.floor(Math.random() * nm5.length);
    if (rnd7 < 6) {
      rnd11 = 7;
      rnd12 = 0;
    }
    if (rnd11 > 5) {
      rnd12 = 0;
    }
    names = `${names1}'${nm7[rnd7]}${nm8[rnd8]}${nm3[rnd9]}${nm4[rnd10]}${nm7[rnd11]}${nm5[rnd12]}`;
    return names;
  }
}
module.exports = jemhadars
