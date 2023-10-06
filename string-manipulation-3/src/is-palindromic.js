/* exported isPalindromic */
function isPalindromic(string) {
  const resetString = string.replace(/\s/g, '');
  let newWord = '';
  for (let i = resetString.length - 1; i >= 0; i--) {
    newWord += resetString[i];
  }

  return newWord === resetString;
}
