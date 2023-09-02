const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  question: [],
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.question = action.payload;
      if (window != undefined) {
        localStorage.setItem("questions", JSON.stringify(state.question));
      }
    },
    setGivenAnswers: (state, action) => {
      state.question.forEach((ques) => {
        if (ques.question === action.payload.question) {
          ques.givenAnswer = action.payload.givenAnswer;
          return;
        }
      });
    },
    setVisited: (state, action) => {
      state.question.forEach((ques) => {
        if (ques.question === action.payload) {
          ques.visited = true;
          return;
        }
      });
    },
  },
});

export const { setQuestions, setGivenAnswers, setVisited } =
  questionsSlice.actions;

export default questionsSlice.reducer;
