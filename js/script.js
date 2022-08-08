function playGame(playerInput) {

clearMessages();

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove);
}

let rockBtn = document.getElementById('btn-rock');
let scissorsBtn = document.getElementById('btn-scissors');
let paperBtn = document.getElementById('btn-paper');

rockBtn.addEventListener('click', function() {
  playGame(1);
});

scissorsBtn.addEventListener('click', function() {
  playGame(2);
});

paperBtn.addEventListener('click', function() {
  playGame(3);
});