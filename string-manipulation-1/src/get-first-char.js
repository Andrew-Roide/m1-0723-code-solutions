/* exported getFirstChar */

/*
  define a function named getFirstChar and pass in one argument, a string
   isolate the first letter of the string parameter using slice and set it to a variable firstLetter,.
   return the value of firstLetter;
*/

function getFirstChar(string) {
  const firstLetter = string.slice(0, 1);
  return firstLetter;
}
