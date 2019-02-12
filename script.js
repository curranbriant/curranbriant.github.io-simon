class colorButton {
    constructor(id, blink, color ) {
        this.id = id;
        this.blink = blink//the blink function
        this.color = color;

    }
    /* doesnt work
    flash() {
        document.getElementById(id).style.background = blink;
        setTimeout(function() {
            document.getElementById(id).classList.toggle('.active')
            
        }, 750);
 */
    }


let buttons = [
    new colorButton(one, "red", "maroon"),
     new colorButton(two, "blue",  "navy"),
    new colorButton(three, "yellow", "orange"),
    new colorButton(four, "green", "brown"),
    
    ];
let runningRandom = [];
start = 0;
playing = false;





    document.getElementById("newGame").onclick = function() {
        playing = true;
        randomGenerator();
    }


    for (let i = 0; i < buttons.length; i++) {
        //buttonIndex.addEventListener("click", function(){
            
                    if (start === playPattern.length) {
                        start = 0;
                        randomGenerator();
                    }
                }


            function randomGenerator() {
                randomButton(1);
                playPattern();
                console.log(runningRandom[0])
            };
            function randomButton(j) { //redid the random button function and made it way lets complicated
                for (i = 0; i < j; i++) {
                runningRandom.push(Math.floor(Math.random()*1)+1)
                }}
                




    function playPattern() { //ryan gave me this idea
            var i = 0;
            showBlinks();
        }
        function showBlinks() {
        setTimeout(function() {
            for (var i =0; i > runningRandom; i++){
            if (i < runningRandom.length) { //zakk gave me this idea when we met day 2 
                console.log(colorButton[runningRandom[i]])
                colorButton[runningRandom[i]].flash();
                playPattern();
            } }
        
        }, 1000);
        
    }

    




