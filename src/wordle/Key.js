import { useWordleContext } from "../context/wordleContext";
import style from "./Key.module.css";

const Key = ({ keyValue }) => {
  const { dispatch } = useWordleContext();

  const handleMouseClick = () => {
    if (keyValue !== "Enter" && keyValue !== "Delete")
      dispatch({ type: "selectLetter", payload: keyValue });
  };

  return (
    <button className={style.key} onClick={handleMouseClick}>
      {keyValue}
    </button>
  );
};

export default Key;
