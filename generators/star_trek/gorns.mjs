var sample = require ('lodash.sample')

function gorns() {
  let names;
  const nm1 = ['Acu', 'Are', 'Aza', 'Azsa', 'Ba', 'Besa', 'Bra', 'Bre', 'Dasu', 'Deza', 'Di', 'Dra', 'Era', 'Esee', 'Essa', 'Eza', 'Fe', 'Fee', 'Fidi', 'Fra', 'Ga', 'Garee', 'Gli', 'Graa', 'He', 'Hesa', 'Hi', 'Hra', 'K\'a', 'K\'sa', 'K\'staa', 'Kee', 'Ko', 'Kra', 'La', 'Lazsa', 'Lera', 'Loze', 'Masa', 'Me', 'Meka', 'Mo', 'Morsi', 'Na', 'Ne', 'Neko', 'Nha', 'Re', 'Reri', 'Rla', 'Roza', 'S\'a', 'S\'ka', 'S\'kaa', 'S\'la', 'S\'ree', 'S\'sa', 'S\'sha', 'S\'slee', 'S\'sme', 'S\'sne', 'S\'sra', 'S\'sta', 'S\'ta', 'S\'taa', 'S\'tra', 'S\'za', 'See', 'Sla', 'So', 'Sozze', 'Sra', 'Sree', 'Tare', 'Tee', 'Tha', 'Tra', 'Xa', 'Xazi', 'Xee', 'Xra', 'Zho', 'Zo', 'Zogo', 'Zra'];
  const nm2 = ['bahr', 'bas', 'bet', 'bizs', 'bus', 'cees', 'ch', 'chat', 'chium', 'cus', 'd', 'daar', 'das', 'dous', 'drees', 'g', 'gazs', 'get', 'girb', 'gozin', 'hlik', 'hr', 'hrid', 'hris', 'hs', 'k', 'kah', 'kan', 'kazs', 'kouk', 'l', 'lak', 'lath', 'let', 'leus', 'lis', 'lk', 'llk', 'm', 'mal', 'mar', 'msek', 'mus', 'n', 'nbet', 'nd', 'ndas', 'nzaar', 'r', 'rash', 'rd', 'rith', 'rozs', 'rr', 's', 'sek', 'sh', 'sibus', 'ss', 'szan', 'tar', 'tezs', 'th', 'this', 'ts', 'yah', 'yak', 'yas', 'yin', 'yith', 'z', 'zaar', 'zin', 'zs', 'zzan'];
  {
    names = sample(nm1) + sample(nm2);
    return names;
  }
}
module.exports = gorns
