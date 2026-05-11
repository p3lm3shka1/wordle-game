import "./Row.scss";

const Row = ({ guess, currentGuess }) => {
  if (currentGuess) {
    const letters = currentGuess.split("");

    return (
      <div className="row row--current">
        {letters.map((letter, index) => (
          <div key={index} className="row__cell row__cell--filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index} className="row__cell" />
        ))}
      </div>
    );
  }

  if (guess) {
    return (
      <div className="row row--past">
        {guess.map((letter, index) => (
          <div key={index} className={`row__cell row__cell--${letter.color}`}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="row__cell" />
      ))}
    </div>
  );
};

export default Row;
