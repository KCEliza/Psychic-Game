// computer options to pick
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// keeping score
var win = 0;
var lose = 0;
var guesses = 9;
//id's from html
var userText = document.getElementById("userGuess");
var winHtml = document.getElementById("win");
var lossHtml = document.getElementById("loss");
var directions = document.getElementById("direction");
var guessesLeft = document.getElementById("guessLeft");
//randomize the computer choice



document.onkeyup = function (event) {
    var compKey = compChoice[Math.floor(Math.random() * compChoice.length)];

    var userKey = event.key;
    if (userKey === "a" || userKey === "b" || userKey === "c" ||
        userKey === "d" || userKey === "e" || userKey === "f" ||
        userKey === "g" || userKey === "h" || userKey === "i" ||
        userKey === "j" || userKey === "k" || userKey === "l" ||
        userKey === "m" || userKey === "n" || userKey === "o" ||
        userKey === "p" || userKey === "q" || userKey === "r" ||
        userKey === "s" || userKey === "t" || userKey === "u" ||
        userKey === "v" || userKey === "w" || userKey === "x" ||
        userKey === "y" || userKey === "z") {
        console.log(userKey);
        console.log(guesses);
        if(userKey === compKey){
            win++
            console.log(win);
        }
        else if(userKey !== compKey){
            guesses--
            console.log(guesses);
            //NEED TO ADD A FOR LOOP TO STEP IN HERE SOME HOW
            if(guesses === 0){
                guesses = 9
                lose++
            }
        }
    }
    else {
    alert("Choose a letter to play!");
}


}