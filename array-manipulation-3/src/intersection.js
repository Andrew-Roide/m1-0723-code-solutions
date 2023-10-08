/* exported intersection */
function intersection(first, second) {
  const intersectionArray = [];

  for (let i = 0; i < first.length; i++) {
    const element = first[i];
    if (second.includes(element) && !intersectionArray.includes(element)) {
      intersectionArray.push(element);
    }
  }
  return intersectionArray;
}
