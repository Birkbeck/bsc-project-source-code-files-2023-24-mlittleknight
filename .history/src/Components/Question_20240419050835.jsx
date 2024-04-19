import React from "react";

const Question = ({question}) => {
    return (
      <div class="p-6 pt-0">
        <p>
          {question.examples}
        </p>
      </div>
    );
}
export default Question;