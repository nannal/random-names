function korunnais() {
  let namelast;
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd7;
  let rnd8;
  let rnd10;
  let rnd11;
  let rnd12;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'br', 'd', 'g', 'gr', 'k', 'l', 'm', 'n', 'pr', 'r', 's', 't', 'th', 'tr', 'v', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'io', 'ii', 'ou'];
  const nm3 = ['c', 'd', 'ff', 'g', 'k', 'l', 'll', 'mm', 'n', 'nn', 'r', 'rr', 's', 'ss', 'th', 'v', 'z'];
  const nm4 = ['c', 'g', 'k', 'l', 'm', 'n', 'r', 'rz', 's', 'sh', 'th', 'z'];
  const nm5 = ['d', 'dh', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'sh', 't', 'th', 'w', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ia', 'ie', 'ea', 'ae', 'eo'];
  const nm7 = ['c', 'dd', 'f', 'ff', 'g', 'h', 'l', 'll', 'm', 'mm', 'n', 'nn', 'r', 'rr', 's', 'ss', 'sh', 't', 'th', 'v', 'w', 'z'];
  const nm9 = ['d', 'g', 'gr', 'h', 'l', 'm', 'n', 'r', 's', 't', 'th', 'tr', 'v', 'w', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'u'];
  const nm11 = ['dd', 'dn', 'dl', 'fn', 'fl', 'fd', 'gn', 'gm', 'gd', 'gl', 'gg', 'hn', 'hm', 'hd', 'hv', 'll', 'ln', 'ld', 'lm', 'lv', 'mm', 'mn', 'md', 'ml', 'mv', 'mt', 'nd', 'nn', 'nv', 'nl', 'ng', 'nd', 'nf', 'nt', 'pt', 'pp', 'pn', 'pm', 'pd', 'pt', 'st', 'ss', 'sn', 'sm', 'tn', 'tm', 'tv', 'vv', 'vd', 'vn', 'vl', 'vm'];
  const nm12 = ['', '', '', '', '', '', '', 'l', 'm', 'n', 'r', 's'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd7 = Math.floor(Math.random() * nm9.length);
    rnd8 = Math.floor(Math.random() * nm10.length);
    rnd10 = Math.floor(Math.random() * nm11.length);
    rnd11 = Math.floor(Math.random() * nm10.length);
    rnd12 = Math.floor(Math.random() * nm12.length);
    namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd10] + nm10[rnd11] + nm12[rnd12];
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4]} ${namelast}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        while (rnd < 4) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd5]}  ${namelast}`;
      } else if (i < 8) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4]}  ${namelast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]}  ${namelast}`;
      }
    }
    return names;
  }
}
module.exports = korunnais
