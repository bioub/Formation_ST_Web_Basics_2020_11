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

  const btnRmEl = document.createElement('button');
  btnRmEl.className = 'todo-btn-remove';
  btnRmEl.innerText = '-';
  rowEl.appendChild(btnRmEl);

  if (parentEl.childElementCount) {
    parentEl.insertBefore(rowEl, parentEl.firstElementChild);
  } else {
    parentEl.appendChild(rowEl);
  }
}

// Ajouter une todo
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

  // réinitialiser le champs
  todoNewInputEl.value = '';
});

// Supprimer une todo
todoContainerEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-btn-remove')) {
    const rowEl = target.parentElement;
    todoContainerEl.removeChild(rowEl);
  }
});

// Remplacer le texte par un champs au double-clic
todoContainerEl.addEventListener('dblclick', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-title')) {
    const inputEl = document.createElement('input');
    inputEl.className = 'todo-title-edit';
    inputEl.value = target.innerText;

    const rowEl = target.parentElement;
    rowEl.replaceChild(inputEl, target);

    inputEl.focus();
  }
});

// Remplacer le champs par le texte à la perte de focus (focusout)
// The blur event fires when an element has lost focus.
// The main difference between this event and focusout is that focusout bubbles
// while blur does not.
todoContainerEl.addEventListener('focusout', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-title-edit')) {
    const spanEl = document.createElement('span');
    spanEl.className = 'todo-title';
    spanEl.innerText = target.value;

    const rowEl = target.parentElement;
    rowEl.replaceChild(spanEl, target);
  }
});

// Cocher/Décocher au clic de la checkbox globale
todoToggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = todoContainerEl.querySelectorAll('.todo-completed');

  // convertir un iterable (nodelist, htmlcollection, arguments, string...) en tableau
  // const array = Array.from(checkboxEls) // ES6

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = todoToggleEl.checked;
  }
});



// Récupère les todos du service
fetch('https://jsonplaceholder.typicode.com/todos') // PAS IE
  .then((res) => res.json())
  .then((todos) => {
    // transformer la réponse
    todos = todos.slice(0, 10); // garde les 10 premières max
    todos = todos.map((t) => ({
      id: t.id,
      title: t.title.toUpperCase(),
      completed: t.completed,
    }));

    for (const todo of todos) {
      addTodo(todo, todoContainerEl);
    }
  });

// Stocker la saisie dans le localStorage
todoNewInputEl.addEventListener('input', () => {
  localStorage.setItem('newTodo', todoNewInputEl.value);
});

// au chargement si le localStorage contient une valeur
// on l'affiche dans le champs
const newTodo = localStorage.getItem('newTodo');

if (newTodo) {
  todoNewInputEl.value = newTodo;
}
