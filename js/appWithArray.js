	$(document).ready(function() {

	$(window).load(function() {
		generateRandomNumber();
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

var randomArray = function() {
	var array = [];
	for (var i = 1; i < 100; i++) {
		array.push(i);
	}
	return array;
};

var generateRandomNumber = function() {
	var arrayNumber = randomArray();
	var newRandomNumber = arrayNumber[Math.floor(Math.random() * 100)];
	return newRandomNumber;
};

var randomNumberGenerate = function() {
	var randomNumber = generateRandomNumber();
	return randomNumber;
};

/*--- Start a new game ---*/
var newGame = function() {
	
	$("#feedback").text("Make your Guess!");
	$("input#userGuess").val("");
	$("span#count").text("0");
	$("#guessList").empty();

	console.log(randomNumberGenerate());
	randomNumberGenerate();
	
};

/*--- Amount of guesses by user ---*/
var guessCount = function() {
	var countGuesses = $("#guessList li").length;
	$("#count").text(countGuesses);
};


console.log(generateRandomNumber());

var equation = function() {
	var number = randomNumberGenerate();
	
	var enteredNumber = Math.floor(document.getElementById("userGuess").value);
	var randomToEnteredDiff = number-enteredNumber;
	return randomToEnteredDiff;
};

/*--- Hot or Cold App ---*/
var runHotOrCold = function() {	
	
	var enteredNumber = Math.floor(document.getElementById("userGuess").value);
	var equationResult = randomNumberGenerate();



	var fromNegToPos = Math.abs(equationResult);
	
	
	$("#guessList").append("<li>"+enteredNumber+"</li>");

	guessCount();
	
	if (equationResult >= 0) {
		if (equationResult >= 50) {
			$("#feedback").text("You are ice cold");
			return false;
		}
		else if (equationResult >= 30) {
			$("#feedback").text("You are cold");
			return false;
		}
		else if (equationResult >= 20) {
			$("#feedback").text("You are warm");
			return false;
		}
		else if (equationResult >= 10) {
			$("#feedback").text("You are hot");
			return false;
		}
		else if (equationResult >= 1) {
			$("#feedback").text("You are very hot");
			return false;
		}
		else {
			$("#feedback").text("YOU ARE CORRECT!");
			return true;
		}

	} else {
		if (fromNegToPos >= 50) {
			$("#feedback").text("You are ice cold");
			return false;
		} 
		else if (fromNegToPos >= 30) {
			$("#feedback").text("You are cold");
			return false;
		}
		else if (fromNegToPos >= 20) {
			$("#feedback").text("You are warm");
			return false;
		}
		else if (fromNegToPos >= 10) {
			$("#feedback").text("You are hot");
			return false;
		}
		else if (fromNegToPos >= 1) {
			$("#feedback").text("You are very hot");
			return false;
		}
		else {
			$("#feedback").text("YOU ARE CORRECT!");
			return true;
		}
	}
};