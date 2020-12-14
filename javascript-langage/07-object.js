console.log('Math.sum', Math.sum); // undefined

// ajouter une clé/valeur : étendre un objet
// les objets en JS sont extensibles
Math.sum = (a, b) => a + b;
console.log('Math.sum', Math.sum); // function
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// modifier
Math.sum = (a, b) => Number(a) + Number(b);

// supprimer
delete Math.sum;
console.log('Math.sum', Math.sum); // undefined

// ATTENTION MAUVAISE PRATIQUE d'étendre des objets
// comme Math (norme du language, du navigateur, de node.js)
// -> ne pas étendre des objets qu'on a pas créé
// [[1], [2]].flatten(); // [1, 2]
// [[1], [2]].flat(); // [1, 2]

// On peut empécher l'extension d'un objet
// ES5
// Object.preventExtensions(Math);
// Object.freeze(monTableau);
// Math.sum = (a, b) => Number(a) + Number(b); // aucun effet
// console.log('Math.sum', Math.sum); // undefined

// historiquement on pouvait delete sur Math, mais plus possible aujourd'hui

// ES5, étendre et choisir si le delete est possible
// Object.defineProperty(Math, 'sum', {
//   value: (a, b) => Number(a) + Number(b),
//   // writable: false, // false -> valeur par défaut
//   // enumerable: false, // false -> valeur par défaut
//   // configurable: false, // false -> valeur par défaut
// });

// delete Math.sum; // impossible configurable: false
// console.log('Math.sum', Math.sum); // undefined

function pileOuFace() {
  return Math.random() < 0.5 ? 'pile' : 'face';
}

// pour des tests automatisées, nécéssité de réécrire random temporairement (le temps du test)
const backupRandom = Math.random;
Math.random = () => 0.75;
console.log(pileOuFace()); // face
Math.random = backupRandom; // supprime votre version de random
console.log(pileOuFace()); // aléatoire

// Créer un objet
// directement avec object literal
// use case :
// 1 - objet créé une seule fois (mono-instance)
const MyMath = {
  // sum: (a, b) => a + b,
  // plutot écrit comme ça en ES6
  sum(a, b) {
    return a + b;
  },
};

// 2 - (multi-instance) objet très simple à créer
// ET sans méthode
const coordsA = {
  x: 1,
  y: 2,
};

const coordsB = {
  x: 3,
  y: 4,
};

// MAUVAISE PRATIQUE DE METTRE DES METHODES
const coords1 = {
  x: 1,
  y: 2,
  getType: () => 'coords',
};

const coords2 = {
  x: 3,
  y: 4,
  getType: () => 'coords',
};

// getType est partagée ou dupliquée ?
console.log(coords1.getType === coords2.getType); // false

// 3 - une fonction qui prend un grand nombre de paramètres optionnel
// (même use case que le 1, créé une seule fois pour passer les params)

function setCss(
  element,
  width = '100%',
  height = 'auto',
  backgroundColor = 'transparent',
  padding = '0',
  margin = '0',
) {
  element.style.width = width;
  element.style.height = height;
  element.style.backgroundColor = backgroundColor;
  element.style.padding = padding;
  element.style.margin = margin;
}

setCss(document.querySelector('#box'), '100px'); // width
setCss(document.querySelector('#box'), '100px', '50px'); // width, height
setCss(
  document.querySelector('#box'),
  undefined,
  undefined,
  undefined,
  undefined,
  '10px 20px',
); // margin


// idem cas numéro 1 - objet créé une seule fois (mono-instance, le temps de passer les paramètres)
function setCss(element, properties) {
  // le nom du params est souvent options dans ce cas
}

setCss(document.querySelector('#box'), {
  width: '100px',
}); // width
setCss(document.querySelector('#box'), {
  width: '100px',
  height: '50px',
}); // width, height
setCss(document.querySelector('#box'), {
  margin: '10px 20px',
}); // margin

// Créer un objet
// avec une fonction fabrique (factory) : function qui retourne un objet literal
// use case : 1 objet multi-instance compliqué à créer et sans méthode
function getCoords3d(x = 0, y = 0, z = 0) {
  return {
    x: x,
    y: y,
    z: z,
  };
}

const coords3d = getCoords3d(); // {x: 0, y: 0, z: 0}

// avec une fonction constructeur
// convention : la fonction commence par une majuscule
// use case : un objet multi-instance avec des méthodes
function Contact(prenom) {
  // this : référence vers l'objet créé
  // -> pseudo variable : créée au moment de l'appel
  // pour créer des propriétés, on étend this

  // if (prenom.length > 2) {
  this.prenom = prenom; // dynamique
  // }

  // mauvaise pratique (duplique les fonction :
  // autant de fonction hello que d'objet de type Contact)
  // this.hello = function() {
  //   return 'Hello ' + this.prenom;
  // };
}

// pas de duplication
Contact.prototype.hello = function () {
  return 'Hello ' + this.prenom;
};

// Dans une classe les méthodes serait définies comme ça
// Object.defineProperty(Contact.prototype, 'hello', {
//   value: function () {
//       return 'Hello ' + this.prenom;
//     },
//   enumerable: false
// });

const romain = new Contact('Romain');

console.log('typeof Contact', typeof Contact); // function
console.log('typeof romain', typeof romain); // object

// sauf exception privilégier les syntaxes literales
// OK : const array = [];
// KO : const array = new Array();

// exception, créer un tableau avec 10 valeurs initiales (undefined)
// const array = new Array(10);

console.log('romain.prenom', romain.prenom); // Romain
// delete romain.prenom;
// console.log('romain.prenom', romain.prenom); // undefined

console.log('romain.hello()', romain.hello()); // Hello Romain

console.log('romain.prenom !== undefined', romain.prenom !== undefined); // true
console.log('romain.hello !== undefined', romain.hello !== undefined); // true

// Object.prototype.hasOwnProperty
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty
console.log("romain.hasOwnProperty('prenom')", romain.hasOwnProperty('prenom')); // true
console.log("romain.hasOwnProperty('hello')", romain.hasOwnProperty('hello')); // false

const jean = new Contact('Jean');
console.log(romain.hello === jean.hello); // true (partagée via le prototype)

// Historiquement pour bloquer sur objet
for (const key in coordsA) { // for in pour boucler sur les clés d'un objet
  // if (coordsA.hasOwnProperty(key)) { // limiter la boucler aux propriétés (les méthodes étant définies sur le prototype)
  // plus nécessaire avec les classes

  // }
}

// Pour boucler sur un objet
// (voir aussi for .. in mais qui est moins performant)
for (const key of Object.keys(coordsA)) { // for in pour boucler sur les valeurs d'un iterable (ex: tableau)
  console.log(key);
  const value = coordsA[key];
}

// Pour boucler à partir de ES2017
for (const [key, value] of Object.entries(coordsA)) {
  console.log(key, value);
}

// 2 opérateurs pour accéder aux clés/valeurs
console.log(coordsA.x); // accès statique
console['log'](coordsA['x']); // accès dynamique

// [] est plus dynamique
const method = 'log';
const key = 'x';
console[method](coordsA[key]);

const config = {
  DB_HOST: 'localhost',
};

// const empeche de réaffecter à la variable
// mais pas de modifier l'objet
// (c'est la référence qui est constante)
config.DB_USER = 'root';

// Pour transformer notre objet en constante on peut
// Object.freeze (pas de retour en arrière)
Object.freeze(config);

// erreur :
// constants.DB_HOST = '123.23.45.6';
// constants.DB_PASSWORD = 'gdfhusdgjfbys456453dfjghd';

const partialConstants = {};

// ajoute une clé writable: false, configurable: false, enumerable: true
Object.defineProperty(partialConstants, 'DB_HOST', {
  value: 'localhost',
  writable: false, // ne peut pas etre modifiée
  configurable: false, // ne peut pas etre supprimée
  enumerable: true,
});

// ajoute une clé writable: true, configurable: true, enumerable: true
partialConstants.DB_PASSWORD = 'RVDGRTGESGHDTYRFGD';

// const coords2d = {
//   x: 0,
//   y: 0,
// };

// function inherit(base, child) {
//   for (const key in base) {
//     child[key] = base[key];
//   }
// }

// const coords3d = {
//   z: 0,
// };

// inherit(coords2d, coords3d);
// inherit(coords2d, {a: 1, b: 2});
