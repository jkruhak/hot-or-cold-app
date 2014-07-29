
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- Validate entered number is not higher than 100 ---*/
	$("#guessButton").on("click", validateNumber);


	/*--- Run game function ---*/
	$("#guessButton").on("click", runHotOrCold);
});

var randomNumber = Math.floor((Math.random() * 100) + 1);

/*--- Validate entered number ---*/
function validateNumber() {
	var numVal = $('#userGuess').val();
	if(numVal > 100) {
    	alert('Number should be less than 100');
    	return false;  
	}
}

/*--- Generate new number on page load ---*/
function generateNewNumber() {
	return randomNumber;
}

function newGame() {
	$("nav").on("click", ".new", function() {
		$("#feedback").text("Make your Guess!");
		$("input#userGuess").val("");
		$("span#count").text("0");
		$("#guessList").empty();
	});
}

/*--- Feedback to user & list add/count ---*/
function runHotOrCold() {
	
	var enteredNumber = document.getElementById("userGuess").value;

	$("#guessList").append("<li>"+enteredNumber+"</li>");
	
	var countGuesses = $("#guessList li").length;
	$("#count").text(countGuesses);


	if (enteredNumber > randomNumber) {
		$("#feedback").text("Try a lower number");
		return false;		
	}

	else if (enteredNumber < randomNumber) {
		$("#feedback").text("Try a higher number");
		return false;
	}

	else {
		$("#feedback").text("YOU ARE CORRECT!!");
		return false;
	}
}


