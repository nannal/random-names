var sample = require ('lodash.sample')

function casinos() {
  let names;
  const nm1 = ['Aegis', 'Aeon', 'Aeros', 'Allure', 'Ambrosia', 'Amethyst', 'Anemone', 'Apex', 'Arch', 'Archway', 'Aria', 'Aristocrat', 'Aura', 'Aurora', 'Avian', 'Azalea', 'Basilica', 'Bastille', 'Belvedere', 'Bird of Paradise', 'Blossom', 'Borealis', 'Boulevard', 'Cadence', 'Calypso', 'Cardinal', 'Carriage', 'Celesta', 'Century', 'Chalice', 'Chariot', 'Clover', 'Coronal', 'Creek', 'Crescendo', 'Crown', 'Cub', 'Curtain', 'Cushion', 'Delta', 'Diamond', 'Dove', 'Dream', 'Dune', 'Echo', 'Eclipse', 'Element', 'Elephant', 'Elixir', 'Ellipsis', 'Elysian', 'Elysium', 'Emerald', 'Equinox', 'Euphoria', 'Excelsior', 'Felicity', 'Flame', 'Fountain', 'Gala', 'Gate', 'Glacier', 'Globe', 'Gold Nugget', 'Grand Plaza', 'Greyhound', 'Halo', 'Harmony', 'Helix', 'Horseshoe', 'Hyacinth', 'Iris', 'Labyrinth', 'Lady Fortune', 'Leviathan', 'Liberty', 'Lion', 'Luminos', 'Luna', 'Majesty', 'Marble', 'Matrix', 'Medallion', 'Melody', 'Meridian', 'Millenium', 'Mint', 'Mithril', 'Mountain', 'Myriad', 'Mystery', 'Mystique', 'Nightowl', 'Nimbus', 'Nova', 'Nugget', 'Oasis', 'Obelisk', 'Oleander', 'Orchid', 'Palm', 'Paradise', 'Phantom', 'Pinnacle', 'Plaza', 'Plume', 'Prism', 'Quill', 'Reef', 'Rhythm', 'Robin', 'Rose', 'Sable', 'Sapphire', 'Scarlet', 'Scepter', 'Serenade', 'Serendipity', 'Serenity', 'Sierra', 'Siren', 'Snowflake', 'Solas', 'Solstice', 'Spa', 'Spire', 'Spirit', 'Spring', 'Stallion', 'Star', 'Talisman', 'Tempest', 'Tiara', 'Tigress', 'Trillium', 'Valley', 'Vertex', 'Victory', 'Voyage', 'Wolfhound', 'Zenith', 'Zephyr'];
  const nm2 = ['Aerial', 'Alabaster', 'Amber', 'Amethyst', 'Aqua', 'Astral', 'Atlantic', 'Aurelian', 'Azuline', 'Azure', 'Cardinal', 'Carmine', 'Celestial', 'Cerulean', 'Coral', 'Crimson', 'Crown', 'Crystal', 'Diamond', 'Eastern', 'Ebon', 'Ember', 'Emerald', 'Exalted', 'Gilded', 'Gold', 'Golden', 'Grand', 'Granite', 'Halcyon', 'Indigo', 'Ivory', 'Jade', 'King', 'Lavender', 'Light', 'Lucky', 'Lunar', 'Malachite', 'Marble', 'Marina', 'Maroon', 'Noble', 'Northern', 'Obsidian', 'Onyx', 'Pacific', 'Paradise', 'Porcelain', 'Regal', 'Royal', 'Ruby', 'Sable', 'Saffron', 'Sanguine', 'Sapphire', 'Scarlet', 'Silk', 'Silver', 'Solar', 'Southern', 'Supreme', 'Twin', 'Velour', 'Velvet', 'Verdigris', 'Vermilion', 'Violet', 'Viridian', 'Western', 'White'];
  const nm3 = ['Aegis', 'Aeon', 'Allure', 'Anemone', 'Angel', 'Arc', 'Arch', 'Archway', 'Aura', 'Aurora', 'Avian', 'Bastille', 'Blossom', 'Borealis', 'Boulevard', 'Carriage', 'Chalice', 'Chariot', 'Citadel', 'Cloak', 'Cloud', 'Clover', 'Court', 'Creek', 'Crown', 'Cub', 'Curtain', 'Cushion', 'Diamond', 'Dome', 'Dove', 'Dream', 'Dune', 'Element', 'Elephant', 'Dawn', 'Chandelier', 'Panther', 'Griffin', 'Flame', 'Flower', 'Fountain', 'Garden', 'Gardens', 'Gate', 'Globe', 'Greyhound', 'Halo', 'Heirloom', 'Helix', 'Horseshoe', 'Hyacinth', 'Iris', 'Jewel', 'Labyrinth', 'Leviathan', 'Lion', 'Majesty', 'Mantle', 'Medallion', 'Mountain', 'Mystery', 'Nebula', 'Nimbus', 'Nugget', 'Oasis', 'Obelisk', 'Oleander', 'Orb', 'Orchid', 'Palm', 'Petal', 'Phoenix', 'Plume', 'Prism', 'Pyramid', 'Quill', 'Reef', 'Ribbon', 'Rose', 'Sabre', 'Scepter', 'Shield', 'Shrine', 'Sierra', 'Siren', 'Snowflake', 'Peacock', 'Solstice', 'Spa', 'Spire', 'Stallion', 'Star', 'Talisman', 'Tempest', 'Tiara', 'Tigress', 'Trillium', 'Trinket', 'Valley', 'Wolfhound', 'Zenith', 'Zephyr'];
  const nm4 = ['', ' Casino'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = `The ${sample(nm1)}${sample(nm4)}`;
    } else {
      names = `The ${sample(nm2)} ${sample(nm3)} Casino`;
    }
    return names;
  }
}
module.exports = casinos
