// //Föräldern sjunger och barnet lyssnar
// console.log("blinka lilla tjärna där")
// console.log("blinka lilla tjärna där")
// console.log("hur jag undrar var du är")
// console.log("fjärran lockar du min syn")
// console.log("likt en diamant i skyn")

// //Barnet nynnar med
// console.log("blinka lilla tjärna där")
// console.log("blinka lilla tjärna där")
// console.log("hur jag undrar var du är")
// console.log("fjärran lockar du min syn")
// console.log("likt en diamant i skyn")

// //Nu sjunger barnet den helt själv
// console.log("blinka lilla tjärna där")
// console.log("blinka lilla tjärna där")
// console.log("hur jag undrar var du är")
// console.log("fjärran lockar du min syn")
// console.log("likt en diamant i skyn")

//This code is WET! Write Everything Twice
//Eftersträva att er kod är DRY! Don't Repeat Yourself
// function twinkletwinkle(){
//     console.log("blinka lilla tjärna där");
//     console.log("blinka lilla tjärna där");
//     console.log("hur jag undrar var du är");
//     console.log("fjärran lockar du min syn");
//     console.log("likt en diamant i skyn");
// }

// //Call a function - Kalla/Anropa på fubktionen
// twinkletwinkle();
// twinkletwinkle();
// twinkletwinkle();

// //Deklarera en funktion
// function doSomething(){
//     console.log("Hello World");
//     console.log("Do Something");
// } 
// //Anropa funktionen
// doSomething();

// //Visar innehålet i funktion
// doSomething;

// //parameter och Argument

// //Deklarera en funktion med två stycken parameter
// function square(num, num1) {
//     console.log(num * num1);
// }

// //Anropa funktionen med två stycken argument
// square(5, 6);

// function sayHello(name){
//     console.log("Well hello there, dear " + name);
// }

// //Anropar funktion med ett argument, i form ev en string
// sayHello("king");
// sayHello("Greta");

// function area(length, height){
//     console.log("The area of: " + length + "and" + height + "is: " + length * height);
// }
// area(5, 10);

// function greet(person1, person2, person3, person4) {
//     console.log("Hej, " + person1 +"!") 
//     console.log("Hej, " + person2 +"!") 
//     console.log("Hej, " + person3 +"!") 
//     console.log("Hej, " + person4 +"!") 
// }
// greet("jag", "du", "han", "hon");

// function squared(x){
//     // console.log(x *x);
//     return x * x;
// }

// console.log("4 squared is: "+ squared(4));
// var result = squared(10);
// console.log(result);

// function isEven(x)
// {
//     if (x % 2 == 0) {
//     return true;
// }
// else {
//     return false;
// }}
// console.log(isEven(8));

// function kebabToSnake(str) {
//     // Everthing inbetween / /g will replace.
//     var mystring = str.replace(/-/g, "_");// replace make en new copy of the string
//     return mystring;
// }

// kebabToSnake("kebab 1");
// console.log(kebabToSnake("k-e-b-a-b-1"));


// function localScope () {
//     var showScope = 31;
//     console.log(showScope);
// }
// localScope();
// console.log(showScope);

// var showScope = "i'm global variabel"; //
// console.log(showScope);
// var showScope = 99; //Global variable
// function localScopeY(){
//     showScopeY= 100;
//     console.log(showScopeY);
// }
//  console.log(showScopeY) //Globle showScopeY
//  localScopeY();




//  function sing(){
//     console.log("im singing in the rain!");
//     console.log("im singing in the sunny!");
//  }

//  setInterval(sing, 2500);

//  var anon = setInterval(function() {
//      console.log("Im an anonymous function");
//  }, 3000);


function myTimer(){
    var d = new Date();
    document.getElementById("output").innerHTML = d.toLocaleTimeString();
}

myTimer();

var myTime = setInterval(myTimer, 1000);

document.getElementsByTagName("button")[0].addEventListener("mouseenter", function() {
    clearInterval(myTime);
});

document.querySelector("button").addEventListener("mouseleave", function() {
    myTime = setInterval(myTimer, 1000);
});