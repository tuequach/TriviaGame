
//setting up array for the trivia
var MCU = [
    {
    question:"How many Infinity Stones are there in the Marvel Cinnematic Unniverse?",
    choice: ["Ten", "Five", "Six" ,"Four"],
    answer: 1, 
    image: assets/images/,
    },
    {
    question: "In Thor, What kind of doctor is Jane Foster?",
    choice: ["Geologist", "Astrophysicist", "Surgeon", "Psychologist"],
    answer: 1,
    image: assets/images/,
    },
    {
    question: "What is the name of Star-Lord's ship in Guardians of the Galaxy?",
    choice: ["Freedom", "Firebird", "Jefferson Starship", "Milano"],
    answer: 3,
    image: assets/images/,
    },
    {
    question: "What movie did Thanos first appear in?",
    choice: ["Marvel's The Avengers", "Avengers: Age of Ultron", "Guardians of the Galaxy", "Iron Man 2"],
    answer: 0,
    image: assets/images/,
    },
    {
    question: "How many versions of the Iron Man armor has Tony Stark made?",
    choice: ["12", "30", "24", "50"],
    answer: 3,
    image: assets/images/,
    },
    {
    question: "What is the name of Tony Stark's personal computer butler?",
    choice: ["Jennings", "Alfred", "Jarvis", "Jeeves"],
    answer: 2,
    image: assets/images/,
    },
    {
    question: "What material is Captain America's shield made of?",
    choice: ["Adamantium", "Kryptonite", "Tritanium", "Vibranium"],
    answer: 3,
    image: assets/images/,
    },
    {
    question: "What was Dr. Strange's procession before he become Sorcerer Supreme?",
    choice: ["Dentist", "Neurosurgeon", "Dermatologist", "Therapist"],
    answer: 1,
    image: assets/images/,
    },
    {
    question: "Who does Bruce Banner become?",
    choice: ["Batman", "Spiderman", "Hulk", "Captain America"],
    answer: 2,
    image: assets/images/,
    },
    {
    question: "Who is Tony Stark's best friend, and also known as War Machine?",
    choice: ["James Rhodes", "Pepper Potts", "Happy Hogan", "Peter Parker"],
    answer: 0,
    image: assets/images/,
    },
    {
    question: "Who is Peter Parker's well known archenemy in most of Spider-Man comics?",
    choice: ["The Sandman" , "The Green Goblin", "Doctor Octopus", "Carnage"],
    answer: 1,
    image: assets/images/,
    },
    {
    question: "What is the name of the somic cube that Loki takes control of in The Avengers?",
    choice: ["The Heart of Gaia", "The Magic Cube", "The Tesseract", "The Orb"],
    answer: 2,
    image: assets/images/,
    },
    {
    question: "What is the name of Tony Stark's company?",
    choice: ["Stark Industries", "Stark and Co", "Stark and Sons", "Stark International"],
    answer: 0,
    image: assets/images/,
    },
    {
    question: "How many years was Captain America frozen for in Captain America: The First Avenger?",
    choice: ["50 years", "70 years", "100 years", "200 years"],
    answer: 2,
    image: assets/images/,
    },
    {
    question: "What is the name of the planet that Thor and Loki come from?",
    choice: ["Xandar", "Asgard", "Sakaar", "Jötunheim"],
    answer: 1,
    image: assets/images/,
    }
];

//initializing all global variables 
var correctAnswer;
var incorrectAnswer;
var unanswered;
var answered;
var seconds;
var time;
var currentQuestion;
var selected;

var messages = { 
    correct: "Correct!",
    incorrect: "Incorrect! The answer is " + correctAnswer,
    end: " Out of time!", 
    finish: "Lets see your final score and how well you know the answer"
}

//starting the game with start button
$("#start").on("click", function() {
    $(this).hide();
    newGame();
});

//reset button to replay/ new game
$("#reset").on("click", function() {
    $(this).hide();
    newGame();
});

function newGame(){
    $("#correctAnswer").empty();
    $("#incorrectAnswer").empty();
    $("#unanswered").empty();
    currentQuestion = 0;
    correctAnswer =0;
    incorrectAnswer =0;
    unanswered =0;
    newQuestion();
}

function newQuestion() {
    $("#message").empty();
    $("#correctAnswer").empty();
    answered = true;

    // laying out new questions and answerList
    $("#currenQuestion").html(" Question #" + (currentQuestion+1) + "/" + MCU.length);
    $("#question").html("<h2>" + MCU[currentQuestion].question + "</h2>");

        //creating a loop for questions and answers
        for (var i=0; i < 4 ; i++) {
            var options = $('<div>');
            options.text(MCU[currentQuestion].choice[i]);
            options.attr({'data-index': i});
            options.addClass('thisOption');
            $("#answeredList").append(options);
        }

        Timer();

        //functions for when an answer is clicked on
        $("#thisOption").on("click", function(){
            selected =$(this).data('index');
            clearInterval(time);
            finalPage();
        });
}

function Timer (){
    seconds = 15;
    $("#timeLeft").html('<h3> Time Remaining: ' + seconds + ' </h3>');
    answered = true;
    //setting timer 
    time = setInterval(showCountdown, 1000);
}

function showCountdown() {
    seconds--;
    $("#timeLeft").html('<h3> Time Remaining: ' + seconds + ' </h3>');
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        finalPage();
    }
}

function finalPage(){
    $("#currentQuestion").empty();
    $("#thisOption").empty();
    $("#question").empty();

    var correctAnswerText = MCU[currentQuestion].choice[MCU[currentQuestion].answer];
    var correctAnswerIndex = MCU[currentQuestion].answer;

    //loops to check if answer is correct, incorrect, or not answered
    if ((selected == correctAnswerIndex) && (answered ==true)) {
        correctAnswer++;
        $("#message").html(messages.correct);
    } else if ((selected != rightAnswerIndex) && (answered ==true)) {
        incorrectAnswer++;
        $("#message").html(messages.incorrect);
        $("#correctAnswer").html("The correct answer was: " + correctAnswerText);
    } else {
        unanswered++;
        $("#message").html(messages.end);
        $("#correctAnswer").html("The correct answer was: " + correctAnswerText);
        answered = true;
    }

    if (currentQuestion == (MCU.length-1)){
        setTimeout(score, 5000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }
}

function score() {
    $("#timeLeft").empty();
    $("#message").empty();
    $("#correctAnswer").empty();
    $("#image").empty();

    $("#finalMessage").html(message.final);
    $("#allCorrect").html("Correct Answers: " + correctAnswer);
    $("#allIncorrect").html("Incorrect Answers: " + incorrectAnswer);
    $("#unanswered").html("Unanswered: " + unanswered);
    $("#reset").addClass("reset");
    $("#reset").show();
    $("#reset").html("Play Again?");
}