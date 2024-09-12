import React from "react";
import Question from "./Question";
import questions from "../quiz";

export default function Quiz() {
  const [answers, setAnswers] = React.useState([]);
  const [correctAns, setCorrectAns] = React.useState(0);
  const [result, setResult] = React.useState(false);
  const [reset, setReset] = React.useState(false); // State to trigger reset

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = selectedAnswer;
      return updatedAnswers;
    });
  };

  const quiz = questions.map((question, index) => (
    <Question
      key={index}
      question={question.question}
      options={question.options}
      questionIndex={index}
      handleAnswerChange={handleAnswerChange}
      reset={reset} // Pass reset state to each Question
    />
  ));

  const checkAnswers = () => {
    if (!result) {
      let correctCount = 0;

      for (let i = 0; i < questions.length; i++) {
        const selectedAnswer = answers[i];
        const correctOption = questions[i].options.find(
          (option) => option.correct
        );

        if (selectedAnswer === correctOption.label) {
          correctCount++;
        }
      }

      setCorrectAns(correctCount);
      setResult(true);
    } else {
      // Reset logic
      setCorrectAns(0);
      setResult(false);
      setAnswers([]);
      setReset((prevReset) => !prevReset); // Toggle reset state to trigger reset in questions
    }
  };

  return (
    <section className="form">
      {quiz}

      <div className="result">
        {result && (
          <p>
            You scored {correctAns} / {questions.length} correct answers
          </p>
        )}
        <button className="main--button" onClick={checkAnswers}>
          {!result ? "Check answers" : "Play again"}
        </button>
      </div>
    </section>
  );
}
