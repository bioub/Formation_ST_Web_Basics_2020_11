const prenoms = ['Romain', 'Eric', 'Frédéric'];

/**
 * La fonction hello
 * @param {string} name Un nom
 * @returns {string} Un message
 */
function hello(name) {
  return 'Hello ' + (name.toUpperCase()) + ' !';
  return `Hello ${name.toUpperCase()} !`;
}

for (const p of prenoms) {
  console.log(hello(p));
}
