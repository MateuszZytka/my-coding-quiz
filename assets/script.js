
const timerEl = document.getElementById("timer");
const timeEl = document.getElementById("time")
const startButtonEl = document.getElementById("startButton")
const startSectionEl = document.getElementById("startSection")
const questionBoxEl = document.getElementsByClassName("questions")
const finalScoreEl = document.getElementById("finalScoreSection")
const answerBox = document.getElementsByClassName("answers")
const scoreEl = document.getElementById("score")




let timeRemaining = 60;
let currentQuestion = 0;
let score = 0;
let nextQuestion = 0

function startTimer() {
  const timer = setInterval(function () {
    timeRemaining--;
    if (timeRemaining <= 0) {
      finishQuiz();
      clearInterval(timer);
    }
    timerEl.textContent = timeRemaining;
  }, 1000);
}


startButtonEl.addEventListener("click", function(){
  startTimer()
  startQuiz()
})

//add event listener to all li



//to do
//finish quiz, take you to finalscore, and record score 
function finishQuiz(){
  questionBoxEl[nextQuestion].setAttribute("style", "display: none")
  finalScoreEl.setAttribute("style", "display: block")
  timerEl.setAttribute("style", "display: none")
  timeEl.setAttribute("style", "display: none")
  score = timeRemaining
}

// show questions and answers
function startQuiz (){
  startSectionEl.setAttribute("style", "display: none")
  questionBoxEl[nextQuestion].setAttribute("style", "display: block")
};


//navigates through questions, lowers timer by 5 seconds if answer is incorrect, runs finish quiz if all answers have been selectd/time runs out
function answerQuestion (event) {
  questionBoxEl[nextQuestion].setAttribute("style", "display: none")
  nextQuestion++
  if (event.target.getAttribute("data-correct") === "false"){
    timeRemaining -= 5
  }
  if (nextQuestion < 4){
    questionBoxEl[nextQuestion].setAttribute("style", "display: block")
  } else if (nextQuestion = 3){
    finishQuiz()
  } else if (timeRemaining == 0){
    finishQuiz ()
  }
}

//adds event listener to every answer
for (var i = 0 ; i < answerBox.length; i++) {
  answerBox[i].addEventListener('click' , answerQuestion) ; 
}

//form 
let formEl = document.querySelector("#nameinput")

//prevents defualt form submission 
//adds highscore
function submitForm(event){
  event.preventDefault();
  const nameEl = document.querySelector("#fName").value;
  scoreEl.textContent = (nameEl + ": " + score + "points")
  formEl.reset()
}

formEl.addEventListener("submit", submitForm)