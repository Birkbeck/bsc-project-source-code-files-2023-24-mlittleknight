import React, { useState } from "react";
import Question from "./Question";

const QuestionsCard = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionId, selectedChoice) => {
    setAnswers({
      ...answers,
      [questionId]: selectedChoice,
    });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctChoice) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-100%">
      {questions.map((question) => (
        <div key={question.id} className="p-6">
          <Question
            question={question}
            onAnswerChange={handleAnswerChange}
            selectedChoice={answers[question.id]}
          />
        </div>
      ))}
      <div className="p-6">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 font-sans text-base font-bold text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
        {score !== null && (
          <p className="mt-4 font-sans text-base font-semibold text-gray-900">
            Score: {score}/{questions.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuestionsCard;
