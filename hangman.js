//npm install prompt-sync
//npm install random-words
var randomWords = require('random-words');
const prompt = require('prompt-sync')();
let word = "";//prompt("input your word here: ");
//let wordarr = 0
let blank = []
let alr = new Set();
const guessTotal = 27
let guessNum = 1
gallows = ["\n\
______\n\
|    | \n\
|    \n\
|   \n\
|   \n\
L_____ \n\
\n\
", "\n\
______\n\
|    |\n\
|    O\n\
|   \n\
|   \n\
L_____\n\
\n\
", "\n\
______\n\
|    |\n\
|    O\n\
|    |\n\
|\n\
L_____\n\
\n\
", "\n\
______\n\
|    |\n\
|    O\n\
|   /|\n\
|    \n\
L_____\n\
\n\
", "\n\
______\n\
|    |\n\
|    O\n\
|   /|\\\n\
|    \n\
L_____\n\
\n\
", "\n\
______\n\
|    |\n\
|    O\n\
|   /|\\\n\
|    /\n\
L_____\n\
\n\
", "\n\
______\n\
|    |\n\
|    O\n\
|   /|\\\n\
|    /\\\n\
L_____\n\
\n\
"]
indgal = 0
let guess = ""
let i = 0

word = randomWords()//prompt('input your word: ')
for (let i = 0; i < word.length; i++) {
    blank.push("_")
}
console.log(gallows[indgal])
console.log(blank.join(""))
for (; guessNum <= guessTotal; guessNum++) {
    if (indgal >= gallows.length) {
        console.log("you lost! :(")
        return 0;
    }
    guess = prompt(`what is your guess? (${guessNum}/${guessTotal}) `)
    let corr = false
    if (guess.length == 1) {
        if (alr.has(guess)){
            guessNum--
            console.log("You've already guessed that letter.")
            continue
        }
        for (let j = 0; j < word.length; j++) {
            if (word[j] == guess) {
                blank[j] = word[j]
                corr = true
            }
        }
        if (corr == false) {
            indgal++
            alr.add(guess)
        }
        if (indgal >= gallows.length) {

            console.log("you lost! :(")
            console.log("the word was:", word)
            return 0;
        }
        console.log(gallows[indgal])
        console.log(blank.join(""))
        console.log("guesses:", Array.from(alr.values()).join(" "))
        if (blank.join("") == word) {
            console.log("congratulations! you won!")
            break;
        }
    }
    else {
        break;
    }
}
if (guessNum > guessTotal) {
    console.log("\"Insanity is doing the same thing over and over and expecting different results.\" \n -Albert Einstein \n", "you lose!")
}
return 0;