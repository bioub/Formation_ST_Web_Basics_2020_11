'use strict';

const Random = {
  // 1 - method properties (slide 141)
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

/**
 * @param {object} options
 * @param {number} options.min
 * @param {number} options.max
 */
// 2 - class (slide 147)
function Jeu(options = {}) {

  // 3 - object destructuring (slide 145) +
  //     shorthand property (slide 140) +
  //     default param (slide 136)
  // ex: ligne 62 de 08-es6+.js (ou slide 146)
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this.rl = readline.createInterface({
    input: process.stdin, // lire sur le clavier
    output: process.stdout, // écrire dans le terminal
  });

  this.entierAlea = Random.getInt(min, max);
  this.essais = [];
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    // 4 - template literal (slide 131)
    console.log('Vous avez déjà joué : ' + this.essais.join(' - ') + '!!!');
  }

  this.rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this.rl.close();
    }
  });
};

const game = new Jeu({
  max: 120
});
game.jouer();
