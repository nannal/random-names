function gnomes() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  const type = Math.floor(Math.random() * 3.0);
  const nm1 = ['b', 'c', 'cl', 'd', 'fr', 'g', 'gn', 'h', 'j', 'kn', 'kl', 'l', 'm', 'n', 'p', 'r', 'sc', 'sl', 'sn', 'sm', 't', 'w', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'y', 'y', 'y', 'oo', 'ee', 'aa', 'ie', 'ai'];
  const nm3 = ['bbn', 'bk', 'bn', 'bbr', 'db', 'dd', 'ddw', 'dn', 'ddn', 'gn', 'gb', 'k', 'km', 'kn', 'kp', 'kw', 'lk', 'lb', 'llb', 'lv', 'mb', 'mj', 'mm', 'mp', 'mt', 'mw', 'mz', 'md', 'nb', 'nj', 'nk', 'nkk', 'nsb', 'nsm', 'nsn', 'nz', 'nzb', 'ngn', 'pn', 'pp', 'pr', 'r', 'rk', 'rb', 'rw', 'v'];
  const nm4 = ['c', 'ck', 'g', 'm', 'p', 'r', 'rt', 'ss', 'st', 't'];
  const nm5 = ['', '', '', '', 'bl', 'c', 'cl', 'f', 'fl', 'fn', 'g', 'gl', 'gn', 'h', 'l', 'm', 'n', 'p', 'ph', 'sh', 'sl', 'sn', 'sm', 't', 'th', 'w'];
  const nm6 = ['bbl', 'bbn', 'bn', 'bl', 'db', 'dd', 'ddl', 'dl', 'dw', 'ddw', 'dn', 'ddn', 'gn', 'gb', 'gl', 'km', 'kn', 'kw', 'lk', 'lm', 'lw', 'lb', 'llb', 'llm', 'ln', 'lln', 'lv', 'mb', 'mm', 'mw', 'md', 'nb', 'nk', 'nkl', 'nsm', 'nsn', 'ngl', 'ngn', 'pn', 'pp', 'pw', 'pr', 'r', 'rb', 'rw', 'v'];
  const nm7 = ['', '', '', 'l', 'll', 'm', 'n', 'p', 'r', 's', 'ss', 't', 'th'];
  const nm8 = ['', '', '', '', 'b', 'bl', 'c', 'cl', 'd', 'f', 'fl', 'fn', 'g', 'gl', 'gn', 'h', 'j', 'kl', 'kn', 'l', 'm', 'n', 'p', 'ph', 'r', 'sc', 'sh', 'sl', 'sn', 'sm', 't', 'th', 'w', 'z'];
  const nm9 = ['bbl', 'bbn', 'bk', 'bn', 'bl', 'bbr', 'db', 'dd', 'ddl', 'dl', 'dw', 'ddw', 'dn', 'ddn', 'gn', 'gb', 'gl', 'k', 'kl', 'km', 'kn', 'kp', 'kw', 'lk', 'lm', 'lw', 'lb', 'llb', 'llm', 'ln', 'lln', 'lv', 'mb', 'mj', 'mm', 'mp', 'mt', 'mw', 'mz', 'md', 'nb', 'nj', 'nk', 'nkk', 'nkl', 'nsb', 'nsm', 'nsn', 'nz', 'nzb', 'ngl', 'ngn', 'pn', 'pp', 'pw', 'pr', 'r', 'rk', 'rb', 'rw', 'v'];
  const nm10 = ['', '', '', '', 'c', 'ck', 'g', 'l', 'll', 'm', 'n', 'p', 'r', 'rt', 's', 'ss', 'st', 't'];
  const nm11 = ['b', 'c', 'd', 'g', 'k', 'm', 'n', 'r', 'v'];
  const nm12 = ['b', 'd', 'f', 'h', 'l', 'm', 'n', 's', 'v', 'w'];
  const nm13 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'v', 'w'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm6.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm7.length);
      if (i < 5) {
        while (rnd < 4) {
          rnd = Math.floor(Math.random() * nm5.length);
        }
        names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5];
      } else if (i < 7) {
        rnd6 = Math.floor(Math.random() * nm12.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm12[rnd6] + nm2[rnd7] + nm7[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm12.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm5[rnd] + nm2[rnd2] + nm12[rnd6] + nm2[rnd7] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5];
      }
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm8.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm9.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm10.length);
      if (i < 5) {
        while (rnd < 4) {
          rnd = Math.floor(Math.random() * nm8.length);
        }
        names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm2[rnd4] + nm10[rnd5];
      } else if (i < 7) {
        rnd6 = Math.floor(Math.random() * nm13.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm2[rnd4] + nm13[rnd6] + nm2[rnd7] + nm10[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm12.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm8[rnd] + nm2[rnd2] + nm13[rnd6] + nm2[rnd7] + nm9[rnd3] + nm2[rnd4] + nm10[rnd5];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
      } else if (i < 7) {
        rnd6 = Math.floor(Math.random() * nm11.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm11[rnd6] + nm2[rnd7] + nm4[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm12.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm11[rnd6] + nm2[rnd7] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
      }
    }
    return names;
  }
}
module.exports = gnomes
