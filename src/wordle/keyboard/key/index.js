import { useState, useEffect } from "react";

import { useWordleContext } from "../../../context/wordleContext";

import style from "../Keyboard.module.css";

const Key = ({ value, onMouseClick }) => {
  const [status, setStatus] = useState("");
  const { gameState } = useWordleContext();

  useEffect(() => {
    const usedLetterState = gameState.usedLetters.get(value);
    setStatus(usedLetterState);
  }, [gameState.usedLetters, value]);

  return (
    <button data-state={status} className={style.key} onClick={onMouseClick}>
      {value}
    </button>
  );
};

export default Key;
