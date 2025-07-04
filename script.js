const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resultPara = document.getElementById('result');

function playRound(playerChoice) {
	const computerChoice = getComputerChoice();
	const result = determineWinner(playerChoice, computerChoice);
	resultPara.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return 'It\'s a tie!';
	} else if (
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
	) {
		return 'You win!';
	} else {
		return 'Computer wins!';
	}
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
