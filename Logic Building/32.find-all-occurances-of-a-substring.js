// Q. Wap to find all  occurances of a word in a given sentence

function findAllOccurancesOfAWord(bigString, subString) {
      let result = []
      let index = bigString.indexOf(subString)

      while (index !== -1) {
            result.push(index)
            index = bigString.indexOf(subString, index+1)
      }
      return result
}

let largesString = 'i love my country. i love my family. i love my bike. i love studying.'

let smallString = 'love'

console.log(findAllOccurancesOfAWord(largesString, smallString));
