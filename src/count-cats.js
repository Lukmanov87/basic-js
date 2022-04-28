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
 function countCats(backyard) {
  const deployedArr = backyard.flat(Infinity)
  const filteredArr = deployedArr.filter(item => item === '^^')  
  return filteredArr.length;
}

module.exports = {
  countCats
};
