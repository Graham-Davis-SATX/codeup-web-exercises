// this is an object
    // var myCat = {
    //     "name": "Meowsalot",
    //     "species": "cat",
    //     "favFood": "tuna"
    // };
    // console.log(myCat.name);
    // console.log(myCat.species);
    // console.log(myCat.favFood);

// this is an array (just a comma separated list)
    // var myFavColors = ["blue", "green", "purple"];
    // console.log(myFavColors[0]);
    // console.log(myFavColors[1]);
    // console.log(myFavColors[2]);


// this is an array of objects
    // var thePets = [
    //     {
    //         "name": "Meowsalot",
    //         "species": "cat",
    //         "favFood": "tuna"
    //     },
    //     {
    //         "name": "Barky",
    //         "species": "dog",
    //         "favFood": "carrots"
    //     }
    // ];
    //
    // console.log(thePets[0].species);
    // console.log(thePets[1].favFood);


//using the following method will download the data from the link provided - this example specifically shows how to see the data in the console log
    // var ourRequest = new XMLHttpRequest();
    // ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    // ourRequest.onload = function() {
    //     console.log(ourRequest.responseText);
    // };
    // ourRequest.send();

//using the following method will download the data from the first object in the array. This also loads as soon as the page loads. There is no event listener
    // var ourRequest = new XMLHttpRequest();
    // ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    // ourRequest.onload = function() {
    //     var ourData = JSON.parse(ourRequest.responseText);
    //     console.log(ourData[0]);
    // };
    // ourRequest.send();




var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function() {
        if(ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            alert("We connected to the server, but it returned an error.");
        }
    };

    ourRequest.onerror = function() {
      alert("Connection Failed");
    };

    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += " and dislikes ";

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }


        htmlString += ".</p>"
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}






















