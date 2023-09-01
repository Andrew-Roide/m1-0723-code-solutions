const textType = document.querySelector('input[id="user-name"]');
const emailType = document.querySelector('input[id="user-email"]');
const textAreaType = document.querySelector('textarea[id="user-message"]');

textType.addEventListener('focus', handleFocus);
emailType.addEventListener('focus', handleFocus);
textAreaType.addEventListener('focus', handleFocus);

textType.addEventListener('blur', handleBlur);
emailType.addEventListener('blur', handleBlur);
textAreaType.addEventListener('blur', handleBlur);

textType.addEventListener('input', handleInput);
emailType.addEventListener('input', handleInput);
textAreaType.addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('Value of', event.target.name, ':', event.target.value);
}
