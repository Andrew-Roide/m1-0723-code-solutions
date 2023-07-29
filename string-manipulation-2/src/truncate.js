/* exported truncate */
/*
  define a function called truncate that passes in two parameters : length and string
    extract a portion of the `string` with the parameters starting at the beginning, 0, and ending at the `length` parater. Return the result with an ellipsis at the end.
*/

function truncate(length, string) {
  return `${string.slice(0, length)}...`;
}
