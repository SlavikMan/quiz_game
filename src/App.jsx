import { useState, useEffect } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import "./styles/style.css";
import "./styles/normalize.css";
import { QuizContext } from "./Helpers/Context";
import { getData, quizData } from "./getData";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [gameState, setGameState] = useState("menu");
  const [score, setScoreGame] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [diffInSeconds, setDiffInSeconds] = useState(0);

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setQuizData(data);
    }

    if (quizData.length === 0) {
      fetchData();
    }
  }, [quizData]);

  //  const [quizData, setQuizData] = useState([]);

  // useEffect(() => {
  //   // getData(setQuizData(quizData));
  //   // getData()
  //   setQuizData(getData());
  //   console.log("quizData in App:", quizData);
  // }, []);

  function getTime(startTime) {
    setStartTime(startTime);
  }

  function getTime1(endTime) {
    setEndTime(endTime);
    getDifferentTime(endTime, startTime);
  }

  const getDifferentTime = (endTime, startTime) => {
    const diffInSeconds = ((endTime - startTime) / 1000).toFixed(1);
    setDiffInSeconds(diffInSeconds);
  };

  return (
    <div className="App">
      <h1 className="Header">Quiz Game</h1>
      <i class="bi bi-mortarboard"></i>
      <i class="bi bi-mortarboard"></i>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScoreGame,
          quiz,
          setQuiz,
          startTime,
          setStartTime,
          endTime,
          setEndTime,
          diffInSeconds,
          setDiffInSeconds,
        }}
      >
        {gameState === "menu" && <MainMenu getTime={getTime} />}
        {gameState === "quiz" && (
          <Quiz quizData={quizData} getTime1={getTime1} />
        )}
        {gameState === "endScreen" && (
          <EndScreen quizData={quizData} setQuizData={setQuizData} />
        )}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
