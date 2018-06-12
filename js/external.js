console.log('Hello from external JavaScript');

alert('Welcome to my Website!');
// var userFavoriteColor = prompt('What is your favorite color?');
// console.log('Wow! ' + userFavoriteColor + ' is my favorite color too!');


// Exercises

    // You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

    /*
            alert('Let\'s find out how much your movie rentals are going to cost you');
            var rentalPerDayDollars = 3;
            var littleMermaidDays = prompt('How many days did you rent the Little Mermaid?');
            var brotherBearDays = prompt('How many days did you rent Brother Bear for?');
            var herculesDays = prompt('How many days did you rent Hercules for?');

            var totalRentalCost;

            totalRentalCost = (parseInt(littleMermaidDays) + parseInt(brotherBearDays) + parseInt(herculesDays)) * parseInt(rentalPerDayDollars);

            console.log('The cost to the customer is $' + totalRentalCost.toFixed(2));

            alert('Your movie rentals will cost you $' + totalRentalCost.toFixed(2) + ' total! \nHave a nice day!');
    */


    // Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    /*
            alert('Let\'s see how hard you worked this week slacker! You tell me the hours you worked and I\'ll tell you how much dinero you earned!');


            var payPerHourGoogle = 400;
            var payPerHourAmazon = 380;
            var payPerHourFacebook = 350;
            var totalPaymentForWork;

            var hoursWorkedGoogle = prompt('How many hours did Google make you slave away this week?');
            var hoursWorkedAmazon = prompt('How many hours did Amazon make you slave away this week?');
            var hoursWorkedFacebook = prompt('How many hours did Facebook make you slave away this week?');

            totalPaymentForWork = (payPerHourGoogle * parseInt(hoursWorkedGoogle)) + (payPerHourAmazon * parseInt(hoursWorkedAmazon)) + (payPerHourFacebook * parseInt(hoursWorkedFacebook));

            console.log('The slacker earned $' + totalPaymentForWork.toFixed(2) + ' this week!');
    */


// Password Validator

        var username = 'codeup';
        var password = 'notastrongpassword';

    // Create a variable that holds a boolean value for each of the following conditions:

        // the password must be at least 5 characters
        // the password must not include the username
        // the username must be no more than 20 characters
        // neither the username or password can start or end with whitespace


        var isPassMinLength;
        var isUsernameNotInPass;
        var isUserNameUnderMaxLength;
        var isUserNameTrim;
        var isPassTrim;

        var isPassMinLength, isUsernameNotInPass, ...;

        var isValidPass = isPassMinLength && isUsernameNotInPass && isPassTrim;
        var isUsernameValid = isUserNameUnderMaxLength && isUserNameTrim;
