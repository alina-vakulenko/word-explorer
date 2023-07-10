import { useWordleContext } from "../../context/wordleContext";

import Row from "./row";

import style from "./Board.module.css";

const Board = () => {
  const { gameState } = useWordleContext();
  const { board } = gameState;

  return (
    <div className={style.board}>
      {board.map((tiles, rowNumber) => (
        <Row key={rowNumber} tiles={tiles} attemptCount={rowNumber} />
      ))}
    </div>
  );
};

export default Board;
