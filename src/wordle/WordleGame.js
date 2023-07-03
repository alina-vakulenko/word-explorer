import { useEffect } from "react";
import { useWordleContext } from "../context/wordleContext";
import { getRandomWord } from "./utils/getRandowWord";
import targetWords from "./targetWords.json";

import Board from "./board";
import Keyboard from "./keyboard";

const WordleGame = () => {
  const { gameState, dispatch } = useWordleContext();

  useEffect(() => {
    const wordBank = new Set(targetWords);
    const randomWord = getRandomWord(targetWords);
    dispatch({
      type: "initGame",
      payload: { wordBank: wordBank, targetWord: randomWord },
    });
  }, [dispatch]);

  return (
    <>
      {gameState.gameOver && <div>{gameState.win ? "Congrats" : "Failed"}</div>}
      <Board />
      <Keyboard />
    </>
  );
};

export default WordleGame;
