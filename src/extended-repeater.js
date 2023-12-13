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
  let array = []
  let map = new Map(Object.entries(options));
  
  let count = 0;
  for (let key in options) {
      count++
  }
  if (count == 1){
      for(let i = 0; i < map.get('repeatTimes'); i++){
          array.push(str)
          array.push("+")
      }
      array.pop()
      console.log(array.join(''))
      return array.join('')
  }
  else if (count == 2 && map.has('separator')){
      for(let i = 0; i < map.get('repeatTimes'); i++){
          array.push(str)
          array.push(map.get('separator'))
      }
      array.pop()
      console.log(array.join(''))
      return array.join('')
  } 
  else if (count == 3 && map.has('addition') &&  map.has('additionRepeatTimes')){
      map.set("separator", "+")
      map.set("additionSeparator", "|") 
  } 
  else if (count == 3){
    array.push(str)
    array.push(map.get('addition'))
    console.log(array.join(''))
    return array.join('')
}
  else if (count == 4 && map.has('addition') &&  map.has('additionRepeatTimes') &&  map.has('separator')){
      map.set("additionSeparator", "|") 
  } 
  else if (count == 4 && map.has('addition') &&  map.has('additionRepeatTimes') &&  map.has('additionSeparator')){
      map.set("separator", "+") 
  } 
  
  console.log(count)

for (let i = 0; i < map.get('repeatTimes'); i++ ){
    array.push(String(str))
    for(let k = 0; k < map.get('additionRepeatTimes'); k++) {
        array.push(String(map.get('addition')))
        array.push(map.get('additionSeparator'))
    }
    array.pop()
    array.push(map.get('separator'))
}
array.pop()
console.log(array)
console.log(array.join(''))

return array.join('')
}

module.exports = {
  repeater
};
