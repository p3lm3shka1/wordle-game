import { useEffect, useState } from "react";
import "./Timer.scss";

const Timer = ({ setTimeIsOver, initialSeconds = 120, resetSignal = 0 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [resetSignal, initialSeconds]);

  useEffect(() => {
    if (seconds <= 0) {
      setTimeIsOver(true);
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, setTimeIsOver]);

  return (
    <div className="timer">Time remaining: {seconds > 0 ? seconds : 0} s</div>
  );
};

export default Timer;
