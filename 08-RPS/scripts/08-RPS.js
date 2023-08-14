
let comMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
};
updateScore();

let isAutoPlaying = false;
let intervalId = 0;

function autoPlay(){
if(isAutoPlaying){
    intervalId = setInterval(function(){
    const playesMove = mathFunc();
    playGame(playesMove);
  }, 3000);
  isAutoPlaying = true;
}
else{
  clearInterval(intervalId);
  isAutoPlaying = false;
}

};

function playGame(playesMove){

  const randomNum = mathFunc();

  if(playesMove === 'Rock'){
    if(comMove === 'Rock'){
      result = 'tie';
    }
    else if (comMove === 'Peper'){
      result = 'you lose';
    }
    else if (comMove === 'Scissors'){
      result = 'you win';
    }
    
  }
  else if (playesMove === 'Peper'){
    if(comMove === 'Rock'){
        result = 'you win';
      }
      else if (comMove === 'Paper'){
        result = 'tie';
      }
      else if (comMove === 'Scissors'){
        result = 'you lose';
      }

    }  
  else if(playesMove === 'Scissors'){
    if(comMove === 'Rock'){
      result = 'you lose';
    }
    else if (comMove === 'Peper'){
      result = 'you win';
    }
    else if (comMove === 'Scissors'){
      result = 'tie';
    }
    }

  if(result === 'you win'){
    score.win += 1;
  }
  else if(result === 'you lose'){
    score.lose += 1;
  }
  else if(result === 'tie'){
    score.tie += 1;
  }  
  

  document.querySelector('.js-scor').innerHTML = result;
  document.querySelector('.js-move').innerHTML = `you<img src="images/${playesMove}-emoji.png" class="move-ing">
  computer <img src="images/${comMove}-emoji.png" class="move-ing">`;

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
  
}  

function mathFunc(){
  const randomNum = Math.random();

  if(randomNum >= 0 && randomNum < 1 / 3){
    comMove = 'Rock';
  }
  else if(randomNum >= 1 / 3 && randomNum < 2 / 3){
    comMove = 'Peper';
  }
  else if(randomNum >= 2 / 3 && randomNum < 1){
    comMove = 'Scissors';
  }
}

function updateScore(){
  document.querySelector('.js-result')
    .innerHTML = `<p> win: ${score.win} lose: ${score.lose} tie: ${score.tie}</p>`;
}  

