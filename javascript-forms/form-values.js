const formType = document.getElementById('contact-form');

formType.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const messageData = {};

  for (let i = 0; i < formType.elements.length; i++) {
    if (
      formType[i].nodeName === 'INPUT' ||
      formType[i].nodeName === 'TEXTAREA'
    ) {
      messageData[formType[i].id] = formType[i].value;
    }
  }

  console.log(messageData);
  formType.reset();
}
