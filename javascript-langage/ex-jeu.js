// importe l'API readline de Node.js
// doc: https://nodejs.org/dist/latest-v14.x/docs/api/readline.html
const readline = require('readline');

// équivalent à un rl.open
const rl = readline.createInterface({
  input: process.stdin, // lire sur le clavier
  output: process.stdout, // écrire dans le terminal
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    // rejouer
    jouer();

    // si le nombre a été trouvé :
    // console.log('Gagné');
    // rl.close();
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
