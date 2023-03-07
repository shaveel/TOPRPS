let options = ["rock", "paper", "scissors"];
compChoice = getComputerChoice(options)

function getComputerChoice(options) {
    return options[Math.floor(Math.random() * 3)];
}

console.log(compChoice);