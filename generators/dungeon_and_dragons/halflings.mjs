var sample = require ('lodash.sample')

export default function halflings() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['An', 'Ar', 'Bar', 'Bel', 'Con', 'Cor', 'Dan', 'Dav', 'El', 'Er', 'Fal', 'Fin', 'Flyn', 'Gar', 'Go', 'Hal', 'Hor', 'Ido', 'Ira', 'Jan', 'Jo', 'Kas', 'Kor', 'La', 'Lin', 'Mar', 'Mer', 'Ne', 'Nor', 'Ori', 'Os', 'Pan', 'Per', 'Pim', 'Quin', 'Quo', 'Ri', 'Ric', 'San', 'Shar', 'Tar', 'Te', 'Ul', 'Uri', 'Val', 'Vin', 'Wen', 'Wil', 'Xan', 'Xo', 'Yar', 'Yen', 'Zal', 'Zen'];
  const nm2 = ['ace', 'amin', 'bin', 'bul', 'dak', 'dal', 'der', 'don', 'emin', 'eon', 'fer', 'fire', 'gin', 'hace', 'horn', 'kas', 'kin', 'lan', 'los', 'min', 'mo', 'nad', 'nan', 'ner', 'orin', 'os', 'pher', 'pos', 'ras', 'ret', 'ric', 'rich', 'rin', 'ry', 'ser', 'sire', 'ster', 'ton', 'tran', 'umo', 'ver', 'vias', 'von', 'wan', 'wrick', 'yas', 'yver', 'zin', 'zor', 'zu'];
  const nm3 = ['An', 'Ari', 'Bel', 'Bre', 'Cal', 'Chen', 'Dar', 'Dia', 'Ei', 'Eo', 'Eli', 'Era', 'Fay', 'Fen', 'Fro', 'Gel', 'Gra', 'Ha', 'Hil', 'Ida', 'Isa', 'Jay', 'Jil', 'Kel', 'Kith', 'Le', 'Lid', 'Mae', 'Mal', 'Mar', 'Ne', 'Ned', 'Odi', 'Ora', 'Pae', 'Pru', 'Qi', 'Qu', 'Ri', 'Ros', 'Sa', 'Shae', 'Syl', 'Tham', 'Ther', 'Tryn', 'Una', 'Uvi', 'Va', 'Ver', 'Wel', 'Wi', 'Xan', 'Xi', 'Yes', 'Yo', 'Zef', 'Zen'];
  const nm4 = ['alyn', 'ara', 'brix', 'byn', 'caryn', 'cey', 'da', 'dove', 'drey', 'elle', 'eni', 'fice', 'fira', 'grace', 'gwen', 'haly', 'jen', 'kath', 'kis', 'leigh', 'la', 'lie', 'lile', 'lienne', 'lyse', 'mia', 'mita', 'ne', 'na', 'ni', 'nys', 'ola', 'ora', 'phina', 'prys', 'rana', 'ree', 'ri', 'ris', 'sica', 'sira', 'sys', 'tina', 'trix', 'ula', 'vira', 'vyre', 'wyn', 'wyse', 'yola', 'yra', 'zana', 'zira'];
  {
    if (type === 1) {
      names = sample(nm3) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2);
    }
    return names;
  }
}
