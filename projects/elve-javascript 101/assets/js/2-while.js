//när använder vi while
//när vi inte vet hur många gånger koden behöver itereras

//while(vilkor) {
    //kod
//}

var text = "";
var i = 1;

while(i <= 50) {
    if(i % 3 == 0 && i % 5 == 0){
        text += "Numret är:" + i + "<br>";
    }
    i++;
}

document.getElementById("output").innerHTML = text;


// //skriv ut talet -19->19
//     var text = "";
//     var i = -19;
//     while(i <= 19) {
//      text += "Numret är:" + i + "<br>";
//         i++;
// }


// //skriv ut alla jämna tal mellan 10->40
//     var text = "";
//     var i = 10;

//     while(i <= 40) {
//       if(i % 2!==0){
//             text += "Numret är:" + i + "<br>";
//         }
//         i++;
// }


// //skriv ut alla udda tal mellan 200->333 OBS!använd modulo.
//     var text = "";
//     var i = 22;

//     while(i <= 333) {
//          if(i % 2 !== 0){
//           text += "Numret är:" + i + "<br>";
//         }
//       i++;
// }


// //skriv ut alla tal som är delbara med 3 och 5 mellan och 50 OBS! använd modulo
//     var text = "";
//     var i = 1;

//     while(i <= 50) {
//        if(i % 3 == 0 && i % 5 == 0){
//             text += "Numret är:" + i + "<br>";
//         }
//         i++;
//     }


// //Gå tillbaka till if-else.js och medidiera Guessing app så att den ingår i en

//     //  Lägg till  //<script src="assets/js/1.ifelse.js"></script> i HTML kod.
//     <script src="assets/js/1.ifelse.js"></script> 
    
    



//while.lopp - allså, fråga användaren om att gissa talet så länge denna gissa fel 


