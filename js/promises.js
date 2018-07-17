// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// long winded example
// function wait(num) {
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//           if (true) {
//               resolve();
//           } else {
//               reject();
//           }
//        }, num);
//     });
// };

// cutting out more fluff
// const wait = num => {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            if (true) {
//                resolve();
//            } else {
//                reject();
//            }
//        }, num);
//     });
// };

// this is all that's needed to run this successfully
const wait = num => {
    return new Promise ((resolve, reject) => {
       setTimeout(() =>{
           resolve();
       },
       num
       );
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




// var userName = prompt('Enter a GitHub username')
// console.log(userName);
//
//
// const request = fetch('https://api.github.com/users/' + userName + '/events', {headers: {'Authorization': 'token 5f27aa9b881266481334130bdc2ab2c4a31a6158'}});
// request
//     .then(response => response.json())
//     .then(events => console.log('This user\'s last commit was on: ' + events[0].created_at))
// ;
//
// request.catch(error => console.log(error));

const getEventsAsString = username => {
    const token = '5f27aa9b881266481334130bdc2ab2c4a31a6158';
    const url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${token}`}})
}
const getEventAsJson = username => {
    return getEventsAsString(username).then(data => data.json());
}
const getPushEvents = username => {
    return getEventAsJson(username)
        .then(events => events.filter(event => event.type === 'PushEvent'));
}
const getDateOfLastPushEvent = (username) => {
    return getPushEvents(username).then(events => events[0].created_at);
}
getDateOfLastPushEvent('graham-davis-satx')
    .then(data => {
        console.log(data);
    }).catch(error => console.error(error));

// Aside from the following bonuses, try making alternative versions of AJAX exercises using fetch.
//
// =================== BONUS exercise 1
//
// In your data directory, create a profiles.json file with the following...
//
// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }
//
// Add an input field and submit button (you will need to prevent the default behaviour) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.
//
//
// =================== BONUS exercise 2
//
// Using the Star Wars API, log the first film a Star Wars character's homeworld appeared in
//
//
// =================== BONUS exercise 3
//
// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.
//
//
// =================== BONUS exercise 4
//
// Create star-chars.json file in your data folder and paste in the following...
//
// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]
//
// Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...
//
// ['Jakku', 'Tatooine', 'Tatooine']