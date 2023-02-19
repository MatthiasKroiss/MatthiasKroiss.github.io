
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
    .deleteChars(3)
    .typeString(';)')
    .pauseFor(2500)
    .deleteChars(2)
    .pauseFor(2500)
    .typeString('🥲')
    .pauseFor(2500)
    .deleteChars(2)
    .typeString('🤓')
    .pauseFor(2500)
    .deleteChars(2)
    .typeString('👍')
    .pauseFor(2500)
    .start();
