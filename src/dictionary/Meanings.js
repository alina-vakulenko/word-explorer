import Synonyms from "./Synonyms";

import style from "./Meanings.module.css";

function Meanings({ meaning }) {
  return (
    <div className={style.meanings}>
      <h6 className={style.partOfSpeech}>
        <i className="fa-solid fa-bookmark"></i> {meaning?.partOfSpeech}
      </h6>
      {meaning?.definitions?.map((data, index) => {
        return (
          <div key={index}>
            <div className={style.definition}>
              <span className={style.index}>{index + 1}.</span>{" "}
              {data.definition}
              {data.example && (
                <div className={style.example}>
                  <i className="fa-solid fa-chevron-right"></i> {data.example}
                </div>
              )}
            </div>
          </div>
        );
      })}
      <Synonyms synonyms={meaning?.synonyms} />
    </div>
  );
}

export default Meanings;
