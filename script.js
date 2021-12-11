'use strict'

//set a random guess each time, this needs to be outside the call because we dont want the secret number to change everytime the user clicks the button
const secretGuess = Math.trunc(Math.random() * 20) + 1
// console.log(secretGuess);
//set this to the mystery box on the page:
document.querySelector('.gameResult').textContent = secretGuess



///make a variable that we can link to the score and decrement if the user gets the wrong answer: We want ot set this outsie of the DOM.

let gameScore = 20



document.querySelector('.guessNumber').addEventListener('click', () => {
	const userGuess = Number(document.querySelector('.guess').value )
	console.log(userGuess, typeof userGuess)


//function for too high or to low : then convert into a ternary operator:




///first need to check if there is a value
if(!userGuess){
	document.querySelector('.correctNumber').textContent = '🥺 No number!'

//when player wins	
}else if(userGuess === secretGuess){
	document.querySelector('.correctNumber').textContent = '😆  Congratulations!'
	document.querySelector('body').style.backgroundColor = 'pink'
	document.querySelector('.gameResult').style.width = '30rem'
	//link highScore to score:
	document.querySelector('.highScore').textContent = gameScore
//when guess is too high	
}else if(userGuess > secretGuess ){
	if(gameScore > 1){
		document.querySelector('.correctNumber').textContent = '🤭 Too High!'
		gameScore --
		document.querySelector('.score').textContent = gameScore 	
	}else {
		document.querySelector('.correctNumber').textContent = '🥺 You Lost!'
		document.querySelector('.score').textContent = 0
	}

//when guess is to low	
}else if(userGuess < secretGuess ){
	
	if(gameScore > 1){
		document.querySelector('.correctNumber').textContent = '🤭 Too Low!'
		gameScore --
		document.querySelector('.score').textContent = gameScore 	
	}else {
		document.querySelector('.correctNumber').textContent = '🥺 You Lost!'
		document.querySelector('.score').textContent = 0
	}
}

})







//problem need to reduce highscore if guess is incorrect by one each time & then if reaches 0 change message to stay game over

//problem is stop the number going below zero - knock this one first - possible solution either change it to onclick and make a posiitive and negative button and change its value that way or set a range on the input value.

//problem score also need to log highScore on every game finish

//problem need to reset the values on the end, so when it wins = reset,when it gets to the cut off point it resets.


//make project a little bit more complex by adding a timeout/set interval logic.- delay the message slighlt to build up the suspense.