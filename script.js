const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

const questions = [
  { q: "I ____ to school every day.", a: ["go", "goes", "going"], correct: "go" },
  { q: "She ____ football on weekends.", a: ["play", "plays", "playing"], correct: "plays" },
  { q: "They ____ breakfast at 7 a.m.", a: ["eat", "eats", "eating"], correct: "eat" },
  { q: "He ____ like pizza.", a: ["does", "do", "doing"], correct: "does" },
  { q: "We ____ English at school.", a: ["study", "studies", "studying"], correct: "study" },
  { q: "My brother ____ TV in the evening.", a: ["watch", "watches", "watching"], correct: "watches" },
  { q: "Cats ____ milk.", a: ["drink", "drinks", "drinking"], correct: "drink" },
  { q: "The sun ____ in the east.", a: ["rise", "rises", "rising"], correct: "rises" },
  { q: "Susie(go)______to school every day.", a: ["go", "goes", "going"], correct: "goes"},
  { q: "Susie (learn)_______at school every day.", a: ["learns", "learn"], correct: "learns"},
];

let current = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  intro.style.display = "none";
  quiz.style.display = "block";
  showQuestion();
});

function showQuestion() {
  feedbackEl.textContent = "";
  scoreEl.textContent = `Score: ${score}`;
  questionEl.textContent = questions[current].q;
  answersEl.innerHTML = "";

  questions[current].a.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.addEventListener("click", () => checkAnswer(ans));
    answersEl.appendChild(btn);
  });
}

function checkAnswer(ans) {
  if(ans === questions[current].correct){
    feedbackEl.textContent = "Congratulations! 🎉";
    score++;
  } else {
    feedbackEl.textContent = "Ah be! 😢";
  }

  current++;
  if(current >= questions.length){
    questionEl.textContent = "Quiz finished! Your score: " + score + "/" + questions.length;
    answersEl.innerHTML = "";
    feedbackEl.textContent = "";
  } else {
    setTimeout(showQuestion, 800); // 0.8 saniye sonra bir sonraki soru
  }
}
const questionGroups = [
  {
    name: "Simple Present",
    questions: [
      { q: "I ____ to school every day.", a: ["go", "goes", "going"], correct: "go" },
      { q: "She ____ football on weekends.", a: ["play", "plays", "playing"], correct: "plays" },
    ]
  },
  {
    name: "Simple Past",
    questions: [
      { q: "I ____ yesterday.", a: ["went", "go", "going"], correct: "went" },
    ]
  },
  {
    name: "Daily Routine",
    questions: [
      { q: "He ____ breakfast every morning.", a: ["eat", "eats", "eating"], correct: "eats" },
    ]
  }
];
