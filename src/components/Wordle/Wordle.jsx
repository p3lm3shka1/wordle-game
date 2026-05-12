import { useState, useEffect } from "react";

import useWordle from "../../hooks/useWordle";
import Grid from "../Grid/Grid";
import Keypad from "../Keypad/Keypad";
import StatusLabel from "../StatusLabel/StatusLabel";
import Timer from "../Timer/Timer";
import Sidebar from "../Sidebar/Sidebar";

import "./Wordle.scss";

const Wordle = ({ solution, onNewSolution, timerSeconds, setTimerSeconds }) => {
  const {
    currentGuess,
    handleKeyup,
    turn,
    guesses,
    isCorrect,
    usedKeys,
    resetValue,
  } = useWordle(solution);

  const [hide, setHide] = useState(false);
  const [timeIsOver, setTimeIsOver] = useState(false);
  const [timerResetSignal, setTimerResetSignal] = useState(0);

  const handleKeypadClick = (key) => {
    if (key === "enter") key = "Enter";
    if (key === "backspace") key = "Backspace";
    handleKeyup({ key });
  };

  const status = isCorrect ? "win" : turn > 5 || timeIsOver ? "lose" : null;

  useEffect(() => {
    if (hide) return;

    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, hide]);

  useEffect(() => {
    if (isCorrect || turn > 5 || timeIsOver) {
      setHide(true);
    }
  }, [isCorrect, turn, timeIsOver]);

  const handleReset = () => {
    resetValue();
    setHide(false);
    setTimeIsOver(false);
    setTimerResetSignal((prev) => prev + 1);
    onNewSolution?.();
  };

  return (
    <>
      {timeIsOver && <div className="status-label lose">Time is over!</div>}

      {hide && (
        <>
          <StatusLabel winner={status === "win"} solution={solution} />
          <button className="try-again" onClick={handleReset}>
            Restart?
          </button>
        </>
      )}

      {!hide && (
        <>
          <Timer
            setTimeIsOver={setTimeIsOver}
            initialSeconds={timerSeconds}
            resetSignal={timerResetSignal}
          />
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
          <Keypad usedKeys={usedKeys} onKeyClick={handleKeypadClick} />
          <Sidebar
            timerSeconds={timerSeconds}
            setTimerSeconds={setTimerSeconds}
          />
        </>
      )}
    </>
  );
};

export default Wordle;
