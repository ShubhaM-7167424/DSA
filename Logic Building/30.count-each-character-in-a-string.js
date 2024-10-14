// Q. Wap to count each character of a string

function countEachCharacter(str) {
    let result = {};

    for (let char of str) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

console.log(countEachCharacter("hello world"));

//? 2 *************************************************************************

function countEachCharacter2(str) {
    let freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    return freq;
}

console.log(countEachCharacter2("amazing engine"));
