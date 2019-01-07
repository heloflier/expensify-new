
//
// Object destructuring
// -------------------------------------------------

// const person = {
//     name: "Fabio",
//     age: 57,
//     location: {
//         city: "Oceanside",
//         temp: 70
//     }
// };

// const { name = "Anonymous", age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`My name is ${ name } and I am ${ age }.`);
// console.log(`It's ${ temperature } in ${ city }.`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
// -----------------------------------------------

const address = [
    '1299 South Juniper Street',
    'Philadelphia',
    'Pennsylvania',
    '19147'
];

// const [ street, city, state, zip ] = address;
const [ , city, state = 'New York'] = address;

// console.log(`You are in ${ city }, ${ state }`);
console.log(`You are in ${ city }, ${ state }`);

const item = [
    'Coffee (hot)',
    '$2.00',
    '$2.50',
    '$3.00'
];

const [ itemName, , mediumPrice = '$2.40'] = item;

console.log(`A medium ${ itemName } costs ${ mediumPrice }.`)