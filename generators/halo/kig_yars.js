export default function kig_yars() {
  const nm1 = ['a', 'e', 'i', 'o', 'u'];
  const nm2 = ['b', 'c', 'd', 'g', 'j', 'n', 'k', 'm', 'r', 't', 'th', 'y', 'z', 'zh'];
  const nm3 = ['b', 'c', 'd', 'g', 'k', 'm', 'n', 'p', 'q', 'r', 'th', 'x', 'z'];


  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm1.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      names = nm2[rnd] + nm1[rnd2] + nm3[rnd3];
    } else {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm1.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm1.length);
      rnd6 = Math.floor(Math.random() * nm3.length);
      names = `${nm2[rnd] + nm1[rnd2] + nm3[rnd3]} ${nm2[rnd4]}${nm1[rnd5]}${nm3[rnd6]}`;
    }
    return names;
  }
}
