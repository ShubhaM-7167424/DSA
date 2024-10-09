// Q. Wap to check wheather a string is in alphabetical order or not

function isStringInAlphabeticalOrder(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] > str[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isStringInAlphabeticalOrder("abcd"));
console.log(isStringInAlphabeticalOrder("shubham"));
console.log(isStringInAlphabeticalOrder("ace"));
