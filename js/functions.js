function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } 
  else if(argMoveId == 2){
  return 'nożyce';
  }
  else if(argMoveId == 3){
  return 'papier';
  }
}

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Ja wygrywam!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Ja wygrywam!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Ja wygrywam!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  }
}

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}