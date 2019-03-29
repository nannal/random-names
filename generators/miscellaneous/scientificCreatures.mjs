var sample = require ('lodash.sample')

function scientificCreatures() {
  let names;
  const nm1 = ['Acanthuridae', 'Achatina', 'Achatinoidea', 'Acinonyx', 'Actinidia', 'Aegypius', 'Aepyceros', 'Ailuropoda', 'Ailurus', 'Ajaja', 'Alcelaphinae', 'Alces', 'Alligator', 'Alopex', 'Alouatta', 'Ambystoma', 'Amphiprioninae', 'Anas', 'Anguis', 'Anisoptera', 'Anthozoa', 'Apatura', 'Apis', 'Apodemus', 'Aptenodytes', 'Arachnocampa', 'Arctictis', 'Arctocephalinae', 'Ardeidae', 'Arini', 'Arvicola', 'Astrochelys', 'Atelerix', 'Balaenoptera', 'Balsenoptera', 'Barbus', 'Betta', 'Bison', 'Blattaria', 'Bombina', 'Bombus', 'Bos', 'Brachypelma', 'Brachyura', 'Branta', 'Bubalus', 'Bubo', 'Bufo', 'Buteo', 'Cacajao', 'Caelifera', 'Caimaninae', 'Callithrix', 'Camelus', 'Canis', 'Canus', 'Capra', 'Caracal', 'Carcharhinus', 'Carcharodon', 'Caridea', 'Castor', 'Casuarius', 'Caudata', 'Cavia', 'Cebus', 'Cephalopterus', 'Ceratophrys', 'Ceratotherium', 'Cerura', 'Cetorhinus', 'Cettia', 'Chaetodontidae', 'Chamaeleonidae', 'Chelonioidea', 'Chelydridae', 'Chilopoda', 'Chinchilla', 'Chiroptera', 'Chlamydosaurus', 'Chlamyphorus', 'Chlorocebus', 'Choeropsis', 'Choloepus', 'Cichlidae', 'Cirripedia', 'Civettictis', 'Cnidaria', 'Coccinellidae', 'Coleoptera', 'Connochaetes', 'Coraciiformes', 'Coturnix', 'Crocodylus', 'Crocuta', 'Cryptoprocta', 'Cuon', 'Cygnus', 'Dasyatis', 'Dasypodidae', 'Dasyurus', 'Daubentonia', 'Delphinus', 'Demospongiae', 'Dendrobatidae', 'Dendrobranchiata', 'Dermaptera', 'Desmodontinae', 'Dicerorhinus', 'Diceros', 'Didelphis', 'Diomedeidae', 'Diplopoda', 'Diptera', 'Dracaena', 'Dromaius', 'Dugong', 'Dynastes', 'Echinoidea', 'Electrophorus', 'Elephantulus', 'Elephas', 'Eleutherodactylus', 'Emydidae', 'Enhydra', 'Ephemeroptera', 'Equus', 'Erethizon', 'Erithacus', 'Erythrocebus', 'Esox', 'Eudyptes', 'Eudyptula', 'Euptilotis', 'Falconiforme', 'Felis', 'Formicidae', 'Fratercula', 'Fregata', 'Funambulus', 'Galeocerdo', 'Gallinula', 'Gallus', 'Gavia', 'Gavialis', 'Gekkonidae', 'Geochelone', 'Gerbillinae', 'Gerridae', 'Ginglymostoma', 'Giraffa', 'Gliridae', 'Gopherus', 'Gorilla', 'Gruidae', 'Gulo', 'Gynnidomorpha', 'Halichoerus', 'Helarctos', 'Heleioporus', 'Heloderma', 'Helogale', 'Hemigalus', 'Heterodontus', 'Hieraatus', 'Hippocampus', 'Hippopotamus', 'Holothuroidea', 'Homo', 'Hydrochoerus', 'Hydrodamalis', 'Hydrurga', 'Hyla', 'Hylobatidae', 'Hymenoptera', 'Iguana', 'Indri', 'Insecta', 'Isoptera', 'Labridae', 'Lacerta', 'Lacertilia', 'Lagenorhynchus', 'Lagothrix', 'Lama', 'Larva', 'Latrodectus', 'Lemmus', 'Lemur', 'Leontopithecus', 'Leopardus', 'Lepisosteidae', 'Leptailurus', 'Lepus', 'Limulidae', 'Lissotriton', 'Litoria', 'Lopholithodes', 'Loxodonta', 'Lucanidae', 'Luscinia', 'Lutra', 'Lycaon', 'Lynx', 'Macaca', 'Macropus', 'Mammuthus', 'Mandrillus', 'Manta', 'Megadyptes', 'Megaptera', 'Meleagris', 'Melopsittacus', 'Mephitis', 'Merops', 'Mesobatrachia', 'Mesocricetus', 'Metynnis', 'Microcebus', 'Mirounga', 'Moloch', 'Muraenidae', 'Mustela', 'Myrmecobius', 'Myrmecophaga', 'Nandinia', 'Nasalis', 'Nasua', 'Nectophryne', 'Neofelis', 'Nephropidae', 'Numididae', 'Nyctereutes', 'Ochotona', 'Octopus', 'Odobenus', 'Odocoileus', 'Okapia', 'Oniscidea', 'Ophisaurus', 'Orcinus', 'Oriolus', 'Ornithorhynchus', 'Oryctolagus', 'Osteolaemus', 'Ostreidae', 'Otariidae', 'Ovis', 'Paguma', 'Paguroidea', 'Pan', 'Panthera', 'Papilionoidea', 'Papio', 'Paracheirodon', 'Paradisaeidae', 'Paradoxurus', 'Paralichthys', 'Passeridae', 'Pavo', 'Pecari', 'Pelecanus', 'Pelophylax', 'Perameles', 'Phacochoerus', 'Phaethon', 'Phalanger', 'Phalangeriforme', 'Pharomachrus', 'Phascolarctos', 'Phasianus', 'Phasmatodea', 'Phoca', 'Phoenicopterus', 'Phycodurus', 'Physeter', 'Physignathus', 'Pica', 'Picidae', 'Platanistoidea', 'Poecilia', 'Pogona', 'Pomacanthidae', 'Pongo', 'Prionailurus', 'Pristella', 'Procavia', 'Procyon', 'Proteus', 'Protoreaster', 'Pseudoryx', 'Psittacine', 'Pterois', 'Pteromyini', 'Pygocentrus', 'Pygoscelis', 'Ramphastos', 'Rana', 'Rangifer', 'Raphus', 'Rattus', 'Recurvirostra', 'Rhincodon', 'Rhinoceros', 'Rhinocerotidae', 'Rhinoderma', 'Rupicapra', 'Saguinus', 'Saimiri', 'Sarcophilus', 'Sciuridae', 'Scorpaenidae', 'Scorpiones', 'Sepiida', 'Serpentes', 'Setonix', 'Siluriformes', 'Simia', 'Smilodon', 'Spermophilus', 'Spheniscus', 'Sphenodon', 'Sphyraena', 'Sphyrna', 'Squalus', 'Stegostoma', 'Strigops', 'Strix', 'Struthio', 'Sula', 'Suricata', 'Sus', 'Symphysodon', 'Syncerus', 'Tachyglossus', 'Talpidae', 'Tamias', 'Tapirus', 'Tarsius', 'Taxidea', 'Tetraodontidae', 'Tetraoninae', 'Teuthida', 'Threskiornithidae', 'Thylogale', 'Tragelaphus', 'Tremarctos', 'Trichechus', 'Tridacna', 'Trochilidae', 'Troglodytes', 'Tursiops', 'Tyto', 'Urochordata', 'Uroplatus', 'Ursidae', 'Ursus', 'Varanus', 'Vespa', 'Viverra', 'Vombatus', 'Vulpes', 'Xenopus'];
  const nm2 = ['Abelii', 'Acanthias', 'Aculeatus', 'Acutorostrata', 'Adeliae', 'Aegagrus', 'Afra', 'Africana', 'Africanus', 'Agassizii', 'Agilis', 'Ajaja', 'Alba', 'Albiventris', 'Alces', 'Alisman', 'Alpinus', 'Altaica', 'Aluco', 'Amblyrhynchos', 'Americanus', 'Amoyensis', 'Amphibius', 'Anatinus', 'Anguinus', 'Antarcticus', 'Antipodes', 'Arctica', 'Arcticus', 'Arctos', 'Argenteus', 'Aries', 'Asinus', 'Atratus', 'Auratus', 'Aurelia', 'Aureus', 'Axelrodi', 'Bactrianus', 'Barbus', 'Bengalensis', 'Berengei', 'Bicolor', 'Bicornis', 'Binotata', 'Binturong', 'Birostris', 'Bison', 'Borneensis', 'Brachyurus', 'Bubalis', 'Bufo', 'Buteo', 'Caballus', 'Caffer', 'Camelopardalis', 'Camelus', 'Canadensis', 'Capensis', 'Capucinus', 'Caracal', 'Carcharias', 'Catesbeiana', 'Catta', 'Centroura', 'Chrysocome', 'Chrysolophus', 'Cinereus', 'Cirratum', 'Civetta', 'Colchicus', 'Concolor', 'Corbetti', 'Coturnix', 'Cristatus', 'Crocuta', 'Cucullatus', 'Cuniculus', 'Cuvier', 'Cyclotis', 'Darwinii', 'Deliciosa', 'Delphis', 'Demersus', 'Derbyanus', 'Diehli', 'Dingo', 'Diphone', 'Domesticus', 'Dorsaum', 'Dromedarius', 'Dugon', 'Electricus', 'Elegans', 'Eques', 'Equus', 'Erminea', 'Esculentus', 'Europaeus', 'Eurycerus', 'Falconeri', 'Familiaris', 'Fasciatum', 'Fasciatus', 'Fascicularis', 'Ferox', 'Forsteri', 'Fragilis', 'Francisci', 'Fulgens', 'Fulica', 'Furo', 'Fuscata', 'Gallus', 'Gangeticus', 'Geoffroyi', 'Gigantea', 'Giganteus', 'Gigas', 'Glama', 'Gorilla', 'Graueri', 'Grevyi', 'Grunniens', 'Grypus', 'Guianensis', 'Gulo', 'Habroptilus', 'Harrisii', 'Hercules', 'Hermaphroditus', 'Hircus', 'Hoffmani', 'Horriblis', 'Horridus', 'Humboldti', 'Hydrochaeris', 'Iberia', 'Iguana', 'Immer', 'Imperator', 'Indicus', 'Indri', 'Iris', 'Jacksoni', 'Johnstoni', 'Jubatus', 'Kingii', 'Komodoensis', 'Laevis', 'Lagopus', 'Lagotricha', 'Lanigera', 'Larvata', 'Larvatus', 'Latrans', 'Lemmus', 'Leo', 'Leptonyx', 'Lessonae', 'Leucas', 'Liberiensis', 'Lotor', 'Luminosa', 'Lupus', 'Lutris', 'Lynx', 'Macrocephalus', 'Maculatus', 'Magarhynchos', 'Magellanicus', 'Malayanus', 'Manatu', 'Mandarinia', 'Mandtii', 'Marinus', 'Maritimus', 'Maxillaris', 'Maximus', 'Melampus', 'Melanoleuca', 'Mendiculus', 'Mephitis', 'Mexicanum', 'Midas', 'Minor', 'Monachus', 'Mule', 'Murinus', 'Musculus', 'Nasua', 'Nasuta', 'Nattereri', 'Neanderthalensis', 'Nebouxii', 'Nebulosa', 'Nghetinhensis', 'Nigra', 'Nivalis', 'Nodosus', 'Novaeangliae', 'Novaehollandiae', 'Obscurus', 'Occidentalis', 'Oedipus', 'Onca', 'Orca', 'Orientalis', 'Oriolus', 'Ornata', 'Ornatus', 'Palmarum', 'Paniscus', 'Papua', 'Pardalis', 'Pardus', 'Parvula', 'Patagonicus', 'Patas', 'Physalus', 'Pica', 'Pictus', 'Platyrhynchos', 'Populator', 'Porcellus', 'Primigenius', 'Procyonoides', 'Punctatus', 'Putorius', 'Pygerythrus', 'Pygmaea', 'Pygmaeus', 'Quagga', 'Radiata', 'Rattus', 'Reticulata', 'Richardsonii', 'Ridibundus', 'Robustus', 'Rosalia', 'Rosmarus', 'Rubecula', 'Rufus', 'Rupicapra', 'Sapiens', 'Scandiacus', 'Schlegeli', 'Scrofa', 'Scyphozoa', 'Serval', 'Simum', 'Smithi', 'Sondaicus', 'Sphinx', 'Spilogaster', 'Splendens', 'Strepsiceros', 'Striatus', 'Sulfuratus', 'Sumatrae', 'Sumatranus', 'Sumatrensis', 'Suricatta', 'Suspectum', 'Sylvaticus', 'Tajacu', 'Tangalunga', 'Tarandus', 'Taurinus', 'Taurus', 'Taxus', 'Temporaria', 'Tetraspis', 'Tibetanus', 'Tigrinum', 'Tigris', 'Toco', 'Tridactyla', 'Troglodytes', 'Truncatus', 'Typus', 'Undulatus', 'Unicornis', 'Ursinus', 'Vinula', 'Virginiana', 'Vitticeps', 'Vitulina', 'Viverrinus', 'Volitans', 'Vulgaris', 'Vulpes', 'Zebra', 'Zerda', 'Zygaena'];
  const nm3 = ['Acanth', 'Ach', 'Achat', 'Acin', 'Act', 'Aeg', 'Aepyc', 'Ail', 'Ailur', 'Aj', 'Al', 'Alc', 'Alcel', 'All', 'Amb', 'Amphipr', 'An', 'Ang', 'Anis', 'Anth', 'Ap', 'Apat', 'Apod', 'Apten', 'Ar', 'Arachn', 'Arct', 'Arctoc', 'Ard', 'Arv', 'Astr', 'Atel', 'Balaen', 'Balsen', 'Barb', 'Bett', 'Bis', 'Blatt', 'Bomb', 'Bos', 'Br', 'Brach', 'Bub', 'Buf', 'But', 'Cac', 'Cael', 'Caim', 'Call', 'Cam', 'Can', 'Capr', 'Car', 'Carch', 'Cas', 'Cast', 'Caud', 'Cav', 'Ceb', 'Cephal', 'Cer', 'Cerat', 'Cet', 'Cett', 'Chaetod', 'Chamael', 'Chel', 'Chelon', 'Chil', 'Chinch', 'Chiropt', 'Chlam', 'Chlamyd', 'Chlor', 'Choer', 'Chol', 'Cichl', 'Cirr', 'Civett', 'Cnid', 'Coccin', 'Coleopt', 'Connoch', 'Corac', 'Cot', 'Croc', 'Crocod', 'Crypt', 'Cuon', 'Cygn', 'Das', 'Dasyp', 'Daubent', 'Delph', 'Demosp', 'Dendrob', 'Dendrobr', 'Derm', 'Desmod', 'Dic', 'Dicer', 'Did', 'Diom', 'Dipl', 'Dipt', 'Drac', 'Drom', 'Dug', 'Dyn', 'Echin', 'Electr', 'Eleph', 'Eleuther', 'Emyd', 'Enh', 'Ephem', 'Eq', 'Ereth', 'Erith', 'Erythr', 'Es', 'Eud', 'Eupt', 'Falcon', 'Fel', 'Formic', 'Frat', 'Freg', 'Fun', 'Galeoc', 'Gall', 'Gallin', 'Gav', 'Gekkon', 'Geoch', 'Gerb', 'Gerr', 'Ginglym', 'Gir', 'Glir', 'Goph', 'Gor', 'Gruid', 'Gul', 'Gynnid', 'Halich', 'Hel', 'Heleiop', 'Helod', 'Helog', 'Hemig', 'Heter', 'Hier', 'Hipp', 'Hippop', 'Holoth', 'Hom', 'Hydr', 'Hydrod', 'Hyl', 'Hylob', 'Hymen', 'Iguan', 'Indr', 'Ins', 'Isopt', 'Labr', 'Lac', 'Lacert', 'Lag', 'Lagenorh', 'Lam', 'Larv', 'Latr', 'Lem', 'Lemm', 'Leontop', 'Leop', 'Lep', 'Lepis', 'Lept', 'Limul', 'Liss', 'Lit', 'Lophol', 'Loxod', 'Lucan', 'Lusc', 'Lutr', 'Lyc', 'Lynx', 'Mac', 'Macr', 'Mammuth', 'Mandr', 'Mant', 'Megad', 'Megapt', 'Meleagr', 'Melops', 'Meph', 'Mer', 'Mesobatr', 'Mesocr', 'Met', 'Microc', 'Mir', 'Mol', 'Muraen', 'Must', 'Myrmec', 'Nand', 'Nas', 'Nectophr', 'Neof', 'Nephr', 'Numid', 'Nycter', 'Ochot', 'Octop', 'Odob', 'Odoc', 'Okap', 'Onisc', 'Ophis', 'Orc', 'Oriol', 'Ornithorh', 'Oryct', 'Osteol', 'Ostr', 'Otar', 'Ov', 'Pag', 'Pagur', 'Pan', 'Panth', 'Pap', 'Papilion', 'Parach', 'Paradis', 'Paradox', 'Paral', 'Pass', 'Pav', 'Pec', 'Pelec', 'Peloph', 'Peram', 'Phacoch', 'Phaeth', 'Phal', 'Phalanger', 'Pharom', 'Phas', 'Phascol', 'Phasmat', 'Phoc', 'Phoenic', 'Phycod', 'Phys', 'Physign', 'Pic', 'Platan', 'Poec', 'Pog', 'Pomac', 'Pong', 'Prion', 'Prist', 'Proc', 'Prot', 'Protor', 'Pseud', 'Psitt', 'Pter', 'Pterom', 'Pygoc', 'Pygosc', 'Ramph', 'Ran', 'Rang', 'Raph', 'Ratt', 'Recurv', 'Rhinc', 'Rhinoc', 'Rhinocer', 'Rhinod', 'Rupic', 'Sag', 'Saim', 'Sarcoph', 'Sciur', 'Scorp', 'Sep', 'Serp', 'Set', 'Silurif', 'Sim', 'Smil', 'Spermoph', 'Sph', 'Sphen', 'Sphyr', 'Squal', 'Stegost', 'Strig', 'Strix', 'Struth', 'Sul', 'Suric', 'Sus', 'Symph', 'Sync', 'Tachyg', 'Talp', 'Tam', 'Tap', 'Tars', 'Tax', 'Tetraod', 'Tetraon', 'Teuth', 'Threskiorn', 'Thyl', 'Tragel', 'Trem', 'Trich', 'Trid', 'Troch', 'Trogl', 'Turs', 'Tyt', 'Uroch', 'Uropl', 'Urs', 'Var', 'Vesp', 'Viv', 'Vomb', 'Vulp', 'Xenop'];
  const nm4 = ['aatus', 'aca', 'acal', 'achia', 'achrus', 'acine', 'acna', 'acus', 'ae', 'aeidae', 'aemus', 'aena', 'aenidae', 'aetes', 'affa', 'ailurus', 'aius', 'aja', 'ajao', 'ale', 'alis', 'alus', 'amalis', 'ambulus', 'anchiata', 'anger', 'aninae', 'anta', 'anthidae', 'antulus', 'anus', 'aon', 'aphinae', 'aphus', 'apra', 'aptera', 'arctos', 'ardus', 'arhinus', 'ari', 'aria', 'arodon', 'as', 'astes', 'astos', 'ata', 'athus', 'atidae', 'atina', 'atus', 'aurus', 'avia', 'easter', 'ebus', 'echus', 'ecta', 'edeidae', 'eidae', 'eirodon', 'ela', 'eles', 'elis', 'ella', 'ellidae', 'elone', 'elphis', 'elus', 'emus', 'entes', 'entrus', 'enus', 'eo', 'eonidae', 'ephalinae', 'era', 'ercula', 'erdo', 'eridae', 'erix', 'erma', 'eroptera', 'eros', 'erra', 'erta', 'erus', 'es', 'eter', 'eus', 'eutes', 'ia', 'ialis', 'ianus', 'ias', 'icetus', 'ichthys', 'icola', 'ictis', 'ida', 'idae', 'idea', 'ifer', 'ifera', 'iforme', 'igator', 'iida', 'iidae', 'iiformes', 'ilia', 'ilidae', 'illa', 'illinae', 'illus', 'ilotis', 'ilus', 'ina', 'inae', 'ini', 'inia', 'inidia', 'inoidea', 'inus', 'io', 'ioidea', 'iones', 'ioninae', 'iops', 'ipedia', 'iri', 'irostra', 'irus', 'is', 'iscus', 'istoidea', 'ithecus', 'ithidae', 'ithodes', 'ithrix', 'itis', 'ittacus', 'ius', 'izon', 'lossus', 'o', 'obius', 'ocampa', 'ocampus', 'ocebus', 'och', 'ochelys', 'ochoerus', 'odactylus', 'odea', 'odectus', 'odidae', 'odon', 'odontus', 'odytes', 'oepus', 'oerus', 'ogale', 'oidea', 'oileus', 'ois', 'olagus', 'oma', 'omorpha', 'on', 'ona', 'ong', 'ongiae', 'onia', 'onix', 'onta', 'ontidae', 'ontinae', 'onyx', 'opex', 'ophaga', 'ophorus', 'ophrys', 'opidae', 'opoda', 'oprocta', 'ops', 'opsis', 'optera', 'opterus', 'opus', 'or', 'ordata', 'orhinus', 'oria', 'ormes', 'orus', 'oryx', 'osaurus', 'osteidae', 'ostoma', 'otamus', 'otherium', 'othrix', 'otidae', 'otriton', 'ouatta', 'ounga', 'ox', 'ozoa', 'ua', 'uarius', 'uinus', 'uis', 'ula', 'uma', 'ur', 'ura', 'urga', 'uridae', 'urnix', 'uroidea', 'urus', 'us', 'uta', 'uus', 'yatis', 'ydra', 'ydridae', 'yini', 'ylax', 'ylus', 'ynchus', 'yne', 'ynnis', 'yon', 'ypelma', 'yphorus', 'ypius', 'yptes', 'yptula', 'yrna', 'ysodon', 'ystoma', 'yura', 'yurus'];
  const nm5 = ['Abel', 'Acanth', 'Acul', 'Acutor', 'Adel', 'Aeg', 'Afr', 'Agass', 'Agil', 'Aj', 'Al', 'Alb', 'Albiv', 'Alc', 'Alism', 'Alp', 'Alt', 'Amblyrh', 'Amoyens', 'Amphib', 'Anat', 'Ang', 'Antip', 'Ar', 'Arct', 'Arg', 'As', 'Atr', 'Aur', 'Axelr', 'Bactr', 'Barb', 'Bengal', 'Ber', 'Bic', 'Bin', 'Bint', 'Bir', 'Bison', 'Born', 'Brach', 'Bub', 'Buf', 'But', 'Cab', 'Caff', 'Camel', 'Camelop', 'Cap', 'Capuc', 'Car', 'Carch', 'Catesb', 'Catt', 'Centr', 'Chrys', 'Cin', 'Cirr', 'Civ', 'Colch', 'Conc', 'Corb', 'Cot', 'Crist', 'Croc', 'Cucull', 'Cunic', 'Cuv', 'Cycl', 'Darw', 'Delic', 'Delph', 'Dem', 'Derb', 'Diehl', 'Ding', 'Diph', 'Domest', 'Dors', 'Dromed', 'Dug', 'Electr', 'Eleg', 'Eq', 'Erm', 'Escul', 'Europ', 'Euryc', 'Falcon', 'Famil', 'Fasc', 'Fascic', 'Fer', 'Forst', 'Frag', 'Franc', 'Ful', 'Fulg', 'Fur', 'Fusc', 'Gall', 'Ganget', 'Geoffr', 'Gig', 'Gigant', 'Glam', 'Gor', 'Grauer', 'Grev', 'Grunn', 'Gryp', 'Guian', 'Gul', 'Habropt', 'Harr', 'Herc', 'Herm', 'Hirc', 'Hoffm', 'Horr', 'Humb', 'Hydroch', 'Ib', 'Iguan', 'Imm', 'Imper', 'Ind', 'Indr', 'Ir', 'Jacks', 'Johnst', 'Jub', 'King', 'Komod', 'Laev', 'Lag', 'Lagotr', 'Lanig', 'Larv', 'Latr', 'Lemm', 'Lept', 'Less', 'Leuc', 'Liber', 'Lot', 'Lum', 'Lup', 'Lutr', 'Lynx', 'Ma', 'Macroc', 'Macul', 'Magarh', 'Magell', 'Mal', 'Man', 'Mand', 'Mandt', 'Mar', 'Maxill', 'Maxim', 'Mel', 'Melan', 'Mend', 'Meph', 'Mid', 'Min', 'Monach', 'Mul', 'Mur', 'Muscul', 'Nas', 'Natt', 'Neb', 'Nghetinh', 'Niv', 'Nod', 'Novaeangl', 'Obscur', 'Occid', 'Oedip', 'Onc', 'Or', 'Orc', 'Orn', 'Palm', 'Pan', 'Pap', 'Pard', 'Parv', 'Pat', 'Patag', 'Phys', 'Pic', 'Pict', 'Platyrh', 'Popul', 'Porc', 'Prim', 'Procyon', 'Punct', 'Put', 'Pyger', 'Pygm', 'Quagg', 'Radiat', 'Ratt', 'Retic', 'Ridib', 'Robust', 'Ros', 'Rosm', 'Rubec', 'Ruf', 'Rupic', 'Sap', 'Scand', 'Scr', 'Scyph', 'Serv', 'Sim', 'Sond', 'Sph', 'Spilog', 'Splend', 'Str', 'Streps', 'Sulfur', 'Sum', 'Sumatr', 'Suric', 'Susp', 'Sylv', 'Taj', 'Tang', 'Tar', 'Taur', 'Tax', 'Tempor', 'Tetr', 'Tibet', 'Tigr', 'Toc', 'Trid', 'Trogl', 'Trunc', 'Typ', 'Undul', 'Unic', 'Ursin', 'Vin', 'Vitt', 'Vitul', 'Viverr', 'Volit', 'Vulg', 'Vulp', 'Zebr', 'Zerd', 'Zyg'];
  const nm6 = ['acal', 'actyla', 'acu', 'aea', 'aena', 'aeris', 'aeus', 'agrus', 'aica', 'aicus', 'aja', 'al', 'alia', 'alis', 'allus', 'alunga', 'alus', 'ampus', 'an', 'andus', 'ani', 'anicus', 'ans', 'anus', 'apra', 'ardalis', 'aria', 'arias', 'arinia', 'aris', 'arius', 'arum', 'arus', 'as', 'aspis', 'aster', 'ata', 'aticus', 'ator', 'atrae', 'atta', 'atu', 'atum', 'atus', 'aum', 'ayanus', 'ea', 'eatus', 'ectum', 'eensis', 'eiana', 'elia', 'ellus', 'engei', 'ens', 'ensis', 'entalis', 'enteus', 'entris', 'entus', 'eo', 'ephalus', 'er', 'era', 'ereri', 'ereus', 'eri', 'eria', 'ersus', 'erus', 'es', 'etta', 'etti', 'eus', 'iacus', 'iae', 'ianus', 'iaris', 'ias', 'iatum', 'iatus', 'iblis', 'ica', 'iceps', 'iceros', 'icha', 'iculus', 'icus', 'idus', 'iens', 'iensis', 'ier', 'ies', 'igenius', 'ii', 'ilis', 'illa', 'ilus', 'ina', 'inea', 'inii', 'inosa', 'inum', 'inus', 'inx', 'iol', 'iosa', 'is', 'isci', 'iscus', 'isii', 'itimus', 'itis', 'ius', 'izii', 'o', 'ocome', 'odes', 'odi', 'oditus', 'odytes', 'oensis', 'ofa', 'oides', 'oldti', 'oleuca', 'olophus', 'olor', 'on', 'onae', 'one', 'oni', 'onicus', 'onii', 'onyx', 'opus', 'or', 'orius', 'ornis', 'os', 'ostrata', 'ostris', 'osus', 'otata', 'otis', 'oura', 'ouxii', 'ox', 'oyi', 'ozoa', 'ua', 'uco', 'ues', 'uinus', 'ula', 'ularis', 'ulata', 'ules', 'ulosa', 'ulus', 'um', 'undus', 'urnix', 'urong', 'us', 'uta', 'uus', 'yanus', 'yi', 'ynchos', 'ythrus', 'yurus'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = `${sample(nm1)} ${sample(nm2)}`;
    } else {
      names = `${sample(nm3) + sample(nm4)} ${sample(nm5)}${sample(nm6)}`;
    }
    return names;
  }
}
module.exports = scientificCreatures
