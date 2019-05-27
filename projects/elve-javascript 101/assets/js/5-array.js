//list a group of friends

var friend1 = "Måns";
var friend2 = "Sten";
var friend3 = "Clases";
var friend4 = "Måna";

// list a group of friends using ac array
//               0       1        2       3
var friends = ["måns", "Sten", "Claes", "Måna"] //string, numbers, booleans, objects
//array starta på index 0
console.log(friends[2] + " <3 " + friends  [3]);

function newName() {
    friends[2] = "Göran";
};

newName();

console.log(friends [2] + " <3 " + friends [3]);

//Array - different ways anda values

var colors = []; //standat
var colors = new Array(); //not that common
var randomArray = ["string", 31, true, false];
console.log(randomArray.length);

// push(), pop(), shoft(), unshift(), indexof(), slice()

//push() - add an itm at the end of an array

colors = ["red", "green", "blue"];
console.log(colors);
colors.push("purple");
console.log(colors);

//pop() - remove an item at the end of an array

colors.pop();
console.log(colors);

//  unshift() - add an item at the beginning of the array
colors. unshift("Yellow")
console.log(colors);

//shift() - remove an item at the beginning of thr array
colors.shift();
console.log(colors);

//indexof - find the index of an item in the array
console.log(colors.indexOf("grren")); //  index of an item in the array
console.log(colors.indexOf("brown")); //-1 if the values in not found

// slice() - copy parts of an array
var fruits = ["Banana", "Orange", "Lemon", "Mango", "Pear"];

//copy the 2nd anda 3rd fruit
// specify index where the new array starts(1), and ends (3), does not include index 3
// var citrus = fruits.slice(1, 3)
// console.log(citrus);

// var citrus = fruits.slice(fruits)
// console.log(copyFruits);



// var cars = ["Audi", "Volvo 940", "Ford Mondeo", "", "", "", "", ""]
// for(var i = 0; i <  cars.length; i++) {
//     console.log(cars[i]);
// }


// var countries = ["Sweden", "Norway", "Finland", "Denmark", "Island"];
// countries.forEach(function(country){
//     console.log(country);
// });

// function coutryList(country){
//     console.log("***********");
//     console.log(country);
//     console.log("***********");
//     console.log("");
// }

// countries.forEach(coutryList);

var myNumbers = [1,1,1,1,1]

function isIndentical(myNumbers) {
    // ta reda på värdet i arrayen på index 0
    // jämför de andra värdena med index 0
    // om något värde skiljer sig från index 0 return false
    // om alla stämmer return true
    // var myNumbers = myNumbers.length;
    //  return true;
    //  if( myNumbers != myNumbers)
    //  return false;


}
console.log(myNumbers.length);
// isIndentical(myNumbers);



// var sum = [1,5,123,4,2,1].reduce(sumArray, 0);

// function sumArray(a, b) {
//     return a + b;
// }

// console.log(sum);





