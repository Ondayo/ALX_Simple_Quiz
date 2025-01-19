function checkAnswer() {
  let correctAnswer = "4";

  let selectedAnswer = document.querySelector('input[name="quiz"]:checked');

  if (selectedAnswer) {
    let userAnswer = selectedAnswer.value;

    let feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
      feedback.textContent = " Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  } else {
    document.getElementById("feedback").textContent = "Please select answer.";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
