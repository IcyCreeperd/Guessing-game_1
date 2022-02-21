var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 101);
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100 || isNaN(user_guess)){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses = no_of_guesses + 1;

        if(user_guess < answer){
            msg1.textContent = "Too low!";
            msg2.textContent = "Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers: " +
            guessed_nums + ", " + " " ;
        }
        else if(user_guess > answer){
            msg1.textContent = "Too high!";
            msg2.textContent = "Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers: " +
            guessed_nums + ", " + " ";
        }
        else if(user_guess == answer){
            msg1.textContent = "You Win!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in "+ no_of_guesses + " guesses";
            document.getElementById("button1").disabled = true;
        }
    }
}

function reset(){
    location.reload();
}
