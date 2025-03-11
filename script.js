function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100)

    if (randomNumber % 3 === 0) {
        return "scissors";
    } else if (randomNumber % 5 === 0) {
        return "rock";
    } else if (randomNumber % 1 === 0) {
        return "paper";
    } else {
        console.log(randomNumber +" Idk wtf happened")
    }

}

// console.log(getComputerChoice())


function getHumanChoice() {
    let userChoice = prompt("rock, paper, or scissors?")
    return userChoice.toLowerCase()

}

// console.log(getHumanChoice())



let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    let a = humanChoice;
    console.log(a)
    let b = computerChoice;
    console.log(b)


    if (a == "rock" && b == "scissors" || a == "scissors" && b == "paper" || a == "paper" && b == "rock") {
        return humanScore++
    } else if (a == "rock" && b == "rock" || a == "paper" && b == "paper" || a == "scissors" && b == "scissors") {
        return console.log("Draw")
    } else if (a == "rock" && b == "paper" || a == "paper" && b == "scissors" || a == "scissors" && b == "rock") {
        return computerScore++
    } else {
        return "error";
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);


console.log(humanScore, " ", computerScore)