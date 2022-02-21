var message1 = document.getElementById("message1");
var message2 = document.getElementById("message2");
var message3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 101);
var number_of_guesses = 0;
var guessed_numbers = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100 || isNaN(user_guess)){
        alert("Enter a number from 1 to 100.");
    }
    else{
        guessed_numbers.push(user_guess);
        number_of_guesses = number_of_guesses + 1;

        if(user_guess < answer){
            message1.textContent = "Too low!";
            message2.textContent = "Guesses: " + number_of_guesses;
            message3.textContent = "Guessed numbers: " +
            guessed_numbers + ", " + " " ;
        }
        else if(user_guess > answer){
            message1.textContent = "Too high!";
            message2.textContent = "Guesses: " + number_of_guesses;
            message3.textContent = "Guessed numbers: " +
            guessed_numbers + ", " + " ";
        }
        else if(user_guess == answer){
            message1.textContent = "You Win!";
            message2.textContent = "The number was: " + answer;
            message3.textContent = "You guessed it in "+ number_of_guesses + " guesses";
            document.getElementById("button1").disabled = true;
        }
    }
}

function reset(){
    location.reload();
}
