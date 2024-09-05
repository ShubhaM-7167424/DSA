// Q. Wap to reverse a string

function reverseAString(inputString) {
    let result = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        result += inputString[i];
    }

    return result;
}

console.log(reverseAString("love"));
