$(document).ready(function(){

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
   


var correct = 0;
var incorrect = 0;
var notAnswered = 0;
var timer = 15;
var userGuess ="";

var newArray =[];
