var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Exceptional Students')
    .pauseFor(2500)
    .deleteAll()
    .start();