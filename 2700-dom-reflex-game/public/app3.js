let body = document.querySelector('body');
let won = false;
let lost = false;
let clicked = [false];
let numberOfClicks = Math.floor(Math.random() * 4 + 2);

setTimeout(function appearButton() {
  let button = document.createElement('button');
  button.innerText = numberOfClicks;
  if (numberOfClicks > 0) {
    button.addEventListener('click', () => {
      if (won || lost) return;
      if (numberOfClicks === 1) {
        clicked[0] = true;
      }
      if (clicked.every(val => val)) {
        won = true;
        document.getElementById('status').innerText = 'you won!';
      }
      numberOfClicks--;
      button.innerText = numberOfClicks;
    });
    body.appendChild(button);
  }
  setTimeout(() => {
    if (won || lost) return;
    lost = true;
    document.getElementById('status').innerText = 'you lost!';
  }, 1500);
}, Math.floor(Math.random() * 5000 + 500));
