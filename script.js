function colorButton(id, color, blink) {
    this.color = color;
    this.id = id;
    this.blink = blink;//the blink function
    this.highlight = function() {
        document.getElementById(id).style.background = blink;
        setTimeout(function() {
            document.getElementById(id).style.background = color;
        }, 750);
    }
}

let buttons = [
    new colorButton(one, "red", "maroon"),
     new colorButton(two, "blue",  "navy"),
    new colorButton(three, "yellow", "orange"),
    new colorButton(four, "green", "brown"),
    
    ]
let runningRandom = [];
var noMatch = false;



    
    

    function randomButton(number) { //redid the random button function and made it way lets complicated
        for (i = 0; i < number; i++) {
           runningRandom.push(Math.floor(Math.random() * 4)); 
        }   
    }
    
    
    