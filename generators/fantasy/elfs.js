function generator$fantasy$elfs() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Mnementh', 'Wirenth', 'Feyrith', 'Sataleeti', 'Leofrick', 'Abarat', 'Adamar', 'Adorellan', 'Adresin', 'Aelrindel', 'Aerendyl', 'Aeson', 'Afamrail', 'Agandaur', 'Agis', 'Aias', 'Aiduin', 'Aien', 'Ailas', 'Ailduin', 'Ailen', 'Ailluin', 'Ailmar', 'Ailmer', 'Ailmon', 'Ailre', 'Ailred', 'Ailuin', 'Ailwin', 'Aimar', 'Aimer', 'Aimon', 'Airdan', 'Aire', 'Aired', 'Aithlin', 'Aiwin', 'Akkar', 'Alabyran', 'Alaion', 'Alas', 'Albondiel', 'Alduin', 'Alen', 'Alinar', 'Alluin', 'Almar', 'Almer', 'Almon', 'Alok', 'Alosrin', 'Alre', 'Alred', 'Althidon', 'Alwin', 'Amrynn', 'Andrathath', 'Anfalen', 'Anlyth', 'Aolis', 'Aquilan', 'Arathorn', 'Arbane', 'Arbelladon', 'Ardreth', 'Ardryll', 'Arl', 'Arlen', 'Arun', 'Ascal', 'Athtar', 'Aubron', 'Aumanas', 'Aumrauth', 'Avourel', 'Ayas', 'Ayduin', 'Ayen', 'Ayluin', 'Aymar', 'Aymer', 'Aymon', 'Ayre', 'Ayred', 'Aywin', 'Belanor', 'Beldroth', 'Bellas', 'Beluar', 'Biafyndar', 'Bialaer', 'Braern', 'Cailu', 'Cameron', 'Camus', 'Castien', 'Chathanglas', 'Cheyrth', 'Cluhurach', 'Cluym', 'Cohnal', 'Conall', 'Connak', 'Cornaith', 'Corym', 'Cyran', 'Dain', 'Dakath', 'Dalyor', 'Darcassan', 'Darfin', 'Darthoridan', 'Darunia', 'Deldrach', 'Delmuth', 'Delsaran', 'Devdan', 'Drannor', 'Druindar', 'Durlan', 'Durothil', 'Dyffros', 'Edwyrd', 'Edyrm', 'Ehlark', 'Ehrendil', 'Eilauver', 'Elnaril', 'Elaith', 'Elandorr', 'Elas', 'Elashor', 'Elbauthin', 'Eldaernth', 'Eldar', 'Eldrin', 'Elduin', 'Elen', 'Elephon', 'Elidyr', 'Elion', 'Elkhazel', 'Ellisar', 'Elluin', 'Elmar', 'Elmer', 'Elmon', 'Elorshin', 'Elpaerae', 'Elre', 'Elred', 'Eltaor', 'Elwin', 'Elyon', 'Emmyth', 'Entrydal', 'Erendriel', 'Erglareo', 'Eriladar', 'Erlan', 'Erlathan', 'Eroan', 'Erolith', 'Eschallus', 'Estelar', 'Ethlando', 'Ettrian', 'Evindal', 'Eyrynnhv', 'Faelar', 'Faelyn', 'Faeranduil', 'Falael', 'Felaern', 'Fenian', 'Feno', 'Fhaornik', 'Filarion', 'Filvendor', 'Filverel', 'Flardryn', 'Flinar', 'Folas', 'Folduin', 'Folen', 'Folluin', 'Folmar', 'Folmer', 'Folmon', 'Folre', 'Folred', 'Folwin', 'Foxfire', 'Fylson', 'Gaeleath', 'Gaelin', 'Galaeron', 'Galan', 'Galather', 'Ganamede', 'Gantar', 'Garrik', 'Garynnon', 'Giullio', 'Glanduil', 'Glarald', 'Glorandal', 'Goll', 'Goras', 'Gorduin', 'Goren', 'Gorluin', 'Gormar', 'Gormer', 'Gormon', 'Gorre', 'Gorred', 'Gorwin', 'Grathgor', 'Haemir', 'Hagas', 'Hagduin', 'Hagen', 'Hagluin', 'Hagmar', 'Hagmer', 'Hagre', 'Hagred', 'Hagwin', 'Haladavar', 'Halafarin', 'Halamar', 'Haldir', 'Haldreithen', 'Halflar', 'Halueth', 'Halueve', 'Hamon', 'Haryk', 'Hastos', 'Hatharal', 'Hoccar', 'Horith', 'Hubyr', 'Iefyr', 'Ievos', 'Ilbryn', 'Ilimitar', 'Iliphar', 'Illianaro', 'Illithor', 'Illitran', 'Ilphas', 'Ilrune', 'Ilthuryn', 'Inchel', 'Inialos', 'Injros', 'Intevar', 'Iolas', 'Iolrath', 'Itham', 'Ivsaar', 'Ivlisar', 'Ivran', 'Iymbryl', 'Iyrandrar', 'Jandar', 'Jannalor', 'Jaonos', 'Jassin', 'Jhaan', 'Jhaartael', 'Jhaeros', 'Jharak', 'Jharym', 'Jonik', 'Jorildyn', 'Josidiah', 'Juppar', 'Kailu', 'Katar', 'Katyr', 'Keletheryl', 'Kellam', 'Kelvhan', 'Kendel', 'Kerym', 'Keryth', 'Kesefehon', 'Kharis', 'Khatar', 'Khidell', 'Khiiral', 'Khilseith', 'Khuumal', 'Khyrmn', 'Kieran', 'Kiirion', 'Kindroth', 'Kivessin', 'Kiyuigh', 'Klaern', 'Kolvar', 'Kuornos', 'Kuskyn', 'Kymil', 'Kyrenic', 'Kyrtaar', 'Laeroth', 'Lafarallin', 'Lamruil', 'Laosx', 'Larongar', 'Larrel', 'Lashul', 'Lathai', 'Lathlaeril', 'Leojym', 'Lhoris', 'Lianthorn', 'Llarm', 'Llewellenar', 'Llombaerth', 'Lorsan', 'Luirlan', 'Luthais', 'Luvon', 'Lyari', 'Lyklor', 'Lysanthir', 'Maeraddyth', 'Maeral', 'Maiele', 'Malgath', 'Malon', 'Mardeiym', 'Marikoth', 'Marlevaur', 'Melandrach', 'Merellien', 'Merith', 'Methild', 'Mhaenal', 'Mi\'tilarro', 'Mihangyl', 'Miirphys', 'Mirthal', 'Mlartlar', 'Molonym', 'Molostroi', 'Montagor', 'Morgan', 'Morthil', 'Myrddin', 'Myriil', 'Myrin', 'Mythanthar', 'Naertho', 'Naeryndam', 'Naesala', 'Narbeth', 'Nardual', 'Nasir', 'Navarre', 'Nelaeryn', 'Neldor', 'Nesterin', 'Nevarth', 'Nhamashal', 'Nieven', 'Nindrol', 'Ninleyn', 'Ninthalor', 'Nlossae', 'Nopos', 'Nremyn', 'Nuvian', 'Nylian', 'Nym', 'Nyvorlas', 'Oacenth', 'Oenel', 'Ohmbryn', 'Olaurae', 'Onas', 'Oncith', 'Onvyr', 'Orist', 'Orlpar', 'Orndacil', 'Ornthalas', 'Orrian', 'Orym', 'Oslarelar', 'Otaehryn', 'Othorion', 'Paeral', 'Paeris', 'Pelleas', 'Phaendar', 'Pharom', 'Phraan', 'Pirphal', 'Pleufan', 'Purtham', 'Pyrder', 'Pyrravym', 'Pywaln', 'Qildor', 'Quynn', 'Raeranthur', 'Raibyr', 'Ralikanthae', 'Ralnor', 'Rathal', 'Raunaeril', 'Rauvelore', 'Reluraun', 'Reluvethel', 'Rennyn', 'Reptar', 'Respen', 'Rhaac\'var', 'Rhalyf', 'Rhangyl', 'Rhistel', 'Rhothomir', 'Rhys', 'Rilitar', 'Riluaneth', 'Rolim', 'Rothilion', 'Ruardh', 'Ruehar', 'Ruith', 'Ruvaen', 'Ruven', 'Ruvyn', 'Rychell', 'Rydel', 'Ryfon', 'Ryo', 'Ryul', 'Saelethil', 'Saevel', 'Saleh', 'Samblar', 'Sandevv', 'Seiveril', 'Selanlar', 'Selgauth', 'Sharian', 'Shaundyl', 'Shihon', 'Shyrrik', 'Siirist', 'Silvyr', 'Simimar', 'Sinaht', 'Skalanis', 'Sontar', 'Sorfildor', 'Sudryl', 'Sundamar', 'Sylvar', 'Symkalr', 'Sythaeryn', 'Taanyth', 'Taegen', 'Taenaran', 'Taeral', 'Taerntym', 'Taleisin', 'Tamnaeuth', 'Tanithil', 'Tannivh', 'Tannyll', 'Tanyl', 'Taranath', 'Tarathiel', 'Taredd', 'Tarron', 'Tasar', 'Tassarion', 'Tathaln', 'Tehlmar', 'Teirist', 'Thalanil', 'Thallan', 'Theodas', 'Theodemar', 'Theoden', 'Theodluin', 'Theodmer', 'Theodmon', 'Theodre', 'Theodred', 'Theoduin', 'Theodwin', 'Thurdan', 'Tiarshus', 'Tinlef', 'Tlannatar', 'Tolthe', 'Tordynnar', 'Toross', 'Traeliorn', 'Travaran', 'Triandal', 'Ualair', 'Uevareth', 'Uldreiyn', 'Urddusk', 'Usunaar', 'Uthorim', 'Vaalyun', 'Vaeril', 'Vamir', 'Vander', 'Vartan', 'Velethuil', 'Venali', 'Vesperr', 'Vesryn', 'Vesstan', 'Virion', 'Volodar', 'Voron', 'Vuduin', 'Vulas', 'Vulen', 'Vulluin', 'Vulmar', 'Vulmer', 'Vulmon', 'Vulre', 'Vulred', 'Vulwin', 'Wistari', 'Wylchyr', 'Wyn', 'Wyninn', 'Wyrran', 'Xalph', 'Xanotter', 'Xhalh', 'Xhalth', 'Xharlion', 'Yalathanil', 'Yeschant', 'Yhendorn', 'Ylyndar', 'Zabbas', 'Zaltarish', 'Zandro', 'Zaor', 'Zaos', 'Zelphar', 'Zeno', 'Zhoron'];
  const nm2 = ['Sataleeti', 'Leena', 'Lithoniel', 'Vanya', 'Alasse', 'Zentha', 'Myantha', 'Eloimaya', 'Faraine', 'Kylantha', 'Celaena', 'Aenwyn', 'Maescia', 'Tyrael', 'Shearah', 'Elisven', 'Llorva', 'Nimue', 'Zaleria', 'Aelrue', 'Aelynthi', 'Aerilaya', 'Aerith', 'Ahrendue', 'Ahskahala', 'Aila', 'Alaglossa', 'Alais', 'Alanis', 'Alavara', 'Alea', 'Aleesia', 'Alenia', 'Alerathla', 'Allannia', 'Allisa', 'Alloralla', 'Allynna', 'Almedha', 'Almithara', 'Alvaerele', 'Alyndra', 'Amara', 'Amaranthae', 'Amedee', 'Ameria', 'Amkissra', 'Amlaruil', 'Amnestria', 'Amra', 'Anarzee', 'Aneirin', 'Anhaern', 'Annallee', 'Ara', 'Araushnee', 'Aravae', 'Arcaena', 'Ariawyn', 'Arielimnda', 'Arlayna', 'Arnarra', 'Arryn', 'Arthion', 'Artin', 'Ashera', 'Ashryn', 'Auluua', 'Aurae', 'Ava', 'Axilya', 'Ayda', 'Ayla', 'Azariah', 'Bellaluna', 'Bemere', 'Blythswana', 'Bonnalurie', 'Braerindra', 'Burolia', 'Caeda', 'Caerthynna', 'Calarel', 'Cellica', 'Chaenath', 'Chalia', 'Chalsarda', 'Chandrelle', 'Chasianna', 'Chomylla', 'Cilivren', 'Ciyradyl', 'Claire', 'Cremia', 'Cyithrel', 'Daratrine', 'Darshee', 'Darunia', 'Dasyra', 'Dathlue', 'Delimbiyra', 'Delshandra', 'Dessous', 'Deularla', 'Duilya', 'Duru', 'Eallyrl', 'Ecaeris', 'Edea', 'Edraele', 'Eirika', 'Elanalue', 'Elanil', 'Elasha', 'Elenaril', 'Eletha', 'Elincia', 'Ellarian', 'Elmyra', 'Eloen', 'Elora', 'Elyon', 'Ena', 'Enania', 'Eshenesra', 'Essaerae', 'Esta', 'Esyae', 'Falenas', 'Farryn', 'Faunalyn', 'Fayeth', 'Faylen', 'Fhaertala', 'Fi', 'Fieryat', 'Filaurel', 'Filauria', 'Fildaerae', 'Gaelira', 'Gaerradh', 'Gaylia', 'Gemstarzah', 'Ghilanna', 'Glynnii', 'Gweyr', 'Gwynnestri', 'Gylledha', 'Hacathra', 'Haera', 'Halaema', 'Halanaestra', 'Hamalitia', 'Haramara', 'Helartha', 'Holone', 'Huquethae', 'Hycis', 'Ialantha', 'Ikeshia', 'Ildilyntra', 'Ilmadia', 'Ilsevel', 'Ilyana', 'Ilyrana', 'Ilythyrra', 'Imizael', 'Immianthe', 'Imra', 'Imryll', 'Ioelena', 'Irhaal', 'Isilfarrel', 'Isilynor', 'Itiireae', 'Itylra', 'Iythronel', 'Jastra', 'Jeardra', 'Jhanandra', 'Jhaumrithe', 'Jhiilsraa', 'Kali', 'Kasula', 'Kavrala', 'Kaylessa', 'Kaylin', 'Keenor', 'Keerla', 'Keishara', 'Kenia ', 'Kethryllia', 'Keya', 'Kilyn', 'Kythaela', 'Laamtora', 'Laerdya', 'Lazziar', 'Leilatha', 'Lenna', 'Lensa', 'Lethhonel', 'Lierin', 'Liluth', 'Lixiss', 'Llamryl', 'Lorelei', 'Lura', 'Lusha', 'Lusherina', 'Lyeecia', 'Lyeyeru', 'Lyithion', 'Lymsleia', 'Lyndis', 'Lyra', 'Lyre', 'Maelyrra', 'Maeralya', 'Makaela', 'Malon', 'Malruthiia', 'Mariona', 'Martainn', 'Maylin', 'Meira', 'Melarue', 'Merethyl', 'Merialeth', 'Meriel', 'Merlara', 'Micaiah', 'Mladris', 'Mnuvae', 'Morgwais', 'Moryggan', 'Muerlara', 'Mylaela', 'Mylaerla', 'Myriani', 'Myrrh', 'Nabooru', 'Naesala', 'Naevys', 'Nakiasha', 'Nambra', 'Nanthleene', 'Naumys', 'Nei', 'Nephenee', 'Nexxis', 'Nimronyn', 'Nithenoel', 'Nithroel', 'Nlaea', 'Nuala', 'Nueleth', 'Nuovis', 'Nushala', 'Nylaathria', 'Nyna', 'Ochyllyss', 'Omylia', 'Osonia', 'Penelo', 'Phaerl', 'Phelorna', 'Phuingara', 'Phyrra', 'Pyria', 'Quamara', 'Radelia', 'Raejiisa', 'Raerauntha', 'Rania', 'Ratha', 'Rathiain', 'Renestrae', 'Renna', 'Rina', 'Riniya', 'Rosaria', 'Rosario', 'Roshi', 'Roshia', 'Rubrae', 'Ryllae', 'Salihn', 'Saelihn', 'Saida', 'Sakaala', 'Sana', 'Saria', 'Sariandi', 'Sarya', 'Seirye', 'Seldanna', 'Selphie', 'Selussa', 'Shadowmoon', 'Shalana', 'Shalendra', 'Shalheira', 'Shandalar', 'Shanyrria', 'Sharaera', 'Sharia', 'Sheedra', 'Sheera', 'Shialaevar', 'Shyael', 'Shyilia', 'Shyonia', 'Sinnafain', 'Solana', 'Soliania', 'Soora', 'Sorsasta', 'Sphiel', 'Sumia', 'Susklahava', 'Sylmae', 'Symrustar', 'Syndra', 'Syviis', 'Taenya', 'Taionia', 'Talanashta', 'Talila', 'Talindra', 'Tanelia', 'Tanulia', 'Tarasynora', 'Teharissa', 'Teryani', 'Tethys', 'Thalia', 'Thaola', 'Thasitalia', 'Thessalia', 'Tiatha', 'Tinesia', 'Tiriara', 'Tisharu', 'Tsarra', 'Uiathen', 'Ulelesse', 'Umrielyth', 'Urmicca', 'Uschymna', 'Valindra', 'Vashti', 'Velatha', 'Verrona', 'Vestele', 'Viansola', 'Viessa', 'Wynnter', 'Yaereene', 'Yalanilue', 'Yathlanae', 'Ygrainne', 'Ynshael', 'Yrlissa', 'Yrneha', 'Yrthraethra', 'Ysmyrlda', 'Yulmanda', 'Yunalesca', 'Zilyana', 'Zoastria', 'Vaeri'];
  const nm3 = ['Ad', 'Ae', 'Ara', 'Bal', 'Bei', 'Bi', 'Bry', 'Cai', 'Car', 'Chae', 'Cra', 'Da', 'Dae', 'Dor', 'Eil', 'El', 'Ela', 'En', 'Er', 'Fa', 'Fae', 'Far', 'Fen', 'Gen', 'Gil', 'Glyn', 'Gre', 'Hei', 'Hele', 'Her', 'Hola', 'Ian', 'Iar', 'Ili', 'Ina', 'Jo', 'Kea', 'Kel', 'Key', 'Kris', 'Leo', 'Lia', 'Lora', 'Lu', 'Mag', 'Mia', 'Mira', 'Mor', 'Nae', 'Neri', 'Nor', 'Ola', 'Olo', 'Oma', 'Ori', 'Pa', 'Per', 'Pet', 'Phi', 'Pres', 'Qi', 'Qin', 'Qui', 'Ralo', 'Rava', 'Rey', 'Ro', 'Sar', 'Sha', 'Syl', 'The', 'Tor', 'Tra', 'Tris', 'Ula', 'Ume', 'Uri', 'Va', 'Val', 'Ven', 'Vir', 'Waes', 'Wran', 'Wyn', 'Wysa', 'Xil', 'Xyr', 'Yel', 'Yes', 'Yin', 'Ylla', 'Zin', 'Zum', 'Zyl'];
  const nm4 = ['balar', 'banise', 'bella', 'beros', 'can', 'caryn', 'ceran', 'cyne', 'dan', 'di', 'dithas', 'dove', 'faren', 'fiel', 'fina', 'fir', 'geiros', 'gella', 'golor', 'gwyn', 'hana', 'harice', 'hice', 'horn', 'jeon', 'jor', 'jyre', 'kalyn', 'kas', 'kian', 'krana', 'lamin', 'lana', 'lar', 'lee', 'len', 'leth', 'lynn', 'maer', 'maris', 'menor', 'moira', 'myar', 'mys', 'na', 'nala', 'nan', 'neiros', 'nelis', 'norin', 'peiros', 'petor', 'phine', 'phyra', 'qen', 'qirelle', 'quinal', 'ra', 'ralei', 'ran', 'rel', 'ren', 'ric', 'rie', 'rieth', 'ris', 'ro', 'rona', 'rora', 'roris', 'salor', 'sandoral', 'satra', 'stina', 'sys', 'thana', 'thyra', 'toris', 'tris', 'tumal', 'valur', 'varis', 'ven', 'vyre', 'warin', 'wenys', 'wraek', 'wynn', 'xalim', 'xidor', 'xina', 'xisys', 'yarus', 'ydark', 'ynore', 'yra', 'zana', 'zeiros', 'zorwyn', 'zumin'];


  i = Math.floor(Math.random() * 10);
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    rnd3 = Math.floor(Math.random() * nm4.length);
    nameLast = nm3[rnd2] + nm4[rnd3];
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nameLast}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nameLast}`;
    }
    return names;
  }
}
