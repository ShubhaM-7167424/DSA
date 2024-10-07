// Q. Wap to check wheather a string is palindrome or not

function isPalindrome(str) {

    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }

    return true;
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("malayalam"));
// console.log(isPalindrome("shubham"));


function isPalindrome2(str) {
    const reversedStr = str.split('').reverse().join('')    
    return str === reversedStr
}

console.log(isPalindrome2('love'));
console.log(isPalindrome2('radar'));
console.log(isPalindrome2('madam'));
