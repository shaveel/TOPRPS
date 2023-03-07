const options = ["rock", "paper", "scissors"];

let playerChoice = prompt("Present your weapon of choice: ");

compChoice = getComputerChoice(options)
roundResult = playRound(compChoice, text.toLowerCase(playerChoice))





function getComputerChoice(options) {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(comp, player) { 
    if (comp === "rock") {
        if (player === "scissors") {
            return "You LOSE, Rock crushes Scissors!"
        }
        else if (player === "paper") {
            return "You WIN!, Paper defeats Rock"
        }
    }
    else if (comp === "paper") {
        if (player === "scissors") {
            return "You WIN!, Scissors cuts up Papa!"
        }
        else if (player === "rock") {
            return "You Lose, Paper defeats Rock"
        }
    }
    else if (comp === "scissors") {
        if (player === "rock") {
            return "You WIN!, Rock crushes Scissors!"
        }
        else if (player === "paper") {
            return "You Lose, Scissors cuts up Papa!"
        }
    }
    else {
        return "Draw!"
    }
}

console.log(compChoice);