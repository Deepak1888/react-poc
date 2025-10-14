import React from "react";
import "./App.css";
//import "h8k-components";
//import FeedbackSystem from "../src/Ex2_code-review-feedback/CodeReviewFeedback";
import WordOmitter from "../src/Ex3_word-omitter/WordOmitter";
const title = "Code Review Feedback";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
     { /*<FeedbackSystem />*/}
     <WordOmitter />
    </div>
  );
};

export default App;
