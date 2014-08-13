document.getElementById('rock').onclick = rock;
document.getElementById('paper').onclick= paper;
document.getElementById('scissors').onclick= scissor;
document.getElementById('clear').onclick= clear;

var myScore = 0;
var compScore = 0;
var gameNum = 0;

function comparison(humanVal){
	var humanPlay = humanVal;
	var computerPlay = getComputerPlay();
	gameNum += 1;
	document.getElementById('gamenum').innerHTML=("Game Number: " + makeString(gameNum));

	if (humanPlay == 'rock'){
		
		if (computerPlay =='rock'){
			document.getElementById('status').innerHTML="It's a tie!";
			sayPlay(humanPlay,computerPlay);
		}

		else if (computerPlay =='scissors'){
			myScore += 1;
			publishScore(myScore, compScore);
			document.getElementById('status').innerHTML="You win!";
			sayPlay(humanPlay,computerPlay);
		}

		else if (computerPlay == 'paper'){
			compScore += 1;
			publishScore(myScore, compScore);
			document.getElementById('status').innerHTML="Computer wins!";
			sayPlay(humanPlay,computerPlay);
		}
		
	}

	else if (humanPlay == 'scissors'){ 
		if (computerPlay == 'rock'){
			compScore += 1;
			publishScore(myScore, compScore);
			document.getElementById('status').innerHTML="Computer wins!";
			sayPlay(humanPlay,computerPlay);
		}
		else if (computerPlay == 'paper'){
			myScore += 1;
			publishScore(myScore, compScore);
			document.getElementById('status').innerHTML="You win!";
			sayPlay(humanPlay,computerPlay);
		}

		else if (computerPlay == 'scissors'){
			document.getElementById('status').innerHTML="It's a tie!";
			sayPlay(humanPlay,computerPlay);
		}
	}

	else if (humanPlay == 'paper'){
		if (computerPlay == 'paper'){
			document.getElementById('status').innerHTML="It's a tie!";
			sayPlay(humanPlay,computerPlay);
		}
		else if (computerPlay == 'rock'){
		myScore += 1;
		publishScore(myScore, compScore);
			document.getElementById('status').innerHTML="You win!";	
			sayPlay(humanPlay,computerPlay);
		}
		
		else if (computerPlay == 'scissors'){
		compScore += 1;
		publishScore(myScore, compScore);
			document.getElementById('status').innerHTML="Computer wins!";
			sayPlay(humanPlay,computerPlay);
		}
	}
}

function rock() {
	comparison('rock');
}

function paper() {
	comparison('paper');
}

function scissor() {
	comparison('scissors');
}

function clear() {
	myScore = 0;
	compScore = 0;
	gameNum = 0;
	document.getElementById('humanScore').innerHTML=makeString(myScore);
	document.getElementById('computerScore').innerHTML=makeString(compScore);
	document.getElementById('gamenum').innerHTML=("Game Number: " + makeString(gameNum));
}

function sayPlay(humplay,compplay){
	document.getElementById('compplay').innerHTML="Computer played "+ humplay;
	document.getElementById('humplay').innerHTML="You played "+ compplay;
}
 

function publishScore(human,comp){
	document.getElementById('humanScore').innerHTML=makeString(human);
	document.getElementById('computerScore').innerHTML=makeString(comp);
}

function getComputerPlay() { 
	var plays = ['rock', 'paper', 'scissors']; 
	var play = plays[Math.floor(Math.random()*plays.length)]; 
	return play; }

function makeString(score){
	return score+'';
}