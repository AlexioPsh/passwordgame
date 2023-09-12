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
        for(var x=0; x<15; x++){
            ruleTimeCheck[x]=0;
        }
        startTimer=0;
        countdownValue = 60; 
        password.value="";
        randMin=0;
        randSec=0;
        limiterTime=0;
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
    }
}

function startCountdown() {
    countdownInterval = setInterval(updateCountdown, 1000); 
    updateCountdown();
}
function checkrules(){

    rule10();
    if(startTimer==0){
        startCountdown();
        startTimer=1;
    }
    if(rule1()==true){
        console.log(ruleTimeCheck[0]);
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
    }
    //RULE 6
    if(rule6()==true){
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
    }
    if(rule10()==true){
        if(ruleTimeCheck[9]==0){
            countdownValue= countdownValue+30;
            ruleTimeCheck[9]=1;
        }
        document.getElementById("rule11").style.display = "block";
    }
    else{
        document.getElementById("rule11").style.display = "none";
    }


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
        var min=30;
        var max=60;
        rand= getRandomInt(min,max);
        console.log(rand);
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
    var numbers = passwordValue.match(/\d+/g);
    var mergedNumbers = parseInt(numbers.join(''), 10);
    var arrayNumbers = mergedNumbers.toString().split('');
    var arrayYear = [];
    var year = '';
    for (var x = 0; x < arrayNumbers.length; x++) {
        if (arrayNumbers[x] == 1 && arrayNumbers[x + 1] == 9) {
            for (var y = 0; y < 4 && (x + y) < arrayNumbers.length; y++) {
                year += arrayNumbers[x + y];
            }
            arrayYear.push(year);
        }
        if (arrayNumbers[x] == 2 && arrayNumbers[x + 1] == 0) {
            for (var y = 0; y < 4 && (x + y) < arrayNumbers.length; y++) {
                year += arrayNumbers[x + y];
            }
            arrayYear.push(year);
        }
    }
    year = parseInt(arrayYear.join(''));
    if(year >= 1900 && year <= 2023 && document.getElementById("rule5").style.display === "block"){
        document.getElementById("rule5title").style.backgroundColor = "green";
        document.getElementById("rule5content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else{
        document.getElementById("rule5title").style.backgroundColor = "red";
        document.getElementById("rule5content").style.backgroundColor = "#FF5F5F";
        return false;
    }
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
    var apiKey = "put your API key here"; 
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
            } else {
                document.getElementById("videoDuration").textContent = "Video not found.";
            }
        })
        .catch(error => {
            console.error(error);
    });

}
function extractVideoId(url) {
    var match = url.match(/[?&]v=([^&]+)/);
    console.log("match"+ match);
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
    if(password.value.includes(randomString) && document.getElementById("rule5").style.display === "block"){
        document.getElementById("rule7title").style.backgroundColor = "green";
        document.getElementById("rule7content").style.backgroundColor = "#5FFF5F";
        return true;
    }
    else{
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
        if(lowerCasePassword.includes(europeanCountries[x].toLowerCase())){
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
    console.log(stringDate);
    if(password.value.includes(stringDate)){
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
        "doberman", "poodle", "dachshund", "yorkshire terrier", "shih-tzu", "shiba", "dalmatian",
    ];
    if(LimiterRandDog==0){
      randDog=getRandomInt(0, 13);  
      LimiterRandDog=LimiterRandDog+1;
    }
    console.log(randDog);
    console.log(dogRaces[randDog]);
    if(randDog <10){
        document.getElementById("dogImg").src = "dog_pics/0"+randDog+".jpg";
    }
    else{
        document.getElementById("dogImg").src = "dog_pics/"+randDog+".jpg";
    }
    if(password.value.toLowerCase().includes(dogRaces[randDog])){
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

        if(slot[0]==slot[1]==slot[2]){
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
        document.getElementById("spinResult1").textContent=slot[0];
        document.getElementById("spinResult2").textContent=slot[1];
        document.getElementById("spinResult3").textContent=slot[2];
        countdownValue=countdownValue-5; 
    }
}



