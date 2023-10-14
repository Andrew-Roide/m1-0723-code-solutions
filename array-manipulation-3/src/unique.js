/* exported unique */
function unique(array) {
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}
