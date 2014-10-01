$(document).ready(function() {

	$(window).load(function() {
		newGame();
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Run the game ---*/
  	$(".button").click(function() { 
  		validateEntry();
  		guessCount();
  		$("input#userGuess").val("");
  	});

  	$("body").on("keypress", function(event) {
		if(event.which == '13') {
			event.preventDefault();
			validateEntry();
	  		guessCount();
	  		$("input#userGuess").val("");
		}
	});

  	/*--- Start new game ---*/
  	$(".new").click(function() {
  		newGame();
  	});

});

var randomNumber;
var enteredNumber;
var randomToEnteredDiff;

/*--- Validate user entry ---*/
var validateEntry = function () {
	var numVal = $('#userGuess').val();

	if (numVal === "") {
		alert("Please enter a number");
	}
	else if (numVal < 0) {
		alert("Please enter a positive number");
	}
	else if (numVal > 100) {
		alert("Please enter a number between 1 and 100");
	}
	else if (!numVal.match(/^\d+$/)){
		alert("Please enter a number between 1 and 100");
	}
	else {
		runHotOrCold();
	}
};

var generateRandomNumber = function() {
	var randomNumber = Math.floor(Math.random() * 100);
	
	console.log(randomNumber);
	return randomNumber;
};

/*--- Start a new game ---*/
var newGame = function() {
	randomNumber = generateRandomNumber();
	$("#feedback").text("Make your Guess!");
	$("input#userGuess").val("");
	$("span#count").text("0");
	$("#guessList").empty();
};

/*--- Amount of guesses by user ---*/
var guessCount = function() {
	var countGuesses = $("#guessList li").length;
	$("#count").text(countGuesses);
	return countGuesses;
};

/*--- Hot or Cold App ---*/
var runHotOrCold = function() {	

	enteredNumber = $("#userGuess").val();

	$("#guessList").append("<li>"+enteredNumber+"</li>");

	if (Math.abs(randomNumber-enteredNumber) >= 50) {
		$("#feedback").text("You are ice cold");
		guessCount();
	} 
	else if (Math.abs(randomNumber-enteredNumber) >= 30) {
		$("#feedback").text("You are cold");
		guessCount();
	}
	else if (Math.abs(randomNumber-enteredNumber) >= 20) {
		$("#feedback").text("You are warm");
		guessCount();
	}
	else if (Math.abs(randomNumber-enteredNumber) >= 10) {
		$("#feedback").text("You are hot");
		guessCount();
	}
	else if (Math.abs(randomNumber-enteredNumber) >= 1) {
		$("#feedback").text("You are very hot");
		guessCount();
	}
	else {
		$("#feedback").text("YOU ARE CORRECT!");
		guessCount();
		if(window.confirm("You got it right in " + guessCount() + " tries")) {
			newGame();
		}
	}
};