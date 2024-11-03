// Q. Wap that simulates Rolling a dice
// Inputs: 2 inputs
// == number of dice
// == number of sides in a dice
// Ouputs : Array that contains the result of rolling a dice

const prompt = require('prompt-sync')()

function rollADice(numberOfSides) {
    return Math.floor(Math.random() * numberOfSides) + 1;
}

function rollMultipleDice(numberOfDice, numberOfSides) {
    let result = [];
    for (let i = 0; i < numberOfDice; i++) {
        let generatedNumber = rollADice(numberOfSides);
        result.push(generatedNumber);
    }
    return result;
}

const numberOfDice = prompt('Please enter number of dices: ')
console.log(numberOfDice);

const numberOfSides = prompt('Please enter number of sides in a dice: ')
console.log(numberOfSides);


console.log(rollMultipleDice(numberOfDice, numberOfSides))
