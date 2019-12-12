
//                       //
//  Object Destructuring //
//                       //


// const person = {
//     age: 19,
//     location: {
//         city: 'Blainville',
//         temp: -10
//     }
// };

// const {name = 'Anonymous',age,location} = person;
// console.log(`${name} is ${age}, lives in ${location}`);

// const {city,temp:temperature} = location;
// if(city && temperature)
//     console.log(`It is currently ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self Published'} = book.publisher;
// console.log(publisherName);



//                       //
//  Array Destructuring  //
//                       //

// const address = [
//     '14 rue de Lisieux',
//     'Blainville',
//     'Québec',
//     'Canada',
//     'J7C4Z3'
// ];
// const [streetAddress, city, province, country, zipcode] = address;
// console.log(`You are in ${city} ${province}.`);

const item = [
    'Coffee (cold)',
    '$2.00',
    '$5.50',
    '$2.75'
];
const [itemName,,medium] = item;
console.log(`A medium ${itemName} costs ${medium}`)