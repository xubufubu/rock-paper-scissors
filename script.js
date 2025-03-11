function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100)

    console.log(randomNumber)

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


console.log(getComputerChoice())

