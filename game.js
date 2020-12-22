let height = 0;
let width = 0;
let hitPoints = 3;

const gameScreen = () => {
  height = window.innerHeight;
  width = window.innerWidth;
};

gameScreen();

window.addEventListener('resize', () => {
  gameScreen();
});

const randomPos = (time) => {
  gameOver();

  document.body.innerHTML = '';

  let posX = Math.floor(Math.random() * width) - 90;
  let posY = Math.floor(Math.random() * height) - 90;

  posX = (posX < 0 ? 0 : posX);
  posY = (posY < 0 ? 0 : posY);

  const mosquitoe = document.createElement('img');
  mosquitoe.src = "img/mosca.png";
  mosquitoe.classList.add('mosquitoe' + randomSize());
  mosquitoe.style.left = posX + 'px';
  mosquitoe.style.top = posY + 'px';
  randomSide(mosquitoe);

  const my_var = window.setInterval(
    () => {
      clearInterval(my_var);
      hitPoints -= 1;
      randomPos(time);
    },
    time
  );

  mosquitoe.addEventListener('click', () => {
    clearInterval(my_var);
    randomPos(time);
  });

  document.body.appendChild(mosquitoe);

};

window.addEventListener('load', () => {
  gameStart();
});

const randomSize = () => {
  return(Math.ceil(Math.random() * 3));
};

const randomSide = (mosquitoe) => {
  if((Math.random() < 0.5) ? true : false){
    mosquitoe.style.transform = 'scale(-1, 1)';
  }
};

const gameOver = () => {
  if(hitPoints == 0){
    document.body.innerHTML = '';

    const gameOver = document.createElement('img');
    gameOver.src = './img/game_over.png';

    const restart = document.createElement('span');
    restart.classList.add('restart-button');
    restart.innerHTML = 'Try again!'

    restart.addEventListener('click', () => {
      gameStart();
    });

    document.body.appendChild(gameOver);
    document.body.appendChild(restart);
    return error
  }
};

const gameStart = () => {
  hitPoints = 3;

  document.body.innerHTML = '';

  const game = document.createElement('img');
  game.src = './img/game.png';

  document.body.appendChild(game);

  const container = document.createElement('div');
  container.style.display = 'flex';

  const easy = document.createElement('span');
  easy.classList.add('game-start-button');
  easy.innerHTML = 'Easy';

  easy.addEventListener('click', () => {
    randomPos(3000)
  });

  const medium = document.createElement('span');
  medium.classList.add('game-start-button');
  medium.innerHTML = 'Medium';

  medium.addEventListener('click', () => {
    randomPos(2000)
  });

  const hard = document.createElement('span');
  hard.classList.add('game-start-button');
  hard.innerHTML = 'Hard';

  hard.addEventListener('click', () => {
    randomPos(1000)
  });

  container.appendChild(easy);
  container.appendChild(medium);
  container.appendChild(hard);

  document.body.appendChild(container);

};
