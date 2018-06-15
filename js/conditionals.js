"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

    // var enterNumber = confirm("Would you like to enter a number?");
    //
    // if (enterNumber) {
    //     var someNumber = prompt('Alright, enter your number:');
    // } else {
    //     alert('Bye Felicia!');
    // }
    // console.log(parseInt(someNumber));
    //
    // function alertEvenOddMessage(someNumber) {
    //     if (someNumber % 2 === 0) {
    //         alert(someNumber + " is an even number");
    //     } else {
    //         alert(someNumber + " is an odd number");
    //     }
    // }
    // alertEvenOddMessage(someNumber);
    //
    //
    // var plusOneHundred = (parseInt(someNumber) + 100);
    // alert('Adding one hundred to ' + someNumber + ' would equal ' + plusOneHundred);
    // console.log(plusOneHundred);
    //
    // var sign = someNumber > 0 ? 1 : someNumber === 0 ? 0 : -1;
    //
    // if (sign >= 1){
    //     alert(someNumber + ' is a positive number!');}
    // else if (sign === 0){
    //     alert('Hey, ' + someNumber + ' is a neutral number - cheater!');}
    // else if (sign <= -1){
    //     alert('Wow, ' + someNumber + ' is a negative number');}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

        // function analyzeColor(color) {
        //     if (color === 'red') {
        //         return color + ' means stop!';
        //     } else if (color === 'yellow') {
        //         return color + ' means speed up and check for cops';
        //     } else if (color === 'orange') {
        //         return color + ' you glad I didn\'t say banana?';
        //     } else if (color === 'green') {
        //         return color + ' grass grows';
        //     } else if (color === 'blue') {
        //         return color + ' skies and warm beaches';
        //     } else if (color === 'indigo') {
        //         return color + ' - what the hell is that?';
        //     } else {
        //         return 'is ' + color + ' reeeeally an actual color?'
        //     }
        // }

    // console.log(analyzeColor('blue'));
    // console.log(analyzeColor('reddish'));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
    // console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
    // var usersColor = prompt('Give me a color');
    // console.log(usersColor);
    // console.log(analyzeColor(usersColor));
    //
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// switch (aColorName) {
//     case 'red':
//         console.log("Not all fire extinguishers are red.");
//         break;
//     case 'orange':
//         console.log("Orange you glad I didn\'t say banana?");
//         break;
//     case 'yellow':
//         console.log("Most school buses are yellow because they are easy to see.");
//         break;
//     case 'green':
//         console.log("The grass isn't always greener on the other side.");
//         break;
//     case 'blue':
//         console.log("Not all shades of blue are created equal.");
//         break;
//     default:
//         console.log("I do not know anything by that color.");
//         break;
// }
// analyzeColor(randomColor);
// console.log(randomColor);
//
//

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    var discountedPrice;

    switch (luckyNumber) {
        case 0:
            discountedPrice = total;
            break;
        case 1:
            discountedPrice = total * (0.9);
            break;
        case 2:
            discountedPrice = total * (0.75);
            break;
        case 3:
            discountedPrice = total * (0.65);
            break;
        case 4:
            discountedPrice = total * (0.5);
            break;
        case 5:
            discountedPrice = 0;
            break;
        default:
            discountedPrice = 'Invalid lucky number!';
    }

    return discountedPrice;
}





/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
    function getRnd() {
    return Math.floor(Math.random() * 6);
}

var luckyNumber = getRnd();

console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 100));

console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 200));