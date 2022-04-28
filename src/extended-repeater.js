const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator === undefined) options.separator = "+";
  if (options.addition === undefined) options.addition = "";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  let result = ""; 
  result += str;
  while (options.additionRepeatTimes > 1) {
      result += options.addition;
      result += options.additionSeparator;
      options.additionRepeatTimes--
  }

  result += options.addition;
  let clone = result;
  while(options.repeatTimes > 1) {
      result += options.separator;
      result += clone;
      options.repeatTimes--;
  }

  return result 
}

module.exports = { 
  repeater
};
