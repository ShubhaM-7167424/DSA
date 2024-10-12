// Q. Wap to find the counts of vowels and consonants in a sentence
//  let vowels = "aeiou";
//  let consonants = "bcdfghjklmnpqrstvwxyz";

function countVowelsAndConsonants(str) {
    let vowels = "aeiou";
    let consonants = "bcdfghjklmnpqrstvwxyz";
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        } else if (consonants.includes(char)) {
            consonantsCount++;
        }
    }
    return { vowelsCount, consonantsCount };
}

console.log(countVowelsAndConsonants("bharat my country"));
console.log(countVowelsAndConsonants("my favourite bike"));

/* 2************************************************************ */

function countVowelsAndConsonants2(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            vowelsCount++;
        } else if (char === " ") {
        } else {
            consonantsCount++;
        }
    }
    return { vowelsCount, consonantsCount };
}

console.log(countVowelsAndConsonants2("apple india"));
