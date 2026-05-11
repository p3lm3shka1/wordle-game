import { useState, useEffect } from "react";

import Wordle from "../Wordle/Wordle";
import WordList from "../WordList/WordList";

import "./StatusLabel.scss";

const StatusLabel = ({ winner, solution }) => {
  return (
    <div className="status">
      {winner && <div className="status__label win">You Win! </div>}
      {!winner && <div className="status__label lose">You Lose!</div>}
      <div className="status__solution">
        The word is: <span>{solution}</span>
      </div>
    </div>
  );
};

export default StatusLabel;
