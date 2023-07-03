import { useEffect } from "react";
import { useWordleContext } from "../../../context/wordleContext";
import style from "./Tile.module.css";

const Tile = ({ position, attempt }) => {
  const { gameState, dispatch } = useWordleContext();
  const { letter, state } = gameState.board[attempt][position];

  useEffect(() => {
    if (state) {
      dispatch({ type: "updateUsedLetters", payload: { letter, state } });
    }
  }, [state, letter, dispatch]);

  return (
    <div data-state={state} className={style.tile}>
      {letter}
    </div>
  );
};

export default Tile;
