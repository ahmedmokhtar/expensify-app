/* Object destructuring */

// const person = {
//   name: 'Ahmed',
//   age: 43,
//   location: {
//     city: 'Cairo',
//     temp: 19
//   }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age} years old.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`In ${city} temperature is ${temperature}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

/* Array destructuring */

const address = ['15 road 9', 'Mokattam', 'Cairo', '74312'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$2.25', '$2.75'];

const [name, , mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}.`);
