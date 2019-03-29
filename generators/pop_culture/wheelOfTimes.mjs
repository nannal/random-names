var sample = require ('lodash.sample')

export default function wheelOfTimes() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ad', 'Al', 'Ar', 'Art', 'B', 'Ben', 'Ber', 'Bin', 'C', 'Cal', 'Coul', 'Cul', 'Eam', 'El', 'Er', 'Ert', 'G', 'Gaid', 'Galv', 'Gar', 'J', 'Jan', 'Jand', 'Jul', 'K', 'Kal', 'Ken', 'L', 'Laer', 'Lan', 'Lest', 'Mas', 'Mat', 'Matt', 'Maz', 'Nad', 'Nal', 'Ner', 'Nor', 'Ol', 'Olv', 'Ond', 'Os', 'P', 'Pad', 'Pel', 'Per', 'R', 'Ran', 'Reld', 'Rh', 'S', 'Sal', 'Sar', 'Sil', 'T', 'Th', 'Ther', 'Tor', 'Val', 'Vend', 'Ver', 'Vor', 'Z', 'Zan', 'Zol', 'Zor'];
  const nm2 = ['adin', 'ain', 'al', 'am', 'an', 'and', 'ar', 'as', 'ath', 'aul', 'ean', 'el', 'em', 'ema', 'en', 'eon', 'er', 'erin', 'esean', 'eth', 'ian', 'il', 'im', 'in', 'inan', 'inean', 'inen', 'ion', 'iren', 'is', 'od', 'oial', 'ol', 'om', 'on', 'orin', 'orn', 'oth', 'oul', 'ovin', 'ral', 'ran', 'ren', 'rim', 'ris', 'uan', 'uarc', 'uen', 'uin', 'ulin', 'um', 'un', 'ur', 'us', 'uth', 'yas', 'yel', 'yin', 'yom', 'yor'];
  const nm3 = ['Al', 'Am', 'Ar', 'Av', 'B', 'Bel', 'Birg', 'Brin', 'Cads', 'Cel', 'Ch', 'Cyn', 'Den', 'Dil', 'Dol', 'Dyn', 'Egw', 'El', 'En', 'Er', 'F', 'Fel', 'Fern', 'Fil', 'Gem', 'Gil', 'Gin', 'Gwen', 'Haen', 'Han', 'Hel', 'Hin', 'Ien', 'Il', 'In', 'Ir', 'Kel', 'Ken', 'Khon', 'Kis', 'Lem', 'Len', 'Lis', 'Lor', 'M', 'Mel', 'Mor', 'Morg', 'Nel', 'Nic', 'Nor', 'Nyn', 'Rel', 'Ren', 'Rin', 'Ros', 'S', 'Sel', 'Set', 'Som', 'Sor', 'T', 'Ten', 'Ther', 'Tigr', 'V', 'Vel', 'Vil', 'Von', 'Zar', 'Zel', 'Zer', 'Zon'];
  const nm4 = ['aeve', 'aida', 'aile', 'ain', 'aine', 'alle', 'ase', 'athera', 'ava', 'ayne', 'ela', 'elle', 'ena', 'ene', 'enya', 'era', 'erava', 'esh', 'eshta', 'eth', 'ia', 'iad', 'iendha', 'ilea', 'in', 'inea', 'ith', 'itte', 'iuan', 'ivia', 'oane', 'oell', 'ois', 'oith', 'ola', 'one', 'ora', 'osa', 'ovi', 'oyin', 'ua', 'uane', 'ucia', 'uel', 'uena', 'uene', 'uis', 'ulin', 'uon', 'ush', 'yana', 'yela', 'yena', 'yesh', 'yla', 'ymis', 'yna', 'yra', 'ys', 'yth'];
  const nm5 = ['Ald', 'An', 'Ath', 'Ay', 'Bach', 'Ban', 'Bash', 'Bryn', 'C', 'Cauth', 'Char', 'Cran', 'D', 'Daen', 'Dag', 'Dam', 'F', 'Fal', 'Farsh', 'Fon', 'Gam', 'Gan', 'Gor', 'Gryn', 'Haen', 'Hag', 'Har', 'Hon', 'Kash', 'Ken', 'Kir', 'Kryn', 'Lam', 'Lan', 'Lin', 'Loth', 'Mach', 'Man', 'Mant', 'Math', 'Mel', 'Merr', 'Moer', 'Naer', 'Nam', 'Nil', 'Nor', 'P', 'Paen', 'Pem', 'Pran', 'Sal', 'San', 'Sol', 'Step', 'T', 'Tel', 'Tor', 'Trak', 'Val', 'Varn', 'Vel', 'Vyn', 'a\'D', 'a\'L', 'a\'M', 'a\'N', 'a\'R', 'al\'D', 'al\'M', 'al\'R', 'al\'Th', 'al\'V'];
  const nm6 = ['aem', 'aera', 'ag', 'agar', 'agin', 'aidhrin', 'aim', 'ain', 'alda', 'alin', 'amon', 'an', 'anche', 'and', 'aneos', 'ar', 'ara', 'arin', 'athor', 'aw', 'ear', 'ed', 'elle', 'enne', 'eos', 'era', 'eran', 'ere', 'eron', 'evron', 'iar', 'iaw', 'iaya', 'ilin', 'in', 'inas', 'ind', 'ineos', 'ira', 'iros', 'odred', 'ogan', 'oihan', 'olin', 'olrin', 'on', 'onche', 'onne', 'or', 'oron', 'yan', 'yl', 'ynar', 'yne', 'yr', 'yrag', 'yran', 'yron', 'yros', 'ys'];
  {
    if (type === 1) {
      names = `${sample(nm3) + sample(nm4)} ${sample(nm5)}${sample(nm6)}`;
    } else {
      names = `${sample(nm1) + sample(nm2)} ${sample(nm5)}${sample(nm6)}`;
    }
    return names;
  }
}
