const jokes = require ('give-me-a-joke')
const cowsay = require('cowsay')
const colors = require ('colors')

// console.log(joke.rainbow)

jokes.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});
