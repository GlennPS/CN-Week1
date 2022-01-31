//Functions within objects are called methods.........................................

// //Warmup Activity (list drinks, give price, give balance after purchase if possible)....................
// let bev = [[`IPA, Stout, Larger, Cider, Spirit`], [4.20, 3.50, 3, 3.20, 2.80]];
// let balance = 20;
// console.log(bev);


// const cashWithdrawal = (amount, accnumber) => {
//     console.log(`Withdrawing ${amount} from account ${accnumber}`);
// }
// balance = (balance - amount); {
//     console.log(`Your remaining balance is , £ ${balance}`)
// }


// cashWithdrawal (amount, accnumber)
// cashWithdrawal (amount, accnumber)
// cashWithdrawal (amount, accnumber)


// //Jordans example of warmup activity................................................................
let drinksArray = ["coke", "pepsi", "water", "sprite"];
let drinkCost = [1, 1.5, 1, 2];
// let multiAray = [["coke", "pepsi", "water", "sprite"], [1, 1.5, 1, 2]]; <<<Better option would use this.
let userBalance = 10;

const checkDrinks = () => {
    for (let i = 0; i < drinksArray.length; i++) {
        console.log(drinksArray[i]);
    }
}
const checkBalance = () => {
    console.log(`The available drinks are:`);
    for (let i = 0; i < drinksArray.length; i++) {
        console.log(`${drinksArray[i]}: £${drinkCost[i]}`)
    }
    console.log(`Your available balance is: £${userBalance}`);
}
const checkSelection = (choice) => {
    if (userBalance >= drinkCost[choice]) {
        console.log(`Enjoy your ${drinksArray[choice]}, you've got good taste!`);
    }
}
checkDrinks();
checkBalance();
checkSelection(3);
checkSelection(2);
checkSelection(1);
checkSelection(0);


// //  create key name & value of name, then add key age. ......................................
// let myName = "Glenn Sculthorp";

// const person = {
//     firstName: "Glenn",
//     lastName: "Sculthorp",
//     age: 36,
//     looks: {                        // all info in {..} is an object
//         eyeColour: "blue",
//         hairColour: "salt&pepper",
//         array: ["1", "2", "3"]
//     }
// };                                  
// console.log(person.looks.array[1]);

//ACTIVITY (set an alarm for weekend and not for weekday)......................................
let day = "sdfdsf";
let alarm = " ";

const Alarmtimes = {
    weekendAlarm: ("no alarm needed"),
    weekdayAlarm: ("get up at 7am")
};
if (day == "Saturday" || day == "Sunday") {
console.log(Alarmtimes.weekendAlarm)
}
else {
console.log(Alarmtimes.weekdayAlarm)
}




// let number7 = 7
// let i = 0

// if (num
//     //number7/i) && (number7 / )

