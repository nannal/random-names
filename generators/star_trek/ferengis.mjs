var sample = require ('lodash.sample')

export default function ferengis() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aba', 'Adre', 'Aga', 'Arga', 'Arri', 'Ba', 'Be', 'Belo', 'Beri', 'Bo', 'Bra', 'Bre', 'Broi', 'Bru', 'Da', 'De', 'Di', 'Do', 'Dra', 'Dre', 'Droi', 'Fa', 'Fale', 'Fare', 'Fna', 'Fra', 'Fre', 'Fri', 'Froo', 'Ga', 'Gai', 'Ge', 'Gegi', 'Gi', 'Gla', 'Gna', 'Go', 'Gora', 'Gra', 'Gri', 'Groo', 'Ha', 'Hai', 'Ho', 'Hoe', 'Hora', 'Hra', 'Iga', 'Ige', 'Ira', 'Iro', 'Ita', 'Ka', 'Kara', 'Kay', 'Kaza', 'Ke', 'Ki', 'Kola', 'Kra', 'Kre', 'Kri', 'La', 'Le', 'Lera', 'Lete', 'Li', 'Lo', 'Lu', 'Luri', 'Ma', 'Mala', 'Maza', 'Mo', 'Mona', 'Mora', 'Mu', 'Na', 'Nala', 'Nazra', 'Nera', 'Ni', 'Nibo', 'Nilra', 'No', 'Nu', 'Ola', 'Ona', 'Ora', 'Orda', 'Orpa', 'Oza', 'Pa', 'Pela', 'Pera', 'Pi', 'Ple', 'Pra', 'Ra', 'Rate', 'Raza', 'Re', 'Rha', 'Ro', 'Rotto', 'Ruta', 'Sa', 'Smee', 'So', 'Solo', 'Sova', 'Sra', 'Sto', 'Sura', 'Ta', 'Tega', 'To', 'Torro', 'Toza', 'Tra', 'Tro', 'Tu', 'Turo', 'Tye', 'Ubo', 'Ugro', 'Ulda', 'Uli', 'Ura', 'Uro', 'Ya', 'Yaza', 'Ye', 'Yna', 'Yora', 'Za', 'Ze', 'Zira', 'Zra', 'Zyla'];
  const nm2 = ['ba', 'bac', 'bar', 'bor', 'c', 'car', 'ck', 'ctor', 'd', 'dac', 'dok', 'dor', 'g', 'ga', 'gg', 'ggie', 'gis', 'go', 'k', 'ka', 'kag', 'kor', 'l', 'la', 'ldar', 'lis', 'lok', 'lva', 'm', 'mag', 'mp', 'mra', 'n', 'nk', 'no', 'nog', 'nt', 'nzo', 'p', 'pak', 'pax', 'pum', 'rad', 'rbo', 'rik', 'rin', 'ron', 'rot', 'rpax', 'rr', 'rrot', 'rta', 's', 'sax', 'sh', 'ss', 't', 'ta', 'tax', 'tek', 'va', 'vag', 'vak', 'var', 'xa', 'xac', 'xon', 'xor', 'za', 'zar', 'zig', 'zoc'];
  const nm3 = ['A', 'Ai', 'Ali', 'Ana', 'Ara', 'Be', 'Bee', 'Bela', 'Bia', 'Bira', 'Bli', 'Bo', 'Bona', 'Bre', 'Da', 'De', 'Dera', 'Dia', 'Dina', 'Do', 'Dri', 'Fa', 'Fe', 'Fena', 'Fesa', 'Fhi', 'Fi', 'Fia', 'Fira', 'Ga', 'Gase', 'Ge', 'Gela', 'Geli', 'Ghe', 'Gi', 'Gine', 'Gira', 'Giya', 'Gre', 'Gri', 'Hela', 'Hena', 'Hi', 'Hia', 'Hy', 'Hyra', 'I', 'Ina', 'Ira', 'Iro', 'Isa', 'Ka', 'Ke', 'Keha', 'Kella', 'Kena', 'Ki', 'Kia', 'Kisa', 'Kora', 'Kre', 'La', 'Le', 'Lera', 'Leya', 'Li', 'Lina', 'Losa', 'Ma', 'Mane', 'Me', 'Mero', 'Mi', 'Mia', 'Mo', 'Nala', 'Ne', 'Nema', 'Nemo', 'Nia', 'Nira', 'No', 'Noa', 'Nosi', 'O', 'Ole', 'One', 'Ora', 'Ori', 'Oza', 'Pa', 'Pe', 'Peha', 'Phi', 'Poli', 'Pri', 'Re', 'Rema', 'Rena', 'Ri', 'Ria', 'Rika', 'Rosa', 'Roxe', 'Sa', 'Sela', 'Seno', 'Sha', 'Si', 'Sira', 'Sra', 'Sti', 'Ta', 'Te', 'Tewa', 'Teza', 'Thi', 'Tia', 'Tila', 'Tiro', 'To', 'Tona', 'U', 'Ula', 'Uni', 'Ure', 'Uye', 'Uza', 'Ya', 'Yala', 'Ye', 'Yne', 'Yra', 'Zane', 'Ze', 'Zeri', 'Zia'];
  const nm4 = ['ba', 'bel', 'bis', 'bora', 'ca', 'cera', 'cine', 'cis', 'd', 'de', 'del', 'dis', 'ga', 'gel', 'gela', 'gena', 'gis', 'gora', 'k', 'kera', 'kia', 'kis', 'l', 'le', 'lea', 'lera', 'lina', 'll', 'me', 'mera', 'mis', 'miya', 'n', 'ne', 'nia', 'nka', 'nni', 'no', 'pe', 'phi', 'pia', 'pora', 'r', 're', 'res', 'reya', 'ri', 'ris', 'rles', 'rni', 'rona', 'rra', 's', 'se', 'sh', 'sha', 'shi', 'shka', 'si', 'ta', 'the', 'ti', 'tis', 'va', 'vena', 'vil', 'vira', 'xaia', 'xen', 'xera', 'xi', 'zel', 'zenna', 'zera'];
  {
    if (type === 1) {
      names = sample(nm3) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2);
    }
    return names;
  }
}
