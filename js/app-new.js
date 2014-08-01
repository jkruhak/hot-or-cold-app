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

  	$(".button").click(runHotOrCold);

  	$(".new").click(newGame);

});

var randomNumber = Math.floor(Math.random() * 100 + 1);

/*--- Start a new game ---*/
var newGame = function() {
	$(".clearfix").on("click", ".new", function() {
		//clear random number and re-generate new one
		
		$("#feedback").text("Make your Guess!");
		$("input#userGuess").val("");
		$("span#count").text("0");
		$("#guessList").empty();
		generateNumber();

	});
};



//random number function
var generateNumber = function() {
	console.log(randomNumber);
	return randomNumber;
};

//runGame function
var runHotOrCold = function() {
	//console.log(generateNumber());

	var enteredNumber = Math.floor(document.getElementById("userGuess").value);
	//var randomNumber = generateNewNumber();
	console.log("entered number" + enteredNumber);
	console.log("random number" + randomNumber);

	var randomToEnteredDiff = randomNumber-enteredNumber;
	//var randomToEnteredDiffConv = Math.floor(randomToEnteredDiff);
	//var enteredToRandomDiff = Math.abs(randomToEnteredDiff);
	console.log("difference random to entered" + randomToEnteredDiff);
	//console.log("difference entered to random" + enteredToRandomDiff);


	if (randomToEnteredDiff >= 0) {
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

	} else {
		var converted = Math.abs(randomToEnteredDiff);

		console.log("the number was negative" + converted);

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
		
	}
};
