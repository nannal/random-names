var sample = require ('lodash.sample')

function molecules() {
  let names;
  const nm1 = ['', '', '', '', '', '', '', '', '', '', '', '', '', 'deca', 'di', 'duo', 'hepta', 'hexa', 'hydra', 'hydro', 'hypo', 'iso', 'mono', 'octa', 'penta', 'tetra', 'tri'];
  const nm2 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'a', 'e', 'i', 'o'];
  const nm3 = ['b', 'br', 'c', 'ch', 'chl', 'chr', 'cl', 'd', 'f', 'fl', 'fr', 'g', 'gl', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'ph', 'pl', 'pr', 'ps', 'r', 'rh', 's', 'sh', 'sp', 'st', 'str', 't', 'th', 'tr', 'v', 'w', 'z'];
  const nm4 = ['b', 'bd', 'br', 'bsc', 'c', 'cc', 'cch', 'ch', 'chl', 'chr', 'cl', 'cr', 'ct', 'd', 'dr', 'dv', 'f', 'ff', 'fl', 'g', 'gl', 'gn', 'h', 'k', 'l', 'lb', 'lc', 'lch', 'ldr', 'lf', 'lg', 'll', 'lp', 'lph', 'lpr', 'lt', 'm', 'mm', 'mn', 'mph', 'n', 'nc', 'nd', 'nh', 'nk', 'nn', 'ns', 'nt', 'nth', 'nthr', 'nz', 'p', 'ph', 'phth', 'pp', 'pr', 'ps', 'pt', 'pth', 'q', 'rb', 'rchl', 'rd', 'rf', 'rg', 'rh', 'rk', 'rl', 'rn', 'rph', 'rq', 'rr', 'rrh', 'rs', 'rt', 'rv', 's', 'sc', 'sg', 'sp', 'sph', 'spl', 'ss', 'st', 'str', 't', 'th', 'tr', 'v', 'x', 'z'];
  const nm5 = ['a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'ae', 'aa', 'ai', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'ua', 'ue', 'ui', 'ya', 'ye', 'yo'];
  const nm6 = ['aene', 'an', 'ane', 'ar', 'as', 'ase', 'asy', 'ate', 'eide', 'ein', 'eite', 'el', 'ene', 'er', 'ial', 'id', 'ide', 'iene', 'in', 'ine', 'iol', 'ite', 'ium', 'oate', 'ocin', 'ol', 'ole', 'on', 'one', 'or', 'ose', 'ox', 'oxin', 'uene', 'um', 'ur', 'ycin', 'yde', 'yl', 'yme', 'yn'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm5) + sample(nm4) + sample(nm6);
    } else if (i < 7) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm5) + sample(nm4) + sample(nm5) + sample(nm4) + sample(nm6);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm5) + sample(nm4) + sample(nm5) + sample(nm4) + sample(nm5) + sample(nm4) + sample(nm6);
    }
    return names;
  }
}
module.exports = molecules
