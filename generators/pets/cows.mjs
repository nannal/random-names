var sample = require ('lodash.sample')

function cows() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Apple', 'Athene', 'Bambam', 'Barrage', 'Barry', 'Beefcake', 'Berry', 'Big B', 'Bigfoot', 'Biggy', 'Biscuit', 'Blitz', 'Bluster', 'Bolt', 'Bones', 'Boomboom', 'Boomer', 'Boot', 'Booth', 'Bosco', 'Boulder', 'Brownie', 'Brucie', 'Bud', 'Bubba', 'Buddy', 'Buffo', 'Bullet', 'Bullseye', 'Bullwinkle', 'Bumble', 'Buster', 'Butters', 'Button', 'Calvin', 'Chip', 'Chuck', 'Coal', 'Coloss', 'Comet', 'Conan', 'Cookie', 'Crazy', 'Cream', 'Dozer', 'Duke', 'Echo', 'Elmo', 'Ernie', 'Froghurt', 'Fury', 'Gale', 'George', 'Grand', 'Gus', 'Hank', 'Harry', 'Jackson', 'Jet', 'Kargo', 'Maddock', 'Madeye', 'Mambo', 'Mammoth', 'Maverick', 'Max', 'Midnight', 'Moe', 'Momoo', 'Moofasa', 'Mooffin', 'Moomoo', 'Moostache', 'Mustache', 'Nemoo', 'Onyx', 'Oreo', 'Otis', 'Paladin', 'Patch', 'Pepper', 'Pierce', 'Pounder', 'Rage', 'Rambo', 'Rant', 'Rock', 'Rocky', 'Rufus', 'Rumble', 'Sable', 'Shadow', 'Sir Loin', 'Slate', 'Smash', 'Sparky', 'Spartacus', 'Spice', 'Spot', 'Stomper', 'Storm', 'Sunny', 'Tank', 'Taurus', 'Thor', 'Thunder', 'Tiny', 'Toro', 'Ug', 'Vegas', 'Warpath', 'Wasabi', 'Wonder', 'Yoghi', 'Yoghurt', 'Zipper', 'Zug'];
  const nm2 = ['Abby', 'Amazone', 'Amber', 'Annabelle', 'Apple', 'April', 'Arizone', 'Autumn', 'Babette', 'Babs', 'Baby', 'Barbara', 'Bella', 'Belle', 'Bernice', 'Bertha', 'Bess', 'Bessy', 'Beth', 'Betsy', 'Booboo', 'Brooke', 'Brownie', 'Bubble', 'Bubbles', 'Bumble', 'Bumbles', 'Butter', 'Buttercup', 'Button', 'Buttons', 'Caramel', 'Caramelle', 'Chancey', 'Charme', 'Chloe', 'Cinnamon', 'Clarabell', 'Clover', 'Coco', 'Cookie', 'Corona', 'Creame', 'Creme', 'Cutie', 'Daffodil', 'Daisy', 'Dala', 'Darcy', 'Darla', 'Dear', 'Dew', 'Dolly', 'Dora', 'Doris', 'Dot', 'Dottie', 'Dream', 'Dutchess', 'Eleanor', 'Fancy', 'Flower', 'Fortuna', 'Fortune', 'Freckles', 'Gambles', 'Ginger', 'Grace', 'Gracie', 'Gwen', 'Hazel', 'Honey', 'Isabella', 'Jade', 'Jane', 'Jess', 'July', 'June', 'Lavender', 'Lilly', 'Lily', 'Lilypad', 'Lola', 'Lulu', 'Magnolia', 'Maple', 'Marge', 'Marigold', 'Martha', 'Maude', 'May', 'Midnight', 'Moode', 'Mooffin', 'Moogy', 'Moolissa', 'Moolly', 'Mooly', 'Moomee', 'Moomoo', 'Moomy', 'Moona', 'Moonbeam', 'Moonica', 'Muffin', 'Nemoo', 'Nighte', 'Nora', 'Olive', 'Oreo', 'Patches', 'Patience', 'Pearl', 'Penny', 'Pepper', 'Petunia', 'Pickle', 'Pickles', 'Precious', 'Princess', 'Prudence', 'Pumpkin', 'Queen', 'Queenie', 'Queste', 'Rose', 'Rosie', 'Ruby', 'Satin', 'Savanah', 'Shade', 'Shadow', 'Snow', 'Snowdrop', 'Snowflake', 'Sparkle', 'Spot', 'Spring', 'Sprinkles', 'Sugar', 'Summer', 'Sunbeam', 'Sweetie', 'Valentine', 'Viola', 'Violet', 'Wendy', 'Willow', 'Winter'];
  {
    if (type === 1) {
      names = sample(nm2);
    } else {
      names = sample(nm1);
    }
    return names;
  }
}
module.exports = cows
