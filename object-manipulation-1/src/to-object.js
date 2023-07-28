/* exported toObject */
function toObject(keyValuePair) {
  const keyName = keyValuePair[0];
  const anyValue = keyValuePair[1];
  const myObj = {};
  myObj[keyName] = anyValue;
  return myObj;
}
