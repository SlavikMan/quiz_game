import React from "react";
import { useState, useContext, useEffect } from "react";
import { QuizContext } from "../Helpers/Context";
import ModalWarning from "./modalWarning";
import "../App.css";
// import { quizData } from "../getData";

function Quiz(props) {
  const { score, setScoreGame } = useContext(QuizContext);
  const { setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [mixedAnswers, setMixedAnswers] = useState([]); //mixedAnswers.push();
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const randomedAnswears = [
      ...props.quizData[currQuestion].incorrect_answers,
      props.quizData[currQuestion].correct_answer,
    ];
    randomedAnswears.sort(() => Math.random() - 0.5);
    setMixedAnswers(randomedAnswears);
  }, [currQuestion]);

  function nextQuestion() {
    if (optionChosen === "") {
      setModalActive(true);
    } else {
      if (props.quizData[currQuestion].correct_answer === optionChosen) {
        setScoreGame(score + 1);
      }
      setModalActive(false);
      setOptionChosen("");
      setCurrQuestion(currQuestion + 1);
    }
  }

  function finishQuiz() {
    if (props.quizData[currQuestion].correct_answer === optionChosen) {
      setScoreGame(score + 1);
    }

    const endTime = Date.now();
    props.getTime1(endTime);
    setGameState("endScreen");
  }

  return (
    <div className="quiz">
      <div className="categoryName">
        Category: {props.quizData[currQuestion].category}
      </div>

      <div className="count">
        {" "}
        {currQuestion + 1}/{props.quizData.length}
      </div>
      <h1 className="question">{props.quizData[currQuestion].question}</h1>
      <div className="options">
        {mixedAnswers.map((answer, index) => (
          <button onClick={() => setOptionChosen(answer)} key={index}>
            {answer}
          </button>
        ))}
      </div>

      {currQuestion == props.quizData.length - 1 ? (
        <button
          className="finish"
          onClick={() => {
            finishQuiz();
          }}
        >
          Finish Quiz
        </button>
      ) : (
        <button className="finish" onClick={() => nextQuestion()}>
          Next Question
        </button>
      )}
      <button className="finish cancel" onClick={() => setGameState("menu")}>
        Cancel Quiz
      </button>
      <ModalWarning active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default Quiz;
