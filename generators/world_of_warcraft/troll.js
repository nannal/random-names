var sample = require ('lodash.sample')

function troll() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Al', 'An', 'Azi', 'Dru', 'Druk', 'Hai', 'Hak', 'Haka', 'Haku', 'Ham', 'Han', 'Hana', 'Hok', 'Hoki', 'Huka', 'Ja', 'Jal', 'Jan', 'Jar', 'Jes', 'Jin', 'Ju', 'Jum', 'Jun', 'Kai', 'Kaz', 'Kel', 'Ko', 'Kor', 'Ku', 'Kur', 'Kuz', 'Li', 'Lin', 'Maal', 'Mal', 'Muz', 'Mul', 'Mal', 'Pel', 'Pele', 'Rah', 'Rak', 'Rap', 'Ras', 'Raz', 'Rej', 'Reji', 'Rhaz', 'Rhuz', 'Ruja', 'Ruz', 'Seji', 'Sen', 'Ses', 'Sesh', 'Sez', 'Sha', 'Shak', 'She', 'Shen', 'Sin', 'Shun', 'Tan', 'Taz', 'Tes', 'Tesh', 'Traz', 'Trez', 'Tun', 'Tzal', 'Tzan', 'Tzul', 'Tzun', 'Ugo', 'Um', 'Un', 'Ur', 'Uthel', 'Ven', 'Vol', 'Vu', 'Vul', 'Vuz', 'Vuza', 'Vuze', 'Wan', 'Won', 'Wun', 'Xan', 'Xen', 'Xon', 'Xu', 'Xuk', 'Xun', 'Za', 'Zae', 'Zaej', 'Zal', 'Zan', 'Zando', 'Zax', 'Zeb', 'Zel', 'Zela', 'Zen', 'Zendo', 'Zes', 'Zil', 'Zilzi', 'Zin', 'Zol', 'Zon', 'Zu', 'Zub', 'Zuba', 'Zuf', 'Zul', 'Zula', 'Zulya', 'Zun', 'Zuva', 'Zux', 'Val', 'Van', 'Vun', 'Vin', 'Von', 'Kan', 'Kun', 'Kuz', 'Jam', 'Jama', 'Jum', 'Juma', 'Jun', 'Jan', 'Juna', 'Zal', 'Sal', 'Zala', 'Zula', 'Zalu', 'Gol', 'Gul', 'Gal', 'Mug', 'Mig', 'Ros', 'Rus'];
  const nm2 = ['aj', 'uj', 'ij', 'az', 'uz', 'iz', 'ah', 'uh', 'an', 'un', 'on', 'ajin', 'ujin', 'ijin', 'nan', 'nun', 'non', 'mun', 'mon', 'ju', 'ji', 'za', 'zu', 'zul', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm3 = ['\'Ahjen', '\'Ahjin', '\'Anjin', '\'Aya', '\'Cha', '\'Do', '\'Gan', '\'Ghan', '\'Ijen', '\'Jabu', '\'Jian', '\'Jin', '\'Keiki', '\'Kyo', '\'Mak', '\'Mon', '\'Nanji', '\'Nanju', '\'Nay', '\'Oji', '\'Ojin', '\'Rimon', '\'Shalay', '\'Sora', '\'Thuwa', '\'Tish', '\'To', '\'Uljin', '\'Ulkaz', '\'Umijo', '\'Unjin', '\'Unya', '\'Zan', 'abar', 'agi', 'ahjen', 'ahjin', 'aji', 'ajin', 'akijin', 'akjin', 'alai', 'alik', 'ambi', 'amijo', 'amike', 'ane', 'anjin', 'anjo', 'armek', 'ash', 'ashi', 'asuwa', 'avo', 'awan', 'aya', 'azin', 'azko', 'bin', 'bir', 'bu', 'cha', 'do', 'ejin', 'embi', 'engu', 'eshi', 'ga', 'gajin', 'gan', 'ghan', 'gu', 'hjin', 'ijen', 'ima', 'ingi', 'injo', 'jabu', 'jel', 'jian', 'jin', 'ju', 'kalai', 'keiki', 'kima', 'kuraz', 'kyo', 'lai', 'laji', 'lak', 'ma', 'mak', 'mbu', 'medi', 'mok', 'mon', 'nanji', 'nanju', 'nay', 'odah', 'oji', 'ojin', 'oku', 'raz', 'rimon', 'ru', 'shalay', 'sora', 'thal', 'thil', 'thul', 'thuwa', 'tish', 'to', 'ulabar', 'uljin', 'ulkaz', 'umijo', 'umike', 'ungu', 'unjin', 'unjo', 'unya', 'uraz', 'wan', 'yambi', 'ypto', 'yptu', 'zahn', 'zan', 'zibin', 'zibo', 'zim'];
  const nm4 = ['Aj', 'Aji', 'Ak', 'Ake', 'Al', 'Alu', 'Alun', 'An', 'Anji', 'Anju', 'Ar', 'Ara', 'As', 'Asze', 'At', 'Ate', 'Ba', 'Baji', 'Bal', 'Bala', 'Bali', 'Balli', 'Ben', 'Beni', 'Benni', 'Bi', 'Bie', 'Bo', 'Boo', 'Boon', 'Bul', 'Bula', 'Buli', 'Bulli', 'Bulu', 'Bun', 'Dei', 'Eci', 'Eji', 'El', 'Ele', 'Fey', 'Gir', 'Ha', 'Hai', 'Hola', 'Hula', 'Il', 'Ila', 'Illa', 'Jam', 'Jama', 'Jan', 'Jav', 'Java', 'Juv', 'Juva', 'Ka', 'Kai', 'Kan', 'Kat', 'Kata', 'Katu', 'Ke', 'Kea', 'Kej', 'Khel', 'Khij', 'Khuj', 'Khul', 'Khuw', 'Ki', 'Kin', 'Kiya', 'Kiz', 'Kizi', 'Kulu', 'Kuz', 'Luj', 'Luji', 'Maka', 'Man', 'Mei', 'Mele', 'Mo', 'Moz', 'Nele', 'Neli', 'Puj', 'Puja', 'Ra', 'Rac', 'Ran', 'Rash', 'Ren', 'Ron', 'Sae', 'Saen', 'Saj', 'Sal', 'Saon', 'Sega', 'Sen', 'Sesh', 'Sha', 'Shak', 'Shaka', 'Sham', 'Shari', 'Sia', 'Sian', 'Son', 'Soni', 'Suj', 'Sul', 'Suli', 'Suly', 'Tal', 'Tas', 'Tay', 'Tayo', 'Tazzi Tizzi', 'Te', 'Tej', 'Teja', 'Tez', 'Teza', 'Tezzi', 'Tiz', 'Tiza', 'Tul', 'Tus', 'Un', 'Unji', 'Vaj', 'Val', 'Van', 'Ve', 'Veh', 'Vehe', 'Ven', 'Vin', 'Von', 'Vuj', 'Vul', 'Vun', 'Xi', 'Xia', 'Xu', 'Ya', 'Yah', 'Yash', 'Yashi', 'Ye', 'Yer', 'Yera', 'Yi', 'Yishi', 'Yu', 'Yuh', 'Za', 'Zael', 'Zaj', 'Zal', 'Zam', 'Zar', 'Zara', 'Zashi', 'Ze', 'Zea', 'Zeal', 'Zel', 'Zele', 'Zen', 'Zesa', 'Zeti', 'Zhon', 'Zia', 'Zir', 'Zola', 'Zolla', 'Zoti', 'Zu', 'Zuj', 'Zul', 'Zula', 'Zulla', 'Zur', 'Zyr'];
  const nm6 = ['\'Anji', '\'Aya', '\'Dur', '\'Enji', '\'Eza', '\'Jen', '\'Jin', '\'Jun', '\'Kelah', '\'Mahi', '\'Tsu', '\'Ujia', '\'Unji', '\'Unna', '\'Zali', '\'Zula', '\'Zuli', 'aca', 'aci', 'ajia', 'ajie', 'ajin', 'ala', 'alae', 'alu', 'amja', 'amor', 'andi', 'ani', 'anja', 'anji', 'any', 'ara', 'ari', 'asha', 'ashi', 'atha', 'aty', 'aya', 'ayo', 'azae', 'azea', 'azi', 'azra', 'di', 'dur', 'eja', 'ejie', 'elea', 'emalu', 'ena', 'enji', 'era', 'esa', 'esha', 'eshia', 'eta', 'eti', 'eza', 'ezzi', 'hena', 'ia', 'iaja', 'ijazi', 'ijo', 'ila', 'ilith', 'ina', 'inda', 'ini', 'ino', 'isa', 'ishi', 'ixia', 'iya', 'izali', 'izi', 'ja', 'jari', 'jin', 'kelah', 'lynn', 'mahi', 'mei', 'ola', 'ona', 'onji', 'onna', 'onoo', 'oti', 'oza', 'ra', 'raa', 'shia', 'siya', 'toa', 'uja', 'ujia', 'ujin', 'ukraa', 'ula', 'ulae', 'ulea', 'uli', 'ulli', 'ullu', 'ulu', 'una', 'unja', 'unjin', 'unna', 'usah', 'usha', 'utie', 'uwei', 'uxia', 'uzzi', 'watha', 'ylin', 'yra', 'zae', 'zali', 'zari', 'zea', 'zula', 'zuli'];
  {
    if (type === 1) {
      names = sample(nm4) + sample(nm2) + sample(nm6);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3);
    }
    return names;
  }
}
module.exports = troll