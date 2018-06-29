"use strict";



$(function() {
    // alert($("#dogList").text()); //creates an alert on page load
    // alert($("#newList").text()); //creates an alert on page load

    $("#playButton").click(function() {
        $("#playOutput").text($("#playInput").val());
        $("h1").toggle(250)
    });

    //changes background color of .importante
    $(".importante").hover(function(){
        $(this).css("background-color", "indianred");
    }, function(){
        $(this).css("background-color", "rgba(0,0,0,0)");
    });

    //changes the text color of li elements on hover
    $("li").hover(function(){
        $(this).css("color", "indianred");
    }, function(){
        $(this).css("color", "rgba(0,0,0,1)");
    });

    //changes the background color of all h1 elements on dblclick
    $('h1').dblclick(function(){
        $(this).css('background-color', 'indianred');
    });

    //reverts background color change on all h1 elemments on single click
    $('*').click(function(){
        $(this).css('background-color', 'rgba(0,0,0,0');
    });

    //increases the font size of each p element when the element is dbl clicked
    $('p').dblclick(function(){
        $(this).css('font-size', '18px')
    });

    //returns the default font size of all p elements when the element is single clicked
    $('p').click(function(){
        $(this).css('font-size', '1em')
    });

    //logs keystrokes in the input field at top of page
    $('#playInput').keyup(function(event){
       console.log(event);
    });
});






// Bacon Lorem Ipsum
// $(document).ready(function()
// {
//     $('#default').BaconIpsum();
//     $('#custom').BaconIpsum({ type:'all-meat', paras:5, start_with_lorem:false });
//     $('#one-sentence').BaconIpsum({ type:'meat-and-filler', start_with_lorem:true, sentences:1 });
//     $('#no-tags').BaconIpsum({ type:'meat-and-filler', start_with_lorem:true, paras:1, no_tags: true });
// });