let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'nożyce';
} else if (randomNumber == 3){
  computerMove = 'papier';
}
*/

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == 2){
  playerMove = 'nożyce';
} else if (playerInput == 3){
  playerMove = 'papier';
}
*/

printMessage('Twój ruch to: ' + playerMove);

printMessage( displayResult(computerMove, playerMove) );

/*
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Ja wygrywam!');
} else if ( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
} else if ( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
} else if ( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Ja wygrywam!');
} else if ( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if ( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if ( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if ( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
} else if ( computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('Ja wygrywam!');
} else if ( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('Ja wygrywam!');
} else if ( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
  printMessage('Ja wygrywam!');
}*/