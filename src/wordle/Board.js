import { useWordleContext } from "../context/wordleContext";
import Tile from "./Tile";

import style from "./Board.module.css";

const Row = ({ attempt, attemptCount }) => {
  return (
    <>
      {attempt.map((letter, letterPos) => (
        <Tile value={letter} key={`r${attemptCount}c${letterPos}`} />
      ))}
    </>
  );
};
const Board = () => {
  const { gameState } = useWordleContext();
  return (
    <div className={style.board}>
      {gameState?.board?.map((attempt, attemptCount) => (
        <Row key={attemptCount} attempt={attempt} attemptCount={attemptCount} />
      ))}
    </div>
  );
};

export default Board;
