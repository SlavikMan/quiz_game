import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css";

function MainMenu({ getTime }) {
  const { setGameState } = useContext(QuizContext);

  return (
    <div className="menu">
      <button
        onClick={() => {
          setGameState("quiz");
          const startTime = Date.now();
          getTime(startTime);
        }}
      >
        Start Quiz
      </button>
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        I'm lucky
      </button>
    </div>
  );
}

export default MainMenu;
