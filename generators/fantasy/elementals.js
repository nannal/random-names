export default function elementals() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Flash (Lightning)', 'Spark (Lightning)', 'Bolt (Lightning)', 'Ramman (Lightning)', 'Baraq (Lightning)', 'Storm (Lightning)', 'Elec (Lightning)', 'Lec (Lightning)', 'Lectric (Lightning)', 'Volt (Lightning)', 'Tes (Lightning)', 'Tesla (Lightning)', 'Thun (Lightning)', 'Fulg (Lightning)', 'Fulgu (Lightning)', 'Gurate (Lightning)', 'Astra (Lightning)', 'Bron (Lightning)', 'Bronto (Lightning)', 'Cerau (Lightning)', 'Ceraun (Lightning)', 'Cerauno (Lightning)', 'Amp (Lightning)', 'Fara (Lightning)', 'Farad (Lightning)', 'Watt (Lightning)', 'Galv (Lightning)', 'Galva (Lightning)', 'Galvan (Lightning)', 'Ohm (Lightning)', 'Ohme (Lightning)', 'Volta (Lightning)', 'Sanguine (Blood)', 'Sanguinus (Blood)', 'Sange (Blood)', 'Sanguin (Blood)', 'Clot (Blood)', 'Cruor (Blood)', 'Plasma (Blood)', 'Gore (Blood)', 'Serum (Blood)', 'Vein (Blood)', 'Aorta (Blood)', 'Aort (Blood)', 'Plasm (Blood)', 'Arte (Blood)', 'Arter (Blood)', 'Anemis (Blood)', 'Anemia (Blood)', 'Anaemia (Blood)', 'Anae (Blood)', 'Anaemis (Blood)', 'Leuko (Blood)', 'Kocyte (Blood)', 'Leukos (Blood)', 'Hema (Blood)', 'Hemal (Blood)', 'Hemall (Blood)', 'Purpu (Blood)', 'Purpura (Blood)', 'Purpur (Blood)', 'Throm (Blood)', 'Thrombus (Blood)', 'Thromb (Blood)', 'Acidosis (Blood)', 'Acidos (Blood)', 'Abrus (Magic)', 'Adum (Shadow)', 'Aeon (Time)', 'Aeos (Time)', 'Aeranas (Air)', 'Aere (Air)', 'Aeria (Air)', 'Aeris (Air)', 'Aeros (Air)', 'Aetas (Time)', 'Aevum (Time)', 'Aevus (Time)', 'Afa (Earth)', 'Alchos (Magic)', 'Allure (Magic)', 'Amaranthinos (Time)', 'Animax (Life)', 'Animos (Life)', 'Animus (Life)', 'Anomalis (Magic)', 'Anomus (Magic)', 'Aqualis (Water)', 'Aqualon (Water)', 'Aquanis (Water)', 'Aquara (Water)', 'Aquifis (Water)', 'Aquira (Water)', 'Aquiris (Water)', 'Aquis (Water)', 'Arcanimus (Magic)', 'Arcanis (Magic)', 'Arcano (Magic)', 'Aros (Air)', 'Ash (Fire)', 'Ashe (Fire)', 'Atax (Shadow)', 'Atmos (Air)', 'Augur (Magic)', 'Augus (Magic)', 'Aura (Light)', 'Auris (Light)', 'Aurora (Light)', 'Avala (Ice/Snow)', 'Avalan (Earth)', 'Avalan (Ice/Snow)', 'Avian (Air)', 'Avis (Air)', 'Azura (Air)', 'Azure (Water)', 'Azuris (Water)', 'Baecos (Light)', 'Bane (Shadow)', 'Basalt (Earth)', 'Basselt (Earth)', 'Bayle (Fire)', 'Blaize (Fire)', 'Blaze (Fire)', 'Blizz (Ice/Snow)', 'Blyze (Fire)', 'Boulder (Earth)', 'Boyle (Fire)', 'Boyle (Water)', 'Breyze (Air)', 'Brine (Water)', 'Brun (Fire)', 'Bulder (Earth)', 'Caedos (Death)', 'Caenum (Water)', 'Calamis (Shadow)', 'Calas (Shadow)', 'Carbonne (Earth)', 'Cartos (Magic)', 'Celes (Air)', 'Cendis (Fire)', 'Centuris (Time)', 'Centuros (Time)', 'Cerulea (Air)', 'Cerulis (Air)', 'Cerulle (Air)', 'Chemos (Magic)', 'Chillis (Ice/Snow)', 'Chinook (Air)', 'Chrono (Time)', 'Chronos (Time)', 'Cimmeris (Shadow)', 'Circos (Air)', 'Claire (Fire)', 'Clarity (Water)', 'Claye (Earth)', 'Clipse (Shadow)', 'Clode (Air)', 'Cloud (Air)', 'Coale (Fire)', 'Cobble (Earth)', 'Cobbles (Earth)', 'Cole (Fire)', 'Conjis (Magic)', 'Conjus (Magic)', 'Conquitus (Death)', 'Continos (Time)', 'Core (Earth)', 'Corrus (Shadow)', 'Crayg (Earth)', 'Cryo (Ice/Snow)', 'Cryogen (Ice/Snow)', 'Crystal (Ice/Snow)', 'Cyclonis (Air)', 'Cyclonius (Air)', 'Cyclos (Air)', 'Cyclos (Life)', 'Dabrus (Magic)', 'Decess (Death)', 'Decessus (Death)', 'Demis (Death)', 'Dew (Water)', 'Diables (Shadow)', 'Diablos (Magic)', 'Diabolos (Magic)', 'Disaris (Shadow)', 'Disas (Shadow)', 'Divinos (Magic)', 'Divis (Magic)', 'Divos (Magic)', 'Drift (Ice/Snow)', 'Dune (Earth)', 'Dusk (Shadow)', 'Duster (Earth)', 'Eclipe (Shadow)', 'Elan (Life)', 'Ember (Fire)', 'Empearal (Air)', 'Enigmus (Magic)', 'Entros (Shadow)', 'Epoch (Time)', 'Epos (Time)', 'Eras (Time)', 'Eros (Life)', 'Essos (Life)', 'Eternos (Time)', 'Exalos (Air)', 'Exanimus (Death)', 'Exos (Death)', 'Exos (Magic)', 'Exto (Life)', 'Extos (Life)', 'Fax (Light)', 'Fenix (Fire)', 'Fernis (Death)', 'Fernis (Fire)', 'Ferno (Fire)', 'Fervis (Fire)', 'Finis (Death)', 'Firmis (Earth)', 'Firn (Ice/Snow)', 'Flaik (Ice/Snow)', 'Flair (Fire)', 'Flarion (Fire)', 'Flaris (Fire)', 'Flashfire (Fire)', 'Flayke (Ice/Snow)', 'Flo (Ice/Snow)', 'Flo (Water)', 'Flurris (Air)', 'Flurris (Ice/Snow)', 'Fluvis (Water)', 'Flux (Magic)', 'Frose (Ice/Snow)', 'Fross (Ice/Snow)', 'Fuegis (Fire)', 'Fuego (Fire)', 'Fumus (Fire)', 'Funis (Death)', 'Funus (Death)', 'Fusilis (Fire)', 'Fye (Fire)', 'Gale (Air)', 'Gayle (Air)', 'Genis (Magic)', 'Genos (Magic)', 'Geo (Earth)', 'Geod (Earth)', 'Geysis (Water)', 'Glace (Ice/Snow)', 'Glacia (Water)', 'Glacis (Ice/Snow)', 'Glacis (Water)', 'Glacius (Water)', 'Glamos (Magic)', 'Glayze (Ice/Snow)', 'Glimmes (Light)', 'Gliss (Ice/Snow)', 'Glo (Fire)', 'Gloom (Shadow)', 'Glum (Shadow)', 'Granit (Earth)', 'Granius (Earth)', 'Grant (Earth)', 'Graund (Earth)', 'Grav (Earth)', 'Grime (Earth)', 'Grimes (Earth)', 'Grine (Earth)', 'Gritt (Earth)', 'Halitus (Air)', 'Halo (Air)', 'Halos (Air)', 'Hayle (Ice/Snow)', 'Hayze (Shadow)', 'Heinios (Shadow)', 'Hex (Magic)', 'Hocus (Magic)', 'Hora (Time)', 'Horas (Time)', 'Horos (Magic)', 'Hurican (Air)', 'Huricus (Air)', 'Hydran (Water)', 'Hydris (Water)', 'Hydrius (Water)', 'Hydrox (Water)', 'Iciclis (Ice/Snow)', 'Iglis (Ice/Snow)', 'Igneos (Fire)', 'Igneous (Fire)', 'Ignis (Fire)', 'Ignit (Fire)', 'Illume (Light)', 'Illumine (Light)', 'Illus (Magic)', 'Imperos (Air)', 'Imum (Death)', 'Inanis (Death)', 'Inanos (Death)', 'Incantus (Magic)', 'Incedis (Fire)', 'Incendius (Fire)', 'Infernus (Fire)', 'Infinis (Time)', 'Iniq (Shadow)', 'Interis (Time)', 'Jinx (Magic)', 'Juju (Magic)', 'Kindle (Fire)', 'Kindra (Fire)', 'Lambence (Light)', 'Lanche (Ice/Snow)', 'Lavar (Fire)', 'Lavis (Fire)', 'Letos (Death)', 'Libitus (Death)', 'Limu (Water)', 'Limus (Water)', 'Lios (Earth)', 'Liquaxis (Water)', 'Liquire (Water)', 'Liquis (Water)', 'Locus (Time)', 'Luceras (Light)', 'Lucernas (Light)', 'Lucis (Light)', 'Lucus (Light)', 'Lumen (Light)', 'Lumes (Life)', 'Lumina (Light)', 'Luminus (Light)', 'Luminus (Magic)', 'Lumis (Light)', 'Lumus (Light)', 'Lumus (Magic)', 'Lunos (Magic)', 'Lussios (Magic)', 'Lustris (Light)', 'Lustrous (Light)', 'Lutu (Earth)', 'Lutum (Earth)', 'Lux (Light)', 'Lychnus (Light)', 'Magmis (Fire)', 'Magnos (Magic)', 'Malefis (Shadow)', 'Malignus (Shadow)', 'Malis (Shadow)', 'Malos (Shadow)', 'Malov (Shadow)', 'Manes (Death)', 'Manos (Magic)', 'Marble (Earth)', 'Melte (Ice/Snow)', 'Mementos (Time)', 'Mentos (Time)', 'Millenis (Time)', 'Miseris (Shadow)', 'Mistral (Air)', 'Mojo (Magic)', 'Monse (Water)', 'Monsoo (Water)', 'Mora (Time)', 'Mors (Death)', 'Mortis (Death)', 'Mortos (Life)', 'Mortus (Death)', 'Murmus (Air)', 'Myalis (Magic)', 'Myrios (Time)', 'Narchis (Shadow)', 'Narcos (Magic)', 'Neco (Death)', 'Necos (Death)', 'Necron (Magic)', 'Necros (Death)', 'Necros (Magic)', 'Nefaris (Shadow)', 'Neige (Ice/Snow)', 'Neptis (Water)', 'Neptulus (Water)', 'Neptune (Water)', 'Nex (Death)', 'Nexus (Death)', 'Nighe (Shadow)', 'Nite (Shadow)', 'Nova (Fire)', 'Novis (Fire)', 'Nox (Death)', 'Noxis (Death)', 'Obcasus (Death)', 'Obitus (Death)', 'Oblis (Death)', 'Obscuras (Shadow)', 'Ocea (Water)', 'Ocus (Magic)', 'Orcus (Death)', 'Oria (Earth)', 'Oris (Earth)', 'Oxyn (Air)', 'Ozone (Air)', 'Parados (Magic)', 'Pebble (Earth)', 'Penum (Shadow)', 'Peros (Death)', 'Perpetos (Time)', 'Pitch (Shadow)', 'Pocus (Magic)', 'Poole (Water)', 'Precipe (Water)', 'Precipise (Water)', 'Prophis (Magic)', 'Puddles (Water)', 'Puds (Water)', 'Pulvi (Earth)', 'Pulvis (Earth)', 'Purity (Water)', 'Pyre (Fire)', 'Pyro (Fire)', 'Pyroc (Fire)', 'Quarris (Earth)', 'Quary (Earth)', 'Ragnis (Fire)', 'Rane (Water)', 'Rayne (Water)', 'Retaw (Water)', 'River (Water)', 'Rivule (Water)', 'Roc (Earth)', 'Rune (Magic)', 'Saeclum (Time)', 'Saeclus (Time)', 'Saline (Water)', 'Salis (Water)', 'Salvus (Life)', 'Scald (Fire)', 'Scaldor (Fire)', 'Scaldris (Fire)', 'Scorch (Fire)', 'Scorchis (Fire)', 'Scuris (Shadow)', 'Sear (Fire)', 'Secos (Time)', 'Senso (Life)', 'Sensos (Life)', 'Sentos (Life)', 'Septos (Magic)', 'Shayde (Shadow)', 'Shaye (Shadow)', 'Sigmis (Fire)', 'Siles (Death)', 'Sizzle (Fire)', 'Skye (Air)', 'Slab (Earth)', 'Slait (Earth)', 'Slate (Earth)', 'Sleat (Ice/Snow)', 'Sleigh (Magic)', 'Smo (Fire)', 'Smog (Shadow)', 'Smoldris (Fire)', 'Smulder (Fire)', 'Snift (Ice/Snow)', 'Sod (Earth)', 'Soile (Earth)', 'Sol (Light)', 'Solaris (Light)', 'Solas (Light)', 'Soleis (Light)', 'Sonas (Air)', 'Sonis (Air)', 'Sono (Air)', 'Sonus (Air)', 'Soots (Fire)', 'Soros (Shadow)', 'Spark (Fire)', 'Spirans (Life)', 'Spiras (Life)', 'Spiris (Life)', 'Spiritus (Life)', 'Spirus (Life)', 'Spyte (Shadow)', 'Squalos (Water)', 'Stamen (Life)', 'Stamos (Life)', 'Stowne (Earth)', 'Stratos (Air)', 'Sum (Life)', 'Sumus (Life)', 'Talis (Magic)', 'Tempes (Time)', 'Tempest (Water)', 'Tempeste (Air)', 'Tempestus (Water)', 'Tempos (Time)', 'Tempris (Fire)', 'Tempus (Time)', 'Tera (Earth)', 'Terberis (Earth)', 'Terbis (Earth)', 'Terbius (Earth)', 'Terminos (Time)', 'Terminus (Time)', 'Terra (Earth)', 'Terrane (Earth)', 'Terros (Earth)', 'Thaumus (Magic)', 'Thawe (Ice/Snow)', 'Thera (Earth)', 'Theran (Earth)', 'Therris (Earth)', 'Theuros (Magic)', 'Tinder (Fire)', 'Tropos (Air)', 'Tsuna (Water)', 'Tsunis (Water)', 'Tumul (Air)', 'Tumulus (Air)', 'Turf (Earth)', 'Turve (Earth)', 'Twileigh (Shadow)', 'Typhis (Water)', 'Typhos (Water)', 'Umber (Earth)', 'Umbris (Shadow)', 'Umbrus (Shadow)', 'Valanche (Earth)', 'Vape (Water)', 'Vapora (Water)', 'Vapore (Water)', 'Vapos (Water)', 'Veilios (Shadow)', 'Ventis (Air)', 'Vexus (Magic)', 'Vigor (Life)', 'Vigos (Life)', 'Vilis (Shadow)', 'Vitae (Life)', 'Vitalis (Life)', 'Vitalos (Life)', 'Vitalus (Life)', 'Vitos (Life)', 'Vividus (Life)', 'Vivus (Life)', 'Volance (Air)', 'Volaris (Air)', 'Volcanis (Fire)', 'Vox (Air)', 'Voxis (Air)', 'Vudos (Magic)', 'Whiff (Air)', 'Xygen (Air)', 'Yce (Ice/Snow)', 'Zephyr (Air)', 'Zephys (Air)'];

  const i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm1.length);
    names = nm1[rnd];
    return names;
    nm1.splice(rnd, 1);
  }
}
