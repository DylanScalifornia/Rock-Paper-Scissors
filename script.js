function getComputerChoice(){
    const arrOfChoices = ['Rock', 'Paper', 'Scissors']
    const randomNum = Math.floor(Math.random() * 3)
    console.log(arrOfChoices[randomNum])
}

getComputerChoice();