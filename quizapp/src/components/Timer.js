// components/Timer.js
"use client";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(
    JSON.parse(localStorage.getItem("remainingTime")) || 1800
  ); // 30 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (window != undefined) {
      localStorage.setItem("remainingTime", JSON.stringify(timeRemaining));
    }
  }, [timeRemaining]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Typography variant="h4" align="center">
      Time Remaining: {formatTime(timeRemaining)}
    </Typography>
  );
};

export default Timer;
