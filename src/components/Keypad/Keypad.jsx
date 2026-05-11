import { useEffect, useState } from "react";

import { FaDeleteLeft } from "react-icons/fa6";

import "./Keypad.scss";

const Keypad = ({ usedKeys, onKeyClick }) => {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("/letters.json")
      .then((res) => res.json())
      .then((json) => setLetters(json.letters))
      .catch((err) => console.error("Cannot fetch letters:", err));
  }, []);

  const handleClick = (key) => {
    if (!onKeyClick) return;
    onKeyClick(key);
  };

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];
          return (
            <button
              key={letter.key}
              type="button"
              className={`keypad__key ${color ? `keypad__key--${color}` : ""} ${
                letter.key === "enter" || letter.key === "backspace"
                  ? "keypad__key--wide"
                  : ""
              }`}
              onClick={() => handleClick(letter.key)}
            >
              {letter.key === "backspace" ? (
                <FaDeleteLeft className="backspace" />
              ) : (
                letter.key
              )}
            </button>
          );
        })}
    </div>
  );
};

export default Keypad;
