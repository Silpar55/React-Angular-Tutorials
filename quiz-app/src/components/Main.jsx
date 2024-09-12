/* eslint-disable react/prop-types */

export default function Main(props) {
  return (
    <section className="start">
      <div className="main--info">
        <h1 className="main--title">Quizzical</h1>
        <p className="main--description">Test your knowledge of everything!</p>
      </div>
      <button className="main--button" onClick={props.openQuiz}>
        Start quiz
      </button>
    </section>
  );
}
