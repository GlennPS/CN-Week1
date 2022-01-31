
// // Reason for certain open quotes ".." '..' `..`  ..........................................
// let example = 123456
// console.log("hello"+ example);    //
// console.log('hello')              //
// console.log(`hello ${example}`);  //injection of data kept as a string

console.log("All around the world".charAt(7).toUpperCase());
//Following changes individual Chars
//console.log("All around the world".charAt(3).toUpperCase());
//console.log("All around the world".charAt(5).toUpperCase());
//console.log("All around the world".charAt(8).toUpperCase());
//console.log("All around the world".charAt(0).toUpperCase());

let array = ["A", "l", "o", "h", "r"];
console.log(array[2]);

//Try and figure out CONST ---const used to protect data type
//const thisNum = 10;
//thisNum++;
//console.log(thisNum)


//Combining outputs
let favDrink ="tea";
console.log(favDrink);

console.log("My favourite drink is " + favDrink);
console.log(`MY favourite drinks ${favDrink} as its nice`);

console.log ("ACTIVITIES")
//Activity 1
let ownName = "Glenn";
let ownAge = 36;
let faveCol = "NavyBlue";

console.log("my name is ", ownName, "i am ", ownAge, ". My favourite colour is", faveCol)

//Activity2
let breakfast = "Porridge";
let lunch = "Omellette";
let dinner = "Chilli beef pasta"

console.log("for my breakfast I had", breakfast, ", lunch is", lunch, "and my tea will be", dinner)

breakfast = "eggs";
lunch = "salad";
dinner = "takeout";

console.log("for my breakfast I had", breakfast, ", lunch is", lunch, " and my tea will be", dinner)


//Activity 3 Number of days until birthday ......................................Incomplete.......

const today = new Date();
const myDob = new Date('November 4, 2022');

const diff = today.getTime() - myDob.getTime()
const diffDays = diff / (1000 * 3600 * 24);

console.log ("Number of days until birthday ", diffDays);


//Activity 4
var s1 = "X";
var s2 = "O";
var s3 = "X";
var s4 = "O";
var s5 = " ";
var s6 = "O";
var s7 = " ";
var s8 = "X";
var s9 = " ";

console.log(" |   | ");
console.log(`${s1}| ${s2} |${s3}   `);
console.log(" |   | ");
console.log("-------");
console.log(" |   | ");
console.log(`${s4}| ${s5} |${s6}   `);
console.log(" |   | ");
console.log("-------");
console.log(" |   | ");
console.log(`${s7}| ${s8} |${s9} `);
console.log(" |   | ");


//IF Statements and switches

let music = "classical";

if (music == "classical") {
    console.log("classical");
} else {
    console.log("default");
}


//Modulas (if it gives a remainder it looks)
if (1 % 2)
console.log("Hello")


//AND statement is && where both elements must be True

//OR statement is || and one element must be True
let day = "Saturday";
if (day == "Saturday" || day == "Sunday") {
    console.log("It's weekend!");
}
else {
    console.log("when is weekend?");
}

//Switch elements

//let car = "Tesla"
//switch (car) {
//    case "Ford";
//    case "GM";

//SWITCH test
const grade = 44;
switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
        default:
            console.log("Failed");
}

//IF - ELSE Test
const grade2 = 81;

if (grade2 >= 70) {
    console.log("Distinction"); 
}
else if (grade2 >= 60) {
    console.log("Merit"); 
}
else if (grade2 >= 50) {
    console.log("Pass"); 
}
else {
    console.log("Failed"); 
}



//if statement - Activity 1 (Var age if >17 can serve)
var age = 17

if (age >= 18) {
    console.log("Yes i can serve you"); 
}
else if (age <= 16) {
    console.log("You are not old enough"); 
}
else {
    console.log("Pass your I.D"); 
}

//if and - Activity
var age = 15
let country = "UK"

if (country =="UK" && age >= 18) {
    console.log("Yes i can serve you"); 
}
else if (age <= 16) {
    console.log("You are not old enough"); 
}
else {
    console.log("wrong country"); 
}

// //Switch case - Activity PIZZA ${topping}

// var anchovies = Anchovies
// var pineapple = Pineapple
// var chicken = Chicken

// console.log("These are important ingredients for my pizza.")
// console.log(`I dont mind having ${chicken} on my pizza.`);


