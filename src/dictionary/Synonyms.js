import style from "./Synonyms.module.css";

function Synonyms({ synonyms }) {
  return (
    <section className={style.synonymsSection}>
      <h6 className={style.title}>Synonyms</h6>
      <div className={style.synonyms}>
        <div className="row">
          {synonyms.map((synonym, index) => (
            <div className={`col-3 ${style.synonym}`} key={index}>
              {synonym}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Synonyms;
