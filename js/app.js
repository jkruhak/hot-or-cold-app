
$(document).ready(function() {

	$(window).load(function() {
		generateNewNumber();
	});
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- Validate entered number is not higher than 100 ---*/
	//$("#guessButton").on("click", validateNumber);


	/*--- Run game function ---*/
	$("#guessButton").on("click", runHotOrCold);

	$(".new").on("click", newGame);
});



/*--- Validate entered number ---*/
var validateNumber = function() {
	var numVal = $('#userGuess').val();
	if (numVal > 100) {
    	alert('Number should be less than 100');
    	return true;  
	}
};

/*--- Generate new number on page load ---*/
var generateNewNumber = function() {

	return Math.floor(Math.random() * 100 + 1);
};

/*--- Start a new game ---*/
function newGame() {
	$(".clearfix").on("click", ".new", function() {
		generateNewNumber;
		$("#feedback").text("Make your Guess!");
		$("input#userGuess").val("");
		$("span#count").text("0");
		$("#guessList").empty();

	});
};

/*--- Feedback to user & list add/count ---*/

var runHotOrCold = function() {

	
	var enteredNumber = Math.floor(document.getElementById("userGuess").value);
	var randomNumber = generateNewNumber();
	console.log("entered number" + enteredNumber);
	console.log("random number" + randomNumber);
	
	$("#guessList").append("<li>"+enteredNumber+"</li>");
	
	var countGuesses = $("#guessList li").length;
	$("#count").text(countGuesses);

	var fiftyDifference = randomNumber-enteredNumber;
	var fiftyDifferenceConToInt = Math.floor(fiftyDifference);
	console.log("difference" + fiftyDifference);


	if (enteredNumber > randomNumber) {
		$("#feedback").text("Try a lower number");
		
	}

	else if (enteredNumber < randomNumber) {
		$("#feedback").text("Try a higher number");
	
	}

	else {
		$("#feedback").text("YOU ARE CORRECT!!");
	
	}
/*

	if (randomNumber-enteredNumber >= 50 && randomNumber-enteredNumber <= 50) {
		$("#feedback").text("You are ice cold");
		return false;
	}


	else {
		$("#feedback").text("YOU ARE CORRECT!");
		return false;
	}
*/
};