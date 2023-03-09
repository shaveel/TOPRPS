const options = ["rock", "paper", "scissors"];



game()

function getComputerChoice(options) {
    return options[Math.floor(Math.random() * 3)];
    
}

function playRound(comp, player) { 
    if (comp === player){
        return "2"
    }
    else if (comp === "rock") {
        if (player === "scissors") {
            return 0
        }
        else if (player === "paper") {
            return 1
        }
    }
    else if (comp === "paper") {
        if (player === "scissors") {
            return 1
        }
        else if (player === "rock") {
            return 0
        }
    }
    else if (comp === "scissors") {
        if (player === "rock") {
            return 1
        }
        else if (player === "paper") {
            return 0
        }
    }
    
    else {
        return "Weapon is not valid for this war, please select between rock, paper or sicssors"
    }
}

function game() {
    let score = [0, 0];
    let playerChoice;
    for (i = 0; i < 5; i++) {
        playerChoice = prompt("Present your weapon of choice: ");
        compChoice = getComputerChoice(options)
        roundResult = playRound(compChoice, playerChoice.toLowerCase())
        if (roundResult === "2") {
            console.log(`Draw! \nThe score stays at   COMPUTER ${score[0]}:${score[1]} YOU`);
        }
        else if (roundResult) {
            score[roundResult] =+ 1;
            console.log(`You WIN!! ${playerChoice} defeats ${compChoice}\nThe score after round ${i+1}   COMPUTER ${score[0]}:${score[1]} YOU`);

        }
        else if (!roundResult) {
            score[roundResult] =+ 1;
            console.log(`You Lose. ${compChoice} defeats ${playerChoice}\nThe score after round ${i+1}   COMPUTER ${score[0]}:${score[1]} YOU`);
        }
        else {
            console.log(roundResult);
        }
    }
}

