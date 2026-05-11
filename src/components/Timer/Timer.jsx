import { useState, useEffect } from "react";

import "./Timer.scss";

const Timer = ({ setTimeIsOver, initialSeconds = 120 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      setTimeIsOver(true);
      return;
    }
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, setTimeIsOver]);

  return (
    <div className="timer">Time remaining: {seconds > 0 ? seconds : 0} s</div>
  );
};

export default Timer;
