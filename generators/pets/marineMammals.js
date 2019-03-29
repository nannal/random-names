var sample = require ('lodash.sample')

function marineMammals() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abalone', 'Acro', 'Aenon', 'Artic', 'Avalon', 'Bay', 'Bayou', 'Beaker', 'Beck', 'Bered', 'Blue', 'Bo', 'Boomer', 'Bourne', 'Brook', 'Bubbles', 'Bullet', 'Captain', 'Caspian', 'Comet', 'Cruise', 'Dash', 'Crunch', 'Dew', 'Dips', 'Diver', 'Dover', 'Dune', 'Dyve', 'Echo', 'Finn', 'Flipper', 'Flips', 'Frost', 'Gal', 'Gar', 'Harbor', 'Harbour', 'Haven', 'Hurley', 'Ice', 'Jetty', 'Jive', 'Kai', 'Kane', 'Krill', 'Kyle', 'Lach', 'Lagoon', 'Laike', 'Lake', 'Mako', 'Marlin', 'Marlow', 'Marsh', 'Moor', 'Moore', 'Muir', 'Neptune', 'Nerio', 'Nero', 'Nile', 'Niles', 'Pisces', 'Plunge', 'Poseidon', 'Rain', 'Ray', 'Reef', 'Ren', 'Rio', 'Rip', 'Ripley', 'Sailor', 'Salty', 'Saul', 'Screech', 'Shade', 'Shadow', 'Shimmy', 'Shore', 'Sid', 'Sidney', 'Snorkel', 'Snowball', 'Snowflake', 'Soakes', 'Speedy', 'Splash', 'Spray', 'Sprinkle', 'Storm', 'Strom', 'Tad', 'Tails', 'Tango', 'Tide', 'Tracker', 'Triton', 'Troy', 'Tumble', 'Twister', 'Tyde', 'Wayde'];
  const nm2 = ['Abalone', 'Aeria', 'Aerial', 'Aqua', 'Aquina', 'Ara', 'Arial', 'Ariel', 'Artica', 'Baye', 'Bayou', 'Belle', 'Blue', 'Briny', 'Brooke', 'Bubbles', 'Bullette', 'Cari', 'Cascade', 'Cerulea', 'Comette', 'Cora', 'Coral', 'Coralia', 'Crystal', 'Dandy', 'Delta', 'Dew', 'Dips', 'Dorea', 'Doria', 'Dot', 'Echo', 'Fen', 'Finne', 'Flip', 'Gemma', 'Gloria', 'Grace', 'Hydris', 'Icee', 'Isla', 'Kai', 'Kaia', 'Kelby', 'Kelpe', 'Kura', 'Kyla', 'Laguna', 'Lagune', 'Lana', 'Llyn', 'Lumina', 'Luna', 'Mahi', 'Mai', 'Malibu', 'Mareen', 'Marine', 'Marinelle', 'Marinna', 'Marsha', 'Maryn', 'Maya', 'Melanie', 'Melody', 'Meri', 'Meris', 'Mime', 'Misty', 'Molly', 'Muriel', 'Nahla', 'Nami', 'Nebula', 'Neptuna', 'Nerina', 'Nile', 'Nixie', 'Oceana', 'Oceane', 'Opal', 'Pace', 'Pearl', 'Peirene', 'Pisces', 'Pitch', 'Pure', 'Raine', 'Razzle', 'Rhode', 'Ria', 'Riva', 'River', 'Sandy', 'Sapphire', 'Sealea', 'Shade', 'Shadow', 'Shelby', 'Shelly', 'Siera', 'Sierra', 'Siren', 'Sirena', 'Sirene', 'Snowball', 'Snowflake', 'Snowwhite', 'Sona', 'Sparkle', 'Splash', 'Splashy', 'Sprinkle', 'Sprinkles', 'Squeal', 'Squeek', 'Squiggle', 'Squiggles', 'Star', 'Sundance', 'Tide', 'Tumble', 'Tyde', 'Ula', 'Una', 'Yoka', 'Zippy'];
  {
    if (type === 1) {
      names = sample(nm2);
    } else {
      names = sample(nm1);
    }
    return names;
  }
}
module.exports = marineMammals
