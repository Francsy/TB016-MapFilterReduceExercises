// 1. Map exercises
// 1.1 Given the following array, create another one that is the result of raising each number to itself:

const numbers = [4, 5, 6, 7, 8, 9, 10];

numbers.map((a) => a ** a);

// Result --> [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

// 1.2 Given the following array, generate a second array that achieves the expected output

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

foodList.map((food, i) => {
  let countries = ['Italy', 'Japan', 'Valencia'];
  if (i <= 2) {
    return 'As I am from ' + countries[i] + ', I love eating ' + food;
  } else {
    return 'Although I do not eat meat, ' + food + ' is tasty';
  }
});

/* Result -->
  [
    'As I am from Italy, I love eating Pizza',
    'As I am from Japan, I love eating Ramen',
    'As I am from Valencia, I love eating Paella',
    'Although I do not eat meat, Entrecot is tasty'
  ]
*/

// 1.3 Given the following array, create a second array that forms sentences as in the example accessing the properties of the provided object:

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['reading', 'watching movies']
  },
  {
    name: 'Ana',
    role: 'an intern',
    hobbies: ['swimming', 'dancing']
  },
  {
    name: 'Luis',
    role: 'a programmer',
    hobbies: ['sleeping', 'shopping']
  },
  {
    name: 'Carlos',
    role: 'a secretary',
    hobbies: ['soccer', 'cheese']
  }
];

staff.map(person => `${person.name} is ${person.role} and they like ${person.hobbies[0]} and ${person.hobbies[1]}`);

/* Result -->
  [
    'Pepe is The Boss and they like reading and watching movies',
    'Ana is an intern and they like swimming and dancing',
    'Luis is a programmer and they like sleeping and shopping',
    'Carlos is a secretary and they like soccer and cheese'
  ]
*/

// 2. Filter exercises
// 2.1 Create a second array that returns the odd numbers

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers2.filter(a => a % 2 != 0);

// Result --> [1,3,5,7,9]

// 2.2 Given the following array, generate a second array that filters the vegan dishess and outputs a sentence like the example:

const foodList2 = [
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }
];

foodList2
  .filter(food => { if (food.isVeggie) { return food.name } })
  .map(food => `How delicious ${food.name} I am going to eat!`);

/* Result --> 
  [
    'How delicious Tempeh I am going to eat!',
    'How delicious Tofu burguer I am going to eat!'
  ]
*/

// 2.3 Given the following array, return an array with the names of the elements that are worth more than 300 euros:

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Trip to Cancun',
    price: 600
  },
  {
    name: 'Mask',
    price: 1
  }
];

inventory
  .filter(item => item.price > 300)
  .map(item => item.name);

/* Result -->
  [
    'TV Samsung,',
    'Trip to Cancun'
  ]
*/

// 3. Reduce exercises
// 3.1 Given the following array, obtain the multiplication of all the elements of the array:

const numbers3 = [39, 2, 4, 25, 62];
console.log(
  numbers3.reduce(
    (acc, curr) => {
      return acc * curr
    }));

// Result --> 483600

// 3.2 Concatenate all the elements of the array with reduce to return a single sentence:

const sentenceElements = [
  'My',
  'name',
  'is',
  'Fran',
  'and',
  'I',
  'want',
  'to',
  'feel',
  'the',
  'force',
  'with',
  'JavaScript'
];

sentenceElements.reduce((acc, curr) => {
  return acc + ' ' + curr
});

// Result --> 'My name is XX and I want to feel the force with JavaScript'

// 3.3 Get the total amount of elements that belong to the "code" category:

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Game of Thrones',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'Javascript: the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

books.filter(book => {
  if (book.category === 'code') {
    return book.price
  }
}).reduce((acc, value) => acc + value.price, 0);

// Result --> 60