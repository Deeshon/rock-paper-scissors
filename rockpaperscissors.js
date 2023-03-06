function getComputerChoice() {

    const choices = {
        0 : "rock",
        1 : "paper",
        2 : "scissor"
    }

    let choice_num = Math.floor(Math.random() * 3)
    return choices[choice_num]


} 

function playRound(playerChoice, computerChoice) {

    const selections = {
        'rock' : 0,
        'paper' : 1,
        'scissor' : 2
    }

    let playerSelection = selections[playerChoice]
    let computerSelection = selections[computerChoice]

    switch (playerSelection - computerSelection) {
        case 0:
            return "Its a Tie!"
            
        case -1:
        case 2:
            return `You lose! ${computerChoice} beats ${playerChoice}`
            
        case 1:
        case -2:
            return `You win! ${playerChoice} beats ${computerChoice}`
    }

}



function game() {
    let computerScore = 0
    let playerScore = 0

    let run = true

    while (run == true) {

        let playerChoice = prompt("Select Rock, Paper or Scissor: ").toLowerCase()
        let computerChoice = getComputerChoice()

        let result = playRound(playerChoice, computerChoice)
        console.log(result)

        if (result == `You lose! ${computerChoice} beats ${playerChoice}` ) {
            computerScore += 1
            console.log(`Your score: ${playerScore}`)
            console.log(`Computer's score: ${computerScore}`)
        } else if (result == `You win! ${playerChoice} beats ${computerChoice}`) {
            playerScore += 1
            console.log(`Your score: ${playerScore}`)
            console.log(`Computer's score: ${computerScore}`)
        }

        if (playerScore == 5) {
            console.log("You Win!")
            run = false
        } else if (computerScore == 5) {
            console.log("You lose! Computer Wins")
            run = false
        }

    }


}


game()









