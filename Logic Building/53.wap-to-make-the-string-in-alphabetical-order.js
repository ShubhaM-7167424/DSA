// Q. Wap that returns a passed string with letters in alphabetical order.
// input  => shubham
// output => abhhmsu

function convertStringInAlphabeticalOrder(str) {
     return str.split('').sort().join('')
        
}

console.log(convertStringInAlphabeticalOrder('shubham'));
console.log(convertStringInAlphabeticalOrder('love'));
