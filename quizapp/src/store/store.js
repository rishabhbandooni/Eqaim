// src/store.js
import { createStore } from "redux";

// Define initial state
const initialState = {
  questions: ["Hello Questions"], // This will store the fetched questions
  // Add more state properties as needed
};

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    // Add more cases as needed
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
