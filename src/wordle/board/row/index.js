import Tile from "../tile";

const Row = ({ attempt, attemptCount }) => {
  return (
    <>
      {attempt.map((letter, letterPos) => (
        <Tile
          position={letterPos}
          attempt={attemptCount}
          key={`r${attemptCount}c${letterPos}`}
        />
      ))}
    </>
  );
};

export default Row;
