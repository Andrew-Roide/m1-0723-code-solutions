/* exported ransomCase */
function ransomCase(string) {
  let ransomString = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomString += string.charAt(i).toLowerCase();
    } else {
      ransomString += string.charAt(i).toUpperCase();
    }
  }
  return ransomString;
}
