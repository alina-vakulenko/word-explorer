import { useWordleContext } from "../../context/wordleContext";

import Row from "./row";

import style from "./Board.module.css";

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
