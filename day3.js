// //Arrays example......................................................
// let theGrid = [["x", "x", "x"], 
//                ["o", " ", "o"], 
//                ["x", " ", "o"]];

// console.log(theGrid[0][0]);
// console.log(theGrid[0][1]);
// console.log(theGrid[0][2]);

// if () {   //the IF () would contain the parameter to check
//     console.log("You won!");
// }

// //Loops example.........................................................
// let theGrid = [["o", "x", "o"], 
//                ["o", " ", "o"], 
//                ["x", " ", "o"]];
// let toCheck;

// for (let i = 0; i < 2; i++) {
//     if (i == 0) {
//         toCheck = "x";
//     } else {
//         toCheck = "o";
//     }

//     if (theGrid[0][0] == toCheck && theGrid[0][1] == toCheck && theGrid[0][2] == toCheck) {
//         console.log("You won!");
//     }
// }

// //Running a Function example................................................
// const pressGrindBeans = () => {
//     console.log("HEllo!");
// }
// pressGrindBeans();

// //creating a simple function with a Boolean (true or false).................
// const rand = Boolean(Math.round(Math.random()));

// let coffeeIsGrinding = rand; //declared it is false going into the function


// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("stopping the grind");
//         coffeeIsGrinding = false; 
//     }
//     else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

// Cash machine example .....................................
// let balance = 1000;
// let amount = 100;
// let accnumber = 50449921

// const cashWithdrawal = (amount, accnumber) => {
//     console.log(`Withdrawing ${amount} from account ${accnumber}`);
// }
// balance = (balance - amount); {
//     console.log(`Your remaining balance is , £ ${balance}`)
// }


// cashWithdrawal (amount, accnumber)
// cashWithdrawal (amount, accnumber)
// cashWithdrawal (amount, accnumber)

// // RETURN Function ...............................................
// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

//     let myNumber = addUp (7,3);
// console.log(myNumber);

// //Function Return example (Celsius to Farenheit).................
// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
//     };
//     const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
//     };
//     console.log("The temperature is " + getFahrenheit(15) + "°F");
//     // Output: The temperature is 59°F



// //Declarations (1) ..............................................
// function square(number) {
//     return number * number;
//     };
//     square(5);
//     // Output: 25

// //Declaration (2)................................
// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//     return (n * factorial(n-1));
//     }
//     }
//     console.log(factorial(33));
// //Function linked to an identifier; call factorial to get it to do something

// //Expression/anonymous function..............................................................
// const square = function(number) { //Anonymous Function as has no name
//     return number * number;
//     };
//     square(5);
//     // Output: 25


// //Arrow Function syntax......................................... (how do i display original #5?)
// const square = (number) => {
//     return number * number;
//     }
//     let output = square(5);

//     console.log("square is ", output)
//     // Output: 25

    
// //ACTIVITY 1 (coffee order with parameters (size, type of drink))
// const takeOrder = (size, drinkType) => {
//     console.log(`Order received: ${size} ${drinkType}`);
//     }
//     takeOrder("Tall","Latte");


// //Activity to remake the TicTacToe board ............................................incomplete
// var s1 = "X";
// var s2 = "O";
// var s3 = "X";
// var s4 = "O";
// var s5 = " ";
// var s6 = "O";
// var s7 = " ";
// var s8 = "X";
// var s9 = " ";

// console.log(" |   | ");
// console.log(`${s1}| ${s2} |${s3}   `);
// console.log(" |   | ");
// console.log("-------");
// console.log(" |   | ");
// console.log(`${s4}| ${s5} |${s6}   `);
// console.log(" |   | ");
// console.log("-------");
// console.log(" |   | ");
// console.log(`${s7}| ${s8} |${s9} `);
// console.log(" |   | ");

// //if ((s1,s2,s3) == "X")