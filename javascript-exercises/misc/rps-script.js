const rock = "rock"
const paper = "paper"
const scissors = "scissors"

let computerScore = 0
let humanScore = 0

// Create the computer's "choice"
function getComputerChoice() {
    let randomChoice = Math.random()
    console.log(randomChoice)

    if (randomChoice <= (1 / 3)) {
        return rock
    } else if ((1 / 3) < randomChoice && randomChoice <= (2 / 3)) {
        return paper
    } else {
        return scissors
    }
}

// Prompt the human for a decision
function getHumanChoice() {
    return prompt("Rock, paper, or scissors?")
}

// One game round
function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (computerChoice === humanChoice) {
        console.log(`Tie! Both chose ${computerChoice}!`)
    } else if ((computerChoice === rock && humanChoice === scissors) || (computerChoice === paper && humanChoice === rock) || (computerChoice === scissors && humanChoice === paper)) {
        console.log(`Computer wins! ${computerChoice[0].toUpperCase() + computerChoice.substring(1)} beats ${humanChoice}.`)
        computerScore += 1
    }  else {
        console.log(`You win! ${humanChoice[0].toUpperCase() + humanChoice.substring(1)} beats ${computerChoice}.`)
        humanScore += 1
    }
}

// Play five rounds and declare the winner, unless it's a tie
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice())
    }

    if (computerScore > humanScore) {
        console.log(`The computer beat you with a score of ${computerScore} to ${humanScore}... Better luck next time!`)
    } else if (computerScore < humanScore) {
        console.log(`You beat the computer with a score of ${humanScore} to ${computerScore}! Well done!`)
    } else {
        console.log('It is a tie!')
    }
}

// Invoke the whole shabang!
playGame()