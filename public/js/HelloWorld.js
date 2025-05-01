const HELLO_WORLD_TITLE = document.querySelector('h1');
const HELLO_WORLD_TEXT = document.querySelector('p');
const HELLO_WORLD_LABEL = document.querySelector('label');
const date = new Date().toLocaleDateString('fr-FR');

HELLO_WORLD_TITLE.innerText = 'Hello World';
HELLO_WORLD_TEXT.innerText = 'This is a simple Hello World example using JavaScript.';
HELLO_WORLD_LABEL.innerText = `Voici la date d'aujourd'hui : ${date}`;
