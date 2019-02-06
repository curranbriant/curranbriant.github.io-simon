const alpha = document.querySelector('.alpha')
const beta = document.querySelector('.beta')
const gamma = document.querySelector('.gamma')
const delta = document.querySelector('.delta')
const game = document.querySelector('.game')
let buttons = ['alpha', 'beta', 'gamma', 'delta']
let userClick = []; //pushes click event into empty array
let userInput = []; //empty array clicked button will be pushed into
let runningRandom = []; //random buttons will be pushed here
let random = buttons[Math.floor((Math.random()* 2)+ 1)] //selects random button
checkMatch = true; // boolean to check if random button array matches user input array



alpha.addEventListener('click', function(evt){
    userClick.push('alpha')
    console.log('alpha')
})
beta.addEventListener('click', function(evt){
    userClick.push('beta')
    console.log('beta')
})
gamma.addEventListener('click', function(evt){
    userClick.push('gamma')
    console.log('gamma')
})
delta.addEventListener('click', function(evt){
    userClick.push('delta')
    console.log('delta')
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
    })
    









/* var random = items[Math.floor(Math.random()*items.length)]
https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    if (i=0, i < 1, i++){
        gameArr() === userClick()
         console.log('Yep!')
    }else{
        console.log('no')
    }
*/
