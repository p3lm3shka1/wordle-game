import React, { useState } from "react";

import "./App.scss";

import WordList from "./components/WordList/WordList";
import StartScreen from "./components/StartScreen/StartScreen";
import Footer from "./components/Footer/Footer";

function App() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStarted(true);
    }, 1000);
  };

  return (
    <>
      {!started ? (
        <StartScreen onStart={handleStart} loading={loading} />
      ) : (
        <WordList />
      )}
      <Footer />
    </>
  );
}

export default App;
