var sample = require ('lodash.sample')

export default function sikhs() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aagyakar', 'Aagyapal', 'Aakar', 'Aanand', 'Aaradh', 'Aashish', 'Aatma', 'Aavai', 'Abahijeevan', 'Abhaidev', 'Abhaijeet', 'Abhijeet', 'Abhinav', 'Abinaash', 'Abrik', 'Achar', 'Achint', 'Achraj', 'Adarsh', 'Adarshpal', 'Adeeb', 'Adesh', 'Adith', 'Agam', 'Agamjit', 'Ajaath', 'Ajai', 'Ajaib', 'Ajay', 'Ajeet', 'Ajinder', 'Ajit', 'Ajitesh', 'Ajitpal', 'Ajmer', 'Akaar', 'Akaas', 'Akaash', 'Akalbir', 'Akalnivas', 'Akalsharan', 'Akalsimar', 'Akalsukh', 'Akas', 'Akash', 'Akhand', 'Akharee', 'Akhee', 'Akhil', 'Akhilpal', 'Alok', 'Amal', 'Aman', 'Amanbir', 'Amandev', 'Amanjeevan', 'Amanpal', 'Amanvir', 'Amar', 'Amardev', 'Amarprem', 'Amberjit', 'Ambreesh', 'Ameek', 'Amit', 'Amitesh', 'Amritbaan', 'Amritpal', 'Amul', 'Amun', 'Anaad', 'Anand', 'Anant', 'Anantbir', 'Anantdev', 'Anayk', 'Andeep', 'Aneel', 'Angad', 'Angang', 'Anhad', 'Anik', 'Anokh', 'Anoop', 'Anoopbir', 'Anoopjot', 'Anooplok', 'Antar', 'Anup', 'Anurag', 'Aqubal', 'Armaan', 'Arshbir', 'Arun', 'Arvind', 'Arvinder', 'Arvindera', 'Arvinderjeet', 'Asankh', 'Aseem', 'Ashar', 'Atal', 'Atam', 'Atama', 'Atamjit', 'Atamveer', 'Attar', 'Avanesh', 'Avinash', 'Avmanjeevan', 'Avneet', 'Avtar', 'Baan', 'Babbu', 'Bachan', 'Bachittar', 'Bahadar', 'Bahadurjit', 'Bakhat', 'Bakhtawer', 'Bakshi', 'Bakshish', 'Baksis', 'Baksish', 'Bal', 'Balaknath', 'Balbir', 'Baldeb', 'Baldev', 'Balendra', 'Balhaar', 'Baljeet', 'Baljiwan', 'Balkar', 'Balraj', 'Balram', 'Balvan', 'Balveer', 'Balvir', 'Balwant', 'Ban', 'Banda', 'Banjeet', 'Bawa', 'Beant', 'Bhagat', 'Bhagatveer', 'Bhagwan', 'Bhagwant', 'Bhajan', 'Bhajnaam', 'Bhav', 'Bhavan', 'Bhavanjot', 'Bheesham', 'Bhup', 'Bhupendra', 'Bhupinderpal', 'Bik', 'Bikram', 'Bikramjit', 'Bilal', 'Bin', 'Binay', 'Binder', 'Binpaul', 'Bipin', 'Birindar', 'Bisan', 'Bisar', 'Bishanpal', 'Bisman', 'Bodh', 'Bolan', 'Boota', 'Brahamdev', 'Brahamsarup', 'Brahmdev', 'Brahmjot', 'Brahmleen', 'Brahmvir', 'Brijdev', 'Brijender', 'Budh', 'Budhh', 'Budhjot', 'Buksis', 'Bullah', 'Bulwinder', 'Burpinder', 'Buvdeep', 'Chakar', 'Chakardhar', 'Chaman', 'Chanan', 'Chander', 'Chander Raj', 'Chann', 'Channan', 'Charan', 'Charandev', 'Charankawal', 'Charanpal', 'Charat', 'Charminder', 'Chatar', 'Chaten', 'Chehzaad', 'Chiranjiv', 'Chirjeewan', 'Chitsaroop', 'Chore', 'Daan', 'Dal', 'Dalbir', 'Daler', 'Dalip', 'Dalipinder', 'Daljodh', 'Daman', 'Damanjote', 'Damoder', 'Dan', 'Danvir', 'Dara', 'Darbar', 'Darshan', 'Darshanbir', 'Darvesh', 'Das', 'Datar', 'Daulat', 'Dayabir', 'Dayal', 'Debraj', 'Deedar', 'Deenpal', 'Deepak', 'Deepinder', 'Dev', 'Deva', 'Devasheesh', 'Devendar', 'Devendra', 'Devindar', 'Devinderpal', 'Dharam', 'Dharambir', 'Dharamdeep', 'Dharamdev', 'Dharamjot', 'Dharampal', 'Dharamveer', 'Dharmender', 'Dharmendra', 'Dheeraj', 'Dheerendra', 'Dhiaan', 'Dhian', 'Dhiraj', 'Dhirendra', 'Dhyan', 'Dilawar', 'Diler', 'Dilip', 'Dilraaj', 'Diwan', 'Eashar', 'Eckjeet', 'Ekambir', 'Ekant', 'Eqbal', 'Erbir', 'Esharveer', 'Eshwar', 'Eshwarjeet', 'Fakeer', 'Fakir', 'Fal', 'Falak', 'Faquir', 'Fareed', 'Farid', 'Fateh', 'Fatehbir', 'Fatehpal', 'Fauja', 'Fir', 'Foola', 'Furmaan', 'Gajendra', 'Gajinder', 'Gaurav', 'Gauravdeep', 'Ghamand', 'Gharchet', 'Giaan', 'Giaanveer', 'Gian', 'Gianparkash', 'Giansh', 'Gianveer', 'Gopal', 'Gulwant', 'Gulzar', 'Gun', 'Gunbir', 'Guneet', 'Guntas', 'Gunveer', 'Gunwant', 'Guramar', 'Gurbachan', 'Gurbakhsh', 'Gurbaksh', 'Gurbhagat', 'Gurbir', 'Gurcharan', 'Gurdal', 'Gurdas', 'Gurdayal', 'Gurdev', 'Gurdyal', 'Gurgian', 'Gurgyan', 'Guriqbal', 'Gurjas', 'Gurjeevan', 'Gurmaan', 'Gurman', 'Gurmukh', 'Gurnam', 'Gurpal', 'Gursewak', 'Gurshant', 'Gursharan', 'Gurveer', 'Gurvir', 'Gyandeep', 'Gyanveer', 'Hakam', 'Hans', 'Hanspal', 'Hansraj', 'Hansroop', 'Harbans', 'Harbhajan', 'Harbir', 'Harchanan', 'Hardas', 'Hardayal', 'Hardeep', 'Hardeet', 'Hardev', 'Hardhian', 'Hardhyan', 'Hardit', 'Hardyal', 'Hari', 'Haricharan', 'Haridas', 'Harikiran', 'Harjap', 'Harkanwal', 'Harkiran', 'Harnam', 'Harpal', 'Harpuneet', 'Harsajjan', 'Harsharan', 'Harzadan', 'Himmat', 'Hitender', 'Hukam', 'Ikbal', 'Ikroop', 'Inder', 'Inderbir', 'Inderdeep', 'Inderjit', 'Indermohan', 'Inderpal', 'Indirveer', 'Indrajit', 'Ipninder', 'Iqbal', 'Ishwar', 'Ishwinder', 'Jag', 'Jagan', 'Jagdees', 'Jagdesh', 'Jagjeet', 'Jagjeevan', 'Jagjit', 'Jagmohan', 'Jagtar', 'Jai', 'Jaideep', 'Jaipal', 'Jairaj', 'Jal', 'Jamail', 'Janam', 'Jap', 'Japbir', 'Japinder', 'Jarnail', 'Jas', 'Jasbir', 'Jasjeevan', 'Jasmohan', 'Jasnam', 'Jaswant', 'Jaswinder', 'Jay', 'Jaydeep', 'Jee', 'Jeet', 'Jeevai', 'Jeevan', 'Jivan', 'Jodh', 'Kaam', 'Kabhoo', 'Kahn', 'Kalbir', 'Kalwindar', 'Kalyan', 'Kamalpal', 'Kamalvir', 'Kanvar', 'Kanwal', 'Karaj', 'Karampal', 'Karan', 'Karnail', 'Kartar', 'Kashmir', 'Kavan', 'Kavi', 'Kawal', 'Kewal', 'Khahish', 'Khalakveer', 'Khalsa', 'Khushpreet', 'Khushwant', 'Kirpal', 'Kirpan', 'Kishan', 'Kiv', 'Kul', 'Kulbir', 'Kuldeep', 'Kuldev', 'Kuldip', 'Kulvir', 'Kulwant', 'Kundan', 'Lakhbir', 'Lakshman', 'Lakviar', 'Lalit', 'Laxman', 'Livsharan', 'Livtar', 'Loveen', 'Maanas', 'Madan', 'Madankirpal', 'Madanpal', 'Mahaan', 'Mahesh', 'Mahindar', 'Mahinder', 'Mahipal', 'Mahtab', 'Major', 'Makhan', 'Manbir', 'Manmohan', 'Manoj', 'Mansukh', 'Manukha', 'Manveer', 'Manvir', 'Maskeen', 'Mastaan', 'Mastveer', 'Meeta', 'Meh', 'Mensa', 'Mina', 'Mita', 'Mithal', 'Mohan', 'Mohanbir', 'Mohandyal', 'Mohinder', 'Mohinderpal', 'Mohinderpratap', 'Mukat', 'Mukhtair', 'Nagar', 'Nalin', 'Namdev', 'Namjas', 'Narveer', 'Nather', 'Navbir', 'Navdeep', 'Naveen', 'Navinder', 'Navjot', 'Navraj', 'Nihal', 'Niranjan', 'Nirbaan', 'Nirban', 'Nirman', 'Nirvair', 'Nitnam', 'Noordev', 'Omaha', 'Onkar', 'Oopajai', 'Pal', 'Pankaj', 'Param', 'Parambir', 'Paramdeep', 'Paramdev', 'Parampal', 'Paramveer', 'Pardeep', 'Pargat', 'Parsad', 'Parsan', 'Partap', 'Parveen', 'Patveer', 'Patwant', 'Pavan', 'Pavitar', 'Pavith', 'Pawandeep', 'Phoola', 'Pooran', 'Prabh', 'Prabhbir', 'Prabhdeep', 'Prabhjote', 'Prakash', 'Prathipaal', 'Prem', 'Prempal', 'Pritpal', 'Puneet', 'Quarbaan', 'Raaj', 'Raajaa', 'Raam', 'Raghubir', 'Raj', 'Raja', 'Rajbir', 'Rajdev', 'Rajindar', 'Rajpal', 'Rajveer', 'Ram', 'Ramandeep', 'Ramanjit', 'Rambir', 'Ramdas', 'Ramdeep', 'Ramgeet', 'Ramindar', 'Ramjeet', 'Rana', 'Ranbir', 'Randeep', 'Ranga', 'Rangleen', 'Ranjit', 'Ranveer', 'Ranvir', 'Ras', 'Rasbir', 'Rasjeevan', 'Ratan', 'Ratanbir', 'Ravindar', 'Ravinder', 'Rus', 'Saacha', 'Sabad', 'Sachdeep', 'Sachdev', 'Sachdhian', 'Sachgian', 'Sachsev', 'Sachsukh', 'Sachveer', 'Sadha', 'Sadhu', 'Safal', 'Sagal', 'Sagar', 'Sahib', 'Sahil', 'Sajan', 'Sajjan', 'Salaah', 'Samarbir', 'Sameer', 'Sampuran', 'Samrath', 'Samsher', 'Sandeep', 'Sangat', 'Sangram', 'Sansaar', 'Sant', 'Sar', 'Sarabdeep', 'Sarabdev', 'Saran', 'Sarbjeet', 'Sarjant', 'Sartaj', 'Sarwan', 'Sat', 'Satbachan', 'Satbir', 'Satchet', 'Satgun', 'Satgur', 'Satinderpal', 'Satjeevan', 'Satnam', 'Satpal', 'Satparvan', 'Satpaul', 'Satveer', 'Satwant', 'Satwinder', 'Satyapal', 'Satyender', 'Savinder', 'Seva', 'Sewa', 'Sewak', 'Sewakaran', 'Shaan', 'Shabaddeep', 'Shah', 'Shaman', 'Shamsher', 'Shamz', 'Shangara', 'Sher', 'Sherbahadur', 'Shivcharan', 'Shivcharanjit', 'Shoorveer', 'Shubhdeep', 'Sidhak', 'Sikander', 'Sikh', 'Sodhi', 'Sohan', 'Sonny', 'Subash', 'Subhash', 'Sukh', 'Sukhbir', 'Sukhbirpal', 'Sukhchain', 'Sukhcharan', 'Sukhcharanjit', 'Sukhdarshan', 'Sukhdeep', 'Sukhdev', 'Sukhjiwan', 'Sukhnam', 'Sukhpal', 'Sukhpreet', 'Sukhraj', 'Sukhram', 'Sukhshant', 'Sukhsharan', 'Sukhveer', 'Sukhwant', 'Sulakhan', 'Sultan', 'Sundarveer', 'Sundeep', 'Sunil', 'Sunny', 'Surajprakash', 'Surat', 'Surinder', 'Surinderpal', 'Surjit', 'Surya', 'Sutantar', 'Sutho', 'Swaraj', 'Swaran', 'Swaranjeet', 'Swaranlal', 'Swaranpal', 'Taan', 'Tajender', 'Tajinder', 'Takhat', 'Talib', 'Talvir', 'Talwar', 'Tan', 'Taran', 'Tariq', 'Tarlochan', 'Tarun', 'Teg', 'Tegbir', 'Tegh', 'Teja', 'Tejas', 'Tejbir', 'Tejindar', 'Tejinder', 'Tejpal', 'Thakur', 'Thakurjeet', 'Thalbir', 'Thirath', 'Tilak', 'Tirath', 'Tribhawan', 'Trilochan', 'Triman', 'Tripat', 'Udai', 'Uday', 'Uddam', 'Udit', 'Ujaagar', 'Ujjal', 'Updes', 'Upender', 'Upkaar', 'Upraj', 'Utam', 'Uttam', 'Uttampal', 'Uttamveer', 'Vaar', 'Vachan', 'Vaibhav', 'Vallabh', 'Vandit', 'Var', 'Variam', 'Varinder', 'Varinderjeet', 'Varinderpal', 'Varun', 'Veechar', 'Veer', 'Veerindar', 'Vichar', 'Vijai', 'Vijay', 'Vijender', 'Vikham', 'Vikram', 'Vikramjeet', 'Vikramjit', 'Vikrampal', 'Vikrampreet', 'Vimal', 'Vinay', 'Vir', 'Vishram', 'Waris', 'Yadbir', 'Yadveer', 'Yadvinder', 'Yadvir', 'Yash', 'Yashbir', 'Yashdeep', 'Yashdev', 'Yashdip', 'Yashpaal', 'Yashpal', 'Yashveer', 'Yashwant', 'Yuvraj', 'Yuvrani', 'Zail', 'Zorawar'];
  const nm2 = ['Aad', 'Aadh', 'Aagya', 'Aasa', 'Aasha', 'Ab', 'Abh', 'Abhiroop', 'Abichal', 'Achal', 'Adarshpreet', 'Adh', 'Adish', 'Adishvar', 'Agamjot', 'Agampreet', 'Aganee', 'Agochar', 'Agya', 'Ahar', 'Ajaipal', 'Ajaipreet', 'Ajooni', 'Akaal', 'Akal', 'Akaldeep', 'Akaljeet', 'Akaljot', 'Akalkeerat', 'Akalpreet', 'Akalroop', 'Akhiljeet', 'Akhilpreet', 'Akshdeep', 'Alam', 'Albel', 'Amalinder', 'Amandeep', 'Amandip', 'Amanjeet', 'Amanjot', 'Amanpreet', 'Amanroop', 'Amardeep', 'Amarjeet', 'Amarjit', 'Amarjot', 'Amarleen', 'Amaroop', 'Amarpreet', 'Amita', 'Amraoo', 'Amreet', 'Amrik', 'Amrindar', 'Amrit', 'Amrita', 'Amritleen', 'Amritvaani', 'Anadjot', 'Anandjot', 'Anandleen', 'Anandroop', 'Anantarjot', 'Aneeshkour', 'Anjeela', 'Antarjot', 'Antarpreet', 'Anu', 'Apaar', 'Apna', 'Apnaa', 'Arjan', 'Armaani', 'Armeet', 'Armin', 'Arminder', 'Arnalinder', 'Arpan', 'Arunjit', 'Arvinderjit', 'Asaroop', 'Asha', 'Asudh', 'Atamjeet', 'Atinder', 'Atinderjeet', 'Atol', 'Attamjeet', 'Attamjit', 'Aupinder', 'Avani', 'Avaninder', 'Avar', 'Aykai', 'Baalak', 'Bachint', 'Baegana', 'Bairagi', 'Bakhsheesh', 'Baksheesh', 'Balan', 'Baldeep', 'Balinder', 'Balinderjit', 'Baljinder', 'Baljit', 'Balroop', 'Baltej', 'Balvinder', 'Balwinder', 'Banee', 'Bani', 'Banita', 'Barinder', 'Barjinder', 'Barminder', 'Basant', 'Bayit', 'Bebe', 'Beebee', 'Beena', 'Bhagwantjot', 'Bhagwantroop', 'Bhao', 'Bharpoor', 'Bhavana', 'Bhavdeep', 'Bhavender', 'Bhavjeet', 'Bhoopendra', 'Bhupindar', 'Bhupinder', 'Bibi', 'Bijul', 'Bina', 'Binajit', 'Bir', 'Bisanpreet', 'Bishan', 'Bismeet', 'Brahamjeet', 'Brijodh', 'Budhpreet', 'Chamkaur', 'Chan', 'Chanandeep', 'Chanandip', 'Chananjeet', 'Chananjit', 'Chanchal', 'Chand', 'Chandan', 'Chandani', 'Chandeep', 'Chanden', 'Charanjeet', 'Charanjot', 'Charanpreet', 'Chathur', 'Chet', 'Chhaya', 'Chintan', 'Chiran', 'Chiranjeev', 'Chitleen', 'Chitranjan', 'Chuni', 'Crishdeep', 'Daljeet', 'Dalmeet', 'Darpreet', 'Davinder', 'Daya', 'Debjit', 'Deen', 'Deep', 'Deepti', 'Desa', 'Devi', 'Devjeet', 'Devpreet', 'Dhan', 'Dhann', 'Dharamjyot', 'Dharamleen', 'Dharampreet', 'Dharamsheel', 'Dharat', 'Dhaya', 'Dhhan', 'Dhianjot', 'Dhin', 'Dhoop', 'Didar', 'Dil', 'Dilbaag', 'Dilbaagh', 'Dilpreet', 'Din', 'Disai', 'Disha', 'Dit', 'Divjot', 'Divya', 'Door', 'Ekaagar', 'Ekam', 'Ekamjot', 'Ekampreet', 'Ekanjeet', 'Ekanpreet', 'Ekjot', 'Ekkam', 'Ekroop', 'Ekta', 'Erheer', 'Erhi', 'Erjot', 'Erleen', 'Ersheen', 'Gagan', 'Gagandeep', 'Gaganjot', 'Gaganjyot', 'Garib', 'Garima', 'Gatleen', 'Gatnam', 'Gatsharan', 'Geena', 'Geet', 'Ghar', 'Gharcheen', 'Giaandeep', 'Giaanleen', 'Giaanpreet', 'Giaanroop', 'Giandeep', 'Giani', 'Gianleen', 'Gianpreet', 'Gianroop', 'Gulab', 'Gundeep', 'Gunjun', 'Gunkar', 'Gunkeerat', 'Gunkirit', 'Gunpreet', 'Guraman', 'Gurchet', 'Gurdaya', 'Gurdeep', 'Gurdit', 'Gurditta', 'Gurdweep', 'Gurinder', 'Gurjeet', 'Gurjit', 'Gurjot', 'Gurkamal', 'Gurkeerat', 'Gurkiran', 'Gurkirat', 'Gurleen', 'Gurmeet', 'Gurneet', 'Gurnek', 'Gurnoor', 'Gurpreet', 'Gursiman', 'Gursimrah', 'Gursukh', 'Gurtaran', 'Gurtej', 'Gurvinder', 'Gyan', 'Gyanleen', 'Gyanpreet', 'Gyanroop', 'Haak', 'Haast', 'Hamara', 'Hamir', 'Hamray', 'Hansa', 'Hansra', 'Har', 'Haranoop', 'Harbeer', 'Harbin', 'Harbinder', 'Hardial', 'Harendra', 'Hargun', 'Harinder', 'Haripreet', 'Harisaroop', 'Harjeet', 'Harjeevan', 'Harjinder', 'Harjit', 'Harjodh', 'Harjot', 'Harkeerat', 'Harkinder', 'Harkirat', 'Harleen', 'Harmandar', 'Harmeet', 'Harmehar', 'Harneet', 'Harnek', 'Harpreet', 'Harsimran', 'Harsukh', 'Harta', 'Hartej', 'Hasan', 'Heera', 'Hema', 'Herho', 'Hirdai', 'Hohu', 'Hoojoe', 'Huk', 'Hukmee', 'Hukmi', 'Ikam', 'Ikhtiar', 'Ikjot', 'Ikna', 'Inderpreet', 'Indirjeet', 'Indirjot', 'Indirpreet', 'Irleen', 'Isha', 'Ishkirat', 'Jagroop', 'Jagvinder', 'Jaimal', 'Jaipreet', 'Jangjeet', 'Japjot', 'Japleen', 'Jasdeep', 'Jashar', 'Jaskaran', 'Jaskeerat', 'Jaskirit', 'Jasleen', 'Jasmeh', 'Jasminder', 'Jasmine', 'Jaspinder', 'Jaspreet', 'Jasveer', 'Jasvinder', 'Jatinder', 'Jessa', 'Joban', 'Jobandeep', 'Jodhdeep', 'Jogindar', 'Jot', 'Joti', 'Jugaad', 'Jugad', 'Jujhar', 'Jyoti', 'Kaaj', 'Kamal', 'Kamaldeep', 'Kamaldip', 'Kamaljot', 'Kamalpreet', 'Kamneev', 'Kanan', 'Kanwalnain', 'Karam', 'Karamdeep', 'Karamjot', 'Karampreet', 'Karandeep', 'Karanjit', 'Kareen', 'Karma', 'Kashmiri', 'Katha', 'Kawaljeet', 'Kawaljit', 'Kawalpreet', 'Keerat', 'Keeratdeep', 'Keerath', 'Kharak', 'Khivi', 'Khush', 'Kieran', 'Kierat', 'Kiran', 'Kirat', 'Kirin', 'Kirit', 'Kirpa', 'Komal', 'Kuljeet', 'Kuljit', 'Kulmeet', 'Kultaran', 'Kulvinder', 'Kuranpreet', 'Lachan', 'Laila', 'Lakh', 'Lakshmani', 'Lavindeep', 'Leela', 'Leen', 'Leena', 'Liv', 'Livdeep', 'Livjot', 'Livleen', 'Livpreet', 'Livroop', 'Madanjeet', 'Madanjit', 'Madho', 'Maheshinder', 'Mamta', 'Man', 'Mana', 'Manat', 'Manavinder', 'Mandeep', 'Mandhir', 'Mandip', 'Mangal', 'Maninder', 'Maninderjeet', 'Maninderjit', 'Maninderpal', 'Manjeet', 'Manjit', 'Mankaran', 'Mannat', 'Manohar', 'Manpreet', 'Manroop', 'Mantosh', 'Manvinder', 'Marig', 'Mata', 'Matinder', 'Maya', 'Mayray', 'Mayree', 'Meen', 'Meena', 'Meenu', 'Meet', 'Mehar', 'Meher', 'Mehnga', 'Mehpreet', 'Moh', 'Mukh', 'Naem', 'Naethr', 'Nageena', 'Naginder', 'Nain', 'Nam', 'Namar', 'Namarta', 'Namjeev', 'Namjot', 'Namleen', 'Nampreet', 'Namrita', 'Namroop', 'Nanak', 'Nanaki', 'Narain', 'Nardev', 'Narinder', 'Navjeet', 'Navjeev', 'Navkiran', 'Navleen', 'Navneet', 'Navpreet', 'Neena', 'Nimeeta', 'Nimm', 'Nimmi', 'Nimmia', 'Nimrat', 'Nimrata', 'Nina', 'Nir', 'Nirbhau', 'Nirmail', 'Nirmal', 'Nishaa', 'Nith', 'Noor', 'Nripinder', 'Onkarjeet', 'Opinder', 'Pahar', 'Paramgeet', 'Paramjit', 'Paramjog', 'Paramjot', 'Paramleen', 'Parampreet', 'Paramvir', 'Parbeen', 'Pareet', 'Parmindar', 'Pehila', 'Pehir', 'Piaar', 'Pith', 'Pitha', 'Pooja', 'Prabhgun', 'Prabhjeet', 'Prabhjit', 'Prabhjot', 'Prabhkirat', 'Prabhleen', 'Prabhmeet', 'Prabhnoor', 'Prabhroop', 'Prabhrup', 'Prabhsimran', 'Preet', 'Preetamjot', 'Premdeep', 'Premjeet', 'Premjot', 'Premleen', 'Priya', 'Pushpinder', 'Quarbani', 'Raekh', 'Rajni', 'Ramjot', 'Ramleen', 'Ramneek', 'Ramneet', 'Rampreet', 'Rang', 'Rangjot', 'Rangpreet', 'Ranjot', 'Rasdeep', 'Rasgun', 'Rasgur', 'Rasjog', 'Rasleen', 'Rasnam', 'Ratandeep', 'Ratangeet', 'Ratanpreet', 'Raunak', 'Raushan', 'Raveena', 'Ravleen', 'Ravneet', 'Ree', 'Reet', 'Rijak', 'Roop', 'Roopindar', 'Roopjot', 'Rung', 'Rupak', 'Rupinder', 'Saach', 'Saaj', 'Sabar', 'Sabooree', 'Sach', 'Sachkeerat', 'Sachleen', 'Sachman', 'Sachpreet', 'Sadhika', 'Saihaj', 'Saihajleen', 'Samaae', 'Samarjit', 'Samoe', 'Sangita', 'Sanjit', 'Sanjog', 'Santo', 'Santokh', 'Sarab', 'Sarabjeet', 'Sarabjit', 'Sarabjot', 'Sarableen', 'Sarabnam', 'Saram', 'Sarina', 'Sarminder', 'Sarna,', 'Saroj', 'Saroop', 'Satinder', 'Satkeerat', 'Satkiran', 'Satleen', 'Satpreet', 'Satsukh', 'Satvinder', 'Savi', 'Seanna', 'Seetal', 'Semrarjit', 'Serena', 'Shabad', 'Shabadpreet', 'Shabeg', 'Sharan', 'Sharanjeet', 'Siaana', 'Siana', 'Sifat', 'Simar', 'Simardeep', 'Simarleen', 'Simarou', 'Simran', 'Simranjit', 'Simranpreet', 'Simrarjit', 'Simrat', 'Simrin', 'Simrit', 'Simrita', 'Sio', 'Siopareet', 'Siriom', 'Sobha', 'Soch', 'Sochai', 'Sonam', 'Soor', 'Sooria', 'Srina', 'Stallionjit', 'Sujan', 'Sukhi', 'Sukhinder', 'Sukhindir', 'Sukhjeet', 'Sukhjeev', 'Sukhjinder', 'Sukhjit', 'Sukhjodh', 'Sukhjot', 'Sukhleen', 'Sukhmani', 'Sukhmeet', 'Sukhminder', 'Sukhrajpreet', 'Sukhroop', 'Sukhvinder', 'Sukhwinder', 'Sumat', 'Sundar', 'Sundarjeet', 'Sunita', 'Sur', 'Suria', 'Surina', 'Surinderjeet', 'Surinderjit', 'Surjot', 'Takdeer', 'Takhvinder', 'Tara', 'Taraa', 'Tarsem', 'Taru', 'Tarvinder', 'Tatleen', 'Tavleen', 'Teertah', 'Teijinder', 'Teijinderjeet', 'Teijinderjit', 'Tej', 'Tejinderjit', 'Tejinderpreet', 'Tekjot', 'Teknam', 'Tekroop', 'Tia', 'Torah', 'Tulwa', 'Udaijot', 'Ujaala', 'Ujjaldeep', 'Ujjaldip', 'Ujjaljeet', 'Ujjaljit', 'Ujjalpreet', 'Ujjalroop', 'Uma', 'Unn', 'Upaavan', 'Upavan', 'Upenderjeet', 'Upenderjit', 'Upjeet', 'Upkeerat', 'Upninder', 'Uppenderjeet', 'Uppenderjit', 'Usha', 'Uttamjeet', 'Uttamjit', 'Uttamjodh', 'Uttamjot', 'Uttamleen', 'Uttampreet', 'Uttamreet', 'Uttamroop', 'Vaani', 'Vaapaar', 'Vadiaya', 'Vandan', 'Vapar', 'Varinderjit', 'Vasai', 'Vasant', 'Vasee', 'Vasi', 'Vatish', 'Vayla', 'Vela', 'Vicharleen', 'Vidhya', 'Vidia', 'Vigsai', 'Virala', 'Visar', 'Wadha', 'Wafa', 'Waryam', 'Yadleen', 'Yashnoor', 'Yasmine', 'Yuvleen', 'Zareena', 'Zeenat', 'Zena', 'Zulf'];
  const nm3 = ['Anuja', 'Anwal', 'Arab', 'Arar', 'Arora', 'Arya', 'Asar', 'Asra', 'Athangal', 'Atwal', 'Aujla', 'Aulakh', 'Aurak', 'Babbar', 'Bachhal', 'Badah', 'Badanah', 'Badechh', 'Bader', 'Badhan', 'Badohal', 'Badro', 'Badye', 'Bagrah', 'Bagri', 'Bahia', 'Bahniwal', 'Baidwan', 'Bains', 'Bairwal', 'Bajwa', 'Bakarki', 'Bal', 'Balagan', 'Balham', 'Balho', 'Balwatrah', 'Banb', 'Band', 'Bandal', 'Bandechh', 'Bandejah', 'Banhor', 'Bansal', 'Bansil', 'Banwait', 'Bariya', 'Baryar', 'Baseen', 'Basi', 'Basra', 'Bat', 'Batar', 'Bath', 'Bati', 'Battar', 'Bawah', 'Bawre', 'Bedi', 'Bendre', 'Benipal', 'Berag', 'Bhachu', 'Bhadah', 'Bhadiar', 'Bhagar', 'Bhaggu', 'Bhains', 'Bhalar', 'Bhalerah', 'Bhaman', 'Bhamrai', 'Bhandar', 'Bhander', 'Bhango', 'Bhangu', 'Bhaniwal', 'Bhanrar', 'Bhar', 'Bharah', 'Bharaj', 'Bharal', 'Bharanch', 'Bhari', 'Bharwal', 'Bharwana', 'Bharyar', 'Bhati', 'Bhati Wad', 'Bhidal', 'Bhilku', 'Bhindal', 'Bhindar', 'Bhogal', 'Bhojiya', 'Bhola', 'Bholar', 'Bhonah', 'Bhotah', 'Bhotar', 'Bhullar', 'Bhutha', 'Bijral', 'Bilku', 'Bindra', 'Bindre', 'Binepal', 'Bochah', 'Bojak', 'Bola', 'Bonah', 'Bopahrae', 'Boperai', 'Bosan', 'Botar', 'Brar', 'Bubak', 'Buch', 'Buhar', 'Bura', 'Burana', 'Burra', 'Buta', 'Buttar', 'CChina', 'Chaddu', 'Chaggar', 'Chahal', 'Chaina', 'Chakora', 'Chamal', 'Chamer', 'Chanan', 'Chanbal', 'Chandar', 'Chandarh', 'Chander', 'Changala', 'Chankar', 'Channar', 'Chanon', 'Chanwan', 'Chasti', 'Chattha', 'Chatyal', 'Chaudhary', 'Chaudry', 'Chemiya', 'Chhajra', 'Chhaju', 'Chhamia', 'Chhana', 'Chhanb', 'Chhaner', 'Chhatar', 'Chhatta', 'Chhina', 'Chholiana', 'Chhon', 'Chhoni', 'Chimma', 'China', 'Chohang', 'Chokahi', 'Chokhia', 'Choniya', 'Chosar', 'Chowah', 'Chowan', 'Chowdhary', 'Chowdry', 'Dabb', 'Dadu', 'Dagar', 'Daha', 'Dahal', 'Dahalo', 'Dahamrai', 'Dahan', 'Dahang', 'Dahar', 'Dahawa', 'Dahba', 'Dahiya', 'Dahko', 'Dahloli', 'Daho', 'Dahon', 'Dahrala', 'Dahrija', 'Dal', 'Dalani', 'Dalo', 'Dammar', 'Dandi', 'Dandiwal', 'Danwar', 'Dargh', 'Daspal', 'Daul', 'Dehia', 'Deoania', 'Deol', 'Derija', 'Deswal', 'Dewala', 'Dewar', 'Dhadah', 'Dhakku', 'Dhalan', 'Dhali', 'Dhalon', 'Dhanda', 'Dhandsahar', 'Dhankar', 'Dhanoe', 'Dhanri', 'Dhar', 'Dhariwal', 'Dhasi', 'Dhaunchak', 'Dhed', 'Dher', 'Dhesi', 'Dhillon', 'Dhinsa', 'Dhol', 'Dhori', 'Dhotar', 'Dhudhi', 'Dhudi', 'Dihadrae', 'Dilbar', 'Dilber', 'Dodi', 'Dolat', 'Domarah', 'Drigs', 'Dulhat', 'Dun', 'Dund Rai', 'Dusanj', 'Faqartadari', 'Faqrakh', 'Gabhal', 'Gabir', 'Gadarah', 'Gadari', 'Gadwar', 'Gagrah', 'Gal', 'Galhar', 'Galwatrah', 'Gandia', 'Gandu', 'Gangah', 'Ganj', 'Ganwan', 'Ganwanen', 'Ganwari', 'Ganwen', 'Garalwal', 'Garhar', 'Gat', 'Gatab', 'Gawaria', 'Gazdar', 'Gazzi', 'Gelan', 'Gendas', 'Ghagah', 'Ghagrah', 'Ghalo', 'Ghalo Kanjanarah', 'Ghalowaknun', 'Ghaman', 'Ghan', 'Ghanghas', 'Ghatora', 'Ghatwal', 'Ghumman', 'Gill', 'Gir', 'Girwanh', 'Godara', 'Gohra', 'Goj', 'Golia', 'Gondal', 'Gopa Rai', 'Gopalak', 'Gor', 'Gorae', 'Gorah', 'Goratah', 'Goraya', 'Gori', 'Goria', 'Goron', 'Gorwah', 'Gosal', 'Grewal', 'Guda', 'Gujjral', 'Guraha', 'Guru', 'Hajra', 'Hakim', 'Hal', 'Hamar', 'Hamara', 'Hamath', 'Hamdi', 'Hamshirah', 'Hanbi', 'Handal', 'Hanjan', 'Hanjra', 'Hans', 'Hansalah', 'Hansarah', 'Harar', 'Hari', 'Harl', 'Hasam', 'Hathar', 'Hatiar', 'Hayre', 'Her', 'Hijra', 'Hinjra', 'Holi', 'Hondal', 'Hothi', 'Huda', 'Hundal', 'Hunjan', 'Hural', 'Jabar', 'Jagal', 'Jaglan', 'Jahanbar', 'Jahanbo', 'Jai', 'Jajjah', 'Jakhar', 'Jali', 'Jamra', 'Jandhu', 'Janer', 'Jangali', 'Jangla', 'Jani', 'Janil', 'Jarah', 'Jaria', 'Jassal', 'Jastar', 'Jatatier', 'Jathol', 'Jatowal', 'Jaun', 'Jawa', 'Jawia', 'Jeeta', 'Jhad', 'Jhakar', 'Jhalan', 'Jhalli', 'Jhamat', 'Jhandir', 'Jhari', 'Jheeta', 'Jhonjah', 'Jhor', 'Jhotah', 'Jita', 'Johal', 'Jojah', 'Joldaha', 'Jomar', 'Jondah', 'Jopo', 'Josan', 'Jun', 'Junhi', 'Jurai', 'Juta', 'Kachala', 'Kachela', 'Kadian', 'Kahl', 'Kahlon', 'Kahon', 'Kahut', 'Kajlan', 'Kal', 'Kalar', 'Kalasarah', 'Kaler', 'Kaleroth', 'Kalhir', 'Kalhora', 'Kalirai', 'Kalirawan', 'Kallu', 'Kalo', 'Kalon', 'Kalru', 'Kalsi', 'Kamera', 'Kamon', 'Kanag', 'Kanchi', 'Kanda', 'Kandwa', 'Kaneran', 'Kang', 'Kangrah', 'Kanjan', 'Kanon', 'Kanonkhor', 'Kanwari', 'Kanwen', 'Kapai', 'Kapoor', 'Karde', 'Karhalah', 'Kat', 'Kataria', 'Kator', 'Katrah', 'Kauri', 'Kawari', 'Kawera', 'Kejah', 'Kejar', 'Kele', 'Kerah', 'Kes', 'Khab', 'Khadal', 'Khadar', 'Khagah', 'Khajah', 'Khajan', 'Khak', 'Khakh', 'Khaki', 'Khal', 'Khalah', 'Khalani', 'Khalsa', 'Khalwah', 'Khamah', 'Khaman', 'Khand', 'Khanjan', 'Khar', 'Khara', 'Kharak', 'Kharora', 'Kharral', 'Kharwala', 'Kharye', 'Khatra', 'Khatrai', 'Khera', 'Khichar', 'Khichi', 'Khilchi', 'Khira', 'Khojah', 'Khokhar', 'Khor', 'Khoreja', 'Khosar', 'Khundi', 'Killa', 'Kodan', 'Kohar', 'Kohja', 'Kohli', 'Kohri', 'Kokarah', 'Kokraya', 'Kuk', 'Kular', 'Kuliar', 'Kundi', 'Kundu', 'Kuretanah', 'Labar', 'Ladhana', 'Ladhar', 'Lahar', 'Lahil', 'Lak', 'Lakha', 'Lakhi', 'Lakhiwal', 'Lakwera', 'Lali', 'Lalli', 'Lang', 'Langah', 'Langanah', 'Lapeja', 'Lar', 'Lasai', 'Lat', 'Lathar', 'Lather', 'Laur', 'Lawar', 'Lekho', 'Lel', 'Leli', 'Lillas', 'Lodhara', 'Lodhran', 'Lodrah', 'Lohan', 'Lolah', 'Loleri', 'Lorimalanah', 'Lota', 'Lotha', 'Lunghere', 'Lurka', 'Mader', 'Magsi', 'Mahad', 'Mahal', 'Mahani', 'Mahara', 'Maharana', 'Mahe', 'Mahesar', 'Mahi', 'Mahil', 'Mahir', 'Mahli', 'Mahota', 'Mahra', 'Mahtarmalhi', 'Makhar', 'Makol', 'Makoma', 'Mal', 'Malan', 'Malana', 'Malanhans', 'Malhah', 'Malhi', 'Malhotra', 'Mallhi', 'Malli', 'Mamar', 'Mamarha', 'Mamra', 'Mamrai', 'Mand', 'Mang', 'Mangan', 'Mangat', 'Mangath', 'Manku', 'Mann', 'Markanda', 'Markha', 'Marrar Marula', 'Maryal', 'Masan', 'Maswan', 'Mat', 'Matu', 'Megal', 'Megla', 'Mekan', 'Menas', 'Meri', 'Mermalha', 'Mesar', 'Metla', 'Miana', 'Mistri', 'Mitru', 'Mochani', 'Mochhar', 'Modi', 'Mohal', 'Mond', 'Mondah', 'Mondi', 'Month', 'Mor', 'Moran', 'Morare', 'Motha', 'Mudhar', 'Mula', 'Mundtor', 'Nachang', 'Nadal', 'Nadho', 'Nagra', 'Nagri', 'Naich', 'Nain', 'Najar', 'Naloka', 'Nanad', 'Nandlah', 'Nandra', 'Nanwa', 'Narath', 'Narwal', 'Nech', 'Nijar', 'Nijjhar', 'Obhai', 'Odhana', 'Oesi', 'Ojal', 'Ojh', 'Okhal', 'Olak', 'Olakh', 'Omara', 'Otar', 'Otara', 'Othwal', 'Padah', 'Padda', 'Pahal', 'Pahor', 'Pakhai', 'Pakimor', 'Palu', 'Pan', 'Panaich', 'Pandah', 'Pandeshi', 'Pandi', 'Panehal', 'Panesar', 'Panjotarah', 'Panjuttha', 'Pannuhan', 'Panohan', 'Panon', 'Panwar', 'Panwaria', 'Parer', 'Parhar', 'Passani', 'Patoha', 'Paton', 'Patre', 'Paungar', 'Pawri', 'Phachu', 'Phakiwar', 'Phalar', 'Phalron', 'Phalyon', 'Phiphra', 'Phoghat', 'Phulsawal', 'Plaha', 'Pogal', 'Pohea', 'Pokhwat', 'Ponar', 'Poni', 'Poniya', 'Pontah', 'Porawal', 'Pote', 'Puni', 'Punia', 'Punn', 'Punnun', 'Purahwal', 'Puriwal', 'Qalhari', 'Qom', 'Qurejah', 'Rahal', 'Rahan', 'Rahola', 'Rai', 'Raibdar', 'Rain', 'Rajwa', 'Rajwana', 'Rak', 'Rakhya', 'Ramana', 'Ran', 'Randhawa', 'Rando', 'Rangi', 'Ranidhar', 'Ratah', 'Rathi', 'Rathyah', 'Rato', 'Rattol', 'Rawaki', 'Rawani', 'Rawat', 'Rayar', 'Redhu', 'Reman', 'Rhence', 'Riar', 'Rihan', 'Riyar', 'Rokhe', 'Ronga', 'Rongar', 'Roth', 'Ruhal', 'Saanhi', 'Sabrahi', 'Sadhana', 'Sadho', 'Sadhra', 'Sagal', 'Sagoo', 'Saguu', 'Sahansi', 'Saharan', 'Sahol', 'Sahon', 'Sahota', 'Sahrawat', 'Sahwal', 'Sajra', 'Sakhra', 'Salahah', 'Salotra', 'Saluja', 'Samdarani', 'Samejah', 'Samor', 'Samra', 'Samrae', 'San', 'Sanbhal', 'Sanda', 'Sandah', 'Sandelah', 'Sandhal', 'Sandhar', 'Sandhi', 'Sandho', 'Sandhu', 'Sandi', 'Sangah', 'Sange', 'Sangere', 'Sanghera', 'Sanghi', 'Sangi', 'Sangoke', 'Sangrah', 'Sangrota', 'Sangwan', 'Sani', 'Sankhalan', 'Sanmoranah', 'Sanond', 'Sansi', 'Sapra', 'Sarai', 'Saran', 'Sarao', 'Sarawat', 'Saraye', 'Sardiye', 'Sargana', 'Sarlah', 'Saroiah', 'Sarot', 'Sarsar', 'Sarwar', 'Sarwi', 'Sategrah', 'Sathar', 'Satiar', 'Satwahan', 'Saunan', 'Seerha', 'Segar', 'Segrah', 'Sehi', 'Sekan', 'Sekhon', 'Sekhu', 'Sekun', 'Sembhi', 'Sembi', 'Semhi', 'Semi', 'Seni', 'Serah', 'Seth', 'Seti', 'Sewarah', 'Sewari', 'Shajra', 'Shekhon', 'Shekhra', 'Shergill', 'Sheroran', 'Sian', 'Siar', 'Sibia', 'Sidhu', 'Sihra', 'Sihria', 'Sindhu', 'Sinhmar', 'Sirha', 'Slaach', 'Slaitch', 'Sodhi', 'Soha', 'Sohi', 'Sojani', 'Solgi', 'Solkah', 'Sonal', 'Sontra', 'Soro', 'Sotbah', 'Sotrak', 'Suda', 'Sumra', 'Sura', 'Suri', 'Surwat', 'Swanch', 'Tahim', 'Tajar', 'Tajra', 'Talah', 'Taleri', 'Talot', 'Tanor', 'Tanwari', 'Taoni', 'Tara', 'Tarar', 'Tareli', 'Tarholi', 'Tatla', 'Tatli', 'Tawri', 'Tewatia', 'Thahal', 'Thiara', 'Thind', 'Thotha', 'Tiwana', 'Todi', 'Tokas', 'Tola', 'Toniyan', 'Trag', 'Tulla', 'Tung', 'Tur', 'Udhana', 'Uppal', 'Uthi', 'Uthwal', 'Uttamzais', 'Valana', 'Varaich', 'Virdee', 'Virdi', 'Virhia', 'Virk', 'Wabah', 'Wadah', 'Wadala', 'Wadhwa', 'Wag', 'Wagan', 'Wagar', 'Wagh', 'Wagha', 'Waghmal', 'Wagi', 'Wahal', 'Wahala', 'Wahandi', 'Wahgah', 'Wahlah', 'Wahniwal', 'Wahroka', 'Wahujah', 'Wains', 'Wairar', 'Wairsi', 'Wajar', 'Wajba', 'Wajla', 'Wajwarah', 'Walar', 'Wallerai', 'Walot', 'Wamak', 'Wanda', 'Wandar', 'Wanghaya', 'Wanjo', 'Wanwar', 'Warah', 'Waran', 'Warbhu', 'Warhe', 'Wark', 'Warya', 'Warye', 'Wasir', 'Wasli', 'Watarah', 'Wato', 'Welan', 'Wijhi', 'Wirk', 'Wulana', 'Yohal'];
  {
    if (type === 1) {
      names = `${sample(nm2)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm3)}`;
    }
    return names;
  }
}
