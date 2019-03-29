var sample = require ('lodash.sample')

export default function eladrins() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ara', 'Aran', 'Ber', 'Bran', 'Cor', 'Cru', 'Da', 'Daye', 'Elro', 'Ere', 'Far', 'Fyla', 'Gal', 'Galin', 'Ha', 'Hor', 'Im', 'Ira', 'Ja', 'Jor', 'Kru', 'Kuo', 'Lan', 'Lic', 'Mar', 'Min', 'Nal', 'Nark', 'Ola', 'Otir', 'Pae', 'Pan', 'Qua', 'Quo', 'Rel', 'Riar', 'Sarn', 'Sove', 'Tav', 'Trin', 'Uri', 'Veth', 'Vic', 'Wal', 'Wrug', 'Xan', 'Yan', 'Yor', 'Zen', 'Zor'];
  const nm2 = ['aris', 'aster', 'baver', 'bin', 'card', 'corin', 'dan', 'darai', 'dartis', 'don', 'emin', 'erta', 'fis', 'fros', 'geon', 'grephor', 'heros', 'horn', 'ikul', 'iver', 'kris', 'kul', 'lias', 'liss', 'mendi', 'meral', 'mil', 'morn', 'neiros', 'nis', 'okas', 'oros', 'peiros', 'prath', 'ratra', 'reth', 'rian', 'rion', 'sirak', 'ster', 'thas', 'tihr', 'torin', 'urian', 'uvir', 'van', 'vis', 'wirn', 'worn', 'xeral', 'xis', 'ykos', 'yth', 'zeiros', 'zion'];
  const nm3 = ['Al', 'An', 'Anas', 'Be', 'Bri', 'Cae', 'Cyl', 'Dris', 'Dur', 'Eil', 'Ena', 'Fae', 'Fan', 'Gru', 'Gyl', 'Hen', 'Hyl', 'Illa', 'Ire', 'Jar', 'Jelen', 'Kai', 'Kora', 'Les', 'Lyv', 'Mag', 'Me', 'Nai', 'Neri', 'Ol', 'Ori', 'Pi', 'Prys', 'Qi', 'Que', 'Ri', 'Rol', 'Sa', 'Sha', 'Thei', 'Tri', 'Ul', 'Ura', 'Va', 'Vela', 'Wes', 'Wre', 'Xyr', 'Ylla', 'Zen'];
  const nm4 = ['bis', 'bynn', 'cahne', 'caryn', 'celle', 'cena', 'diel', 'dys', 'faera', 'fyra', 'glyn', 'grys', 'hanna', 'hyssa', 'kiries', 'kyrath', 'lenae', 'lenna', 'lyn', 'lynna', 'meiv', 'miris', 'mynis', 'nairra', 'neth', 'parys', 'prana', 'qirith', 'qis', 'raste', 'rastra', 'riele', 'rynna', 'sanna', 'shana', 'sys', 'thaea', 'tora', 'trianna', 'vara', 'viryn', 'vyre', 'wena', 'wyse', 'xana', 'xis', 'yana', 'yeira', 'zane', 'zora'];
  {
    if (type === 1) {
      names = sample(nm3) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2);
    }
    return names;
  }
}
