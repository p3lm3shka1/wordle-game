import { useState, useEffect } from "react";
import Wordle from "../Wordle/Wordle";
import "./WordList.scss";

const WordList = () => {
  const [solution, setSolution] = useState(null);

  const generateNewSolution = () => {
    fetch("/solutions.json")
      .then((res) => res.json())
      .then((json) => {
        const list = json.solutions;
        const random = list[Math.floor(Math.random() * list.length)];
        setSolution(random.word);
      })
      .catch((err) => console.error("Cannot fetch solutions:", err));
  };

  useEffect(() => {
    generateNewSolution();
  }, []);

  return (
    <div className="solution">
      {solution && (
        <Wordle solution={solution} onNewSolution={generateNewSolution} />
      )}
    </div>
  );
};

export default WordList;
