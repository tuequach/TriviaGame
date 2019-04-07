$(document).ready(function(){

const trivia = [
    {
        question: "Who claims that he has worked on the Human Genome Project?",
        choice: ["Eugene", "Abraham", "Gareth", "Rosita"],
        answer: 0,
        img: "assets/images/genome.jpg"
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
        img: "assets/images/rick.jpg"
       }];
]
    
const correct = 0;
const incorrect = 0;
const notAnswered = 0;
const run = false;
const questionCount = trivia.length;
const index;
const timer = 15;
const intervalId;
const userGuess ="";
const pick;
const holder = [];
const newArray =[];


    //setting event listeners
    $("#reset").hide();
   //on click to start the game
   $("#play").on("click", function () {
       $("#play").hide();
       displayQuestion();
       runningTimer();
       for (const i=0; i < trivia.length; i++) {
           holder.push(trivia[i]);
       }
   })

   //starting timer
   function runTime () {
       if (!running) {
           intervalId = setInterval (decrement, 2000);
           running = true;
       }
       console.log(runTime);
   }

   //timer counting down 
   function decrement () {
       $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
       timer --;

       //if time reaches 0
       if (timer === 0) {
           notAnsweredCount++;
           stop();
           $("#answer").html("<p>Time's Up!, The correct answer is: " + pick.choice[pick.answer]  + "</p>");
           hidepic();
       }
   }


   //stopping timer 
   function stop () {
       running = false;
       clearInterval(intervalId);
   }
console.log(stop);

// questions picked randomly from array?
function displayQuestion () {
    index = Math.floor(Math.random()*trivia.length);
    pick = trivia[i];

    $("#question").html("<h2>" + pick.question + "</h2>");
    for (const i =0; i <pick.answered.length; i++) {
        const userChoice = $("<div>");
        userChoice.addClass("answerchoice");
        userChoice.html(pick.answered[i]);
        userChoice.attr("data-guess", i);
        $("#answer").append(userChoice);
    }
}
console.log(displayQuestion);

//on click that shows outcome for selected answer

$(".answerChoice").on("click", function () {
        userGuess = parseInt($(this).attr("data-guess"));

        if (userGuess === pick.answer) {
            stop ();
            correctCount ++;
            userGuess ="";
            $("#answer").html("<p> Correct!</p>");
            hidePic();
        }
})
}

function hidePic () {
    $("#answer").append("<img src=" + pick.photo + ">");
    newArray.push(pick);
    trivia.splice(index,1);

    const hiddenPic = setTimeout (function () {
        $("#answer").empty();
        timer=15;

    if ((Countwrong))
    })
}