/* exported drop */
function drop(array, count) {
  const myArray = [];
  for (let i = count; i < array.length; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}
