import { useState, useEffect } from "react";

import useWordle from "../../hooks/useWordle";
import Grid from "../Grid/Grid";
import Keypad from "../Keypad/Keypad";
import StatusLabel from "../StatusLabel/StatusLabel";
import Timer from "../Timer/Timer";

import "./Wordle.scss";

const Wordle = ({ solution, onNewSolution }) => {
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

  const handleKeypadClick = (key) => {
    if (key === "enter") key = "Enter";
    if (key === "backspace") key = "Backspace";
    handleKeyup({ key });
  };

  const status = isCorrect ? "win" : turn > 5 ? "lose" : null;

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect || turn > 5 || timeIsOver) {
      window.removeEventListener("keyup", handleKeyup);
      setHide(true);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn, timeIsOver]);

  const handleReset = () => {
    resetValue();
    setHide(false);
    setTimeIsOver(false);
    if (onNewSolution) onNewSolution();
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
          <Timer setTimeIsOver={setTimeIsOver} />
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
          <Keypad usedKeys={usedKeys} onKeyClick={handleKeypadClick} />
        </>
      )}
    </>
  );
};

export default Wordle;
