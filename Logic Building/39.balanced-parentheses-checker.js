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


function isBalancedParentheses3(str) {
    let stack = [];
    let open = ["(", "{", "["];
    let close = [")", "}", "]"];

    for (let i = 0; i < str.length; i++) {
        if (open.includes(str[i])) {
            stack.push(str[i]);
        } else if (close.includes(str[i])) {
            let last = stack.pop();
            if (open.indexOf(last) !== close.indexOf(str[i])) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isBalancedParentheses3("{[()]}"));
console.log(isBalancedParentheses3("{[(])}"));
