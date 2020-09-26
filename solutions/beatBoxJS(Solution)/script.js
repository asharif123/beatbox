// each key has 2 properties: beat having unique sound and color that gets activated
let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#FF00FF", 70)
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("white", 71)
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#FF00FF", 72)
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#FF00FF", 74)
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#FFFFFF", 75),
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        button: new Button("#FFFFFF", 76),
    }
}

// lay audio when a key is clicked!
// run this function when a key is pressed!
// call select function here upon key press!
triggerBeat = (event) => {
    const keyCode = event.keyCode;
    // see if keyCode is inside beats object
    if (keyCode in beats) {
        let keyPress = beats[keyCode];
        keyPress.beat.play()
        keyPress.button.select()
        // keyPress.button.deselect()

    }
}

// keyDown listener to trigger triggerBeat function when key is selected and listen on actual keypresses to trigger certain function
document.addEventListener('keydown', triggerBeat)
