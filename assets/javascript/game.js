    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    var topFive = ["Javascript", "JQuery", "CSS", "HTML","Fun"];
    var wins = 0;
    var loses = 0;
    var wrongLetter = [];
    var guessesLeft = 9;
    var underScores = [];
    var userGuesses = [];
    var randomWord;
    var winCounter = 0;

           
    function startGame() {
      //Selects random word.
      randomWord = topFive[Math.floor(Math.random() * topFive.length)];
      console.log(randomWord);

      for(var i = 0; i < randomWord.length; i++) {
        underScores.push('_');
        console.log(underScores)
      }

      //Prints underscores to the screen.
      document.getElementById("word-blanks").text = underScores.join(" ");
    
      //Reset game.
      wrongLetter = [];
      guessesLeft = 10;

      //Printing guesses left to the screen.
      document.getElementById("guesses-left").text = guessesLeft;
      console.log(guessesLeft)
    }

    function winLose() {
      if(winCounter === randomWord.length) {
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
      userGuesses = event.key;
      
      if(randomWord.indexOf(userGuesses) > -1) {
        console.log('yes')
        for(var i = 0; i < randomWord.length; i++) {
            if(randomWord[i] === userGuesses) {
                underScores[i] = userGuesses;
                console.log(underScores);
                winCounter++;
                winLose();
            }
        }
      }
      else {
          wrongLetter.push(userGuesses);
          guessesLeft--;
          console.log(wrongLetter);
          winLose();
      }
    }

    //Main
    startGame();