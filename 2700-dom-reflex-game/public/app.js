let body = document.querySelector('body');
let lost = false;
let won = false;
let clicked = [];
function createButtons(number) {
  for (let i = 0; i < number; i++) {
    clicked.push(false);
    let button = document.createElement('button');
    button.innerText = 'something';
    button.addEventListener('click', () => {
      if (won || lost) return;
      clicked[i] = true;
      if (clicked.every(val => val)) {
        won = true;
        document.getElementById('status').innerText = 'you won!';
      }
    });
    body.appendChild(button);
  }
}
createButtons(Math.random() * 100);

setTimeout(() => {
  if (won || lost) return;
  lost = true;
  document.getElementById('status').innerText = 'You lost!';
}, Math.floor(Math.random() * 1300) + 500);
