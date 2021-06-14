import React from "react";
import FlashCard from "../components/FlashCard";
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
        return <FlashCard ques={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashcardList;
