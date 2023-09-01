// src/components/QuizPage.js
"use client";
import { useEffect } from "react";
import { questionsSlice } from "../store/questionSlice";

const QuizPage = ({ selectedQuestion }) => {
  // DEBUG
  useEffect(() => {
    console.log(selectedQuestion);
  }, [selectedQuestion]);

  return (
    <div>
      <h1>{selectedQuestion.question}</h1>

      {/* Display questions */}
    </div>
  );
};

export default QuizPage;
