var password = document.getElementById("password");
var chosenLetter = document.getElementById("chosenLetter");
var randLimiter=0;

chosenLetter.addEventListener("input", function (){

    if(rule4()==true){
        if(ruleTimeCheck[3]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[3]=1;
        }
        document.getElementById("rule5").style.display = "block";
        checkrules();
    }
    else{
        
        document.getElementById("rule5").style.display = "none";
        checkrules();
    }
});

var countdownValue = 60; 
var countdownInterval;
var startTimer=0;
var ruleTimeCheck = [];
for(var x=0; x<15; x++){
    ruleTimeCheck[x]=0;
}
function updateCountdown() {
    const countdownElement = document.getElementById('timer');
    if (countdownValue >= 0) {
        const minutes = Math.floor(countdownValue / 60);
        const seconds = countdownValue % 60;
        countdownElement.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        countdownValue--;
    } else {
        clearInterval(countdownInterval);
        countdownElement.textContent = 'Game Over! You lost!';
        reset();
    }

}

function reset(){
    for(var x=0; x<15; x++){
        ruleTimeCheck[x]=0;
    }
    startTimer=0;
    countdownValue = 60; 
    password.value="";
    randMin=0;
    randSec=0;
    limiterTime=0;
    LimiterRandDog=0;
    LimiterRandRiddle=0;
    hexRandLimiter=0;
    document.getElementById("rule1title").style.backgroundColor = "red";
    document.getElementById("rule1content").style.backgroundColor = "#FF5F5F";
    document.getElementById("rule2").style.display = "none";
    document.getElementById("rule3").style.display = "none";
    document.getElementById("rule4").style.display = "none";
    document.getElementById("rule5").style.display = "none";
    document.getElementById("rule6").style.display = "none";
    document.getElementById("rule7").style.display = "none";
    document.getElementById("rule8").style.display = "none";
    document.getElementById("rule9").style.display = "none";
    document.getElementById("rule10").style.display = "none";
    document.getElementById("rule11").style.display = "none";
    document.getElementById("rule12").style.display = "none";
    document.getElementById("rule13").style.display = "none";
    document.getElementById("rule14").style.display = "none";
    document.getElementById("rule15").style.display = "none";

}

function startCountdown() {
    countdownInterval = setInterval(updateCountdown, 1000); 
    updateCountdown();
}
function checkrules(){

    rule13();
    if(startTimer==0){
        startCountdown();
        startTimer=1;
    }
    if(rule1()==true){

        if(ruleTimeCheck[0]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[0]=1;
        }
        document.getElementById("rule2").style.display = "block";
    }
    else{
        document.getElementById("rule2").style.display = "none";
        document.getElementById("rule3").style.display = "none";
        document.getElementById("rule4").style.display = "none";
        document.getElementById("rule5").style.display = "none";
        document.getElementById("rule6").style.display = "none";
        document.getElementById("rule7").style.display = "none";
        document.getElementById("rule8").style.display = "none";
        document.getElementById("rule9").style.display = "none";
        document.getElementById("rule10").style.display = "none";
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    // RULE 2
    if(rule2()==true){
        if(ruleTimeCheck[1]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[1]=1;
        }
        document.getElementById("rule3").style.display = "block";
    }
    else{
        document.getElementById("rule3").style.display = "none";
        document.getElementById("rule4").style.display = "none";
        document.getElementById("rule5").style.display = "none";
        document.getElementById("rule6").style.display = "none";
        document.getElementById("rule7").style.display = "none";
        document.getElementById("rule8").style.display = "none";
        document.getElementById("rule9").style.display = "none";
        document.getElementById("rule10").style.display = "none";
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 3
    if(rule3()==true){
        if(ruleTimeCheck[2]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[2]=1;
        }
        document.getElementById("rule4").style.display = "block";
    }
    else{
        document.getElementById("rule4").style.display = "none";
        document.getElementById("rule5").style.display = "none";
        document.getElementById("rule6").style.display = "none";
        document.getElementById("rule7").style.display = "none";
        document.getElementById("rule8").style.display = "none";
        document.getElementById("rule9").style.display = "none";
        document.getElementById("rule10").style.display = "none";
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 4
    if(rule4()==true){
        document.getElementById("rule5").style.display = "block";

    }
    else{
        document.getElementById("rule5").style.display = "none";
        document.getElementById("rule6").style.display = "none";
        document.getElementById("rule7").style.display = "none";
        document.getElementById("rule8").style.display = "none";
        document.getElementById("rule9").style.display = "none";
        document.getElementById("rule10").style.display = "none";
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 5
    if(rule5()==true){
        if(ruleTimeCheck[4]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[4]=1;
        }
        document.getElementById("rule6").style.display = "block";
    }
    else{
        document.getElementById("rule6").style.display = "none";
        document.getElementById("rule7").style.display = "none";
        document.getElementById("rule8").style.display = "none";
        document.getElementById("rule9").style.display = "none";
        document.getElementById("rule10").style.display = "none";
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 6
    if(rule6()==true){
        console.log("entrou na rule 6 = true");
        if(ruleTimeCheck[5]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[5]=1;
        }
        document.getElementById("rule7").style.display = "block";
    }
    else{
        document.getElementById("rule7").style.display = "none";
        document.getElementById("rule8").style.display = "none";
        document.getElementById("rule9").style.display = "none";
        document.getElementById("rule10").style.display = "none";
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
    }
    //RULE 7
    if(rule7()==true){
        if(ruleTimeCheck[6]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[6]=1;
        }
        document.getElementById("rule8").style.display = "block";
    }
    else{
        document.getElementById("rule8").style.display = "none";
        document.getElementById("rule9").style.display = "none";
        document.getElementById("rule10").style.display = "none";
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 8
    if(rule8()==true){
        if(ruleTimeCheck[7]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[7]=1;
        }
        document.getElementById("rule9").style.display = "block";
    }
    else{
        document.getElementById("rule9").style.display = "none";
        document.getElementById("rule10").style.display = "none";
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 9
    if(rule9()==true){
        if(ruleTimeCheck[8]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[8]=1;
        }
        document.getElementById("rule10").style.display = "block";
    }
    else{
        document.getElementById("rule10").style.display = "none";
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 10
    if(rule10()==true){
        if(ruleTimeCheck[9]==0){
            countdownValue= countdownValue+60;
            ruleTimeCheck[9]=1;
        }
        document.getElementById("rule11").style.display = "block";
    }
    else{
        document.getElementById("rule11").style.display = "none";
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 11
    if(rule11()==true){
        if(ruleTimeCheck[10]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[10]=1;
        }
        document.getElementById("rule12").style.display = "block";
    }
    else{
        document.getElementById("rule12").style.display = "none";
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 12
    if(rule12()==true){
        if(ruleTimeCheck[11]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[11]=1;
        }
        document.getElementById("rule13").style.display = "block";
    }
    else{
        document.getElementById("rule13").style.display = "none";
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 13
       if(rule13()==true){
        if(ruleTimeCheck[12]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[12]=1;
        }
        document.getElementById("rule14").style.display = "block";
    }
    else{
        document.getElementById("rule14").style.display = "none";
        document.getElementById("rule15").style.display = "none";
        return 0;
    }
    //RULE 14
       if(rule14()==true){
        if(ruleTimeCheck[13]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[13]=1;
        }
        document.getElementById("rule15").style.display = "block";
        return 0;
    }
    else{
        document.getElementById("rule15").style.display = "none";
    }
    //RULE 15
        if(rule15()==true){
            endgame();
        }
}

function endgame(){
    const countdownElement = document.getElementById('timer');
    clearInterval(countdownInterval);
    countdownElement.textContent = 'Congratulations! You Won!';
    reset();
}

password.addEventListener("input", function () {


    checkrules();


});

function rule1(){
    if (password.value.length >= 5) {
        document.getElementById("rule1title").style.backgroundColor = "green";
        document.getElementById("rule1content").style.backgroundColor = "#5FFF5F";
        return true;
    } else {
        document.getElementById("rule1title").style.backgroundColor = "red";
        document.getElementById("rule1content").style.backgroundColor = "#FF5F5F";
        return false;
    }
}

function rule2(){
    var numberValue = password.value;
    var hasNumbers = /\d/.test(numberValue);
    if (hasNumbers) {
        document.getElementById("rule2title").style.backgroundColor = "green";
        document.getElementById("rule2content").style.backgroundColor = "#5FFF5F";
        if(document.getElementById("rule2").style.display === "block"){
            return true;
        }
        else{
            return false;
        }
    } else {
        document.getElementById("rule2title").style.backgroundColor = "red";
        document.getElementById("rule2content").style.backgroundColor = "#FF5F5F";
        return false;
    }
}
var rand=0;
function rule3() {
    var passwordValue = password.value;
    var numbers = passwordValue.match(/\d+/g);
    var mergedNumbers= parseInt(numbers.join(''),10);
    var arrayNumbers = mergedNumbers.toString().split('');
    var sum = 0;
    if(randLimiter==0){
        var min=50;
        var max=80;
        rand= getRandomInt(min,max);
        document.getElementById("randomInt").textContent="All digits must add up to " + rand;
        randLimiter++;
    }
    for (var i = 0; i < arrayNumbers.length; i++) {
        sum += parseInt(arrayNumbers[i], 10);
    }
    document.getElementById("currentSum").textContent="Current sum: " + sum;
    if(parseInt(sum) === parseInt(rand)){
        if(document.getElementById("rule3").style.display === "block"){
            document.getElementById("rule3title").style.backgroundColor = "green";
            document.getElementById("rule3content").style.backgroundColor = "#5FFF5F";
            return true;
        }
        else{
            return false;
        }
    }
    else{
        document.getElementById("rule3title").style.backgroundColor = "red";
        document.getElementById("rule3content").style.backgroundColor = "#FF5F5F";
        return false;
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rule4(){
    var storeString = chosenLetter.value.toLowerCase();
    var Letter= storeString[0];
    var lowerCasePassword = password.value.toLowerCase();
    var isValid = /^[A-Za-z]+$/.test(storeString);
    if(isValid == false){
        chosenLetter.value = storeString.replace(/[^A-Za-z]/g, "");
    }
        
    if(lowerCasePassword.includes(Letter)){
        document.getElementById("rule4title").style.backgroundColor = "red";
        document.getElementById("rule4content").style.backgroundColor = "#FF5F5F";
        return false;
    }
    else{
        if(document.getElementById("rule4").style.display === "block" && storeString!="" && isValid==true){
            document.getElementById("rule4title").style.backgroundColor = "green";
            document.getElementById("rule4content").style.backgroundColor = "#5FFF5F";
            return true;            
        }
        else{
            document.getElementById("rule4title").style.backgroundColor = "red";
            document.getElementById("rule4content").style.backgroundColor = "#FF5F5F";
            return false;
        }
    }
}

function rule5(){
    var passwordValue = password.value;
    for(var x=1900;x<2023;x++){
        if(passwordValue.includes(x) && document.getElementById("rule5").style.display === "block"){
            document.getElementById("rule5title").style.backgroundColor = "green";
            document.getElementById("rule5content").style.backgroundColor = "#5FFF5F";
            return true;
        }      
    }
    document.getElementById("rule5title").style.backgroundColor = "red";
    document.getElementById("rule5content").style.backgroundColor = "#FF5F5F";
    return false;
}

var randMin=0, randSec=0;
var limiterTime=0;
function regenerateVidTime(){
    limiterTime=0;
    randMin=0;
    randSec=0;
    rule6();
}
function rule6(){

    if(limiterTime==0){
        randMin=getRandomInt(3, 5);
        randSec=getRandomInt(0,59);
        limiterTime++;
    }
    if(randSec <10){
        document.getElementById("rule6question").textContent="Password needs to include a youtube video with this length: 0"+randMin + ":0"+randSec;
    }
    else{
        document.getElementById("rule6question").textContent="Password needs to include a youtube video with this length: 0"+randMin + ":" + randSec;    
    }

    var pattern = /www\.youtube\.com\/\S+/;
    var match = password.value.match(pattern);
    var youtubeLink;
    if (match) {
        youtubeLink = match[0];
    } 
    console
    console.log("youtube link found:" + youtubeLink);
    var randDurationInSeconds = randMin *60 + randSec;
    var durationInSeconds;
    var apiKey = "AIzaSyDijlU1RZBAE6E0YPFMRQBUoP4rJTu3tts"; 
    var videoId = extractVideoId(youtubeLink);
    console.log("videoID"+ videoId);
    var apiUrl = 'https://www.googleapis.com/youtube/v3/videos?id=' + videoId +
                 '&part=contentDetails&key=' + apiKey;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                durationInSeconds = parseISO8601Duration(data.items[0].contentDetails.duration);
                var formattedDuration = formatDuration(durationInSeconds);
                document.getElementById("videoDuration").textContent = formattedDuration;
                if(randDurationInSeconds == durationInSeconds && document.getElementById("rule6").style.display === "block"){
                    document.getElementById("rule6title").style.backgroundColor = "green";
                    document.getElementById("rule6content").style.backgroundColor = "#5FFF5F";
                    document.getElementById("rule7").style.display = "block";
                    return true;
                }
                else{
                    document.getElementById("rule6title").style.backgroundColor = "red";
                    document.getElementById("rule6content").style.backgroundColor = "#FF5F5F";
                    document.getElementById("rule7").style.display = "none";
                    return false;
                }                
            }
            else {
                document.getElementById("videoDuration").textContent = "Video not found.";
            }
        })
        .catch(error => {
            console.error(error);
    });

}
function extractVideoId(url) {
    var match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
}
function parseISO8601Duration(duration) {
    var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    var hours = match[1] ? parseInt(match[1], 10) : 0;
    var minutes = match[2] ? parseInt(match[2], 10) : 0;
    var seconds = match[3] ? parseInt(match[3], 10) : 0;
    return hours * 3600 + minutes * 60 + seconds;
}
function formatDuration(seconds) {
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
var randomString = generateRandomString();
function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = Math.floor(Math.random() * (8 - 5 + 1)) + 5;
    randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    document.getElementById("randomString").textContent="The password must contain this random generated string: " + randomString;
    return randomString;
}
function rule7(){
    console.log(randomString);
    if(password.value.includes(randomString)){
        console.log("funfou");
        document.getElementById("rule7title").style.backgroundColor = "green";
        document.getElementById("rule7content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else{
        console.log("n funfou");
        document.getElementById("rule7title").style.backgroundColor = "red";
        document.getElementById("rule7content").style.backgroundColor = "#FF5F5F";
        return false;
    }
}

function rule8(){
    const europeanCountries = [
        'Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria',
        'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany',
        'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein',
        'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands',
        'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia',
        'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Kingdom', 'Vatican City'
    ];

    lowerCasePassword= password.value.toLowerCase();
    for(var x=0; x< europeanCountries.length; x++){
        if(lowerCasePassword.includes(europeanCountries[x].toLowerCase())&& document.getElementById("rule8").style.display === "block"){
            document.getElementById("rule8title").style.backgroundColor = "green";
            document.getElementById("rule8content").style.backgroundColor = "#5FFF5F";
            return true;
        }
    }
    document.getElementById("rule8title").style.backgroundColor = "red";
    document.getElementById("rule8content").style.backgroundColor = "#FF5F5F";
    return false;
}

function rule9(){

    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let day = currentDate.getDate().toString().padStart(2, '0');
    let stringDate = `${day}/${month}/${year.toString().slice(-2)}`;
    if(password.value.includes(stringDate) && document.getElementById("rule9").style.display === "block"){
        document.getElementById("rule9title").style.backgroundColor = "green";
        document.getElementById("rule9content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else {
        document.getElementById("rule9title").style.backgroundColor = "red";
        document.getElementById("rule9content").style.backgroundColor = "#FF5F5F";
        return false;
    }


}

var LimiterRandDog=0;
var randDog;
function rule10(){
    const dogRaces = [
        "bulldog", "golden", "german shepherd", "husky", "rottweiler", "chihuahua", "chow chow",
        "doberman", "poodle", "dachshund", "yorkshire", "shih-tzu", "shiba", "dalmatian",
    ];
    if(LimiterRandDog==0){
      randDog=getRandomInt(0, 13);  
      LimiterRandDog=LimiterRandDog+1;
    }
    if(randDog <10){
        document.getElementById("dogImg").src = "dog_pics/0"+randDog+".jpg";
    }
    else{
        document.getElementById("dogImg").src = "dog_pics/"+randDog+".jpg";
    }
    if(password.value.toLowerCase().includes(dogRaces[randDog]) && document.getElementById("rule10").style.display === "block"){
        document.getElementById("rule10title").style.backgroundColor = "green";
        document.getElementById("rule10content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else{
        document.getElementById("rule10title").style.backgroundColor = "red";
        document.getElementById("rule10content").style.backgroundColor = "#FF5F5F";
        return false;
    }
}
var LimiterRandRiddle=0;
var randRiddle;

function rule11(){
    //0 black hole ----1 ketchup ----2 light ----3 atom ---4 life --- 5 website --- 6 trophy ---7 painting ---8 star 9---27
    var printRiddle= document.getElementById("riddle");
    const riddleAns= [
        "black hole", "ketchup", "light", "atom", "life", "website", "trophy", "painting", "star", "27",
    ];
    const riddles = [
        "<br>I'm born from the remnants of a massive star,<br>A celestial enigma, both near and far.<br>I devour all that comes too close,<br>Even light can't escape, it's engrossed.<br>In the cosmos, I'm a mysterious role.", 
        "<br>I'm found in a bottle or a squeeze,<br>On burgers, fries, and more, if you please.<br>I'm red and tangy, a condiment so bold,<br>Enhancing flavors, turning food into gold.<br>What am I, in a savory role,<br>That adds flavor to your favorite foods in a bowl?",
        "<br>I'm the speedster of the cosmic race,<br>Invisible traveler through time and space.<br>I bounce off objects, I make things gleam,<br>I'm every artist's muse, in their wildest dream.<br>Photons carry my message, so swift,<br>What am I, this energy that spirits uplift?",
        "<br>I'm the building block of matter, so small and neat,<br>Protons, neutrons, electrons, I can't be beat.<br>In compounds and elements, I always play a part,<br>A fundamental piece of science and art.<br>What am I, in the science realm's chats,<br>That make up everything, from ants to bats?",
        "<br>I'm a journey that we all must take,<br>A fragile gift, yet strong, I make.<br>From birth to end, a story unfolds,<br>With chapters of tales, both young and old.<br>What am I, a tapestry woven with time,<br>A precious, fleeting, and beautiful rhyme?",
        "<br>I'm a digital place where you surf and roam,<br>A collection of pages, your second home.<br>HTML and CSS give me my grace,<br>With links and images in their rightful place.<br>What am I, in the virtual heights,<br>Where information flows, day and night?",
        "<br>I stand on a pedestal, gleaming with pride,<br>A symbol of victory, with nothing to hide.<br>I'm earned through hard work, skill, and might,<br>A cherished reward for an unforgettable fight.<br>What am I, a symbol of glory and glee,<br>In the world of competition, who can I be?",
        "<br>I'm a canvas filled with colors so bright,<br>A captured moment, a visual delight.<br>Brush strokes and pigments, I come to life,<br>In galleries and homes, away from strife.<br>What am I, a masterpiece on display,<br>In the world of art, I often hold sway?",
        "<br>I twinkle in the night, so high and far,<br>A shimmering gem in the cosmic jar.<br>I'm a fusion furnace, burning bright,<br>My gravity shapes the universe's flight.<br>What am I, a celestial body so far,<br>A beacon of light, like a celestial czar?",
        "<br>I'm a number that's not often prime,<br>Divisible by three, multiple times.<br>A cube of a digit, I stand tall,<br>In mathematics, I often enthrall.<br>What am I, in the numbers' heaven,<br>A trio of nines, a math lover's given?",
    ];
    if(LimiterRandRiddle==0){

        randRiddle=getRandomInt(0, 9);  
        LimiterRandRiddle=LimiterRandRiddle+1;
    }
    printRiddle.innerHTML= riddles[randRiddle];
    if(password.value.toLowerCase().includes(riddleAns[randRiddle])&& document.getElementById("rule11").style.display === "block"){
        document.getElementById("rule11title").style.backgroundColor = "green";
        document.getElementById("rule11content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else{
        document.getElementById("rule11title").style.backgroundColor = "red";
        document.getElementById("rule11content").style.backgroundColor = "#FF5F5F";
        return false;
    }

}

function getRandomHexColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var redHex = red.toString(16).padStart(2, '0');
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');
    var hexColor = "#" + redHex + greenHex + blueHex;
    return hexColor;
}
var hexRandLimiter=0;
var hexColor;
function rule12(){
    var displayHex = document.getElementById("color");
    if(hexRandLimiter==0){
        hexColor=getRandomHexColor();
        hexRandLimiter=hexRandLimiter+1;
    }
    displayHex.style.backgroundColor=hexColor;
    if(password.value.toLowerCase().includes(hexColor)&& document.getElementById("rule12").style.display === "block"){
        document.getElementById("rule12title").style.backgroundColor = "green";
        document.getElementById("rule12content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else{
        document.getElementById("rule12title").style.backgroundColor = "red";
        document.getElementById("rule12content").style.backgroundColor = "#FF5F5F";
        return false;
    }
}

var randLangLimiter=0;
var randLang;
function rule13(){
    var printLanguage= document.getElementById("language");
    const languageAns= [
        "arabic", "mandarin", "japanese", "korean", "ukranian", "turkish", "hebrew",
        "swahili", "hindi", "viatnamese", "hausa", "amharic", "yoruba", "zulu",

    ];
    const languages = [
        "مرحبا، أنا أحب البطاطس", "你好，我喜欢土豆", "こんにちは、ジャガイモが好きです", 
        "안녕하세요 저는 감자를 좋아해요", "привіт я люблю картоплю", "merhaba patatesleri severim",
        "שלום אני אוהב תפוחי אדמה", "habari napenda viazi", "नमस्ते मुझे आलू पसंद है",
        "xin chào tôi thích khoai tây", "sannu ina son dankali", "ሰላም ድንች እወዳለሁ።",
        "hello Mo fẹ poteto", "sawubona ngithanda amazambane",

    ];
    
    if(randLangLimiter==0){
        randLang=getRandomInt(0, 13);  
        randLangLimiter=randLangLimiter+1;
    }
    printLanguage.innerHTML= languages[randLang];
    if(password.value.toLowerCase().includes(languageAns[randLang])&& document.getElementById("rule13").style.display === "block"){
        document.getElementById("rule13title").style.backgroundColor = "green";
        document.getElementById("rule13content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else{
        document.getElementById("rule13title").style.backgroundColor = "red";
        document.getElementById("rule13content").style.backgroundColor = "#FF5F5F";
        return false;
    }
}
function rule14(){

    if(password.value.toLowerCase().includes("potato") && document.getElementById("rule14").style.display === "block"){
        document.getElementById("rule14title").style.backgroundColor = "green";
        document.getElementById("rule14content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else{
        document.getElementById("rule14title").style.backgroundColor = "red";
        document.getElementById("rule14content").style.backgroundColor = "#FF5F5F";
        return false;        
    }

}
function rule15(){
    var length= password.value.length;

    if(password.value.includes(length)&& document.getElementById("rule15").style.display === "block"){
        document.getElementById("rule14title").style.backgroundColor = "green";
        document.getElementById("rule14content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else{
        document.getElementById("rule14title").style.backgroundColor = "red";
        document.getElementById("rule14content").style.backgroundColor = "#FF5F5F";
        return false;
    }
}



function gamble(){
    var rand = [0,0,0];
    var slot = ["", "", "", ""];
    if(countdownValue>5){
        for(let x=0; x<3;x++){
            rand[x]=getRandomInt(1,100);
            if(rand[x]<=40){
                slot[x]="Cat";
            }
            if(rand[x]>40 && rand[x]<=70){
                slot[x]="Bird";
            }
            if(rand[x]>70 && rand[x]<=90){
                slot[x]="Dog";
            }
            if(rand[x]>90 && rand[x]<=100){
                slot[x]="7";
            }
        }
        if(slot[0]==slot[1]&&slot[0]==slot[2]){
            document.getElementById("gambleSlotTitle").style.backgroundColor = "green";
            document.getElementById("gambleSlotContent").style.backgroundColor = "#5FFF5F";
            if(slot[0]=="Cat"){
                countdownValue=countdownValue+30;
            }
            if(slot[0]=="Bird"){
                countdownValue=countdownValue+45;
            }
            if(slot[0]=="Dog"){
                countdownValue=countdownValue+60;
            }
            if(slot[0]=="7"){
                countdownValue=countdownValue+(60*5);
            }
        }
        else{
            document.getElementById("gambleSlotTitle").style.backgroundColor = "red";
            document.getElementById("gambleSlotContent").style.backgroundColor = "#FF5F5F";
        }
        document.getElementById("spinResult1").textContent=slot[0];
        document.getElementById("spinResult2").textContent=slot[1];
        document.getElementById("spinResult3").textContent=slot[2];
        countdownValue=countdownValue-5;
        const countdownElement = document.getElementById('timer');
        const minutes = Math.floor(countdownValue / 60);
        const seconds = countdownValue % 60;
        countdownElement.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}



