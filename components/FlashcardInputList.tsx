import React from "react";
import FlashcardInputContent from "../components/FlashcardInputContent";
type TypeFlashCardList = {
  id: number;
  question: string;
  answers: string;
};
type TypeFlashCardListProps = {
  data: TypeFlashCardList[];
};
const FlashcardList: React.FC<TypeFlashCardListProps> = ({ data }) => {
  return (
    <div>
      {data.map((flashcard) => {
        return <FlashcardInputContent ques={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashcardList;
