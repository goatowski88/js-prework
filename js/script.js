{
const playGame = function(playerInput) {

clearMessages();

console.log('Start gry');

const randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

const computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

console.log('Gracz wpisał: ' + playerInput);

const playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

console.log('Wyświtlenie wyniku');

displayResult(computerMove, playerMove);
}

const rockBtn = document.getElementById('btn-rock');
const scissorsBtn = document.getElementById('btn-scissors');
const paperBtn = document.getElementById('btn-paper');

rockBtn.addEventListener('click', function() {
  playGame(1);
});

scissorsBtn.addEventListener('click', function() {
  playGame(2);
});

paperBtn.addEventListener('click', function() {
  playGame(3);
});
}