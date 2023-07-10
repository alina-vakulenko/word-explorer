import Tile from "../tile";

const Row = ({ tiles, rowIndex }) => {
  return (
    <>
      {tiles.map((tile, colIndex) => (
        <Tile
          letter={tile.letter}
          state={tile.state}
          status={tile.status}
          order={colIndex}
          key={`r${rowIndex}c${colIndex}`}
        />
      ))}
    </>
  );
};

export default Row;
