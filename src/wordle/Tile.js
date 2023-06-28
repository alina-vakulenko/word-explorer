import style from "./Tile.module.css";

const Tile = ({ value }) => {
  return <div className={style.tile}>{value}</div>;
};

export default Tile;
