const num1 = 20;
const num2 = 30;
const num3 = 200;
const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue result:', maximumValue);

const heros = ['Green arrow', 'Batman', 'Spiderman', 'Doctor Strange'];
const randomNumber = Math.random() * heros.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heros[randomIndex];
console.log('randomHero', randomHero);

const library = [
  {
    title: 'Flowers For Algernon',
    author: 'Daniel Keyes',
  },
  {
    title: 'The Long Walk',
    author: 'Richard Bachman',
  },
  {
    title: 'Ready Player One',
    author: 'Ernest Cline',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Andrew Roide';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
