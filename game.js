let height = 0;
let width = 0;

const gameScreen = () => {
  height = window.innerHeight;
  width = window.innerWidth;

  console.log(height, width);
}

gameScreen();

window.addEventListener('resize', () => {
  gameScreen();
})
