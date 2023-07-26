/* exported filterOutStrings */
function filterOutStrings(values) {
  const myArray = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      myArray.push(values[i]);
    }
  }
  return myArray;
}
