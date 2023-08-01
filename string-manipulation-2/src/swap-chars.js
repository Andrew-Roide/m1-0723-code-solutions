/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const chars = string.split('');

  const charfirstIndex = chars[firstIndex];
  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = charfirstIndex;

  return chars.join('');
}
