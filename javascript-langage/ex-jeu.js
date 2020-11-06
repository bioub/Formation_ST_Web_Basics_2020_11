function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// importe l'API readline de Node.js
// doc: https://nodejs.org/dist/latest-v14.x/docs/api/readline.html
const readline = require('readline');

// équivalent à un rl.open
const rl = readline.createInterface({
  input: process.stdin, // lire sur le clavier
  output: process.stdout, // écrire dans le terminal
});

const entierAlea = getRandomInt(0, 100);
const essais = [];

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

jouer();

// pile d'appels
// ^
// |                      question        question
// |question              jouer           jouer
// |jouer                 =>              =>
// +-------------------------------------------------------> temps
//
