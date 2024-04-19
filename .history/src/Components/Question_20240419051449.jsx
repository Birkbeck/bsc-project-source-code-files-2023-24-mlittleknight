import React from "react";

const Question = (question) => {
    console.log(question.question.example);
    return (
      <div class="mb-8">
        <p class="font-weight-bold">{question.question.example}</p>
      </div>
    );
}
export default Question;