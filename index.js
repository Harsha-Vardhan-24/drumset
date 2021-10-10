var numberOfItems = document.querySelectorAll(".drum").length;
for(i=0; i<numberOfItems; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonPress = this.innerHTML;
        makeSound(buttonPress);
        buttonAnimation(buttonPress);
        
    })
 }
 
 document.addEventListener("keydown", function(key) {
    makeSound(key.key);
    buttonAnimation(key.key);
 })



function makeSound(key) {
    switch(key) {
            case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            
            case "a":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
            case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
            case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
            case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
            case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
            case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            default:
            alert("Please click on the drum!")
        }
}

function buttonAnimation(event) {
    var activebutton = document.querySelector("." + event);
    activebutton.classList.add("pressed");
    setTimeout(function() {
    activebutton.classList.remove("pressed");
    }, 100);
}