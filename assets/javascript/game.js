$(document).ready(function () {


// variables!
    var totalScore = 0;
    $(".score").html(totalScore);
    var wins = 0;
    $(".wins").html("Wins: " + wins);
    var losses = 0;
    $(".losses").html("Losses: " + losses);

    function gameStart() {
//le randomNumber generator!
        randomNumber = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").html(randomNumber);


//users score from clicking
        totalScore = 0;
        $(".score").html(totalScore);


//assigning each crystal a value, variables for crystals.        
        crystalBlue = Math.floor(Math.random() * 12) + 1;
        $("#blue").attr("crystalValue", crystalBlue);
        crystalRed = Math.floor(Math.random() * 12) + 1;
        $("#red").attr("crystalValue", crystalRed);
        crystalPurple = Math.floor(Math.random() * 12) + 1;
        $("#purple").attr("crystalValue", crystalPurple);
        crystalGreen = Math.floor(Math.random() * 12) + 1;
        $("#green").attr("crystalValue", crystalGreen);
            console.log(crystalBlue)
            console.log(crystalRed)
            console.log(crystalPurple)
            console.log(crystalGreen)    
    }    


// .crystals onclick function
        $(".crystals").on("click", function crystalClick () {


// applying the clicked value to the users score, turn string to number
        var crystalValue = ($(this).attr("crystalValue"));
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        console.log(crystalValue)
        $("#score").html(totalScore);
        console.log(totalScore)


 // conditional for wins and loses, call to restart le game   
 //wins     
        if (totalScore === randomNumber) {
            wins++;
            $("#wins").html("wins: " + wins);
            gameStart();
        }


//losses
        else if (totalScore > randomNumber) {
            losses++;
            $("#losses").html("losses: " + losses);
            gameStart();
        }

    });
    gameStart()
});