const alpha = document.querySelector('.alpha')
const beta = document.querySelector('.beta')
const gamma = document.querySelector('.gamma')
const delta = document.querySelector('.delta')

let buttons = ['alpha', 'beta', 'gamma', 'delta']
let userInput = []; //empty array clicked button will be pushed into
let gameArr = []; //empty array random button will be pushed into

let random = buttons[Math.floor(Math.random()*buttons.length)]
let userClick = [];
console.log(random)


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

/*
let randomFunction = function(){
    gameArr.push(random)
}
console.log(gameArr)
let mimickFunction = function(){
    userInput.push(userClick)
}
randomFunction()
mimickFunction()
*/
gameArr.push(random)

const game = document.querySelector('.game')
game.addEventListener('click', function(evt){
        userInput.push(userClick)
        if (userClick[0] === gameArr[0]){
            console.log('yes!')
        }
        else if(userClick[0] !== gameArr[0]){
            console.log('no')
        }
    })
    



 /*let firstCompare = function(){
    if (gameArr === userClick){
        return ("congrats!")
        }else{
            return ("you lose!")
        }
    }*/



/*function arraysEqual(gameArr, userClick) {
    if(gameArr[0] === userClick[0]){
        console.log("ya")}else{
            console.log('no')
        }
}
console.log(arraysEqual())
*/



/*
function compareValue(gameArr, userClick) {
    if (gameArr === userClick) return true;
    for (var i = gameArr.length-1; i>=0;i--) {
    
    if (gameArr[i] !== userClick[i]) return false;
    }
    return true;
    }

    console.log(compareValue())
 */   



    console.log(gameArr[0])







/* var random = items[Math.floor(Math.random()*items.length)]
https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array




    if (i=0, i < 1, i++){
        gameArr() === userClick()
         console.log('Yep!')
    }else{
        console.log('no')
    }

*/