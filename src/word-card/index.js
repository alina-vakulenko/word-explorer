import Pronunciation from "../dictionary/pronunciation";
import style from "./WordCard.module.css";

function WordCard({ word, pronunciation }) {
  return (
    <article className={style.keywordCard}>
      <h3 className={style.keyword}>{word}</h3>
      <Pronunciation pronunciation={pronunciation} />
    </article>
  );
}

export default WordCard;
