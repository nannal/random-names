export default function swahilis() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abasi (stern)', 'Abdalla (servant of God)', 'Abdu (worshipper of God)', 'Adhama (glory)', 'Amani (trust)', 'Anasa (joy)', 'Ashon (seventh-born son)', 'Atieno (guardian of the night)', 'Ayo (joy)', 'Azima (charmed into motion)', 'Azizi (precious)', 'Badru (born during a full moon)', 'Baraka (blessing)', 'Barasa (meeting people)', 'Bayana (clear knowledge)', 'Beno (one of a band)', 'Busar (practical wisdom)', 'Busara (foresight)', 'Bwana Mkubwa (great master)', 'Chane (touch leaf for weaving)', 'Chilemba (turban)', 'Chitundu (bird\'s nest)', 'Darweshi (saintly)', 'Daudi (beloved one)', 'Duma (cheetah)', 'Elea (clarity)', 'Eliknowledge)', 'Fanaka (valuable)', 'Faraji (consolation)', 'Farijika (console and help)', 'Habib (beloved)', 'Hali (genuine)', 'Hamadi (praised)', 'Hamidi (admired)', 'Hamisi (born on a Thursday)', 'Hanif (believer)', 'Haoniyao (born during a quarrel)', 'Hodari (powerful)', 'Ikeno (joy)', 'Issa (God\'s our salvation)', 'Jafari (creek)', 'Jamal (beautiful)', 'Jamba (a hero)', 'Jata (celestial star)', 'Jela (father suffers during wife\'s labor)', 'Juma (born on Friday)', 'Jumaane (born on a Tuesday)', 'Kamari (moonlight)', 'Keambiroiro (mountain of blackness)', 'Keanjaho (mountain of beans)', 'Kereenyaga (mountain of mystery)', 'Khalfani (destined to rule)', 'Kiama (magic)', 'Kifeda (only boy born among sisters)', 'Kiira (the dawn)', 'Kito (precious child)', 'Kitwana (pledged to live)', 'Kobe (turtle)', 'Koman (the understanding one)', 'Kuende (evolution)', 'Kwanzaa (feast of first fruits)', 'Maulidi (born in Islamic month Maulidi)', 'Mbita (born on a cold night)', 'Mhina (delightful)', 'Mosi (first-born child)', 'Moyo (heart)', 'Mpenda (lover)', 'Mshindi (champion)', 'Msia (wise man)', 'Muhammed (praised)', 'Muraty (friend)', 'Musa (saved from the water)', 'Mwinyi (one who summons)', 'Mzuzi (inventive)', 'Neema (born during prosperous times)', 'Njowga (shoes)', 'Nyo (star)', 'Rajabu (born in seventh Muslim month)', 'Ramadhani (born during month of Ramadan)', 'Rashid (rightly guided)', 'Safiri (a journey)', 'Salehe (good)', 'Salene (good)', 'Sefu (sword)', 'Shani (marvelous)', 'Shomari (forceful)', 'Simba (a strong person)', 'Siwazuri (conflict)', 'Sultan (ruler)', 'Tabia (of good character)', 'Taji (a crown)', 'Tambo (vigorous)', 'Tamu (delightful)', 'Tian (respect)', 'Umoja (harmony)', 'Usian (wisdom)', 'Yahya (God\'s gift)', 'Zahur (flower)', 'Zakia (intelligent)', 'Zawadi (gift)'];
  const nm2 = ['Adhama (glory)', 'Adia (a gift from God)', 'Afiya (health)', 'Aisha (life)', 'Aishia (life)', 'Akina (relations)', 'Aleela (she cries)', 'Aluna (come here)', 'Amana (to believe)', 'Amanika (trustworthy)', 'Andaiye (daughter comes home)', 'Angalia (alert and observant)', 'Arusi (born during a wedding)', 'Ashura (born during month of Ashur)', 'Asya (born during time of grief)', 'Atiena (guardian of the night)', 'Ayah (bright)', 'Ayubu (patience in suffering)', 'Bahati (luck)', 'Bakari (noble promise)', 'Baraka (blessing)', 'Barika (success)', 'Bavana (clear knowledge)', 'Bayinika (manifest clarity)', 'Budhya (enlightened one)', 'Busara (practical wisdom)', 'Chagina (brave one)', 'Chanua (blossom)', 'Chiku (chatterer)', 'Chinira (God receives)', 'Chriki (blessing)', 'Dafina (treasure)', 'Dalia (gentle)', 'Dalila (gentle)', 'Dhamiria (thoughtful aim)', 'Dinka (people)', 'Elea (clear)', 'Elewa (understands)', 'Elimisha (teaches knowledge)', 'Endana (to love unconditionally)', 'Endelea (becomes famous)', 'Fanaka (succeeds)', 'Faraji (consolation)', 'Farijika (console and help)', 'Fatuma (weaned)', 'Fikira (with deep thoughts)', 'Gethera (harvest)', 'Goma (joyful dance)', 'Hadiya (gift)', 'Halima (gift)', 'Halina (gentle)', 'Halisi (genuine)', 'Haoniyao (born during a quarrel)', 'Hasana (she arrived first)', 'Hasanati (good)', 'Hasina (good)', 'Hawa (longing)', 'Heshima (respect)', 'Himaya (protection)', 'Hodari (strong)', 'Huseina (she arrived first)', 'Imani (trust)', 'Imara (strong one)', 'Imarisha (establish and stabilize)', 'Inira (to sing)', 'Inithia (leads in song and dance)', 'Issa (the Lord\'s my salvation)', 'Itanya (hope)', 'Jaha (dignity)', 'Jahaira (dignified)', 'Jama (friend)', 'Jamaa (relation)', 'Jamani (friend)', 'Jamba (a hero)', 'Jehlani (strong)', 'Jiona (glow with pride)', 'Julisha (gives advice)', 'Kakena (the happy one)', 'Kalere (short woman)', 'Kaluwa (forgotten one)', 'Kamara (moonlight)', 'Kamaria (like the moon)', 'Kanene (important thing)', 'Kanika (black cloth)', 'Kanisa (a church)', 'Karama (honor)', 'Kenithia (joyful one)', 'Kenura (joy)', 'Kesi (born during difficult times)', 'Khadija (born prematurely)', 'Kiama (magic)', 'Kiania (the dawn)', 'Kibibi (little lady)', 'Kichea (the sun)', 'Kiira (the dawn)', 'Kijakazi (your life is owed to us)', 'Kilinda (protector)', 'Kinaya (independence)', 'Kinjia (the way)', 'Kito (precious stone)', 'Koffi (born on a Friday)', 'Kudio (born on a Monday)', 'Kuende (evolution)', 'Kwanzaa (feast of first fruits)', 'Kwashi (born on a Thursday)', 'Lindana (the defender)', 'Lindia (the defender)', 'Lisha (to cherish)', 'Madini (a gem)', 'Mahiri (skillful and clever)', 'Majda (glorious)', 'Maji (water)', 'Majida (honor)', 'Malika (angel)', 'Maliza (accomplishment)', 'Malkia (queen)', 'Maridhia (satisfied)', 'Marijani (coral)', 'Marini (pretty)', 'Mashika (born during rainy season)', 'Masika (born during rainy season)', 'Maskini (poor)', 'Maulidi (born in Islamic month Maulidi)', 'Milima (mountain)', 'Mkiwa (orphaned child)', 'Msia (wise woman)', 'Muraty (friend)', 'Mwamini (honest)', 'Mwanahamisi (born on a Thursday)', 'Mwasaa (timely)', 'Mwatabu (born during sorrow)', 'Nadira (rare)', 'Najuma (abounding in joy)', 'Nbushe (the godly one)', 'Neema (born during prosperous times)', 'Nigesa (born during harvest season)', 'Nurisha (enlighten)', 'Nyota (star)', 'Onyesha (clear)', 'Otesha (cultivate the earth)', 'Oyana (uplift and inspire)', 'Panya (tiny baby)', 'Penda (loved)', 'Radhiya (agreeable one)', 'Rasheda (rightly guided)', 'Rashida (rightly guided)', 'Rasida (rightly guided)', 'Raziya (agreeable)', 'Rehema (compassion)', 'Risala (messenger)', 'Rukiya (she rises up)', 'Saada (help)', 'Safika (to set right)', 'Safiri (a journey)', 'Salama (peaceful one)', 'Sanura (kitten)', 'Sauda (beautiful and dark-skinned)', 'Shani (wonderful)', 'Shanny (wonderful)', 'Shauri (advise)', 'Shauriana (advise)', 'Sikudhani (a surprise)', 'Siti (respected woman)', 'Subira (patience)', 'Taabu (troubles)', 'Tabara (prosperity)', 'Taji (a crown)', 'Tamu (sweet & delightful)', 'Therania (bright shine)', 'Tia (respect)', 'Tisa (ninth-born)', 'Tuliza (one who\'s calm)', 'Ujamaa (fellowship)', 'Ujana (youth)', 'Umija (unity)', 'Usia (wisdom)', 'Waseme (let them talk)', 'Winda (hunter)', 'Zahra (flower)', 'Zaida (the better one)', 'Zakia (smart)', 'Zakiya (intelligent one)', 'Zawadi (a gift)', 'Zawati (a gift)', 'Zuri (beautiful)', 'Zuwena (good)'];


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
