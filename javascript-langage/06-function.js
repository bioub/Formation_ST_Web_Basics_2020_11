// Syntaxes conseillés

// Pour une fonction classique
function hello(name) {
  return 'Hello ' + name;
}

// Dans un object literal
const Random = {
  get() {
    return Math.random();
  }
};

// Dans une classe
class Contact {
  constructor() {
    // ajoute à l'objet
    // this.hello
  }
  // ajoute au prototype
  hello() {
    return 'Hello';
  }
}

// Sous forme de callback
['Jean', 'Paul']
  .map((el) => { return el.toUpperCase() })
  .forEach((el) => console.log(el));


// Pour les fonction fléchés
// 0 paramètre, les parenthèses sont obligatoire
// () =>
// 1 paramètre, les parenthèses sont options
// name =>
// (name) =>
// 2 paramètres ou plus, les parenthèses sont obligatoire
// (a, b) =>

// Ce qui suit la flèche => est la valeur de retour
// sauf si on met des accolades {}
// Ex : retourne Hello + name
// const hello = (name) => 'Hello ' + name;
// Ex :
// [].map((el) => { return el.toUpperCase() })
// equivalent à :
// [].map((el) => el.toUpperCase())

// Si vous souhaitez retourner un objet il faudra ajouter des parenthèses
// ['Jean', 'Eric'].map((el) => ({name: el}))
// ici le retour sera
// [{name: 'Jean'}, {name: 'Eric'}]
