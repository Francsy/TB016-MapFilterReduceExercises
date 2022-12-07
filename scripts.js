// 1. Ejercicios Map
// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo

const numbers = [ 4, 5, 6, 7, 8, 9, 10];

numbers.map((a) => a ** a)

// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

foodList.map((a, i)=> {
   let paises = ['Italia', 'Japón', 'Valencia']
   

    if (i <= 2){
        return 'Como soy de ' + paises[i] + ', amo comer ' + a
    } else {
        return 'Aunque no como carne, el ' + a + ' es sabroso'
    }
})



//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/

// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:


const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

  staff.map ((person) => `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`)

  // Resultado esperado
/*
  [
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/



// 2. Ejercicios Filter
// Crea un segundo array con que devuelva los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers2.filter(a => a%2 != 0)

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo

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
.filter(food => { if(food.isVeggie){ return food.name}})
.map(food => `Que rico ${food.name} me voy a comer!`)


// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros


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
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

inventory.filter(item => { if (item.price > 300) {return item.name}})


/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/


// 3. Ejercicios reduce
// Dado el siguiente array, obten la multiplicación de todos los elementos del array

const numeros = [39, 2, 4, 25, 62];

numeros.reduce(
    (acc, curr) => {
      
      return acc * curr
    },
    
  );

// Salida--> 483600

// Concatena todos los elementos del array con reduce para que devuelva una sola frase


const sentenceElements = [
  'Me',
  'llamo',
  /* Tu nombre aqui! */,
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

sentenceElements.reduce((acc,curr)=> {
    return acc + ' ' + curr
})

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'


// Obtener el monto total de los elementos que pertenecen a catergory "code"


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
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

books.filter(book => { if(book.category === 'code') {return book.price}})
.reduce((acc, value) => {return acc.price + value.price})

// Resultado --> 60