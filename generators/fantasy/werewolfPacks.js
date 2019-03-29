var sample = require ('lodash.sample')

function werewolfPacks() {
  let names;
  const nm1 = ['Ambersky', 'Arctic', 'Ash', 'Bane', 'Barbaric', 'Black', 'Bloodlust', 'Bloodrose', 'Bloodvenom', 'Blue', 'Broken', 'Brown', 'Brutal', 'Calm', 'Crescent', 'Crimson', 'Cruel', 'Dark', 'Dawn', 'Dawnfall', 'Dawnguard', 'Dessert', 'Dusk', 'Duskfall', 'Evening', 'Feral', 'Ferocious', 'Fierce', 'Golden', 'Grey', 'Hollow', 'Imperial', 'Kind', 'Lichen', 'Lightning', 'Lost', 'Lunar', 'Lupine', 'Lycan', 'Midnight', 'Morning', 'Mountain', 'Mystic', 'Native', 'Night', 'Nightfall', 'Nightshade', 'Nightstar', 'Primal', 'Prime', 'Raging', 'Red', 'Sanguis', 'Savage', 'Scarlet', 'Scarred', 'Sentinel', 'Shadowed', 'Silent', 'Silver', 'Silverback', 'Solar', 'Spirit', 'Starry', 'Sundown', 'Sunset', 'Thunder', 'Tranquil', 'Vanished', 'Vengeful', 'Vicious', 'Whisper', 'White', 'Wild', 'Moonlit', 'Darkmoon', 'Blue Moon', 'Moonstone', 'Bloodmoon', 'Crescent Moon', 'Moonvalley', 'Full Moon', 'Moon'];
  const nm2 = ['Ambersky', 'Arctic', 'Ash', 'Bane', 'Barbaric', 'Black', 'Bloodlust', 'Bloodrose', 'Bloodvenom', 'Blue', 'Broken', 'Brown', 'Brutal', 'Calm', 'Crescent', 'Crimson', 'Cruel', 'Dark', 'Dawn', 'Dawnfall', 'Dawnguard', 'Dessert', 'Dusk', 'Duskfall', 'Evening', 'Feral', 'Ferocious', 'Fierce', 'Golden', 'Grey', 'Hollow', 'Imperial', 'Kind', 'Lichen', 'Lightning', 'Lost', 'Lunar', 'Lupine', 'Lycan', 'Midnight', 'Morning', 'Mountain', 'Mystic', 'Native', 'Night', 'Nightfall', 'Nightshade', 'Nightstar', 'Primal', 'Prime', 'Raging', 'Red', 'Sanguis', 'Savage', 'Scarlet', 'Scarred', 'Sentinel', 'Shadowed', 'Silent', 'Silver', 'Silverback', 'Solar', 'Spirit', 'Starry', 'Sundown', 'Sunset', 'Thunder', 'Tranquil', 'Vanished', 'Vengeful', 'Vicious', 'Whisper', 'White', 'Wild'];
  const nm3 = ['Alpha', 'Angel', 'Ash', 'Beta', 'Blood', 'Burst', 'Canine', 'Canis', 'Cave', 'Creek', 'Crows', 'Darkness', 'Delta', 'Depths', 'Dream', 'Eclipse', 'Edge', 'Eye', 'Eyed', 'Eyes', 'Feather', 'Fire', 'Forest', 'Gloom', 'Grin', 'Heart', 'Hill', 'Ice', 'Lake', 'Light', 'Lupis', 'Oak', 'Oasis', 'Omega', 'Peak', 'Pride', 'Raven', 'River', 'Rock', 'Rufus', 'Shadow', 'Silence', 'Sky', 'Snow', 'Star', 'Stars', 'Stealth', 'Summit', 'Tail', 'Thunder', 'Timber', 'Tooth', 'Valley', 'Venture', 'Water', 'Woodland'];
  const nm4 = ['Alpha', 'Angel', 'Ash', 'Beta', 'Blood', 'Burst', 'Canine', 'Canis', 'Cave', 'Creek', 'Crows', 'Darkness', 'Delta', 'Depths', 'Dream', 'Eclipse', 'Edge', 'Eye', 'Eyed', 'Eyes', 'Feather', 'Fire', 'Forest', 'Gloom', 'Grin', 'Heart', 'Hill', 'Ice', 'Lake', 'Light', 'Lupis', 'Moon', 'Oak', 'Oasis', 'Omega', 'Peak', 'Pride', 'Raven', 'River', 'Rock', 'Rufus', 'Shadow', 'Silence', 'Sky', 'Snow', 'Star', 'Stars', 'Stealth', 'Summit', 'Tail', 'Thunder', 'Timber', 'Tooth', 'Valley', 'Venture', 'Water', 'Woodland'];
  const nm5 = ['Banes', 'Canines', 'Claws', 'Furs', 'Growlers', 'Guardians', 'Hounds', 'Howlers', 'Hunters', 'Keepers', 'Manes', 'Nightstalkers', 'Nightwalkers', 'Prowlers', 'Shadows', 'Stalkers', 'Walkers', 'Warriors'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = `${sample(nm1)} ${sample(nm4)} Pack`;
    } else if (i < 8) {
      names = `${sample(nm2)} ${sample(nm3)} Pack`;
    } else {
      names = `The ${sample(nm1)} ${sample(nm5)}`;
    }
    return names;
  }
}
module.exports = werewolfPacks
