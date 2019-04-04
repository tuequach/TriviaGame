$(document).ready(function(){

    
var correct = 0;
var incorrect = 0;
var notAnswered = 0;
var timer = 15;
var userGuess ="";

var newArray =[];

    //setting event listeners
    $("#reset").hide();
   //on click to start the game
   $("#play").on("click", function () {
       $("#play").hide();
       displayQuestion();
       runningTimer();
       for (var i=0; i < trivia.length; i++) {
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


// questions:
   In 
