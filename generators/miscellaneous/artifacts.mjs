var sample = require ('lodash.sample')

function artifacts() {
  let names;
  const nm1 = ['Absorbing', 'Abundance', 'Acrimony', 'Affluence', 'Agony', 'All-Seeing', 'Angels', 'Annihilation', 'Apathy', 'Athanasia', 'Bane', 'Banishment', 'Benediction', 'Betrayal', 'Binding', 'Birth', 'Black Magic', 'Blessings', 'Blights', 'Blinding', 'Chance', 'Chaos', 'Charming', 'Collapse', 'Contagion', 'Corruption', 'Courage', 'Curses', 'Damnation', 'Darkness', 'Death', 'Decadence', 'Decay', 'Delirium', 'Delusion', 'Dementia', 'Demons', 'Depravity', 'Desire', 'Destiny', 'Destruction', 'Dismay', 'Divinity', 'Doom', 'Downfall', 'Dread', 'Dreams', 'Enigmas', 'Enthrallment', 'Eternal Health', 'Eternal Slumber', 'Eternity', 'Evil', 'Evils', 'Exiles', 'Faith', 'Fate', 'Fear', 'Fertility', 'Fire', 'Flame', 'Fortitude', 'Fortuity', 'Fortune', 'Frost', 'Futures', 'Genesis', 'Gluttony', 'Gold', 'Grace', 'Greed', 'Guardians', 'Hatred', 'Healing', 'Hell', 'Heroism', 'Honesty', 'Hunger', 'Ice', 'Immobilizing', 'Immortality', 'Immunity', 'Imperviousness', 'Infinity', 'Invincibility', 'Invisibility', 'Invocation', 'Judgment', 'Justice', 'Karma', 'Knowledge', 'Liberation', 'Life', 'Lifeblood', 'Light', 'Lightness', 'Lightning', 'Longevity', 'Loyalty', 'Luck', 'Luminosity', 'Lunacy', 'Lust', 'Malady', 'Malediction', 'Malevolence', 'Malice', 'Mania', 'Massacres', 'Mending', 'Metamorphosis', 'Misery', 'Misfortune', 'Mysteries', 'Nightmares', 'Oaths', 'Oblivion', 'Origins', 'Pain', 'Paradise', 'Paralysis', 'Passion', 'Peace', 'Persecution', 'Pestilence', 'Petrification', 'Potency', 'Prosperity', 'Protection', 'Radiance', 'Rain', 'Rebirth', 'Remedies', 'Repelling', 'Resistance', 'Restoration', 'Resurrection', 'Revival', 'Riches', 'Riddles', 'Ruination', 'Runes', 'Sanctification', 'Sanctity', 'Scorching', 'Secrets', 'Seduction', 'Sentience', 'Serendipity', 'Service', 'Shadows', 'Shapeshifting', 'Sight', 'Silence', 'Sleep', 'Solitude', 'Souls', 'Specters', 'Speed', 'Spellbinding', 'Spells', 'Spirits', 'Spite', 'Storms', 'Strength', 'Summoning', 'Teleportation', 'Temptation', 'Time', 'Torment', 'Torture', 'Toxin', 'Transformation', 'Transmutation', 'Treachery', 'Truth', 'Valor', 'Vengeance', 'Venom', 'Vice', 'Virility', 'Warding', 'Wealth', 'Wisdom', 'Wishes', 'Worship', 'Youth', 'the Aether', 'the Cosmos', 'the Creed', 'the Crux', 'the Dead', 'the Elements', 'the Gods', 'the Heavens', 'the Occult', 'the Oracle', 'the Scourge', 'the Titans', 'the Void'];
  const nm2 = ['Absorbing', 'Aethereal', 'Agony', 'Alchemy', 'All-Seeing', 'Almighty', 'Anarchy', 'Angel', 'Anguish', 'Annihilation', 'Archangel', 'Athanasia', 'Aurora', 'Azure', 'Banishing', 'Benediction', 'Binding', 'Black Magic', 'Blazing', 'Blight', 'Blinding', 'Bravery', 'Burning', 'Celestial', 'Chaos', 'Charming', 'Contagion', 'Corruption', 'Curse', 'Cursed', 'Damnation', 'Darkness', 'Death\'s', 'Decay', 'Decimation', 'Delirium', 'Delusion', 'Dementia', 'Demon', 'Demonic', 'Desire\'s', 'Destiny\'s', 'Destruction', 'Devotion', 'Diabolic', 'Divine', 'Divinity\'s', 'Dominance', 'Domination', 'Dominion', 'Doom', 'Dread', 'Dream', 'Echo', 'Eclipse', 'Elemental', 'Enigma', 'Enigmatic', 'Equinox', 'Eradication', 'Eternal', 'Eternity', 'Evil', 'Exile', 'Exiled', 'Extinction', 'Faith\'s', 'Fate\'s', 'Finality', 'Fire', 'Flame', 'Fortitude', 'Fortune\'s', 'Frost', 'Genesis', 'Gold', 'Golden', 'Grave', 'Guardian', 'Guardian\'s', 'Hallowed', 'Hatred\'s', 'Healing', 'Heavenly', 'Hell\'s', 'Hellish', 'Hero', 'Hero\'s', 'Holy', 'Hungering', 'Ice', 'Immortal', 'Immunity', 'Impurity', 'Infernal', 'Infinity', 'Insanity', 'Invincibility', 'Invisibility', 'Invisible', 'Isolation', 'Judging', 'Judgment', 'Justice', 'Karma', 'Kismet', 'Liberty', 'Life', 'Life\'s', 'Lifeblood', 'Light\'s', 'Longevity', 'Lucky', 'Lust\'s', 'Malady', 'Malediction', 'Malevolence', 'Maniacal', 'Massacre', 'Mending', 'Metamorphosis', 'Mirage', 'Misery', 'Misfortune', 'Mystery', 'Necrotic', 'Nightmare', 'Obedience', 'Oblivion', 'Obsidian', 'Onyx', 'Oracle', 'Pandemonium', 'Paradise', 'Paragon', 'Paralyzing', 'Paramount', 'Pestilence', 'Petrifying', 'Philosopher\'s', 'Primal', 'Prime', 'Prosperous', 'Purity', 'Rebirth', 'Resistance', 'Resolution', 'Restoration', 'Resurrection', 'Rogue', 'Runed', 'Sacred', 'Sanctifying', 'Scourge', 'Seduction', 'Sentient', 'Seraphic', 'Serenity', 'Shade', 'Shadow', 'Shapeshifter', 'Shapeshifter\'s', 'Slumber', 'Solitude\'s', 'Soul', 'Specter', 'Spellbound', 'Spirit', 'Spiritbound', 'Spite', 'Storm', 'Summoning', 'Supremacy', 'Teleportation', 'Teleporting', 'Temptation', 'Termination', 'Thaumaturgy', 'Thunder', 'Titan', 'Torment', 'Torture', 'Tranquility', 'Transformation', 'Transmutation', 'Tribute', 'Triumph', 'Truth', 'Twilight', 'Unholy', 'Valor', 'Valor\'s', 'Vengeance', 'Venom', 'Vice', 'Virility', 'Virtue', 'Void', 'Warding', 'Wisdom', 'Worshop'];
  const nm3 = ['Amulet', 'Arch', 'Ark', 'Band', 'Book', 'Boots', 'Box', 'Bracelet', 'Canopic Chest', 'Canopic Jar', 'Chest', 'Cloak', 'Crown', 'Cube', 'Cup', 'Cylinder', 'Disc', 'Chalice', 'Goblet', 'Tiara', 'Circlet', 'Grimoire', 'Door', 'Elixir', 'Feather', 'Fleece', 'Fountain', 'Fruit', 'Gauntlet', 'Gem', 'Grail', 'Hand', 'Hide', 'Horn', 'Ichor', 'Inscriptions', 'Instrument', 'Jar', 'Key', 'Lamp', 'Letters', 'Mantle', 'Mask', 'Microlith', 'Mirror', 'Monolith', 'Necklace', 'Pillar', 'Ring', 'Robes', 'Rod', 'Root', 'Runes', 'Sandals', 'Scroll', 'Seal', 'Shard', 'Shield', 'Skull', 'Slab', 'Staff', 'Statue', 'Statuette', 'Stone', 'Sword', 'Symbols', 'Tablet', 'Texts', 'Tome', 'Urn'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = `${sample(nm2)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm3)} of ${sample(nm1)}`;
    }
    return names;
  }
}
module.exports = artifacts
