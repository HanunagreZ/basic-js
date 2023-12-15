const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   
  if (!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let thisIsForNewYearArr = [...arr]
  console.log(thisIsForNewYearArr)
  
  if (!(thisIsForNewYearArr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  for (let i = 0; i < thisIsForNewYearArr.length; i++){
      if(thisIsForNewYearArr[i] == '--double-next'){
          if(i == (thisIsForNewYearArr.length - 1)) {
              thisIsForNewYearArr.splice(i, 1)
              continue
          }
          if(thisIsForNewYearArr[i+2] == '--double-prev') {
              thisIsForNewYearArr.splice(i, 1)
              thisIsForNewYearArr.splice(i+1, 1)
              thisIsForNewYearArr.splice(i, 0, thisIsForNewYearArr[i]); 
              thisIsForNewYearArr.splice(i, 0, thisIsForNewYearArr[i]); 
              continue
          }
          

         thisIsForNewYearArr.splice(i, 1)
         thisIsForNewYearArr.splice((i+1), 0, i+1); 
         console.log(thisIsForNewYearArr)  
      }
      if(thisIsForNewYearArr[i] == '--double-prev'){
          if(i == 0) {
              thisIsForNewYearArr.splice(i, 1)
              continue
          }
         thisIsForNewYearArr.splice(i, 1)
         thisIsForNewYearArr.splice(i, 0, thisIsForNewYearArr[i-1]); 
         console.log(thisIsForNewYearArr)  
      }
      if(thisIsForNewYearArr[i] == '--discard-prev'){
          if(i == 0) {
              thisIsForNewYearArr.splice(i, 1)
              continue
          }
          thisIsForNewYearArr.splice(i-1, 2)
           console.log(thisIsForNewYearArr)  
      }
      if(thisIsForNewYearArr[i] == '--discard-next'){
          if(i == (thisIsForNewYearArr.length - 1)) {
              thisIsForNewYearArr.splice(i, 1)
              continue
          }
          if (thisIsForNewYearArr[i+2] == '--double-prev'){
              thisIsForNewYearArr.splice(i, 3)
              console.log(thisIsForNewYearArr)  
              continue
          }
          if (thisIsForNewYearArr[i+2] == '--discard-prev'){
              thisIsForNewYearArr.splice(i, 3)
              console.log(thisIsForNewYearArr)  
              continue
          }
          thisIsForNewYearArr.splice(i, 2)
          console.log(thisIsForNewYearArr)  
      }
  }
 return thisIsForNewYearArr
}

module.exports = {
  transform
};
