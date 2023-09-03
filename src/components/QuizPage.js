// src/components/QuizPage.js
"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { randomIndex } from "../helper";
import { setGivenAnswers } from "../store/questionSlice";

const QuizPage = ({ selectedQuestion }) => {
  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);
  function getOptions() {
    if (!selectedQuestion.incorrect_answers) return;
    let arr = [...selectedQuestion.incorrect_answers];
    let index = randomIndex();
    let element = selectedQuestion.correct_answer;

    arr.splice(index, 0, element);
    setOptions(arr);
  }
  function handleClick() {
    if (window != undefined) {
      localStorage.removeItem("remainingTime");
    }
  }
  // DEBUG
  useEffect(() => {
    console.log(selectedQuestion.givenAnswer);
  }, [selectedQuestion]);
  useEffect(() => {
    console.log("Correct Ans", selectedQuestion.correct_answer);
  }, [selectedQuestion]);

  useEffect(() => {
    getOptions();
  }, [selectedQuestion.question]);

  return (
    <Box>
      <Box
        className="QuizPageMobileContainer"
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "388px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <Box
          className="QuizPageMobileQuestion"
          sx={{
            width: "80%",
            padding: "1rem",
            background: "#f5f5f5",
            borderRadius: ".5rem",
          }}
        >
          {selectedQuestion.question && (
            <h4
              style={{ fontWeight: "bold" }}
              dangerouslySetInnerHTML={{
                __html: `Q:  ` + selectedQuestion.question,
              }}
            ></h4>
          )}
        </Box>
        <Box
          className="QuizPageMobileAnswers"
          sx={{
            display: "grid",
            gridTemplateColumns: "30% 30%",
            width: "100%",
            gridGap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          {options.length > 0 &&
            options.map((o, i) => (
              <button
                key={i}
                onClick={() => {
                  if (selectedQuestion.givenAnswer) return;
                  dispatch(
                    setGivenAnswers({
                      question: selectedQuestion.question,
                      givenAnswer: o,
                    })
                  );
                }}
                className={
                  selectedQuestion.givenAnswer == undefined
                    ? ""
                    : selectedQuestion.givenAnswer == o
                    ? o == selectedQuestion.correct_answer
                      ? "bggreen"
                      : "bgred"
                    : ""
                }
                dangerouslySetInnerHTML={{ __html: o }}
              ></button>
            ))}
        </Box>
      </Box>

      <Box
        className="SubmitBox"
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Link href="/result">
          <Button
            className="buttonCss SubmitButton"
            variant="outlined"
            sx={{ width: "20%" }}
            onClick={handleClick}
          >
            Submit
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
// category: "Entertainment: Japanese Anime & Manga";
// correct_answer: "Kars";
// difficulty: "medium";
// incorrect_answers: (3)[("Erina Joestar", "Santana", "Wired Beck")];
// question: "The main antagonist of the second part of JoJo&#039;s Bizarre Adventure is which of the following?";
// type: "multiple";

export default QuizPage;
