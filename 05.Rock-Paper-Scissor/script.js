let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  tie: 0
};

updateScoreElement();

function playGame(playerMove){

  let result = '';
  let computerMove = pickComputerMove();

  if(playerMove === 'rock'){
    if(computerMove == 'rock'){
      result = 'It\'s a Tie!' ;
    }else if(computerMove == 'paper'){
      result = 'You Lose!' ;
    }else if(computerMove == 'scissors'){
      result = 'You Win!' ;
    }
  }

  else if(playerMove === 'paper'){
    if(computerMove == 'paper'){
      result = 'It\'s a Tie!' ;
    }else if(computerMove == 'scissors'){
      result = 'You Lose!' ;
    }else if(computerMove == 'rock'){
      result = 'You Win!' ;
    }
  }

  else if(playerMove === 'scissors'){
    if(computerMove == 'scissors'){
      result = 'It\'s a Tie!' ;
    }else if(computerMove == 'rock'){
      result = 'You Lose!' ;
    }else if(computerMove == 'paper'){
      result = 'You Win!' ;
    }
  }

  if(result == 'You Win!'){
    score.wins++ ;
  }else if(result == 'You Lose!'){
    score.losses++ ;
  }else if(result == 'It\'s a Tie!'){
    score.tie++ ;
  }

  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer
  `;

  updateScoreElement();

  /*
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
  */

}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
}

function pickComputerMove(){

  let computerMove = '';

  let randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }
  else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }

  return computerMove;
}