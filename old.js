function colorButton(id, color) {
    this.id = id;
    this.color = color;
}

let redButton = new colorButton(1, "red");
let blueButton = new colorButton(2, "blue");
let yellowButton = new colorButton(3, "yellow");
let greenButton = new colorButton(4, "green");
let buttonArr = [redButton, blueButton, yellowButton, greenButton]

function randomButton() {
    let random = buttonArr[Math.floor((Math.random()* 4)+ 0)]
    runningRandom.push(random)
    console.log(runningRandom[0].color)
    return  runningRandom
}


/*



    if (random[0] = "red") {
      runningRandom.push('red');
    }else if(random = 'blue'){
        runningRandom.push('blue');
    }else if(random = 'yellow'){
        runningRandom.push('yellow');
    }else if (random = 'green'){
        runningRandom.push('green');
    }
    console.log(random)

    
}  
   function randomButton(){
    random = buttons[Math.floor((Math.random()* 4)+ 0)]
    runningRandom.push(random)//pushes random button into empty array
    return runningRandom
}
*/
 randomButton()
 
 
// on click the event/color is pushed into an array
red.addEventListener('click', function(evt){
    userClick.push('red')
    console.log('red')
})
blue.addEventListener('click', function(evt){
    userClick.push('blue')
    console.log('blue')
})
yellow.addEventListener('click', function(evt){
    userClick.push('yellow')
    console.log('yellow')
})
green.addEventListener('click', function(evt){
    userClick.push('green')
    console.log('green')
})

game.addEventListener('click', function(evt){
    userInput.push(userClick)
    if (userClick[0] === runningRandom[0].color){
        console.log('yes!')
        checkMatch = true;
        game.removeEventListener('click', function(evt){
        })
        randomButton()
        console.log(runningRandom)
    }
    else if(userClick[0] !== runningRandom[0]){
        console.log('no')
        checkMatch = false;
    }
})



var playPattern = red;

function clicky() {
  playPattern = setTimeout(function(){ alert("Hello"); }, 0);
}

function myStopFunction() {
  clearTimeout(playPattern);
}




/////