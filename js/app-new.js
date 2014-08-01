$(document).ready(function() {

	$(window).load(function() {
		generateNumber();
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
  	$(".button").click(validateEntry);

  	/*--- Start new game ---*/
  	$(".new").click(newGame);

});

var randomNumber = Math.floor(Math.random() * 100 + 1);

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

/*--- Start a new game ---*/
var newGame = function() {

	$("#feedback").text("Make your Guess!");
	$("input#userGuess").val("");
	$("span#count").text("0");
	$("#guessList").empty();
};

/*--- Generate random number ---*/
var generateNumber = function() {
	var newNumber = randomNumber;
	console.log(newNumber);
	return newNumber;
};

/*--- Amount of guesses by user ---*/
var guessCount = function() {
	var countGuesses = $("#guessList li").length;
	$("#count").text(countGuesses);
}

var greaterThanZero = function() {

	var enteredNumber = Math.floor(document.getElementById("userGuess").value);
	var randomToEnteredDiff = randomNumber-enteredNumber;

	if (randomToEnteredDiff >= 50) {
		$("#feedback").text("You are ice cold");
		return false;
	}
	else if (randomToEnteredDiff >= 30) {
		$("#feedback").text("You are cold");
		return false;
	}
	else if (randomToEnteredDiff >= 20) {
		$("#feedback").text("You are warm");
		return false;
	}
	else if (randomToEnteredDiff >= 10) {
		$("#feedback").text("You are hot");
		return false;
	}
	else if (randomToEnteredDiff >= 1) {
		$("#feedback").text("You are very hot");
		return false;
	}
	else {
		$("#feedback").text("YOU ARE CORRECT!");
		return true;
	}
};

var lessThanZero = function() {

	var enteredNumber = Math.floor(document.getElementById("userGuess").value);
	var randomToEnteredDiff = randomNumber-enteredNumber;

	var converted = Math.abs(randomToEnteredDiff);

	if (converted >= 50) {
		$("#feedback").text("You are ice cold");
		return false;
	} 
	else if (converted >= 30) {
		$("#feedback").text("You are cold");
		return false;
	}
	else if (converted >= 20) {
		$("#feedback").text("You are warm");
		return false;
	}
	else if (converted >= 10) {
		$("#feedback").text("You are hot");
		return false;
	}
	else if (converted >= 1) {
		$("#feedback").text("You are very hot");
		return false;
	}
	else {
		$("#feedback").text("YOU ARE CORRECT!");
		return true;
	}	
};

/*--- Hot or Cold App ---*/
var runHotOrCold = function() {

	var enteredNumber = Math.floor(document.getElementById("userGuess").value);
	var randomToEnteredDiff = randomNumber-enteredNumber;
	
	$("#guessList").append("<li>"+enteredNumber+"</li>");

	guessCount();
	
	if (randomToEnteredDiff >= 0) {
		greaterThanZero();

	} else {
		lessThanZero();
	}
};
