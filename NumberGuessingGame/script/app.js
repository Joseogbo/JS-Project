let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessBtn').addEventListener('click', checkGuess);
document.getElementById('restartBtn').addEventListener('click', restartGame);

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');

  if (guess < 1 || guess > 100) {
    message.textContent = 'Please enter a number between 1 and 100!';
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    disableInput();
  } else if (guess > randomNumber) {
    message.textContent = 'Too high! Try again.';
  } else if (guess < randomNumber) {
    message.textContent = 'Too low! Try again.';
  }
}

function disableInput() {
  document.getElementById('guessInput').disabled = true;
  document.getElementById('guessBtn').disabled = true;
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById('guessInput').disabled = false;
  document.getElementById('guessBtn').disabled = false;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent =
    'Enter a number between 1 and 100:';
  document.getElementById('attempts').textContent = 'Attempts: 0';
}
