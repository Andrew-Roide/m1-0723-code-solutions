/* exported tail */
function tail(array) {
  const myArray = [];
  for (let i = 1; i < array.length; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}
