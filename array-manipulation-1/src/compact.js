/* exported compact */

function compact(array) {
  const myArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (
      value !== false &&
      value !== null &&
      !Number.isNaN(value) &&
      value !== 0 &&
      value !== undefined &&
      value !== ''
    ) {
      myArray.push(value);
    }
  }
  return myArray;
}
