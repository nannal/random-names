var sample = require ('lodash.sample')

function gods() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['a', 'e', 'u', 'i', 'o', 'y'];
  const nm3 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['agi', 'aldir', 'aos', 'arus', 'borh', 'bris', 'bum', 'bus', 'dall', 'dar', 'darr', 'des', 'dis', 'dite', 'dohr', 'don', 'dos', 'dros', 'dum', 'dur', 'emis', 'enar', 'esis', 'eus', 'eyar', 'eyr', 'her', 'ion', 'ione', 'ius', 'jun', 'ldir', 'lios', 'lo', 'lous', 'mes', 'mir', 'mjir', 'mos', 'mus', 'nia', 'lotl', 'zotz', 'zotl', 'nir', 'nos', 'nus', 'ohr', 'orr', 'rasil', 'reus', 'ros', 'ruer', 'rus', 'ses', 'stus', 'tar', 'tarr', 'teus', 'thar', 'ther', 'tia', 'ton', 'tos', 'tyx', 'ysus'];
  const nm5 = ['ra', 'ara', 'ella', 'elia', 'nja', 'yja', 'ulla', 'la', 'na', 'ana', 'otz', 'otl', 'neas', 'phine', 'tris', 'gyn', 'syn', 'dite', 'ena', 'hena', 'tia', 'anke', 'mera', 'nera', 'soi', 'heia', 'mis', 'thys', 'asis', 'one', 'dione', 'dona', 'ona', 'phion', 'trix', 'tix', 'lene', 'lena', 'phy', 'tune', 'va', 'una', 'tuna', 'arae', 'aris', 'ris', 'tia', 'rena', 'raura', 'dea', 'enta', 'dia', 'ta'];
  const nm6 = ['Abundance', 'Agriculture', 'Animals', 'Battle', 'Beauty', 'Beer', 'Beginnings', 'Blacksmiths', 'Chaos', 'Children', 'Chivalry', 'Commerce', 'Conquest', 'Dawn', 'Day', 'Death', 'Destiny', 'Destruction', 'Dreams', 'Dusk', 'Duty', 'Earth', 'Education', 'Endings', 'Envy', 'Fall', 'Fame', 'Fertility', 'Finance', 'Fire', 'Forgiveness', 'Fortune', 'Freedom', 'Funerals', 'Good Luck', 'Governance', 'Harvest', 'Hatred', 'Health', 'Home', 'Honesty', 'Honor', 'Hope', 'Hunting', 'Infamy', 'Jealousy', 'Judgement', 'Justice', 'Law', 'Life', 'Life & Death', 'Light', 'Logic', 'Love', 'Loyalty', 'Magic', 'Marriage', 'Medicine', 'Mercy', 'Messages', 'Miracles', 'Misfortune', 'Music', 'Nature', 'Night', 'Night & Day', 'Oracles', 'Order', 'Peace', 'Penance', 'Pleasure', 'Poetry', 'Prosperity', 'Revenge', 'Science', 'Secrecy', 'Shadows', 'Sleep', 'Spring', 'Strength', 'Success', 'Summer', 'Thunder', 'Time', 'Torture', 'Trade', 'Tranquility', 'Tricks', 'Truth', 'Vengeance', 'Victory', 'Virtues', 'War', 'Water', 'Weddings', 'Wind', 'Wine', 'Winter', 'Wisdom', 'Work', 'Youth', 'the Afterlife', 'the Dark', 'the Hearth', 'the Hunt', 'the Insane', 'the Land', 'the Military', 'the Moon', 'the Mountains', 'the Ocean', 'the Ostracized', 'the Rivers', 'the Sea', 'the Sky', 'the Stars', 'the Sun', 'the Underworld'];
  {
    if (type === 1) {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm5)}, Goddess of ${sample(nm6)}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4)}, God of ${sample(nm6)}`;
    }
    return names;
  }
}
module.exports = gods
