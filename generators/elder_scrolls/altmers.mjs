var sample = require ('lodash.sample')

export default function altmers() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aic', 'Aica', 'Aid', 'Aide', 'Ald', 'Alda', 'Ana', 'Anar', 'Anc', 'Anca', 'Anco', 'And', 'Andi', 'Ang', 'Anga', 'Ango', 'Ara', 'Aran', 'Are', 'Arel', 'Ari', 'Arin', 'Ark', 'Arkv', 'Arm', 'Armi', 'Arn', 'Aro', 'Aron', 'Arr', 'Arri', 'Art', 'Arte', 'Asl', 'Asli', 'Ath', 'Athe', 'Cal', 'Calc', 'Cali', 'Car', 'Cara', 'Care', 'Cary', 'Cel', 'Cele', 'Cir', 'Ciri', 'Core', 'Corri', 'Cyre', 'Ear', 'Eari', 'Earm', 'Eld', 'Elda', 'Eli', 'Elid', 'Enr', 'Enri', 'Era', 'Eraa', 'Err', 'Erra', 'Eru', 'Erun', 'Est', 'Esto', 'Fae', 'Fael', 'Fai', 'Fain', 'Fal', 'Fala', 'Falc', 'Fan', 'Fani', 'Fas', 'Fase', 'Fii', 'Fiir', 'Gan', 'Gil', 'Gilg', 'Gla', 'Glad', 'Gyr', 'Gyrn', 'Hal', 'Hali', 'Hec', 'Hece', 'Hen', 'Hena', 'Hid', 'Hide', 'Hin', 'Hind', 'Hir', 'Hirt', 'Hon', 'Hond', 'Hya', 'Hyar', 'Iac', 'Iach', 'Ilm', 'Ilmi', 'Ing', 'Inga', 'Iro', 'Iror', 'Ite', 'Iter', 'Jov', 'Jovr', 'Kae', 'Kael', 'Kala', 'Kar', 'Kard', 'Kelkemme', 'Kor', 'Korn', 'Lan', 'Land', 'Lilland', 'Lin', 'Linw', 'Lit', 'Lith', 'Lovi', 'Lyl', 'Lyli', 'Man', 'Mank', 'Mann', 'Mea', 'Mean', 'Mel', 'Mela', 'Mer', 'Mera', 'Meri', 'Mery', 'Mith', 'Mol', 'Moll', 'Mor', 'Mora', 'Moro', 'Mos', 'Moss', 'Mur', 'Muri', 'Nae', 'Naem', 'Nan', 'Nand', 'Nel', 'Nela', 'Ner', 'Neri', 'Nor', 'Nori', 'Nur', 'Nure', 'Oca', 'Ocat', 'Oht', 'Ohti', 'Olq', 'Olqu', 'Ond', 'Ondo', 'Ori', 'Orin', 'Orm', 'Ormi', 'Ort', 'Orth', 'Pel', 'Pell', 'Qor', 'Qorw', 'Qua', 'Quar', 'Rav', 'Rave', 'Rim', 'Rimi', 'Rul', 'Ruli', 'Rum', 'Ruma', 'Run', 'Runi', 'Rya', 'Ryai', 'Sal', 'Salm', 'San', 'Sany', 'Saru', 'Sau', 'Sea', 'Sean', 'Ser', 'Seri', 'Sin', 'Sind', 'Siny', 'Soli', 'Sor', 'Sorc', 'Suu', 'Suur', 'Tan', 'Tand', 'Tau', 'Taur', 'Tel', 'Teli', 'Til', 'Tilm', 'Tra', 'Trag', 'Tre', 'Trec', 'Tum', 'Tumi', 'Tun', 'Tune', 'Tus', 'Tusa', 'Tye', 'Tyer', 'Ulu', 'Ulun', 'Umb', 'Umba', 'Und', 'Undi', 'Ung', 'Unga', 'Uul', 'Uule', 'Val', 'Valm', 'Via', 'Viar', 'Vin', 'Ving', 'Vol', 'Vola', 'Vor', 'Vora', 'Vori', 'Yak', 'Yako', 'Yan', 'Yann', 'Yar', 'Yarn'];
  const nm2 = ['adilil', 'alin', 'almo', 'alushorn', 'an', 'andial', 'anirernil', 'ano', 'anonyaramen', 'antar', 'ar', 'aramen', 'aranyon', 'arelenquar', 'arengore', 'aril', 'arilmon', 'arintil', 'arion', 'arnimarco', 'asselimo', 'athnertil', 'calmoditar', 'cano', 'carryon', 'celmo', 'daenhesis', 'dalf', 'dil', 'dilanaamo', 'dildorume', 'dilgondorin', 'dur', 'durcar', 'ecalmo', 'edaen', 'edendil', 'edil', 'elde', 'elerinde', 'ellor', 'elmoellith', 'en', 'enare', 'enendor', 'eninturco', 'erion', 'ertilim', 'esisionil', 'ewynn', 'gothildil', 'htus', 'ianhnilian', 'iel', 'ielandil', 'il', 'ildroon', 'ille', 'ilroon', 'imarcoindil', 'imonwen', 'indil', 'ion', 'ir', 'iss', 'itaracar', 'lanar', 'lanil', 'las', 'lcalin', 'ldil', 'ldilnen', 'ldormo', 'ldur', 'le', 'lemaramircil', 'lian', 'liongrim', 'llenasse', 'llithil', 'llon', 'llorantier', 'lmoormo', 'lndil', 'maillin', 'man', 'mbarindil', 'men', 'mereluar', 'milrmerel', 'miondryn', 'mircil', 'mo', 'mon', 'naamokar', 'nar', 'narenquarien', 'nargidur', 'naro', 'narto', 'nath', 'ndialtel', 'ndil', 'ndilaran', 'ndildaril', 'ndilgalmo', 'ndilin', 'ndilnalus', 'ngore', 'ngoth', 'nian', 'nil', 'nilianranir', 'nmil', 'nmir', 'noion', 'ntar', 'ntiersanon', 'ntilrmo', 'ntur', 'nturco', 'ochtus', 'on', 'onanarg', 'ondorinildor', 'onilmo', 'oniril', 'onl', 'onniss', 'onolemar', 'onriel', 'onrootan', 'oonimbar', 'ootan', 'oov', 'oril', 'ornacano', 'orron', 'orumeladil', 'otar', 'ra', 'ranil', 'reanaro', 'renen', 'riil', 'ril', 'rilamil', 'rilelion', 'rillian', 'rim', 'rindeorurg', 'rion', 'rionamion', 'rionion', 'rmowe', 'rnil', 'ron', 'roonyaran', 'rurgderion', 'rynil', 'tarandil', 'turrmaillin', 've', 'ved', 'wennar', 'yarel', 'ynnarion', 'yon'];
  const nm3 = ['Andra', 'Ca', 'Cymba', 'Kori', 'Lili', 'Lora', 'Mor', 'Psy', 'Saur', 'Sha', 'Valli', 'Zeno', 'Ani', 'Ard', 'Cal', 'Cam', 'Cel', 'Cir', 'Cul', 'Cum', 'Dha', 'Ela', 'Ela', 'Eld', 'Ele', 'Eri', 'Err', 'Est', 'Est', 'Est', 'Fai', 'Fis', 'Hel', 'Hes', 'Iir', 'Ima', 'Ini', 'Iri', 'Lor', 'Mir', 'Nal', 'Sil', 'Sir', 'Son', 'Taa', 'Tar', 'Ten', 'Ter', 'Vir', 'Alw', 'Ang', 'Ara', 'Ard', 'Ari', 'Arq', 'Ary', 'Ast', 'Atr', 'Aur', 'Cam', 'Car', 'Car', 'Cin', 'Ear', 'Eil', 'Ela', 'Eri', 'Hli', 'Kar', 'Mir', 'Muu', 'Ner', 'Oht', 'Pal', 'Ran', 'Rum', 'Son', 'Tan', 'Ter', 'Var', 'Ari', 'Cur', 'Ele', 'End', 'Far', 'Min', 'Nen', 'Nir', 'Nir', 'Rel', 'Taa', 'Val', 'Ayr', 'Cam', 'Gia', 'Rav', 'Tui', 'Anir', 'Arda', 'Calm', 'Cama', 'Celr', 'Cira', 'Culu', 'Cuma', 'Dhau', 'Elan', 'Elan', 'Elda', 'Elen', 'Eris', 'Erra', 'Esta', 'Esti', 'Esto', 'Fair', 'Fist', 'Hele', 'Hess', 'Iire', 'Imar', 'Inie', 'Irin', 'Loru', 'Mirk', 'Nalc', 'Silt', 'Siri', 'Sond', 'Taar', 'Tare', 'Teny', 'Term', 'Vira', 'Alwa', 'Anga', 'Aran', 'Arda', 'Arie', 'Arqu', 'Arya', 'Asta', 'Atra', 'Aure', 'Cami', 'Cara', 'Cara', 'Cind', 'Eara', 'Eilo', 'Elan', 'Eris', 'Hlid', 'Kari', 'Miri', 'Muur', 'Neru', 'Ohte', 'Palo', 'Rana', 'Ruma', 'Sont', 'Tand', 'Term', 'Varu', 'Ariv', 'Curw', 'Elen', 'Enda', 'Fara', 'Mino', 'Neny', 'Nira', 'Niry', 'Reld', 'Taar', 'Vali', 'Ayre', 'Cami', 'Gial', 'Rave', 'Tuin'];
  const nm4 = ['aale', 'ginia', 'lia', 'lina', 'mia', 'na', 'sara', 'sephona', 'sha', 'tha', 'ae', 'aen', 'aena', 'afire', 'ahil', 'aire', 'alaure', 'alda', 'alenya', 'alinde', 'aline', 'alsama', 'ana', 'ande', 'andil', 'anil', 'aninde', 'ante', 'anwe', 'anya', 'anye', 'ara', 'arie', 'arume', 'arya', 'ath', 'aya', 'carya', 'daale', 'danwe', 'dara', 'den', 'dilwe', 'dith', 'ea', 'el', 'elinwae', 'elle', 'eminwe', 'en', 'ena', 'ende', 'ene', 'enn', 'enoore', 'ente', 'erane', 'esse', 'eth', 'eya', 'fire', 'hil', 'ia', 'ie', 'ilonwe', 'ilwe', 'inalda', 'ine', 'innarre', 'ion', 'irdalin', 'ith', 'krand', 'lae', 'lda', 'lene', 'lenya', 'linde', 'line', 'linwae', 'lonwe', 'lsama', 'maire', 'maninde', 'manwe', 'na', 'nae', 'nalda', 'nande', 'nayne', 'nde', 'nden', 'ndil', 'ne', 'nil', 'ninde', 'nirya', 'nn', 'nnarre', 'noore', 'nte', 'nwe', 'nwen', 'nwy', 'nya', 'nye', 'onirya', 'onwy', 'oril', 'orne', 'rae', 'rand', 'rane', 'rdalin', 're', 'ria', 'rie', 'ril', 'rine', 'rmend', 'rne', 'rume', 'sare', 'sion', 'ssa', 'ssare', 'sse', 'taire', 'talaure', 'te', 'telle', 'uen', 'ulae', 'umaire', 'unayne', 'urmend', 'ussa', 'vanya', 'we', 'wen', 'ya', 'yeminwe'];
  const nm5 = ['Ad', 'Caem', 'Elsin', 'Gae', 'Gray', 'High', 'Jor', 'Lareth', 'Silin', 'Spell', 'Storm', 'Throm', 'Aed', 'Cham', 'Elsin', 'Chae', 'Gran', 'Jaer', 'Laraeth', 'Saelin', 'Thram', 'Aed', 'Cam', 'Aelsin', 'Kae', 'Kor', 'Larenh', 'Sillon', 'Khraem', 'Ath', 'Charm', 'Aelson', 'Gaeth', 'Thaor', 'Loraeth', 'Saling', 'Tahrom', 'Anaed', 'Laem', 'Alkin', 'Fae', 'Lore', 'Lareth', 'Thilin', 'Tahrom'];
  const nm6 = ['aire', 'al', 'binder', 'ian', 'ire', 'ius', 'lock', 'or', 'orin', 'thar', 'us', 'watch', 'aere', 'ahl', 'kaender', 'aen', 'ihre', 'ious', 'ore', 'onin', 'fhar', 'eus', 'aine', 'ael', 'iath', 'ihle', 'iuth', 'our', 'orinh', 'thaer', 'useus', 'faere', 'an', 'iane', 'ifeth', 'thius', 'oth', 'aerith', 'fhaer', 'osin'];
  {
    if (type === 1) {
      names = `${sample(nm3) + sample(nm4)} ${sample(nm5)}${sample(nm6)}`;
    } else {
      names = `${sample(nm1) + sample(nm2)} ${sample(nm5)}${sample(nm6)}`;
    }
    return names;
  }
}
