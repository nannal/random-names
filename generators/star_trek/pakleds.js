function pakleds() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['B', 'D', 'G', 'H', 'K', 'L', 'N', 'M', 'P', 'R'];
  const nm2 = ['a', 'e', 'o', 'i', 'u'];
  const nm3 = ['b', 'd', 'g', 'h', 'k', 'l', 'n', 'm', 'p', 'r'];
  const nm4 = ['b', 'd', 'g', 'h', 'k', 'l', 'n', 'm', 'p', 'r', '', ''];
  const nm5 = ['b', 'd', 'g', 'k', 'l', 'm', 'p', 'r', 'gg', 'kk', 'll', 'rr'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      while (rnd4 === rnd3) {
        rnd4 = Math.floor(Math.random() * nm4.length);
      }
      rnd5 = Math.floor(Math.random() * nm2.length);
      rnd6 = Math.floor(Math.random() * nm3.length);
      rnd7 = Math.floor(Math.random() * nm4.length);
      while (rnd6 === rnd7) {
        rnd7 = Math.floor(Math.random() * nm4.length);
      }
      rnd8 = Math.floor(Math.random() * nm2.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm2[rnd5] + nm3[rnd6] + nm4[rnd7] + nm2[rnd8];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      while (rnd4 === rnd3) {
        rnd4 = Math.floor(Math.random() * nm4.length);
      }
      rnd5 = Math.floor(Math.random() * nm2.length);
      rnd6 = Math.floor(Math.random() * nm3.length);
      rnd7 = Math.floor(Math.random() * nm4.length);
      while (rnd6 === rnd7) {
        rnd7 = Math.floor(Math.random() * nm4.length);
      }
      rnd8 = Math.floor(Math.random() * nm2.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm2[rnd5] + nm3[rnd6] + nm4[rnd7] + nm2[rnd8] + nm5[rnd5];
    }
    return names;
  }
}
module.exports = pakleds
