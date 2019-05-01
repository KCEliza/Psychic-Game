// computer options to pick
var choice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// keeping score
var win = 0;
var lose = 0;
var guesses = 9;
//id's from html
var userKey = document.getElementById("userGuess");
var winHtml = document.getElementById("win");
var lossHtml = document.getElementById("loss");
var directions = document.getElementById("direction");
var guessesLeft = document.getElementById("guessLeft");
var letterKeyHtml = document.getElementById("userGuess");
var letterKey = [];

var compKey = choice[Math.floor(Math.random() * choice.length)];

document.onkeyup = function (event) {// block of code you want to run together
    var userGuess = event.key.toLowerCase();
 
    if (choice.indexOf(userGuess) > -1) {
        letterKey.push(userGuess);

        if (userGuess === compKey) {
            win++;
            guesses = 9;
            letterKey = [];
            compKey = choice[Math.floor(Math.random() * choice.length)];
        }
        else if (userGuess !== compKey && guesses > 1) {
            
            guesses--
            var letters = [userKey, userKey];
        }
        else {
            lose++;
            guesses = 9;
            letterKey = [];
            compKey = choice[Math.floor(Math.random() * choice.length)];
            //reset guesses left would you just call the initial variable for guesses here?
            // guesses = document.getElementById("guesses").value;
        }
        letterKeyHtml.textContent = letterKey;
        winHtml.textContent =  win;
        lossHtml.textContent =  lose;
        guessesLeft.textContent = guesses;
    }
    else {
        alert("Suck Less!");
    }
}
