"use strict";

 /**

 Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
 Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

 */

function isNumeric(x) {
    return !isNaN(parseFloat(x));
 }

function isOdd(input) {
    return isNumeric(input) && input % 2 !== 0;
}

var number;

do {
    number = parseFloat(prompt("Please input an odd number between 1 and 50"));
    if(isOdd(number) && (number < 50 && number >=1)) {
        break;
    }
} while(true);

console.log('the number to skip is: ' + number);

for (var i = 1; i <= 50; i++) {
    if (i === number) {
        console.log('Yikes! Skipping number: ' + i);
        continue;
    }

    if(isOdd(i)) {
        console.log('Here is an odd number: ' + i);
    }
}

console.log("***********************************");
