import React from "react";

const QuizContext = React.createContext();

export const QuizProvider = ({ children }) => {
  return <QuizContext.Provider value={5}>{children}</QuizContext.Provider>;
};

export default QuizContext;
