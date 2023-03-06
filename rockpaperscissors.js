function getComputerChoice() {

    const choices = {
        0 : "rock",
        1 : "paper",
        2 : "scissor"
    }

    let choice_num = Math.floor(Math.random() * 3)
    return choices[choice_num]


} 

let playerScore = 0
let computerScore = 0

function playRound(choice) {


    const pScore = document.querySelector("#pscore")
    const cScore = document.querySelector("#cscore")

    const h1 = document.querySelector("#msg")


    const selections = {
        'rock' : 0,
        'paper' : 1,
        'scissor' : 2
    }

    let playerChoice = choice
    let playerSelection = selections[playerChoice]
    let computerChoice = getComputerChoice()
    let computerSelection = selections[computerChoice]

    switch (playerSelection - computerSelection) {
        case 0:
            console.log("Its a Tie!")
            h1.textContent = "Its a Tie"
            
            break
            
        case -1:
        case 2:
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
            h1.textContent = `You lose! ${computerChoice} beats ${playerChoice}`
            computerScore+=1
            cScore.textContent = `Computer: ${computerScore}`
            break
            
        case 1:
        case -2:
            console.log(`You win! ${playerChoice} beats ${computerChoice}`)
            h1.textContent = `You win! ${playerChoice} beats ${computerChoice}`
            playerScore+=1
            pScore.textContent = `Player: ${playerScore}`

    }


}


const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        choice = button.name
        playRound(choice)
    })
})

