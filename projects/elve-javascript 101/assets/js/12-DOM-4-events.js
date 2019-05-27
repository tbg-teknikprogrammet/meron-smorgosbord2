// alert("hhhhhhh");

//select the button
var btn = document.querySelector("button");

//manipulate
btn.addEventListener("click", function() {
    document.querySelector("p").innerHTML = "Yay, i've been clicked!"
});

//select
var lis = document.querySelectorAll("li");

//manipulate
// lis.addEventListener("click", function() {
//     lis[0].style.textDecoration = "line-through"
// });

for(var i = 0; 1 < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.textDecoration = "line-through";
    }); 
}


var btnToggle = document.querySelector("#btnToggleBg");
var isPurple = false;

btnToggle.addEventListener("click", function() {
    if(isPurple){
        document.getElementsByTagName("body")[0].style.background = "blue";
    }
    else{
        document.getElementsByTagName("body")[0].style.background = "red";
    }
});
isPurple = !isPurple;