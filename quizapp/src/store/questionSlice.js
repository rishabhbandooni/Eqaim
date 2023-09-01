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
    },
  },
});

export const { setQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
