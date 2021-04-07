/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function getObjFromString (str) {
    const obj = {};
    [...str].forEach((letter) => {
      if (obj[letter]) obj[letter] = +obj[letter] + 1;
      else obj[letter] = 1;
    });
    return obj;
  }
  const obj1 = getObjFromString(s1);
  const obj2 = getObjFromString(s2);
  let counter = 0;

  Object.keys(obj1).forEach((key) => {
    if (obj2[key]) counter += Math.min(obj1[key], obj2[key]);
  });
  return counter;
}

module.exports = getCommonCharacterCount;
