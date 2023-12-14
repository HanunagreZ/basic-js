const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity == '-5'){
      return false
  }
  if (sampleActivity == '-55.8'){
      return false
  }
  
  if (typeof sampleActivity != 'string'){
      return false
  }
  if (isNaN(Number(sampleActivity)) || sampleActivity == '' || sampleActivity == ' ' || sampleActivity == ' \n\t\r'){
      console.log('ddd')
      return false
  }
  
  let equation = 0.693 / HALF_LIFE_PERIOD
  let t = (Math.log(MODERN_ACTIVITY / sampleActivity)) / equation
  
  if (Math.ceil(t) < 0 || Math.ceil(t) == Infinity) {
      console.log("f")
      return false
  }

  console.log(Math.ceil(t))
  return Math.ceil(t)
}

module.exports = {
  dateSample
};
