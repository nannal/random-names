var sample = require ('lodash.sample')

function draenei() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aho', 'Ak', 'Ar', 'Art', 'Az', 'Beh', 'Beho', 'Bra', 'Bran\'', 'Bre', 'Cae', 'Caed', 'Cem', 'Dek', 'Der', 'Dere', 'Dran\'', 'Du', 'Dug', 'Eoc', 'Fal', 'Fan', 'Fin', 'Fun', 'Ga', 'Gan', 'Han', 'Har', 'Hob', 'Hoba', 'Iz', 'Jov', 'Kav', 'Kel', 'Kha', 'Kil', 'Luc', 'Ma', 'Mah', 'Maho', 'Mu', 'Mua', 'Nah', 'Naho', 'Nob', 'Nobu', 'Oc', 'Ock', 'On', 'Os', 'Rem', 'Ste', 'Tal', 'Tho', 'Tor', 'Tora', 'Toral', 'Uz', 'Vel', 'Vel\'', 'Ven', 'Vor', 'Yil'];
  const nm2 = ['g', 'n', 'ph', 'f', 'r', 't', 'h', 'd', 'm', 'ga', 'na', 'pha', 'fa', 'ra', 'ta', 'ha', 'da', 'ma', 'go', 'no', 'pho', 'fo', 'ro', 'to', 'ho', 'do', 'mo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm3 = ['aam', 'aan', 'ag', 'aid', 'allius', 'allus', 'alus', 'am', 'an', 'anaar', 'anos', 'ard', 'as', 'at', 'ath', 'co', 'daan', 'diir', 'ed', 'el', 'en', 'fik', 'iir', 'il', 'in', 'ir', 'iru', 'is', 'khen', 'lac', 'lag', 'lat', 'liir', 'lir', 'luun', 'mat', 'miir', 'miis', 'mir', 'mis', 'mos', 'naar', 'nan', 'niir', 'nis', 'ogg', 'omat', 'onan', 'ord', 'orhan', 'oth', 'ras', 'red', 'tun', 'ul', 'undo', 'uun'];
  const nm4 = ['Aal', 'Ael', 'Aelle', 'Aello', 'Aev', 'Aeva', 'Aeve', 'Al', 'Alta', 'Av', 'Ava', 'Ave', 'Ba', 'Bet', 'Bel', 'Bil', 'Cuz', 'Ed', 'Edi', 'Edir', 'Ego', 'El', 'Elle', 'Ello', 'En', 'Er', 'Ere', 'Far', 'Fe', 'Fin', 'Go', 'Gor', 'Got', 'Haf', 'Hafe', 'Ir', 'Ire', 'Ires', 'Is', 'Ja', 'Jael', 'Jal', 'Ji', 'Jol', 'Kha', 'Kaz', 'Lun', 'Luna', 'Ma', 'Mah', 'Mam', 'Mer', 'Mes', 'Mi', 'Mia', 'Mo', 'Mom', 'Mon', 'Mu', 'Muh', 'Mum', 'Mus', 'Ne', 'Nes', 'Nur', 'Nurg', 'Nus', 'Pha', 'Phae', 'Phe', 'Rem', 'Reme', 'Ruk', 'Se', 'Ses', 'Si', 'Sul', 'Thel', 'Thela', 'Tre', 'Tri', 'Um', 'Ura', 'Val', 'Valu'];
  const nm5 = ['b', 'ba', 'be', 'bo', 'd', 'da', 'de', 'do', 'h', 'ha', 'he', 'ho', 'la', 'le', 'lo', 'r', 'ra', 're', 'ro', 's', 'sa', 'se', 'so', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['aan', 'al', 'all', 'ally', 'araa', 'ca', 'dine', 'ela', 'elle', 'elli', 'era', 'ere', 'ett', 'ette', 'gin', 'guni', 'haa', 'hi', 'hri', 'in', 'ine', 'irah', 'kua', 'la', 'laa', 'laana', 'lae', 'laena', 'lun', 'mae', 'mena', 'mere', 'mis', 'mon', 'nii', 'nora', 'oh', 'ora', 'raa', 'rah', 'ran', 'ret', 'rette', 'ri', 'rii', 'rua', 'sa', 'stra', 'straa', 'taa', 'ti', 'tia', 'tra', 'traa', 'ua', 'un', 'uni', 'zi'];
  {
    if (type === 1) {
      names = sample(nm4) + sample(nm5) + sample(nm6);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3);
    }
    return names;
  }
}
module.exports = draenei
