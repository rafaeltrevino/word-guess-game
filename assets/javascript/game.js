// Declaration of HTML divs
var infoBoxDiv = document.getElementById("infoBox");
var runningScoreDiv = document.getElementById("runningScoreDiv");
var flagImgDiv = document.getElementById("flagImg")
var guessSpaceDiv = document.getElementById("guessSpace");
var guessRemainDiv = document.getElementById("guessRemain");
var lettersGuessedDiv = document.getElementById("lettersGuessed");

// Starting values for game
var userWins = 0;
var guessRemain = 12;
var answerArray = [];
var lettersGuessed = [];
var countriesCapsMaster = [
    ["Afghanistan", "Kabul", "af"], 
    ["Albania", "Tirana", "al"], 
    ["Algeria", "Algiers", "dz"], 
    ["Andorra", "Andorra la Vella", "ad"], 
    ["Angola", "Luanda", "ao"], 
    ["Antigua and Barbuda", "St. John's", "ag"], 
    ["Argentina", "Buenos Aires", "ar"], 
    ["Armenia", "Yerevan", "am"], 
    ["Australia", "Canberra", "au"], 
    ["Austria", "Vienna", "at"], 
    ["Azerbaijan", "Baku", "az"], 
    ["Bahamas", "Nassau", "bs"], 
    ["Bahrain", "Manama", "bh"], 
    ["Bangladesh", "Dhaka", "bd"], 
    ["Barbados", "Bridgetown", "bb"], 
    ["Belarus", "Minsk", "by"], 
    ["Belgium", "Brussels", "be"], 
    ["Belize", "Belmopan", "bz"], 
    ["Benin", "Porto-Novo", "bj"], 
    ["Bhutan", "Thimphu", "bt"], 
    ["Bolivia", "Sucre", "bo"], 
    ["Bosnia and Herzegovina", "Sarajevo", "ba"], 
    ["Botswana", "Gaborone", "bw"], 
    ["Brazil", "Brasília", "br"], 
    ["Brunei", "Bandar Seri Begawan", "bn"], 
    ["Bulgaria", "Sofia", "bg"], 
    ["Burkina Faso", "Ouagadougou", "bf"], 
    ["Burundi", "Bujumbura", "bi"], 
    ["Cambodia", "Phnom Penh", "kh"], 
    ["Cameroon", "Yaoundé", "cm"], 
    ["Canada", "Ottawa", "ca"], 
    ["Cape Verde", "Praia", "cv"], 
    ["Central African Republic", "Bangui", "cf"], 
    ["Chad", "N'Djamena", "td"], 
    ["Chile", "Santiago", "cl"], 
    ["Colombia", "Bogotá", "co"], 
    ["Comoros", "Moroni", "km"], 
    ["Costa Rica", "San José", "cr"], 
    ["Côte d'Ivoire", "Yamoussoukro", "ci"], 
    ["Croatia", "Zagreb", "hr"], 
    ["Cuba", "Havana", "cu"], 
    ["Cyprus", "Nicosia", "cy"], 
    ["Czechia", "Prague", "cz"], 
    ["Democratic Republic of the Congo", "Kinshasa", "cd"], 
    ["Denmark", "Copenhagen", "dk"], 
    ["Djibouti", "Djibouti", "dj"], 
    ["Dominica", "Roseau", "dm"], 
    ["Dominican Republic", "Santo Domingo", "do"], 
    ["East Timor", "Dili", "tl"], 
    ["Ecuador", "Quito", "ec"], 
    ["Egypt", "Cairo", "eg"], 
    ["El Salvador", "San Salvador", "sv"], 
    ["Equatorial Guinea", "Malabo", "gq"], 
    ["Eritrea", "Asmara", "er"], 
    ["Estonia", "Tallinn", "ee"], 
    ["Ethiopia", "Addis Ababa", "et"], 
    ["Fiji", "Suva", "fj"], 
    ["Finland", "Helsinki", "fi"], 
    ["France", "Paris", "fr"], 
    ["Gabon", "Libreville", "ga"], 
    ["Gambia", "Banjul", "gm"], 
    ["Georgia", "Tbilisi", "ge"], 
    ["Germany", "Berlin", "de"], 
    ["Ghana", "Accra", "gh"], 
    ["Greece", "Athens", "gr"], 
    ["Grenada", "St. George's", "gd"], 
    ["Guatemala", "Guatemala City", "gt"], 
    ["Guinea", "Conakry", "gn"], 
    ["Guinea-Bissau", "Bissau", "gw"], 
    ["Guyana", "Georgetown", "gy"], 
    ["Haiti", "Port-au-Prince", "ht"], 
    ["Honduras", "Tegucigalpa", "hn"], 
    ["Hungary", "Budapest", "hu"], 
    ["Iceland", "Reykjavík", "is"], 
    ["India", "New Delhi", "in"], 
    ["Indonesia", "Jakarta", "id"], 
    ["Iran", "Tehran", "ir"], 
    ["Iraq", "Baghdad", "iq"], 
    ["Ireland", "Dublin", "ie"], 
    ["Israel", "Jerusalem", "il"], 
    ["Italy", "Rome", "it"], 
    ["Jamaica", "Kingston", "jm"], 
    ["Japan", "Tokyo", "jp"], 
    ["Jordan", "Amman", "jo"], 
    ["Kazakhstan", "Astana", "kz"], 
    ["Kenya", "Nairobi", "ke"], 
    ["Kiribati", "South Tarawa", "ki"], 
    ["Kosovo", "Pristina", "ks"], 
    ["Kuwait", "Kuwait City", "kw"], 
    ["Kyrgyzstan", "Bishkek", "kg"], 
    ["Laos", "Vientiane", "la"], 
    ["Latvia", "Riga", "lv"], 
    ["Lebanon", "Beirut", "lb"], 
    ["Lesotho", "Maseru", "ls"], 
    ["Liberia", "Monrovia", "lr"], 
    ["Libya", "Tripoli", "ly"], 
    ["Liechtenstein", "Vaduz", "li"], 
    ["Lithuania", "Vilnius", "lt"], 
    ["Luxembourg", "Luxembourg City", "lu"], 
    ["Macedonia", "Skopje", "mk"], 
    ["Madagascar", "Antananarivo", "mg"], 
    ["Malawi", "Lilongwe", "mw"], 
    ["Malaysia", "Kuala Lumpur", "my"], 
    ["Maldives", "Malé", "mv"], 
    ["Mali", "Bamako", "ml"], 
    ["Malta", "Valletta", "mt"], 
    ["Marshall Islands", "Majuro", "mh"], 
    ["Mauritania", "Nouakchott", "mr"], 
    ["Mauritius", "Port Louis", "mu"], 
    ["Mexico", "Mexico City", "mx"], 
    ["Micronesia", "Palikir", "fm"], 
    ["Moldova", "Chisinau", "md"], 
    ["Monaco", "Monaco", "mc"], 
    ["Mongolia", "Ulaanbaatar", "mn"], 
    ["Montenegro", "Podgorica", "me"], 
    ["Morocco", "Rabat", "ma"], 
    ["Mozambique", "Maputo", "mz"], 
    ["Myanmar", "Naypyidaw", "mm"], 
    ["Namibia", "Windhoek", "na"], 
    ["Nauru", "Yaren District", "nr"], 
    ["Nepal", "Kathmandu", "np"], 
    ["Netherlands", "Amsterdam", "nl"], 
    ["New Zealand", "Wellington", "nz"], 
    ["Nicaragua", "Managua", "ni"], 
    ["Niger", "Niamey", "ne"], 
    ["Nigeria", "Abuja", "ng"], 
    ["North Korea", "Pyongyang", "kp"], 
    ["Norway", "Oslo", "no"], 
    ["Oman", "Muscat", "om"], 
    ["Pakistan", "Islamabad", "pk"], 
    ["Palau", "Ngerulmud", "pw"], 
    ["Panama", "Panama City", "pa"], 
    ["Papua New Guinea", "Port Moresby", "pg"], 
    ["Paraguay", "Asunción", "py"], 
    ["China", "Beijing", "cn"], 
    ["Peru", "Lima", "pe"], 
    ["Philippines", "Manila", "ph"], 
    ["Poland", "Warsaw", "pl"], 
    ["Portugal", "Lisbon", "pt"], 
    ["Qatar", "Doha", "qa"], 
    ["Taiwan, Province of China", "Taipei", "tw"], 
    ["Republic of the Congo", "Brazzaville", "cg"], 
    ["Romania", "Bucharest", "ro"], 
    ["Russia", "Moscow", "ru"], 
    ["Rwanda", "Kigali", "rw"], 
    ["Saint Kitts and Nevis", "Basseterre", "kn"], 
    ["Saint Lucia", "Castries", "lc"], 
    ["Saint Vincent and the Grenadines", "Kingstown", "vc"], 
    ["Samoa", "Apia", "ws"], 
    ["San Marino", "San Marino", "sm"], 
    ["Sao Tome and Principe", "São Tomé", "st"], 
    ["Saudi Arabia", "Riyadh", "sa"], 
    ["Senegal", "Dakar", "sn"], 
    ["Serbia", "Belgrade", "rs"], 
    ["Seychelles", "Victoria", "sc"], 
    ["Sierra Leone", "Freetown", "sl"], 
    ["Singapore", "Singapore", "sg"], 
    ["Slovakia", "Bratislava", "sk"], 
    ["Slovenia", "Ljubljana", "si"], 
    ["Solomon Islands", "Honiara", "sb"], 
    ["Somalia", "Mogadishu", "so"], 
    ["South Africa", "Pretoria", "za"], 
    ["South Korea", "Seoul", "kr"], 
    ["Spain", "Madrid", "es"], 
    ["Sri Lanka", "Colombo", "lk"], 
    ["Sudan", "Khartoum", "sd"], 
    ["Suriname", "Paramaribo", "sr"], 
    ["Swaziland", "Mbabane", "sz"], 
    ["Sweden", "Stockholm", "se"], 
    ["Switzerland", "Bern", "ch"], 
    ["Syria", "Damascus", "sy"], 
    ["Tajikistan", "Dushanbe", "tj"], 
    ["Tanzania", "Dodoma", "tz"], 
    ["Thailand", "Bangkok", "th"], 
    ["Togo", "Lomé", "tg"], 
    ["Tonga", "Nuku'alofa", "to"], 
    ["Trinidad and Tobago", "Port of Spain", "tt"], 
    ["Tunisia", "Tunis", "tn"], 
    ["Turkey", "Ankara", "tr"], 
    ["Turkmenistan", "Ashgabat", "tm"], 
    ["Tuvalu", "Funafuti", "tv"], 
    ["Uganda", "Kampala", "ug"], 
    ["Ukraine", "Kiev (Kyiv)", "ua"], 
    ["United Arab Emirates", "Abu Dhabi", "ae"], 
    ["United Kingdom", "London", "gb"], 
    ["United States of America", "Washington", "us"], 
    ["Uruguay", "Montevideo", "uy"], 
    ["Uzbekistan", "Tashkent", "uz"], 
    ["Vanuatu", "Port Vila", "vu"], 
    ["Vatican City", "Vatican City", "va"], 
    ["Venezuela", "Caracas", "ve"], 
    ["Vietnam", "Hanoi", "vn"], 
    ["Western Sahara", "Laayoune", "eh"], 
    ["Yemen", "Sanaá", "ye"], 
    ["Zambia", "Lusaka", "zm"], 
    ["Zimbabwe", "Harare", "zw"] 
];
var countriesCaps = [];

//Populate countriesCaps array with 10 random countries from the Master list
for (i = 0; countriesCaps.length < 10; i++) {
    randMaster = countriesCapsMaster[Math.floor(Math.random() * countriesCapsMaster.length)];
    countriesCaps.push(randMaster);
}

// Clear out values
guessSpaceDiv.textContent = answerArray;
runningScoreDiv.textContent = userWins;
guessRemainDiv.textContent = guessRemain;

// Start game when user presses a key
document.onkeyup = function(event) {

    var word = countriesCaps[Math.floor(Math.random() * countriesCaps.length)];
    // Replace infoBox contents with question
    infoBoxDiv.textContent = "What is the capital of " + word[0] + "?";
    // Insert country flag in image box
    flagImgDiv.src = "./assets/images/" + word[2] + ".png";
    console.log(word[1]);

    word.forEach(playGame)
    }

    function playGame() {
        
    }

    var letter = event.key;
    
    lettersGuessedDiv.textContent = letter;





    // Create the answer array
    // for (i = 0; i < word[1].length; i++) {
    //     answerArray[i] = "_";
    //     console.log(answerArray[i]);
    //     answerArray.join(" ");
    //     guessSpaceDiv.textContent = answerArray;
    // }

    // for (i = 0; i < word[1].length; i++) {
    //     answerArray[i] = letter;
    //     guessRemain--;
    //     console.log(guessRemain);
    // }



// Display a number of blanks equal to the number of letters in the Capital (Answer)


// When the user presses a key
    // If the key matches a letter in the Answer, display that letter in the Answer
    // If the key does not match, display that letter in Letters Guessed AND deduct a number from available guesses

// If all letters have been guessed within the alloted number of guesses
    // Add a number to userWins
    // Reset guesses available
    // Pick the next item from the array
// If available guesses run out and the answer hasn't been guessed yet
    // Display an alert
    // Reset guesses available
    // Pick the next item from the array


// Remember to move all of this into it's own JavaScript file