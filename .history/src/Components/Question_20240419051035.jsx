import React from "react";

const Question = (question) => {
    console.log(question.question.example);
    return (
      <div class="p-6 pt-0">
        <p>
          {question.questions.examples}
        </p>
      </div>
    );
}
export default Question;