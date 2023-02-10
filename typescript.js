
var app = document.getElementById('heading');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('😎')
    .pauseFor(2500)
    .deleteChars(2)
    .typeString(':D')
    .pauseFor(2500)
    .deleteChars(2)
    .typeString('ᓚᘏᗢ')
    .pauseFor(2500)
    .deleteChars(3)
    .typeString('🥲')
    .pauseFor(2500)
    .deleteChars(2)
    .typeString('🤓')
    .pauseFor(2500)
    .deleteChars(2)
    .typeString('👍')
    .pauseFor(2500)
    .start();
