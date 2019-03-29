var sample = require ('lodash.sample')

function dragonborns() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ali', 'Ar', 'Ba', 'Bal', 'Bel', 'Bha', 'Bren', 'Caer', 'Calu', 'Dur', 'Do', 'Dra', 'Era', 'Faer', 'Fro', 'Gre', 'Ghe', 'Gora', 'He', 'Hi', 'Ior', 'Jin', 'Jar', 'Kil', 'Kriv', 'Lor', 'Lumi', 'Mar', 'Mor', 'Med', 'Nar', 'Nes', 'Na', 'Oti', 'Orla', 'Pri', 'Pa', 'Qel', 'Ravo', 'Ras', 'Rho', 'Sa', 'Sha', 'Sul', 'Taz', 'To', 'Trou', 'Udo', 'Uro', 'Vor', 'Vyu', 'Vrak', 'Wor', 'Wu', 'Wra', 'Wul', 'Xar', 'Yor', 'Zor', 'Zra'];
  const nm2 = ['barum', 'bor', 'broth', 'ciar', 'crath', 'daar', 'dhall', 'dorim', 'farn', 'fras', 'gar', 'ghull', 'grax', 'hadur', 'hazar', 'jhan', 'jurn', 'kax', 'kris', 'kul', 'lasar', 'lin', 'mash', 'morn', 'naar', 'prax', 'qiroth', 'qrin', 'qull', 'rakas', 'rash', 'rinn', 'roth', 'sashi', 'seth', 'skan', 'trin', 'turim', 'varax', 'vroth', 'vull', 'warum', 'wunax', 'xan', 'xiros', 'yax', 'ythas', 'zavur', 'zire', 'ziros'];
  const nm3 = ['Ari', 'A', 'Bi', 'Bel', 'Cris', 'Ca', 'Drys', 'Da', 'Erli', 'Esh', 'Fae', 'Fen', 'Gur', 'Gri', 'Hin', 'Ha', 'Irly', 'Irie', 'Jes', 'Jo', 'Ka', 'Kel', 'Ko', 'Lilo', 'Lora', 'Mal', 'Mi', 'Na', 'Nes', 'Nys', 'Ori', 'O', 'Ophi', 'Phi', 'Per', 'Qi', 'Quil', 'Rai', 'Rashi', 'So', 'Su', 'Tha', 'Ther', 'Uri', 'Ushi', 'Val', 'Vyra', 'Welsi', 'Wra', 'Xy', 'Xis', 'Ya', 'Yr', 'Zen', 'Zof'];
  const nm4 = ['birith', 'bis', 'bith', 'coria', 'cys', 'dalynn', 'drish', 'drith', 'faeth', 'fyire', 'gil', 'gissa', 'gwen', 'hime', 'hymm', 'karyn', 'kira', 'larys', 'liann', 'lyassa', 'meila', 'myse', 'norae', 'nys', 'patys', 'pora', 'qorel', 'qwen', 'rann', 'riel', 'rina', 'rinn', 'rish', 'rith', 'saadi', 'shann', 'sira', 'thibra', 'thyra', 'vayla', 'vyre', 'vys', 'wophyl', 'wyn', 'xiris', 'xora', 'yassa', 'yries', 'zita', 'zys'];
  {
    if (type === 1) {
      names = sample(nm3) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2);
    }
    return names;
  }
}
module.exports = dragonborns
