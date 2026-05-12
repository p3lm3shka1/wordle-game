import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [usedKeys, setUsedKeys] = useState({});

  const formatGuess = () => {
    let solutionArray = [...solution];

    let formatttedGuess = [...currentGuess].map((letter, index) => {
      let color = "grey";

      if (solutionArray[index] === letter) {
        color = "green";
        solutionArray[index] = null;
      } else if (solutionArray.includes(letter)) {
        color = "yellow";
        solutionArray[solutionArray.indexOf(letter)] = null;
      }

      return { key: letter, color: color };
    });

    return formatttedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prev) => {
      let newValue = [...prev];
      newValue[turn] = formattedGuess;

      return newValue;
    });

    setHistory((prev) => [...prev, currentGuess]);

    setTurn((prev) => prev + 1);

    setCurrentGuess("");

    setUsedKeys((prev) => {
      let newKeys = { ...prev };
      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key];

        if (letter.color === "green") {
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && currentColor !== "green") {
          newKeys[letter.key] = "yellow";
          return;
        }
        if (
          letter.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          newKeys[letter.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
  };

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (
        turn > 5 ||
        history.includes(currentGuess) ||
        currentGuess.length !== 5
      ) {
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
      console.log(formatted);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  const resetValue = () => {
    setTurn(0);
    setCurrentGuess("");
    setHistory([]);
    setIsCorrect(false);
    setGuesses([...Array(6)]);
    setUsedKeys({});
  };

  return {
    turn,
    currentGuess,
    guesses,
    history,
    isCorrect,
    handleKeyup,
    usedKeys,
    resetValue,
  };
};

export default useWordle;
