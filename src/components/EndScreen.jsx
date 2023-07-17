import React from "react";
import { useContext } from "react";
import { quizData, getData } from "../getData";

import { QuizContext } from "../Helpers/Context";
import "../App.css";

function EndScreen(props) {
  const { score } = useContext(QuizContext);
  const { setGameState } = useContext(QuizContext);
  const { diffInSeconds } = useContext(QuizContext);
  // const [quizData, setQuizData] = useContext(QuizContext);

  function changeState() {
    setGameState("menu");
    props.setQuizData([]);
  }
  return (
    <div className="endScreen">
      <h1 className="result">Quiz Finished</h1>
      <div className="data">
        <h3 className="score">
          Right answears: {score} / {props.quizData.length}
        </h3>
        <h3 className="score">Time: {diffInSeconds} sec</h3>
      </div>

      <button className="restart" onClick={() => changeState()}>
        Restart
      </button>
    </div>
  );
}

export default EndScreen;
