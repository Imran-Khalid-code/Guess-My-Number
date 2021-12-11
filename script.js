'use strict'



document.querySelector('.guessNumber').addEventListener('click', () => {
	const userGuess = Number(document.querySelector('.guess').value )
	console.log(userGuess, typeof userGuess)

const guessRange = {
	from: 1, 
	to: 20
}


//set a random guess each time
	const secretGuess = Math.floor(Math.random() * 21)
	console.log(secretGuess);
///first need to check if there is a value
if(!userGuess){
	document.querySelector('.correctNumber').textContent = '🥺 No number!'
}else if(userGuess  && userGuess === secretGuess){
	document.querySelector('.correctNumber').textContent = '😆  Congratulations!'
}else if(userGuess != secretGuess){
	document.querySelector('.correctNumber').textContent = '🤭 keep trying!'
	document.querySelector('.score').textContent = 'we will reflect this change'
}


})




//need to set a secret number on each click - use Math random and then we can check with a condition statement if it matches: number between 0-20 - math floor round down so hence we need to choose 21. Math random itself would not give you the last number in your range so always pick an extra number if you want it to be included.


//problem need to reduce highscore if guess is incorrect by one each time & then if reaches 0 change message to stay game over

//problem is stop the number going below zero - knock this one first - possible solution either change it to onclick and make a posiitive and negative button and change its value that way or set a range on the input value.

//problem score also need to log highScore on every turn

//problem need to reset the values on the end, so when it wins = reset,when it gets to the cut off point it resets.


//make project a little bit more complex by adding a timeout/set interval logic.- delay the message slighlt to build up the suspense.