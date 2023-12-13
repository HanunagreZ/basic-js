const { NotImplementedError } = require('../extensions/index.js');

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
  const firstWordArray = Array.from(s1)
  const secondWordArray = Array.from(s2)
  let commonLetterCounter = 0
  
  const firstObject = {}
  const secondObject = {}
  
    for (let i = 0; i < firstWordArray.length; i++) {
    if ( [firstWordArray[i]] in firstObject ) {
      firstObject[firstWordArray[i]] += 1
        continue
    }
      firstObject[firstWordArray[i]] = 1
    }
    for (let i = 0; i < secondWordArray.length; i++) {
      if ( [secondWordArray[i]] in secondObject ) {
        secondObject[secondWordArray[i]] += 1
        continue
      }
      secondObject[secondWordArray[i]] = 1
    }

    console.log(firstObject)
    console.log(secondObject)
    
    for (let key in firstObject) {
        console.log(firstObject[key])
    }

    const firstObjectKeys = Object.keys(firstObject)
    const secondObjectKeys = Object.keys(secondObject)
    
    for (let k = 0; k < firstObjectKeys.length; k ++) {
      if (secondObjectKeys.includes(firstObjectKeys[k])) {
          commonLetterCounter += firstObject[(firstObjectKeys[k])] > secondObject[(firstObjectKeys[k])] ? secondObject[(firstObjectKeys[k])] : firstObject[(firstObjectKeys[k])]  
          console.log(commonLetterCounter)
      } 
  }
    
  return commonLetterCounter;
}

module.exports = {
  getCommonCharacterCount
};
