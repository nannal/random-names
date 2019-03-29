var sample = require ('lodash.sample')

function hindus() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Vishal', 'Ganesh', 'Gaurav', 'Vinay', 'Vaibhav', 'Saurabh', 'Akash', 'Sandeep', 'Vilas', 'Gautam', 'Vijay', 'Abhaya', 'Abhimanyu', 'Acharya', 'Achir', 'Adharma', 'Adi', 'Aditya', 'Adri', 'Agastya', 'Agneya', 'Agni', 'Agnimukha', 'Ahjaja', 'Ahriman', 'Airavata', 'Aja', 'Ajay', 'Akshobhya', 'Alagan', 'Amal', 'Ameretat', 'Amil', 'Amish', 'Amitabha', 'Amma', 'Anand', 'Ananda', 'Ananga', 'Anish', 'Apu', 'Arav', 'Archana', 'Arnav', 'Arun', 'Aruna', 'Asad', 'Ashoka', 'Asura', 'Atman', 'Avatar', 'Ayodhya', 'Azhar', 'Balahadra', 'Balarama', 'Bali', 'Balin', 'Barid', 'Bhaga', 'Bhagwandas', 'Bharat', 'Bhaskar', 'Bhavata', 'Bhikkhu', 'Bhima', 'Bhishma', 'Bodhi', 'Brahma', 'Brahman', 'Brahmaputra', 'Chakra', 'Chaman', 'Chandaka', 'Chander', 'Chandra', 'Charan', 'Chinja', 'Daksha', 'Darshan', 'Das', 'Dasa', 'Dasras', 'Dasya', 'Deepak', 'Deven', 'Dhenuka', 'Dhumavarna', 'Dinesh', 'Duhkha', 'Durvasas', 'Dushkriti', 'Dyaus', 'Ekadanta', 'Ekram', 'Frashegird', 'Gada', 'Gadhi', 'Gagan', 'Gajra', 'Ganesh', 'Garuda', 'Gaurav', 'Gautam', 'Girish', 'Girisha', 'Guffd', 'Gulab', 'Gyan', 'Haidar', 'Halim', 'Hanuman', 'Hari', 'Haripriya', 'Harischandra', 'Hasin', 'Hastimukha', 'Hastin', 'Hati', 'Hemakuta', 'Hiranyagarbha', 'Imaran', 'Inder', 'Indivar', 'Indra', 'Isha', 'Ishana', 'Ishvara', 'Iswara', 'Jafar', 'Jag', 'Jahnu', 'Jambha', 'Jambhala', 'Jatin', 'Javas', 'Jay', 'Jivin', 'Josha', 'Jyotish', 'Kabandha', 'Kakar', 'Kaklin', 'Kala', 'Kalari', 'Kali', 'Kalki', 'Kalkin', 'Kamal', 'Kami', 'Kanaka', 'Kanishka', 'Kapil', 'Kapila', 'Kavi', 'Kesin', 'Ketan', 'Kintan', 'Kotari', 'Krishna', 'Kritanta', 'Kumar', 'Kumara', 'Lais', 'Lakshmana', 'Lal', 'Latif', 'Lusila', 'Madhava', 'Mahadevs', 'Mahakala', 'Malajit', 'Mandar', 'Manjit', 'Manu', 'Markandeya', 'Marut', 'Matsya', 'Mehtar', 'Mesha', 'Mithra', 'Mitra', 'Mohan', 'Mukul', 'Muni', 'Nandin', 'Nara', 'Naraka', 'Narayan', 'Naresh', 'Nehru', 'Nila', 'Nirav', 'Nitesh', 'Omparkash', 'Palash', 'Panchika', 'Pandu', 'Pani', 'Pavit', 'Pitamaha', 'Pitar', 'Pitri', 'Poshita', 'Prem', 'Priyamkara', 'Pumeet', 'Pundarik', 'Purdy', 'Quasim', 'Raji', 'Rajnish', 'Rakshasa', 'Raktavira', 'Raktim', 'Ram', 'Ranjan', 'Ravana', 'Ravi', 'Rishi', 'Rohan', 'Rudra', 'Sachi', 'Saeed', 'Sahan', 'Sahir', 'Sajag', 'Saka', 'Salmalin', 'Samantaka', 'Sanat', 'Sanjay', 'Sanjiv', 'Sanjiv', 'Sarad', 'Saubhari', 'Shaitan', 'Shaka', 'Shaktar', 'Shalya', 'Shamba', 'Shami', 'Shankara', 'Shashida', 'Shesha', 'Shetan', 'Shiva', 'Shudra', 'Skanda', 'Sulya', 'Sunreet', 'Taj', 'Takshaka', 'Tamal', 'Tandu', 'Tarak', 'Tariq', 'Tarun', 'Tathagata', 'Tausiq', 'Tayib', 'Tripada', 'Uday', 'Uja', 'Umed', 'Utathya', 'Vadin', 'Valin', 'Valmiki', 'Varen', 'Varun', 'Varuna', 'Vasin', 'Vasistha', 'Vasu', 'Vasuki', 'Vasuki', 'Vibishana', 'Vijay', 'Visha', 'Vishnu', 'Vivek', 'Vrishni', 'Vritra', 'Vyasa', 'Yama', 'Yamal', 'Zohar'];
  const nm2 = ['Varsha', 'Gauri', 'Gargi', 'Lata', 'Divya', 'Jayshree', 'Rekha', 'Anya', 'Rani', 'Sanjana', 'Siya', 'Karina', 'Sanya', 'Jia', 'Tanya', 'Preeti', 'Pavani', 'Nikitha', 'Anushka', 'Rishita', 'Priya', 'Vidya', 'Srilekha', 'Rani', 'Meghna', 'Aishwarya', 'Ananya', 'Minti', 'Aadi', 'Abhirati', 'Aditi', 'Adya', 'Agrata', 'Ahalya', 'Ahisma', 'Ajaya', 'Alka', 'Amaravati', 'Amba', 'Ambar', 'Ambika', 'Ambrosia', 'Amhi', 'Amhika', 'Amma', 'Amritha', 'Anahita', 'Anala', 'Ananda', 'Ananta', 'Anasuya', 'Anga', 'Angirasa', 'Anila', 'Annapurna', 'Anumati', 'Apala', 'Apsaras', 'Arpana', 'Aruna', 'Arundhati', 'Arya', 'Avani', 'Avasa', 'Avatara', 'Baka', 'Ballari', 'Behula', 'Bela', 'Bha', 'Bhadraa', 'Bhagiratha', 'Bharati', 'Bhikkhuni', 'Bhimadevi', 'Bhu', 'Bhudevi', 'Brinda', 'Chamunda', 'Chanda', 'Chandi', 'Chandra', 'Changla', 'Channa', 'Charumati', 'Chhaya', 'Chitra', 'Corona', 'Daeva', 'Dakini', 'Dakshina', 'Damayanti', 'Daru', 'Denali', 'Deva', 'Devaki', 'Devamatar', 'Devayani', 'Devi', 'Devika', 'Dharani', 'Dharma', 'Diti', 'Div', 'Divya', 'Drisana', 'Durga', 'Ellora', 'Eshana', 'Gambhiri', 'Gandhari', 'Ganesa', 'Garima', 'Garuda', 'Garudi', 'Gatha', 'Gaura', 'Gauri', 'Gayatri', 'Gita', 'Guri', 'Haimati', 'Hanita', 'Hara', 'Hariti', 'Harsha', 'Hema', 'Hetal', 'Indi', 'Indira', 'Indra', 'Indrani', 'Indumati', 'Ishana', 'Ishani', 'Jaganmata', 'Jamuna', 'Janna', 'Jarita', 'Jaya', 'Jayanti', 'Jayne', 'Jivanta', 'Jui', 'Jyotika', 'Jyotis', 'Kadru', 'Kailasa', 'Kala', 'Kali', 'Kalinda', 'Kalindi', 'Kalli', 'Kallie', 'Kamala', 'Kamana', 'Kanan', 'Kantha', 'Kanya', 'Karka', 'Karma', 'Karuna', 'Kasi', 'Kaveri', 'Kavindra', 'Kerani', 'Kesava', 'Khasa', 'Kiran', 'Kirati', 'Kiri', 'Kirsi', 'Kirtana', 'Kirti', 'Komala', 'Krodha', 'Kumari', 'Kumuda', 'Kumudavati', 'Kunti', 'Laasya', 'Lajila', 'Laksha', 'Lakshmi', 'Lakya', 'Lalasa', 'Lalita', 'Lanka', 'Latika', 'Lavanya', 'Leya', 'Madhur', 'Madri', 'Mahadevi', 'Mahamari', 'Mahesa', 'Maheshvari', 'Mahila', 'Maina', 'Makara', 'Malini', 'Mallika', 'Manasa', 'Manda', 'Mandara', 'Manju', 'Marisha', 'Matrika', 'Meena', 'Meghana', 'Mehadi', 'Minda', 'Mira', 'Mrinal', 'Muniya', 'Nanda', 'Nandini', 'Narmada', 'Natesa', 'Nayana', 'Neeja', 'Neema', 'Nidra', 'Niloufer', 'Nipa', 'Nirveli', 'Nisha', 'Nitara', 'Niyati', 'Odra', 'Ojal', 'Omana', 'Opal', 'Padma', 'Pallavi', 'Pandara', 'Pandita', 'Parvani', 'Pinga', 'Pishachi', 'Pithasthana', 'Prabha', 'Pramlocha', 'Premala', 'Quasar', 'Rachana', 'Radha', 'Raja', 'Rajni', 'Ramya', 'Ran', 'Rana', 'Rane', 'Ranee', 'Rani', 'Rania', 'Rashmika', 'Rati', 'Ratna', 'Ravati', 'Rekha', 'Riddhi', 'Rohana', 'Rohini', 'Ruana', 'Rubaina', 'Ruma', 'Rupali', 'Sakari', 'Sakina', 'Sakra', 'Sakujna', 'Samvarta', 'Sandhya', 'Saniya', 'Sangita', 'Sanju', 'Sanjna', 'Sany', 'Sara', 'Sarama', 'Sarisha', 'Sati', 'Satya', 'Satyavati', 'Saura', 'Savarna', 'Savitari', 'Seema', 'Sevita', 'Sevti', 'Shaibya', 'Shakini', 'Shakra', 'Shakti', 'Shalin', 'Shanata', 'Shanta', 'Shanti', 'Shapa', 'Sharada', 'Sharama', 'Sharvani', 'Shashi', 'Shasti', 'Shitala', 'Shraddha', 'Shri', 'Shyla', 'Sita', 'Sitara', 'Sohalia', 'Soma', 'Subha', 'Suchi', 'Sumana', 'Sumitra', 'Sundari', 'Sunila', 'Supriya', 'Sur', 'Sur', 'Tamanna', 'Tanaya', 'Tanika', 'Tanuja', 'Tapati', 'Tara', 'Taraka', 'Tarala', 'Tarannum', 'Tarika', 'Tira', 'Tirtha', 'Trisha', 'Trishna', 'Trisna', 'Triveni', 'Tulsi', 'Uma', 'Umika', 'Upala', 'Ura', 'Urvi', 'Usha', 'Ushas', 'Uttara', 'Vac', 'Vach', 'Vairocana', 'Vallari', 'Vandana', 'Varana', 'Varaza', 'Varouna', 'Varsha', 'Varuna', 'Varunani', 'Vasanti', 'Vayu', 'Vedas', 'Vema', 'Vijaya', 'Vilina', 'Vina', 'Vinata', 'Vinaya', 'Vineeta', 'Viveka', 'Vivika', 'Yamuna', 'Yasiman', 'Yasmine', 'Yauvani', 'Zahra', 'Zudora'];
  const nm3 = ['Khopkar', 'Phadnis', 'Fadnavis', 'Maskar', 'Kulkarni', 'Gupta', 'Gupte', 'Chitnis', 'Tipnis', 'Pawar', 'Shirke', 'Daptardar', 'Patkar', 'Pathak', 'Shah', 'Patel', 'Patil', 'Devgan', 'Bhatnagar', 'Shah', 'Upadhya', 'Kapadia', 'Rajan', 'Das', 'Sen', 'Roy', 'Dev', 'Singh', 'Gill', 'Rao', 'Kumar', 'Modi', 'Shah', 'Bose', 'Patel', 'Gupta', 'Reddy', 'Mehta', 'Saha', 'Dey', 'Mittal', 'Dixit', 'Sonde', 'Goud', 'Nair', 'Sarai', 'Joshi', 'Ghosh', 'Babu', 'Raju', 'Desai', 'Iyer', 'Pandit', 'Mukherjee', 'Mishra', 'Banerjee', 'Balan', 'Menon', 'Ganguly', 'Shetty', 'Verma', 'Wali', 'Patil', 'Dutta', 'Kaur', 'Chatterjee', 'Sarkar', 'Srivastava', 'Murthy', 'Nadar', 'Yadav', 'Naidu', 'Kulkarni', 'Iyengar', 'Bhattacharya', 'Bhatt', 'Agrawal', 'Acharya', 'Kaul', 'Raina', 'kaushal', 'Prabhu', 'Aggarwal', 'Khalsa', 'Dasgupta', 'Thakur', 'Brar', 'Negi', 'Chauhan', 'Bhat', 'Mistry', 'Sarma', 'Teja', 'Shasthri', 'Pillai', 'Goyal', 'Bansal', 'Kamei', 'Oza', 'Dubey', 'Deshpande', 'Dhar', 'Sandhu', 'Sidhu', 'Trivedi', 'Parikh', 'Gire', 'Badal', 'Wani', 'Deshmukh', 'Varghese', 'Jaitley', 'Dhillon', 'Walia', 'Borah', 'Kamath', 'Shenoy', 'Gowda', 'Undre', 'Kurup', 'Solanki', 'Dolma', 'Chaturvedi', 'Sahu', 'Sastry', 'Hegde', 'Cheema', 'Patnaik', 'Shinde', 'Barua', 'Raut', 'Chavan', 'Kadam', 'Chacko', 'Dwivedi', 'Matondkar', 'Karnik', 'Ogra', 'Jadhav', 'Nambiar', 'Agarkar', 'Koul', 'Setty', 'Shergill', 'Gabbi', 'Dikshit', 'Poddar', 'Gothe', 'Chakpram', 'Haldar', 'Gogoi', 'Baruah', 'Asthana', 'Devar', 'Bhonsle', 'Dorjee', 'Dalvi', 'Kuruvilla', 'Scindia', 'Bhutia', 'Ghate', 'Chowdary', 'Naicker', 'Borkar', 'Gounder', 'Bhosale', 'Parkar', 'Chautala', 'Kotadia', 'Bagal', 'Sutaria', 'Nishad', 'Tickoo', 'Bhoi', 'Oinam', 'Dullo', 'Dastidar', 'Katkar', 'Chetri', 'Boparai', 'Beniwal', 'Handhe', 'Vanniyar', 'Mulye', 'Kaskar', 'Chishty', 'Mudaliyar', 'Mulge', 'Handoo', 'Ganjoo', 'Landge', 'Sonkar', 'Mukaddam', 'Hegede', 'Dewangan', 'Pipalia', 'Penkar', 'Chandrakar', 'Khandke', 'Benipal', 'Borkakoti', 'Shikhare', 'Kyada', 'Bunha', 'Sheladia', 'Bhinge', 'Dhaduk', 'Sungte', 'Rawoot', 'Agharia', 'Khalfe', 'Dhonsi', 'Ahanthem', 'Gantare', 'Birnale', 'Mapkar', 'Makavana', 'Kaamat', 'Wasgare', 'Loliyekar', 'Nakhtare', 'Jhombarkar', 'Acharya', 'Agarwal', 'Agate', 'Aggarwal', 'Agrawal', 'Ahluwalia', 'Ahuja', 'Amble', 'Amin', 'Anand', 'Andra', 'Anne', 'Anthony', 'Apte', 'Arora', 'Arya', 'Atwal', 'Aurora', 'Babu', 'Badal', 'Badami', 'Bahl', 'Bahri', 'Bail', 'Bains', 'Bajaj', 'Bajwa', 'Bakshi', 'Bal', 'Bala', 'Balakrishnan', 'Balan', 'Balasubramanian', 'Balay', 'Bali', 'Bandi', 'Banerjee', 'Banik', 'Bansal', 'Barad', 'Baral', 'Baria', 'Barman', 'Basak', 'Bassi', 'Basu', 'Bath', 'Batra', 'Batta', 'Bava', 'Bawa', 'Bedi', 'Beharry', 'Behl', 'Ben', 'Bera', 'Bhagat', 'Bhakta', 'Bhalla', 'Bhandari', 'Bhardwaj', 'Bhargava', 'Bhasin', 'Bhat', 'Bhatia', 'Bhatnagar', 'Bhatt', 'Bhattacharyya', 'Bhatti', 'Bhavsar', 'Bir', 'Biswas', 'Boase', 'Bobal', 'Bora', 'Borah', 'Borde', 'Borra', 'Bose', 'Brahmbhatt', 'Brar', 'Buch', 'Bumb', 'Butala', 'Chacko', 'Chad', 'Chada', 'Chadha', 'Chahal', 'Chakrabarti', 'Chakraborty', 'Chana', 'Chand', 'Chanda', 'Chander', 'Chandra', 'Chandran', 'Char', 'Chatterjee', 'Chaudhari', 'Chaudhary', 'Chaudhry', 'Chaudhuri', 'Chaudry', 'Chauhan', 'Chawla', 'Cheema', 'Cherian', 'Chhabra', 'Chia', 'Chohan', 'Chokshi', 'Chopra', 'Choudhary', 'Choudhry', 'Choudhury', 'Chowdhury', 'Comar', 'Contractor', 'Dada', 'Dalal', 'Dani', 'Dar', 'Dara', 'Das', 'Dasgupta', 'Dash', 'Dass', 'Date', 'Datta', 'Dave', 'Dayal', 'De', 'Deep', 'Deo', 'Deol', 'Desai', 'Deshmukh', 'Deshpande', 'Devan', 'Devi', 'Dewan', 'Dey', 'Dhaliwal', 'Dhar', 'Dhawan', 'Dhillon', 'Dhingra', 'Dial', 'Din', 'Divan', 'Dixit', 'Doctor', 'Dora', 'Doshi', 'Dua', 'Dube', 'Dubey', 'Dugal', 'Dugar', 'Dutt', 'Dutta', 'D’Alia', 'Dyal', 'Edwin', 'Gaba', 'Gade', 'Gala', 'Gandhi', 'Ganesan', 'Ganesh', 'Ganguly', 'Gara', 'Garde', 'Garg', 'George', 'Gera', 'Ghose', 'Ghosh', 'Gill', 'Gobin', 'Goda', 'Goel', 'Gokhale', 'Gola', 'Gole', 'Golla', 'Gopal', 'Goswami', 'Gour', 'Goyal', 'Grewal', 'Grover', 'Guha', 'Gulati', 'Gupta', 'Halder', 'Handa', 'Hans', 'Hari', 'Harjo', 'Hayer', 'Hayre', 'Hegde', 'Hora', 'Issac', 'Iyengar', 'Iyer', 'Jacob', 'Jaggi', 'Jain', 'Jani', 'Jayaraman', 'Jha', 'Jhaveri', 'Johal', 'Joshi', 'Kadakia', 'Kade', 'Kakar', 'Kala', 'Kale', 'Kalita', 'Kalla', 'Kamdar', 'Kanda', 'Kannan', 'Kant', 'Kapadia', 'Kapoor', 'Kapur', 'Kar', 'Kara', 'Karan', 'Kari', 'Karnik', 'Karpe', 'Kashyap', 'Kata', 'Kaul', 'Kaur', 'Keer', 'Khalsa', 'Khanna', 'Khare', 'Khatri', 'Khosla', 'Khurana', 'Kibe', 'Kohli', 'Konda', 'Korpal', 'Koshy', 'Kota', 'Kothari', 'Krish', 'Krishna', 'Krishnamurthy', 'Krishnan', 'Kulkarni', 'Kumar', 'Kumer', 'Kunda', 'Kurian', 'Kuruvilla', 'Lachman', 'Lad', 'Lal', 'Lala', 'Lall', 'Lalla', 'Lanka', 'Lata', 'Lodi', 'Loke', 'Loyal', 'Luthra', 'Madan', 'Magar', 'Mahabir', 'Mahadeo', 'Mahajan', 'Mahal', 'Maharaj', 'Majumdar', 'Malhotra', 'Mall', 'Mallick', 'Mammen', 'Mand', 'Manda', 'Mandal', 'Mander', 'Mane', 'Mangal', 'Mangat', 'Mani', 'Mann', 'Mannan', 'Manne', 'Maraj', 'Masih', 'Master', 'Mathai', 'Mathew', 'Mathur', 'Matthai', 'Meda', 'Mehan', 'Mehra', 'Mehrotra', 'Mehta', 'Meka', 'Memon', 'Menon', 'Merchant', 'Minhas', 'Mishra', 'Misra', 'Mistry', 'Mital', 'Mitra', 'Mittal', 'Mitter', 'Modi', 'Mody', 'Mogul', 'Mohabir', 'Mohan', 'Mohanty', 'Morar', 'More', 'Mukherjee', 'Mukhopadhyay', 'Muni', 'Munshi', 'Murthy', 'Murty', 'Mutti', 'Nadig', 'Nadkarni', 'Nagar', 'Nagarajan', 'Nagi', 'Nagy', 'Naidu', 'Naik', 'Nair', 'Nanda', 'Narain', 'Narang', 'Narasimhan', 'Narayan', 'Narayanan', 'Narine', 'Narula', 'Natarajan', 'Nath', 'Natt', 'Nayak', 'Nayar', 'Nazareth', 'Nigam', 'Nori', 'Oak', 'Om', 'Oommen', 'Oza', 'Padmanabhan', 'Pai', 'Pal', 'Palan', 'Pall', 'Palla', 'Panchal', 'Pandey', 'Pandit', 'Pandya', 'Pant', 'Parekh', 'Parikh', 'Parmar', 'Parmer', 'Parsa', 'Patel', 'Pathak', 'Patil', 'Patla', 'Pau', 'Peri', 'Persad', 'Persaud', 'Philip', 'Pillai', 'Pillay', 'Pingle', 'Prabhakar', 'Prabhu', 'Pradhan', 'Prakash', 'Prasad', 'Prashad', 'Puri', 'Purohit', 'Radhakrishnan', 'Raghavan', 'Rai', 'Raj', 'Raja', 'Rajagopal', 'Rajagopalan', 'Rajan', 'Raju', 'Ram', 'Rama', 'Ramachandran', 'Ramakrishnan', 'Raman', 'Ramanathan', 'Ramaswamy', 'Ramesh', 'Ramkissoon', 'Ramnarine', 'Rampersad', 'Rampersaud', 'Ramroop', 'Ramson', 'Rana', 'Randhawa', 'Ranganathan', 'Rao', 'Rastogi', 'Ratta', 'Rattan', 'Ratti', 'Rau', 'Raval', 'Ravel', 'Ravi', 'Ray', 'Reddy', 'Rege', 'Rout', 'Roy', 'Sabharwal', 'Sachar', 'Sachdev', 'Sachdeva', 'Sagar', 'Saha', 'Sahni', 'Sahota', 'Saini', 'Salvi', 'Sama', 'Sami', 'Sampath', 'Samra', 'Samuel', 'Sandal', 'Sandhu', 'Sane', 'Sangha', 'Sanghvi', 'Sani', 'Sankar', 'Sankaran', 'Sant', 'Saraf', 'Saran', 'Sarin', 'Sarkar', 'Sarma', 'Sarna', 'Sarraf', 'Sastry', 'Sathe', 'Savant', 'Sawhney', 'Saxena', 'Sehgal', 'Sekhon', 'Sem', 'Sen', 'Sengupta', 'Seshadri', 'Seth', 'Sethi', 'Setty', 'Sha', 'Shah', 'Shan', 'Shankar', 'Shanker', 'Sharaf', 'Sharma', 'Shenoy', 'Shere', 'Sheth', 'Shetty', 'Shroff', 'Shukla', 'Sibal', 'Sidhu', 'Sing', 'Singh', 'Singhal', 'Sinha', 'Sodhi', 'Solanki', 'Som', 'Soman', 'Soni', 'Sood', 'Sridhar', 'Srinivas', 'Srinivasan', 'Srivastava', 'Subramaniam', 'Subramanian', 'Sule', 'Sundaram', 'Sunder', 'Sur', 'Sura', 'Suresh', 'Suri', 'Swaminathan', 'Swamy', 'Tailor', 'Tak', 'Talwar', 'Tandon', 'Taneja', 'Tank', 'Tara', 'Tata', 'Tella', 'Thaker', 'Thakkar', 'Thakur', 'Thaman', 'Thomas', 'Tiwari', 'Toor', 'Tripathi', 'Trivedi', 'Upadhyay', 'Uppal', 'Usman', 'Vaidya', 'Vala', 'Varghese', 'Varkey', 'Varma', 'Varty', 'Varughese', 'Vasa', 'Venkataraman', 'Venkatesh', 'Verma', 'Vig', 'Virk', 'Viswanathan', 'Vohra', 'Vora', 'Vyas', 'Wable', 'Wadhwa', 'Wagle', 'Wali', 'Walia', 'Walla', 'Warrior', 'Wason', 'Yadav', 'Yogi', 'Yohannan', 'Zacharia', 'Zachariah'];
  {
    if (type === 1) {
      names = `${sample(nm2)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm3)}`;
    }
    return names;
  }
}
module.exports = hindus
