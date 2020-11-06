const prenoms = ['Romain', 'Eric', 'Frédéric', 'Jean', 'Paul'];

// Array
// implémentent la programmation fonctionnelle
// -> paradigme de programme (style de code)
// forEach, filter, map, reduce (ES5)
// findIndex, find (ES6)
// prenoms.forEach(function (name) {
//   console.log(`Hello ${name.toUpperCase()}`);
// });

// Paradigme impératif
const prenoms4LettresUpper1 = [];

for (const p of prenoms) {
  if (p.length === 4) {
    const prenom4Letter = p;
    prenoms4LettresUpper1.push(prenom4Letter.toUpperCase());
  }
}

console.log(prenoms4LettresUpper1.join(', '));

// Paradigme fonctionnel
const prenoms4LettresUpper2 = prenoms
  .filter((p) => p.length === 4)
  .map((p) => p.toUpperCase());

console.log(prenoms4LettresUpper2.join(', '));

// pile d'appels
// ^
// |                         up   up   up
// |=> - => - => - => - =>   => - => - =>
// |filter                 - map
// +-----------------------------------------> temps
