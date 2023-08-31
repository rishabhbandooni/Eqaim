// src/components/QuizPage.js
'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchQuestions } from '../api/api.js';

const page = () => {
  const questions = useSelector((state) => state.questions);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuizQuestions() {
      const quizQuestions = await fetchQuestions();
      // Store the fetched questions in the state
      // Update your Redux store with the questions
      setIsLoading(false);
    }

    fetchQuizQuestions();
  }, []);

  return (
    <div className="quiz-page">
      <h1>Quiz Page</h1>
      {isLoading ? (
        <p>Loading questions...</p>
      ) : (
        <div>
          {questions.map((question, index) => (
            <div key={index}>
              <h2>Question {index + 1}:</h2>
              <p>{question.question}</p>
              <ul>
                {/* Concatenate correct and incorrect answers for choices */}
                {([...question.incorrect_answers, question.correct_answer]).map((choice, choiceIndex) => (
                  <li key={choiceIndex}>{choice}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
