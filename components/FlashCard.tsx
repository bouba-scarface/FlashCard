import React from "react";
type TypeFlashCard = {
  id: number;
  question: string;
  answers: string;
};
type TypeFlashCardProps = {
  ques: TypeFlashCard;
};
const FlashCard: React.FC<TypeFlashCardProps> = ({ ques }) => {
  const [text, setText] = React.useState(true);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setText(!text);
        }}
      >
        {text ? ques.question : ques.answers}
      </button>
    </div>
  );
};

export default FlashCard;
