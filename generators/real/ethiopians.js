export default function ethiopians() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const namesMale = ['Aman', 'Amare', 'Arefani', 'Aregawi', 'Asmelash', 'Assefa', 'Awash', 'Ayene', 'Bekele', 'Berhe', 'Berihu', 'Beyne', 'Bitwoded', 'Bsrat', 'Chirkos', 'Dawit', 'Debaleko', 'Dereje', 'Fisahaye', 'Gebrehiwet', 'Gebrekristos', 'Gebreselassie', 'Getachew', 'Gezaee', 'Giday', 'Girmai', 'Godefai', 'Hadgu', 'Hagos', 'Kahsai', 'Kahsu', 'Kalu', 'Kidane', 'Kiros', 'Kirubel', 'Markos', 'Mekonen', 'Melos', 'Merhawi', 'Mesfin', 'Misgina', 'Nahom', 'Negasi', 'Siyoum', 'Tedros', 'Teklu', 'Temesgen', 'Tesfai', 'Tesheme', 'Yemane', 'Yeneneh', 'Yohannes', 'Yonas', 'Yoni', 'Yosef', 'Zanta', 'Zekulu', 'Zemenfes', 'Zemichael', 'Abebe', 'Belai', 'Abal', 'Abate', 'Abay', 'Abdel', 'Abdella', 'Abdellahi', 'Abdi', 'Abdikarim', 'Abdimelech', 'Abdu', 'Abebaw', 'Abebe', 'Abel', 'Abenet', 'Abera', 'Abesalom', 'Abeselome', 'Abey', 'Abimelech', 'Adamu', 'Adane', 'Addis', 'Adinew', 'Adisu', 'Admassu', 'Adugna', 'Afewerek', 'Afework', 'Afeworki', 'Ahemed', 'Ahungena', 'Aklilu', 'Alazar', 'Alem', 'Alem', 'Alemayehu', 'Alemu', 'Alengae', 'Ali', 'Aman', 'Amanuel', 'Amare', 'Amde', 'Amensisa', 'Amha', 'Amir', 'Amsalu', 'Andenet', 'Anom', 'Anwar', 'Araya', 'Armah', 'Aron', 'Asamenew', 'Ashenafi', 'Asmerom', 'Asnake', 'Asrat', 'Asres', 'Assefa', 'Assi', 'Atatafi', 'Atikem', 'Ayele', 'Azikiwe', 'Azim', 'Azmera', 'Bahta', 'Barnabas', 'Basliel', 'Baslios', 'Bayissa', 'Bayou', 'Bazin', 'Beca', 'Befikadu', 'Beheilu', 'Bekila', 'Belachew', 'Belaye', 'Belayneh', 'Belendia', 'Benti', 'Benyam', 'Berehanu', 'Bereket', 'Berhane', 'Berhanu', 'Berta', 'Beryihun', 'Beselot', 'Bessufekad', 'Bezuayehu', 'Bililign', 'Biru', 'Biruh', 'Bogale', 'Bona', 'Boru', 'Brehan', 'Brehane', 'Brehanu', 'Bullo', 'Bzuayehu', 'Caleb', 'Cherenebereck', 'Chernebereck', 'Dagim', 'Dagmawi', 'Daniachew', 'Danichew', 'Daniel', 'Darge', 'Dawit', 'Debebe', 'Degife', 'Degu', 'Dejen', 'Dejene', 'Demeke', 'Demessie', 'Demissie', 'Dereje', 'Dessalegne', 'Desta', 'Dibaba', 'Dula', 'Duri', 'Eba', 'Ebissa', 'Edris', 'Eezkias', 'Einku', 'Ejigu', 'Eleazar', 'Elesbaan', 'Elias', 'Elshaday', 'Emerta', 'Endale', 'Ephraim', 'Ephram', 'Ephrem', 'Ermias', 'Eskinder', 'Esra', 'Essayas', 'Etefu', 'Eyasu', 'Eyoab', 'Eyob', 'Eyoel', 'Ezana', 'Ezera', 'Ezkeiel', 'Fasika', 'Fassil', 'Fassilidas', 'Fekadu', 'Feleke', 'Fikre', 'Finhas', 'Fisseha', 'Frayzer', 'Fsiha', 'Gabra', 'Galawdeyos', 'Gebriael', 'Gedarm', 'Gedeyon', 'Gersem', 'Getachew', 'Getahun', 'Getasew', 'Geteye', 'Ghidewon', 'Gidada', 'Girma', 'Girum', 'Gizaw', 'Goliad', 'Gorfu', 'Goytom', 'Gukssa', 'Gulema', 'Habibi', 'Habtamu', 'Hagos', 'Haider', 'Haile', 'Hailu', 'Hakim', 'Hassan', 'Henoke', 'Hezekiah', 'Iskinder', 'Israel', 'Issa', 'Iyasu', 'Iyoas', 'Jember', 'Joas', 'Kabede', 'Kaleb', 'Kaleyesus', 'Kassa', 'Kayin', 'Kebede', 'Kelile', 'Ketema', 'Keya', 'Kidane', 'Lebna', 'Legesse', 'Lema', 'Lemma', 'Lemuel', 'Leul', 'Liben', 'Mamo', 'Manasses', 'Maren', 'Markos', 'Masresha', 'Meba', 'Mebreatu', 'Mebrete', 'Medr', 'Meherka', 'Mekbib', 'Mekdem', 'Mekonnen', 'Mekuria', 'Melaku', 'Melech', 'Meles', 'Melesse', 'Melkamu', 'Melku', 'Menas', 'Menasse', 'Mengesha', 'Mengistu', 'Menkir', 'Mesay', 'Meseret', 'Mesfin', 'Mignote', 'Mihret', 'Mike', 'Mikias', 'Mirtus', 'Mitiku', 'Motuma', 'Mulu', 'Mulualem', 'Mulugeta', 'Mussie', 'Nahom', 'Nahum', 'Naoed', 'Nataye', 'Natnael', 'Nazwari', 'Nebiat', 'Nebiyou', 'Nega', 'Negasi', 'Negasso', 'Negus', 'Neguse', 'Nerayo', 'Neway', 'Noab', 'Obi', 'Oromigna', 'Oromo', 'Paulos', 'Petros', 'Rada', 'Raphel', 'Rediat', 'Retta', 'Robel', 'Roni', 'Ruphael', 'Seife', 'Selam', 'Selassie', 'Selassiee', 'Senay', 'Sentayhu', 'Shale', 'Shawel', 'Sirak', 'Sisay', 'Sitotaw', 'Susenyos', 'Susnios', 'Tabor', 'Tadeioes', 'Tadesse', 'Tamrat', 'Tamru', 'Tarik', 'Tariku', 'Taye', 'Tegene', 'Teka', 'Teklile', 'Tell', 'Temesgen', 'Teodros', 'Teoflyos', 'Tesfa', 'Tesfahun', 'Tesfaye', 'Teshale', 'Teshome', 'Tessema', 'Tewfeeq', 'Tewodros', 'Tewodros', 'Tewolde', 'Theofeleios', 'Tibebu', 'Tiruneh', 'Tolla', 'Trefe', 'Tsega', 'Tsegaye', 'Wagaye', 'Wakeyo', 'Wandafera', 'Wasie', 'Wedu', 'Wendimu', 'Werkneh', 'Wolitigna', 'Workneh', 'Wubishet', 'Yaaseen', 'Yacobe', 'Yaee', 'Yafet', 'Yared', 'Yerga', 'Yessuf', 'Yideg', 'Yieshak', 'Yihun', 'Yilema', 'Yisake', 'Yitay', 'Yitayew', 'Yitbarek', 'Yitebarke', 'Zalelew', 'Zeki', 'Zelalem', 'Zema', 'Zere', 'Zeru', 'Zewedu'];
  const namesFemale = ['Amaresh', 'Alayet', 'Ayene', 'Awetash', 'Aberash', 'Tidani', 'Terhas', 'Shashu', 'Shefena', 'Eden', 'Dagem', 'Fetsum', 'Fekerte', 'Frehiwet', 'Haregweni', 'Malat', 'Meseret', 'Milya', 'Masho ', 'Gooi', 'Giday', 'Belainesh', 'Kahsu', 'Yemar', 'Zafu', 'Kidan', 'Alemtsehai', 'Aregash', 'Hiwet', 'Hewan', 'Kidan', 'Luam', 'Saba', 'Salem', 'Selam', 'Rahel', 'Conjeet', 'Seble', 'Segen', 'Delina', 'Abaynesh', 'Abeba', 'Abebeche', 'Abenet', 'Abigail', 'Abigel', 'Abrinet', 'Achemyelesh', 'Adanech', 'Addis', 'Addisalem', 'Adey', 'Adina', 'Admas', 'Admaswork', 'Adowa', 'Agere', 'Aida', 'Akrham', 'Alem�nesh', 'Alem', 'Alemitu', 'Alitash', 'Almaz', 'Altaye', 'Always', 'Amakelech', 'Amara', 'Amareche', 'Amaresh', 'Ambai', 'Amina', 'Amira', 'Amsalech', 'Anania', 'Andinet', 'Andromeda', 'Aragaw', 'Aregash', 'Ariam', 'Armani', 'Arsemma', 'Asamenech', 'Asegedeche', 'Askale', 'Asmawit', 'Asnaku', 'Asrat', 'Astair', 'Aster', 'Atikilt', 'Awet', 'Ayana', 'Ayantu', 'Ayelak', 'Ayelech', 'Aynalem', 'Ayni', 'Azeb', 'Aziza', 'Azmera', 'Azyam', 'Banchayehu', 'Bara', 'Bathsheba', 'Bedelwa', 'Belaynesh', 'Belquis', 'Berhane', 'Beselot', 'Beshadu', 'Besrat', 'Betesida', 'Bethania', 'Bethel', 'Bethelhem', 'Beza', 'Bezawit', 'Bezawork', 'Biftu', 'Bila', 'Bilen', 'Birhun', 'Birkeye', 'Birole', 'Biseat', 'Bisrat', 'Bogalech', 'Brehan', 'Brehane', 'Bruktawit', 'Buzinesh', 'Candace', 'Chamashwork', 'Chekolech', 'Chuni', 'Dagmawit', 'Dasach', 'Deborha', 'Demekech', 'Demeku', 'Denkenesh', 'Derartu', 'Desta', 'Dinha', 'Dinknesh', 'Dorcas', 'Eddel', 'Eden', 'Edna', 'Ehthun', 'Elene', 'Eleni', 'Elfenesh', 'Elsa', 'Elsabet', 'Elshaday', 'Emebet', 'Emerta', 'Emnet', 'Enanny', 'Enanu', 'Enku', 'Enqu', 'Eskedare', 'Esyete', 'Etagegnehu', 'Etalemahu', 'Etsgenet', 'Eyodora', 'Fantaye', 'Feker', 'Fesesework', 'Fesesu', 'Feven', 'Feyise', 'Fikre', 'Filagot', 'Fozeia', 'Fozia', 'Freole', 'Freyhiwot', 'Frezer', 'Gadesse', 'Gadise', 'Gedarm', 'Gelila', 'Genet', 'Genzeb', 'Gete', 'Gobena', 'Habiba', 'Habtam', 'Habte', 'Haimanot', 'Haimonot', 'Hamda', 'Hamelmal', 'Hamere', 'Haregewoin', 'Haset', 'Hawa', 'Hawani', 'Haymanot', 'Helen', 'Helena', 'Helina', 'Heran', 'Hermona', 'Hewan', 'Hezbalem', 'Hirut', 'Hiwot', 'Hosanna', 'Hudad', 'Ibsituu', 'Ifrah', 'Issay', 'Jalene', 'Jember', 'Jeneve', 'Jorgo', 'Kalkidan', 'Kebebushe', 'Kebedech', 'Kedamawit', 'Keleb', 'Kelemework', 'Kendi', 'Kidan', 'Kidist', 'Kifle', 'Kiya', 'Konjit', 'Kuleni', 'Kutre', 'Lakech', 'Lalla', 'Layla', 'Leila', 'Lelo', 'Lemlem', 'Leyish', 'Leyla', 'Lia', 'Lidya', 'Lielit', 'Light', 'Lishan', 'Liyou', 'Louam', 'Luam', 'Lubaba', 'Lube', 'Lula', 'Lulit', 'Mahabuba', 'Mahalet', 'Mahdere', 'Maidote', 'Majo', 'Makda', 'Makeda', 'Mamitu', 'Mare', 'Mariame', 'Martha', 'Mascara', 'Masresha', 'Medhanit', 'Meharene', 'Mehiret', 'Mehret', 'Mekdella', 'Mekdes', 'Mekdi', 'Meklit', 'Melat', 'Melkam', 'Melkamnesh', 'Melke', 'Mena', 'Menen', 'Meraffe', 'Meron', 'Meseret', 'Meskerm', 'Mestawot', 'Metasebiya', 'Mihret', 'Mimi', 'Miniya', 'Mintesinswat', 'Mirabe', 'Miriam', 'Misgana', 'Misrak', 'Mistire', 'Muhaba', 'Muluken', 'Mulunesh', 'Muna', 'Munit', 'Nanni', 'Naomi', 'Nardose', 'Nashrat', 'Nassissie', 'Nebiat', 'Nigat', 'Nigist', 'Nishan', 'Nunu', 'Oromigna', 'Oromo', 'Ozoro', 'Persinna', 'Rahel', 'Rahnia', 'Rakeb', 'Rashida', 'Redeat', 'Rediet', 'Rekik', 'Ruth', 'Saba', 'Safia', 'Safiyeh', 'Saida', 'Salayish', 'Samrawit', 'Sara', 'Seble', 'Sefanit', 'Selam', 'Selamawit', 'Selassie', 'Semira', 'Senayit', 'Serkadis', 'Serkalem', 'Serwit', 'Sessen', 'Sewit', 'Shanani', 'Sheba', 'Shemsia', 'Shukara', 'Simret', 'Sinidu', 'Sinkinesh', 'Sisay', 'Sitina', 'Sitota', 'Sofia', 'Solome', 'Sosinna', 'Tadelech', 'Taitu', 'Tarik', 'Tariqua', 'Tavavich', 'Tayech', 'Tegegenech', 'Tegegnech', 'Temunite', 'Tena', 'Tersit', 'Teru', 'Teruworq', 'Tesfanesh', 'Tesfaye', 'Tigist', 'Tigrian', 'Tigrigna', 'Tihun', 'Tihute', 'Tilahun', 'Tinadem', 'Tinsae', 'Tirunesh', 'Tizita', 'Tseday', 'Tsedenia', 'Tsega', 'Tsehai', 'Tsehay', 'Tsigereda', 'Tsion', 'Tutu', 'Twebesta', 'Wagaye', 'Waletta', 'Welkite', 'Worknesh', 'Worqnesh', 'Wubay', 'Wubete', 'Wubrist', 'Wudasee', 'Yamarshet', 'Yehudit', 'Yemeserach', 'Yenenesh', 'Yeneneshe', 'Yesem', 'Yeshi', 'Yeshialem', 'Yetabresh', 'Yework', 'Yeworkeweha', 'Yezerashe', 'Yimenashu', 'Yirukemisrake', 'Yodit', 'Yohanna', 'Zahera', 'Zauditu', 'Zawdie', 'Zeinaba', 'Zeleke', 'Zema', 'Zena', 'Zenash', 'Zenaye', 'Zenebework', 'Zenha', 'Zewdenesh', 'Zewditu', 'Zewdnesh', 'Zimenew', 'Zubeda', 'Zufan', 'Zufanesh'];

  const names1 = type === 1 ? namesFemale : namesMale;


  const i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd2 = Math.floor(Math.random() * namesMale.length);
    rnd3 = Math.floor(Math.random() * namesMale.length);
    while (rnd2 === rnd3) {
      rnd3 = Math.floor(Math.random() * namesMale.length);
    }
    names = `${names1[rnd]} ${namesMale[rnd2]} ${namesMale[rnd3]}`;
    return names;
  }
}
