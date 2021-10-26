var app = document.getElementById('header-text');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 35,
});

typewriter
  
  .typeString('Greetings All')
 .pauseFor(1000)
.deleteChars(13) 
  .typeString('My Name is Matthew Angel')
  .pauseFor(1000)
.deleteChars(26) 
  .pauseFor(1000)
  .typeString('Welcome to my page!')
  .pauseFor(1500)
  .deleteChars(26) 
  .start();