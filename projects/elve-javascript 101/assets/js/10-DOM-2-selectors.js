// alert ("hello");

// select
// Take a string argument returns the one element with a matching ID
var element = document.getElementById("highlight");
// console.log(element) //Log HTML
// console.dir(element) //Log objekt

// Take a string argument and returns a list of element that have a matching class
var elements = document.getElementsByClassName("bolded");
// console.log(element);
// console.dir(element);

// Take a string argument and returns a list all element a given tag name,
var eles = document.getElementsByTagName("li");


// Take a string argument and returns a list all element a given css-sting
//document.querySelector("h1");
//document.querySelector(".bolded");
//document.querySelector("#menu a.active");
//seaching for an element that does not exist returns null

var queryTag = document.querySelector("bolded");

var queryTag = document.querySelectorAll(".bolded");


var pID = document.getElementById("first");
var elementer = document.getElementsByClassName("special")
var queryTag = document.querySelector("p#first");
document.getElementById("first").innerHTML = "";
var firstP = document.querySelectorAll(".special");

