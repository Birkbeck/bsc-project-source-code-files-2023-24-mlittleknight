import React from "react";

const Question = (question) => {
    console.log("Question",question.question.example)
    return(
        <div class="p-6 pt-0">
            <p>ccasd
                {question}
            </p>
        </div>
    )
}
export default Question;