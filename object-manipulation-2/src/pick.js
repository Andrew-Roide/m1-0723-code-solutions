/* exported pick */
function pick(source, keys) {
  const result = {};

  for (const key of keys) {
    if (source[key] !== undefined) {
      result[key] = source[key];
    }
  }

  return result;
}
