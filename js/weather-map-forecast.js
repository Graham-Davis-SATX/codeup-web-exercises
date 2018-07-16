"use strict";

window.onload=function(){
    var map;
    function initialize() {
        var myLatlng = new google.maps.LatLng(40.713956, -74.006653);

        var myOptions = {
            zoom: 18,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

        var marker = new google.maps.Marker({
            draggable: true,
            position: myLatlng,
            map: map,
            title: "Your location"
        });

        // //Add listener
        // google.maps.event.addListener(marker, "click", function (event) {
        //     // alert(this.position);
        // }); //end addListener

        google.maps.event.addListener(marker, 'drag', function (event) {
            document.getElementById("lat").value = event.latLng.lat();
            document.getElementById("long").value = event.latLng.lng();
            // infoWindow.open(map, marker);

        });

        var infowindow = new google.maps.InfoWindow({
            content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });


    }
    google.maps.event.addDomListener(window, "load", initialize());

};


