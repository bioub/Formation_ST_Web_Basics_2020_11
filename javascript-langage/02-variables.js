'use strict'; // active le mode strict

function main() {
  // en mode strict plus possible de ne pas mettre var, let ou const
  // globalVariable = 'globalVariable';
  globalThis.globalVariable = 'globalVariable';

  // portée de fonction
  var varVariable = 'varVariable';

  if (true) {
    // portée de fonction
    var varVariable2 = 'varVariable2';

    // portée de bloc
    let letVariable = 'letVariable';
    const constVariable = 'constVariable';
    console.log(typeof letVariable); // string
    console.log(typeof constVariable); // string
  }

  console.log(typeof varVariable2); // string
  console.log(typeof letVariable); // undefined
  console.log(typeof constVariable); // undefined
}

main();
console.log(typeof varVariable); // undefined
console.log(typeof letVariable); // undefined
console.log(typeof constVariable); // undefined


let letArray = [1, 2, 3];
const constArray = [1, 2, 3];

letArray.push(4); // OK
constArray.push(4); // OK


letArray = []; // OK
// constArray = []; // ERREUR
