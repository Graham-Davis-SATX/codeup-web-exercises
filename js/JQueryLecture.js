"use strict";

// //JS
// window.onload = function() {
//     document.getElementById("playButton").addEventListener("click", function() {
//         var input = document.getElementById("playInput").value;
//         console.log(input);
//         document.getElementById("playOutput").innerText = input;
//     });
// };

// //JQuery
$(function() {
    $("#playButton").click(function() {
        $("#playOutput").text($("#playInput").val());
        $("h1").toggle(500)
    })
});
