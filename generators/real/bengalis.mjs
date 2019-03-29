var sample = require ('lodash.sample')

function bengalis() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aalok', 'Aashish', 'Aashutosh', 'Abhijeet', 'Abhijit', 'Abhik', 'Abhimanuya', 'Abhimanya', 'Abhirup', 'Abhoy', 'Abhra', 'Achintya', 'Adler', 'Aghor', 'Ajeet', 'Ajit', 'Ajoy', 'Akhil', 'Akshay', 'Akshaya', 'Akshya', 'Alok', 'Alokendra', 'Amal', 'Amar', 'Amit', 'Amitaabh', 'Amitabh', 'Amitabha', 'Amitava', 'Amiya', 'Amolik', 'Ananda', 'Anik', 'Anil', 'Aniq', 'Anirudha', 'Anirvan', 'Anjuman', 'Anmol', 'Anoop', 'Anshumaan', 'Anshuman', 'Anupam', 'Anuraag', 'Anurag', 'Apoorva', 'Apurba', 'Apurva', 'Ardhendu', 'Arjun', 'Arka', 'Arnab', 'Arpan', 'Arun', 'Asheesh', 'Ashish', 'Ashok', 'Ashutosh', 'Asis', 'Asok', 'Asotosa', 'Aswinikumar', 'Atul', 'Baadal', 'Badal', 'Baldeb', 'Balendra', 'Balinder', 'Bankimchandra', 'Banshi', 'Banshidhar', 'Banshilal', 'Bansi', 'Bansidhar', 'Bansilal', 'Basant', 'Basil', 'Benoy', 'Bharat', 'Bhashkar', 'Bhaskor', 'Bhavani', 'Bhola', 'Bholanath', 'Bhoopendra', 'Bhubaneswar', 'Bhudeb', 'Bihari', 'Biharilal', 'Biju', 'Bimal', 'Biman', 'Binod', 'Bipin', 'Birendra', 'Birendramohan', 'Bishnu', 'Bishwa', 'Bishwanath', 'Biswajeet', 'Bitan', 'Brajamohan', 'Brajmohan', 'Brijamohan', 'Brijmohan', 'Buddhadeb', 'Chaaruchandra', 'Chaitan', 'Chakradhar', 'Chakrapaani', 'Chaman', 'Chamanlal', 'Champabati', 'Champavati', 'Chandan', 'Chandra', 'Chandrabhan', 'Chandrachur', 'Chandragupt', 'Chandrahaas', 'Chandrakiran', 'Chandrakishore', 'Chandrakumar', 'Chandramauli', 'Chandramohan', 'Chandran', 'Chandranath', 'Chandraprakaash', 'Chandraprakash', 'Chandrashekar', 'Chandrashekhar', 'Chandravadan', 'Charuchandra', 'Chaten', 'Chayan', 'Chetan', 'Chinmay', 'Chintan', 'Chirakumar', 'Chittaranjan', 'Deb', 'Debabrata', 'Debashis', 'Debashish', 'Debendra', 'Debendranath', 'Deepak', 'Deepankar', 'Deependra', 'Deependu', 'Deepesh', 'Deeptendu', 'Deeptimay', 'Deeptimoy', 'Dev Kumar', 'Devadas', 'Devakumar', 'Devdas', 'Deveedaas', 'Deveeprasad', 'Devendranath', 'Devesh', 'Devidaas', 'Devidas', 'Deviprasad', 'Dheerandra', 'Dheerendra', 'Dhir', 'Dhirendra', 'Dhirendro', 'Dinabandhu', 'Dinesh', 'Dipankar', 'Dipen', 'Dipendra', 'Dipesh', 'Diptendu', 'Dwaraka', 'Dwarakaa', 'Dwarka', 'Dwarka Nath', 'Dwarkanath', 'Dwijendra', 'Dwijendralal', 'Dwijendranath', 'Dwijesh', 'Eekalabya', 'Ekalavya', 'Ekambar', 'Eknath', 'Faalgun', 'Falgu', 'Falgun', 'Fanibhusan', 'Fanish', 'Gadhar', 'Gagan', 'Gajendra', 'Gajendranath', 'Ganesh', 'Gangesh', 'Gaurav', 'Gaureeshankar', 'Gaurinandan', 'Gaurishankar', 'Gautam', 'Gautama', 'Girish', 'Gobardhan', 'Gobinda', 'Gopaal', 'Gopal', 'Gopalgobinda', 'Gopichand', 'Gour', 'Gourab', 'Gourinandan', 'Gourishankar', 'Goutam', 'Guru', 'Gurupada', 'Hari', 'Harihar', 'Harit', 'Harsh', 'Harsha', 'Hem', 'Hemanga', 'Hemchandra', 'Heramba', 'Herambwa', 'Himadri', 'Himaghana', 'Himanish', 'Hiran', 'Hiranmay', 'Hiranmaya', 'Hrishab', 'Hrishabh', 'Indra', 'Indrajit', 'Indranil', 'Indrashis', 'Indrashish', 'Ishwar', 'Jagadish', 'Jagadisha', 'Jagannath', 'Jagat', 'Jagdish', 'Jaidev', 'Jaladhar', 'Jatindra', 'Jatindranath', 'Jay', 'Jayanta', 'Jayashish', 'Jaydeb', 'Joy', 'Kailash', 'Kamal', 'Lalit', 'Malay', 'Mihir', 'Milan', 'Mithun', 'Nayan', 'Nikhil', 'Pabok', 'Parth', 'Partho', 'Phanish', 'Pranab', 'Pranav', 'Ramesh', 'Rishabh', 'Roshan', 'Sanjay', 'Satyajeet', 'Satyajit', 'Satyen', 'Shaan', 'Shantanu', 'Shisheer', 'Shishir', 'Shubhang', 'Sisir', 'Som', 'Som Nath', 'Somu', 'Sonu', 'Subhash', 'Sudeep', 'Sudip', 'Suresh', 'Swapnil', 'Tapas', 'Utpal', 'Vikrant', 'Vinod', 'Virendra', 'Vishwajeet', 'Vishwajit', 'Vishwanath', 'Vivek'];
  const nm2 = ['Aishwarya', 'Aiswarya', 'Ajanta', 'Ali', 'Amala', 'Amla', 'Amodita', 'Amolika', 'Amrita', 'Amritambu', 'Amrusha', 'Anasooya', 'Anasuya', 'Anindita', 'Anjali', 'Ankolika', 'Anmolika', 'Annapoorna', 'Annapurna', 'Anshula', 'Anupama', 'Anuradha', 'Anurupa', 'Anusuya', 'Aparajita', 'Aparijita', 'Aparna', 'Archana', 'Arpita', 'Aruna', 'Arundhati', 'Arunima', 'Aswini', 'Atreyee', 'Atreyi', 'Ayanna', 'Baijayanti', 'Bakul', 'Bandana', 'Bani', 'Bansari', 'Banshari', 'Barnali', 'Barsha', 'Baruna', 'Baruni', 'Bhaarati', 'Bhaavana', 'Bhabani', 'Bharati', 'Bhavana', 'Bhavini', 'Bhavna', 'Bhoomika', 'Bhumika', 'Bibha', 'Bibhuti', 'Bijoya', 'Bimala', 'Bimla', 'Bindu', 'Binita', 'Binodini', 'Bipasha', 'Bithika', 'Bratati', 'Brinda', 'Chaitali', 'Chakrika', 'Chameli', 'Chamelia', 'Champa', 'Chanchala', 'Chandi', 'Chandira', 'Chandra', 'Chandrabali', 'Chandrakala', 'Chandrakanta', 'Chandrani', 'Chandrima', 'Charu', 'Charvi', 'Chitra', 'Chitralekha', 'Daevi', 'Damayanti', 'Damyanti', 'Darpana', 'Debi', 'Deepa', 'Deepali', 'Deeptimayee', 'Deeptimoyee', 'Devi', 'Dhara', 'Dhriti', 'Dipali', 'Divya', 'Doyel', 'Drishti', 'Dristi', 'Durba', 'Durga', 'Durva', 'Eenakshi', 'Eesha', 'Ekantika', 'Ekaparana', 'Ekata', 'Ekavali', 'Ekta', 'Ektaa', 'Esha', 'Falguni', 'Fullara', 'Gargi', 'Geet', 'Geeta', 'Geetanjali', 'Gitanjali', 'Himani', 'Jagruti', 'Jaya', 'Jyoti', 'Kajol', 'Kalpana', 'Kanan', 'Kanchan', 'Kanchana', 'Kanika', 'Karuna', 'Kasturi', 'Kishori', 'Komal', 'Komali', 'Kshipra', 'Laboni', 'Lalima', 'Lalita', 'Leena', 'Lekha', 'Manali', 'Mausami', 'Minaxi', 'Mishti', 'Nalini', 'Nandita', 'Nilima', 'Oormila', 'Paromita', 'Pauravi', 'Phalguni', 'Prachi', 'Prafula', 'Prafulla', 'Prakruti', 'Pratima', 'Promita', 'Pushpa', 'Puspa', 'Rachana', 'Rachna', 'Rajani', 'Ramaa', 'Rani', 'Ruma', 'Saheli', 'Sahira', 'Samali', 'Sangeeta', 'Sangita', 'Sarita', 'Sarmila', 'Shefali', 'Shila', 'Shipra', 'Shomili', 'Subhashini', 'Suparna', 'Suravi', 'Sushma', 'Sushmita', 'Swati', 'Taneesha', 'Tara', 'Trisha', 'Trishana', 'Ujjwala', 'Ujwala', 'Upasana', 'Urmila', 'Usha', 'Vandana', 'Vanita', 'Varsha', 'Varuna', 'Varuni', 'Vibhuti', 'Vijaya', 'Vinita', 'Vipasha', 'Vrishti', 'Yamini', 'Yamuna'];
  const nm3 = ['Abed', 'Abhedananda', 'Acharya', 'Acharyya', 'Adhikari', 'Aich', 'Alam', 'Alim', 'Asad', 'Asharaful', 'Azam', 'Babaji', 'Bachchan', 'Bachchu', 'Bagchi', 'Baidya', 'Baij', 'Bakshi', 'Banarje', 'Bandopadhyay', 'Bandyopadhyay', 'Banerjee', 'Bardhan', 'Barkat', 'Barua', 'Basak', 'Basu', 'Begum', 'Bhaduri', 'Bhanja', 'Bharadwaj', 'Bhattacharya', 'Bhattacharyya', 'Bhonda', 'Bhowmick', 'Bhuiyan', 'Bisharad', 'Biswas', 'Boral', 'Bose', 'Brahmachari', 'Brahmananda', 'Brata', 'Buksh', 'Chakrabarti', 'Chakrabarty', 'Chakraborty', 'Chakravarty', 'Chakravorty', 'Chakrobarty', 'Chandra', 'Chatterjee', 'Chattopadhyay', 'Chaudhuri', 'Chinmoy', 'Choudhry', 'Choudhury', 'Chowdhury', 'Chowdury', 'Dabaji', 'Dam', 'Das', 'Dasgupta', 'Datta', 'Debnath', 'Debroy', 'Devi', 'Dey', 'Dinda', 'Dutt', 'Dutta', 'Gain', 'Gangopadhyay', 'Ganguli', 'Ganguly', 'Gayen', 'Ghani', 'Ghatak', 'Ghose', 'Ghosemajumder', 'Ghosh', 'Ghoshal', 'Giri', 'Goswami', 'Guha', 'Guhathakurta', 'Gupta', 'Hamid', 'Haque', 'Hazra', 'Hore', 'Hossain', 'Huq', 'Jain', 'Jatin', 'Joyanto', 'Kabir', 'Kalyanpur', 'Kar', 'Karim', 'Karmakar', 'Khan', 'Khanum', 'Khuro', 'Kivaraj', 'Kotal', 'Kriplani', 'Kumar', 'Lahiri', 'Latif', 'Lohani', 'MAmun', 'Magsaysay', 'Mahalanabis', 'Mahalanobis', 'Maharaj', 'Mahasaya', 'Mahmud', 'Maitra', 'Maity', 'Maji', 'Majumdar', 'Majumder', 'Malakar', 'Mallick', 'Mandal', 'Manwar', 'Matri', 'Mazumdar', 'Mazumder', 'Miah', 'Mirza', 'Mitra', 'Mokammel', 'Momen', 'Mondal', 'Muhkerjee', 'Mukerjea', 'Mukerji', 'Mukharji', 'Mukherjee', 'Mukherji', 'Mukhopadhyay', 'Mukhopdadhyay', 'Mullick', 'Munindra', 'Murshid', 'Musa', 'Nabi', 'Nag', 'Nagari', 'Nagchaudhuri', 'Naidu', 'Nandi', 'Nandy', 'Nasrin', 'Nazimuddin', 'Niyogi', 'Ojha', 'Osmani', 'Pal', 'Panja', 'Paramahamsa', 'Parveen', 'Phonte', 'Prabhupāda', 'Pramanick', 'Pramanik', 'Pyne', 'Qamar', 'Quadir', 'Raha', 'Rahaman', 'Rahman', 'Rai', 'Raihan', 'Rakib', 'Rani', 'Ranjan', 'Rashmoni', 'Ray', 'Raychaudhuri', 'Roy', 'Sagnik', 'Saha', 'Salimullah', 'Samad', 'Sana', 'Sanu', 'Sanyal', 'Sarasvati', 'Saraswat', 'Sarkar', 'Sasmal', 'Sastri', 'Satyananda', 'Sayeed', 'Sekhar', 'Sen', 'Sengupta', 'Sett', 'Shahidullah', 'Shaikh', 'Shankar', 'Sharma', 'Shastri', 'Shekhar', 'Shome', 'Shonku', 'Sikdar', 'Sil', 'Singh', 'Sinha', 'Siraj', 'Sircar', 'Sobhan', 'Som', 'Sorcar', 'Suhrawardy', 'Sumon', 'Tagore', 'Talukdar', 'Thakur', 'Thakurta', 'Uddin', 'Vibhushan', 'Vidyabhusan', 'Vidyasagar', 'Vivekananda', 'Waddedar', 'Yagnik', 'Yunus', 'Zia'];
  {
    if (type === 1) {
      names = `${sample(nm2)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm3)}`;
    }
    return names;
  }
}
module.exports = bengalis
