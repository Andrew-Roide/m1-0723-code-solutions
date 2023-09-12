/* exported todos */

let todos = [];
const previousTodosJSON = localStorage.getItem('javscript-local-storage');

window.addEventListener('beforeunload', (event) => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javscript-local-storage', todosJSON);
});

if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
