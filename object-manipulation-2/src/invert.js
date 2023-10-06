/* exported invert */
function invert(source, keys) {
  const result = {};

  for (const key in source) {
    if (key in source !== undefined) {
      const value = source[key];
      result[value] = key;
    }
  }

  return result;
}
