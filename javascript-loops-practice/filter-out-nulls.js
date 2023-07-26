/* exported filterOutNulls */
function filterOutNulls(values) {
  const myArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      myArray.push(values[i]);
    }
  }
  return myArray;
}
