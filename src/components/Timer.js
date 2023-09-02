// components/Timer.js
"use client";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(1);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("remainingTime")) {
      setTimeRemaining(JSON.parse(localStorage.getItem("remainingTime")));
    } else {
      setTimeRemaining(1800);
    }
  }, []);
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
  useEffect(() => {
    if (timeRemaining == 0) {
      router.push("/result");
      if (window != undefined) {
        localStorage.removeItem("remainingTime");
      }
    }
  }, [timeRemaining]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Typography className="timer" variant="h4" align="center">
      Time Remaining:
      {formatTime(timeRemaining)}
    </Typography>
  );
};

export default Timer;
