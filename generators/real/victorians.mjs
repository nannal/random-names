function victorians() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const namesMale = ['Aaron', 'Abe', 'Abel', 'Abner', 'Abraham', 'Abram', 'Ada', 'Adam', 'Addie', 'Addison', 'Adelbert', 'Admiral', 'Adolph', 'Adolphus', 'Adrian', 'Al', 'Alan', 'Albert', 'Alberto', 'Albin', 'Alden', 'Alec', 'Alex', 'Alexander', 'Alf', 'Alfonso', 'Alford', 'Alfred', 'Alfredo', 'Alice', 'Allan', 'Allen', 'Allie', 'Allison', 'Alma', 'Alois', 'Alonza', 'Alonzo', 'Aloysius', 'Alpha', 'Alphonse', 'Alphonso', 'Alton', 'Alva', 'Alvah', 'Alvie', 'Alvin', 'Alvis', 'Ambrose', 'Amos', 'Anderson', 'Andres', 'Andrew', 'Andy', 'Angelo', 'Angus', 'Anna', 'Annie', 'Ansel', 'Anson', 'Anthony', 'Anton', 'Antone', 'Antonio', 'Arch', 'Archibald', 'Archie', 'Arley', 'Arlie', 'Armand', 'Arnold', 'Aron', 'Art', 'Arther', 'Arthur', 'Artie', 'Arvid', 'Asa', 'Ashley', 'Aubrey', 'August', 'Augustine', 'Augustus', 'Austin', 'Avery', 'Axel', 'Bailey', 'Barney', 'Bart', 'Bartholomew', 'Barton', 'Basil', 'Baxter', 'Bee', 'Ben', 'Benedict', 'Benjaman', 'Benjamin', 'Benjamine', 'Benjiman', 'Bennett', 'Bennie', 'Benny', 'Benton', 'Bernard', 'Bernhard', 'Bernice', 'Bernie', 'Berry', 'Bert', 'Bertha', 'Bertie', 'Bertram', 'Bertrand', 'Bessie', 'Beverly', 'Bill', 'Billie', 'Billy', 'Bishop', 'Blaine', 'Blair', 'Bob', 'Bonnie', 'Booker', 'Boss', 'Boyd', 'Bradford', 'Bradley', 'Brady', 'Brice', 'Brooks', 'Brown', 'Bruce', 'Bruno', 'Bryan', 'Bryant', 'Buck', 'Bud', 'Buford', 'Burl', 'Burley', 'Burr', 'Burrell', 'Burt', 'Burton', 'Buster', 'Butler', 'Byron', 'Cal', 'Caleb', 'Calvin', 'Carey', 'Carl', 'Carleton', 'Carlos', 'Carlton', 'Carrie', 'Carroll', 'Carson', 'Carter', 'Cary', 'Casper', 'Cecil', 'Charles', 'Charley', 'Charlie', 'Chas', 'Chauncey', 'Chesley', 'Chester', 'Chris', 'Christ', 'Christian', 'Christopher', 'Cicero', 'Clair', 'Claire', 'Clara', 'Clarance', 'Clare', 'Clarence', 'Clark', 'Claud', 'Claude', 'Clay', 'Clayton', 'Clem', 'Clement', 'Cleo', 'Cletus', 'Cleve', 'Cleveland', 'Cliff', 'Clifford', 'Clifton', 'Clint', 'Clinton', 'Clovis', 'Cloyd', 'Clyde', 'Coleman', 'Colonel', 'Columbus', 'Connie', 'Conrad', 'Corbett', 'Cornelious', 'Cornelius', 'Courtney', 'Coy', 'Crawford', 'Curley', 'Curtis', 'Cyril', 'Cyrus', 'Dale', 'Dallas', 'Dalton', 'Damon', 'Dan', 'Dana', 'Daniel', 'Darrell', 'Dave', 'David', 'Davis', 'Dayton', 'Dean', 'Dee', 'Delbert', 'Dell', 'Delmar', 'Denis', 'Dennis', 'Denver', 'Dewey', 'Dewitt', 'Dexter', 'Dick', 'Dillard', 'Doc', 'Dock', 'Doctor', 'Dominic', 'Dominick', 'Don', 'Donald', 'Donnie', 'Dorsey', 'Douglas', 'Dow', 'Doyle', 'Dudley', 'Duke', 'Duncan', 'Dwight', 'Earl', 'Earle', 'Early', 'Earnest', 'Ed', 'Edd', 'Eddie', 'Edgar', 'Edison', 'Edith', 'Edmond', 'Edmund', 'Edna', 'Eduardo', 'Edward', 'Edwin', 'Egbert', 'Elbert', 'Elder', 'Eldon', 'Eldridge', 'Eli', 'Elias', 'Elie', 'Eliga', 'Eligah', 'Elige', 'Elijah', 'Elisha', 'Elizabeth', 'Ella', 'Ellie', 'Elliot', 'Elliott', 'Ellis', 'Ellsworth', 'Ellwood', 'Elmer', 'Elmo', 'Elmore', 'Elsie', 'Elton', 'Elvin', 'Elvis', 'Elwin', 'Elwood', 'Elza', 'Elzie', 'Emanuel', 'Emerson', 'Emery', 'Emil', 'Emile', 'Emma', 'Emmet', 'Emmett', 'Emmit', 'Emmitt', 'Emory', 'Ennis', 'Enoch', 'Enos', 'Ephraim', 'Ephriam', 'Eric', 'Erick', 'Ernest', 'Ernie', 'Ernst', 'Ervin', 'Erwin', 'Essie', 'Esther', 'Ethel', 'Eugene', 'Eva', 'Evan', 'Evans', 'Everett', 'Everette', 'Evert', 'Ezekiel', 'Ezra', 'Fate', 'Fay', 'Felipe', 'Felix', 'Ferd', 'Ferdinand', 'Finis', 'Finley', 'Fitzhugh', 'Fletcher', 'Florence', 'Florian', 'Floyd', 'Ford', 'Forest', 'Forrest', 'Foster', 'Frances', 'Francis', 'Francisco', 'Frank', 'Franklin', 'Fred', 'Freddie', 'Frederic', 'Frederick', 'Fredrick', 'Freeman', 'French', 'Fritz', 'Furman', 'Gabe', 'Gabriel', 'Gail', 'Gale', 'Garfield', 'Garland', 'Garnett', 'Garrett', 'Gary', 'Gaston', 'Gaylord', 'Gene', 'General', 'Geo', 'George', 'Gerald', 'Gerard', 'Gerhard', 'Gertrude', 'Gilbert', 'Giles', 'Glen', 'Glenn', 'Glover', 'Godfrey', 'Golden', 'Gordon', 'Grace', 'Grady', 'Graham', 'Grant', 'Granville', 'Green', 'Gregorio', 'Gregory', 'Grover', 'Guadalupe', 'Gus', 'Guss', 'Gust', 'Gustaf', 'Gustav', 'Gustave', 'Guy', 'Hal', 'Hallie', 'Hamilton', 'Hamp', 'Hampton', 'Hans', 'Hardy', 'Harlan', 'Harley', 'Harmon', 'Harold', 'Harper', 'Harris', 'Harrison', 'Harry', 'Harve', 'Harvey', 'Haskell', 'Hattie', 'Hayden', 'Hayes', 'Hayward', 'Haywood', 'Hazel', 'Heber', 'Hector', 'Helen', 'Helmer', 'Henderson', 'Henery', 'Henry', 'Herbert', 'Herman', 'Hermon', 'Herschel', 'Hershel', 'Hezekiah', 'Hillard', 'Hilliard', 'Hilton', 'Hiram', 'Hobart', 'Hobert', 'Hobson', 'Hollis', 'Homer', 'Horace', 'Hosea', 'Houston', 'Howard', 'Howell', 'Hoyt', 'Hubert', 'Hudson', 'Huey', 'Hugh', 'Hughie', 'Hugo', 'Hunter', 'Hurley', 'Hyman', 'Ida', 'Ignacio', 'Ignatius', 'Ike', 'Ira', 'Irene', 'Irl', 'Irvin', 'Irving', 'Irwin', 'Isaac', 'Isadore', 'Isaiah', 'Isham', 'Isiah', 'Isidore', 'Isom', 'Israel', 'Issac', 'Ivan', 'Ivey', 'Ivory', 'Ivy', 'Jack', 'Jackson', 'Jacob', 'Jake', 'James', 'Jason', 'Jasper', 'Jay', 'Jean', 'Jeff', 'Jefferson', 'Jennings', 'Jeremiah', 'Jerome', 'Jerry', 'Jess', 'Jesse', 'Jessie', 'Jesus', 'Jewel', 'Jewell', 'Jim', 'Jimmie', 'Jimmy', 'Jodie', 'Joe', 'Joel', 'John', 'Johnie', 'Johnnie', 'Johnny', 'Johnson', 'Jonah', 'Jonas', 'Jonathan', 'Jones', 'Jonnie', 'Jordan', 'Jose', 'Joseph', 'Josh', 'Joshua', 'Josiah', 'Juan', 'Judge', 'Judson', 'Jule', 'Jules', 'Julian', 'Julius', 'June', 'Junior', 'Junius', 'Justin', 'Karl', 'Keith', 'Kelly', 'Kenneth', 'King', 'Kirby', 'Kirk', 'Kyle', 'Lacy', 'Lafayette', 'Lamar', 'Lambert', 'Larkin', 'Larry', 'Laura', 'Laurence', 'Laverne', 'Lawrence', 'Lawson', 'Leander', 'Lee', 'Leigh', 'Leland', 'Lem', 'Lemon', 'Lemuel', 'Len', 'Lenard', 'Lennie', 'Leo', 'Leon', 'Leonard', 'Leopold', 'Leroy', 'Leslie', 'Lester', 'Levi', 'Levy', 'Lew', 'Lewis', 'Lige', 'Lillian', 'Lillie', 'Lincoln', 'Lindsay', 'Lindsey', 'Linwood', 'Lionel', 'Llewellyn', 'Lloyd', 'Logan', 'Lon', 'Lonie', 'Lonnie', 'Lonzo', 'Loren', 'Lorenzo', 'Lou', 'Louie', 'Louis', 'Louise', 'Lowell', 'Loy', 'Loyal', 'Loyd', 'Lucas', 'Lucian', 'Lucien', 'Lucious', 'Lucius', 'Ludwig', 'Luis', 'Luke', 'Lum', 'Luther', 'Lyle', 'Lyman', 'Lynn', 'Mabel', 'Mac', 'Mack', 'Madison', 'Mahlon', 'Major', 'Malcolm', 'Manley', 'Mannie', 'Manuel', 'Marcellus', 'Marcus', 'Margaret', 'Marie', 'Marion', 'Mark', 'Marshall', 'Mart', 'Martha', 'Martin', 'Marvin', 'Mary', 'Mason', 'Mat', 'Mathew', 'Mathias', 'Matt', 'Matthew', 'Mattie', 'Maude', 'Maurice', 'Max', 'Maxie', 'Maxwell', 'May', 'Maynard', 'Mckinley', 'Melton', 'Melville', 'Melvin', 'Merl', 'Merle', 'Merlin', 'Merrill', 'Merritt', 'Merton', 'Mervin', 'Meyer', 'Michael', 'Micheal', 'Miguel', 'Mike', 'Mildred', 'Miles', 'Milford', 'Millard', 'Miller', 'Milo', 'Milton', 'Minnie', 'Minor', 'Mitchel', 'Mitchell', 'Monroe', 'Mont', 'Morgan', 'Morris', 'Mortimer', 'Morton', 'Mose', 'Moses', 'Murphy', 'Murray', 'Murry', 'Myles', 'Myron', 'Myrtle', 'Napoleon', 'Nat', 'Nathan', 'Nathaniel', 'Neal', 'Ned', 'Neil', 'Nellie', 'Nels', 'Nelson', 'Newell', 'Newman', 'Newt', 'Newton', 'Nicholas', 'Nick', 'Noah', 'Noble', 'Noel', 'Nolan', 'Norbert', 'Norman', 'Norris', 'Oakley', 'Obie', 'Ocie', 'Odell', 'Odie', 'Odis', 'Okey', 'Olaf', 'Ole', 'Olen', 'Olin', 'Oliver', 'Ollie', 'Omar', 'Omer', 'Ora', 'Oral', 'Oran', 'Oren', 'Orie', 'Orin', 'Orion', 'Orlando', 'Orlo', 'Orrin', 'Orval', 'Orville', 'Oscar', 'Ossie', 'Oswald', 'Otha', 'Otho', 'Otis', 'Ottis', 'Otto', 'Owen', 'Pablo', 'Palmer', 'Paris', 'Park', 'Parker', 'Pat', 'Patrick', 'Paul', 'Pearl', 'Pedro', 'Percival', 'Percy', 'Perley', 'Perry', 'Pete', 'Peter', 'Peyton', 'Phil', 'Philip', 'Phillip', 'Pierce', 'Pierre', 'Pink', 'Pleas', 'Pleasant', 'Porter', 'Preston', 'Price', 'Prince', 'Quincy', 'Rafael', 'Raleigh', 'Ralph', 'Ramon', 'Randall', 'Randolph', 'Ransom', 'Raphael', 'Ray', 'Raymond', 'Reed', 'Reese', 'Reginald', 'Reid', 'Reinhold', 'Rene', 'Reuben', 'Rex', 'Richard', 'Richmond', 'Riley', 'Robert', 'Rocco', 'Roderick', 'Rodney', 'Roe', 'Roger', 'Rogers', 'Roland', 'Rolla', 'Rolland', 'Rollie', 'Rollin', 'Roman', 'Romeo', 'Ronald', 'Roosevelt', 'Roscoe', 'Ross', 'Roswell', 'Rowland', 'Roy', 'Royal', 'Royce', 'Rube', 'Ruben', 'Rubin', 'Ruby', 'Rudolph', 'Ruel', 'Rufus', 'Rupert', 'Rush', 'Russel', 'Russell', 'Ruth', 'Salvatore', 'Sam', 'Sammie', 'Sampson', 'Samuel', 'Sanders', 'Sanford', 'Santiago', 'Saul', 'Scott', 'Selmer', 'Seth', 'Seymour', 'Shelby', 'Shelly', 'Shelton', 'Sherman', 'Shirley', 'Sid', 'Sidney', 'Silas', 'Sim', 'Simeon', 'Simon', 'Smith', 'Sol', 'Solomon', 'Son', 'Spencer', 'Spurgeon', 'Squire', 'Stacy', 'Stanley', 'Stephen', 'Sterling', 'Steve', 'Steven', 'Stewart', 'Stuart', 'Sullivan', 'Sumner', 'Sydney', 'Sylvester', 'Talmage', 'Taylor', 'Ted', 'Terrence', 'Terry', 'Thad', 'Thaddeus', 'Theo', 'Theodore', 'Theron', 'Thomas', 'Thornton', 'Thurman', 'Tillman', 'Tim', 'Timothy', 'Tobe', 'Tom', 'Tomas', 'Tommie', 'Tommy', 'Toney', 'Tony', 'Tracy', 'Travis', 'Troy', 'Truman', 'Turner', 'Ulysses', 'Unknown', 'Urban', 'Valentine', 'Van', 'Vance', 'Vaughn', 'Vern', 'Verne', 'Verner', 'Vernie', 'Vernon', 'Vester', 'Victor', 'Vincent', 'Virgil', 'Vivian', 'Wade', 'Waldo', 'Walker', 'Wallace', 'Walter', 'Walton', 'Ward', 'Warner', 'Warren', 'Wash', 'Washington', 'Watson', 'Waverly', 'Wayman', 'Wayne', 'Webb', 'Webster', 'Weldon', 'Wellington', 'Wendell', 'Wesley', 'West', 'Wheeler', 'Wilber', 'Wilbert', 'Wilbur', 'Wilburn', 'Wiley', 'Wilford', 'Wilfred', 'Will', 'Willam', 'Willard', 'William', 'Williams', 'Willie', 'Willis', 'Wilmer', 'Wilson', 'Wilton', 'Winfield', 'Winfred', 'Winston', 'Wm', 'Wong', 'Worth', 'Wright', 'Wyatt', 'Wylie', 'Young', 'Zack', 'Zeb', 'Zollie'];
  const namesFemale = ['Abbie', 'Abigail', 'Ada', 'Adah', 'Adaline', 'Adda', 'Addie', 'Adela', 'Adelaide', 'Adele', 'Adelia', 'Adelina', 'Adeline', 'Adell', 'Adella', 'Adelle', 'Adline', 'Agatha', 'Agnes', 'Aileen', 'Aimee', 'Alberta', 'Albertha', 'Albertina', 'Albertine', 'Albina', 'Alda', 'Alene', 'Aletha', 'Alfreda', 'Alice', 'Alicia', 'Alida', 'Aline', 'Allene', 'Allie', 'Alma', 'Almeda', 'Almira', 'Alpha', 'Alta', 'Altha', 'Althea', 'Alva', 'Alvena', 'Alverta', 'Alvina', 'Alyce', 'Amalia', 'Amanda', 'Amber', 'Amelia', 'America', 'Amie', 'Amy', 'Ana', 'Anastasia', 'Andrea', 'Angela', 'Angelina', 'Angeline', 'Angie', 'Anita', 'Ann', 'Anna', 'Annabel', 'Annabell', 'Annabelle', 'Anne', 'Anner', 'Annetta', 'Annette', 'Annie', 'Annis', 'Antoinette', 'Antonette', 'Antonia', 'Ara', 'Ardella', 'Arie', 'Arizona', 'Arlene', 'Arlie', 'Arline', 'Arrie', 'Artie', 'Arvilla', 'Atha', 'Audie', 'Audra', 'Audrey', 'Augusta', 'Augustine', 'Aurelia', 'Aurora', 'Aurore', 'Ava', 'Avis', 'Barbara', 'Beatrice', 'Beaulah', 'Bell', 'Bella', 'Belle', 'Belva', 'Bennie', 'Berdie', 'Berenice', 'Bernadette', 'Bernadine', 'Bernice', 'Berniece', 'Berta', 'Bertha', 'Bertie', 'Beryl', 'Bess', 'Besse', 'Bessie', 'Beth', 'Bethel', 'Betsy', 'Bettie', 'Betty', 'Beula', 'Beulah', 'Billie', 'Birdie', 'Birtha', 'Birtie', 'Blanch', 'Blanche', 'Bobbie', 'Bonnie', 'Bridget', 'Buena', 'Bulah', 'Callie', 'Camilla', 'Camille', 'Carmela', 'Carmella', 'Carmen', 'Carol', 'Carolina', 'Caroline', 'Carolyn', 'Carrie', 'Cassie', 'Catharine', 'Catherine', 'Cathrine', 'Cathryn', 'Cecelia', 'Cecil', 'Cecile', 'Cecilia', 'Celeste', 'Celestine', 'Celia', 'Celina', 'Charity', 'Charles', 'Charlie', 'Charlotte', 'Cherry', 'Chloe', 'Christena', 'Christie', 'Christina', 'Christine', 'Claire', 'Clara', 'Clare', 'Claribel', 'Clarice', 'Clarissa', 'Claudia', 'Claudie', 'Claudine', 'Clementine', 'Clemmie', 'Cleo', 'Clifford', 'Clora', 'Clyde', 'Concepcion', 'Concetta', 'Connie', 'Constance', 'Consuelo', 'Cora', 'Coral', 'Corda', 'Cordelia', 'Cordia', 'Cordie', 'Corene', 'Corine', 'Corinne', 'Cornelia', 'Corrie', 'Corrine', 'Crystal', 'Cynthia', 'Dagmar', 'Daisy', 'Daphne', 'Deborah', 'Delia', 'Delilah', 'Dell', 'Della', 'Delma', 'Delpha', 'Delphia', 'Delphine', 'Delta', 'Dena', 'Dessie', 'Dewey', 'Diana', 'Dicie', 'Dillie', 'Dixie', 'Docia', 'Dollie', 'Dolly', 'Dolores', 'Dona', 'Donie', 'Donna', 'Donnie', 'Dora', 'Dorcas', 'Doris', 'Dorothea', 'Dorothy', 'Doshie', 'Dottie', 'Dovie', 'Drucilla', 'Dulcie', 'Easter', 'Ebba', 'Eda', 'Eddie', 'Edith', 'Edna', 'Edwina', 'Edyth', 'Edythe', 'Effie', 'Eileen', 'Elaine', 'Elda', 'Eldora', 'Eleanor', 'Eleanora', 'Eleanore', 'Electa', 'Elena', 'Elenora', 'Elfrieda', 'Elinor', 'Elisa', 'Elisabeth', 'Elise', 'Eliza', 'Elizabeth', 'Elizebeth', 'Ella', 'Ellen', 'Ellie', 'Elma', 'Elmira', 'Elna', 'Elnora', 'Eloise', 'Elsa', 'Elsie', 'Elta', 'Elva', 'Elvera', 'Elvie', 'Elvina', 'Elvira', 'Emelia', 'Emeline', 'Emilia', 'Emilie', 'Emily', 'Emma', 'Emmer', 'Emmie', 'Enid', 'Enola', 'Era', 'Erie', 'Erma', 'Erna', 'Ernestine', 'Essie', 'Esta', 'Estell', 'Estella', 'Estelle', 'Ester', 'Esther', 'Etha', 'Ethel', 'Ethelyn', 'Ethyl', 'Etta', 'Ettie', 'Eudora', 'Eugenia', 'Eugenie', 'Eula', 'Eulah', 'Eulalia', 'Eulalie', 'Euna', 'Eunice', 'Eura', 'Eva', 'Evalyn', 'Evangeline', 'Eve', 'Evelina', 'Evelyn', 'Evie', 'Exie', 'Fae', 'Fairy', 'Faith', 'Fannie', 'Fanny', 'Fay', 'Faye', 'Felicia', 'Fern', 'Ferne', 'Filomena', 'Fleta', 'Flo', 'Flora', 'Florance', 'Florence', 'Florida', 'Florine', 'Florrie', 'Flossie', 'Floy', 'Frances', 'Francis', 'Francisca', 'Frank', 'Frankie', 'Fred', 'Freda', 'Freddie', 'Freeda', 'Freida', 'Frieda', 'Frona', 'Fronie', 'Gail', 'Garnet', 'Garnett', 'Gay', 'Gena', 'Gene', 'Geneva', 'Genevieve', 'Genie', 'George', 'Georgia', 'Georgiana', 'Georgianna', 'Georgie', 'Georgina', 'Geraldine', 'Gertie', 'Gertrude', 'Gladys', 'Glenn', 'Glenna', 'Glennie', 'Golda', 'Golden', 'Goldia', 'Goldie', 'Grace', 'Gracie', 'Grayce', 'Greta', 'Gretchen', 'Guadalupe', 'Gussie', 'Gusta', 'Gwendolyn', 'Hallie', 'Hanna', 'Hannah', 'Harriet', 'Harriett', 'Harriette', 'Hassie', 'Hattie', 'Hazel', 'Hazle', 'Hedwig', 'Helen', 'Helena', 'Helene', 'Helga', 'Hellen', 'Helma', 'Henrietta', 'Henriette', 'Henry', 'Hermina', 'Hermine', 'Hertha', 'Hessie', 'Hester', 'Hettie', 'Hilda', 'Hildegard', 'Hildegarde', 'Hildred', 'Hildur', 'Hilma', 'Honora', 'Hope', 'Hortense', 'Hulda', 'Huldah', 'Icie', 'Icy', 'Ida', 'Idell', 'Idella', 'Ila', 'Ima', 'Imogene', 'Ina', 'India', 'Ines', 'Inez', 'Inga', 'Iola', 'Iona', 'Ione', 'Ira', 'Irene', 'Iris', 'Irma', 'Isa', 'Isabel', 'Isabell', 'Isabella', 'Isabelle', 'Iva', 'Ivah', 'Ivy', 'Izetta', 'Izora', 'James', 'Jane', 'Janet', 'Janette', 'Janie', 'Jannie', 'Jean', 'Jeanette', 'Jeanie', 'Jeanne', 'Jeannette', 'Jennie', 'Jenny', 'Jesse', 'Jessica', 'Jessie', 'Jettie', 'Jewel', 'Jewell', 'Jimmie', 'Jo', 'Joan', 'Joanna', 'Joe', 'Johanna', 'John', 'Johnie', 'Johnnie', 'Josefa', 'Joseph', 'Josephine', 'Josie', 'Jossie', 'Joy', 'Joyce', 'Juana', 'Juanita', 'Judith', 'Julia', 'Julie', 'Juliet', 'Juliette', 'June', 'Justine', 'Kate', 'Katharine', 'Katherine', 'Katheryn', 'Kathleen', 'Kathrine', 'Kathryn', 'Kathryne', 'Katie', 'Kattie', 'Katy', 'Kay', 'Kittie', 'Kitty', 'Kizzie', 'Lacy', 'Lala', 'Lassie', 'Laura', 'Lauretta', 'Lavada', 'Laverne', 'Lavina', 'Lavinia', 'Lea', 'Leah', 'Leanna', 'Leatha', 'Leda', 'Lee', 'Leila', 'Lela', 'Lelah', 'Lelia', 'Lella', 'Lena', 'Lenna', 'Lennie', 'Lenora', 'Lenore', 'Leo', 'Leola', 'Leona', 'Leone', 'Leonie', 'Leonora', 'Leonore', 'Leontine', 'Leora', 'Leota', 'Lera', 'Leslie', 'Lessie', 'Leta', 'Letha', 'Letitia', 'Lettie', 'Lexie', 'Libbie', 'Libby', 'Lida', 'Liddie', 'Lila', 'Lilah', 'Lilian', 'Lilla', 'Lillian', 'Lillie', 'Lilly', 'Lily', 'Lina', 'Linda', 'Linnie', 'Lissie', 'Liza', 'Lizzie', 'Lois', 'Lola', 'Lollie', 'Loma', 'Lona', 'Lonie', 'Lonnie', 'Lora', 'Loraine', 'Lorena', 'Lorene', 'Loretta', 'Loretto', 'Lorna', 'Lorraine', 'Lottie', 'Lou', 'Louella', 'Louie', 'Louisa', 'Louise', 'Louvenia', 'Lovie', 'Lovina', 'Lucia', 'Lucie', 'Lucile', 'Lucille', 'Lucinda', 'Lucretia', 'Lucy', 'Ludie', 'Lue', 'Luella', 'Luetta', 'Luisa', 'Lula', 'Lular', 'Lulu', 'Luna', 'Lura', 'Lutie', 'Luvenia', 'Lyda', 'Lydia', 'Lyla', 'Mabel', 'Mabell', 'Mabelle', 'Mable', 'Macie', 'Madaline', 'Madeleine', 'Madeline', 'Madelyn', 'Madge', 'Madie', 'Mae', 'Magdalen', 'Magdalena', 'Magdalene', 'Maggie', 'Magnolia', 'Mahala', 'Malinda', 'Malissa', 'Mallie', 'Malvina', 'Mamie', 'Mammie', 'Manda', 'Mandy', 'Manila', 'Manuela', 'Marcella', 'Marcia', 'Margaret', 'Margaretta', 'Margarette', 'Margarita', 'Margery', 'Margie', 'Margret', 'Marguerite', 'Maria', 'Mariah', 'Marian', 'Marie', 'Marietta', 'Marion', 'Marjorie', 'Marjory', 'Martha', 'Martina', 'Marvel', 'Mary', 'Mathilda', 'Mathilde', 'Matie', 'Matilda', 'Mattie', 'Maud', 'Maude', 'Maudie', 'Maurine', 'Maxie', 'Maxine', 'May', 'Maybell', 'Maybelle', 'Maye', 'Mayme', 'Maymie', 'Mazie', 'Meda', 'Melba', 'Melinda', 'Melissa', 'Mellie', 'Melva', 'Melvina', 'Mercedes', 'Merle', 'Mertie', 'Meta', 'Metta', 'Mettie', 'Mildred', 'Millicent', 'Millie', 'Mina', 'Minerva', 'Minna', 'Minnie', 'Minta', 'Mintie', 'Miriam', 'Missouri', 'Mittie', 'Mollie', 'Molly', 'Mona', 'Monica', 'Monnie', 'Mossie', 'Mozelle', 'Muriel', 'Myra', 'Myrl', 'Myrle', 'Myrna', 'Myrta', 'Myrtice', 'Myrtie', 'Myrtis', 'Myrtle', 'Nadine', 'Nan', 'Nancy', 'Nanie', 'Nannie', 'Naomi', 'Natalie', 'Nealie', 'Nell', 'Nella', 'Nelle', 'Nellie', 'Nena', 'Neta', 'Nettie', 'Neva', 'Nevada', 'Nina', 'Nita', 'Nola', 'Nona', 'Nonie', 'Nora', 'Norah', 'Norine', 'Norma', 'Nova', 'Novella', 'Ocie', 'Octavia', 'Oda', 'Odelia', 'Odessa', 'Odie', 'Odile', 'Ola', 'Olevia', 'Olga', 'Olive', 'Olivia', 'Ollie', 'Oma', 'Omie', 'Ona', 'Onie', 'Opal', 'Ophelia', 'Ora', 'Orpha', 'Osa', 'Osie', 'Ossie', 'Ottie', 'Ottilia', 'Ottilie', 'Ouida', 'Ova', 'Pansy', 'Paralee', 'Patricia', 'Patsy', 'Pattie', 'Paula', 'Paulina', 'Pauline', 'Pearl', 'Pearle', 'Pearlie', 'Peggy', 'Petra', 'Phebe', 'Philomena', 'Phoebe', 'Phyllis', 'Pinkie', 'Pollie', 'Polly', 'Priscilla', 'Prudence', 'Queen', 'Queenie', 'Rachael', 'Rachel', 'Rae', 'Ramona', 'Ray', 'Reba', 'Rebecca', 'Regina', 'Rella', 'Rena', 'Ressie', 'Reta', 'Retha', 'Retta', 'Reva', 'Rhea', 'Rhoda', 'Rilla', 'Rita', 'Robbie', 'Robert', 'Roberta', 'Roma', 'Rosa', 'Rosalee', 'Rosalia', 'Rosalie', 'Rosalind', 'Rosamond', 'Rosanna', 'Rose', 'Rosella', 'Rosemary', 'Rosetta', 'Rosia', 'Rosie', 'Rosina', 'Rossie', 'Rowena', 'Roxie', 'Rubie', 'Ruby', 'Rubye', 'Ruth', 'Ruthie', 'Sabina', 'Sadie', 'Sadye', 'Sallie', 'Sally', 'Salome', 'Samantha', 'Sammie', 'Sara', 'Sarah', 'Savannah', 'Selena', 'Selina', 'Selma', 'Sena', 'Serena', 'Shirley', 'Sibyl', 'Sidney', 'Signe', 'Sigrid', 'Sina', 'Sofia', 'Sophia', 'Sophie', 'Sophronia', 'Stella', 'Sudie', 'Sue', 'Sula', 'Susan', 'Susanna', 'Susie', 'Suzanne', 'Sybil', 'Sylvia', 'Tempie', 'Tena', 'Tennie', 'Teresa', 'Tessie', 'Thea', 'Thelma', 'Theo', 'Theodora', 'Theodosia', 'Theresa', 'Therese', 'Theresia', 'Thomas', 'Thora', 'Tilda', 'Tillie', 'Tina', 'Tommie', 'Tressa', 'Tressie', 'Treva', 'Trudie', 'Twila', 'Una', 'Ursula', 'Vada', 'Valeria', 'Valerie', 'Vallie', 'Vassie', 'Veda', 'Vella', 'Velma', 'Velva', 'Vena', 'Vera', 'Verda', 'Verdie', 'Vergie', 'Verla', 'Verna', 'Vernice', 'Vernie', 'Verona', 'Veronica', 'Versie', 'Vertie', 'Vesta', 'Veva', 'Victoria', 'Vida', 'Vina', 'Vinnie', 'Viola', 'Violet', 'Vira', 'Virgie', 'Virgil', 'Virginia', 'Viva', 'Vivian', 'Walter', 'Wanda', 'Wilda', 'Wilhelmina', 'Wilhelmine', 'Willa', 'William', 'Willie', 'Wilma', 'Winifred', 'Winnie', 'Winnifred', 'Winona', 'Yetta', 'Yvonne', 'Zada', 'Zelda', 'Zelia', 'Zella', 'Zelma', 'Zena', 'Zenobia', 'Zetta', 'Zettie', 'Zita', 'Zoe', 'Zola', 'Zona', 'Zora'];
  const namesFamily = ['Abberton', 'Adams', 'Ahern', 'Alardice', 'Allen', 'Ames', 'Anderson', 'Andrew', 'Archer', 'Armstrong', 'Arthur', 'Askew', 'Atkins', 'Aubert', 'Babington', 'Bain', 'Baldry', 'Barbary', 'Barnett', 'Barry', 'Bartley', 'Batt', 'Beale', 'Beckham', 'Beley', 'Bell', 'Bennett', 'Bent', 'Bethune', 'Bilton', 'Black', 'Blakely', 'Bluit', 'Bollen', 'Borthwell', 'Bowditch', 'Boyd', 'Bramer', 'Brew', 'Brieris', 'Broderib', 'Brook', 'Brown', 'Brownhill', 'Buchannan', 'Buckman', 'Bunan', 'Burke', 'Burns', 'Burress', 'Butler', 'Cadden', 'Cain', 'Callan', 'Cameron', 'Campbell', 'Candy', 'Carbey', 'Carnall', 'Carrington', 'Carson', 'Casey', 'Cause', 'Cawley', 'Chapman', 'Cheyne', 'Christie', 'Clark', 'Clarke', 'Clements', 'Clubb', 'Cochran', 'Coghill', 'Coleman', 'Collins', 'Commins', 'Connell', 'Connor', 'Conray', 'Cook', 'Corbeld', 'Corney', 'Costigan', 'Coulston', 'Cowen', 'Craig', 'Credge', 'Crogan', 'Cropper', 'Crowle', 'Cumming', 'Cunningham', 'Curtis', 'Dabs', 'Damyon', 'Dart', 'Davis', 'Day', 'Delagney', 'Dendy', 'Desmond', 'Dickman', 'Dinan', 'Dods', 'Donaldson', 'Donoughoe', 'Doolan', 'Douglas', 'Doyle', 'Drogace', 'Duffey', 'Duncan', 'Dunn', 'Dwan', 'Dwyer', 'Eade', 'Ede', 'Edwards', 'Edye', 'Egerton', 'Ellis', 'Enright', 'Evans', 'Fabble', 'Fallow', 'Farrell', 'Fawns', 'Fergusson', 'Fillanes', 'Finnerty', 'Fitget', 'Fitzgerald', 'Fitzsimons', 'Fleming', 'Foale', 'Forbes', 'Forrest', 'Foster', 'Foy', 'French', 'Fullmore', 'Gabb', 'Galway', 'Gardiner', 'Gay', 'Gibb', 'Gilbert', 'Gillis', 'Gleeson', 'Godkim', 'Gordon', 'Goslan', 'Graham', 'Grain', 'Gray', 'Green', 'Greerson', 'Gregory', 'Griffin', 'Guillan', 'Habborlain', 'Hale', 'Hall', 'Halpine', 'Hamilton', 'Hand', 'Hanrahan', 'Hare', 'Harrington', 'Harrison', 'Harvey', 'Hawdon', 'Hays', 'Head', 'Heard', 'Hegan', 'Hennessy', 'Henry', 'Heriot', 'Hicks', 'Hill', 'Hislop', 'Hoddle', 'Hogan', 'Holland', 'Holmes', 'Hooligan', 'Horgan', 'Hotty', 'Howe', 'Howlett', 'Hughes', 'Hunniford', 'Hunter', 'Hutchinson', 'Jack', 'James', 'Janson', 'Jemmy', 'Jephcots', 'Johnson', 'Johnston', 'Jones', 'Joseph', 'Kabble', 'Keating', 'Keiler', 'Kelly', 'Kennedy', 'Keogh', 'Kerran', 'Kildare', 'King', 'Kinghead', 'Kirkham', 'Knight', 'Labey', 'Lamb', 'Lane', 'Langhorne', 'Laroche', 'Lawlor', 'Leaby', 'Learmonth', 'Lee', 'Legge', 'Lette', 'Lewis', 'Lilly', 'Lite', 'Lobb', 'Long', 'Lord', 'Lowther', 'Lynch', 'Lyness', 'Macks', 'Magrath', 'Mahon', 'Maiden', 'Male', 'Maltby', 'Manning', 'Mar', 'Marsden', 'Martin', 'Mathew', 'Matson', 'Maynard', 'McDonald', 'McKee', 'McKerras', 'McNamara', 'McPherson', 'McRae', 'Mcabe', 'Mcandrew', 'Mcarthy', 'Mcarty', 'Mcdermot', 'Mcdonald', 'Mcdonaugh', 'Mcfadden', 'Mcghee', 'Mcgrath', 'Mcguire', 'Mcintire', 'Mckenzie', 'Mckinnon', 'Mclachlan', 'Mclean', 'Mclelland', 'Mclusky', 'Mcmillan', 'Mcnab', 'Mconaghty', 'Mcroddon', 'Meighan', 'Meredeth', 'Middlemiss', 'Miller', 'Mills', 'Ming', 'Mitchell', 'Monaghan', 'Moody', 'Moore', 'Morgan', 'Morris', 'Morrissy', 'Morvell', 'Moynihan', 'Mullabyaly', 'Mulvahil', 'Murphy', 'Murray', 'Nagle', 'Nealy', 'Nevil', 'Nicol', 'Nisbet', 'Norman', 'Oakden', 'Ocallaghan', 'Odonaghue', 'Olaughlin', 'Oneil', 'Ornery', 'Oshea', 'Pabst', 'Pandy', 'Parlow', 'Paterson', 'Paul', 'Peaton', 'Penn', 'Pettitt', 'Philpot', 'Pinkerton', 'Plundell', 'Porden', 'Potter', 'Powall', 'Powlett', 'Priest', 'Purcell', 'Quaman', 'Raby', 'Rand', 'Raycraft', 'Read', 'Reekey', 'Remmington', 'Richey', 'Risewell', 'Roan', 'Robertson', 'Robins', 'Robson', 'Roland', 'Ross', 'Rouse', 'Rule', 'Ruth', 'Rutter', 'Ryan', 'Sabilline', 'Sapping', 'Saxon', 'Scenay', 'Scott', 'Seddon', 'Shackley', 'Shapter', 'Shea', 'Sheils', 'Sherris', 'Shorten', 'Sim', 'Simpson', 'Skidd', 'Small', 'Smith', 'Snape', 'Spice', 'Staff', 'Stanway', 'Steen', 'Stevens', 'Stewart', 'Stoker', 'Strachan', 'Suchet', 'Sullivan', 'Suthmeer', 'Sweet', 'Tabiner', 'Taylor', 'Teague', 'Thomas', 'Thompkins', 'Thompson', 'Thorebourne', 'Tilcott', 'Toll', 'Tow', 'Treadway', 'Tucker', 'Turner', 'Twaddle', 'Uleaven', 'Vabsley', 'Vear', 'Walker', 'Walla', 'Walsh', 'Walsham', 'Wareham', 'Watson', 'Watton', 'Weakman', 'Weddall', 'Welsh', 'Welter', 'Weston', 'Wheeler', 'White', 'Whitlock', 'Wigram', 'Williams', 'Willis', 'Willoby', 'Wilson', 'Winn', 'Withers', 'Wood', 'Woolahan', 'Wright', 'Xavier'];
  const names1 = type === 1 ? namesFemale : namesMale;
  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd2 = Math.floor(Math.random() * namesFamily.length);
    names = `${names1[rnd]} ${namesFamily[rnd2]}`;
    return names;
  }
}
module.exports = victorians
