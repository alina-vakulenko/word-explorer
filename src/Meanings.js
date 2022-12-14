import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meanings.css";

function Meanings(props) {
  if (!props.meanings) {
    return null;
  }

  return (
    <div className="Meanings">
      <h6 className="part-of-speech">
        <i className="fa-solid fa-bookmark"></i> {props.meanings.partOfSpeech}
      </h6>
      {props.meanings.definitions.map((data, index) => {
        return (
          <div key={index}>
            <div className="definition">
              <span className="index-number">{index + 1}.</span>{" "}
              {data.definition}
              <Example example={data.example} />
            </div>
          </div>
        );
      })}
      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}

export default Meanings;
