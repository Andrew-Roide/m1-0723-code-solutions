const width = 10;
const height = 10;
const area = width * height;

console.log('value of area:', area);
console.log('typeof area:', typeof area);

const bill = 20;
const payment = 30;
const change = payment - bill;

console.log('value of change:', change);
console.log('typeof change:', typeof change);

const quizzes = 90;
const midterm = 96;
const final = 80;
const grade = (quizzes + midterm + final) / 3;

console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName = 'Andrew';
const lastName = 'Roide';
const fullName = `${firstName} ${lastName}`;

console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH = 10;
const isAcidic = pH < 7;

console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic', typeof isAcidic);

const headCount = 300;
const isSparta = headCount === 300;

console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto = fullName;
motto += ' is the goat';
console.log('value of nickname:', motto);
console.log('typeof motto:', typeof motto);
