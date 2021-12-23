let question = {
  title: "Simba",
  alternatives: ["dog", "cat", "lion", "wolf"],
  correctAnswer: 2,
};

let questions = [
  {
    title: "Simba",
    alternatives: ["Dog", "Cat", "Lion", "Wolf"],
    correctAnswer: 2,
  },
  {
    title: "Ndovu",
    alternatives: ["Elephant", "Girrafe", "Ant", "donkey"],
    correctAnswer: 0,
  },
  {
    title: "Shamba",
    alternatives: ["Town", "Building", "Home", "Farm"],
    correctAnswer: 3,
  },
  {
    title: "Kikombe",
    alternatives: ["Spoon", "Kettle", "Cup", "Plate"],
    correctAnswer: 2,
  },
  {
    title: "Gari",
    alternatives: ["Bicycle", "Car", "Boat", "WheelBarrow"],
    correctAnswer: 1,
  },
  {
    title: "Jambo",
    alternatives: ["Sorry", "Hello", "Help", "Goodbye"],
    correctAnswer: 1,
  },
];

let app = {
  start: function () {
    this.currentPostion = 0;
    this.score = 0;

    let alternativeList = document.querySelectorAll(".alternative");
    alternativeList.forEach((element, index) => {
      element.addEventListener("click", () => {
        this.checkCorrectAnswer(index);
      });
    });

    this.updateScore();

    this.showQuestion(questions[this.currentPostion]);
  },

  showQuestion: function (q) {
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    let alternativeList = document.querySelectorAll(".alternative");

    alternativeList.forEach(function (element, index) {
      element.textContent = q.alternatives[index];
    });
  },

  checkCorrectAnswer: function (userSelected) {
    let currentQuestion = questions[this.currentPostion];
    if (currentQuestion.correctAnswer == userSelected) {
      console.log("isCorrect");
      this.score++;
      this.displayCorrectAnswer(true);
    } else {
      this.displayCorrectAnswer(false);
    }

    this.updateScore();
    this.increaseCurrentPosition();

    this.showQuestion(questions[this.currentPostion]);
  },

  increaseCurrentPosition: function () {
    this.currentPostion++;
    if (this.currentPostion == questions.length) {
      this.currentPostion = 0;
    }
  },

  updateScore: function () {
    let scoreDiv = document.getElementById("score");

    scoreDiv.textContent = `Your Score is: ${this.score}`;
  },

  displayCorrectAnswer: function (isCorrect) {
    let correctDiv = document.getElementById("correct");

    let result = "";
    if (isCorrect == true) {
      result = " You Got It Right!!";
    } else {
      let currentQuestion = questions[this.currentPostion];
      let correctAnswerIndex = currentQuestion.correctAnswer;
      let correctAnsText = currentQuestion.alternatives[correctAnswerIndex];
      result = `Wrong! The Correct Answer Is: ${correctAnsText}`;
    }
    correctDiv.textContent = result;
  },
};

app.start();
