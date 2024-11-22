// Q. Waf that accepts a string and covert the first letter of each word of the string in uppercase ?
// input  => how are you
// output => How Are You

function capitalizeFirstLetterOfWord(str) {
        
        const convertedStr = str.split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.substring(1)
                
        })
        return  convertedStr.join(' ')
}


console.log(capitalizeFirstLetterOfWord('I love you'));
console.log(capitalizeFirstLetterOfWord('I am shubham singh'));
