var sample = require ('lodash.sample')

function tibetans() {
  let names;
  const nm1 = ['Bhakto', 'Bhuchung', 'Bhuti', 'Chodag', 'Chodak', 'Choden', 'Chodrak', 'Choedon', 'Choegyal', 'Choejor', 'Choenyi', 'Choephel', 'Choezom', 'Chokey', 'Chokphel', 'Chokzay', 'Chonden', 'Chophel', 'Dakpa', 'Damchoe', 'Dawa', 'Dema', 'Dhadul', 'Dhakpa', 'Dhardon', 'Dhargay ', 'Dhargey', 'Dhargye', 'Dharma', 'Dhundup', 'Dickey', 'Dolkar', 'Dolker', 'Dolma', 'Dorje', 'Dorjee', 'Duga', 'Gelek', 'Gephel', 'Gonpo', 'Gurmey', 'Gyalchok', 'Gyaltsen', 'Gyamtso', 'Gyatso', 'Gyurmey', 'Jamma', 'Jampa', 'Jamtso', 'Jamyang', 'Jangchup', 'Jinpa', 'Jorden', 'Jungney', 'Kalsang', 'Karma', 'Kechok', 'Kelden', 'Kelsang', 'Kesang', 'Khando', 'Khandro', 'Khedrup', 'Khetsun', 'Konchok', 'Kunchen', 'Kundang', 'Kunga', 'Legshey', 'Lhakpa', 'Lhamo', 'Lhawang', 'Lhundrup', 'Lhundup', 'Lobsang', 'Metok', 'Monlam', 'Namdak', 'Namdol', 'Namgyal', 'Namgyal Wangchuk', 'Ngawang', 'Ngodup', 'Ngonga', 'Norbu', 'Norzin', 'Nyandak', 'Nyima', 'Padma', 'Palden', 'Paldon', 'Paljor', 'Palkyi', 'Palmo', 'Passang', 'Pema', 'Pemba', 'Penpa', 'Phuntsok', 'Rabgyal', 'Rabten', 'Rabyang', 'Rangdol', 'Rapten', 'Richen', 'Rigsang', 'Rigzin', 'Rinchen', 'Samdup', 'Samten', 'Sangey', 'Sangmo', 'Sangyal', 'Sangye', 'Seldon', 'Shenlha Woekar', 'Sherab', 'Sherap', 'Sonam', 'Tamdin', 'Tashi', 'Tempa', 'Tenzin', 'Thekchen', 'Thokmay', 'Thubten', 'Tinley', 'Topden', 'Tsamchoe', 'Tselha', 'Tsering', 'Tseten', 'Tsewang', 'Tsomo', 'Tsultrim', 'Tsundue', 'Ugyen', 'Wangchen', 'Wangchuk', 'Wangdak', 'Wangdue', 'Wangdup', 'Wangmo', 'Wangyal', 'Woenang', 'Woeser', 'Woeten', 'Yama', 'Yangdon', 'Yangkey', 'Yangtso', 'Yangzom', 'Yeshi', 'Yonten', 'Youdon', 'Youdron', 'Yudron', 'Yungdrung', 'Zopa'];
  const nm2 = ['Aukatsang', 'Bhutia', 'Bongpatsang', 'Chodron', 'Damdul', 'Dhanacktsang', 'Dhompa', 'Dorje', 'Drakpa', 'Drakthonpa', 'Dramuktsang', 'Drupa', 'Geymutsang', 'Gonpo', 'Gorkha', 'Gurung', 'Gyaktsen', 'Gyatso', 'Jigme', 'Jungne', 'Kalingpong', 'Karpo', 'Kyidtodpa', 'Ladakh', 'Lhamo', 'Lingpa', 'Lotsawa', 'Lukhangwa', 'Manriwa', 'Mingyur', 'Mipham', 'Monpa', 'Namdak', 'Nepali', 'Norbu', 'Nyima', 'Nyingpo', 'Pakshi', 'Palsang', 'Pandita', 'Repa', 'Sambhota', 'Sangpo', 'Shakabpa', 'Sherpa', 'Tamang', 'Tangpa', 'Tenzin', 'Thaye', 'Trengwa', 'Trungpa', 'Tsemo', 'Tsogyal', 'Wangpo', 'Yeshy'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1);
    } else {
      names = `${sample(nm1)} ${sample(nm2)}`;
    }
    return names;
  }
}
module.exports = tibetans
