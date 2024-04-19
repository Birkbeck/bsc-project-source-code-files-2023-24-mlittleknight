import React, { useState, useEffect } from "react";
import Question from "./Question";

const ExerciseCard = ({ verbId }) => {
  
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Fetch questions and choices from API
   fetch(`http://localhost:8000/questions/?phrase_id=${verbId}`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   })
     .then((response) => response.json())
     .then((data) => {
      console.log(data,"data")
       setQuestions(data);
     })
     .catch((error) => {
       console.error("Error fetching data: ", error);
     });
  }, [verbId]);
console.log(questions,"questions")

 

  return (
    <div className="card mt-6">
      <div className="card-body">
        <h2 className="card-title mb-4 font-weight-bold">Exercise Questions</h2>
        <p className="card-text">Attempt the questions below.</p>
      </div>
      {questions?.map((question) => (
        <Question
          key={question.id}
          question={question.question}
         
        />
      ))}
     
    </div>
  );
};

export default ExerciseCard;
