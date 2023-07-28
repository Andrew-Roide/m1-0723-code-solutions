/* exported isVowel */

function isVowel(char) {
  const charLowerCase = char.toLowerCase();

  if (
    charLowerCase === 'a' ||
    charLowerCase === 'e' ||
    charLowerCase === 'i' ||
    charLowerCase === 'o' ||
    charLowerCase === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}
