import { boardDefault, WORD_LENGTH } from "./settings";

export const initialState = {
  board: boardDefault,
  attempt: { count: 0, letterPos: 0 },
};

export const selectLetterReducer = (state, action) => {
  switch (action.type) {
    case "selectLetter": {
      if (state.attempt.letterPos > WORD_LENGTH - 1) return state;
      const newBoard = [...state.board];
      newBoard[state.attempt.count][state.attempt.letterPos] = action.payload;
      const newAttempt = {
        ...state.attempt,
        letterPos: state.attempt.letterPos + 1,
      };
      return { board: newBoard, attempt: newAttempt };
    }
    case "submit": {
      if (state.attempt.letterPos < WORD_LENGTH) return state;
      const newAttempt = { count: state.attempt.count + 1, letterPos: 0 };
      return {
        ...state,
        attempt: newAttempt,
      };
    }
    case "delete": {
      if (state.attempt.letterPos === 0) return state;
      const newBoard = [...state.board];
      newBoard[state.attempt.count][state.attempt.letterPos - 1] = "";
      const newAttempt = {
        ...state.attempt,
        letterPos: state.attempt.letterPos - 1,
      };
      return { board: newBoard, attempt: newAttempt };
    }

    default:
      return state;
  }
};
