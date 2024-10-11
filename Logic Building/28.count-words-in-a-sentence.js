// Q. Wap to count words in a sentence

function countWordsInASentence(str) {
      let words = str.split(' ')
      let nonemptyWords = words.filter(element => element !== '')

      return nonemptyWords.length;
}

console.log(countWordsInASentence('i    love my country'));
console.log(countWordsInASentence('i am    learning  web devlopment  '));

//? 2 **********************************************

function countWords(str) {
    let words = str.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            count++;
        }
    }
    return count;
}

console.log(countWords(" i   love my country"));

//? 3 **********************************************

function countWords2(str) {
    let words = str.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            count++;
        }
    }
    return count;
}

console.log(countWords2(" i   love my country"));

//? 4 **********************************************


function countWords(str) {
    let words = str.split(" ");
    words;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === "") {
            words.splice(i, 1);
            i--;
        }
    }
    return words.length;
}

console.log(countWords("i  love to   work"));
