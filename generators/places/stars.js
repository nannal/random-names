function generator$places$stars() {
  const nm1 = ['a', 'e', 'i', 'o', 'u', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'br', 'cr', 'dr', 'gr', 'kr', 'pr', 'sr', 'tr', 'str', 'vr', 'zr', 'bl', 'cl', 'fl', 'gl', 'kl', 'pl', 'sl', 'vl', 'zl', 'ch', 'sh', 'ph', 'th'];
  const nm3 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'ai', 'ao', 'au', 'aa', 'ea', 'ei', 'eo', 'eu', 'ee', 'ia', 'io', 'iu', 'oa', 'oi', 'oo', 'ua', 'ue'];
  const nm4 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'br', 'cr', 'dr', 'gr', 'kr', 'pr', 'sr', 'tr', 'str', 'vr', 'zr', 'bl', 'cl', 'fl', 'hl', 'gl', 'kl', 'ml', 'nl', 'pl', 'sl', 'tl', 'vl', 'zl', 'ch', 'sh', 'ph', 'th', 'bd', 'cd', 'gd', 'kd', 'ld', 'md', 'nd', 'pd', 'rd', 'sd', 'zd', 'bs', 'cs', 'ds', 'gs', 'ks', 'ls', 'ms', 'ns', 'ps', 'rs', 'ts', 'ct', 'gt', 'lt', 'nt', 'st', 'rt', 'zt', 'bb', 'cc', 'dd', 'gg', 'kk', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt', 'zz'];
  const nm5 = ['', '', '', '', '', '', '', '', '', '', '', '', '', 'b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'x', 'y', 'b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'x', 'y', 'cs', 'ks', 'ls', 'ms', 'ns', 'ps', 'rs', 'ts', 'ys', 'ct', 'ft', 'kt', 'lt', 'nt', 'ph', 'sh', 'th'];


  i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd6 = Math.floor(Math.random() * nm5.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm5[rnd6];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm3.length);
      if (rnd3 > 14) {
        while (rnd5 > 14) {
          rnd5 = Math.floor(Math.random() * nm3.length);
        }
      }
      rnd6 = Math.floor(Math.random() * nm5.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm3[rnd5] + nm5[rnd6];
    }
    return names;
  }
}
