let height = 0;
let width = 0;

const gameScreen = () => {
  height = window.innerHeight;
  width = window.innerWidth;
};

gameScreen();

window.addEventListener('resize', () => {
  gameScreen();
});

const randomPos = () => {

  let posX = Math.floor(Math.random() * width) - 90;
  let posY = Math.floor(Math.random() * height) - 90;

  posX = (posX < 0 ? 0 : posX);
  posY = (posY < 0 ? 0 : posY);

  const mosquitoe = document.createElement('img');
  mosquitoe.src = "img/mosca.png";
  mosquitoe.classList.add('mosquitoe' + randomSize());
  mosquitoe.style.left = posX + 'px';
  mosquitoe.style.top = posY + 'px';

  document.body.appendChild(mosquitoe);

};

window.addEventListener('load', () => {
  randomPos();
});

const randomSize = () => {
  return(Math.ceil(Math.random() * 3));
};

randomSize();