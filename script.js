let playerScore = 0
let compScore = 0

function getComputerChoice(){
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

function playRound (playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return 'You tied! You both picked rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'You tied! You both picked scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return 'You tied! You both picked paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++
        return 'You lost! Rock crushes scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return 'You win! Scissors cuts paper'
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        compScore++
        return 'You lost! Paper covers rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        return 'You win! Rock crushes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore++
        return 'You lost! Scissors cuts paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return 'You win! Paper covers rock'
    }
   
}

const playerSelection = 'rock'

function game(){
    for(let i = 0; i <5; i++){
       const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)) 
    }
}

game()