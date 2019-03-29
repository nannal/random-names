var sample = require ('lodash.sample')

function norns() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Eymundr', 'Hergeir', 'Steingrimr', 'Adalag', 'Eystein', 'Hergils', 'Naddad', 'Steini', 'Adalsteinn', 'Eysteinn', 'Hergrim', 'Naddod', 'Steinmodr', 'Adam', 'Eythiofr', 'Hergrimr', 'Naddoddr', 'Steinn', 'Adils', 'Eythjof', 'Herigar', 'Nagli', 'Steinolfr', 'Adils', 'Eyvind', 'Heriolfr', 'Narfi', 'Steinrodr', 'Aeskell', 'Eyvindr', 'Herjolf', 'Nattfari', 'Steinthor', 'Aevar', 'Herlaugr', 'Nefsteinn', 'Steinthorr', 'Aevarr', 'Falki', 'Hermund', 'Nereidr', 'Steinvith', 'Afavldr', 'Farulf', 'Hermundr', 'Neri', 'Stigandi', 'Agdi', 'Finn', 'Herraud', 'Niall', 'Storolfr', 'Agnar', 'Finnbogi', 'Herrodr', 'Nikolas', 'Storvirk', 'Agni', 'Finngeirr', 'Hersteinn', 'Nikulas', 'Strolf', 'Aki', 'Finni', 'Herthjolf', 'Njal', 'Sturla', 'aleifir', 'Finnr', 'Hertrygg', 'Njall', 'Sturla', 'Alf', 'Finnvardr', 'Hervard', 'Styr', 'Alfarinn', 'Fjalar', 'Heyjang-Bjorn', 'Oblaudr', 'Styrbiorn', 'Alfeid', 'Fjolmod', 'Hiallkarr', 'Od', 'Styrbjorn', 'Alfgeir', 'Fjolnir', 'Hialmolfr', 'Oddbiorn', 'Styrkarr', 'Alfr', 'Fjosni', 'Hialti', 'Oddgeirr', 'Styrmir', 'Ali', 'Fleinn', 'Hide-Bjorn', 'Oddi', 'Styrr', 'Alrek', 'Floki', 'Hildigrim', 'Oddleif', 'Sulki', 'Alrekr', 'Flosi', 'Hildir', 'Oddleifr', 'Sumarlidi', 'Alrik', 'Forni', 'Hildungr', 'Oddmar', 'Sumarlidi', 'Amleth', 'Fostolfr', 'Hiorleifr', 'Oddr', 'Sur', 'Amundi', 'Fradi', 'Hiorr', 'Odinn', 'Surt', 'An', 'Freedman', 'Hiortr', 'Ofeigr', 'Surtr', 'Angantyr', 'Freki', 'Hjalmar', 'Ofieg', 'Svadi', 'Ani', 'Frey', 'Hjalti', 'Ogmund', 'Svafar', 'Anlaf', 'Freysteinn', 'Hjorleif', 'Ogmundr', 'Svan', 'Anskar', 'Freyvidr', 'Hjorolf', 'Ogurr', 'Svanr', 'Anwend', 'Fricco', 'Hjort', 'Ohthere', 'Svardkell', 'Ara', 'Fridgeir', 'Hjorvard', 'Olaf', 'Svart', 'Aran', 'Fridleifr', 'Hlenni', 'Olafr', 'Svarthofdi', 'Ardgar', 'Fridmundr', 'Hlodver', 'Olafur', 'Svartkell', 'Ari', 'Friggir', 'Hlodvir', 'Oleg', 'Svartr', 'Arinbjorn', 'Frikko', 'Hnaki', 'Oleifr', 'Svavar', 'Armod', 'Frithjof', 'Hoggvandill', 'Oli', 'Svavarr', 'Armodr', 'Frodi', 'Hogni', 'Olmodr', 'Sveigdir', 'Arnaldr', 'Frodo', 'Hoketil', 'Olvir', 'Svein', 'Arnar', 'Frosti', 'Holmgeir', 'Ondott', 'Sveinbiorn', 'Arnfinn', 'Fullsterker', 'Holmkell', 'Ondottr', 'Sveinn', 'Arngeirr', 'Fyri', 'Holmstein', 'Ongull', 'Sveinungr', 'Arngrim', 'Holmsteinn', 'Onund', 'Sven', 'Arngrimr', 'Galmr', 'Holta-Thorir', 'Onundr', 'Sverting', 'Arni', 'Galti', 'Holti', 'Oraekia', 'Svertingr', 'Arnis', 'Gamli', 'Hord', 'Orc', 'Svip', 'Arnkel', 'Gardar', 'Hordr', 'Orgumleidi', 'Arnkell', 'Gardarr', 'Hored', 'Orliyg', 'Tanni', 'Arnlaugr', 'Gauk', 'Horik', 'Orlygr', 'Teit', 'Arnliotr', 'Gaukr', 'Hoskuld', 'Orm', 'Teitr', 'Arnljot', 'Gaut', 'Hoskuldr', 'Ormar', 'Thangbrand', 'Arnmodr', 'Gauti', 'Hosvir', 'Ormarr', 'Thangbrandr', 'Arnoddr', 'Gautr', 'Hradi', 'Ormr', 'Thengill', 'Arnor', 'Gautrek', 'Hraerek', 'Orn', 'Thidrandi', 'Arnridr', 'Gautrekr', 'Hraerekr', 'Orn', 'Thidrandi', 'Arnstein', 'Geir', 'Hrafn', 'Ornolf', 'Thiodarr', 'Arnthorr', 'Geiri', 'Hrafnkel', 'Ornolfr', 'Thiodolfr', 'Arnvid', 'Geirleifr', 'Hrafnkell', 'Oscytel', 'Thiostarr', 'Arnvidar', 'Geirmund', 'Hrafsi', 'Osfrid', 'Thiostolfr', 'Asbiorn', 'Geirmundr', 'Hrani', 'Oskrud', 'Thjalfi', 'Asbjorn', 'Geirolf', 'Hrani', 'Ospak', 'Thjodolf', 'Asbrand', 'Geirolfr', 'Hrapp', 'Ospakr', 'Thjostolf', 'Asbrandr', 'Geirr', 'Hrappr', 'Osvaldr', 'Thodrekr', 'Asgaut', 'Geirrod', 'Hreggvid', 'Osvif', 'Thor', 'Asgautr', 'Geirrodr', 'Hreidarr', 'Osvifr', 'Thoralfr', 'Asgeir', 'Geirsteinn', 'Hreinn', 'Othjodan', 'Thorarin', 'Asgeirr', 'Geirthiolfr', 'Hrethel', 'Otkar', 'Thorarinn', 'Asgrim', 'Geirthjof', 'Hrifla', 'Otkel', 'Thorberger', 'asgrimr', 'Geitir', 'Hring', 'Otkell', 'Thorbergr', 'Asi', 'Gellir', 'Hroald', 'Otrygg', 'Thorbiorn', 'Askel', 'Gest', 'Hroaldr', 'Otryggr', 'Thorbjorn', 'Askell', 'Gestr', 'Hroar', 'Ottar', 'Thorbrandr', 'Askold', 'Giafvaldr', 'Hroar', 'Ottarr', 'Thord', 'Askr', 'Gilli', 'Hroar-Hrothgar', 'Oxen-Thorir', 'Thordar', 'Aslakr', 'Gilling', 'Hroarr', 'Oymund', 'Thordr', 'Asmolfr', 'Gils', 'Hrodgeirr', 'Ozar-Toti', 'Thorfidr', 'Asmund', 'Gisl', 'Hrodmar', 'Ozur', 'Thorfinn', 'Asmundr', 'Gisli', 'Hrodmarr', 'Ozurr', 'Thorfinnr', 'Asrodr', 'Gizur', 'Hrodolfr', 'Thorgautr', 'Astrador', 'Gizurr', 'Hroi', 'Pal', 'Thorgeir', 'Asvaldr', 'Glaedir', 'Hrolaf', 'Pall', 'Thorgeirr', 'Asvard', 'Glammad', 'Hrolf', 'Palsson', 'Thorgestr', 'Athils', 'Glum', 'Hrolfr', 'Patrekr', 'Thorgil', 'Atli', 'Glumr', 'Hrollaugr', 'Petr', 'Thorgils', 'Audgisl', 'Gnupa', 'Hrolleifr', 'Purse', 'Thorgils', 'Audolf', 'Gnupa-Bard', 'Hromund', 'Thorgir', 'Audolfr', 'Gnupr', 'Hromundr', 'Thorgnyr', 'Audr', 'Godfred', 'Hrossbiorn', 'Radormr', 'Thorgrim', 'Audun', 'Godfrid', 'Hrosskel', 'Raegnald', 'Thorgrimr', 'Aun', 'Godi', 'Hrosskell', 'Ragi', 'Thorhaddr', 'Austmadr', 'Godmund', 'Hrothgar', 'Ragi', 'Thorhall', 'Avaldi', 'Godord', 'Hrothulf', 'Ragnald', 'Thorhalli', 'Avaldr', 'Gorm', 'Hrotti', 'Ragnar', 'Thorhallr', 'Avanger', 'Gormr', 'Hrut', 'Ragnarr', 'Thorir', 'Awai', 'Grani', 'Hrutr', 'Ragnvald', 'Thorir', 'Grani', 'Hunbogi', 'Raknar', 'Thorkel', 'Balder', 'Greniadr', 'Hunbogi', 'Raud', 'Thorkell', 'Balki', 'Grettir', 'Hundi', 'Raudr', 'Thorlakr', 'Banki', 'Grim', 'Hundi', 'Raudulfr', 'Thorleif', 'Bard', 'Grimkell', 'Hundolfr', 'Raumr', 'Thorleifr', 'Bardi', 'Grimolfr', 'Hunrodr', 'Ref', 'Thorleik', 'Bardi', 'Grimr', 'Hunthjolf', 'Ref-Nose', 'Thorleikr', 'Bardr', 'Griotgardr', 'Hvati', 'Refr', 'Thorliotr', 'Barekr', 'Gripr', 'Hygelac', 'Regin', 'Thormod', 'Barkman', 'Griss', 'Hyrningr', 'Reginbrand', 'Thormodr', 'Barri', 'Grjotgard', 'Reginfred', 'Thorodd', 'Baug', 'Grjotgarth', 'Igor', 'Reistr', 'Thoroddr', 'Bauger', 'Grubs', 'Illugi', 'Rennir', 'Thorolf', 'Baugsson', 'Grundi', 'Imsigull', 'Reyrketill', 'Thorolfr', 'Beigudr', 'Gudbrand', 'Ingialdr', 'Rig', 'Thorormr', 'Beinir', 'Gudfastr', 'Ingimund', 'Rodrekr', 'Thorri', 'Bekan', 'Gudlaug', 'Ingimundr', 'Roduulf', 'Thorstein', 'Berg', 'Gudlaugr', 'Ingjald', 'Rognavald', 'Thorsteinn', 'Berg-Onund', 'Gudleif', 'Ingolf', 'Rognvald', 'Thorvald', 'Bergr', 'Gudleifr', 'Ingolfr', 'Rognvaldr', 'Thorvaldr', 'Bergthorr', 'Gudmund', 'Ingvar', 'Rollaug', 'Thorvardr', 'Berle-Kari', 'Gudmundr', 'Ingvarr', 'Rongudr', 'Thorvidr', 'Bersi', 'Gudrod', 'Isleif', 'Rorik', 'Thrain', 'Bialfi', 'Gudrodar', 'Isleifr', 'Runolf', 'Thrainn', 'Biarnhedinn', 'Gudrodr', 'Isolfr', 'Runolfr', 'Thrand', 'Biarni', 'Gudthormr', 'Israudr', 'Rurik', 'Thrandr', 'Biartmarr', 'Gufi', 'Ivar', 'Thrasi', 'Bild', 'Gungu-Hrolf', 'Ivarr', 'Saebiorn', 'Thravi', 'Biolan', 'Gunnar', 'Saeming', 'Throndr', 'Biolfr', 'Gunnarr', 'Jarnskeggi', 'Saeming', 'Throstr', 'Biorn', 'Gunnars', 'Jatmundr', 'Saemingr', 'Thurcytel', 'Biornolfr', 'Gunnbjorn', 'Jatvardr', 'Saemund', 'Tind', 'Bjalfi', 'Gunniorn', 'Jofreidr', 'Saemundr', 'Tindr', 'Bjarki', 'Gunnlaug', 'Jokul', 'Samr', 'Tiorvi', 'Bjarkmar', 'Gunnlaugr', 'Jokulf', 'Saxi', 'Tjorvi', 'Bjarni', 'Gunnolfr', 'Jokull', 'Sazur', 'Tjosni', 'Bjartmar', 'Gunnor', 'Jolf', 'Sel', 'Torbjorn', 'Bjolan', 'Gunnsteinn', 'Jolgeirr', 'Sigarr', 'Torf-Einar', 'Bjorgolf', 'Gunnulv', 'Jon', 'Sigerich', 'Torfi', 'Bjorn', 'Gunnvaldr', 'Jorund', 'Sigfastr', 'Torrad', 'Bjornolf', 'Gurd', 'Jorundr', 'Sigfred', 'Torradr', 'Blaeing', 'Gusir', 'Josteinn', 'Sigfus', 'Tosti', 'Blaeinger', 'Gust', 'Josurr', 'Sigfuss', 'Trandil', 'Bodmodr', 'Guthfrith', 'Siggeir', 'Trjonn', 'Bodvar', 'Guthorm', 'Kadall', 'Siggurd', 'Truvor', 'Bodvarr', 'Guthrum', 'Kalf', 'Sighvat', 'Trygg', 'Bogi', 'Guttormr', 'Kalfr', 'Sighvatr', 'Tryggvi', 'Bolli', 'Gyrdr', 'Kali', 'Sigmund', 'Trygve', 'Bolli', 'Kalman', 'Sigmundr', 'Tyrfing', 'Bolverk', 'Ha1fr', 'Kar', 'Sigtrygg', 'Tyrfingr', 'Bolverkr', 'Hadd', 'Kari', 'Sigtryggr', 'Bor', 'Hadding', 'Kark', 'Sigurd', 'Ubbi', 'Borgar', 'Haeng', 'Karl', 'Sigurdr', 'Ugga', 'Borkr', 'Haengr', 'Karli', 'Sigurdur', 'Ulf', 'Bosi', 'Haeringr', 'Karlsefni', 'Sigvaldi', 'Ulfar', 'Bothvar', 'Haethcyn', 'Karr', 'Sigvaldi', 'Ulfcytel', 'Botolfr', 'Haf', 'Ketil', 'Sihtric', 'Ulfhedin', 'Bovi', 'Hafgrimr', 'Ketilbiorn', 'Sineus', 'Ulfhedinn', 'Bragi', 'Haflidi', 'Ketilbjorn', 'Sinfjotli', 'Ulfkell', 'Brand', 'Hafliotr', 'Ketill', 'Sirnir', 'Ulf-Kraka', 'Brandi', 'Hafr', 'Kiallakr', 'Sjolf', 'Ulfliotr', 'Brandr', 'Hafthorr', 'Kiaran', 'Skaeringr', 'Ulfljot', 'Brattr', 'Hak', 'Kiartan', 'Skagi', 'Ulfr', 'Breidr', 'Haki', 'Kiotvi', 'Skalk', 'Ull', 'Briningr', 'Hakon', 'Kisi', 'Skallagrim', 'Ulv', 'Brodd', 'Halbjorn', 'Kjarten', 'Skalpr', 'Uni', 'Broddr', 'Haleygr', 'Kjarval', 'Skamkel', 'Unni', 'Brondolf', 'Half', 'Klaengr', 'Skamkell', 'Brondolfr', 'Halfdan', 'Klaufi', 'Skapti', 'Vadi', 'Bruni', 'Halfdan', 'Kleppiarn', 'Skarf', 'Valagnar', 'Brunni', 'Halga', 'Klyppr', 'Skarf', 'Valbrandr', 'Brusi', 'Hall', 'Kniukr', 'Skarphedinn', 'Valgard', 'Bryniolfr', 'Halladr', 'Knorr', 'Skati', 'Vali', 'Brynjolf', 'Hallbiorn', 'Knottr', 'Skefill', 'Valthiolfr', 'Bryn-Thvari', 'Halldor', 'Knut', 'Skeggi', 'Vamod', 'Budli', 'Hallfredr', 'Kodran', 'Skialdbiorn', 'Vandill', 'Hallgeir', 'Kol', 'Skialgr', 'Vandrad', 'Chnob', 'Hallgeirr', 'Kolbein', 'Skidi', 'Varin', 'Hallgils', 'Kolbeinn', 'Skili', 'Vebiorn', 'Dag', 'Hallgrim', 'Kolbiorn', 'Skioldulfr', 'Vebrandr', 'Dagfari', 'Hallgrimr', 'Kolgrimr', 'Skirnir', 'Vefodr', 'Dagr', 'Halli', 'Koll', 'Skjalg', 'Vegestr', 'Dala-Alf', 'Hallkatla', 'Kolli', 'Skjold', 'Vekell', 'Dala-Koll', 'Hallkel', 'Kollr', 'Skolli', 'Veleifr', 'Dalkr', 'Hallkell', 'Kollsveinn', 'Skolmr', 'Vemund', 'Dan', 'Hallormr', 'Kolr', 'Skopti', 'Vemundr', 'Darri', 'Hallr', 'Kolskegg', 'Skorageirr', 'Verlidi', 'Dir', 'Hallstein', 'Kolskeggr', 'Skorri', 'Vermund', 'Drafli', 'Hallsteinn', 'Kolskeggur', 'Skrauti', 'Vermundr', 'Droplaugar', 'Hallvard', 'Konall', 'Skrogg', 'Vermunds', 'Drott', 'Hallvardr', 'Kori', 'Skuli', 'Vestarr', 'Dufnall', 'Hals', 'Kormak', 'Skuma', 'Vesteinn', 'Dufniall', 'Hamall', 'Kormakr', 'Skumr', 'Vestlidi', 'Dufthakr', 'Hamund', 'Kotkel', 'Smid', 'Vestmadr', 'Dugfuss', 'Hamundr', 'Kott', 'Smidkell', 'Vethormr', 'Dumb', 'Harald', 'Krabbi', 'Smidr', 'Vethorn', 'Dyri', 'Haraldr', 'Krumr', 'Snaebiorn', 'Vetrlidi', 'Hardaknut', 'Kugaldi', 'Snaekolf', 'Vidarr', 'Eddval', 'Hardbein', 'Kveldulf', 'Snaeulf', 'Vidgip', 'Egil', 'Hardecnudth', 'Kvistr', 'Snidil', 'Vifill', 'Egill', 'Hardegon', 'Kylan', 'Snorri', 'Viga-Glum', 'Eidr', 'Hardeknud', 'Snorri', 'Vigbiodr', 'Eilaf', 'Hardnefr', 'Lamb', 'Snortr', 'Vigfus', 'Eilif', 'Harek', 'Lamba', 'Snow', 'Vigfuss', 'Eilifr', 'Harekr', 'Lambi', 'Sokka', 'Viglundr', 'Einar', 'Harri', 'Leidolfr', 'Sokki', 'Vignir', 'Einarr', 'Hastein', 'Leidorf', 'Sokki', 'Vigsterkr', 'Eindridi', 'Hasteinn', 'Leif', 'Sokkolfr', 'Vikar', 'Eirik', 'Hasting', 'Liafdag', 'Solgi', 'Vikingr', 'Eirikr', 'Hauk', 'Ljot', 'Solmund', 'Vilbradr', 'Eldgrim', 'Haukr', 'Lodin', 'Solmundr', 'Vilgeirr', 'Eldgrimr', 'Havardr', 'Lodmund', 'Solvarr', 'Vilgerd', 'Eldiarn', 'Havarr', 'Loftr', 'Solvi', 'Vilmund', 'Elfradr', 'Hawker-Hedin', 'Loki', 'Sorkvir', 'Visin', 'Ellidagrimr', 'Healfdene', 'Lyting', 'Sorli', 'Volund', 'Emund', 'Heardred', 'Soti', 'Endridi', 'Hedinn', 'Magnus', 'Soti', 'Weland', 'Erilar', 'Hegbjorn', 'Malcolm', 'Soxolfr', 'Erlend', 'Heggr', 'Mani', 'Stafngrimr', 'Erlendr', 'Heidrek', 'Mar', 'Starkad', 'Ylfing', 'Erling', 'Heimdall', 'Melkolf', 'Starkadr', 'Ymir', 'Erlingr', 'Heimir', 'Melpatrikr', 'Star-Oddi', 'Yngvar', 'Erp', 'Helgi', 'Melsnati', 'Starri', 'Yngvi', 'Erpr', 'Helgrim', 'Modolf', 'Stefnir', 'Ypper', 'Eyfrodr', 'Hemming', 'Modolfr', 'Stein', 'Eyiarr', 'Herbjorn', 'Moldan', 'Steinar', 'Eyiolfr', 'Heremod', 'Mord', 'Steinarr', 'Eyjolf', 'Herfinnr', 'Moror', 'Steinbiorn', 'Eylaugr', 'Hergeir', 'Mottull', 'Steinfidr'];
  const nm2 = ['son', 'son', 'son', 'kin'];
  const nm3 = ['Aegileif', 'Aesa', 'Aldis', 'Alfdis', 'Alfeior', 'Alfgeror', 'Alof', 'Arnbjorg', 'Arndis', 'Arneior', 'Arnfrior', 'Arngeror', 'Arngunnr', 'Arnkatla', 'Arnleif', 'Arnora', 'Arnthruor', 'Asa', 'Asbjorg', 'Asdis', 'Asgeror', 'Ashildr', 'Asleif', 'Asny', 'Asta', 'Astrior', 'Asvor', 'Auor', 'Bera', 'Bergdis', 'Bergljot', 'Bergthora', 'Birna', 'Bjargey', 'Bjollok', 'Bjorg', 'Bot', 'Botey', 'Bryngeror', 'Dagrun', 'Dalla', 'Dis', 'Dyrfinna', 'Eirny', 'Elina', 'Eona', 'Eydis', 'Eyja', 'Fastny', 'Finna', 'Fjorleif', 'Fregeror', 'Friogeror', 'Geirbjorg', 'Geirhildr', 'Geirlaug', 'Geirny', 'Geirrior', 'Geror', 'Gjaflaug', 'Greloo', 'Grima', 'Groa', 'Gunnhildr', 'Gunnvor', 'Guobjorg', 'Guolaug', 'Guoleif', 'Guony', 'Guorior', 'Guorun', 'Hafthora', 'Halla', 'Hallbera', 'Hallbjorg', 'Halldis', 'Halldora', 'Hallfrior', 'Hallgeror', 'Hallkatla', 'Hallveig', 'Hallvor', 'Heimlaug', 'Heior', 'Helga', 'Herdis', 'Herrior', 'Herthruor', 'Hervor', 'Hildigunnr', 'Hjalmgeror', 'Hjalp', 'Hlif', 'Hrafnhildr', 'Hrefna', 'Hroony', 'Hungeror', 'Ingibjorg', 'Ingigeror', 'Ingileif', 'Ingrior', 'Ingunn', 'Ingvoldr', 'Iounn', 'Isgeror', 'Jarngeror', 'Jodis', 'Jofrior', 'Jora', 'Joreior', 'Jorunn', 'Kaolin', 'Katie', 'Katla', 'Ketilrior', 'Kjolvor', 'Kolfinna', 'Kolgrima', 'Maeva', 'Melkorka', 'Mjoll', 'Moeior', 'Myrgjol', 'Myrun', 'Niobjorg', 'Oddbjorg', 'Oddfrior', 'Oddlaug', 'Oddleif', 'Oddny', 'Ondott', 'Ormhildr', 'Osk', 'Otkatla', 'Raforta', 'Ragnheior', 'Ragnhildr', 'Rannveig', 'Reginleif', 'Rjupa', 'Saehildr', 'Saeuor', 'Salbjorg', 'Salgeror', 'Signy', 'Sigrior', 'Snaelaug', 'Solveig', 'Solvor', 'Steinunn', 'Steinvor', 'Svana', 'Svanlaug', 'Thjoogeror', 'Thjoohildr', 'Thora', 'Thorarna', 'Thorbjorg', 'Thordis', 'Thorelfr', 'Thorey', 'Thorfinna', 'Thorgeror', 'Thorgrima', 'Thorhildr', 'Thorkatla', 'Thorlaug', 'Thorleif', 'Thorlot', 'Thorny', 'Thorodda', 'Thorunn', 'Thorve', 'Thorvor', 'Thraslaug', 'Thurior', 'Tofa', 'Ulfeior', 'Ulfhildr', 'Ulfrun', 'Valdis', 'Valgeror', 'Valkyrie', 'Vedis', 'Velaug', 'Veny', 'Vigdis', 'Vilborg', 'Vilgeror', 'Waelkyrige', 'Yngvildr', 'Yrr', 'Agnes', 'Agnete', 'Alfhild', 'Amalie', 'Andrea', 'Anette', 'Anna', 'Anne', 'Astra', 'Astri', 'Astrid', 'Aud', 'Beate', 'Bente', 'Bergitta', 'Berit', 'Borghild', 'Camilla', 'Caroline', 'Cathrine', 'Catrine', 'Christine', 'Dagmar', 'Danica', 'Disa', 'Dorte', 'Eir', 'Elisa', 'Elise', 'Ellen', 'Elsa', 'Emilie', 'Emma', 'Freya', 'Frida', 'Gerd', 'Gjertrud', 'Gudrun', 'Gunnhild', 'Haldis', 'Hanna', 'Hannah', 'Hanne', 'Hedda', 'Hege', 'Heidi', 'Helene', 'Henriette', 'Hilda', 'Hilde', 'Hj�rdis', 'Ida', 'Inga', 'Ingeborg', 'Inger', 'Ingri', 'Ingrid', 'Ingvil', 'Ingvild', 'Ingvill', 'Janne', 'Jenny', 'Jensina', 'Johanna', 'Jorun', 'Josefina', 'Julie', 'Kaia', 'Kamilla', 'Karen', 'Kari', 'Karolina', 'Karoline', 'Katrine', 'Kirsten', 'Kristianna', 'Kristin', 'Kristina', 'Kristine', 'Lene', 'Lisbet', 'Malena', 'Malin', 'Maren', 'Margit', 'Margrete', 'Mari', 'Maria', 'Marie', 'Marit', 'Marta', 'Marte', 'Marthe', 'Marthine', 'Martine', 'Mary', 'Matilda', 'Nikolina', 'Nina', 'Nora', 'Oda', 'Olava', 'Olina', 'Pernilla', 'Petra'];
  const nm4 = ['dottir', 'dottir', 'dottir', 'kin'];
  const nm5 = ['Eymundr', 'Hergeir', 'Steingrimr', 'Adalag', 'Eystein', 'Hergil', 'Naddad', 'Steina', 'Adalstein', 'Eystein', 'Hergrim', 'Naddod', 'Steinmodr', 'Adam', 'Eythiofr', 'Hergrimr', 'Naddoddr', 'Stein', 'Adil', 'Eythjof', 'Herigar', 'Nagla', 'Steinolfr', 'Adil', 'Eyvind', 'Heriolfr', 'Narfa', 'Steinrodr', 'Aeskel', 'Eyvindr', 'Herjolf', 'Nattfara', 'Steinthor', 'Aevar', 'Herlaugr', 'Nefstein', 'Steinthor', 'Aevar', 'Falka', 'Hermund', 'Nereidr', 'Steinvith', 'Afavldr', 'Farulf', 'Hermundr', 'Nera', 'Stiganda', 'Agda', 'Fin', 'Herraud', 'Nial', 'Storolfr', 'Agnar', 'Finnboga', 'Herrodr', 'Nikola', 'Storvirk', 'Agna', 'Finngeir', 'Herstein', 'Nikula', 'Strolf', 'Aka', 'Finna', 'Herthjolf', 'Njal', 'Sturlu', 'aleifir', 'Finnr', 'Hertrygg', 'Njal', 'Sturlu', 'Alf', 'Finnvardr', 'Hervard', 'Styr', 'Alfarin', 'Fjalar', 'Heyjang-Bjornn', 'Oblaudr', 'Styrbiornn', 'Alfeid', 'Fjolmod', 'Hiallkar', 'Od', 'Styrbjornn', 'Alfgeir', 'Fjolnir', 'Hialmolfr', 'Oddbiornn', 'Styrkar', 'Alfr', 'Fjosna', 'Hialta', 'Oddgeir', 'Styrmir', 'Ala', 'Flein', 'Hide-Bjornn', 'Odda', 'Styr', 'Alrek', 'Floka', 'Hildigrim', 'Oddleif', 'Sulka', 'Alrekr', 'Flosa', 'Hildir', 'Oddleifr', 'Sumarlida', 'Alrik', 'Forna', 'Hildungr', 'Oddmar', 'Sumarlida', 'Amleth', 'Fostolfr', 'Hiorleifr', 'Oddr', 'Sur', 'Amunda', 'Frada', 'Hior', 'Odin', 'Surt', 'An', 'Freedmann', 'Hiortr', 'Ofeigr', 'Surtr', 'Angantyr', 'Freka', 'Hjalmar', 'Ofieg', 'Svada', 'Ana', 'Frey', 'Hjalta', 'Ogmund', 'Svafar', 'Anlaf', 'Freystein', 'Hjorleif', 'Ogmundr', 'Svan', 'Anskar', 'Freyvidr', 'Hjorolf', 'Ogur', 'Svanr', 'Anwend', 'Fricco', 'Hjort', 'Ohthere', 'Svardkel', 'Aru', 'Fridgeir', 'Hjorvard', 'Olaf', 'Svart', 'Aran', 'Fridleifr', 'Hlenna', 'Olafr', 'Svarthofda', 'Ardgar', 'Fridmundr', 'Hlodver', 'Olafur', 'Svartkel', 'Ara', 'Friggir', 'Hlodvir', 'Oleg', 'Svartr', 'Arinbjornn', 'Frikko', 'Hnaka', 'Oleifr', 'Svavar', 'Armod', 'Frithjof', 'Hoggvandil', 'Ola', 'Svavar', 'Armodr', 'Froda', 'Hogna', 'Olmodr', 'Sveigdir', 'Arnaldr', 'Frodo', 'Hoketil', 'Olvir', 'Svein', 'Arnar', 'Frosta', 'Holmgeir', 'Ondott', 'Sveinbiorn', 'Arnfin', 'Fullsterker', 'Holmkel', 'Ondottr', 'Svein', 'Arngeir', 'Fyra', 'Holmstein', 'Ongul', 'Sveinungr', 'Arngrim', 'Holmstein', 'Onund', 'Sven', 'Arngrimr', 'Galmr', 'Holta-Thorir', 'Onundr', 'Sverting', 'Arna', 'Galta', 'Holta', 'Oraekiu', 'Svertingr', 'Arni', 'Gamla', 'Hord', 'Orc', 'Svip', 'Arnkel', 'Gardar', 'Hordr', 'Orgumleida', 'Arnkel', 'Gardar', 'Hored', 'Orliyg', 'Tanna', 'Arnlaugr', 'Gauk', 'Horik', 'Orlygr', 'Teit', 'Arnliotr', 'Gaukr', 'Hoskuld', 'Orm', 'Teitr', 'Arnljot', 'Gaut', 'Hoskuldr', 'Ormar', 'Thangbrand', 'Arnmodr', 'Gauta', 'Hosvir', 'Ormar', 'Thangbrandr', 'Arnoddr', 'Gautr', 'Hrada', 'Ormr', 'Thengil', 'Arnor', 'Gautrek', 'Hraerek', 'Orn', 'Thidranda', 'Arnridr', 'Gautrekr', 'Hraerekr', 'Thidranda', 'Arnstein', 'Geir', 'Hrafn', 'Ornolf', 'Thiodar', 'Arnthor', 'Geira', 'Hrafnkel', 'Ornolfr', 'Thiodolfr', 'Arnvid', 'Geirleifr', 'Hrafnkel', 'Oscytel', 'Thiostar', 'Arnvidar', 'Geirmund', 'Hrafsa', 'Osfrid', 'Thiostolfr', 'Asbiornn', 'Geirmundr', 'Hrana', 'Oskrud', 'Thjalfa', 'Asbjornn', 'Geirolf', 'Hrana', 'Ospak', 'Thjodolf', 'Asbrand', 'Geirolfr', 'Hrapp', 'Ospakr', 'Thjostolf', 'Asbrandr', 'Geir', 'Hrappr', 'Osvaldr', 'Thodrekr', 'Asgaut', 'Geirrod', 'Hreggvid', 'Osvif', 'Thor', 'Asgautr', 'Geirrodr', 'Hreidar', 'Osvifr', 'Thoralfr', 'Asgeir', 'Geirstein', 'Hrein', 'Othjodan', 'Thorarin', 'Asgeir', 'Geirthiolfr', 'Hrethel', 'Otkar', 'Thorarin', 'Asgrim', 'Geirthjof', 'Hriflu', 'Otkel', 'Thorberger', 'asgrimr', 'Geitir', 'Hring', 'Otkel', 'Thorbergr', 'Asa', 'Gellir', 'Hroald', 'Otrygg', 'Thorbiorn', 'Askel', 'Gest', 'Hroaldr', 'Otryggr', 'Thorbjornn', 'Askel', 'Gestr', 'Hroar', 'Ottar', 'Thorbrandr', 'Askold', 'Giafvaldr', 'Hroar', 'Ottar', 'Thord', 'Askr', 'Gilla', 'Hroar-Hrothgar', 'Oxen-Thorir', 'Thordar', 'Aslakr', 'Gilling', 'Hroar', 'Oymund', 'Thordr', 'Asmolfr', 'Gil', 'Hrodgeir', 'Ozar-Tota', 'Thorfidr', 'Asmund', 'Gisl', 'Hrodmar', 'Ozur', 'Thorfin', 'Asmundr', 'Gisla', 'Hrodmar', 'Ozur', 'Thorfinnr', 'Asrodr', 'Gizur', 'Hrodolfr', 'Thorgautr', 'Astrador', 'Gizur', 'Hroa', 'Pal', 'Thorgeir', 'Asvaldr', 'Glaedir', 'Hrolaf', 'Pal', 'Thorgeir', 'Asvard', 'Glammad', 'Hrolf', 'Pals', 'Thorgestr', 'Athil', 'Glum', 'Hrolfr', 'Patrekr', 'Thorgil', 'Atla', 'Glumr', 'Hrollaugr', 'Petr', 'Thorgil', 'Audgisl', 'Gnupu', 'Hrolleifr', 'Purse', 'Thorgil', 'Audolf', 'Gnupa-Bard', 'Hromund', 'Thorgir', 'Audolfr', 'Gnupr', 'Hromundr', 'Thorgnyr', 'Audr', 'Godfred', 'Hrossbiorn', 'Radormr', 'Thorgrim', 'Audun', 'Godfrid', 'Hrosskel', 'Raegnald', 'Thorgrimr', 'Aun', 'Goda', 'Hrosskel', 'Raga', 'Thorhaddr', 'Austmadr', 'Godmund', 'Hrothgar', 'Raga', 'Thorhal', 'Avalda', 'Godord', 'Hrothulf', 'Ragnald', 'Thorhalla', 'Avaldr', 'Gorm', 'Hrotta', 'Ragnar', 'Thorhallr', 'Avanger', 'Gormr', 'Hrut', 'Ragnar', 'Thorir', 'Awaa', 'Grana', 'Hrutr', 'Ragnvald', 'Thorir', 'Grana', 'Hunboga', 'Raknar', 'Thorkel', 'Balder', 'Greniadr', 'Hunboga', 'Raud', 'Thorkel', 'Balka', 'Grettir', 'Hunda', 'Raudr', 'Thorlakr', 'Banka', 'Grim', 'Hunda', 'Raudulfr', 'Thorleif', 'Bard', 'Grimkel', 'Hundolfr', 'Raumr', 'Thorleifr', 'Barda', 'Grimolfr', 'Hunrodr', 'Ref', 'Thorleik', 'Barda', 'Grimr', 'Hunthjolf', 'Ref-Nose', 'Thorleikr', 'Bardr', 'Griotgardr', 'Hvata', 'Refr', 'Thorliotr', 'Barekr', 'Gripr', 'Hygelac', 'Regin', 'Thormod', 'Barkman', 'Gris', 'Hyrningr', 'Reginbrand', 'Thormodr', 'Barra', 'Grjotgard', 'Reginfred', 'Thorodd', 'Baug', 'Grjotgarth', 'Igor', 'Reistr', 'Thoroddr', 'Bauger', 'Grub', 'Illuga', 'Rennir', 'Thorolf', 'Baugs', 'Grunda', 'Imsigul', 'Reyrketil', 'Thorolfr', 'Beigudr', 'Gudbrand', 'Ingialdr', 'Rig', 'Thorormr', 'Beinir', 'Gudfastr', 'Ingimund', 'Rodrekr', 'Thorra', 'Bekan', 'Gudlaug', 'Ingimundr', 'Roduulf', 'Thorstein', 'Berg', 'Gudlaugr', 'Ingjald', 'Rognavald', 'Thorstein', 'Berg-Onund', 'Gudleif', 'Ingolf', 'Rognvald', 'Thorvald', 'Bergr', 'Gudleifr', 'Ingolfr', 'Rognvaldr', 'Thorvaldr', 'Bergthor', 'Gudmund', 'Ingvar', 'Rollaug', 'Thorvardr', 'Berle-Kara', 'Gudmundr', 'Ingvar', 'Rongudr', 'Thorvidr', 'Bersa', 'Gudrod', 'Isleif', 'Rorik', 'Thrain', 'Bialfa', 'Gudrodar', 'Isleifr', 'Runolf', 'Thrain', 'Biarnhedin', 'Gudrodr', 'Isolfr', 'Runolfr', 'Thrand', 'Biarna', 'Gudthormr', 'Israudr', 'Rurik', 'Thrandr', 'Biartmar', 'Gufa', 'Ivar', 'Thrasa', 'Bild', 'Gungu-Hrolf', 'Ivar', 'Saebiorn', 'Thrava', 'Biolan', 'Gunnar', 'Saeming', 'Throndr', 'Biolfr', 'Gunnar', 'Jarnskegga', 'Saeming', 'Throstr', 'Biorn', 'Gunnar', 'Jatmundr', 'Saemingr', 'Thurcytel', 'Biornolfr', 'Gunnbjorn', 'Jatvardr', 'Saemund', 'Tind', 'Bjalfa', 'Gunniorn', 'Jofreidr', 'Saemundr', 'Tindr', 'Bjarka', 'Gunnlaug', 'Jokul', 'Samr', 'Tiorva', 'Bjarkmar', 'Gunnlaugr', 'Jokulf', 'Saxa', 'Tjorva', 'Bjarna', 'Gunnolfr', 'Jokul', 'Sazur', 'Tjosna', 'Bjartmar', 'Gunnor', 'Jolf', 'Sel', 'Torbjorn', 'Bjolan', 'Gunnstein', 'Jolgeir', 'Sigar', 'Torf-Einar', 'Bjorgolf', 'Gunnulv', 'Jon', 'Sigerich', 'Torfa', 'Bjorn', 'Gunnvaldr', 'Jorund', 'Sigfastr', 'Torrad', 'Bjornolf', 'Gurd', 'Jorundr', 'Sigfred', 'Torradr', 'Blaeing', 'Gusir', 'Jostein', 'Sigfu', 'Tosta', 'Blaeinger', 'Gust', 'Josur', 'Sigfus', 'Trandil', 'Bodmodr', 'Guthfrith', 'Siggeir', 'Trjon', 'Bodvar', 'Guthorm', 'Kadal', 'Siggurd', 'Truvor', 'Bodvar', 'Guthrum', 'Kalf', 'Sighvat', 'Trygg', 'Boga', 'Guttormr', 'Kalfr', 'Sighvatr', 'Tryggva', 'Bolla', 'Gyrdr', 'Kala', 'Sigmund', 'Trygve', 'Bolla', 'Kalman', 'Sigmundr', 'Tyrfing', 'Bolverk', 'Ha1fr', 'Kar', 'Sigtrygg', 'Tyrfingr', 'Bolverkr', 'Hadd', 'Kara', 'Sigtryggr', 'Bor', 'Hadding', 'Kark', 'Sigurd', 'Ubba', 'Borgar', 'Haeng', 'Karl', 'Sigurdr', 'Uggu', 'Borkr', 'Haengr', 'Karla', 'Sigurdur', 'Ulf', 'Bosa', 'Haeringr', 'Karlsefna', 'Sigvalda', 'Ulfar', 'Bothvar', 'Haethcyn', 'Kar', 'Sigvalda', 'Ulfcytel', 'Botolfr', 'Haf', 'Ketil', 'Sihtric', 'Ulfhedin', 'Bova', 'Hafgrimr', 'Ketilbiorn', 'Sineu', 'Ulfhedin', 'Braga', 'Haflida', 'Ketilbjorn', 'Sinfjotla', 'Ulfkel', 'Brand', 'Hafliotr', 'Ketil', 'Sirnir', 'Ulf-Kraku', 'Branda', 'Hafr', 'Kiallakr', 'Sjolf', 'Ulfliotr', 'Brandr', 'Hafthor', 'Kiaran', 'Skaeringr', 'Ulfljot', 'Brattr', 'Hak', 'Kiartan', 'Skaga', 'Ulfr', 'Breidr', 'Haka', 'Kiotva', 'Skalk', 'Ul', 'Briningr', 'Hakon', 'Kisa', 'Skallagrim', 'Ulv', 'Brodd', 'Halbjorn', 'Kjarten', 'Skalpr', 'Una', 'Broddr', 'Haleygr', 'Kjarval', 'Skamkel', 'Unna', 'Brondolf', 'Half', 'Klaengr', 'Skamkel', 'Brondolfr', 'Halfdan', 'Klaufa', 'Skapta', 'Vada', 'Bruna', 'Halfdan', 'Kleppiarn', 'Skarf', 'Valagnar', 'Brunna', 'Halgu', 'Klyppr', 'Skarf', 'Valbrandr', 'Brusa', 'Hal', 'Kniukr', 'Skarphedin', 'Valgard', 'Bryniolfr', 'Halladr', 'Knor', 'Skata', 'Vala', 'Brynjolf', 'Hallbiorn', 'Knottr', 'Skefil', 'Valthiolfr', 'Bryn-Thvara', 'Halldor', 'Knut', 'Skegga', 'Vamod', 'Budla', 'Hallfredr', 'Kodran', 'Skialdbiornn', 'Vandil', 'Hallgeir', 'Kol', 'Skialgr', 'Vandrad', 'Chnob', 'Hallgeir', 'Kolbein', 'Skida', 'Varin', 'Hallgil', 'Kolbein', 'Skila', 'Vebiorn', 'Dag', 'Hallgrim', 'Kolbiorn', 'Skioldulfr', 'Vebrandr', 'Dagfara', 'Hallgrimr', 'Kolgrimr', 'Skirnir', 'Vefodr', 'Dagr', 'Halla', 'Kol', 'Skjalg', 'Vegestr', 'Dala-Alf', 'Hallkatlu', 'Kolla', 'Skjold', 'Vekel', 'Dala-Kol', 'Hallkel', 'Kollr', 'Skolla', 'Veleifr', 'Dalkr', 'Hallkel', 'Kollsvein', 'Skolmr', 'Vemund', 'Dan', 'Hallormr', 'Kolr', 'Skopta', 'Vemundr', 'Darra', 'Hallr', 'Kolskegg', 'Skorageir', 'Verlida', 'Dir', 'Hallstein', 'Kolskeggr', 'Skorra', 'Vermund', 'Drafla', 'Hallstein', 'Kolskeggur', 'Skrauta', 'Vermundr', 'Droplaugar', 'Hallvard', 'Konal', 'Skrogg', 'Vermund', 'Drott', 'Hallvardr', 'Kora', 'Skula', 'Vestar', 'Dufnal', 'Hal', 'Kormak', 'Skumu', 'Vestein', 'Dufnial', 'Hamal', 'Kormakr', 'Skumr', 'Vestlida', 'Dufthakr', 'Hamund', 'Kotkel', 'Smid', 'Vestmadr', 'Dugfus', 'Hamundr', 'Kott', 'Smidkel', 'Vethormr', 'Dumb', 'Harald', 'Krabba', 'Smidr', 'Vethorn', 'Dyra', 'Haraldr', 'Krumr', 'Snaebiorn', 'Vetrlida', 'Hardaknut', 'Kugalda', 'Snaekolf', 'Vidar', 'Eddval', 'Hardbein', 'Kveldulf', 'Snaeulf', 'Vidgip', 'Egil', 'Hardecnudth', 'Kvistr', 'Snidil', 'Vifil', 'Egil', 'Hardegon', 'Kylan', 'Snorra', 'Viga-Glum', 'Eidr', 'Hardeknud', 'Snorra', 'Vigbiodr', 'Eilaf', 'Hardnefr', 'Lamb', 'Snortr', 'Vigfu', 'Eilif', 'Harek', 'Lambu', 'Snow', 'Vigfus', 'Eilifr', 'Harekr', 'Lamba', 'Sokku', 'Viglundr', 'Einar', 'Harra', 'Leidolfr', 'Sokka', 'Vignir', 'Einar', 'Hastein', 'Leidorf', 'Sokka', 'Vigsterkr', 'Eindrida', 'Hastein', 'Leif', 'Sokkolfr', 'Vikar', 'Eirik', 'Hasting', 'Liafdag', 'Solga', 'Vikingr', 'Eirikr', 'Hauk', 'Ljot', 'Solmund', 'Vilbradr', 'Eldgrim', 'Haukr', 'Lodin', 'Solmundr', 'Vilgeir', 'Eldgrimr', 'Havardr', 'Lodmund', 'Solvar', 'Vilgerd', 'Eldiarn', 'Havar', 'Loftr', 'Solva', 'Vilmund', 'Elfradr', 'Hawker-Hedin', 'Loka', 'Sorkvir', 'Visin', 'Ellidagrimr', 'Healfdene', 'Lyting', 'Sorla', 'Volund', 'Emund', 'Heardred', 'Sota', 'Endrida', 'Hedin', 'Magnu', 'Sota', 'Weland', 'Erilar', 'Hegbjorn', 'Malcolm', 'Soxolfr', 'Erlend', 'Heggr', 'Mana', 'Stafngrimr', 'Erlendr', 'Heidrek', 'Mar', 'Starkad', 'Ylfing', 'Erling', 'Heimdal', 'Melkolf', 'Starkadr', 'Ymir', 'Erlingr', 'Heimir', 'Melpatrikr', 'Star-Odda', 'Yngvar', 'Erp', 'Helga', 'Melsnata', 'Starra', 'Yngva', 'Erpr', 'Helgrim', 'Modolf', 'Stefnir', 'Ypper', 'Eyfrodr', 'Hemming', 'Modolfr', 'Stein', 'Eyiar', 'Herbjorn', 'Moldan', 'Steinar', 'Eyiolfr', 'Heremod', 'Mord', 'Steinar', 'Eyjolf', 'Herfinnr', 'Moror', 'Steinbiorn', 'Eylaugr', 'Hergeir', 'Mottul', 'Steinfidr'];
  const nm6 = ['Battle', 'Black', 'Blood', 'Bone', 'Boulder', 'Bronze', 'Clan', 'Cold', 'Dark', 'Dawn', 'Dead', 'Death', 'Deep', 'Doom', 'Dragon', 'Eagle', 'Earth', 'Ember', 'Far', 'Fire', 'Fist', 'Flame', 'Free', 'Frost', 'Full', 'Gloom', 'Gold', 'Gore', 'Great', 'Hard', 'Hawk', 'Heavy', 'Hell', 'Hill', 'Iron', 'Laughing', 'Light', 'Lightning', 'Lone', 'Long', 'Mountain', 'Proud', 'Pyre', 'Rage', 'Rain', 'Raven', 'River', 'Rock', 'Shadow', 'Sharp', 'Skull', 'Sky', 'Snow', 'Steel', 'Stone', 'Storm', 'Strong', 'Swift', 'Tall', 'Thunder', 'War', 'Wild'];
  const nm7 = ['arm', 'axe', 'bash', 'basher', 'beard', 'belly', 'bend', 'blade', 'bleeder', 'brace', 'braid', 'branch', 'brand', 'breaker', 'breath', 'breeze', 'bringer', 'caller', 'chewer', 'cleaver', 'crag', 'crusher', 'cut', 'dream', 'fall', 'fist', 'flayer', 'forge', 'fury', 'grip', 'hammer', 'hand', 'helm', 'hide', 'maul', 'pike', 'rage', 'rider', 'roar', 'scar', 'scream', 'seeker', 'shaper', 'shield', 'shout', 'slayer', 'song', 'splitter', 'stalker', 'steel', 'stride', 'strider', 'sword', 'walker', 'watcher', 'whisper', 'wind', 'winds', 'wolf', 'wound'];
  const nm8 = ['the Agonizer', 'the Ancient', 'the Anguished', 'the Assassin', 'the Blessed', 'the Broken', 'the Dreamer', 'the Burdened', 'the Chaotic', 'the Conquerer', 'the Corrupted', 'the Cruel', 'the Cunning', 'the Dark', 'the Deceptive', 'the Delusionall', 'the Diligent', 'the Damned', 'the Just', 'the Restless', 'the Restful', 'the Eternal', 'the Executioner', 'the Fallen', 'the Fool', 'the Frozen', 'the Furious', 'the Giant', 'the Graceful', 'the Hateful', 'the Tormented', 'the Hero', 'the Horrid', 'the Horror', 'the Immortal', 'the Insane', 'the Just', 'the Mercyful', 'the Mountain', 'the Mourning', 'the Mystery', 'the Phantom', 'the Prideful', 'the Redeemed', 'the Riddle', 'the Secrect', 'the Shadow', 'the Silent', 'the Storm', 'the Subtle', 'the Suffering', 'the Terror', 'the Thunder', 'the Titan', 'the Torment', 'the Traitor', 'the Twisted', 'the Vengeful', 'the Ancient', 'the Banished', 'the Beast', 'the Blessed', 'the Champion', 'the Corrupted', 'the Covenant', 'the Damned', 'the Enigma', 'the Fallen', 'the Forgotten', 'the Forsaken', 'the Gladiator', 'the Immortal', 'the Insane', 'the Lost', 'the Protector', 'the Storm', 'the Victor', 'the Wicked', 'the Wolf', 'the Wretched'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 4) {
        names = `${sample(nm3)} ${sample(nm5)}${sample(nm4)}`;
      } else if (i < 7) {
        names = `${sample(nm3)} ${sample(nm6)}${sample(nm7)}`;
      } else {
        names = `${sample(nm3)} ${sample(nm8)}`;
      }
    } else if (i < 4) {
      names = `${sample(nm1)} ${sample(nm5)}${sample(nm2)}`;
    } else if (i < 7) {
      names = `${sample(nm1)} ${sample(nm6)}${sample(nm7)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm8)}`;
    }
    return names;
  }
}
module.exports = norns
