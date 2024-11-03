// Q. Wap that checks if a given string of parentheses is balanced and well-formed
// Input: A String
// Output: true if parentheses is balanced or false if not balanced

let obj = {
    "{": "}",
    "[": "]",
    "(": ")",
};

function isBalancedParentheses(string) {
    let array = [];
    for (let char of string) {
        if (char == "{" || char == "(" || char == "[") {
            array.push(char);
        } else if (char == "}" || char == ")" || char == "]") {
            let lastChar = array.pop();

            if (obj[lastChar] !== char) {
                return false;
            }
        }
    }

    return array.length === 0;
}

console.log(isBalancedParentheses("{[]}"));
console.log(isBalancedParentheses("{[()]}"));
console.log(isBalancedParentheses("{[(])}"));
console.log(isBalancedParentheses("{["));
console.log(isBalancedParentheses(")]"));

console.log('second way');

function isBalancedParentheses2(string) {
    let array = [];
    for (let char of string) {
        if (obj[char]) {
            array.push(char);
        } else if (char == "}" || char == ")" || char == "]") {
            let lastChar = array.pop();

            if (obj[lastChar] !== char) {
                return false;
            }
        }
    }

    return array.length === 0;
}

console.log(isBalancedParentheses2("{[]}"));
console.log(isBalancedParentheses2("{[()]}"));
console.log(isBalancedParentheses2("{[(])}"));
console.log(isBalancedParentheses2("{["));
console.log(isBalancedParentheses2(")}"));
