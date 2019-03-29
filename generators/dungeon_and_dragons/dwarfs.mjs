var sample = require ('lodash.sample')

export default function dwarfs() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ad', 'Am', 'Arm', 'Baer', 'Daer', 'Bal', 'Ban', 'Bar', 'Bel', 'Ben', 'Ber', 'Bhal', 'Bhar', 'Bhel', 'Bram', 'Bran', 'Brom', 'Brum', 'Bun', 'Dal', 'Dar', 'Dol', 'Dul', 'Eb', 'Em', 'Erm', 'Far', 'Gal', 'Gar', 'Ger', 'Gim', 'Gral', 'Gram', 'Gran', 'Grem', 'Gren', 'Gril', 'Gry', 'Gul', 'Har', 'Hjal', 'Hjol', 'Hjul', 'Hor', 'Hul', 'Hur', 'Kar', 'Khar', 'Kram', 'Krom', 'Krum', 'Mag', 'Mal', 'Mel', 'Mor', 'Muir', 'Mur', 'Rag', 'Ran', 'Reg', 'Rot', 'Thal', 'Thar', 'Thel', 'Ther', 'Tho', 'Thor', 'Thul', 'Thur', 'Thy', 'Tor', 'Ty', 'Um', 'Urm', 'Von'];
  const nm2 = ['adin', 'bek', 'brek', 'dahr', 'dain', 'dal', 'dan', 'dar', 'dek', 'dir', 'dohr', 'dor', 'drak', 'dram', 'dren', 'drom', 'drum', 'drus', 'duhr', 'dur', 'dus', 'garn', 'gram', 'gran', 'grim', 'grom', 'gron', 'grum', 'grun', 'gurn', 'gus', 'iggs', 'kahm', 'kam', 'kohm', 'kom', 'kuhm', 'kum', 'kyl', 'man', 'mand', 'mar', 'mek', 'miir', 'min', 'mir', 'mond', 'mor', 'mun', 'mund', 'mur', 'mus', 'myl', 'myr', 'nam', 'nar', 'nik', 'nir', 'nom', 'num', 'nur', 'nus', 'nyl', 'rak', 'ram', 'ren', 'rig', 'rigg', 'rik', 'rim', 'rom', 'ron', 'rum', 'rus', 'ryl', 'tharm', 'tharn', 'thran', 'thrum', 'thrun'];
  const nm3 = ['An', 'Ar', 'Baer', 'Bar', 'Bel', 'Belle', 'Bon', 'Bonn', 'Braen', 'Bral', 'Bralle', 'Bran', 'Bren', 'Bret', 'Bril', 'Brille', 'Brol', 'Bron', 'Brul', 'Bryl', 'Brylle', 'Bryn', 'Bryt', 'Byl', 'Bylle', 'Daer', 'Dear', 'Dim', 'Ed', 'Ein', 'El', 'Gem', 'Ger', 'Gwan', 'Gwen', 'Gwin', 'Gwyn', 'Gym', 'Ing', 'Jen', 'Jenn', 'Jin', 'Jyn', 'Kait', 'Kar', 'Kat', 'Kath', 'Ket', 'Las', 'Lass', 'Les', 'Less', 'Lyes', 'Lys', 'Lyss', 'Maer', 'Maev', 'Mar', 'Mis', 'Mist', 'Myr', 'Mys', 'Myst', 'Naer', 'Nal', 'Nas', 'Nass', 'Nes', 'Nis', 'Nys', 'Raen', 'Ran', 'Red', 'Reyn', 'Run', 'Ryn', 'Sar', 'Sol', 'Tas', 'Taz', 'Tis', 'Tish', 'Tiz', 'Tor', 'Tys', 'Tysh'];
  const nm4 = ['belle', 'bera', 'delle', 'deth', 'dielle', 'dille', 'dish', 'dora', 'dryn', 'dyl', 'giel', 'glia', 'glian', 'gwyn', 'la', 'leen', 'leil', 'len', 'lin', 'linn', 'lyl', 'lyn', 'lynn', 'ma', 'mera', 'mora', 'mura', 'myl', 'myla', 'nan', 'nar', 'nas', 'nera', 'nia', 'nip', 'nis', 'niss', 'nora', 'nura', 'nyl', 'nys', 'nyss', 'ra', 'ras', 'res', 'ri', 'ria', 'rielle', 'rin', 'ris', 'ros', 'ryl', 'ryn', 'sael', 'selle', 'sora', 'syl', 'thel', 'thiel', 'tin', 'tyn', 'va', 'van', 'via', 'vian', 'waen', 'win', 'wyn', 'wynn'];
  {
    if (type === 1) {
      names = sample(nm3) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2);
    }
    return names;
  }
}
