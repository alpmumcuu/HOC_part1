<html>
<head>
  <title>Guessing Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 50px;
    }
  </style>
</head>
<body>

  <h1>Guess the Number (1-10)</h1>
  <p>Enter your guess: <input type="text" id="guessInput"></p>
  <button onclick="checkGuess()">Submit Guess</button>
  <p id="result"></p>

  <script>
    // Generate a random number between 1 and 10
    const secretNumber = Math.floor(Math.random() * 10) + 1;

    function checkGuess() {
      // Get the user's guess from the input field
      const userGuess = document.getElementById('guessInput').value;

      // Check if the guess is correct
      if (userGuess == secretNumber) {
        document.getElementById('result').innerHTML = 'Congratulations! You guessed the correct number!';
      } else {
        document.getElementById('result').innerHTML = 'Sorry, try again!';
      }
    }
  </script>

</body>
</html>

   

</html>
