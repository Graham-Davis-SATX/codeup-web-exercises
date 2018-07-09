"use strict";

$(document).ready(function(){

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    function buildList(arrObjs) {
        var output = "";
        output += "<ul>";
        arrObjs.forEach(function(person){
           output += "<li style='color:"+ person.favColor + "'>" + person.name + "</li>";
        });
        output += '</ul>';
        return output;
    }

    $('#add-names-btn').click(function() {
        $('#names-list').html(buildList(people));
    });





    // $('#add-names-btn').click(function () {
    //
    //     if($('#names-list').html() === '') {
    //         people.forEach(function (ele) {
    //
    //             $('#names-list').append('<li>' + ele.name + '</li>');
    //
    //         });
    //
    //         $('li').each(function (index) {
    //             $(this).css('color', people[index].favColor);
    //         })
    //
    //     }else{console.log('You Already Printed This Array!')};
    // });

});