/* exported countdown */

function countdown(number) {
  const myArray = [];
  for (let i = number; i >= 0; i--) {
    myArray.push(i);
  }
  return myArray;
}
