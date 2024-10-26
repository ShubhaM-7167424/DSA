// Q. Wap to find all palindromic substrings in a given string

function findAllPalindromicSubStrings(str) {
    let result = [];
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            let substr = str.slice(i, j);
            if (isPalindromic(substr) && substr.length > 1) {
                result.push(substr);
            }
        }
    }
    return result
}

console.log(findAllPalindromicSubStrings("malayalam"));

function isPalindromic(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}
