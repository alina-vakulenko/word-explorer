import style from "./Synonyms.module.css";

function Synonyms({ synonyms }) {
  return (
    <div className={style.synonymsSection}>
      <h6 className={style.title}>Synonyms</h6>
      <div className={style.synonyms}>
        {synonyms.map((synonym, index) => (
          <div className={style.synonym} key={index}>
            {synonym}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Synonyms;
