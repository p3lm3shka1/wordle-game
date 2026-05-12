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
    onKeyClick?.(key);
  };

  const renderKey = (letter) => {
    const color = usedKeys[letter.key];
    const isWide = letter.key === "enter" || letter.key === "backspace";

    return (
      <button
        key={letter.key}
        type="button"
        className={`keypad__key ${color ? `keypad__key--${color}` : ""} ${
          isWide ? "keypad__key--wide" : ""
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
  };

  if (!letters) return null;

  const row1 = letters.slice(0, 10);
  const row2 = letters.slice(10, 19);
  const row3 = letters.slice(19);

  return (
    <div className="keypad">
      <div className="keypad__row">{row1.map(renderKey)}</div>
      <div className="keypad__row keypad__row--offset">
        {row2.map(renderKey)}
      </div>
      <div className="keypad__row">{row3.map(renderKey)}</div>
    </div>
  );
};

export default Keypad;
