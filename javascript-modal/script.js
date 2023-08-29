const modalContainer = document.querySelector('.modal-container');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', modalDisplay);
});

function modalDisplay(event) {
  if (modalContainer.className === 'modal-container') {
    modalContainer.className = 'modal';
  } else if (modalContainer.className === 'modal') {
    modalContainer.className = 'modal-container';
  }
}
