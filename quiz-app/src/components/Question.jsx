/* eslint-disable react/prop-types */
import React from "react";

export default function Question({
  question,
  options,
  questionIndex,
  handleAnswerChange,
  reset, // Receiving reset prop
}) {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleOptionChange = (e) => {
    const selected = e.target.id;
    setSelectedOption(selected);
    handleAnswerChange(questionIndex, selected);
  };

  React.useEffect(() => {
    // Reset the selectedOption state whenever the reset prop changes
    if (reset) {
      setSelectedOption("");
    }
  }, [reset]);

  const optionElements = options.map((option) => (
    <div key={option.label} className="option-container">
      <input
        type="radio"
        name={`select-${questionIndex}`}
        id={option.label}
        className="input-radio"
        checked={selectedOption === option.label} // Maintain selection state
        onChange={handleOptionChange}
      />
      <label
        htmlFor={option.label}
        className={`${selectedOption === option.label ? "selected" : ""}`}
      >
        <span>{option.label}</span>
      </label>
    </div>
  ));

  return (
    <div className="form--question">
      <h2>{question}</h2>
      <div className="options">{optionElements}</div>
      <hr />
    </div>
  );
}
