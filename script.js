'use strict'

//set a random guess each time, this needs to be outside the call because we dont want the secret number to change everytime the user clicks the button
let secretGuess = Math.trunc(Math.random() * 20) + 1
// console.log(secretGuess);
//set this to the mystery box on the page:




///make a variable that we can link to the score and decrement if the user gets the wrong answer: We want ot set this outsie of the DOM.

let gameScore = 20
let highScore = 0

// document.querySelector('.guess').setAttribute('disabled','disabled')

let message =()=> {
	document.querySelector('.correctNumber').textContent = 'Well done 🙌 '
	// clearTimeout(message)
	// document.querySelector('.correctNumber').textContent = 'Play Again 😉 '

}






document.querySelector('.guessNumber').addEventListener('click', () => {
	const userGuess = Number(document.querySelector('.guess').value )
	console.log(userGuess, typeof userGuess)


//function to distill the amount of messages - refactoring

const displayMessage = (correctNumber) => {
	
	document.querySelector('.correctNumber').textContent = correctNumber
	
}



///first need to check if there is a value
if(!userGuess){
	// document.querySelector('.correctNumber').textContent = '🥺 No number!'
	displayMessage('🥺 No number!')

//when player wins	
}else if(userGuess === secretGuess){
	document.querySelector('.correctNumber').textContent = '😆  Congratulations!'
	displayMessage('😆  Congratulations!')
	document.querySelector('.gameResult').textContent = secretGuess
	setTimeout(message, 3000)
	document.querySelector('body').style.backgroundColor = 'pink'
	document.querySelector('.gameResult').style.width = '30rem'

	
	if(gameScore > highScore){
		highScore = gameScore
		document.querySelector('.highScore').textContent = highScore
	
	}
//clean up and refactor if duplicate if else statements

	}else if(userGuess !== secretGuess){
	if(gameScore > 1) { 
		document.querySelector('.correctNumber').textContent =
		userGuess > secretGuess ? '🤭 Too High!' : '🤭 Too Low!'
		gameScore --
		document.querySelector('.score').textContent = gameScore 

	}  else {
			// document.querySelector('.correctNumber').textContent = '🥺 You Lost!'
			displayMessage('😆  Congratulations!')
			document.querySelector('.score').textContent = 0
		}
	}

})

//when guess is to high
// }else if(userGuess > secretGuess ){
// 	if(gameScore > 1){
// 		document.querySelector('.correctNumber').textContent = '🤭 Too High!'
// 		gameScore --
// 		document.querySelector('.score').textContent = gameScore 	
// 	}else {
// 		document.querySelector('.correctNumber').textContent = '🥺 You Lost!'
// 		document.querySelector('.score').textContent = 0
// 	}

// //when guess is to low	
// }else if(userGuess < secretGuess ){
	
// 	if(gameScore > 1){
// 		document.querySelector('.correctNumber').textContent = '🤭 Too Low!'
// 		gameScore --
// 		document.querySelector('.score').textContent = gameScore 	
// 	}else {
// 		document.querySelector('.correctNumber').textContent = '🥺 You Lost!'
// 		document.querySelector('.score').textContent = 0
// 	}
// }




//outside of the logic do a reset with an annoymous function:
document.querySelector('.playAgain').addEventListener('click',()=>{
	gameScore = 20 //in our code but then we need to display it
	secretGuess = Math.trunc(Math.random() * 20) + 1 //reset the functions in our code and the global variable and then display them to the DOM:



	document.querySelector('.correctNumber').textContent = 'Guess Number'
	document.querySelector('.score').textContent = gameScore 
	document.querySelector('.gameResult').textContent = '?'
	document.querySelector('.guess').value = 0

	//restore background and width of box:
	document.querySelector('body').style.backgroundColor = ' greenyellow'
	document.querySelector('.gameResult').style.width = '15rem'


})


//2 things to improve in this game : stop below zero + using timeout correctly.