// * There will be four crystals displayed as buttons on the page.

// variables
var randomNumber
var userScore


// * The player will be shown a random number at the start of the game.
function startGame () {
    randomNumber = Math.floor(Math.random()*101) + 19;
    $("#randomNumber").html("Number to reach!:" + randomNumber);
    

// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
$("#blue").on("click", start);
$("#red").on("click", start);
$("#purple").on("click", start);
$("#green").on("click", start);


//   * Your game will hide this amount until the player clicks a crystal.
//   * When they do click one, update the player's score counter.



// * The player wins if their total score matches the random number from the beginning of the game.



// * The player loses if their score goes above the random number.



// * The game restarts whenever the player wins or loses.



//   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.



// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

}

startGame ()