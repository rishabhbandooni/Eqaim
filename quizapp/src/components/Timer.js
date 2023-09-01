// components/Timer.js
"use client";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(
    JSON.parse(localStorage.getItem("remainingTime")) || 1800
  ); // 30 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    // if (timeRemaining === 0) {
    //   // Automatically submit the quiz here
    //   handleQuizSubmission();
    // }
    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);
  useEffect(() => {
    if (window != undefined) {
      localStorage.setItem("remainingTime", JSON.stringify(timeRemaining));
    }
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleQuizSubmission = () => {
    // Use useSelector to access data from your Redux store
    const givenAnswer = useSelector((state) => state.givenAnswer); // Replace 'userAnswers' with the correct selector
    const questions = useSelector((state) => state.questions); // Replace 'questions' with the correct selector

    // Calculate the user's score based on their answers and questions.
    const score = calculateScore(givenAnswer, questions);

    // Display the user's score and results.
    alert(`Your Score: ${score} / ${questions.length}`);

    // Optionally, you can also display a submission confirmation modal.
  };

  return (
    <Typography variant="h4" align="center">
      Time Remaining: {formatTime(timeRemaining)}
    </Typography>
  );
};

export default Timer;
