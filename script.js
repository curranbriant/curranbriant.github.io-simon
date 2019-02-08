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
    new colorButton(one, "red", "white"),
     new colorButton(two, "blue",  "white"),
    new colorButton(three, "yellow", "white"),
    new colorButton(four, "green", "white"),
    
    ]

