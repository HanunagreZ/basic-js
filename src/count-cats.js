const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catsCount = 0;
  const array = Array.from(matrix)
  
  for (let i = 0; i < array.length; i ++) {
      for (let k = 0; k < array[i].length; k ++) {
          if (matrix[i][k] === '^^') {
              catsCount += 1;
          }
      }
  }
  
  return catsCount
}

module.exports = {
  countCats
};
