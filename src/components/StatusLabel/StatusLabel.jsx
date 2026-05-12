import "./StatusLabel.scss";

const StatusLabel = ({ winner, solution }) => {
  return (
    <div className={`status ${winner ? "status--win" : "status--lose"}`}>
      <div className={`status__label ${winner ? "win" : "lose"}`}>
        {winner ? "You Win!" : "You Lose!"}
      </div>

      <div className="status__solution">
        The word is: <span>{solution}</span>
      </div>
    </div>
  );
};

export default StatusLabel;
