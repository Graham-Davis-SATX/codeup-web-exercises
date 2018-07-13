const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threeLanguages = users.filter (({languages}) => languages.length>2);
console.log(threeLanguages);



// Use .map to create an array of strings where each element is a user's email address

const userEmail = users.map (({email}) => email);
console.log(userEmail);



// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user
const userObj = users.reduce((a, b)=> { a[b.id] = b; return a; }, {});
console.log('userObj', userObj);