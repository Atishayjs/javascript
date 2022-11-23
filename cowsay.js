const cowsay = require("cowsay");
const Quote = require('inspirational-quotes');
const temxt = Quote.getRandomQuote();
console.log(
    cowsay.say({
        text : temxt,
        e : "oo",
        T: "<3"
    })
)