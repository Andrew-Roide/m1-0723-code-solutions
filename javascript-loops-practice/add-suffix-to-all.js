/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const myArray = [];
  for (let i = 0; i < words.length; i++) {
    const suffixAdded = `${words[i]}${suffix}`;
    myArray.push(suffixAdded);
  }
  return myArray;
}
