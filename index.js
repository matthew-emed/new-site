console.log("hello")


var app = document.querySelector('.header');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('My Name is Matthew Angel')
    .pauseFor(2500)
    .deleteAll()
    .start();