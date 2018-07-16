const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];


    // PROBLEM 1 - create an array of the first letters of each fruit

    const firstLettersArr = fruits.map(a => a.charAt(0));
    // console.log(firstLettersArr);





    // PROBLEM 2 - create array of user objects based on the customers array of objects (each user object should just have name and age properties)

    const nameAndAge = customers.map (a => ({name: a.name, age: a.age}));
    // console.log(nameAndAge);





    // PROBLEM 3 - create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects

    const civilServants = customers.filter(a => a.occupation === 'Teacher' || a.occupation === 'Police Officer');
    // console.log(civilServants);





    // PROBLEM 4 - determine the average age of customers

    const avgAge = customers.reduce((a,b) => a+b.age,0)/customers.length;
    // console.log('average customer age is',avgAge);



const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];




// PROBLEM 5 - create a function makeSuperPet() that takes in the pets array as input and returns a single pet object
// with the following shape...
/*

    {
        name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
        age: THE_TOTAL_OF_ALL_PET_AGES,
        breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
    }

 */






// PROBLEM 6 - take in an array of pets and return an array of the length of first names for pugs only
// your output for the given input should be [3, 6] for 'Bud' and 'Bowser'


// PROBLEM 7 - create a function getFemaleFamilyMembers() that when given the family variable as an argument,
// returns an array of female family member names

// PROBLEM 8 - create a function makeLongPetString() that when given the variable of pets,
// returns a string of all property values with dashes separating each property value

// PROBLEM 9 - create a function that when given an array of first names, returns an array of the same names with a last name of Smith

// input = ['Sally', 'Fred', 'Steve']
// output = ['Sally Smith', 'Fred Smith', 'Steve']


// PROBLEM 10 - create a function that when given an array of numbers, return the sum of even numbers

// PROBLEM 11 - create a function that when given an array of numbers, return the sum of all numbers evenly divisible by 10

// PROBLEM 12 - create a function that when given an array of names, return a string of all the first letters of each name

// PROBLEM 13 - create a function that when given an array of values, returns an array of only the truthy values

// PROBLEM 14 - create a function that when given an object, returns the property values as an array of elements

// PROBLEM 16 - create a function that when given three arguments: a min num, a max num, an array
// of nums will return the array of nums that are only between the min and max values, inclusive

// PROBLEM 17 - create a function that when given an array of strings, returns an array of objects
// with properties for the given string value and the length of the string and the string without vowels (not including y)




































// Given the following array...
const names = ["John", "Max", "Ronald"];

// complete the bonuses below...

// - Create an array where all names are given a last name of Smith.
const smith = names.map(a => a + ' Smith');
// console.log(smith);

// - Create an array where each word is in all caps
const allCaps = names.map(a => a.toUpperCase());
// console.log(allCaps);

// - Create an array where all names have more than 3 letters
const moreThan3 = names.filter(a => a.length>3);
// console.log(moreThan3);

// - Create an array of names with only the last two letters of each name
const last2Letters = names.map(a => a.substr(a.length-2));
// console.log(last2Letters);

// - Create a total count of all letters
const totalLetters = names.reduce((a,b) => a + b.length,0);
// console.log(totalLetters);

// - Create a string of all letters in alphabetical order
const alphabetical = names.join('').toLowerCase().split('').sort().join('');
// console.log(alphabetical);

// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
const wordObj = names.map(a => ({wordLength:a.length, firstLetter:a.charAt(0), lastLetter:a.charAt(a.length-1),}));
// console.log(wordObj);

// - Create a string of all vowels in the entire array of names
const vowels = names.reduce((str, name) => str + name.match(/[aeiou]/g).join(''),'');
// console.log(vowels);









// Given the following array complete the bonuses below...

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];




// - Calculate the average age of family members

const familyAvgAge = Math.round(family.reduce((a,b) => a+b.age,0)/family.length);
// console.log(familyAvgAge);




// - Create an array of family objects without the age property

const newFamilyObj = family.reduce((a,b)=> {a.push({name: b.name,gender: b.gender});
    return a
},[]);
// console.log(newFamilyObj);



// - Create an array of all minors

const minors = family.filter( ( {age}) => age<18);
// console.log(minors);




// - Calculate the total age combined of family members

const familyTotalAge = family.reduce((a,b) => a+b.age,0);
// console.log(familyTotalAge);





// - Create an array of only female family member objects

const females = family.filter( ({gender}) => gender ==='female');
// console.log(females);





// - Create a single object with properties containing arrays of all names, genders, and ages


const output = {
    names: family.map(obj => obj.name),
    genders: family.map(obj => obj.gender),
    ages: family.map(obj => obj.age)
};

// const output = {names: family.map(obj => obj.name), genders: family.map(obj => obj.gender), ages: family.map(obj => obj.age)
// };

// console.log(output);