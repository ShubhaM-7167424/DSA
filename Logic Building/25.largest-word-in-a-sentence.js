// Q. Wap to find the largest word in a sentence

function largestWordInASentence(str) {
    let words = str.split(" ");
    let largestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > largestWord.length) {
            largestWord = words[i];
        }
    }

    return largestWord;
}

console.log(largestWordInASentence("i love my country"));
console.log(largestWordInASentence("i am better than yesterday"));
