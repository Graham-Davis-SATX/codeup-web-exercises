// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

    var rentalPerDayDollars;

    var littleMermaidDays;
    var brotherBearDays;
    var herculesDays;

    var totalRentalCost;

    totalRentalCost =
        (parseInt(littleMermaidDays)
        + )


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    var googleHourlyRateDollars;
    var amazonHourlyRateDollars;
    var facebookHourlyRateDollars;

    var googleHours;
    var amazonHours;
    var facebookHours;

    var totalPayment;

    totalPayment = googleHours * googleHourlyRateDollars;
    totalPayment += amazonHours * amazonHourlyRateDollars;
    totalPayment += facebookHours * facebookHourlyRateDollars;



// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.





// A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

    var numberOfItemsForDiscount;
    var numberOfItems; //number
    var offerIsNotExpired; //boolean
    var isPremiumMember; //boolean

    var productDiscountApplied = isPremiumMember || (numberOfItems >= numberOfItemsForDiscount && offerIsNotExpired)


//Password validator - create a variable that holds a boolean balue for each of the following conditions:
//     Use the following code to follow the instructions below:
//
//
//     var username = 'codeup';
//     var password = 'notastrongpassword';
//     Create a variable that holds a boolean value for each of the following conditions:
//
//     the password must be at least 5 characters
//     the password must not include the username
//     the username must be no more than 20 characters
//     neither the username or password can start or end with whitespace


    var isPassMinLength;
    var isUserNameNotInPass;
    var isUSerNameMaxLength;
    var isUserNameTrim;
    var isPassTrim;

    var isValidPass = isPassMinLength && isUserNameNotInPass && isPassTrim;
    var isUserNameValid = isUSerNameMaxLength && isUserNameTrim

// -----


    var x = 3;
    console.log(x + 2);

    


