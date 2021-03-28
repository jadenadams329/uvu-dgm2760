
document.querySelector('#company').innerHTML = "Guessing Game";

document.querySelector('header > h2').innerText = "Can you guess right?";

document.querySelector('#pageTitle').innerHTML = "High/Low Guessing Game";

document.querySelector('#instruction').innerHTML = "Instructions:";

let correctNumber = Math.floor(Math.random() * 15);
let guessed = false
let totalGuesses = 0
let gamerGuess = 0
const feedBack = document.querySelector('#feedback')
correctNumber += 1

function evalGuess(){
    totalGuesses += 1 //total guesses
    gamerGuess = document.querySelector('#guess').value

    if (gamerGuess == correctNumber){
        
        feedBack.innerText = 'You Win!!!'
        giveAward();

    } else if(gamerGuess > correctNumber && gamerGuess < 16) {

        feedBack.innerText = 'Too high, try again'

    } else if (gamerGuess < correctNumber && gamerGuess > 0){

        feedBack.innerText = 'Too low, try again'

    } else {

        feedBack.innerText = 'Please choose a number between 1 and 15'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward(){

    let imagePath = 'images/yellow.png'

    switch(totalGuesses){
        case 1:
        case 2:
        case 3:
            imagePath = 'images/blue.png'
            console.log('Blue')
            break;

        case 4:
        case 5:
        case 6:
            imagePath = 'images/red.png'
            console.log('Red')
            break;  
    }
    
    const awardImage = document.createElement('img') //Creates <img> element
    awardImage.setAttribute('src', imagePath)
    
    const ribbon = document.querySelector('#ribbon')

    if(ribbon.hasChildNodes()){

        feedBack.innerText = 'Please refresh the page'

    }else{

        ribbon.appendChild(awardImage)

    }

}