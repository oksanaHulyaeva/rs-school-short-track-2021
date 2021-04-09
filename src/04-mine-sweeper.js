/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new Error('Not implemented');
  function getFieldFromMatrix (matr) {
    return matr.map((item) => item.map(() => 0));
  }
  const newMatrix = getFieldFromMatrix(matrix);

  for (let i = 0; i < newMatrix.length; i++) {
    if (typeof newMatrix[i] !== 'undefined') {
      for (let j = 0; j < newMatrix[i].length; j++) {
        if (matrix[i][j - 1] && typeof matrix[i][j - 1] !== 'undefined') newMatrix[i][j]++;
        if (matrix[i][j + 1] && typeof matrix[i][j + 1] !== 'undefined') newMatrix[i][j]++;
        // if (matrix[i+1]?.[j] && typeof matrix[i+1]?.[j] !== "undefined") newMatrix[i][j]++;
        // if (matrix[i+1]?.[j-1] && typeof matrix[i+1]?.[j-1] !== "undefined")  newMatrix[i][j]++;
        // if (matrix[i+1]?.[j+1] && typeof matrix[i+1]?.[j+1] !== "undefined")  newMatrix[i][j]++;
        // if (matrix[i-1]?.[j-1] && typeof matrix[i-1]?.[j-1] !== "undefined")  newMatrix[i][j]++;
        // if (matrix[i-1]?.[j] && typeof matrix[i-1]?.[j] !== "undefined")  newMatrix[i][j]++;
        // if (matrix[i-1]?.[j+1] && typeof matrix[i-1]?.[j+1] !== "undefined")  newMatrix[i][j]++
        if (matrix[i + 1] && typeof matrix[i + 1] !== 'undefined') {
          if (matrix[i + 1][j] && typeof matrix[i + 1][j] !== 'undefined') newMatrix[i][j]++;
          if (matrix[i + 1][j - 1] && typeof matrix[i + 1][j - 1] !== 'undefined') newMatrix[i][j]++;
          if (matrix[i + 1][j + 1] && typeof matrix[i + 1][j + 1] !== 'undefined') newMatrix[i][j]++;
        }
        if (matrix[i - 1] && typeof matrix[i - 1] !== 'undefined') {
          if (matrix[i - 1][j] && typeof matrix[i - 1][j] !== 'undefined') newMatrix[i][j]++;
          if (matrix[i - 1][j - 1] && typeof matrix[i - 1][j - 1] !== 'undefined') newMatrix[i][j]++;
          if (matrix[i - 1][j + 1] && typeof matrix[i - 1][j + 1] !== 'undefined') newMatrix[i][j]++;
        }
      }
    }
  }
  return newMatrix;
}

module.exports = minesweeper;
