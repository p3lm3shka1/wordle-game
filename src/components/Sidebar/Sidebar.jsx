import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import "./Sidebar.scss";

const Sidebar = ({ timerSeconds, setTimerSeconds }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleRange = (e) => {
    setTimerSeconds(Number(e.target.value));
  };

  return (
    <>
      <button
        className="sidebar__toggle"
        type="button"
        aria-label="Open rules"
        onClick={() => setOpen(true)}
      >
        <IoMenu />
      </button>

      <div
        className={`sidebar__overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside className={`sidebar ${open ? "is-open" : ""}`}>
        <h2 className="sidebar__title">Rules</h2>

        <div className="sidebar__rules">
          <p>Guess the 5-letter word in 6 tries or less!</p>
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
          <p>
            <b className="green">Green:</b> Correct letter in the correct
            position
          </p>
          <p>
            <b className="yellow">Yellow:</b> Correct letter in the wrong
            position
          </p>
          <p>
            <b className="grey">Grey:</b> Incorrect letter
          </p>
          <p>You have limited time to guess the word.</p>
        </div>

        <div className="sidebar__section">
          <h2 className="sidebar__subtitle">Change timer</h2>

          <div className="sidebar__range">
            <span>30s</span>
            <input
              type="range"
              min="30"
              max="300"
              step="30"
              value={timerSeconds}
              onChange={handleRange}
            />
            <span>300s</span>
          </div>

          <p className="sidebar__value">
            Current: <b>{Math.round(timerSeconds / 60)} min</b> ({timerSeconds}
            s)
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
