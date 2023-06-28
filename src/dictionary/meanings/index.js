import Synonyms from "../synonyms";
import { useSearchContext } from "../../context/searchContext";

import style from "./Meanings.module.css";

function Meanings({ meaning }) {
  const {
    partOfSpeech,
    definition,
    derivation,
    synonyms,
    examples,
    typeOf,
    ...details
  } = meaning;

  const { setKeyword } = useSearchContext();

  return (
    <div className={style.meaning}>
      <span className={style.partOfSpeech}>{partOfSpeech}</span>
      <p className={style.definition}>{definition}</p>
      {examples?.length > 0 && (
        <ul className={style.examples}>
          {examples.map((example, index) => (
            <li key={index}>{example}</li>
          ))}
        </ul>
      )}
      {derivation?.length > 0 && (
        <ul className={style.derivations}>
          {derivation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {synonyms?.length > 0 && <Synonyms synonyms={synonyms} />}
      See also:
      {typeOf?.length > 0 && (
        <ul className={style.details}>
          {typeOf.map((item, index) => (
            <li key={index}>
              <button onClick={(e) => setKeyword(e.target.textContent)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
      {Object.entries(details).map(([key, value]) => {
        return (
          <div>
            {key}: {value}
          </div>
        );
      })}
    </div>
  );
}

export default Meanings;
