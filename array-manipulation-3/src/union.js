/* exported union */
function union(first, second) {
  const unionArray = [];

  for (let i = 0; i < first.length; i++) {
    const element = first[i];
    if (!unionArray.includes(element)) {
      unionArray.push(element);
    }
  }

  for (let i = 0; i < second.length; i++) {
    const element = second[i];
    if (!unionArray.includes(element)) {
      unionArray.push(element);
    }
  }
  return unionArray;
}
