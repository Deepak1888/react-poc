import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);
  //const [processedText, setProcessedText] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

//   const toggleOmitWords = () => {
//     const processedText = inputText.split(" ").filter(word => !OMITTED_WORDS.includes(word)).join(" ");
//     const output = omitWords?inputText:processedText;
//     setProcessedText(output);
//     setOmitWords(!omitWords);
//   };
const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    setInputText('');
    //setProcessedText('');

    // TODO: Add your changes here
  };

  const getProcessedText = () => {
    // TODO: Add your changes here
    let results = [];
    if (omitWords) {
     return inputText.split(" ").filter((prev) => !OMITTED_WORDS.includes(prev)).join(" ");
    } else {
      return inputText;
    }
  };

  return (
    <div className="omitter-wrapper">
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div>
        <button onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export default  WordOmitter ;
