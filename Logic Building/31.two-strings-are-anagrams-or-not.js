// Q. Wap to check two strings are anagrams or not
// ex: earth, heart,  below, elbow,

function areAnagrams(s1, s2) {
    let result1 = {};
    let result2 = {};

    for (let char of s1) {
        if (result1[char]) {
            result1[char]++;
        } else {
            result1[char] = 1;
        }
    }

    for (let char of s2) {
        if (result2[char]) {
            result2[char]++;
        } else {
            result2[char] = 1;
        }
    }

    for (let char of s1) {
        if (result1[char] !== result2[char]) {
            return false;
        }
    }
    return true;
}

console.log(areAnagrams("below", "elbow"));
console.log(areAnagrams("heart", "earth"));
console.log(areAnagrams("heart", "eartha"));

//? 2 ***********************************************************************

function areAnagrams2(s1, s2) {
    let freq1 = {};
    let freq2 = {};

    for (let char of s1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }

    for (let char of s2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }

    for (let char of s1) {
        if (freq1[char] !== freq2[char]) {
            return false;
        }
    }

    return true;
}

console.log(areAnagrams2("heart", "earth"));
