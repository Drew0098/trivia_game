var questions;
var answers; //choices
var time = 240; //seconds
var correctAnswers = 0;
var incorrectAnswers = 0;
var currentQuestion = 0;
var intervalId;

const myQuestions = [
  {
    question: "1. 4(2+3)=",
    answers: [
      " 9",
      " 11",
      " 20",
      " 25"
    ],
    correctAnswer: 2
  },
  {
    question: "2. 2(8/2)+(4x2)=",
    answers: [
      " 20",
      " 16",
      " 34",
      " 9"
    ],
    correctAnswer: 1
  },
  {
    question: "3. 4+6x8/2=",
    answers: [
      " 32",
      " 26",
      " 40",
      " 28"
    ],
    correctAnswer: 3
  },
  {
    question: "4. 4a+9=21. What is the value of a?",
    answers: [
      " 3",
      " 6",
      " 4",
      " 2"
    ],
    correctAnswer: 0
  },
  {
    question: "5. 4a(6/3)+7=71",
    answers: [
      " 8",
      " 2",
      " 6",
      " 3"
    ],
    correctAnswer: 0
   },
   {
    question: "6. 4*7+12/3=",
    answers: [
      " 54",
      " 28",
      " 32",
      " 43"
    ],
    correctAnswer: 2
  },
  {
    question: "7. 11/2+2*4=",
    answers: [
      " 14",
      " 13.5",
      " 14.5",
      " 15"
    ],
    correctAnswer: 1
  },
  {
    question: "8. 42/7(4+6)=",
    answers: [
      " 60",
      " 70",
      " 50",
      " 55"
    ],
    correctAnswer: 0
  },
  {
    question: "9. 12*12/4=",
    answers: [
      " 32",
      " 34",
      " 36",
      " 38"
    ],
    correctAnswer: 2
  },
  {
    question: "10. 420/4(8-3)",
    answers: [
      " 550",
      " 525",
      " 575",
      " 500"
    ],
    correctAnswer: 1
  }
 ];

begin();

function begin() {
  $('#begin').on('click', function(){
    $('#begin').remove();
    $('#results').empty();
    createQuestion(0);
    startTimer();
    setTimeout(function() {
      clearInterval(intervalId);
      showResults();
    }, 240000);
  });
}


function createQuestion(qNumber){
	$('#timer').html("Time Remaining: " + time);
	$('#question').html(myQuestions[qNumber].question);
	$('#answers').empty();
	myQuestions[qNumber].answers.forEach(function(element, i){
		var a = $('<li><input type="radio" value="' + i + '" name="dynradio" />' + element + '</li>')
		a.on('click', function(){
			if (myQuestions[qNumber].correctAnswer == i) {
				correctAnswers++;
			}
			else {
				incorrectAnswers++;
			}
			if (qNumber < 9) {
				createQuestion(qNumber + 1);
			}	
			else {
				clearInterval(intervalId);
				showResults();
			}
		})

		a.appendTo("#answers");
	});
}
function startTimer() {
  intervalId = setInterval(timeCountDown, 1000);
}
function timeCountDown() {
  time--;
  $('#timer').text("Time Remaining: " + time);
  if (time <= 0) {
	clearInterval(intervalId);
  }
}
function showResults() {
	$('#timer').empty();
	$('#question').empty();
	$('#answers').empty();
	$('#results').html("Correct Answers: " + correctAnswers + "<br>" + "Incorrect Ansers: " + incorrectAnswers);
  $('#button').html('<button id="tryAgain">Try Again</button>');
  $('#tryAgain').on('click', function() {
    $('#results').empty();
    $('#tryAgain').remove();
    correctAnswers = 0;
    incorrectAnswers = 0;
    time = 240;
    createQuestion(0);
    startTimer();
    setTimeout(function() {
    clearInterval(intervalId);
    showResults();
    }, 240000);
  })
}