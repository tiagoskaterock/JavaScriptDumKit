let numberOfDrumButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function handleClick() {
        
        this.style.color = 'white';

    });
    
}





/*
let audio = new Audio('sounds/tom-1.mp3');
audio.play();
*/