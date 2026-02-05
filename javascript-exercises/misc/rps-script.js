const rock = "rock"
const paper = "paper"
const scissors = "scissors"

let computerScore = 0
let humanScore = 0

// Create the computer's "choice"
function getComputerChoice() {
    let randomChoice = Math.random()

    if (randomChoice <= (1 / 3)) {
        return rock
    } else if ((1 / 3) < randomChoice && randomChoice <= (2 / 3)) {
        return paper
    } else {
        return scissors
    }
}

// A NodeList for all the buttons
const buttons = document.querySelectorAll('button')

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let choice = event.target
        
        switch (choice.innerText) {
            case 'Rock':
                playRound(getComputerChoice(), rock)
                break
            case 'Paper':
                playRound(getComputerChoice(), paper)
                break
            case 'Scissors':
                playRound(getComputerChoice(), scissors)
                break
        }
    })
}) 

// Display the scores
const scoreDisplay = document.querySelector('div')
let announcement = document.createElement('p')
let scores = document.createElement('p')
const reset = document.createElement('button')
reset.innerText = 'Reset'
reset.hidden = true  // Keep hidden until the game has ended

scoreDisplay.appendChild(announcement)
scoreDisplay.appendChild(scores)
scoreDisplay.appendChild(reset)

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (computerChoice === humanChoice) {
        announcement.innerText = `Tie! Both chose ${computerChoice}!`
    } else if ((computerChoice === rock && humanChoice === scissors) || (computerChoice === paper && humanChoice === rock) || (computerChoice === scissors && humanChoice === paper)) {
        announcement.innerText = `Computer wins! ${computerChoice[0].toUpperCase() + computerChoice.substring(1)} beats ${humanChoice}.`
        computerScore += 1
    }  else {
        announcement.innerText = `You win! ${humanChoice[0].toUpperCase() + humanChoice.substring(1)} beats ${computerChoice}.`
        humanScore += 1
    }

    scores.innerText = `Your score: ${humanScore}\nComputer score: ${computerScore}`

    // Game reset
    if (computerScore === 5 || humanScore === 5) {
        let winnerScore = Math.max(computerScore, humanScore)
        announcement.innerText = winnerScore === computerScore ? 'Computer won' : 'You won!'
    
        reset.hidden = false
        reset.addEventListener('click', () => {
            computerScore = 0
            humanScore = 0
            announcement.innerText = 'Game reset'
            scores.innerText = `Your score: ${humanScore}\nComputer score: ${computerScore}`
            reset.hidden = true
        })
    }
}