// Q.1 Wap to generate random number between  1 and the given number
// Q.2 Wap to generate random number between a minNumber and a MaxNumber(excluding maxNumber)

function generateRandomNumber(maxNumber) {
    let i = 1;
    while (i < 20) {
        let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        console.log(randomNumber);

        i++;
    }
}

console.log(generateRandomNumber(15));

console.log("function 2");

function generateRandomNumber2(minNumber, maxNumber) {
    let i = 1;
    while (i < 50) {
        let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
        console.log(randomNumber);

        i++;
    }
}

console.log(generateRandomNumber2(5, 15));
