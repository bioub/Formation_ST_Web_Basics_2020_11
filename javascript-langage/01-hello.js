const prenoms = ['Romain', 'Eric', 'Frédéric'];

function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

for (const p of prenoms) {
  console.log(hello(p));
}

