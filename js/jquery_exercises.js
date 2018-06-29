"use strict";



$(function() {
    // alert($("#dogList").text());
    // alert($("#newList").text());
    $("#playButton").click(function() {
        $("#playOutput").text($("#playInput").val());
        $("h1").toggle(250)
    });
    $(".importante").hover(function(){
        $(this).css("background-color", "indianred");
    }, function(){
        $(this).css("background-color", "rgba(0,0,0,0)");
    });
});



// Add jQuery code that will change the background color of a h1 element when clicked.
//
// Make all paragraphs have a font size of 18px when they are double clicked.
//
// Set all li text color to red when the mouse is hovering, reset to black when it is not.


$('h1').dblclick(function () {
    $(this).css('background-color', 'indianred');
});





// Bacon Lorem Ipsum
// $(document).ready(function()
// {
//     $('#default').BaconIpsum();
//     $('#custom').BaconIpsum({ type:'all-meat', paras:5, start_with_lorem:false });
//     $('#one-sentence').BaconIpsum({ type:'meat-and-filler', start_with_lorem:true, sentences:1 });
//     $('#no-tags').BaconIpsum({ type:'meat-and-filler', start_with_lorem:true, paras:1, no_tags: true });
// });