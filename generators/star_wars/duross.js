function duross() {
  let namelast;
  let names;
  let rnd3b;
  let rnd4b;
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
  const nm1 = ['', '', '', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'r', 's', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ei', 'aa', 'ai', 'oo'];
  const nm3 = ['d', 'dw', 'hw', 'l', 'lz', 'ls', 'ld', 'lw', 'm', 'ms', 'mz', 'n', 'ns', 'nz', 'nss', 'nt', 'rw', 'z', 'd', 'l', 'm', 'n', 'z'];
  const nm4 = ['d', 'l', 'm', 'n', 'r'];
  const nm5 = ['ch', 'd', 'f', 'h', 'j', 'l', 'm', 'n', 'r', 's', 't', 'z'];
  const nm6 = ['ch', 'd', 'dw', 'h', 'hl', 'hn', 'hm', 'm', 'mm', 'mn', 'md', 'ms', 'n', 'nd', 'nl', 'nw', 'ns', 'nt', 'nn', 'rl', 'sl', 'd', 'h', 'm', 'n', 'l', 'll'];
  const nm7 = ['b', 'd', 'h', 'j', 'k', 'l', 'm', 's', 'st', 't', 'tr', 'v', 'zh'];
  const nm8 = ['b', 'bb', 'c', 'ch', 'ggl', 'gw', 'gl', 'gn', 'gg', 'g', 'h', 'kt', 'll', 'lm', 'lw', 'md', 'm', 'mp', 'nw', 'nd', 'nt', 'ns', 'n', 'rd', 'rl', 'rr', 'z'];
  const nm9 = ['', 'd', 'g', 'ks', 'l', 'lt', 'm', 'n', 's'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd6 = Math.floor(Math.random() * nm7.length);
    rnd7 = Math.floor(Math.random() * nm2.length);
    rnd8 = Math.floor(Math.random() * nm9.length);
    if (i % 2 === 0) {
      namelast = nm7[rnd6] + nm2[rnd7] + nm9[rnd8];
    } else {
      rnd9 = Math.floor(Math.random() * nm8.length);
      rnd10 = Math.floor(Math.random() * nm2.length);
      namelast = nm7[rnd6] + nm2[rnd7] + nm8[rnd9] + nm2[rnd10] + nm9[rnd8];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm6.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      if (i < 6) {
        names = `${nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4]}  ${namelast}`;
      } else {
        rnd5 = Math.floor(Math.random() * nm6.length);
        rnd6 = Math.floor(Math.random() * nm2.length);
        names = `${nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm6[rnd5] + nm2[rnd6]}  ${namelast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 4) {
        while (rnd < 3) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd5]}  ${namelast}`;
      } else if (i < 8) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]}  ${namelast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd3b = Math.floor(Math.random() * nm3.length);
        rnd4b = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd3b] + nm2[rnd4b] + nm4[rnd5]}  ${namelast}`;
      }
    }
    return names;
  }
}
module.exports = duross
