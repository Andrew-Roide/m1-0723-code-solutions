/* exported capitalizeWords */
function capitalizeWords(string) {
  const wordSplit = string.toLowerCase().split(' ');
  for (let i = 0; i < wordSplit.length; i++) {
    wordSplit[i] = wordSplit[i][0].toUpperCase() + wordSplit[i].slice(1);
  }
  return wordSplit.join(' ');
}
