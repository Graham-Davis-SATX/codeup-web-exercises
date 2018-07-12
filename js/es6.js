/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: 'graham',
        email: 'davis.graham.satx@gmail.com',
        languages: ['html', 'css', 'jquery', 'bootstrap']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array

users.push({
    name: 'tori',
    email: 'tori@gmail.com',
    languages: ['html', 'css']
});

// console.log(users);






// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
var name = 'Walt';
var email = 'walt@disney.com';
var languages = ['mickey mouse', 'goofy', 'pluto'];
// const name = 'your_name_here';
// const email = '';
// const languages = [];

// var name = 'graham';

// TODO: rewrite the object literal using object property shorthand
// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });

users.push({
    name,
    email,
    languages
});
// console.log(users[users.length-1]);








// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];








// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//     return emails.push(user.email);
// });
// users.forEach(function(user) {
//     return names.push(user.name);
// });
users.forEach((user) => {
    // console.log(user);
    return emails.push(user.email);
});
users.forEach((user) => {
    // console.log(user);
    return names.push(user.name);
});










// TODO: replace `var` with `let` in the following declaration
// var developers = [];
// users.forEach(function(user) {});
// TODO: rewrite the code below to use object destructuring assignment
// note that you can also use destructuring assignment in the function parameter definition
// const name = user.name;
// const email = user.email;
// const languages = user.languages;

let developers = [];
users.forEach((user) => {
    const {email, name, languages} = user;
});







// TODO: rewrite the assignment below to use template strings
//     developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
console.log(developers);






// TODO: Use `let` for the following variable
// var list = '<ul>';
// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
// TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
// list += '</ul>';

let list = '<ul>'
for(let developer of developers) {
    list += '<li>' + developer + '</li>';
};

list += '</ul>';
document.getElementById('list').innerHTML =list;

