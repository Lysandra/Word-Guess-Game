    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    var topFive = ["Javascript", "JQuery", "CSS", "HTML","Fun"];
    var wins = 0;
    var loses = 0;
    var wrongLetter = [];
    var guessesLeft = 9;
    var underScores = [];
    var userGuesses = [];
    var randomWord;
    var winsCounter = 0;
    var lossesCounter = 0;
    var guess

           
    function startGame() {
      //Selects random word.
      randomWord = topFive[Math.floor(Math.random() * topFive.length)];
      console.log(randomWord);

      for(var i = 0; i < randomWord.length; i++) {
        underScores.push('_');
        console.log(underScores)
      }

      //Prints underscores to the screen.
      document.getElementById("word-blanks").textContent = underScores.join(" ");

      //Prints wins to the screen.
      document.getElementById("wins-counter").textContent = winsCounter;

      //Prints losses to the screen.
      document.getElementById("losses-counter").textContent = lossesCounter;
    
      //Prints guesses left to the screen.
      document.getElementById("guesses-left").textContent = guessesLeft;
      console.log(guessesLeft)

      //Reset game.
      wrongLetter = [];
      guessesLeft = 10;
    }

    function winLose() {
      if(guess === randomWord.length) {
        alert("Winner!");
        startGame();
        }
      else if(guessesLeft === 0) {
        console.log("You Lose! Try Again!");
        startGame();
        }
    }

    //User Guesses
    document.onkeyup = function(event) {
      guess = event.key.toLowerCase();
      
      if(randomWord.indexOf(guess) > -1) {
        console.log('yes')
        for(var i = 0; i < randomWord.length; i++) {
            if(randomWord[i] === guess) {
                underScores[i] = guess;
                console.log(underScores);
                winsCounter++;
                winLose();
            }
        }
      }
      else {
          wrongLetter.push(guess);
          guessesLeft--;
          lossesCounter++;
          console.log(wrongLetter);
          winLose();
      }
    }

    //Main
    startGame();