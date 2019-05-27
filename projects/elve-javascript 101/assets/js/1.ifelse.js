var name = "herh"; // string
var age = 21; // Number
//== jämför men kolla inte datatyp
//==jämför och kolla  datatyp


if(age < 18) {
    // är påstånde true - kör koden mellen mäsvingarna
    console.log("STOP! Du är" + age + " år ");
} else if(age > 18 && age < 45) {
    console.log("SHUTDOWN! YOU AGE IS TOO COOL 4 sCho_ol! ");
} 

else {
    // är påstånde false - kör koden mellan mäsvingarna
    console.log("välkommen! Du är" + age + " år");
}


//single line comment.

/*block line comment.
    ************
        -----Guessing app ----
    ************
*/

// deklarera en variabel
var secretNumber = 7;

//user input - Ta emot data
var userInput = Number(prompt("Gissa ett nummer mellan 1-10 d-_-d"));


//Läsa av villkoret - Läsa av user imput 
if(userInput === secretNumber) {
    document.writeln("Grattis du har gissat rätt nummer! 10p... <br>");
} 
else if (userInput === 6 || userInput === 8)  {
    document.writeln("Det bränns!");
} 

else if (userInput > secretNumber)  {
    document.writeln("Du har gissat för högt...försök igen!");
}

else {
    document.writeln("Du har gissat för låg...försök igen!");
}


var age = Number(prompt ("Din ålder"));

if(age < 0) {
    //Du är inte född än
    document.writeln("Du är inte född ännu")
}

//Jämnt tal
else if(age % 2 == 0) {
    document.writeln("din ålder är jämnt");
}

//Udda tal
else if(age % 2 !=0) {
    document.writeln("din ålder är Udda");
}