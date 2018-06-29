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

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

$(function() {
    $("#playButton").click(function() {
        $("#playOutput").text($("#playInput").val());
        $("h1").toggle(500)
    });
    $(".importante").on("mouseover", function() {
        $(this).css("background-color", "yellow")
    });
});












$(document).ready(function()
{
    $('#default').BaconIpsum();
    $('#custom').BaconIpsum({ type:'all-meat', paras:5, start_with_lorem:false });
    $('#one-sentence').BaconIpsum({ type:'meat-and-filler', start_with_lorem:true, sentences:1 });
    $('#no-tags').BaconIpsum({ type:'meat-and-filler', start_with_lorem:true, paras:1, no_tags: true });
});