// replit will automatically load in the required libraries before running, sidestepping a lot of confusion
const createPromptFunction = require('prompt-sync');
const getInput = createPromptFunction();

const getComputerChoice = () => {
  const num = Math.floor(Math.random() * 3);
  if (num === 1) {
    return 'rock'
  } else if (num === 2) {
    return 'paper'
  }
  return 'scissors'
}

const checkWinner = (userInput, computerInput) => {
  if (userInput === computerInput) {
    console.log(`You guessed ${userInput}, you win!`)
    return true;
  }
  console.log(`Sorry, ${computerInput} you lose!`)
  return false;
}

const playGame = () => {
  let score = 0;
  for (let i = 0; i < 10; i++) {
    const user = getInput('What do you choose? ')
    const computerChoice = getComputerChoice();
    const didWin = checkWinner(user, computerChoice)
    if (didWin) {
      score++
    }
  }
  console.log(`score: ${score}`)
}