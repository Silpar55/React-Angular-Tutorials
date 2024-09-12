import Quiz from "./components/Quiz";
import Main from "./components/Main";
import React from "react";
export default function App() {
  const [quiz, toggleQuiz] = React.useState(false);

  function openQuiz() {
    toggleQuiz(true);
  }

  return (
    <main>
      <img src="top-right.svg" alt="bg" className="bg--image" />
      <img src="bottom-left.svg" alt="bg" className="bg--image" />
      {!quiz ? <Main openQuiz={openQuiz} /> : <Quiz />}
    </main>
  );
}
