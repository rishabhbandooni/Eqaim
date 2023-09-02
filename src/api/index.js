// src/api.js
import axios from "axios";

const API_URL = "https://opentdb.com/api.php?amount=15";

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return error;
  }
};
