"use client";
import React, { Fragment, useState, useEffect } from "react";

import Timer from "@/src/components/Timer";
import QuizPage from "@/src/components/QuizPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "@/src/api";
import { setQuestions, setVisited } from "@/src/store/questionSlice";
import { Button } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function page(props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const questions = useSelector((state) => state.questions.question);
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const drawerBleeding = 56;

  const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
      theme.palette.mode === "light"
        ? grey[100]
        : theme.palette.background.default,
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
  }));

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
  }));

  const fetchData = async () => {
    try {
      if (localStorage.getItem("questions")) {
        dispatch(setQuestions(JSON.parse(localStorage.getItem("questions"))));
      } else {
        console.log("API");
        const data = await fetchQuestions();

        dispatch(setQuestions(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setSelectedQuestion(questions[activeButton]);
      dispatch(setVisited(questions[activeButton].question));
    }
  }, [questions]);

  useEffect(() => {
    if (questions.length > 0) {
      setSelectedQuestion(questions[activeButton]);
      dispatch(setVisited(questions[activeButton].question));
    }
  }, [activeButton]);

  return (
    <div className="bg-white">
      <div>
        <main className="quizGameContainer mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="quizGameHeading flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="quizGame text-4xl font-bold tracking-tight text-gray-900">
              Quiz Game
            </h1>

            <div className="timerContainer flex items-center">
              <div>
                <Timer />
              </div>
            </div>
          </div>

          <div className="QuestionsOverview">
            <Box sx={{ maxWidth: "25%", padding: "1rem" }}>
              <h3>Questions Overview</h3>
              <Box className="OverviewPagination">
                {questions.length > 0 &&
                  questions.map((q, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        onClick={() => {
                          setSelectedQuestion(q);
                          setActiveButton(i);
                        }}
                        sx={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "0.5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className={
                          activeButton === i
                            ? q.visited
                              ? q.givenAnswer
                                ? "buttonCss answered"
                                : "buttonCss visited"
                              : "buttonCss active"
                            : q.visited
                            ? q.givenAnswer
                              ? "buttonCss answered"
                              : "buttonCss visited"
                            : "buttonCss"
                        }
                      >
                        {i + 1}
                      </Box>
                    </Box>
                  ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <Button
                  className=" PrevNext"
                  onClick={() => {
                    if (activeButton - 1 < 0) {
                      return;
                    }
                    setActiveButton(activeButton - 1);
                  }}
                  sx={{ width: "40%" }}
                  variant="outlined"
                >
                  Prev
                </Button>
                <Button
                  className=" PrevNext"
                  onClick={() => {
                    if (activeButton + 1 > questions.length - 1) {
                      return;
                    }
                    setActiveButton(activeButton + 1);
                  }}
                  sx={{ width: "40%" }}
                  variant="outlined"
                >
                  Next
                </Button>
              </Box>
            </Box>
            <Box className="quizPageBox" sx={{ width: "75%" }}>
              <QuizPage selectedQuestion={selectedQuestion} />
            </Box>
          </div>
        </main>
        <div>
          <Root>
            <CssBaseline />
            <Global
              styles={{
                ".MuiDrawer-root > .MuiPaper-root": {
                  height: `calc(50% - ${drawerBleeding}px)`,
                  overflow: "visible",
                },
              }}
            />

            <SwipeableDrawer
              className="drawerDesktop"
              container={container}
              anchor="bottom"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              swipeAreaWidth={drawerBleeding}
              disableSwipeToOpen={false}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <StyledBox
                sx={{
                  position: "absolute",
                  top: -drawerBleeding,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  visibility: "visible",
                  right: 0,
                  left: 0,
                }}
              >
                <Puller />
                <Typography sx={{ p: 2, color: "text.secondary" }}>
                  Questions Overview
                </Typography>
              </StyledBox>
              <StyledBox
                sx={{
                  px: 2,
                  pb: 2,
                  height: "100%",
                  overflow: "auto",
                }}
              >
                <CloseIcon
                  onClick={() => setOpen(false)}
                  className="closeIcon"
                />

                <Box className="OverviewPaginationMobile">
                  {questions.length > 0 &&
                    questions.map((q, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          onClick={() => {
                            setSelectedQuestion(q);
                            setActiveButton(i);
                          }}
                          sx={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "0.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className={
                            activeButton === i
                              ? q.visited
                                ? q.givenAnswer
                                  ? "buttonCss answered"
                                  : "buttonCss visited"
                                : "buttonCss active"
                              : q.visited
                              ? q.givenAnswer
                                ? "buttonCss answered"
                                : "buttonCss visited"
                              : "buttonCss"
                          }
                        >
                          {i + 1}
                        </Box>
                      </Box>
                    ))}
                </Box>
              </StyledBox>
            </SwipeableDrawer>
          </Root>
        </div>
      </div>
    </div>
  );
}
