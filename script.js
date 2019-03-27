class SimonButton {
  constructor(id, color, blink) {
    this.id = id;
    this.blink = blink;
    this.color = color;
    this.flash = function() {
      document.getElementById(id).style.background = blink;
      setTimeout(function() {
        document.getElementById(id).style.background = color;
      }, 250);
    };
  }
}

let colorButtons = [
  new SimonButton('one', 'red', 'white'),
  new SimonButton('two', 'blue', 'white'),
  new SimonButton('three', 'yellow', 'white'),
  new SimonButton('four', 'green', 'white'),
];

let runningRandom = [];
let round = 0;
let randomCount = 0;
let userTurn = false;
playing = false;

document.getElementById('start').onclick = function() {
  reset();
  playing = true;
  randomGenerator();
};

for (var i = 0; i < colorButtons.length; i++) {
  document.getElementById(colorButtons[i].id).onclick = function() {
    if (colorButtons[runningRandom[randomCount++]].id != this.id) {
      gameOver();
    }
    if (randomCount === runningRandom.length) {
      randomCount = 0;
      randomGenerator();
    }
  };
}

function randomGenerator() {
  randomButton(1);
  showBlinks();
  console.log(showBlinks);
}

function reset() {
  runningRandom = [];
  round = 0;
  randomCount = 0;
  playing = false;
}

function gameOver() {
  alert('You lost! work on your memory.');
  playing = false;
  reset();
}
function randomButton(number) {
  for (i = 0; i < number; i++) {
    runningRandom.push(Math.floor(Math.random() * 4));
  }
}

function showBlinks() {
  var i = 0;
  playPattern();

  function playPattern() {
    setTimeout(function() {
      colorButtons[runningRandom[i++]].flash();
      if (i < runningRandom.length) {
        playPattern();
      }
    }, 1000);
  }
}
