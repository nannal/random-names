export default function rabbits() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Hunter', 'Pooflez', 'Popcorn', '8-ball', 'Abel', 'Able', 'Abraham', 'Ace', 'Acer', 'Achemy', 'Achilles', 'Acker', 'Adagio', 'Adam', 'Admiral', 'Aesop', 'Ajax', 'Al', 'Aladdin', 'Alaska', 'Alastair', 'Albert', 'Alchemy', 'Alex', 'Alexander', 'Alf', 'Alfi', 'Alfie', 'Aloysius', 'Alpaca', 'Alpine', 'Amadeus', 'Amazon', 'Ambrose', 'Amos', 'Angus', 'Apache', 'Apollo', 'Aragorn', 'Aramis', 'Archibald', 'Archie', 'Arfor', 'Arlo', 'Arnie', 'Arnold', 'Asa', 'Ash', 'Aspen', 'Asterix', 'Aston', 'Atlas', 'Augustus', 'Austin', 'Auston', 'Avalon', 'Baby', 'Badger', 'Baggins', 'Bailey', 'Baldwin', 'Baloo', 'Bam Bam', 'Barnaby', 'Barnacle', 'Barney', 'Bart', 'Bartholomew', 'Basil', 'Basket', 'Baxter', 'Bazooka', 'Beau', 'Beebo', 'Beefeater', 'Beethoven', 'Benny', 'Bentley', 'Beowulf', 'Bernstein', 'Bevis', 'Big Boss', 'Big Foot', 'Bijou', 'Bilbo', 'Bill', 'Biscuit', 'Bishop', 'Blackie', 'Blackjack', 'Blake', 'Blinker', 'Bliss', 'Blizzard', 'Blowout', 'Blue', 'Blue Blinker', 'Bo', 'Boatswain', 'Bobby', 'Bobo', 'Bogart', 'Bomber', 'Bonkers', 'Boo', 'BooBoo', 'Boomer', 'Boots', 'Boris', 'Boston', 'Boy', 'Brad', 'Bradly', 'Brady', 'Brie', 'Brisby', 'Bro', 'Brock', 'Bronson', 'Broody', 'Brownie', 'Bruce', 'Bruiser', 'Bruno', 'Bubba', 'Bubbles', 'Buck', 'Bud', 'Buffin', 'Bugs', 'Bullet', 'Bumper', 'Bunster', 'Busgsy', 'Busker', 'Buster', 'Butch', 'Butler', 'Butthead', 'Buttons', 'Buzz', 'Cadbury', 'Cadet', 'Caesar', 'Cajun', 'Calvin', 'Calypso', 'Camembert', 'Cappuccino', 'Captain', 'Captain Marvel', 'Casanova', 'Catbert', 'Cedric', 'Chad', 'Chance', 'Chandler', 'Chansu', 'Chaos', 'Charlie', 'Charmain', 'Charmin', 'Chasey', 'Checkers', 'Cheesel', 'Cheetos', 'Cheezels', 'Chester', 'Chevy', 'Chico', 'Chilli', 'Chino', 'Chip', 'Choccy', 'Chompsky', 'Choo', 'Chowder', 'Chubbs', 'Chunks', 'Chutney', 'Claude', 'Cloudy', 'Clyde', 'Cocoa', 'Coda', 'Cody', 'Coleman', 'Collin', 'Colonel', 'Comet', 'Cookie', 'Copper', 'Cornelius', 'Cornflake', 'Cosmo', 'Costanza', 'Cotton', 'Cottonball', 'Cowboy', 'Crush', 'Cuddles', 'DaVinci', 'Dagger', 'Dakota', 'Dalton', 'Dandelion', 'Dante', 'Darrow', 'Dash', 'Dean', 'Deedle', 'Dezzi', 'Diesel', 'Digger', 'Dilbert', 'Dinger', 'Dixie', 'Doc', 'Doctor Claw', 'Doolittle', 'Dopey', 'Doug', 'Dough Boy', 'Dude', 'Duke', 'Dumbbell', 'Dutch', 'Dwight', 'Earl', 'Earsy', 'Eastwood', 'Ebbie', 'Echo', 'Egor', 'Einstein', 'Ellsworth', 'Elmo', 'Elway', 'Elwood', 'Energizer', 'Ernie', 'Ewen', 'Excalibur', 'Fabio', 'Fandango', 'Farbar', 'Feldmann', 'Fenton', 'Ferrari', 'Ferris', 'Fievel', 'Finn', 'Firefly', 'Flopsy', 'Floyd', 'Fluffy', 'Fluffykins', 'Fonzi', 'Frankie', 'Franklin', 'Freckles', 'Frodo', 'Frostbite', 'Froth', 'Fudge', 'Fuzzmeister', 'G-Man', 'Gadget', 'Galvin', 'Galway', 'Gatsby', 'Gavin', 'Geoffrey', 'George', 'Gideon', 'Giggles', 'Gilbert', 'Ginger', 'Giovanni', 'Gizmo', 'Goblin', 'Goldfinger', 'Gomez', 'Gonzo', 'Gopher', 'Gouda', 'Graham', 'Gremlin', 'Gringo', 'Groucho', 'Grover', 'Guiness', 'Gumbo', 'Gummo', 'Gunther', 'Gus', 'Hacker', 'Haiku', 'Halo', 'Hamelin', 'Hamlet', 'Hardy', 'Harold', 'Harpo', 'Harrison', 'Harry', 'Harvey', 'Heath', 'Hector', 'Henry', 'Herb', 'Herbert', 'Herbie', 'Herman', 'Hershey', 'Hickory', 'Hobart', 'Hobbs', 'Hocus', 'Holbrook', 'Homey', 'Honey', 'Hopkins', 'Hopper', 'Hopscotch', 'Hopson', 'Houdini', 'Hutch', 'Indiana', 'Inki', 'Ismael', 'Itzy', 'Iverson', 'Izot', 'Jack', 'Jackson', 'Jaeger', 'Jake', 'Jammer', 'Jaws', 'Jeeves', 'Jenkins', 'Jericho', 'Jerome', 'Jett', 'Joe Cool', 'Johnny', 'Jola', 'Jonesy', 'Joshua', 'Juan', 'Jude', 'Juggernaut', 'Julius', 'Jumper', 'Juniper', 'Juno', 'Jupiter', 'Jurgen', 'Justen', 'Kalamazoo', 'Keanu', 'Keegan', 'Keifer', 'Kensington', 'Killer', 'Killigan', 'Kipling', 'Kitbull', 'Kobi', 'Kookaburra', 'Kozmo', 'Kramer', 'Kruger', 'Kunz', 'Lamar', 'Lambchop', 'Landers', 'Larry', 'Lastat', 'Laszlo', 'Lazar', 'Lemmy', 'Leo', 'Leonardo', 'Lex', 'Lexus', 'Lickerish', 'Licorice', 'Lightening', 'Lightning', 'Lilo', 'Linux', 'Locke', 'Longfellow', 'Lorenzo', 'Louie', 'Luck', 'Lucky', 'Lugosi', 'Lurky', 'Luxor', 'Lyndon', 'MacAlpin', 'Macaulay', 'Macbeth', 'Markel', 'Marley', 'Mars', 'Marshmallow', 'Marshmellow', 'Maverick', 'Max', 'Maxie', 'McFluffy', 'McFluffykins', 'Meatloaf', 'Mellow', 'Midget', 'Midnight', 'Millard', 'Mister', 'Mittens', 'Mopsy', 'Morgan', 'Morris', 'Moses', 'Mozart', 'Mr. Chompsky', 'Mr. Nibs', 'Muffin', 'Munchkin', 'Murphy', 'Nacho', 'Napoleon', 'Nathan', 'Ned', 'Neddy', 'Nelson', 'Nemo', 'Neopolatin', 'Neptune', 'Nero', 'Nesquik', 'Nibblers', 'Nibbles', 'Nickerson', 'Nijinsky', 'Niko', 'Niles', 'Nitro', 'Noah', 'Noel', 'Noir', 'Noogie', 'Nubby', 'Nunkie', 'Nuno', 'Nutmeg', 'Nutters', 'Nytrogen', 'O�Malley', 'Oakley', 'Obama', 'Obelix', 'Odie', 'Olivier', 'Olli', 'Ollie', 'Onyx', 'Opie', 'Oreo', 'Orion', 'Orlando', 'Oscar', 'Ozwald', 'Ozzy', 'Pablo', 'Pacey', 'Pacino', 'Paddington', 'Paddy', 'Padfoot', 'Palmer', 'Pancake', 'Panda', 'Patch', 'Patches', 'Patrick', 'Paulie', 'Peach-O', 'Peanut', 'Pebbles', 'Pepper', 'Pepperjack', 'Pepsi', 'Percy', 'Perkins', 'Peter Pan', 'Pickles', 'Pierce', 'Pinky', 'Pinnochio', 'Piper', 'Pippin', 'Pipsqueak', 'Pixie', 'Pluto', 'Poco Loco', 'Pokemon', 'Prongs', 'Pudding', 'Puddles', 'Pumbaa', 'Pumpkin', 'Q-Tip', 'Quartz', 'Quentin', 'Questor', 'Quimby', 'Quinto', 'Quistador', 'Quiver', 'Raccoo', 'Rae', 'Rafael', 'Raggedy Andy', 'Rahjah', 'Ralph', 'Ralphie', 'Random', 'Raoul', 'Rascal', 'Rasta', 'Raul', 'Razor', 'Razzie', 'Razzle', 'Redding', 'Reese', 'Remel', 'Ren', 'Rex', 'Ricky', 'Riff Raff', 'Riley', 'Ringo', 'Ripley', 'Rocco', 'Rodman', 'Roger', 'Romeo', 'Ronald', 'Ross', 'Rowan', 'Rox', 'Royal', 'Ruben', 'Rudykins', 'Ruffles', 'Rufus', 'Rumbles', 'Ryder', 'Saber Tooth', 'Saint Paw', 'Salt', 'Salty', 'Sam', 'Sammy', 'Sancho', 'Sargent', 'Sasquach', 'Sassafrass', 'Scamper', 'Scooter', 'Scorpio', 'Scrapper', 'Scruffy', 'Scuba', 'Seiko', 'Seinfeld', 'Seinfield', 'Sergei', 'Seuss', 'Shadow', 'Shake', 'Shakespeare', 'Shamrock', 'Shaq', 'Sherbert', 'Shoe', 'Silver', 'Silverfoot', 'Silvestor', 'Simpson', 'Skeeter', 'Skippy', 'Smasher', 'Smithers', 'Smokey', 'Smoky', 'Smores', 'Smudge', 'Sneaky Pete', 'Snickers', 'Snickerz', 'Snoopy', 'Snoppy', 'Snowball', 'Snowdrop', 'Snowflake', 'Snowman', 'Snowy', 'Snuggle Bun', 'Snuggles', 'Socks', 'Socrates', 'Soldier', 'Solomon', 'Sonny', 'Sorbet', 'Spades', 'Spaghetti', 'Sparky', 'Spartacus', 'Speedy', 'Spice', 'Spike', 'Spike Spiegal', 'Spooky', 'Spot', 'Sprinkles', 'Squeakle', 'Squeaky', 'Squirt', 'Sterling', 'Stitch', 'Stormie', 'Stuart', 'Sugar', 'Sundance', 'Sunny', 'Taco', 'Talbot', 'Tarzan', 'Taylor', 'Tebow', 'Teddy', 'Tequila', 'Terminator', 'Thaddeus', 'The Brain', 'The Doctor', 'The Duke', 'Theo', 'Theodore', 'Thom Thom', 'Thumper', 'Thunder', 'Tiberius', 'Tiger', 'Tigger', 'Timothy', 'Tinker', 'Titan', 'Toby', 'Toffee', 'Toffy', 'Tolstoy', 'Tom', 'Tomba', 'Tomtom', 'Topaz', 'Trance', 'Treacle', 'Trekky', 'Trembles', 'Tricky', 'Tripper', 'Truman', 'Tubby', 'Tucker', 'Tudball', 'Turbo', 'Tuts', 'Tuxedo', 'Tweedle Dee', 'Tweedle Dum', 'Twinkie', 'Tybalt', 'Tyler', 'Ulysses', 'Uncle Buster', 'Usher', 'Valmont', 'Van Gogh', 'Van Morrison', 'Vanilla', 'Vernon', 'Vic', 'Vince', 'Vincent', 'Voltaire', 'Wabbit', 'Wadsworth', 'Waffles', 'Waldo', 'Walnut', 'Whisky', 'Whitman', 'Widget', 'Wildling', 'Wilfred', 'Willie', 'Wizzy', 'Wolfie', 'Woody', 'Wozza', 'Wycliff', 'Xander', 'Xavier', 'Yeltsin', 'Yoda', 'Yogi', 'Yoshi', 'Young Fella', 'Yugi', 'Yukon', 'Zachary', 'Zanku', 'Zanzibar', 'Zen', 'Zepplin', 'Zeppo', 'Zero', 'Zeus', 'Zig Zag', 'Zigfried', 'Zippy', 'Zoe', 'Zoe-Zo', 'Zooter', 'Zorro', 'Zypp'];
  const nm2 = ['Malyumpkin', '8-ball', 'Abagail', 'Abba', 'Abbie', 'Abby', 'Abel', 'Aberdeen', 'Abigail', 'Able', 'Abraham', 'Ace', 'Acer', 'Achemy', 'Acker', 'Acura', 'Adagio', 'Adam', 'Adele', 'Adelina', 'Admiral', 'Adolfina', 'Adoni', 'Adriana', 'Agatha', 'Aki', 'Aladdin', 'Alaska', 'Alastair', 'Alex', 'Alexander', 'Alexandra', 'Alexandrea', 'Alexandria', 'Alf', 'Alfi', 'Alfie', 'Alibi', 'Alice', 'Allegro', 'Alli', 'Allie', 'Aloysius', 'Alpaca', 'Alpine', 'Amaretto', 'Amaya', 'Amazon', 'Amber', 'Ambrosia', 'Amethyst', 'Amore', 'Amorette', 'Amy', 'Anabell', 'Anais', 'Anastasia', 'Andrea', 'Angel', 'Angelica', 'Angelina', 'Angus', 'Anna', 'Annie', 'Aphrodite', 'Apollo', 'Apple', 'Apricot', 'Archibald', 'Archie', 'Aria', 'Arial', 'Ariel', 'Arnie', 'Arnold', 'Asheton', 'Asia', 'Aspen', 'Asterix', 'Astra', 'Athena', 'Atlas', 'Audelia', 'Audrey', 'August', 'Augustus', 'Aurora', 'Auston', 'Autumn', 'Babe', 'Baby', 'Baby girl', 'Baldwin', 'Bam bam', 'Bambi', 'Bamboo', 'Banana', 'Bandi', 'Barbie', 'Barley', 'Barnaby', 'Barnacle', 'Barney', 'Bartholomew', 'Basil', 'Basket', 'Bazooka', 'Beatrice', 'Beauty', 'Bebe', 'Beefeater', 'Beethoven', 'Bell', 'Bella', 'Belle', 'Bentley', 'Bess', 'Bessie', 'Bessy', 'Bianca', 'Big Mama', 'Bijou', 'Binky', 'Biscuit', 'Bishop', 'Blackie', 'Blake', 'Blanco', 'Bliss', 'Blossom', 'Bobby', 'Bonita', 'Bonnie', 'Boo Boo', 'Boris', 'Boston', 'Boy', 'Brandy', 'Brie', 'Britannia', 'Brooke', 'Brownie', 'Bruce', 'Bruno', 'Bryani', 'Bubbles', 'Bud', 'Buffy', 'Bug', 'Bugatti', 'Bumper', 'Burgundy', 'Busker', 'Butler', 'Butter', 'Buttercup', 'Butternut', 'Butterscotch', 'Button', 'Buttons', 'Cadet', 'Cadi', 'Caesar', 'Cajun', 'Calia', 'Callie', 'Calvin', 'Calypso', 'Camembert', 'Camilla', 'Candi', 'Candice', 'Candy', 'Captain Marvel', 'Caramel', 'Carissa', 'Carolina', 'Carrie', 'Casanova', 'Cashew', 'Cass', 'Cassie', 'Cati', 'Cayenne', 'Celeste', 'Cha Cha', 'Chakra', 'Chanel', 'Chantilly', 'Charity', 'Charlie', 'Charlotte', 'Cheerio', 'Cheesecake', 'Chelsea', 'Chelsey', 'Chelsie', 'Cheri', 'Cherry', 'Cherub', 'Chic', 'Chichi', 'Chiclet', 'Chilli', 'China', 'Chloe', 'Chocolate', 'Cilla', 'Cinderella', 'Cinders', 'Cindy', 'Cinnamon', 'Claret', 'Claudia', 'Clementine', 'Cleopatra', 'Cloudy', 'Clover', 'Coco', 'Cocoa', 'Coffee', 'Colette', 'Collin', 'Colonel', 'Comet', 'Connie', 'Contessa', 'Cooboo', 'Cookie', 'Copper', 'Coral', 'Cornflake', 'Cotton', 'Cottonball', 'Cottontail', 'Countess', 'Courtney', 'Cous Cous', 'Cream Puff', 'Crimson', 'Crouton', 'Crystal', 'Cuddles', 'Cupcake', 'Curly', 'Cutie', 'Cutsie', 'Daffodil', 'Dahlia', 'Daisy', 'Daisy Duke', 'Dakota', 'Dandelion', 'Dani', 'Danni', 'Darcey', 'Darla', 'Darlene', 'Darling', 'Decaf', 'Delilah', 'Desiree', 'Destiny', 'Diamond', 'Dinah', 'Dinky', 'Dior', 'Dixie', 'Dolly', 'Dot', 'Duchess', 'Duffie', 'Eden', 'Ella', 'Elle', 'Ellie', 'Elsa', 'Elsi', 'Elvira', 'Emily', 'Emma', 'Emmy', 'Enya', 'Evita', 'Faith', 'Fancy', 'Fanjo', 'Felicity', 'Fern', 'Fifi', 'Flip-Flop', 'Flopsy', 'Florence', 'Flower', 'Fluffer', 'Fluffy', 'Fluffykins', 'Foo Foo', 'Fraidy', 'Francesca', 'Frankie', 'Friskie', 'Fudge', 'Furball', 'Furby', 'Gabby', 'Gavin', 'Gemini', 'Gemma', 'Genevere', 'Georgie', 'Gidget', 'Giggles', 'Gigi', 'Ginger', 'Ginny', 'Goblin', 'Godiva', 'Goldie', 'Goldilocks', 'Gomez', 'Gouda', 'Grace', 'Gracie', 'Gremlin', 'Grendel', 'Gringo', 'Gucci', 'Gugu', 'Gunther', 'Gypsy', 'Haanah', 'Hallie', 'Halo', 'Hamlet', 'Hannah', 'Harlow', 'Harmony', 'Harold', 'Harriet', 'Harry', 'Hayley', 'Hazel', 'Hector', 'Heidi', 'Herbie', 'Herman', 'Hilary', 'Hissy', 'Holly', 'Honey', 'Hope', 'Hosanna', 'Iris', 'Isabelle', 'Ivy', 'Jacina', 'Jackie O', 'Jada', 'Jade', 'Jake', 'Jana', 'Jane', 'Jasmine', 'Jazebel', 'Jazmin', 'Jeannie', 'Jelly Babe', 'Jemima', 'Jena', 'Jeners', 'Jersey', 'Jessee', 'Jessie', 'Jewel', 'Jilly', 'Jinxy', 'Jipsee', 'Jitterbug', 'Jiya', 'Jolie', 'Jordon', 'Joy', 'Judy', 'Julie', 'Juliet', 'Julina', 'June Bug', 'Juniper', 'Justine', 'Juya', 'Kabuki', 'Kacee', 'Kaelyn', 'Kalynn', 'Kasey Jo', 'Katie', 'Kava', 'Kelly', 'Kelsie-Jo', 'Kenya', 'Kia', 'Kimmy', 'Kiss Kiss', 'Kisses', 'Kivi', 'Kiwi', 'Koda', 'Kokomo', 'Kookaburra', 'Lacey', 'Lacy', 'Lady', 'Lady Luv', 'Ladybug', 'Latte', 'Lavender', 'Layla', 'Lcy', 'Leah', 'Lena', 'Lexus', 'Libby', 'Licorice', 'Lil One', 'Lilac', 'Lilli', 'Lillian', 'Lilly', 'Lily', 'Linda', 'Little Bit', 'Lola', 'Lollypop', 'Lorelei', 'Lori', 'Louisa', 'Lovebug', 'Lucille', 'Lulu', 'Luna', 'Macaulay', 'Macbeth', 'Mackenzie', 'Maddie', 'Magdalina', 'Magenta', 'Maggi', 'Majesty', 'Maren', 'Margie', 'Margo', 'Marigold', 'Marilyn', 'Marshmellow', 'Maryann', 'Maverick', 'McFluffy', 'McFluffykins', 'Meatloaf', 'Medley', 'Meeka', 'Meesha', 'Meg', 'Megan', 'Mercedes', 'Merry', 'Mertise', 'Micah', 'Midget', 'Millie', 'Milly', 'Mimi', 'Mimsy', 'Minal', 'Mini', 'Minsky', 'Minty', 'Miranda', 'Miss Lily', 'Miss Muffet', 'Miss Take', 'Misty', 'Mittens', 'Mitz', 'Mocha', 'Molly', 'Mon Ami', 'Mona', 'Monique', 'Montaine', 'Montana', 'Mopsy', 'Morgan', 'Morris', 'Morticia', 'Moses', 'Mozart', 'Muffin', 'Murphy', 'Mya', 'Mystique', 'Nadia', 'Nana', 'Nancy', 'Naomi', 'Napoleon', 'Natali', 'Natasha', 'Nathan', 'Nayla', 'Ned', 'Neddy', 'Neela', 'Nellie', 'Nibbles', 'Nijinsky', 'Nikia', 'Nitska', 'Noelle', 'Noisette', 'Nokky', 'Noni', 'Noodle Bug', 'Noodles', 'Nugget', 'Nutmeg', 'Oasis', 'Oatmeal', 'Obelix', 'Odette', 'Olga', 'Olive', 'Olivia', 'Olivier', 'Orlando', 'Ozwald', 'Pablo', 'Pacino', 'Paddington', 'Paddy', 'Paisley', 'Pancake', 'Pandora', 'Pansy', 'Paprika', 'Paris', 'Patch', 'Patches', 'Peaches', 'Peachy', 'Peanut', 'Peapod', 'Pearl', 'Pebbles', 'Peepers', 'Peggy', 'Penelope', 'Penny', 'Peppa', 'Pepsi', 'Percy', 'Periwinkle', 'Petra', 'Petunia', 'Phebe', 'Piglet', 'Pip', 'Piper', 'Pixie', 'Polly', 'Pookie', 'Popcorn', 'Poppins', 'Poppy', 'Precious', 'Princess', 'Priscilla', 'Providence', 'Pudding', 'Puddles', 'Pumpkin', 'Quacker', 'Queenie', 'Rachel', 'Radiance', 'Ramsey', 'Razzie', 'Reba', 'Rebecca', 'Regan', 'Renee', 'Ribbon', 'Rizzo', 'Robertia', 'Rocco', 'Roni', 'Ronnie', 'Rose', 'Rosebud', 'Rosemary', 'Rosetta', 'Rosie', 'Ross', 'Rossini', 'Rosy', 'Rowan', 'Rowena', 'Roxanne', 'Roxy', 'Royal', 'Roz', 'Ru�Bella', 'Ruben', 'Ruby', 'Ruby Jean', 'Ruffles', 'Rufus', 'Ruth', 'Ruthie', 'Ryanne', 'Sabrina', 'Sabrina Snow', 'Sadie', 'Sahara', 'Sally', 'Salty', 'Sam', 'Sami Girl', 'Sammy', 'Sandie', 'Sandy', 'Sapphire', 'Sarafina', 'Sasha', 'Sassy', 'Sassy Pants', 'Satine', 'Savannah', 'Scampi', 'Scarlet', 'Scruffy', 'Scuba', 'Selby', 'Selena', 'Sephora', 'Serena', 'Serenity', 'Shawnee', 'Sheena', 'Sheridan', 'Shirley Temple', 'Shona', 'Short Cake', 'Sierra', 'Silly Sidney', 'Silvie', 'Sissy', 'Skittles', 'Skyler', 'Slippers', 'Smithers', 'Smokey', 'Smudge', 'Snickerdoodle', 'Snickers', 'Snoppy', 'Snowflake', 'Snowman', 'Snowy', 'Socrates', 'Sofia', 'Soldier', 'Solomon', 'Sophia', 'Sophie', 'Sorbet', 'Spades', 'Sparkles', 'Spazzy', 'Spooky', 'Spot', 'Sprinkles', 'Spunkie Girl', 'Starbuck', 'Steletto', 'Stella', 'Stevie', 'Stormie', 'Stormy', 'Strawberry', 'Stripe', 'Suga', 'Sugar', 'Suzie Q', 'Sweet Pea', 'Sweetie', 'Sweetie Pie', 'Sweetpea', 'Swiss Miss', 'Symphony', 'Tabitha', 'Taffy', 'Talia', 'Tammy', 'Tashie', 'Tawney', 'Teela', 'Teeney', 'Tequila', 'Tess', 'Tessa', 'Thelma', 'Thumbelina', 'Thunder', 'Tia Maria', 'Tibby', 'Tiddly Wink', 'Tiffanie', 'Tigger', 'Tilly', 'Tina', 'Tinker Bell', 'Tinker Belle', 'Tinkerbell', 'Tinsel', 'Tipsy', 'Titan', 'Toast', 'Toffee', 'Tomba', 'Tomtom', 'Toots', 'Tori', 'Tortelini', 'Tottie', 'Tracy', 'Treacle', 'Tricky', 'Triscuit', 'Trudi', 'Truffle', 'Tula Rose', 'Tulip', 'Tumble', 'Tutti Fruti', 'Tweetie Pie', 'Tweety', 'Twig', 'Twinkie', 'Twinkle', 'Twinkle Toes', 'Una', 'Val', 'Valentine', 'Vanilla', 'Velvet', 'Venus', 'Vera', 'Vicky', 'Violet', 'Vivica', 'Waffles', 'Walnut', 'Wana', 'Wanda', 'Wendy', 'Whisky', 'Whoopie', 'Widget', 'Willow', 'Winnie', 'Xena', 'Yoda', 'Yvonne', 'Zadora', 'Zeldabar', 'Zia Marie', 'Zig Zag', 'Zoe', 'Zoey', 'Zola', 'Zula', 'Zuzu'];


  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
