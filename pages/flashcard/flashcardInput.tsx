import React from "react";
import QuizData2 from "../../data/quiz";
import FlashcardInputList from "../../components/FlashcardInputList";

const FlashcardInput = () => {
  return (
    <div>
      <div className="container">
        <h1>Flashcard with an input</h1>
        <FlashcardInputList data={QuizData2} />
      </div>
    </div>
  );
};
export default FlashcardInput;
