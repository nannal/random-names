var sample = require ('lodash.sample')

function bridges() {
  let names;
  const nm1 = ['Abandoned', 'Admired', 'Adored', 'Aged', 'Anchored', 'Ancient', 'Angelic', 'Antique', 'Austere', 'Autumn', 'Bare', 'Barren', 'Big', 'Black', 'Bland', 'Blank', 'Bleak', 'Blond', 'Blue', 'Bold', 'Bouncy', 'Brave', 'Bright', 'Broken', 'Bronze', 'Brown', 'Burly', 'Calm', 'Capital', 'Chief', 'Classic', 'Clear', 'Coarse', 'Cold', 'Colossal', 'Common', 'Complex', 'Composed', 'Conquest', 'Courage', 'Crimson', 'Crystal', 'Dark', 'Dearest', 'Deep', 'Deepest', 'Defiant', 'Deserted', 'Diamond', 'Diligent', 'Double', 'Dry', 'East', 'Elegant', 'Emerald', 'Empty', 'Enchanted', 'Enlightened', 'Exalted', 'Fair', 'Free', 'Freedom', 'Gentle', 'Giant', 'Glistening', 'Golden', 'Graceful', 'Grand', 'Grim', 'Grizzly', 'Harmony', 'Heavenly', 'Heavy', 'Hollow', 'Humble', 'Idle', 'Infinite', 'Infinity', 'Innocence', 'International', 'Iron', 'Jade', 'Jagged', 'Last', 'Liberty', 'Light', 'Little', 'Lone', 'Lonely', 'Long', 'Lost', 'Majestic', 'Major', 'Mammoth', 'Massive', 'Mellow', 'Merry', 'Millennium', 'Misty', 'Mithril', 'Muddy', 'Murky', 'Mysterious', 'Mystery', 'Narrow', 'New', 'North', 'Old', 'Open', 'Ornate', 'Oval', 'Pale', 'Parallel', 'Peace', 'Peaceful', 'Plain', 'Pleasant', 'Precious', 'Pride', 'Prime', 'Pristine', 'Proud', 'Pure', 'Quiet', 'Regal', 'Remote', 'Round', 'Royal', 'Ruby', 'Rusty', 'Sandy', 'Sapphire', 'Serene', 'Serenity', 'Serpent', 'Shallow', 'Sharp', 'Shimmering', 'Short', 'Silent', 'Silver', 'Simple', 'Single', 'Sleepy', 'Slim', 'Small', 'Smooth', 'Somber', 'South', 'Spring', 'Steel', 'Stormy', 'Straight', 'Summer', 'Tall', 'Thin', 'Tranquility', 'Trinity', 'Twin', 'Velvet', 'Victory', 'Warped', 'West', 'Wide', 'Wild', 'Winding', 'Windy', 'Winter'];
  const nm2 = ['Abyss', 'Arch', 'Avenue', 'Bank', 'Banks', 'Bay', 'Beach', 'Bluff', 'Border', 'Branch', 'Brim', 'Brink', 'Brook', 'Canal', 'Canyon', 'Cay', 'Chasm', 'Cliff', 'Coast', 'Creek', 'Edge', 'Estuary', 'Falls', 'Flow', 'Gate', 'Gates', 'Gateway', 'Glacier', 'Gorge', 'Gulch', 'Harbor', 'Haven', 'Inlet', 'Island', 'Isle', 'Jubilee', 'Lake', 'Lane', 'Ledge', 'Memorial', 'Pass', 'Passage', 'Path', 'Point', 'Port', 'Portal', 'Ravine', 'River', 'Road', 'Route', 'Sails', 'Shore', 'Spring', 'Star', 'Stream', 'Street', 'Summit', 'Terrace', 'Trail', 'Tributary', 'Vale', 'Valley', 'Water', 'Way', 'Wharf'];
  const nm3 = ['Bridge', 'Bridge', 'Bridge', 'Bridge', 'Overpass', 'Viaduct', 'Aqueduct', 'Suspension Bridge', 'Footbridge', 'Crossing', 'Bridge', 'Bridge', 'Bridge', 'Bridge', 'Bridge', 'Bridge', 'Bridge', 'Bridge'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = `${sample(nm1)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm2)} ${sample(nm3)}`;
    }
    return names;
  }
}
module.exports = bridges
