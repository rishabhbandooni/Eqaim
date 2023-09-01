// src/components/QuizPage.js
import React from "react";
import { useSelector } from "react-redux";

const QuizPage = () => {
  const questions = useSelector((state) => state.questions);

  return (
    <div>
      <h1>Quiz Page</h1>
      {questions}
      {/* Display questions */}
    </div>
  );
};

export default QuizPage;
