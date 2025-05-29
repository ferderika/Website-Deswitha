function checkAnswers() {
  let score = 0;

  const answers = {
    q1: 'B',
    q2: 'C',
    q3: 'B',
    q4: 'C',
    q5: 'B',
    q6: 'False',
    q7: 'True',
    q8: 'False'
  };

  for (let key in answers) {
    const radios = document.getElementsByName(key);
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked && radios[i].value === answers[key]) {
        score++;
      }
    }
  }

  const totalQuestions = Object.keys(answers).length;
  document.getElementById("result").innerHTML = `Your score is ${score} out of ${totalQuestions}.`;
}
