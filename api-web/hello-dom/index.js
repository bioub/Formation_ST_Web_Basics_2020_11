// document permet d'intéragir avec le DOM
// document

// document.getElementById('box')
// document.getElementsByClassName('field')[0];
// document.getElementsByTagName('span')[0];

/** @type {HTMLInputElement} */
const fieldEl = document.querySelector('.field');

/** @type {HTMLSpanElement} */
const outputEl = document.querySelector('.output');

fieldEl.addEventListener('input', () => {
  const value = fieldEl.value;
  outputEl.innerText = value;
});
