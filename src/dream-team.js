const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) !== true){
      return false
  }
  const dreamTeamName = []
  let spaForWord
  for (let k = 0; k < members.length; k++){
      if (typeof members[k] === "string"){
          console.log('string')
         spaForWord = members[k].trim().toUpperCase()
         dreamTeamName.push(spaForWord[0]) 
      }
  }
  dreamTeamName.sort()
  console.log(dreamTeamName.join(''))
  return dreamTeamName.join('')
}

module.exports = {
  createDreamTeam
};
