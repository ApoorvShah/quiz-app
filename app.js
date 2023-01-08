var score = 0;
var total = 2;

function checkAnswers() {

  // Get the user's answers
  var q1 = document.forms["quiz"]["question1"].value;
  var q2 = document.forms["quiz"]["question2"].value;

  // Validate the answers
  if (q1 == "Paris") {
    score++;
  }
  if (q2 == "Rome") {
    score++;
  }
  displayScore();
}

function displayScore() {
  // Display the results
  alert("You scored " + score + " out of " + total);
}



