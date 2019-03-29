function dwarfs() {
  let names;
  let lname;
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
  let rnd13;
  let rnd14;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'bl', 'br', 'c', 'cr', 'd', 'dh', 'f', 'fl', 'g', 'gr', 'j', 'k', 'kr', 'l', 'm', 'p', 'r', 'rh', 'shr', 'sk', 'sh', 'th', 't', 'v', 'w', 'x', 'y', 'z', 'zh'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ie', 'au', 'ia', 'ei', 'ou'];
  const nm3 = ['c', 'cc', 'cr', 'd', 'dh', 'dr', 'g', 'gg', 'gm', 'gn', 'h', 'l', 'lc', 'ld', 'lfl', 'lk', 'll', 'lm', 'lr', 'lt', 'm', 'mm', 'mn', 'n', 'nb', 'nc', 'nd', 'nn', 'nr', 'nt', 'r', 'rb', 'rcl', 'rd', 'rg', 'rl', 'rm', 'rn', 'rp', 'rt', 'rth', 's', 'sc', 'sr', 'st', 'v', 'ym', 'z'];
  const nm4 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ie', 'au', 'ia', 'ei', 'ou'];
  const nm5 = ['', 'c', 'cc', 'cr', 'd', 'dh', 'dr', 'g', 'gg', 'gm', 'gn', 'h', 'l', 'lc', 'ld', 'lfl', 'lk', 'll', 'lm', 'lr', 'lt', 'm', 'mm', 'mn', 'n', 'nb', 'nc', 'nd', 'nn', 'nr', 'nt', 'r', 'rb', 'rcl', 'rd', 'rg', 'rl', 'rm', 'rn', 'rp', 'rt', 'rth', 's', 'sc', 'sr', 'st', 'v', 'ym', 'z'];
  const nm7 = ['', '', '', '', 'b', 'ck', 'k', 'l', 'ld', 'lm', 'n', 'nd', 'nn', 'rn', 'rm', 'rd', 'r', 'rk', 'rd', 's'];
  const nm8 = ['', '', '', '', '', 'b', 'br', 'c', 'ch', 'cl', 'd', 'dh', 'f', 'fl', 'g', 'gh', 'gr', 'l', 'm', 'n', 'p', 'pr', 'r', 'rh', 'sh', 's', 'st', 'th', 't', 'v', 'w', 'y', 'z', 'zh'];
  const nm9 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'eu', 'ea', 'ia', 'eo', 'io'];
  const nm10 = ['c', 'cc', 'ch', 'd', 'dh', 'dd', 'g', 'gl', 'gn', 'gm', 'gh', 'gr', 'h', 'l', 'ln', 'lm', 'll', 'lr', 'ls', 'm', 'mm', 'mn', 'n', 'ns', 'nm', 'nl', 'ng', 'nz', 'nw', 'p', 'ph', 'r', 'rh', 'rl', 'rn', 'rm', 'rs', 's', 'sh', 'sm', 'sn', 'st', 'v', 'w', 'lw', 'z', 'zh', 'zn', 'zm'];
  const nm11 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'eu', 'ea', 'ia', 'eo', 'io'];
  const nm12 = ['', 'c', 'cc', 'ch', 'd', 'dh', 'dd', 'g', 'gl', 'gn', 'gm', 'gh', 'gr', 'h', 'l', 'ln', 'lm', 'll', 'lr', 'ls', 'm', 'mm', 'mn', 'n', 'ns', 'nm', 'nl', 'ng', 'nz', 'nw', 'p', 'ph', 'r', 'rh', 'rl', 'rn', 'rm', 'rs', 's', 'sh', 'sm', 'sn', 'st', 'v', 'w', 'lw', 'z', 'zh', 'zn', 'zm'];
  const nm14 = ['', '', '', '', '', '', '', '', '', 'n', 'th', 's'];
  const nm15 = ['', '', '', '', '', 'b', 'br', 'c', 'ch', 'cr', 'd', 'dr', 'f', 'g', 'gr', 'h', 'k', 'l', 'm', 'n', 'p', 'pr', 'sk', 'st', 'str', 's', 't', 'tr', 'v', 'z'];
  const nm16 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'au', 'ei', 'ia', 'ea', 'ai'];
  const nm17 = ['c', 'cc', 'ck', 'cr', 'dn', 'g', 'gg', 'gl', 'gn', 'gr', 'hl', 'hlb', 'hln', 'hn', 'l', 'ld', 'lm', 'ln', 'lr', 'n', 'nd', 'ngv', 'nl', 'nm', 'nr', 'r', 'rd', 'rg', 'rl', 'rn', 'rt', 's', 'sr', 'ssl', 'st', 'tt', 'v', 'zd'];
  const nm18 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'au', 'ei', 'ia', 'ea', 'ai'];
  const nm19 = ['', 'c', 'cc', 'ck', 'cr', 'dn', 'g', 'gg', 'gl', 'gn', 'gr', 'hl', 'hlb', 'hln', 'hn', 'l', 'ld', 'lm', 'ln', 'lr', 'n', 'nd', 'ngv', 'nl', 'nm', 'nr', 'r', 'rd', 'rg', 'rl', 'rn', 'rt', 's', 'sr', 'ssl', 'st', 'tt', 'v', 'zd'];
  const nm20 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'au', 'ei', 'ia', 'ea', 'ai'];
  const nm21 = ['', '', '', '', '', 'ck', 'ggs', 'gs', 'l', 'ld', 'ls', 'lt', 'm', 'n', 'r', 'rd', 'rg', 's', 'ss', 'st', 't', 'y', 'ys'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd8 = Math.floor(Math.random() * nm15.length);
    rnd9 = Math.floor(Math.random() * nm16.length);
    rnd10 = Math.floor(Math.random() * nm17.length);
    rnd11 = Math.floor(Math.random() * nm18.length);
    rnd12 = Math.floor(Math.random() * nm19.length);
    rnd13 = Math.floor(Math.random() * nm20.length);
    rnd14 = Math.floor(Math.random() * nm21.length);
    if (rnd11 < 60) {
      rnd12 = 0;
      rnd13 = 0;
    } else {
      while (rnd12 === 0) {
        rnd12 = Math.floor(Math.random() * nm19.length);
      }
    }
    lname = nm15[rnd8] + nm16[rnd9] + nm17[rnd10] + nm18[rnd11] + nm19[rnd12] + nm20[rnd13] + nm21[rnd14];
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm8.length);
      rnd2 = Math.floor(Math.random() * nm9.length);
      rnd3 = Math.floor(Math.random() * nm10.length);
      rnd6 = Math.floor(Math.random() * nm9.length);
      rnd7 = Math.floor(Math.random() * nm14.length);
      if (i < 5) {
        names = `${nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm9[rnd6] + nm14[rnd7]} ${lname}`;
      } else {
        rnd4 = Math.floor(Math.random() * nm11.length);
        rnd5 = Math.floor(Math.random() * nm12.length);
        if (rnd4 < 30) {
          rnd5 = 0;
          rnd6 = 0;
        } else {
          while (rnd5 === 0) {
            rnd5 = Math.floor(Math.random() * nm12.length);
          }
        }
        names = `${nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm12[rnd5] + nm9[rnd6] + nm14[rnd7]} ${lname}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd6 = Math.floor(Math.random() * nm2.length);
      rnd7 = Math.floor(Math.random() * nm7.length);
      if (i < 5) {
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd6] + nm7[rnd7]} ${lname}`;
      } else {
        rnd4 = Math.floor(Math.random() * nm4.length);
        rnd5 = Math.floor(Math.random() * nm5.length);
        if (rnd4 < 40) {
          rnd5 = 0;
          rnd6 = 0;
        } else {
          while (rnd5 === 0) {
            rnd5 = Math.floor(Math.random() * nm5.length);
          }
        }
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm2[rnd6] + nm7[rnd7]} ${lname}`;
      }
    }
    return names;
  }
}
module.exports = dwarfs
