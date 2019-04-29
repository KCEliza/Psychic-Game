var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;
var lose = 0;

var userText = document.getElementById("userGuess");
var compText = document.getElementById("compGuess");
var winHtml = document.getElementById("win");
var lossHtml = document.getElementById("loss");

document.onkeyup = function (event){

    var userKey = event.key;
    var compKey = compChoice[Math.floor(Math.random() * compChoice.length)];

    if(userKey === "a"){
        userText.textContent = ("User guess: " + userKey);
    }
}