
let myName = "Glenn";                           //LET declares a variable
let randomNum = Math.random();

console.log(myName);                    // object.property(variable/data);       // ; defines the end of a query
console.log(myName.length);
console.log("Glenn Sculthorp".length);
console.log(
    myName.toUpperCase(),
    myName.toLowerCase()
);
                                                // CONST a constant can't be changed through reassignment
const string = ("abcdef");                      // setting data type to string for representing text
console.log(string.length);                     // .length requesting the number of characters held in the data

//OTHER DATA TYPES ................................................................................................................... OTHER DATA TYPES
const number = 123456;                          // Number : for representing numbers (decimal and integers)
const boolean = false;                          // Boolean : for true and false
"const m === null"                              // Null : for nothing, absence of any object value
let x;    //variable x assigned no value        // Undefined : for when a data type isn’t determined
let sym = Symbol();                             // Symbols are immutable (cannot be changed) and are unique

//MATH .................................................................................................................................. MATH.(...)
console.log(Math.random());                     // Math.random() returns a random number in the range 0 to less than 1 (0.999...)
console.log(Math.floor(Math.random() * 10));    // * 10 multiplies by 10 to give number between 0 and 10 (9.999...)
console.log(Math.ceil(Math.random() * 10));  
console.log(randomNum);
console.log(Math.floor(randomNum))              // .floor returns largest integer < or = to a given number
console.log(Math.ceil(randomNum))               // .ceil rounds a number up to the next largest integer

console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("------------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("------------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");

console.log("All around the world".charAt(7).toUpperCase());
