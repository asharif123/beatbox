// beat class takes in an audio file
// initialize audio file with hyperlink and play the audio file
// let test = new Audio("")
// test.play();
class Beat {

    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
        
        
        
    }

    // function to play audio
    play = () => {
        // ensures we can click button many times!
        this.audio.currentTime = 0 
        this.audio.play()
    }

}

// keeps track of button color and changes to new color and show glow

class Button {

    constructor(color, keyCode) {
        this.color = color
        this.keyCode = keyCode
        // save element from the id that we grab from HTML file (note: keyCode -> html id for each key)
        // grab button from html so we can use it for diff features (styling, adding color, etc.)
        this.element = document.getElementById(keyCode)
        // call function to set color for each element and set border color
        this.setButtonColorInHTML();
        // this.select();
        this.setATransitionEndListener();

        

    }
// set button color based on color specified
    setButtonColorInHTML = () => {
        // set the border color
        this.element.style.borderColor = this.color;


        
    }

    // createTransitionEndListener = () => {

    // }
// select highlights the button background color when selected!
    select = () => {
        this.element.style.backgroundColor = this.color
        
        // adds box shadow around border with its corr color!
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`
        
    }
// remove backgnd color and shadow! !
    deselect = () => {

        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = "none";

    }
    // usetransisionend to remove transition once it ends

    setATransitionEndListener = () => {

        this.element.addEventListener('transitionend', () => {
            this.deselect();
        })
    }
}
