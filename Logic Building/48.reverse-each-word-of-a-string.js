// Q.Wap to reverse each word of a sentence
// input =>  love you
// output => evol uoy

function reverseEachWordOfAString(str) {
        const revString = str.split(' ').map(element => {
                return element.split('').reverse().join('')                                
        })

        return revString.join(' ')
}

console.log(reverseEachWordOfAString('how are you'));
console.log(reverseEachWordOfAString('Today I have done 30 Pushups'));
