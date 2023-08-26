const container = document.querySelector('.container-light');
const button = document.querySelector('.button-light');

button.addEventListener('click', viewMode);

function viewMode(event) {
  if (
    container.className === 'container-light' &&
    button.className === 'button-light'
  ) {
    container.className = 'container-dark';
    button.className = 'button-dark';
  } else if (
    container.className === 'container-dark' &&
    button.className === 'button-dark'
  ) {
    container.className = 'container-light';
    button.className = 'button-light';
  }
}
