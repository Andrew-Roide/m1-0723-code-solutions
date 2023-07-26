/* exported oddOrEven */
function oddOrEven(numbers) {
  const myArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      myArray.push('even');
    } else {
      myArray.push('odd');
    }
  }
  return myArray;
}
