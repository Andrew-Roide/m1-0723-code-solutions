const taskList = document.querySelector('.task-list');

taskList.addEventListener('click', (event) => {
  console.log('event.target:', event.target);
  console.log(`event.target.tagName: ${event.target.tagName}`);

  if (event.target && event.target.tagName === 'BUTTON') {
    const closest = event.target.closest('.task-list-item');
    console.log('closest.task-list-item', closest);

    closest.remove();
  }
});
