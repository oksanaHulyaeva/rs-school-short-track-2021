/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length < 1) return [];

  const result = [names[0]];
  let counter = 0;

  for (let i = 1; i < names.length; i++) {
    let current = names[i];
    for (let j = 0; j < result.length; j++) {
      if (result[j] === current) {
        counter++;
        current = `${names[i]}(${counter})`;
      }
    }
    counter = 0;
    result.push(current);
  }
  return result;
}

module.exports = renameFiles;
