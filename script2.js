
var match = function() {
  // random choice
  let x = Math.floor(Math.random() * 4) + 1;
  console.log(x);

  if (x == 1) {
    alert('alpha');
  } else if (x == 2) {
    alert('beta');
  } else if (x == 3) {
    alert('gamma');
  }else if (x == 4) {
    alert('delta');
  }
console.log(x)

// user input 
let userInput = prompt(x)
//console.log(userInput);

if (userInput == 'alpha') {
  console.log(userInput = 1);
} else if (userInput == 'beta') {
  console.log(userInput = 2);
} else if (userInput == 'gamma') {
  console.log(userInput = 3);
}else if (userInput == 'delta') {
  console.log(userInput = 4);
}

  return {
    "x": x,
    "userInput": userInput
  };
}

/* Compare */
function result(x, userInput) {
  if (x == 2 && userInput == 1) {
    console.log('incorrect!');
    return false;
  }else if (x == 2 && userInput == 3) {
    console.log('incorrect!');
    return false;
  }else if (x == 2 && userInput == 4) {
    console.log('incorrect!');
    return false;
  }else if (x == 3 && userInput == 1) {
    console.log('incorrect!');
    return false;
  }else if (x == 3 && userInput == 2) {
    console.log('incorrect!');
    return false;
  }else if (x == 3 && userInput == 4) {
    console.log('incorrect!');
    return false;
  }else if (x == 4 && userInput == 1) {
    console.log('incorrect!');
    return false;
  }else if (x == 4 && userInput == 2) {
    console.log('incorrect!');
    return false;
  }else if (x == 4 && userInput == 3) {
    console.log('incorrect!');
    return false;
  }else if (x == 1 && userInput == 1) {
    console.log('correct!');
    return true;
  } else if (x == 2 && userInput == 2) {
    console.log('correct!');
    return true;
  }else if (x == 3 && userInput == 3) {
    console.log('correct!');
    return true;
   } else if (x == 4 && userInput == 4) {
    console.log('correct!');
    return true;
  } else if (x == 1 && userInput == 2) {
    console.log('incorrect!')
    return false;
  }else if (x == 1 && userInput == 3) {
    console.log('incorrect!')
    return false;
  } else if (x == 1 && userInput == 4) {
    console.log('incorrect!')
    return false;
  } 
    
}
// learned to create rounds here https://stackoverflow.com/questions/48529536/creating-rounds-for-rock-paper-scissor-game-with-javascript
function round1() {
  for (let i = 1; i <= 1; i++) {
    var opt = match();
    result(opt.x, opt.userInput);
    
  }
}
function round2() {
    for (let i = 1; i <= 2; i++) {
      var opt = match();
      result(opt.x, opt.userInput);
    }
  }

round1();


