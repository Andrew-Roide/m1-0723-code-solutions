function convertMinutesToSeconds(minute) {
  return minute * 60;
}

const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('Minutes to Seconds:', convertMinutesToSecondsResult);

function greet(name) {
  return `${name} there!`;
}

const greetResult = greet('Hello');
console.log(greetResult, 'General Kenobi, you are a bold one!');

function getArea(width, height) {
  return width * height;
}

const getAreaResults = getArea(17, 42);
console.log('Get Area Results:', getAreaResults);

function getFirstName(person) {
  return person.firstName;
}

const getFirstNameResult = getFirstName({
  firstName: 'Obi-Wan',
  lastname: 'Kenobi',
});
console.log('Get first name result:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

const getLastElementResult = getLastElement([
  'Obi-Wan',
  'Kenobi',
  'General',
  'Grievous',
]);

console.log('Get last element result:', getLastElementResult);
