"use strict";

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++){
        console.log(num + ' x ' + i + ' = ' + (i * num));
    }
}

var ranNum = Math.floor(Math.random() * 10) + 1;
showMultiplicationTable(ranNum);

console.log("***********************************");

for (var i = 1; i <= 10; i++){
    var j = Math.floor(Math.random() * 180) + 20;
    if (j % 2 === 0) {
        console.log(j + ' is even');
    }
    else if (j % 2 !== 0)
        console.log(j + ' is odd');
}

// for (var d = 0; d <= 9; d += 1) {
//     var randomNum = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
//
//     var message;
//
//     if (randomNum % 2 === 0) {
//         // console.log(randomNum + ' is even');
//         message = randomNum + ' is even';
//     } else {
//         // console.log(randomNum + ' is odd');
//         message = randomNum + ' is odd';
//     }
// }


console.log("***********************************");

for (var i = 1; i < 10; i++) {
    i = i.toString();
    console.log(i.repeat(i));
}

console.log("***********************************");

for (var i = 100; i>=5; i-=5){
    console.log(i);
}

console.log("***********************************");