import Footer from "../Footer/Footer";

import "./StartScreen.scss";

import Logo from "../../assets/images/logo-new.png";

import { FiLoader } from "react-icons/fi";

const StartScreen = ({ onStart, loading }) => (
  <div className="start">
    {!loading ? (
      <>
        <img src={Logo} alt="Wordle Logo" className="start__logo" />
        <h1 className="start__title">Welcome to Wordle!</h1>
        <button className="start__btn" onClick={onStart}>
          Start Game
        </button>
      </>
    ) : (
      <div className="loader">
        <FiLoader className="loader__spinner" />
        <p>Loading game...</p>
      </div>
    )}
    <Footer />
  </div>
);

export default StartScreen;
