"use strict";

var i = 2;
while (i <= 65536) {
    console.log(i);
    i*=2;
}

console.log('********************************');

var cones = Math.floor(Math.random() * 50) + 50;

do {
    console.log('I have ' + cones + ' cones left to sell');

    var sold = Math.floor(Math.random() * 5) + 1;

    if(sold < cones) {
        console.log('I just sold ' + sold + ' ice cream cones');
        cones -= sold;
    }

    if(sold > cones) {
        console.log('I can\'t sell you ' + sold + ' because I only have ' + cones + ' left');
        console.log('Next customer please!');
    }

    if(sold === cones) {
        console.log('There goes the last ' + sold + ' cones!');
        console.log('Yay, I sold all my cones');
        break;
    }
}
while (cones > 0);

console.log('********************************');