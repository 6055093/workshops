let body = document.querySelector('body');
let won = false;
let lost = false;
let clicked = [false];
let button = document.createElement('button');
button.innerText = 'Click me!';
let i = 0;
button.addEventListener('click', () => {
  if (won || lost) return;
  if (i === 1) {
    button.innerText = 'One last time!';
    return i++;
  }
  if (i >= 2) {
    clicked[0] = true;
  }
  if (clicked.every(val => val)) {
    won = true;
    document.getElementById('status').innerText = 'you won!';
  } else {
    i++;
    button.innerText = 'Click again!';
  }
});
body.appendChild(button);

setTimeout(() => {
  if (won || lost) return;
  lost = true;
  document.getElementById('status').innerText = 'you lost!';
}, 500);
