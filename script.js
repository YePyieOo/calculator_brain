var answer = num_1 + num_2;
function start() {
  document
    .getElementById("btnstart")
    .setAttribute("class", "btnstart inactivestart");
  document.getElementById("btnstart").disabled = true;
  document.getElementById("btnstop").disabled = false;
  document
    .getElementById("btnstop")
    .setAttribute("class", "btnstop activestop");
  document.getElementById("answerbox").disabled = false;
  document.getElementById("useranswer").disabled = false;
  quiz();
}

function stop() {
  document
    .getElementById("btnstop")
    .setAttribute("class", "btnstop inactivestop");
  document.getElementById("btnstop").disabled = true;
  document.getElementById("btnstart").disabled = false;
  document
    .getElementById("btnstart")
    .setAttribute("class", "btnstart activestart");
  document.getElementById("answerbox").disabled = true;
  document.getElementById("useranswer").disabled = true;
  document.getElementById("answerbox").value = "";
  document.getElementById("list").innerHTML = "";
  document.getElementById("q1")="";
}
function quiz() {
  var num_1 = Math.round(Math.random() * 100) + 1;
  var num_2 = Math.round(Math.random() * 100) + 1;
  //   main_answer = num_1 + num_2;
  answer = num_1 + num_2;
  document.getElementById("q1").innerHTML = num_1 + "+" + num_2;
}

function checkanswer() {
  var user_input = document.getElementById("answerbox").value;
  if (user_input == answer) {
    document.getElementById("list").innerHTML += "<li>Correct</li>";
  } else {
    document.getElementById("list").innerHTML += "<li>Wrong Answers</li>";
  }
  document.getElementById("answerbox").value = "";
  quiz();
}
