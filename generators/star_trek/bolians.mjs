var sample = require ('lodash.sample')

function bolians() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ado', 'Ara', 'Ardo', 'Ba', 'Bo', 'Bra', 'Che', 'Co', 'Cra', 'Da', 'Dai', 'Dri', 'Ga', 'Grai', 'Gri', 'Ha', 'Hi', 'Hra', 'La', 'Li', 'Lo', 'Ma', 'Mai', 'Mo', 'Na', 'Ni', 'No', 'Oda', 'Ori', 'Orla', 'Qa', 'Qe', 'Qhi', 'Ra', 'Rai', 'Ri', 'Sa', 'Sho', 'Sra', 'The', 'To', 'Tra', 'Va', 'Vo', 'Vri', 'Xa', 'Xai', 'Xi', 'Ya', 'Yai', 'Ye', 'Za', 'Zai', 'Zi'];
  const nm2 = ['d', 'dar', 'daw', 'ds', 'f', 'fe', 'fel', 'fer', 'g', 'ge', 'gg', 'gon', 'k', 'ken', 'kin', 'kk', 'l', 'lar', 'll', 'ls', 'm', 'man', 'mix', 'ms', 'n', 'nd', 'nn', 'nor', 'q', 'q\'no', 'q\'ra', 'q\'si', 'q\'ta', 'qar', 'r', 'ran', 'rr', 'rs', 's', 'sh', 'sia', 'ss', 't', 'thaw', 'tix', 'tt', 'w', 'wd', 'wer', 'ws', 'x', 'xin', 'xor', 'xx'];
  const nm3 = ['Ala', 'Ana', 'Ara', 'Bela', 'Bine', 'By', 'Che', 'Cia', 'Cila', 'Di', 'Dire', 'Do', 'Eli', 'Ena', 'Era', 'Fely', 'Fri', 'Fy', 'Gile', 'Go', 'Gy', 'He', 'Hia', 'Hira', 'Keno', 'Kise', 'Ky', 'Lena', 'Lo', 'Ly', 'Mi', 'Mite', 'My', 'Myne', 'Nera', 'Ni', 'Ny', 'Oli', 'Ora', 'Oshe', 'Qena', 'Qhi', 'Qi', 'Rely', 'Ri', 'Ria', 'Se', 'Seri', 'So', 'Tia', 'Tri', 'Ty', 'Veli', 'Vira', 'Vy', 'Wane', 'Wile', 'Wy', 'Ya', 'Yle', 'Yra', 'Ze', 'Zi'];
  const nm4 = ['des', 'dia', 'dit', 'dra', 'ha', 'hara', 'his', 'hya', 'kena', 'kia', 'kis', 'kye', 'lara', 'lea', 'leya', 'lwat', 'mena', 'mia', 'mis', 'moya', 'na', 'ndis', 'ndra', 'nila', 'sea', 'sen', 'sia', 'sina', 'tea', 'tena', 'tia', 'tra', 'ves', 'vil', 'vria', 'vya', 'wela', 'wia', 'win', 'wira', 'xea', 'xena', 'xia', 'xis', 'zena', 'zia', 'zila', 'zira'];
  const nm5 = ['Adi', 'Ara', 'Arli', 'Bela', 'Bore', 'Bro', 'Cha', 'Chu', 'Cora', 'Dina', 'Do', 'Dra', 'Era', 'Erno', 'Esra', 'Fera', 'Fo', 'Fro', 'Gadi', 'Gara', 'Gro', 'Ha', 'Hera', 'Ho', 'Kera', 'Ki', 'Kra', 'La', 'Lica', 'Lyna', 'Ma', 'Mari', 'Mo', 'Na', 'Ne', 'Nora', 'Ora', 'Orna', 'Oro', 'Qa', 'Qira', 'Qo', 'Ra', 'Re', 'Rina', 'Sa', 'Sina', 'So', 'Tado', 'Tari', 'Tra', 'Va', 'Vade', 'Viro', 'Wa', 'Wera', 'Wora', 'Xa', 'Xira', 'Xo', 'Za', 'Zira', 'Zo'];
  const nm6 = ['d', 'das', 'dd', 'din', 'f', 'far', 'ff', 'fit', 'g', 'gg', 'git', 'gon', 'ha', 'har', 'hino', 'ht', 'l', 'lar', 'lin', 'll', 'mar', 'min', 'mm', 'nar', 'nat', 'nin', 'nn', 'ra', 'ras', 'ro', 'rr', 'sa', 'sin', 'slo', 'ss', 'ta', 'ten', 'tor', 'tt', 'wa', 'was', 'wat'];
  {
    if (type === 1) {
      names = `${sample(nm3) + sample(nm4)} ${sample(nm5)}${sample(nm6)}`;
    } else {
      names = `${sample(nm1) + sample(nm2)} ${sample(nm5)}${sample(nm6)}`;
    }
    return names;
  }
}
module.exports = bolians
