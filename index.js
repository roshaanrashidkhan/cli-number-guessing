#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game!");
const guessNumber = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1-6:"
    }]);
if (guessNumber.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number.");
}
else {
    console.log("Oops, you guessed the Wrong number!");
}
