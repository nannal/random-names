var sample = require ('lodash.sample')

export default function taurens() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abooksigun', 'Abukcheech', 'Achak', 'Adahy', 'Adriel', 'Ahanu', 'Ahiga', 'Ahmik', 'Ahote', 'Ahtunowhiho', 'Akando', 'Akecheta', 'Akule', 'Alo', 'Anakausuen', 'Anoki', 'Apenimon', 'Apiatan', 'Aponivi', 'Aranck', 'Ashkii', 'Askook', 'Avonaco', 'Awan', 'Ayawamat', 'Bemossed', 'Bidziil', 'Bilagaana', 'Bimisi', 'Bodaway', 'Catahecassa', 'Chankoowashtay', 'Chaschunka', 'Cha\'tima', 'Chayton', 'Cherokee', 'Chesmu', 'Cheveyo', 'Chochmo', 'Chochokpi', 'Chochuschuvio', 'Chogan', 'Choovio', 'Choviohoya', 'Chowilawu', 'Chuchip', 'Chunta', 'Ciqala', 'Cochise', 'Dakoda', 'Dakota', 'Dakotah', 'Dasan', 'Delsin', 'Demothi', 'Dichali', 'Dohosan', 'Dyami', 'Elan', 'Elsu', 'Eluwilussit', 'Enapay', 'Enkoodabaoo', 'Enyeto', 'Etchemin', 'Etlelooaat', 'Etu', 'Ezhno', 'Gaagii', 'Gad', 'Gosheven', 'Guyapi', 'Hahkethomemah', 'HahneeHakan', 'Hania', 'Harkahome', 'Hassun', 'Hastiin', 'Hawiovi', 'Heammawihio', 'Hekli', 'Helaku', 'Helushka', 'Heskovizenako', 'Hesutu', 'Hevataneo', 'Hevovitastamiutsto', 'Hiamovi', 'Hinto', 'Honani', 'Honaw', 'Honon', 'Honovi', 'Hotah', 'Hototo', 'Howahkan', 'Howi', 'Huritt', 'Huslu', 'Igasho', 'Illanipi', 'Inteus', 'Istaqa', 'Istu', 'Iye', 'Jacy', 'Jolon', 'Kachada', 'Kaga', 'Kajika', 'Kele', 'Keme', 'Kesegowaase', 'Kitchi', 'Knoton', 'Knoton', 'Kohana', 'Kolichiyaw', 'Kosumi', 'Kotori', 'Kuckunniwi', 'Kuruk', 'Kwahu', 'Kwatoko', 'Langundo', 'Lansa', 'Lapu', 'Len', 'Lenno', 'Leyti', 'Lise', 'Liwanu', 'Lokni', 'Lonato', 'Lootah', 'Machakw', 'Machk', 'Mahkah', 'Mahpee', 'Makkapitew', 'Makya', 'Mantotohpa', 'Masichuvio', 'Maska', 'Matchitehew', 'Matoskah', 'Matunaagd', 'Matwau', 'Mazablaska', 'Megedagik', 'Meturato', 'Mikasi', 'Milap', 'Mingan', 'Minninnewah', 'Misu', 'Mochni', 'Mojag', 'Mokatavatah', 'Moketoveto', 'Moki', 'Mokovaoto', 'Molimo', 'Mona', 'Mongwau', 'Motavato', 'Motega', 'Muata', 'Mukki', 'Muraco', 'Naalnish', 'Nahcomence', 'Nahele', 'Nahiossi', 'Nantai', 'Napayshni', 'Nastas', 'Nawat', 'Nawkaw', 'Nayati', 'Neka', 'Nibaw', 'Nigan', 'Niichaad', 'Nikiti', 'Nitis', 'Nixkamich', 'Niyol', 'Nodin', 'Nodin', 'Nootau', 'Nosh', 'Noshi', 'Nukpana', 'Ocunnowhurst', 'Odakota', 'Ogaleesha', 'Ohanko', 'Ohanzee', 'Ohcumgache', 'Ohitekah', 'Okhmhaka', 'Omawnakw', 'Otaktay', 'Otoahhastis', 'Otoahnacto', 'Ouray', 'Pachu\'a', 'Paco', 'Pahana', 'Pallaton', 'Pannoowau', 'Patamon', 'Patwin', 'Payat', 'Payatt', 'Paytah', 'Powa', 'Powwaw', 'Qaletaqa', 'QochataRowtag', 'Sahale', 'Sakima', 'Sani', 'Segenam', 'Sewati', 'Shaman', 'Shilah', 'Shiriki', 'Shiye', 'Shizhe\'e', 'Sicheii', 'Sike', 'Sik\'is', 'Sikyahonaw', 'Sikyatavo', 'Siwili', 'Skah', 'Songaa', 'Sowi\'ngwa', 'Sucki', 'Tahkeome', 'Tahmelapachme', 'Taima', 'Takoda', 'Tangakwunu', 'Tasunke', 'Tate', 'Teetonka', 'Telutci', 'Tihkoosue', 'Tocho', 'Togquos', 'Tohopka', 'Tokala', 'Tokala', 'Tooantuh', 'Tuari', 'Tuketu', 'Tupi', 'Uzumati', 'Vaiveahtoish', 'Viho', 'Vipponah', 'Vohkinne', 'Voistitoevitz', 'Wahanassatta', 'Wahchinksapa', 'Wahchintonka', 'Wahkan', 'Wakiza', 'Wamblee', 'Wambleesha', 'Wanageeska', 'Wanahton', 'Wanikiy', 'Wapi', 'Waquini', 'Weayaya', 'Wematin', 'Wemilat', 'Wicasa', 'Wikvaya', 'Wohehiv', 'Wokaihwokomas', 'Wuyi', 'Wynono', 'Yaholo', 'Yahto', 'Yancy', 'Yanisin', 'Yas', 'Yiska', 'Yuma'];
  const nm2 = ['Abedabun', 'Abequa', 'Adoette', 'Adsila', 'Aiyana', 'Alameda', 'Alaqua', 'Alawa', 'Algoma', 'Altsoba', 'Amadahy', 'Amayeta', 'Amitola', 'Anevay', 'Angeni', 'Ankti', 'Anna', 'Aponi', 'Aquene', 'Atepa', 'Avonaco', 'Awenasa', 'Awendela', 'Awenita', 'Awinita', 'Ayashe', 'Ayita', 'Bena', 'Bly', 'Catori', 'Chapa', 'Chenoa', 'Chenoa', 'Chepi', 'Cheyanna', 'Cheyanne', 'Cheyenne', 'Chiana', 'Chianna', 'Chickoa', 'Chilam', 'Chimalis', 'Chitsa', 'Cholena', 'Chosovi', 'Chosposi', 'Chumani', 'Cocheta', 'Dena', 'Donoma', 'Dyani', 'Enola', 'Etenia', 'Eyota', 'Fala', 'Flo', 'Gaho', 'Galilahi', 'Hachi', 'Halona', 'Hateya', 'Hausis', 'Hausisse', 'Hehewuti', 'Hinto', 'Honovi', 'Humita', 'Hurit', 'Imala', 'Isi', 'Istas', 'Ituha', 'Izusa', 'Kachina', 'Kakawangwa', 'Kaliska', 'Kanti', 'Karmiti', 'Kasa', 'Kay', 'Kaya', 'Keegsquaw', 'Keezheekoni', 'Kilenya', 'Kimama', 'Kimi', 'Kimimela', 'Kineks', 'Kiona', 'Kirima', 'Kiwidinok', 'Koko', 'Kokyangwuti', 'Koleyna', 'Kuwanlelenta', 'Kuwanyamtiwa', 'Kuwanyauma', 'Kwanita', 'Lenmana', 'Leotie', 'Lequoia', 'Liluye', 'Liseli', 'Lomahongva', 'Lomasi', 'Luyu', 'Macha', 'Magena', 'Mahal', 'Mahala', 'Mai', 'Makkitotosimew', 'Maralah', 'Mausi', 'Meda', 'Memdi', 'Meoquanee', 'Miakoda', 'Migisi', 'Mika', 'Minal', 'Minowa', 'Minya', 'Mona', 'Muna', 'Nadie', 'Namid', 'Nara', 'Nascha', 'Nashota', 'Nasnan', 'Nata', 'Natane', 'Neena', 'Netis', 'Nijlon', 'Nita', 'Nittawosew', 'Nituna', 'Nokomis', 'Nolcha', 'Nova', 'Nukpana', 'Numees', 'Nuna', 'Nuttah', 'Odahingum', 'Ogin', 'Olathe', 'Olisa', 'Ominotago', 'Onawa', 'Oneida', 'Oni', 'Onida', 'Ootadabun', 'Opa', 'Orenda', 'Orida', 'Pakuna', 'Pakwa', 'Pamuy', 'Papina', 'Pauwau', 'Pavati', 'Peta', 'Petunia', 'Polikwaptiwa', 'Poloma', 'Powaqa', 'Pules', 'Quana', 'Rosine', 'Rozene', 'Sahkyo', 'Salali', 'Satinka', 'Sequoia', 'Shada', 'Shania', 'Shasta', 'Sheshebens', 'Shima', 'Shuman', 'Sihu', 'Sinopa', 'Sisika', 'Snana', 'Sokanon', 'Sokw', 'Sooleawa', 'Sora', 'Soyala', 'Sunki', 'Tablita', 'Taborri', 'Tacincala', 'Tadi', 'Tadita', 'Tahki', 'Taima', 'Taini', 'Tainn', 'Taipa', 'Takala', 'Takoda', 'Tala', 'Tallulah', 'Tama', 'Tandy', 'Tansy', 'Tarsha', 'Tawana', 'Tayanita', 'Tayen', 'Tazanna', 'Tehya', 'Tehya', 'Tiponi', 'Tiponya', 'Tiva', 'Tolinka', 'Topanga', 'Totsi', 'Tuwa', 'Una', 'Wakanda', 'Waki', 'Waneta', 'Wauna', 'Wenona', 'Wicapiwakan', 'Wikimak', 'Winema', 'Winona', 'Wuti', 'Wyanet', 'Wynona', 'Yamka', 'Yepa', 'Yoki', 'Zabana', 'Zaltana', 'Zihna', 'Zitkala', 'Zitkalasa', 'Zlhna', 'Zonta', 'Zuzela'];
  const nm3 = ['Autumn', 'Black', 'Blood', 'Chest', 'Claw', 'Cloud', 'Crest', 'Dark', 'Dawn', 'Eagle', 'Earth', 'Ember', 'Far', 'Fire', 'Flame', 'Flat', 'Fog', 'Four', 'Free', 'Full', 'Gloom', 'Glow', 'Grass', 'Great', 'Hard', 'Hawk', 'Haze', 'Heavy', 'Hill', 'Iron', 'Keen', 'Kodo', 'Light', 'Lightning', 'Lone', 'Long', 'Mist', 'Mountain', 'Oat', 'Pine', 'Plain', 'Proud', 'Pyre', 'Rage', 'Rain', 'Raven', 'River', 'Rock', 'Rough', 'Rumble', 'Rune', 'Sharp', 'Single', 'Sky', 'Soft', 'Spirit', 'Spring', 'Steel', 'Still', 'Stone', 'Storm', 'Strong', 'Swift', 'Summer', 'Sun', 'Tall', 'Thunder', 'Three', 'Tree', 'Truth', 'Two', 'Wheat', 'White', 'Wild', 'Wind', 'Winter', 'Wise', 'Young'];
  const nm4 = ['bash', 'bend', 'bender', 'binder', 'blade', 'bluff', 'brace', 'breath', 'breeze', 'caller', 'chaser', 'creek', 'cut', 'cutter', 'draft', 'dream', 'dreamer', 'drifter', 'feather', 'forest', 'grain', 'gust', 'hair', 'hide', 'hoof', 'horn', 'jumper', 'mane', 'moon', 'pelt', 'rage', 'rider', 'roar', 'runner', 'scar', 'seeker', 'soar', 'shadow', 'shield', 'shot', 'shout', 'singer', 'snout', 'song', 'spear', 'stalker', 'stream', 'stride', 'strider', 'talon', 'tail', 'tusk', 'tusks', 'totem', 'walker', 'watcher', 'water', 'weaver', 'whisk', 'whisper', 'wind', 'winds', 'wood', 'woods', 'wound'];
  {
    if (type === 1) {
      names = `${sample(nm2)} ${sample(nm3)}${sample(nm4)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm3)}${sample(nm4)}`;
    }
    return names;
  }
}
