import Row from "../Row/Row";

const Grid = (props) => {
  return (
    <>
      {props.guesses.map((guess, index) => {
        if (props.turn === index) {
          return <Row key={index} currentGuess={props.currentGuess} />;
        }

        return <Row key={index} guess={guess} />;
      })}
    </>
  );
};

export default Grid;
