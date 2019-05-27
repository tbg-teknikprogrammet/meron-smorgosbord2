// alert ("h");

const p1Score = document.getElementById("p1Score");
const p2Score = document.getElementById("p2Score");
const p1Button = document.getElementById("player 1");
const p2Button = document.getElementById("player 2");
const raound = document.getElementById("raound");
const ScoreToWin = document.getElementById("ScoreToWin");
const resetAll = document.getElementsByTagName("button")[2];
let gameOver = false;
let p1ScoreCount = 0;
let p2ScoreCount = 0;

p1Button.addEventListener("click", () => {
  p1ScoreCount++;
  p1Score.textContent = p1ScoreCount;
  if (p1ScoreCount == raound.value) {
    alert("Player 1 is the Winner");
    p1Score.className += " red";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

p2Button.addEventListener("click", () => {
  p2ScoreCount++;
  p2Score.textContent = p2ScoreCount;
  if (p2ScoreCount == raound.value) {
    alert("Player 2 is the Winner");
    p2Score.className += " red";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

raound.addEventListener("click", () => {
    ScoreToWin.textContent = raound.value;
});

resetAll.addEventListener("click", function() {
  reset();
});

function reset() {
  gameOver = false;
  p1ScoreCount = 0;
  p2ScoreCount = 0;
  p1Score.innerHTML = 0;
  p2Score.innerHTML = 0;
  raound.value = 5;
  p1Score.classList.remove("red");
  p2Score.classList.remove("red");
  p1Button.disabled = false;
  p2Button.disabled = false;
}



// koden för den stora och små bilder 
var bigsize = document.querySelector(".bigsize");
var smallsize = document.querySelector(".smallsize");
    
smallsize.addEventListener("click", function() {
    bigsize.style.visibility = "visible";
});

//close.button
var close = document.querySelector(".back");
var wrapper = document.querySelector(".wrapper");

close.addEventListener("click", function() {
    bigsize.style.visibility = "hidden"
});


function starttid() {
  var idag = new Date();
  var timme = idag.getHours();
  var minut = idag.getMinutes();
  var sekund = idag.getSeconds();
  minut = checkTime(minut);
  sekund = checkTime(sekund);
  document.getElementById('klockan').innerHTML =
  timme + ":" + minut + ":" + sekund;
  var t = setTimeout(starttid, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}


function kalc()
{
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    
    var oper = document.getElementById('operators').value;
    
    if(oper === '+')
    {
        document.getElementById('result').value = n1+n2;
    }
    
    if(oper === '-')
    {
        document.getElementById('result').value = n1-n2;
    }
    
    if(oper === '/')
    {
        document.getElementById('result').value = n1/n2;
    }
    
    if(oper === 'X')
    {
        document.getElementById('result').value = n1*n2;
    }
}



/*
***********************
    Slideshow
***********************
*/

var bilder = document.getElementById("slides");
var bilderArray = ["assets/img1.jpg", "assets/avengers1.jpg", "assets/js1.jpg", "assets/one-piece1.jpg"];
var bilderIndex =  1;

function slidesShowRight (){
    bilder.setAttribute("src", bilderArray[bilderIndex]);
    bilderIndex = bilderIndex +1;
    if (bilderIndex > 3 ) {bilderIndex = 0;}
}

function slidesShowLeft (){
    bilder.setAttribute("src", bilderArray[bilderIndex]);
    bilderIndex = bilderIndex -1;
    if (bilderIndex > 3 ) {bilderIndex = 0;}
}




//för att ändra Backgrunds färg
var div = document.getElementById("div")
var button = document.getElementById("show-more")
button.onclick = function (){
  if (body.className == "color"){
    body.className = "";
    button.innerHTML = " Normal-background";
  }
  else {
    body.className = "color";
    button.innerHTML = "Change-to-normal";
  }
}