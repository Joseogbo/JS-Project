let guessInput = document.querySelector('#guess-input');
let guessBtn = document.querySelector('#guess-btn');
let attemptsDisplay = document.querySelector('#attempts');
let restartBtn = document.querySelector('#restart-btn');
let resultDisplay = document.querySelector('result');

let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0

guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(guess)) {
        result.textContent = 'Please enter a valid number!';
    } else if (guess < numberToGuess) {
        result.textContent = 'Too low!';
    } else if (guess > numberToGuess) {
        result.textContent = 'Too high!';
    } else {
        result.textContent = 'Correct!';
    }

    attemptsDisplay.textContent = ` ${attempts}`;
    guessInput.value = '';
});