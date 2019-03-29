var sample = require ('lodash.sample')

function jewelrys() {
  let names;
  const nm3 = ['Tiara', 'Necklace', 'Amulet', 'Bracelet', 'Ornament', 'Pendant', 'Ring', 'Pin', 'Choker', 'Anklet', 'Brooch', 'Necklace', 'Amulet', 'Bracelet', 'Pendant', 'Ring'];
  const nm1 = ['Adored', 'Agate', 'Aged', 'Amber', 'Amethyst', 'Ancient', 'Angel', 'Angelic', 'Anonymous', 'Antique', 'Arctic', 'Austere', 'Azure', 'Blind', 'Blushing', 'Brave', 'Bright', 'Brilliant', 'Broken', 'Citrine', 'Colossal', 'Coral', 'Crisp', 'Crystal', 'Curly', 'Curvy', 'Darling', 'Dearest', 'Defiant', 'Devoted', 'Diamond', 'Diligent', 'Earnest', 'Elated', 'Elegant', 'Emerald', 'Enchanted', 'Enchanting', 'Enlightened', 'Exalted', 'Exotic', 'Faint', 'Fair', 'Feline', 'Flawless', 'Forsaken', 'Free', 'Frozen', 'Garnet', 'Gentle', 'Gifted', 'Glistening', 'Graceful', 'Gracious', 'Grand', 'Grateful', 'Handsome', 'Happy', 'Harmonious', 'Heaven', 'Heavenly', 'Hematite', 'Honest', 'Humble', 'Idle', 'Illustrious', 'Impossible', 'Infinite', 'Innocent', 'Jade', 'Jasper', 'Lavish', 'Lonely', 'Loyal', 'Luminous', 'Lunar', 'Lustrous', 'Majestic', 'Malachite', 'Mellow', 'Mysterious', 'Obsidian', 'Ocean', 'Onyx', 'Parallel', 'Peace', 'Peaceful', 'Pearl', 'Perfect', 'Pink', 'Playful', 'Precious', 'Pristine', 'Proud', 'Pure', 'Purity', 'Quiet', 'Royal', 'Ruby', 'Sapphire', 'Scented', 'Secret', 'Serene', 'Serpent', 'Serpentine', 'Shadow', 'Silent', 'Sinful', 'Solar', 'Spinel', 'Spotless', 'Stunning', 'Sweet', 'Tempting', 'Tender', 'Tinted', 'Unmounted', 'Velvet', 'Vibrant', 'Violet', 'Virtuous', 'Worthy', 'Zircon'];
  const nm2 = ['Ambition', 'Aura', 'Balance', 'Bauble', 'Beauty', 'Belle', 'Blessing', 'Bliss', 'Blossom', 'Bond', 'Breath', 'Bubble', 'Charm', 'Class', 'Clover', 'Core', 'Crescent', 'Crest', 'Cross', 'Crux', 'Desire', 'Devotion', 'Dewdrop', 'Dream', 'Drop', 'Droplet', 'Eye', 'Fan', 'Favor', 'Flame', 'Flower', 'Focus', 'Force', 'Gift', 'Glamour', 'Globe', 'Grace', 'Heart', 'Hope', 'Hum', 'Hymn', 'Image', 'Leaf', 'Life', 'Light', 'Lily', 'Love', 'Lure', 'Mark', 'Memorial', 'Mind', 'Moon', 'Oath', 'Oculus', 'Orb', 'Palm', 'Panther', 'Passion', 'Petal', 'Pledge', 'Poem', 'Prayer', 'Promise', 'Prospect', 'Rainbow', 'Resolve', 'Riddle', 'Rock', 'Root', 'Scale', 'Seal', 'Shield', 'Song', 'Soul', 'Spark', 'Spiral', 'Spirit', 'Star', 'Stone', 'Sun', 'Swan', 'Tear', 'Teardrop', 'Tempest', 'Tribute', 'Trinket', 'Twin', 'Twins', 'Twirl', 'Twist', 'Valor', 'Vigor', 'Vision', 'Voice', 'Vow', 'Whisper', 'Will', 'Wing', 'Wings', 'Wish'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = `The ${sample(nm1)} ${sample(nm2)}`;
    } else {
      names = `The ${sample(nm1)} ${sample(nm2)} ${sample(nm3)}`;
    }
    return names;
  }
}
module.exports = jewelrys
