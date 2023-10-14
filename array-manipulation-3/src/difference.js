/* exported difference */
function difference(first, second) {
  const differenceArray = [];

  for (let i = 0; i < first.length; i++) {
    const element = first[i];
    if (!second.includes(element) && !differenceArray.includes(element)) {
      differenceArray.push(element);
    }
  }

  for (let i = 0; i < second.length; i++) {
    const element = second[i];
    if (!first.includes(element) && !differenceArray.includes(element)) {
      differenceArray.push(element);
    }
  }
  return differenceArray;
}
