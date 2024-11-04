// Q. Write a program that builds a number guessing game
// Input: a number
// Programs generate a random number between 1 and 100

// Output: 'Too High', 'High', 'Too Low', 'Low'
// Congratulations on finding the number

const prompt = require("prompt-sync")();

function guessNumberGame() {
    let randomNumber = Math.floor(Math.random() * 100 + 1);

    let guessedNumber = prompt("Guess a number between 1 and 100 ");
    guessedNumber = parseInt(guessedNumber);

    while (guessedNumber !== randomNumber) {
        if (guessedNumber < randomNumber) {
            if (randomNumber - guessedNumber > 5) {
                console.log("Your number is Too Low");
            } else {
                console.log("Your number is Low but you are too Close");
            }
        } else {
            if (guessedNumber - randomNumber > 5) {
                console.log("Your number is Too High");
            } else {
                console.log("Your number is High but you are too Close");
            }
        }

        guessedNumber = prompt("Guess the number Again! ");
        guessedNumber = parseInt(guessedNumber);
    }

    console.log("Congratulations! You have guessed the correct number", randomNumber);
}

// Call the function to start the game
guessNumberGame();
