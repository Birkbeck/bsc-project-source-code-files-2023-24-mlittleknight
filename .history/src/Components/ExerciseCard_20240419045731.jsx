import React, { useState, useEffect } from "react";
import Question from "./Question";

const ExerciseCard = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Fetch questions and choices from API
   fetch(`http://localhost:8000/examples/?phrase_id=${verbId}`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   })
     .then((response) => response.json())
     .then((data) => {
       setQuestions(data.questions);
     })
     .catch((error) => {
       console.error("Error fetching data: ", error);
     });
  }, []);

  const handleAnswerChange = (questionId, selectedChoice) => {
    setAnswers({
      ...answers,
      [questionId]: selectedChoice,
    });
  };

 

  return (
    <div className="card mt-6">
      <div className="card-body">
        <h2 className="card-title mb-4 font-weight-bold">Exercise Questions</h2>
        <p className="card-text">Attempt the questions below.</p>
      </div>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          onAnswerChange={handleAnswerChange}
          selectedChoice={answers[question.id]}
        />
      ))}
     
    </div>
  );
};

export default ExerciseCard;
