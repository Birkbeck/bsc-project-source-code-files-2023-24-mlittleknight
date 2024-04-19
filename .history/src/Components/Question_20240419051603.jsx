import React from "react";

const Question = (question) => {
  console.log(question.question.example);
  return (
    <div className="ml-2 mb-4">
      <p className="font-weight-bold">{question.question.example}</p>
    </div>
  );
};

export default Question;
