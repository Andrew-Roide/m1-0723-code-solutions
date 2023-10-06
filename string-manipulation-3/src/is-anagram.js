/* exported isAnagram */
function isAnagram(firstString, SecondString) {
  const resetFirstString = firstString.replace(/\s/g, '');
  const resetSecondString = SecondString.replace(/\s/g, '');

  const sortedFirstString = resetFirstString.split('').sort().join('');
  const sortedSecondString = resetSecondString.split('').sort().join('');

  return sortedFirstString === sortedSecondString;
}
