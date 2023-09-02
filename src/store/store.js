const { configureStore } = require("@reduxjs/toolkit");
const { default: questionSlice } = require("./questionSlice");

export const store = configureStore({
  reducer: {
    questions: questionSlice,
  },
});
