import React, { useState } from "react";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px",marginLeft:"35vw" }}>
      {showScore ? (
        <h2>You scored {score} out of {quizData.length}!</h2>
      ) : (
        <div>
          <h3>{quizData[currentQuestion].question}</h3>
          {quizData[currentQuestion].options.map((option, index) => (
            <button 
              key={index} 
              onClick={() => handleAnswerClick(option)}
              style={{ display: "block", margin: "10px auto", padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;