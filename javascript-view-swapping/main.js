const tabContainer = document.querySelector('.tab-container');
const tabClass = document.querySelectorAll('.tab');
const viewClass = document.querySelectorAll('.view');

tabContainer.addEventListener('click', (event) => {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < tabClass.length; i++) {
      if (tabClass[i] === event.target) {
        tabClass[i].className = 'tab active';
      } else {
        tabClass[i].className = 'tab';
      }
    }
  }

  if (event.target.matches('.tab')) {
    const infoClass = event.target.getAttribute('data-view');
    for (let j = 0; j < viewClass.length; j++) {
      if (viewClass[j].getAttribute('data-view') === infoClass) {
        viewClass[j].className = 'view';
      } else {
        viewClass[j].className = 'view hidden';
      }
    }
  }
});
