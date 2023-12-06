

var audio = document.getElementById("myAudio");

// Ensure that the audio is ready to play
audio.addEventListener("canplaythrough", function () {
    // Play the audio
    audio.play();
});

// Fallback in case 'canplaythrough' event doesn't fire
window.addEventListener("load", function() {
    // Play the audio
    audio.play();
});