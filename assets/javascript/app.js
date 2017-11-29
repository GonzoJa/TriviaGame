// List of vars for the game.



var answeredCorrect = 0;
var answeredWrong = 0;
var notAnswered = 0;
var countdownElement = document.getElementById('countdown');
var end = new Date('2017-12-31');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;


//function to check if questions are answered correct
function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var correct = 0;

	if (question1 == "Finland") {
		correct++;
	}
	if (question2 == "New York") {
		correct++;
	}
	if (question3 == "Bush Senior") {
		correct++;
	}
	if (question4 == "China") {
		correct++;
	}
	if (question5 == "Yahoo") {
		correct++;
	}
	if (question6 == "David Beckham") {
		correct++;
	}
	if (question7 == "Kyoto Protocol") {
		correct++;
	}
	if (question8 == "Fossiliized dinosaur heart") {
		correct++;
	}
	if (question9 == "His heart") {
		correct++;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}


// My attemp to do a timer function.
function showRemaning(){
	var now = new Date();
	var distance = end - now;
	if(distance<0){
		clearInterval(timer);
		countdownElement.innerHtml = 'Time Up !!!'
		return;
	}
	var days = Math.floor(distance/_day);
	var hours = Math.floor((distance%_day) / _hour);
	var minutes = Math.floor((distance %_hour) / _minute);
	var second = Math.floor((distance % _minute) / _second);
	countdownElement.innerHtml = days + 'days';
	countdownElement.innerHtml += hours + 'hrs';
	countdownElement.innerHtml += minutes + 'mins';
	countdownElement.innerHtml += second + 'secs';
}	

timer = setInterval(showRemaning,1000);




// 1.first the screen is going to display press begin to start.
// 2.when the begin button is clicked a list of trivia question will appear.
// 3.user has a set amount of time to answer trivia questions.
// 4.when the time runs out another screen will display the questions answer correct, not correct and not answered.

