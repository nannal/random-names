var sample = require ('lodash.sample')

function deers() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Angel', 'Asp', 'Ghost', 'Aspen', 'Avalon', 'Ayalon', 'Bay', 'Birr', 'Blitz', 'Blitzen', 'Bolt', 'Boomerang', 'Bou', 'Brake', 'Browne', 'Brutus', 'Buck', 'Buckeye', 'Buckley', 'Bucky', 'Buff', 'Buttons', 'Champion', 'Chantler', 'Charger', 'Chase', 'Chestnut', 'Colt', 'Comet', 'Covert', 'Cupid', 'Dancer', 'Dapper', 'Darby', 'Dart', 'Darton', 'Dash', 'Dearborn', 'Derland', 'Devin', 'Doc', 'Doe', 'Donner', 'Dot', 'Drummer', 'Edge', 'Elk', 'Elwood', 'Fable', 'Forest', 'Forester', 'Freckles', 'Gallop', 'Giggle', 'Grayson', 'Grove', 'Grover', 'Hersh', 'Hershel', 'Indy', 'Ivor', 'Jingle', 'John Doe', 'Jumbo', 'Juno', 'Knob', 'Knobs', 'Legacy', 'Lightning', 'Lockhart', 'Lucky', 'Magnum', 'Mahony', 'Midnight', 'Mohawk', 'Prancer', 'Quest', 'Ray', 'Rocky', 'Roe', 'Rohan', 'Romulus', 'Roscoe', 'Rowan', 'Rush', 'Russet', 'Scooter', 'Shade', 'Shadow', 'Silver', 'Sky', 'Snow', 'Solace', 'Spike', 'Spot', 'Springer', 'Sprinter', 'Sprite', 'Spruce', 'Spurt', 'Starbuck', 'Storm', 'Stormy', 'Sunny', 'Tawn', 'Thicket', 'Thunder', 'Timber', 'Titan', 'Umber', 'Ward', 'Weald', 'Willow', 'Wonder', 'Woods', 'Woody', 'Yogi'];
  const nm2 = ['Aphra', 'Afra', 'Hymn', 'Ayala', 'Bambi', 'Fawn', 'Fawne', 'Doe', 'Raleigh', 'Hinda', 'Hynd', 'Hynda', 'Hynde', 'Luna', 'Willow', 'Lyric', 'Dash', 'Milo', 'Fern', 'Melrose', 'Ficus', 'Spryte', 'Lucky', 'Dance', 'Ayala', 'Summer', 'Spring', 'Autumn', 'Winter', 'Elain', 'Tabby', 'Tibby', 'Ivory', 'Pearl', 'Snow', 'Snowflake', 'Hazel', 'Bay', 'Umber', 'Amber', 'Cinnamon', 'Coco', 'Tawny', 'Cookie', 'Muffin', 'Beauty', 'Buttercup', 'Freckles', 'Spot', 'Speckle', 'Speckles', 'Grace', 'Ivy', 'Promise', 'Raidrop', 'Serenity', 'Speckles', 'Zoe', 'Dyani', 'Hinda', 'Jane Doe', 'Daisy', 'Dear', 'Pepper', 'Princess', 'Queen', 'Elli', 'Elkee', 'Vixen', 'Dash', 'Silka', 'Boubou', 'Harmony', 'Flower', 'Furball', 'Buttercup', 'Nutmeg', 'Aurora', 'Aura', 'Heiress', 'Liberty', 'Jasmine', 'Ashley', 'Jewel', 'Enigma', 'Toffee', 'Patches', 'Shye', 'Huntress', 'Cotton', 'Luna', 'Breeze', 'Breezy', 'Dashful', 'Whiskers', 'Nighte', 'Brooke', 'Moone', 'Winde', 'Windy', 'Enya', 'Cloude', 'Hope', 'Lace', 'Silk', 'Orchid', 'Lullaby', 'Pebbles', 'River', 'Cupcake', 'Mystique', 'Ginger', 'Destiny'];
  {
    if (type === 1) {
      names = sample(nm2);
    } else {
      names = sample(nm1);
    }
    return names;
  }
}
module.exports = deers
