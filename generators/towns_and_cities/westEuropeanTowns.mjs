var sample = require ('lodash.sample')

function westEuropeanTowns() {
  let names;
  const nm1 = ['Alten', 'Am', 'Ans', 'Bischof', 'Blu', 'Brau', 'Dorn', 'Eben', 'Ebreich', 'Eisen', 'Fürsten', 'Feld', 'Frei', 'Gänsern', 'Göt', 'Geras', 'Gmun', 'Groß', 'Hall', 'Hard', 'Hart', 'Holla', 'Inns', 'Kapfen', 'Kirch', 'Kitz', 'Klagen', 'Kloster', 'Knittel', 'Krneu', 'Kuf', 'Land', 'Len', 'Leon', 'Lusten', 'Möd', 'March', 'Mau', 'Mistel', 'Mitter', 'Neu', 'Neun', 'Poys', 'Rank', 'Saal', 'Salz', 'Schär', 'Siezen', 'Stock', 'Ter', 'Trais', 'Tro', 'Vólker', 'Vöckla', 'Völk', 'Vil', 'Waid', 'Wals', 'Wolf', 'Wolfs', 'Zelt'];
  const nm2 = ['bühel', 'bach', 'ben', 'berg', 'birge', 'birn', 'bruck', 'brunn', 'deck', 'denz', 'ding', 'dorf', 'ein', 'feld', 'felden', 'furt', 'haus', 'hausen', 'heim', 'hofen', 'kirch', 'kirchen', 'kreis', 'lach', 'ling', 'markt', 'nau', 'nitz', 'rau', 'schlag', 'see', 'sill', 'stadt', 'statt', 'stein', 'tal', 'ten', 'tetten', 'trenk', 'weg', 'weil', 'zell', 'zing', 'zis'];
  /* Belgium */
  const nm3 = ['Aar', 'Ander', 'Ant', 'Bever', 'Blanken', 'Bras', 'Brug', 'Brus', 'Dam', 'Dender', 'Dik', 'Dil', 'Eek', 'Etter', 'Ever', 'For', 'Grim', 'Hal', 'Harel', 'Has', 'Her', 'Heren', 'Heus', 'Hoog', 'Hout', 'Kerken', 'Knok', 'Kort', 'Laag', 'Land', 'Lang', 'Loker', 'Lom', 'Maas', 'Molen', 'Mous', 'Naam', 'Nieuw', 'Noord', 'Oost', 'Oud', 'Ouden', 'Rivier', 'Roes', 'Schaar', 'Schoot', 'Sherp', 'Sherpen', 'Steun', 'Tong', 'Tor', 'Tour', 'Turn', 'Vil', 'Ware', 'West', 'Wevel', 'Wolu', 'Zoet', 'Zot', 'Zotte', 'Zout', 'Zuid'];
  const nm4 = ['aarde', 'beek', 'beke', 'berg', 'berge', 'bergen', 'burg', 'croen', 'den', 'eik', 'eind', 'einde', 'ende', 'gem', 'hal', 'heuvel', 'hout', 'laas', 'lare', 'lecht', 'leeuw', 'len', 'loon', 'mel', 'monde', 'muide', 'port', 'ren', 'rijk', 'ringen', 'schaat', 'schot', 'sel', 'selt', 'sen', 'stal', 'stel', 'straten', 'tals', 'ten', 'ven', 'vik', 'voorde', 'werp', 'werpen', 'zen'];
  /* France */
  const nm5 = ['Épi', 'Alen', 'Angou', 'Anti', 'Anto', 'Argen', 'Auber', 'Auri', 'Avi', 'Ba', 'Bé', 'Beau', 'Bel', 'Berge', 'Besan', 'Bor', 'Bou', 'Bour', 'Ca', 'Cam', 'Carca', 'Cha', 'Champi', 'Char', 'Cho', 'Cla', 'Cler', 'Col', 'Colo', 'Cour', 'Di', 'Dra', 'Dragui', 'Fré', 'Genne', 'Go', 'Gre', 'Hague', 'Houi', 'Leva', 'Li', 'Mai', 'Mar', 'Mari', 'Marti', 'Mau', 'Mont', 'Montau', 'Nan', 'Nar', 'Or', 'Péri', 'Pa', 'Perpi', 'Plai', 'Poi', 'Pu', 'Roa', 'Rou', 'Sar', 'Sau', 'Soi', 'Ta', 'Tou', 'Va', 'Valen', 'Vier', 'Villeur', 'Vin', 'Vitro'];
  const nm6 = ['çon', 'béliard', 'bagne', 'beuge', 'bonne', 'ciennes', 'court', 'fort', 'gnan', 'gnane', 'gneux', 'gny', 'gues', 'gueux', 'lès', 'lême', 'let', 'limar', 'llac', 'lles', 'lliers', 'llon', 'lly', 'logne', 'lon', 'luçon', 'luire', 'lun', 'mans', 'mart', 'masse', 'miers', 'momble', 'mont', 'mur', 'nau', 'nesse', 'nin', 'nne', 'nnet', 'nnois', 'noît', 'ppe', 'ppes', 'rac', 'rgues', 'rault', 'ris', 'roux', 'sart', 'seau', 'sier', 'sir', 'ssion', 'ssis', 'ssonne', 'ssons', 'ssy', 'teaux', 'thune', 'toise', 'tou', 'veil', 'vers', 'ves', 'ville', 'vin', 'yonne', 'zieu', 'zon'];
  /* Germany */
  const nm7 = ['Aben', 'Ade', 'Adels', 'Ahrens', 'All', 'Allen', 'Als', 'Alten', 'Ans', 'Arns', 'Auer', 'Bür', 'Baum', 'Ben', 'Bern', 'Biesen', 'Blanken', 'Blau', 'Blom', 'Blum', 'Boizen', 'Bonn', 'Clau', 'Cloppen', 'Creuz', 'Cux', 'Darm', 'Delmen', 'Dettel', 'Dieten', 'Dillen', 'Dingel', 'Dor', 'Dorn', 'Drols', 'Eber', 'Eiben', 'Eisen', 'Elm', 'Elster', 'Elter', 'Enne', 'Eppel', 'Er', 'Eschen', 'Ess', 'Fürsten', 'Fell', 'Frei', 'Freuden', 'Fried', 'Gail', 'Geisel', 'Gladen', 'Gold', 'Grün', 'Gries', 'Groß', 'Großen', 'Guden', 'Hallen', 'Ham', 'Har', 'Heil', 'Helm', 'Her', 'Immen', 'Issel', 'König', 'Kaiser', 'Kron', 'Lüding', 'Lahn', 'Leip', 'Lengen', 'Mühl', 'Münzen', 'Markt', 'Naum', 'Neu', 'Neun', 'Niedern', 'Nurem', 'Obern', 'Oder', 'Olden', 'Oster', 'Penz', 'Pfullen', 'Pletten', 'Rauen', 'Richten', 'Rom', 'Rosen', 'Sachsen', 'Schmal', 'Schram', 'Schwarzen', 'Sieg', 'Stüh', 'Stral', 'Tanger', 'Thann', 'Ummer', 'Vell', 'Vils', 'Vohen', 'Wald', 'Weißen', 'Weil', 'Weins', 'Witten', 'Zieren', 'Zwei', 'Zwingen'];
  const nm8 = ['büren', 'bach', 'beck', 'berg', 'beuren', 'bog', 'born', 'brück', 'bruck', 'burg', 'ding', 'dorf', 'drungen', 'förde', 'feld', 'fingen', 'furt', 'geismar', 'gries', 'höring', 'hal', 'han', 'hausen', 'heim', 'hofen', 'holder', 'holz', 'hude', 'kamp', 'kastel', 'kau', 'kirchen', 'land', 'lein', 'lingen', 'lohn', 'lug', 'mölsen', 'mold', 'nau', 'now', 'räschen', 'rath', 'roda', 'rode', 'schau', 'scheid', 'shafen', 'sloh', 'stadt', 'stedt', 'stein', 'sten', 'thal', 'wagen', 'wald', 'werder', 'wig', 'zach'];
  /* Ireland */
  const nm9 = ['Ar', 'Ark', 'Ath', 'Bal', 'Ballin', 'Bally', 'Ban', 'Bel', 'Bun', 'Car', 'Castle', 'Clon', 'Clona', 'Coote', 'Done', 'Drog', 'Dub', 'Dun', 'Dungar', 'East', 'Eden', 'Ennis', 'Gal', 'Gran', 'Grey', 'Kil', 'Kin', 'Lime', 'Lis', 'Long', 'Lough', 'Mac', 'Mal', 'Midle', 'Mona', 'Mullin', 'Na', 'Ne', 'New', 'North', 'Ros', 'Shan', 'Skibbe', 'Sli', 'South', 'Temple', 'Thur', 'Tippe', 'Tra', 'Tulla', 'Water', 'West', 'Wex', 'Wick', 'Youg'];
  const nm10 = ['bar', 'bay', 'bet', 'blayney', 'bridge', 'briggan', 'common', 'crana', 'cross', 'dalk', 'dare', 'dee', 'derry', 'don', 'doran', 'ford', 'gal', 'gar', 'gheda', 'hal', 'han', 'hill', 'kee', 'kenny', 'kilty', 'larney', 'lee', 'lick', 'lin', 'lina', 'lip', 'lone', 'low', 'meath', 'mel', 'more', 'nagh', 'nard', 'nasloe', 'nes', 'ney', 'non', 'port', 'ran', 'rary', 'rea', 'reen', 'rey', 'rick', 'room', 'rush', 'sale', 'shannon', 'shel', 'sloe', 'stone', 'stones', 'ton', 'towel', 'try', 'van', 'way'];
  /* Netherlands */
  const nm11 = ['Al', 'Alk', 'Amers', 'Amstel', 'Amster', 'Apel', 'Appinge', 'Arn', 'Arne', 'As', 'Blok', 'Bols', 'Breda', 'Brede', 'Coe', 'Culem', 'Deven', 'Dier', 'Dik', 'Doetin', 'Dor', 'Drach', 'Eind', 'Em', 'Emmel', 'En', 'Enk', 'Gen', 'Gene', 'Gorin', 'Gro', 'Groen', 'Haar', 'Har', 'Heer', 'Heeren', 'Hel', 'Henge', 'Hilver', 'Hoofd', 'Hooge', 'Kes', 'Laage', 'Land', 'Leeuw', 'Maas', 'Medem', 'Middel', 'Nieuw', 'Nieuwe', 'Nij', 'Noorder', 'Ooster', 'Raven', 'Roosen', 'Rotter', 'Slo', 'Sta', 'Steen', 'Ter', 'Til', 'Vlissing', 'Volle', 'Vollen', 'Waal', 'Wage', 'Wester', 'Wijn', 'Win', 'Wind', 'Winter', 'Woud', 'Zalt', 'Zoeter', 'Zouter', 'Zuider'];
  const nm12 = ['berg', 'bommel', 'borg', 'burg', 'chem', 'daal', 'dam', 'dert', 'doorn', 'dorp', 'drecht', 'foort', 'fort', 'gein', 'graaf', 'hem', 'hof', 'hout', 'hoven', 'huizen', 'kerk', 'kum', 'leen', 'lem', 'len', 'lingen', 'lo', 'loopen', 'maar', 'meer', 'megen', 'melo', 'mere', 'mond', 'muiden', 'nep', 'neuzen', 'ningen', 'nisse', 'oord', 'rade', 'ren', 'rend', 'richem', 'rode', 'schede', 'schoten', 'selt', 'singen', 'stad', 'stadt', 'stein', 'ter', 'veen', 'venter', 'voort', 'vorden', 'voren', 'waard', 'ward', 'warden', 'wijk', 'zaal', 'zand', 'zee', 'zijl'];
  /* Switzerland */
  const nm13 = ['Aar', 'Adlish', 'Affol', 'All', 'Alt', 'Amris', 'Appen', 'Ar', 'As', 'Bellin', 'Bero', 'Bia', 'Birs', 'Bischof', 'Brem', 'Burg', 'Con', 'Crog', 'Cud', 'Düben', 'Delé', 'Diessen', 'Eg', 'Ein', 'Er', 'Frauen', 'Frei', 'Freien', 'Fri', 'Gor', 'Grand', 'Her', 'Hutt', 'Ill', 'Küs', 'Kaiser', 'Kling', 'Kreuz', 'Langen', 'Lau', 'Laufen', 'Lenz', 'Lies', 'Mün', 'München', 'Maien', 'Men', 'Mor', 'Neu', 'Neun', 'Oft', 'Op', 'Oster', 'Porren', 'Rappers', 'Regens', 'Rei', 'Rhei', 'Rhein', 'Richters', 'Romain', 'Ror', 'Schaff', 'Sem', 'Spreiten', 'Steck', 'Steffis', 'Sur', 'Thal', 'Unter', 'Ver', 'Wädens', 'Walden', 'Walen', 'Werden', 'Wiedlis', 'Winter', 'Zolli', 'Zur'];
  const nm14 = ['bach', 'berg', 'bon', 'born', 'bourg', 'burg', 'châtel', 'cona', 'cote', 'cour', 'dola', 'don', 'dorf', 'dris', 'drisio', 'feld', 'felden', 'gans', 'garten', 'gen', 'ges', 'hausen', 'hofen', 'hurn', 'kirch', 'kkon', 'kon', 'lach', 'lingen', 'môtier', 'münster', 'mance', 'mont', 'mundigen', 'nach', 'nacht', 'nau', 'neck', 'neuve', 'nier', 'pach', 'pen', 'refin', 'ring', 'ringen', 'rus', 'sau', 'schwil', 'see', 'seen', 'sellen', 'siedeln', 'singen', 'soix', 'son', 'stätten', 'stadt', 'stal', 'steig', 'stein', 'stuhl', 'swil', 'tal', 'tern', 'thal', 'wil', 'zach', 'zell', 'zona'];
  const i = Math.floor(Math.random() * 14);
  {
    if (i < 2) {
      names = sample(nm1) + sample(nm2);
    } else if (i < 4) {
      names = sample(nm3) + sample(nm4);
    } else if (i < 6) {
      names = sample(nm5) + sample(nm6);
    } else if (i < 8) {
      names = sample(nm7) + sample(nm8);
    } else if (i < 10) {
      names = sample(nm9) + sample(nm10);
    } else if (i < 12) {
      names = sample(nm11) + sample(nm12);
    } else {
      names = sample(nm13) + sample(nm14);
    }
    return names;
  }
}
module.exports = westEuropeanTowns
