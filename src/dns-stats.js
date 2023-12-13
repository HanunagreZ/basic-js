const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  
  const domainsObj = {}
  
  for (let i = 0; i < domains.length; i++) {
    const splitArray = domains[i].split('.')
    const arrayToPush = []
    for(let k = 0; k < splitArray.length; k++) {
        arrayToPush.unshift(splitArray[k])
    }
    for (let l = 0; l < arrayToPush.length; l++){
        arrayToPush[l] = "." + arrayToPush[l]
    }
    let keySumm    
    for (let h = 0; h < arrayToPush.length; h++) {
        if ((h > 0 && h < arrayToPush.length) && keySumm !==arrayToPush[h]) {
            keySumm += arrayToPush[h] 
        } else {
          keySumm = arrayToPush[h]   
        }
        if (Object.keys(domainsObj).includes(keySumm)) {
          domainsObj[keySumm] += 1  
          continue
        }
        domainsObj[keySumm] = 1
    }        
      console.log(keySumm)
  }
  return domainsObj
}

module.exports = {
  getDNSStats
};
