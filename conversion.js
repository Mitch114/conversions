/*
    Start by importing your conversionutils module.
    When I run the conversion program, it should display a menu with all the different conversion choices.
    When I make a selection, it should prompt me for a value and display the conversion result
    by invoking the function in the module. The program should continuously display the menu until
    I select the exit option. The program should display an error message if I select an invalid option
    and prompt me until I select a valid menu option.

*/

let myFunctions = require("./conversionutil");
const readlineSync = require('readline-sync');
let choice = 0;

while(choice != 9) {
    console.log("1. Feet to Meters");
    console.log("2. Meters to Feet");
    console.log("3. Kilo to Mile");
    console.log("4. Mile to Kilo");
    console.log("5. Sqft to Acres");
    console.log("6. Acres to Sqft");
    console.log("7. Gallon to Cup");
    console.log("8. Pounds to Kg");
    console.log("9: Exit")
   


    choice = parseInt(readlineSync.question("Enter choice: "));


switch(choice){
    case 1:
        let a = parseInt(readlineSync.question("Enter Feet: "));
        console.log(myFunctions.toMeters(a) + " Meters");
        break
    case 2:
        let b = parseInt(readlineSync.question("Enter Meters: "));
        console.log(myFunctions.toFeet(b) + " Feet");
        break;
    case 3:
        let c = parseInt(readlineSync.question("Enter Kilos: "));
        console.log(myFunctions.toMiles(c) + " Miles");
        break;
    case 4:
        let d = parseInt(readlineSync.question("Enter Miles: "));
        console.log(myFunctions.toKilo(d) + " Kilometers");
        break;
    case 5:
        let e = parseInt(readlineSync.question("Enter Sqft: "));
        console.log(myFunctions.toAcres(e) + " Acres");
        break;
    case 6:
        let f = parseInt(readlineSync.question("Enter Acres: "));
        console.log(myFunctions.toSqft(f) + " Sqft");
        break;
    case 7:
        let g = parseInt(readlineSync.question("Enter Gallons: "));
        console.log(myFunctions.toCup(g) + " Cups");
        break;
    case 8:
        let h = parseInt(readlineSync.question("Enter Pounds: "));
        console.log(myFunctions.toKg(h) + " Kgs");
        break;
    case 9:
        console.log("Goodbye.")
        break;
    default:
        console.log('Invalid Option. Select again.');
    }
}