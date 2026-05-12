import React, { useState } from "react";

import "./App.scss";

import WordList from "./components/WordList/WordList";
import StartScreen from "./components/StartScreen/StartScreen";

import Sidebar from "./components/Sidebar/Sidebar"; // <-- добавь

function App() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(120);

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStarted(true);
    }, 1000);
  };

  return (
    <>
      {!started ? (
        <StartScreen onStart={handleStart} loading={loading} />
      ) : (
        <>
          <Sidebar
            timerSeconds={timerSeconds}
            setTimerSeconds={setTimerSeconds}
          />
          <WordList
            timerSeconds={timerSeconds}
            setTimerSeconds={setTimerSeconds}
          />
        </>
      )}
    </>
  );
}

export default App;
