import React from "react";

const Question = (question) => {
    console.log(question.question.example);
    return (
      <div class="p-6 pt-0">
        <p class="p-6 pt-2 font-weight-bold">{question.question.example}</p>
      </div>
    );
}
export default Question;