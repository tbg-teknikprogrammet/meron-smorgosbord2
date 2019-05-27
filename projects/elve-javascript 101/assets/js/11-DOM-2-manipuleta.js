// alert ("hello");

// select
var element = document.getElementById("highlight");

// manipulate
element.style.color = "orange";
element.style.border = "2px solid black";
element.style.fontSize = "20px";
element.style.marginTop = "10px";
element.style.backgroundColor = "#aaa";

var ele = document.querySelector("h1");
ele.classList.add("some-class");


// var p2 = document.getElementsByClassName("special2")[1];
// p2.classList.add("another-class");
// firstP.classList.remove("another-class");
// firstP.classList.toggle("another-class");



//select the element

var pEle = document.querySelector(".test");
pEle.textContent = "This is a really <strong></strong> awesome paraggraph";
pEle.innerHTML = "This is a really <strong></strong> awesome paraggraph";

document.getElementsByTagName("h1")[1].textContent = "The End";
document.getElementsByTagName("h1")[1].innerHTML = "The <i>End!</i>";