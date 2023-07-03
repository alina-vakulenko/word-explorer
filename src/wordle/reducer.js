import { WORD_LENGTH, MAX_ATTEMPTS } from "./settings";
import { getInitialBoard } from "./utils/getInitialBoard";
import { getSubmittedWord } from "./utils/getSubmittedWord";
import {
  updateBoardState,
  getBoardWithUpdatedLetter,
} from "./utils/updateBoard";

export const initialState = {
  wordBank: new Set(),
  targetWord: "",
  board: [],
  attemptCount: 0,
  letterPos: 0,
  usedLetters: new Map(),
  gameOver: false,
  win: false,
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case "initGame": {
      const newBoard = getInitialBoard(MAX_ATTEMPTS, WORD_LENGTH, {
        letter: "",
        state: "",
      });
      return {
        ...state,
        board: newBoard,
        wordBank: action.payload.wordBank,
        targetWord: action.payload.targetWord,
      };
    }
    case "selectLetter": {
      const maxLengthReached = state.letterPos > WORD_LENGTH - 1;
      if (maxLengthReached) return state;

      const newBoard = getBoardWithUpdatedLetter(
        state.board,
        state.attemptCount,
        state.letterPos,
        action.payload
      );

      return { ...state, board: newBoard, letterPos: state.letterPos + 1 };
    }
    case "submit": {
      const attemptNotValid = state.letterPos !== WORD_LENGTH;
      if (attemptNotValid) return state;

      const currentWord = getSubmittedWord(state.board, state.attemptCount);
      const wordExists = state.wordBank.has(currentWord);
      if (!wordExists) {
        return state;
      }
      // update state of each letter in submitted word for proper color
      const newBoard = updateBoardState(
        state.board,
        state.attemptCount,
        currentWord,
        state.targetWord
      );

      const newState = { ...state, board: newBoard };

      // if submitted word is not recognized, forbid next attempt
      const isLastAttempt = state.attemptCount === MAX_ATTEMPTS - 1;
      if (currentWord === state.targetWord) {
        newState.gameOver = true;
        newState.win = true;
      } else if (isLastAttempt) {
        newState.gameOver = true;
        newState.win = false;
      } else {
        newState.attemptCount = state.attemptCount + 1;
        newState.letterPos = 0;
      }

      return newState;
    }
    case "updateUsedLetters": {
      const usedLetters = new Map(state.usedLetters);
      usedLetters.set(action.payload.letter, action.payload.state);
      return {
        ...state,
        usedLetters,
      };
    }
    case "delete": {
      const attemptNotStarted = state.letterPos === 0;
      if (attemptNotStarted || state.gameOver) return state;

      const newBoard = [...state.board];
      newBoard[state.attemptCount][state.letterPos - 1].letter = "";

      return { ...state, board: newBoard, letterPos: state.letterPos - 1 };
    }
    default:
      return state;
  }
};
