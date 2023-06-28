import { useReducer, useContext, createContext } from "react";

import { initialState, selectLetterReducer } from "../wordle/reducer";

const WordleContext = createContext(null);

const WordleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(selectLetterReducer, initialState);

  return (
    <WordleContext.Provider value={{ gameState: state, dispatch }}>
      {children}
    </WordleContext.Provider>
  );
};
export default WordleProvider;

export const useWordleContext = () => {
  return useContext(WordleContext);
};
