
// //Two parameter function returning first parameter to the power of the second...........................

// const power = (num1, num2) => {
// //Const locks the data type. Power/num my named data. => declares function. 

//     return num1 ** num2;    }
// //Return is my command. ** is an operator. {...} indicates my codeblock/objects

//     console.log(power(2, 3)); //Output is 8.
// //console.log is just to output to terminal cmd.


// //Example array fundamentals....................................................................
// let example = 12345;
// let exampleArray = [
//     "item 1",
//     "item 2",
//     "item 3",];

//     console.log(exampleArray.[2]); // [..] indexing will bring back whatever number part of an array.

// // Example basic array coffee order..............................................................
// let coffeeOrder = [             // [...] indicates parts of an array
//     "Alex - Cortado",           // 
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
//     ];                          //  ; is always a line ending (seperate my parts)
//     console.log(coffeeOrder);   //  outputs full order
//     console.log(coffeeOrder[2]); // outputs Ben's order
//     console.log(coffeeOrder[2].length); // outputs the length of the string in array #3[2]


// //Example array PUSH coffee order to add item......................................................
// let coffeeOrder2 = [             
//     "Alex - Cortado",           
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
//     ];                          
//     coffeeOrder2.push("Donna - espresso")   // Push will add new item to end of the array.
 
// console.log(coffeeOrder2);

// //Example array POP coffee order to remove item.....................................................
// let coffeeOrder3 = [             
//     "Alex - Cortado",           
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
//     ];                          
  
//     coffeeOrder3.pop();
// console.log(coffeeOrder3);

// //ACTIVITY 1  Create list of 3favourite sites, add 2 more, then remove 1..............ACTIVITY 1....
// let favs = [
// "https://www.skysports.com/football",
// "https://www.youtube.com/",
// "https://www.funimation.com/",
// ]
// console.log(favs);

// favs.push("https://oxygennotincluded.fandom.com/wiki/Oxygen_Not_Included_Wiki",
//  "https://store.steampowered.com/")

// console.log(favs);

// favs.pop ();

// console.log(favs);

//ACTIVITY 2 (Demonstrate the uses of each method;) .............................ACTIVITY 2...............
//map(), shift(),unshift(), slice(), splice() (etc). 

//MAP()

//SHIFT()

//UNSHIFT()

//SLICE()

//SPLICE()




// //LOOPS ...................................................................................

for (let qwerty = 0 ; qwerty < 100; qwerty++) {
    console.log(qwerty);
}

let myArray = ["hi","hi", "hi","hi","hi","hi","hi","hi","hi","hi",]
for (let i = 0 ; i < myArray.length; i++) {
    console.log(i);
}

// // //Example Using FOR loops with IF statement...............FOR LOOPS are Finite...........................

// let multiplesTwo = [];          //declaring an empty array

// for(let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {           //building the value for the array
//         multiplesTwo.push (i);  //PUSHing a value to the array
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`);


// // Example Using FOR Loops with FUNCTION ....................................................

// // Example Using WHILE Loop....................

// let myArray = ["a", "e","i","o","u","hi","hi",]
// let i = 0;
// while (i < myArray.length) {
//     console.log(i);
//     i++;            //if you dont implement this increment (i++) it will run infinitely.
// }

// // Example using a WHILE Loop to generate random* card.........................................
// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){

// console.log(currentCard);
// currentCard = cards [Math.floor(Math.random()*4)];
// }
// console.log(currentCard);




