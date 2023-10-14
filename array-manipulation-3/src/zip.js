/* exported zip */
function zip(first, second) {
  const zippedArray = [];
  const minLength = Math.min(first.length, second.length);

  for (let i = 0; i < minLength; i++) {
    zippedArray.push([first[i], second[i]]);
  }
  return zippedArray;
}
