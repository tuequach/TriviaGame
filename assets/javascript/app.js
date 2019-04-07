$(document).ready(function(){
var  trivia = [
        {
        question: "Who claims that he has worked on the Human Genome Project?",
        choice: ["Eugene", "Abraham", "Gareth", "Rosita"],
        answer: 0,
        img: "../images/genome.jpg"
        },
        {
        question: "Quote the person that said this 'In this life now, you kill or you die. Or you die and you kill'?",
        choice: ["Gareth", "Shane", "Rick", "The Govenor"],
        answer: 3,
        img: "assets/images/lifeordeath.jpg"
       },
       {
        question: "Who performs a C-section on Lori?",
        choice: ["Carol", "Hershel", "Beth", "Maggie"],
        answer: 3,
        img: "assets/images/csection.jpg"
       },
       {
        question: "Which game do Beth and Daryl play after a harrowing day at a country club?",
        choice: ["Never Have I ever", "Two Truths and A Lie", "Truth or Dare", "Twenty Questions"],
        answer: 0,
        img: "assets/images/games.jpg"
       },
       {
        question: "What is the name of the Govenor's Daughter?",
        choice: ["Penny", "Abby", "Lizzy", "Kerry"],
        answer: 0,
        img: "assets/images/daughter.jpg"
       },
       {
        question: "In season 1, a doctor says which country almost found a cure for the virus?",
        choice: ["USA", "Australia", "Japan", "France"],
        answer: 3,
        img: "assets/images/cure.jpg"
       },
       {
        question: "Which actor has a titanium eye socket in real life?",
        choice: ["Steven Yeun", "Andrew Lincoln", "Norman Reedus", "Jeffrey Dean Morgan"],
        answer: 2,
        img: "assets/images/titanium.jpg"
       },
       {
        question: "What fictional place is Rick originally from?",
        choice: ["Texas", "Georgia", "New York", "Neveda"],
        answer: 1,
        img: "assts/images/rick.jpg"
       }];
    
var  correct = 0;
var  incorrect = 0;
var  notAnswered = 0;
var  running = false;
var questionCount = trivia.length;
var index;
var  timer = 15;
var  intervalId;
var  userGuess ="";
var  pick;
var  holder = [];
var  newArray =[];


    //setting event listeners
$("#reset").hide();
   //on click to start the game
$("#play").on("click", function () {
       $("#play").hide();
       displayQuestion();
       runTimer();
       for (var  i=0; i < trivia.length; i++) {
           holder.push(trivia[i]);
       }
   })

   //starting timer
function runTimer () {
       if (!running) {
           intervalId = setInterval (decrement, 2000);
           running = true;
       }
   }

   //timer counting down 
function decrement () {
       $("#time").html("<h3>Time remaining: " + timer + "</h3>");
       timer --;

       //if time reaches 0
       if (timer === 0) {
           notAnswered++;
           stop();
           $("#answer").html("<p>Time's Up!, The correct answer is: " + pick.choice[pick.answer]  + "</p>");
           hidepictureture();
       }
   }


   //stopping timer 
function stop () {
       running = false;
       clearInterval(intervalId);
   }

// questions picked randomly from array?
function displayQuestion () {
    index = Math.floor(Math.random()*trivia.length);
    pick = trivia[index];

    $("#question").html("<h2>" + pick.question + "</h2>");
    for (var  i =0; i <pick.choice.length; i++) {
        var userChoice = $("<div>");
        userChoice.addClass("answerchoice");
        userChoice.html(pick.choice[i]);
        userChoice.attr("data-guess", i);
        $("#answer").append(userChoice);
    }

//on click that shows outcome for selected answer

$(".answerChoice").on("click", function () {
        userGuess = parseInt($(this).attr("data-guess"));

        if (userGuess === pick.answer) {
            stop ();
            correct++;
            userGuess ="";
            $("#answer").html("<p> Correct!</p>");
            hidepicture();
        }
        else {
            stop();
            incorrect++;
            userGuess="";
            $("#answer").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture ();
            }
        })
        }

function hidepicture () {
    $("#answer").append("<img src=" + pick.photo + ">");
    newArray.push(pick);
    trivia.splice(index,1);

    var  hiddenPic = setTimeout (function () {
        $("#answer").empty();
        timer=15;

    if ((incorrect + correct + notAnswered) === questionCount) {
        $("#question").empty();
		$("#question").html("<h3>Game Over!  Here's how you did: </h3>");
		$("#answer").append("<h4> Correct: " + correct + "</h4>" );
		$("#answer").append("<h4> Incorrect: " + incorrect + "</h4>" );
		$("#answer").append("<h4> Unanswered: " + notAnswered + "</h4>" );
		$("#reset").show();
		correct = 0;
		incorrect = 0;
        notAnswered = 0;
    
    } 
    else {
		runTimer();
		displayQuestion();
}
	}, 3000);
}

$("#reset").on("click", function() {
	$("#reset").hide();
	$("#answer").empty();
	$("#question").empty();
	for(var i = 0; i < holder.length; i++) {
		trivia.push(holder[i]);
	}
	    runTimer();
	    displayQuestion();

})

})