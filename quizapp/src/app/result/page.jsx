"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";

import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Result from "@/src/components/Result";

export default function page() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const questions = useSelector((state) => state.questions.question);
  const [selectedQuestion, setSelectedQuestion] = useState({});

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
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Result Page
            </h1>

            <div className="flex items-center">
              <div>
                <h3>
                  TotalScore:{getScore()}/{questions.length}
                </h3>
              </div>

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Questions</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
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
            <Box sx={{ width: "75%" }}>
              <Result selectedQuestion={selectedQuestion} />
            </Box>
          </div>
        </main>
      </div>
    </div>
  );
}
