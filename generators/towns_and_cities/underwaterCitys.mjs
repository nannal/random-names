var sample = require ('lodash.sample')

export default function underwaterCitys() {
  let names;
  const nm1 = ['Aby', 'Abys', 'Ache', 'Acio', 'Aeg', 'Amphi', 'Anu', 'Aqu', 'Aqua', 'Aqui', 'Asha', 'Ashe', 'Atla', 'Azha', 'Azu', 'Beli', 'Bery', 'Boy', 'Bri', 'Cae', 'Caenu', 'Cala', 'Cata', 'Cla', 'Coa', 'Coara', 'Cora', 'Delph', 'Do', 'Ebi', 'Expa', 'Flu', 'Gey', 'Gla', 'Glaci', 'Hippo', 'Hy', 'Hyd', 'Jutu', 'Levi', 'Levia', 'Limu', 'Liqi', 'Liqu', 'Liqua', 'Liqui', 'Litto', 'Mari', 'Mer', 'Mimi', 'Nata', 'Nau', 'Nauti', 'Nava', 'Nep', 'Neph', 'Nept', 'Neptu', 'Nerei', 'Neri', 'Njo', 'Njor', 'Oce', 'Ocea', 'Osi', 'Paci', 'Palae', 'Pela', 'Pose', 'Posei', 'Pura', 'Puri', 'Rive', 'Sala', 'Sali', 'Saph', 'Saphi', 'Scy', 'Sequa', 'Si', 'Sire', 'Squa', 'Te', 'Tempe', 'Teth', 'Tha', 'Thala', 'Thau', 'The', 'Tri', 'Trite', 'Trito', 'Tsu', 'Tsuna', 'Ty', 'Typh', 'Va', 'Vapo', 'Voltu', 'Wata'];
  const nm2 = ['cada', 'cadis', 'cia', 'cique', 'cis', 'dor', 'dore', 'gia', 'lean', 'lin', 'lina', 'lis', 'loch', 'lona', 'lor', 'lora', 'lore', 'lune', 'mari', 'mon', 'mond', 'na', 'nas', 'ne', 'nea', 'nia', 'nis', 'noch', 'pis', 'ra', 'rai', 'ran', 'rei', 'rem', 'ren', 'reth', 'rey', 'ri', 'ria', 'ril', 'rin', 'ris', 'rius', 'rus', 'sa', 'tas', 'tesh', 'thas', 'theas', 'this', 'thys', 'tia', 'tin', 'tis', 'ton', 'tria', 'via'];
  {
    names = sample(nm1) + sample(nm2);
    return names;
  }
}
