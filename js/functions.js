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
  return('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  return('Ty wygrywasz!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    return('Ja wygrywam!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    return('Ja wygrywam!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    return('Ja wygrywam!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    return('Ja wygrywam!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return('Ty wygrywasz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    return('Ty wygrywasz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    return('Ty wygrywasz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    return('Remis!');
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

