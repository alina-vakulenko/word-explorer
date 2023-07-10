import { useEffect, useState } from "react";

import { useWordleContext } from "../context/wordleContext";
import { getRandomWord } from "./utils/getRandowWord";
import { getSubmittedWord } from "./utils/getSubmittedWord";

import Alert from "./alert/Alert";
import Board from "./board";
import Keyboard from "./keyboard";

import { useAlert } from "./alert/useAlert";
import targetWords from "./targetWords.json";
import { WORD_LENGTH, MAX_ATTEMPTS } from "./settings";

const WordleGame = () => {
  const { gameState, dispatch } = useWordleContext();
  const [gameOver, setGameOver] = useState(false);
  const { showAlert, isVisible, message, variant } = useAlert();

  useEffect(() => {
    const wordBank = new Set(targetWords);
    const randomWord = getRandomWord(targetWords);
    dispatch({
      type: "initGame",
      payload: {
        wordLength: WORD_LENGTH,
        attemptsLimit: MAX_ATTEMPTS,
        wordBank: wordBank,
        targetWord: randomWord,
      },
    });
  }, [dispatch]);

  useEffect(() => {
    const lastSubmittedWord =
      gameState.submittedWords[gameState.submittedWords.length - 1];

    if (lastSubmittedWord === gameState.targetWord) {
      setGameOver(true);
      dispatch({ type: "animate", payload: "correct" });
      showAlert("success", "Congrats", { delayMs: 1000, persist: true });
    } else if (gameState.submittedWords.length === MAX_ATTEMPTS) {
      setGameOver(true);
      showAlert("info", "Failed. You used all attempts", {
        delayMs: 1000,
        persist: true,
      });
    }
  }, [dispatch, gameState.submittedWords, gameState.targetWord, showAlert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameOver) return;

    const currentWord = getSubmittedWord(
      gameState.board,
      gameState.attemptCount
    );
    const attemptNotValid = currentWord.length !== WORD_LENGTH;
    const wordExists = gameState.wordBank.has(currentWord);

    if (attemptNotValid) {
      showAlert("error", "Not enough letters to submit a word");
      dispatch({ type: "animate", payload: "mistake" });
    } else if (!wordExists) {
      showAlert("error", "Word is not recognized");
      dispatch({ type: "animate", payload: "mistake" });
    } else {
      dispatch({ type: "submit", payload: currentWord });
    }
  };

  const handleDelete = () => {
    if (gameOver) return;
    const atLeastOneLetterSelected = gameState.letterPos > 0;
    if (atLeastOneLetterSelected) {
      dispatch({ type: "delete" });
    }
  };

  const handleSelectLetter = (letter) => {
    if (gameOver) return;
    const maxLengthNotReached = gameState.letterPos < WORD_LENGTH;
    if (maxLengthNotReached) {
      dispatch({ type: "selectLetter", payload: letter });
    }
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    } else if (e.key === "Backspace" || e.key === "Delete") {
      handleDelete();
    } else if (e.key.match(/^[a-z]$/i)) {
      handleSelectLetter(e.key);
    }
  };

  const handleMouseClick = (e) => {
    if (e.target.textContent === "Enter") {
      handleSubmit(e);
    } else if (e.target.matches("[data-delete]")) {
      handleDelete();
    } else {
      handleSelectLetter(e.target.textContent);
    }
  };

  return (
    <>
      {gameState.targetWord}
      <Alert isVisible={isVisible} message={message} variant={variant} />
      <Board />
      <Keyboard
        handleKeydown={handleKeydown}
        handleMouseClick={handleMouseClick}
      />
    </>
  );
};

export default WordleGame;
