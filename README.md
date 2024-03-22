# TB016-MapFilterReduceExercises


### MAP, FILTER AND REDUCE Exercises

## 1. Map Exercises

- Given the following array, create another one that is the result of raising each number to itself.
```javascript
const numbers = [4, 5, 6, 7, 8, 9, 10];

// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
```

- Given the following array, generate a second array that achieves the expected output.

```javascript
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

// Expected output
/* [
    'As I am from Italy, I love eating Pizza',
    'As I am from Japan, I love eating Ramen',
    'As I am from Valencia, I love eating Paella',
    'Although I do not eat meat, Entrecot is tasty'
   ]
*/
```

- Given the following array, create a second array that forms sentences as in the example accessing the properties of the provided object:
```javascript
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['reading', 'watching movies']
  },
  {
    name: 'Ana',
    role: 'intern',
    hobbies: ['swimming', 'dancing']
  },
  {
    name: 'Luis',
    role: 'programmer',
    hobbies: ['sleeping', 'shopping']
  },
  {
    name: 'Carlos',
    role: 'secretary',
    hobbies: ['soccer', 'cheese']
  }
];

// Expected output
/*
  [
    'Pepe is The Boss and he likes reading and watching movies',
    'Ana is an intern and she likes swimming and dancing',
    'Luis is a programmer and he likes sleeping and shopping',
    'Carlos is a secretary and he likes soccer and cheese'
  ]
*/
```

## 2. Filter Exercises

- Create a second array that returns the odd numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

- Given the following array, generate a second array that filters the vegan dishess and outputs a sentence like the example

```javascript

const foodList = [
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


/* [
    'How delicious Tempeh I am going to eat!',
    'How delicious Tofu burguer I am going to eat!'
   ]
*/
```

- Given the following array, return an array with the names of the elements that are worth more than 300 euros

```js

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'Samsung TV',
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

/*
  [
    'Samsung TV,',
    'Trip to Cancun'
  ]
*/
```

## 3. Reduce exercises

- Given the following array, obtain the multiplication of all the elements of the array

```javascript
const numbers = [39, 2, 4, 25, 62];

// Output--> 483600
```

- Concatenate all the elements of the array with reduce to return a single sentence

```js
const sentenceElements = [
  'My',
  'name',
  'is',
  /* Your name here */
  'and',
  'I',
  'want',
  'to',
  'feel',
  'the',
  'force',
  'with',
  'javascript'
];


// Result--> 'I call XX and I want to feel the force with javascript'
```

- Get the total amount of elements that belong to the "code" category

```javascript
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
// Result --> 60
```