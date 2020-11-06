function randomInt(min = 0, max = 26) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomString(maxLength = 10) {
  const chars = [];

  for (let i = 0; i < randomInt(1, maxLength); i++) {
    chars[i] = String.fromCharCode(97 + randomInt());
  }

  return chars.join('');
}

// Exercice :
// remplir le tableau suivant avec 10 chaine de caractères aléatoire
// (utiliser la fonction randomString)
const randomStrings = [];

for (let i = 0; i < 10; i++) {
  randomStrings.push(randomString())
}

console.log('Chaines : ' + randomStrings.join(', '));

// Exercice :
// à partir du premier tableau, remplir les 2 suivants, le premier
// avec les chaines de caractères de tailles impair, le second
const randomStringsOdd = [];
const randomStringsEven = [];

for (const str of randomStrings) {
  if (str.length % 2 === 1) {
    randomStringsOdd.push(str);
  } else {
    randomStringsEven.push(str);
  }
}

console.log('Chaines de taille impair : ' + randomStringsOdd.join(', '));
console.log('Chaines de taille pair : ' + randomStringsEven.join(', '));
