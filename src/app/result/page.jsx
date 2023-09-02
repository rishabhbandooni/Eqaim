"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Result from "@/src/components/Result";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
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

export default function page(props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const questions = useSelector((state) => state.questions.question);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;
  function getScore() {
    let score = 0;
    questions.forEach((q) => {
      if (q.givenAnswer == q.correct_answer) {
        score++;
      }
    });
    return score;
  }
  useEffect(() => {
    if (questions.length > 0) setSelectedQuestion(questions[0]);
  }, [questions]);

  return (
    <div className="bg-white">
      <div>
        <main className="quizGameContainer mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" totalScoreContainer flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="quizGame text-4xl font-bold tracking-tight text-gray-900">
              <span className="spanHead">Result</span> Page
            </h1>

            <div className=" flex items-center">
              <div className="totalScore">
                <h3>
                  Total<span className="spanHead">Score</span>:{getScore()}/
                  {questions.length}
                </h3>
              </div>
            </div>
          </div>

          <div className="QuestionsOverview">
            <Box sx={{ maxWidth: "25%", padding: "1rem" }}>
              <h3>Result Section</h3>
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
                          q.givenAnswer == undefined
                            ? "buttonCss"
                            : q.givenAnswer == q.correct_answer
                            ? "bggreen"
                            : "bgred"
                        }
                      >
                        {i + 1}
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
            <Box className="quizPageBox" sx={{ width: "75%" }}>
              <Result selectedQuestion={selectedQuestion} />
            </Box>
          </div>
        </main>
        {/* SwipeableDrawer */}
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
                Result Overview
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
              <CloseIcon onClick={() => setOpen(false)} className="closeIcon" />
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
                          q.givenAnswer == undefined
                            ? "buttonCss"
                            : q.givenAnswer == q.correct_answer
                            ? "bggreen"
                            : "bgred"
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
  );
}
