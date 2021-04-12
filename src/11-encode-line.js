/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  if (str === '') return res;
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (i === 0) counter++;

    else if (i === str.length - 1) {
      if (str[i] === str[i - 1]) {
        counter++;
        res += `${counter}${str[i]}`;
      } else {
        res += `${counter}${str[i - 1]}`;
        res += `${str[i]}`;
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (str[i] === str[i - 1]) counter++;
      else {
        res += `${counter}${str[i - 1]}`;
        counter = 1;
      }
    }
  }
  return res.replace(/1/gi, '');
}

module.exports = encodeLine;
