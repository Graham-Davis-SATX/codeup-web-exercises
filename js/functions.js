(function(){

// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//
//
//         function sayHello(name) {
//             return 'Hello ' + name + '!';
//         }
//         console.log(sayHello('Graham'));
//         //you could do this:
//         // var name = prompt('What\'s your name dog?');
//         // console.log(sayHello(name));
//
//         //you could do this too:
//         // console.log(sayHello(prompt('What\'s your name dog?')));
//
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
//
//
//         var helloMessage = sayHello('Graham');
//         console.log(helloMessage);
//
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//
//
//         var myName = 'Graham';
//         console.log(sayHello(myName));
//
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
//
//         // Don't modify the following line, it generates a random number between 1 and 3
//         // and stores it in a variable named random
//         var random = Math.floor((Math.random() * 3) + 1);
//
//         function isTwo(number) {
//             return 2 === number;
//         }
//         console.log(isTwo(-1));
//         console.log(isTwo(2));
//         console.log(isTwo(10));
//         console.log(random);
//         console.log(isTwo(random));
//
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.37
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
//
//         function calculateTip(tipPercentage, billTotal){
//             var tipInValue = tipPercentage; // 0.2
//             return billTotal * tipInValue;
//         }
//
//         console.log(calculateTip(0.20, 20)); // returns 4
//         console.log(calculateTip(0.25, 25.50)); // returns 6.37
//         console.log(calculateTip(0.15, 33.42)); // returns 5.013
//
//
//     /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
//
//
//         // console.log(calculateTip(prompt('Give me the tip %.'\, prompt('Give me the bill total.')));
//
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
//
//         function applyDiscount(originalPrice, discountPercent){
//             var discount = discountPercent / 100; //.12
//             var discountVal = originalPrice + discount;
//             return originalPrice - discountVal;
//         }
//
//         console.log(applyDiscount(100, 12));

    /** ================ SIMPLE FUNCTION DRILLS */


    // 1) Make a function called returnTwo() that returns the number 2 when called
    // ---Test this function with console.log(returnTwo())



    // 2) Make a function called returnName() that returns the string of your name
    // ---Test this function with console.log(returnName())



    // 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
    // ---Test this function with console.log(addThree(5))



    // 4) Make a function called sayString() which returns the string input passed in.
    // ---Test this function with console.log(sayString())



    // 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
    // ---Test this function by directly calling sayHowdy()
    // ---Remember this function does not need a defined return value




// ================ CHALLENGE FUNCTION DRILLS

// Write a function called `identity(input)` that takes in an argument called input and returns that input.



// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.

    function getRandomNumber(min, max) {
        var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randNum;
    }
    console.log(getRandomNumber(2, 10));

// Write a function called `first(input)` that returns the first character in the provided string.




// Write a fuction called `last(input)` that returns the last character of a string




// Write a function called `rest(input)` that returns everything but the first character of a string.




// Write a function called `reverse(input)` that takes a string and returns it reversed.




// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.



// Write a function called `count(input)` that takes in a string and returns the number of characters.



// Write a function called `add(a, b)` that returns the sum of a and b


// Write a function called `subtract(a, b)` that return the difference between the two inputs.

// Write `multiply(a, b)` function that returns the product


// Write a divide(numerator, denominator) function that returns a divided by b



// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`




// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.


// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators


// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

})();
