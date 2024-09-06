let guessInput = document.querySelector('#guessInput');
let guessBtn = document.querySelector('#guessBtn');
let attemptsDisplay = document.querySelector('#attempts');
let restartBtn = document.querySelector('#restartBtn');
let resultDisplay = document.querySelector('result');
let message = document.getElementById('message')

let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0

guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
    attempts++;

    if (guess < 1 || guess > 100) {
        message.textContent = 'Please enter a number between 1 and 100!';
        return;
    } else if (guess < numberToGuess) {
        message.textContent = 'Too low!';
    } else if (guess > numberToGuess) {
        message.textContent = 'Too high!';
    } else {
        message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    }

    attemptsDisplay.textContent = ` ${attempts}`;
    guessInput.value = '';
});

document.getElementById('restartBtn').addEventListener('click', restartGame)

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessBtn').disabled = false;
    document.getElementById('guessInput').value = '';
    document.getElementById('attempts').textContent = '0';
}