var sample = require ('lodash.sample')

function dwarf() {
  let names;
  const nm1 = ['A', 'Ara', 'Alfo', 'Bari', 'Be', 'Bo', 'Bha', 'Bu', 'Ba', 'Bra', 'Bro', 'Brou', 'Bru', 'Da', 'Dalo', 'Dare', 'De', 'Dhu', 'Dho', 'Do', 'Dora', 'Dwo', 'Dou', 'Duri', 'Du', 'El', 'Eri', 'Fi', 'Fo', 'Fo', 'Ga', 'Gi', 'Gla', 'Glori', 'Go', 'Gra', 'Gro', 'Groo', 'Gru', 'Grou', 'Ha', 'Ha', 'He', 'He', 'Ho', 'Hou', 'Hu', 'Ja', 'Jo', 'Ka', 'Khe', 'Khu', 'Khou', 'Ko', 'Ku', 'Ki', 'Kra', 'Kro', 'Ma', 'Mo', 'Mu', 'Na', 'No', 'Nu', 'Nora', 'Nura', 'Ne', 'No', 'O', 'Ori', 'Rei', 'Ra', 'Ru', 'Sa', 'Si', 'Sna', 'Sko', 'Ska', 'Stro', 'The', 'Thi', 'Tho', 'Thra', 'Tha', 'Tore', 'Tha', 'Thra', 'Thro', 'Thu', 'Tu', 'U', 'Umi', 'Va', 'Vo', 'Whu', 'We'];
  const nm2 = ['b', 'br', 'dd', 'd', 'dr', 'dm', 'dgr', 'f', 'fr', 'gr', 'gg', 'gh', 'gn', 'k', 'kh', 'kgr', 'kdr', 'kk', 'kh', 'kr', 'l', 'lg', 'lgr', 'ldr', 'lm', 'md', 'mn', 'm', 'mm', 'mr', 'n', 'nd', 'ndr', 'ngr', 'nm', 'r', 'rr', 'rgr', 'rdr', 'rb', 'rg', 'rn', 'rh', 'rd', 'rm', 'rs', 'rf', 's', 'ss', 'sdr', 'sgr', 'st', 'str', 't', 'tr', 'tm', 'th', 'tdr', 'tgr', 'v', 'vr', 'z', 'zm', 'zn', 'zz'];
  const nm3 = ['ori', 'oin', 'ili', 'alin', 'orin', 'osi', 'imli', 'ormur', 'ac', 'aic', 'aec', 'ec', 'eac', 'ic', 'oc', 'oic', 'ouc', 'ack', 'aeck', 'eck', 'eack', 'ick', 'ock', 'oick', 'ouck', 'uck', 'uc', 'ad', 'aed', 'ed', 'ead', 'id', 'od', 'oid', 'oud', 'ud', 'uid', 'ag', 'aeg', 'eg', 'eag', 'ig', 'og', 'oug', 'ug', 'ak', 'aek', 'ek', 'eak', 'ik', 'ok', 'oki', 'uk', 'uik', 'ouk', 'uki', 'al', 'ael', 'el', 'eal', 'il', 'ol', 'oli', 'olin', 'olim', 'olir', 'oul', 'ul', 'uli', 'ulim', 'ulir', 'uil', 'am', 'ami', 'amli', 'amri', 'aem', 'em', 'eam', 'im', 'om', 'omli', 'omri', 'omi', 'oum', 'um', 'umi', 'umir', 'umin', 'umli', 'umlir', 'umlin', 'umri', 'an', 'aen', 'en', 'ean', 'in', 'on', 'onlim', 'onlir', 'oun', 'un', 'unli', 'unri', 'ar', 'arlum', 'arlun', 'arlug', 'arlig', 'aer', 'er', 'erlum', 'erlun', 'erlug', 'erlig', 'ear', 'ir', 'irlum', 'irlun', 'or', 'orli', 'orlim', 'orlum', 'orlun', 'orlig', 'orlug', 'oir', 'our', 'ur', 'uri', 'urim', 'urum', 'us', 'as', 'ous', 'aes', 'eas', 'at', 'atir', 'atum', 'atin', 'aet', 'et', 'eat', 'it', 'ot', 'otir', 'atin', 'otum', 'out', 'ut', 'ath', 'aeth', 'eth', 'eath', 'ith', 'oth', 'outh', 'uth'];
  const nm4 = ['D', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'R', 'T', 'Th', 'W', 'Dr', 'Dw', 'Fl', 'Gl', 'Thr', 'D', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'R', 'T', 'Th', 'W', 'Dr', 'Dw', 'Fl', 'Gl', 'Thr'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm4) + sample(nm3);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3);
    }
    return names;
  }
}
module.exports = dwarf
