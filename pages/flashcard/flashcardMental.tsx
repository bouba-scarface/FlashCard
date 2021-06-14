import React from "react";
import QuizData1 from "../../data/question";
import FlashcardList from "../../components/FlashcardList";

const FlashcardMental = () => {
  return (
    <div>
      <div className="container">
        <h1>Flashcard Mental</h1>
        <FlashcardList data={QuizData1} />
      </div>
    </div>
  );
};
export default FlashcardMental;
