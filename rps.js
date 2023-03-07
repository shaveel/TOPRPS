const options = ["rock", "paper", "scissors"];

let playerChoice = prompt("Present your weapon of choice: ");


compChoice = getComputerChoice(options)






function getComputerChoice(options) {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(comp, player) { 
    if (comp === "rock") {
        if (player === "scissors") {
            return ["You LOSE, Rock crushes Scissors!", 0]
        }
        else if (player === "paper") {
            return ["You WIN!, Paper defeats Rock", 1]
        }
    }
    else if (comp === "paper") {
        if (player === "scissors") {
            return ["You WIN!, Scissors cuts up Papa!", 1]
        }
        else if (player === "rock") {
            return ["You Lose, Paper defeats Rock", 0]
        }
    }
    else if (comp === "scissors") {
        if (player === "rock") {
            return ["You WIN!, Rock crushes Scissors!", 1]
        }
        else if (player === "paper") {
            return ["You Lose, Scissors cuts up Papa!", 0]
        }
    }
    else if {
        return ["Draw!", 2]
    }
    else {
        return "Weapon is not valid for this war, please select between rock, paper or sicssors"
    }
}

function game(compChoice, playerChoice) {
    let score = [0, 0];
    roundResult = playRound(compChoice, playerChoice.toLowerCase())
    if (roundResult) {
        score[roundResult] =+ 1;
        console.log(`You WIN!! ${playerChoice} defeats ${compChoice}\nThe score is now   COMPUTER${score[0]}:${score[1]}YOU`);

    }
    else if (!roundResult) {
        score[roundResult] =+ 1;
    }
}

console.log(compChoice);