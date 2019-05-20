class Text {
  // 1
  constructor(xPos, yPos, txt) {
    // 2
    let root = document.getElementById('app');
    let div = document.createElement('div'); // 3
    let subdiv = document.createElement('div');
    div.style.position = 'absolute'; // 3
    div.style.left = xPos; // 3
    div.style.top = yPos; // 3
    div.style.color = 'white'; // 3
    div.style.font = 'bold 20px Impact'; // 3
    div.style.zIndex = 2000; // 3
    div.id = 'scoreText';
    subdiv.style.position = 'absolute'; // 3
    subdiv.style.left = xPos; // 3
    subdiv.style.top = yPos + 20; // 3
    subdiv.style.color = 'white'; // 3
    subdiv.style.font = 'bold 20px Impact'; // 3
    subdiv.style.zIndex = 2000; // 3
    subdiv.id = 'scoreNumber';
    root.appendChild(subdiv); // 3
    root.appendChild(div);
    this.domElement = div; // 3
    update(txt);
  } // 2 // 4
} // 1
function update(txt) {
  // 4
  document.getElementById('scoreText').innerText = txt; // 4
  document.getElementById('scoreNumber').innerText = 0;
}

let score = new Text(275, 30, 'Score:');
console.log(score);

function updateScore() {
  if (MAX_ENEMIES === 1) {
    document.getElementById('scoreNumber').innerText =
      Number(document.getElementById('scoreNumber').innerText) + 1;
  }
  if (MAX_ENEMIES === 2) {
    document.getElementById('scoreNumber').innerText =
      Number(document.getElementById('scoreNumber').innerText) + 2;
  }
  if (MAX_ENEMIES === 3) {
    document.getElementById('scoreNumber').innerText =
      Number(document.getElementById('scoreNumber').innerText) + 3;
  }
  if (MAX_ENEMIES === 4) {
    document.getElementById('scoreNumber').innerText =
      Number(document.getElementById('scoreNumber').innerText) + 4;
  }
  if (MAX_ENEMIES === 5) {
    document.getElementById('scoreNumber').innerText =
      Number(document.getElementById('scoreNumber').innerText) + 5;
  }
}
/* meta
({
    text: {
        1: `This class is not used in the project yet. You will use it in one of the
        homework questions  `,
        2: `The constructor has three parameters. Here is an example of how you would create an instance
        of this class
        
\`\`\`javascript
        new Text(theRoot, 200, 200)
\`\`\`
        `,
        3: `We create a DOM element, set its CSS attributes then append it to the parent DOM element. We also
        set the \`domElement\` property of the instance to the newly created DOM element so we can update it later `,
        4: `This method is used to update the text displayed in the DOM element`

    }
})
*/
