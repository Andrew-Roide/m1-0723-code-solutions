/* exported reverseWords */
function reverseWords(string) {
  const words = string.split(' ');

  const reverseWords = words.map((word) => {
    return word.split('').reverse().join('');
  });

  const result = reverseWords.join(' ');
  return result;
}
