// Q. Wap to find the smallest word in a sentence

function smallestWordInASentence(str) {
    let words = str.split(" ");
    let smallestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
    }
    return smallestWord;
}

console.log(smallestWordInASentence("my country is a big country"));
console.log(smallestWordInASentence("help your neighbours in a bad situation"));

