import React from "react";
type TypeFlashCard = {
  id: number;
  question: string;
  answers: string;
};
type TypeFlashCardProps = {
  ques: TypeFlashCard;
};
const FlashCardInputContent: React.FC<TypeFlashCardProps> = ({ ques }) => {
  const [textInput, setTextInput] = React.useState("");
  const [quess, setQues] = React.useState(true);
  const [color, setColor] = React.useState("mycontent");
  const [myQuestion, setMyquestion] = React.useState(ques.question);
  const [myResponse, setMyResponse] = React.useState(ques.answers);

  return (
    <div
      className={color}
      // onClick={() => {
      //   if (ques.answers === textInput) {
      //     setQues(true);
      //     setColor("mycontent");
      //     setMyResponse(myQuestion);
      //   } else {
      //     setMyquestion(myQuestion);
      //     setQues(true);
      //     setColor("mycontent");
      //   }
      // }}
    >
      <div className="mb-3">
        <p>{quess ? myQuestion : myResponse}</p>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="your answser"
          name="response"
          onChange={(event): void => {
            setTextInput(event.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <button
          className="btn-valider"
          type="button"
          onClick={() => {
            if (ques.answers === textInput) {
              setQues(!quess);
              setColor("mycontentColorblue");
              setMyResponse("Bravo Vous avez la bonne reponse");
            } else {
              setMyquestion("Mauvaise reponse");
              setQues(true);
              setColor("mycontentColorRed");
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default FlashCardInputContent;
