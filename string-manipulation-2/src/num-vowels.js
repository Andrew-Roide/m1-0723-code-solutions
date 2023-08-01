/* exported numVowels */
function numVowels(string) {
  const charLowerCase = string.toLowerCase();
  let vowelCount = 0;

  for (let i = 0; i < charLowerCase.length; i++) {
    if (
      charLowerCase[i] === 'a' ||
      charLowerCase[i] === 'e' ||
      charLowerCase[i] === 'i' ||
      charLowerCase[i] === 'o' ||
      charLowerCase[i] === 'u'
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
}
