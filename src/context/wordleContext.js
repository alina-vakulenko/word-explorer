import { useReducer, useContext, createContext } from "react";

import { initialState, gameReducer } from "../wordle/reducer";

const WordleContext = createContext(null);

const WordleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <WordleContext.Provider
      value={{
        gameState: state,
        dispatch,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};
export default WordleProvider;

export const useWordleContext = () => {
  return useContext(WordleContext);
};
