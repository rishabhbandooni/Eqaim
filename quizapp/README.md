<!--  Quiz Application -->

## Overview

This quiz application is designed to allow users to take quizzes and receive immediate feedback on their scores. It includes a timer that automatically submits the quiz after 30 minutes of inactivity. The application is built using ReactJS, Redux, Next.js, and Material UI, Tailwind CSS

Website Link : https://the-rishquiz-app.vercel.app/

**Points To Remember While Using The Game**
1- You Cannot Start Quiz Game Without Email.
2- As You start the game There is a timer of 30 Minutes and as the time ends the game automaticaly will end or you have to use submit button if you want to end it sooner.
3- On Overview Questions Panel The visited button shows orange and if you have answered it , the button color changes to green. the default color of the button is blue.
4- you can check your previous and next questions by clicking on the button of prev and next or you can directly click on the button of overview panel.
5- If you have already started the game, then you can only start it again after completing all questions of that particular quiz.
6-On the result Page , You will see all of your correctly answered questions as green color and all the wrong answered questions as red and unanswered questions as blue along with your total score.

### Components

The application consists of the following key components:

- **QuizPage**: Displays the quiz questions, answer options, and handles user interactions.
- **Result**: Displays the user's score and provides a summary of their quiz, including questions, user answers, and correct answers.
- **Timer**: Manages the countdown timer and triggers the quiz submission when the timer reaches zero.

## Setup and Installation

To set up and run this application locally, follow these steps:

1. Clone the repository to your local machine:
   https://github.com/yourusername/quiz-application.git
2. Install dependencies:

3. Start the development server:

## Challenges Faced

During the development of this application, some of the challenges encountered and how they were overcome include:

1. **Timer Implementation**: Implementing the countdown timer and ensuring it works accurately, especially on Page Reload and after the timer ends the quiz gets automatically submitted.

2. **Redux Integration**: Integrating Redux for state management required understanding how to structure the storeproperly. It was overcome by following Redux best practices and documentation.
3. **CorrectAnswers And ActiveInactive Button**: Users should be able to navigate to a specific question.
   -Making An overview panel should show all questions indicating:
   -Making Which questions the user has visited , I have Done it Via orange color button.
   -Making Which questions have been attempted, I have Done it Via green color button.

4. **Styling**: Achieving a visually appealing design using Material UI and ensuring consistent styling throughout the application. Challenges were addressed through experimentation and referring to Material UI, Taiwind documentation and examples.
