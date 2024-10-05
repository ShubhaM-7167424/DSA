// Q. Wap to reverse a string

function reverseAString(inputString) {
    let result = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        result += inputString[i];
    }

    return result;
}

// console.log(reverseAString("love"));


function reverseAString2(str) {
    return str.split('').reverse().join('')
        
}

console.log(reverseAString2('hard'));
console.log(reverseAString2('easy'));
console.log(reverseAString2('medium'));
