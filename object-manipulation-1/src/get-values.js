/* exported getValues */
function getValues(object) {
  const objs = [];
  for (const key in object) {
    objs.push(object[key]);
  }
  return objs;
}
