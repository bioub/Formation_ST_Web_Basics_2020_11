function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}


console.log('sum(1, 2, 3, 4)', sum(1, 2, 3, 4)); // 3

// REST Params (... au moment de la déclaration de la variable)
// conversion d'une liste de valeur (3, 4)
// en un tableau ([3, 4])

// SPREAD Operator (... au moment de la lecture de la variable)
// conversion d'un tableau ([3, 4])
// en une liste de valeur (3, 4)

function multiply(a, b) {
  return a + b;
}

const nbs = [3, 4];
console.log(multiply(...nbs));

const cloneArray = [...nbs]; // [3, 4]
const ajouterEnClonant = [1, 2, ...nbs, 5];


//    [3    , 4     ]
const [trois, quatre] = nbs;
console.log(trois); // 3
console.log(quatre); // 4

// const tmp = 'Romain Bohdanowicz'.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];

//    ['Romain', 'Bohdanowicz']
const [prenom  , nom          ] = 'Romain Bohdanowicz'.split(' ');

//    [3    , 4     ]
// const [trois, quatre, cinq = 5] = nbs;

const numbers = [1, 2, 3, 4, 5, 6];
//    [1 , 2, 3, 4, 5, 6  ];
const [un, ...otherNumbers] = numbers;
console.log(otherNumbers); // [2, 3, 4, 5, 6]

const coords = {x: 1, y: 2};

//    {x: 1  , y: 2  }
const {x: myX, y: myY} = coords;
console.log(myX); // 1
console.log(myY); // 2

const {x, y, z = 0} = coords;
console.log(x, y, z); // 1, 2, 0
