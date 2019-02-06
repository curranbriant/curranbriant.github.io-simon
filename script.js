const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const game = document.querySelector('.game')
let buttons = ['red', 'blue', 'yellow', 'green']
let userClick = []; //pushes click event into empty array
let userInput = []; //empty array clicked button will be pushed into
let runningRandom = []; //random buttons will be pushed here
let random = buttons[Math.floor((Math.random()* 2)+ 1)] //selects random button
checkMatch = true; // boolean to check if random button array matches user input array



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

function randomButton(){
    random = buttons[Math.floor((Math.random()* 4)+ 0)]
    runningRandom.push(random)//pushes random button into empty array
    return runningRandom
}
randomButton()

console.log(runningRandom)




game.addEventListener('click', function(evt){
        userInput.push(userClick)
        if (userClick[0] === runningRandom[0]){
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





var offset = 0;
(buttons).each(function(button){

  setTimeout(function(){
    console.log(button);
  }, 5000 + offset);    
 offset += 5000;
});
