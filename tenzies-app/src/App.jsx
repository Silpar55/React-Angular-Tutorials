import React from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [numRolls, setNumRolls] = React.useState(0);
  const [time, setTime] = React.useState(Number);
  const [stopTime, setStopTime] = React.useState(false);
  const [bestTime, setBestTime] = React.useState(
    localStorage.getItem("time") || Infinity
  );

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }

    return newDice;
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function rollDice() {
    if (!tenzies) {
      setNumRolls((prevNum) => ++prevNum);
      console.log(numRolls);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setNumRolls(0);
      setTime(0);
      setStopTime(false);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      setStopTime(true);
      if (time < +bestTime) {
        localStorage.setItem("time", time);
        setBestTime(time);
      }
    }
  }, [bestTime, dice, time]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // increment by 1 second
    }, 1000); // every 1 second

    if (stopTime) clearInterval(intervalId);

    return () => clearInterval(intervalId); // cleanup
  }, [stopTime]); // run only once on mount

  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }
  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">
        <span className="time">TIme: {fmtMSS(time)}</span>
        Tenzies <span className="counter">Num Rolls: {numRolls}</span>
      </h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      {bestTime !== Infinity && <p>Your best time is: {fmtMSS(bestTime)}</p>}
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="roll-dice">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
