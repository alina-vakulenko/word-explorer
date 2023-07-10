import { getInitialBoard } from "./utils/getInitialBoard";
import {
  updateBoardState,
  addLetter,
  removeLetter,
  setAttemptStatus,
} from "./utils/updateBoard";

export const initialState = {
  wordBank: new Set(),
  targetWord: "",
  submittedWords: [],
  board: [],
  attemptCount: 0,
  letterPos: 0,
  usedLetters: new Map(),
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case "initGame": {
      const newBoard = getInitialBoard(
        action.payload.attemptsLimit,
        action.payload.wordLength,
        {
          letter: "",
          state: "",
          status: "",
        }
      );
      return {
        ...state,
        board: newBoard,
        wordBank: action.payload.wordBank,
        targetWord: action.payload.targetWord,
      };
    }
    case "selectLetter": {
      const newBoard = addLetter(
        state.board,
        state.attemptCount,
        state.letterPos,
        action.payload
      );

      return { ...state, board: newBoard, letterPos: state.letterPos + 1 };
    }
    case "submit": {
      const newBoard = updateBoardState(
        state.board,
        state.attemptCount,
        action.payload,
        state.targetWord
      );

      const newState = {
        ...state,
        board: newBoard,
        submittedWords: [...state.submittedWords, action.payload],
        attemptCount: state.attemptCount + 1,
        letterPos: 0,
      };

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
      const newBoard = removeLetter(
        state.board,
        state.attemptCount,
        state.letterPos - 1
      );

      return { ...state, board: newBoard, letterPos: state.letterPos - 1 };
    }
    case "animate": {
      if (action.payload === "correct") {
        const newBoard = setAttemptStatus(
          state.board,
          state.attemptCount - 1,
          action.payload
        );

        return { ...state, board: newBoard };
      } else {
        const newBoard = setAttemptStatus(
          state.board,
          state.attemptCount,
          action.payload
        );

        return { ...state, board: newBoard };
      }
    }
    default:
      return state;
  }
};
