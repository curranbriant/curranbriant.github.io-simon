const red = document.querySelector('.red')//red button
const blue = document.querySelector('.blue')//blue button
const yellow = document.querySelector('.yellow')//yellow button
const green = document.querySelector('.green')//green button
const game = document.querySelector('.game')//game board
const active = document.querySelector('.active')
let activeRed = document.querySelector(".red.active");
let activeBlue = document.querySelector(".blue.active");
let activeYellow = document.querySelector(".red.active");
let activeGreen = document.querySelector(".red.active");
let buttons = ['red', 'blue', 'yellow', 'green']
let userClick = []; //pushes click event into empty array
let userInput = []; //empty array clicked button will be pushed into
let runningRandom = []; //random buttons will be pushed here
let random;
checkMatch = true; // boolean to check if random button array matches user input array

function colorButton(id, color) {
    this.id = id;
    this.color = color;
}

let redButton = new colorButton(1, "red");
let blueButton = new colorButton(2, "blue");
let yellowButton = new colorButton(3, "yellow");
let greenButton = new colorButton(4, "green");

function randomButton() {
    let random = Math.floor((Math.random() * 4) + 1);
    if (random = 'red') {
      runningRandom.push('red');
    }else if(random = 'blue'){
        runningRandom.push('blue');
    }else if(random = 'yellow'){
        runningRandom.push('yellow');
    }else if (random = 'green'){
        runningRandom.push('green');
    }
    console.log(random)//see output of random function above
    //console.log(runningRandom)// see if it actually pushed into array
}
randomButton()


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
    if (userClick[0] === runningRandom[0]){
        console.log('yes!')
        checkMatch = true;

        game.removeEventListener('click', function(evt){
        })
        //randomButton()
        console.log(runningRandom)
    }
    else if(userClick[0] !== runningRandom[0]){
        console.log('no')
        checkMatch = false;
        
    }
    if (checkMatch = true){
        game.addEventListener('click', function(evt){
            userInput.push(userClick)
    if (userClick[1] === runningRandom[1]){
        console.log('YA!')
        checkMatch = true;
        game.removeEventListener('click', function(evt){
        })
    }
    if(userClick[1] !== runningRandom[1]){
            console.log('no')
            checkMatch = false;
        }
    })
}
})

