var buttons = document.querySelectorAll(".drum");
for(var i=0; i< buttons.length ;i++){
    buttons[i].addEventListener("mousedown", function(){

        var key = this.innerHTML;

        chooser(key);
        flashKey(key);
    });
}

document.addEventListener("keydown", function(event){
    chooser(event.key);
    flashKey(event.key);
})

function chooser(key){
    switch (key) {
        case 'w':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
            
        case 'j':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
            
        case 'k':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        
        case 'l':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }       
}

function flashKey(key){
    //alert('pp')
    var currKey = document.querySelector("."+key);
    
    currKey.classList.add("class", "pressed");
    setTimeout(function(){
        currKey.classList.remove("pressed");
    }, 100)
}


