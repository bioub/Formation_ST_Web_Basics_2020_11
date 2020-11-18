/** @type {HTMLFormElement} */
const todoFormEl = document.querySelector('.todo-form');
/** @type {HTMLInputElement} */
const todoNewInputEl = document.querySelector('.todo-new-input');
/** @type {HTMLDivElement} */
const todoContainerEl = document.querySelector('.todo-container');
/** @type {HTMLInputElement} */
const todoToggleEl = document.querySelector('.todo-toggle-all');

/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @param {HTMLElement} parentEl
 */
function addTodo(todo, parentEl) {
  const rowEl = document.createElement('div');
  rowEl.className = 'todo-row';

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-completed';
  checkboxEl.checked = todo.completed;
  rowEl.appendChild(checkboxEl);

  const spanEl = document.createElement('span');
  spanEl.className = 'todo-title';
  spanEl.innerText = todo.title;
  rowEl.appendChild(spanEl);

  // A DEPLACER
  spanEl.addEventListener('dblclick', () => {
    const inputEl = document.createElement('input');
    inputEl.value = spanEl.innerText;
    rowEl.replaceChild(inputEl, spanEl);

    // A DEPLACER
    inputEl.addEventListener('blur', () => {
      spanEl.innerText = inputEl.value;
      rowEl.replaceChild(spanEl, inputEl);
    });
  });

  const btnRmEl = document.createElement('button');
  btnRmEl.className = 'todo-btn-remove';
  btnRmEl.innerText = '-';
  rowEl.appendChild(btnRmEl);

  // A DEPLACER
  btnRmEl.addEventListener('click', () => {
    rowEl.parentElement.removeChild(rowEl);
  });

  if (parentEl.childElementCount) {
    parentEl.insertBefore(rowEl, parentEl.firstElementChild);
  } else {
    parentEl.appendChild(rowEl);
  }
}

todoFormEl.addEventListener('submit', (event) => {
  // empèche le navigateur de réalisation son action par défaut
  event.preventDefault();

  addTodo(
    {
      id: Math.floor(Math.random() * 1000),
      title: todoNewInputEl.value,
      completed: false,
    },
    todoContainerEl,
  );
});

// IMPOSSIBLE D'ECOUTER LE CLICK DU BOUTON MOINS
// -> il n'existe pas encore ici (au chargement de la page)
// POSSIBLE avec event.target (phase de target)

// Exercice
// Récupérer les 3 addEventListener taggués A DEPLACER
// Pour qu'il ne soient plus imbriqués
// Utiliser pour cela la phase de target
// addEventListener à faire sur un élément qui existe au chargement
// (ex: document ou todoContainerEl)
// ensuite utiliser event.target pour savoir qui a déclenché
// l'événement


todoToggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = todoContainerEl.querySelectorAll('.todo-completed');

  // convertir un iterable (nodelist, htmlcollection, arguments, string...) en tableau
  // const array = Array.from(checkboxEls) // ES6

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = todoToggleEl.checked;
  }
});
