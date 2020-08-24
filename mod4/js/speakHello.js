(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);