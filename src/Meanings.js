import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

function Meanings(props) {
  if (!props.meanings) {
    return null;
  }

  return (
    <div className="Meanings">
      <h6>
        <i className="fa-solid fa-bookmark"></i>{" "}
        <strong className="text-capitalize">
          {props.meanings.partOfSpeech}
        </strong>
      </h6>
      {props.meanings.definitions.map((data, index) => {
        return (
          <div key={index}>
            <div className="definition">
              <span className="index-number">{index + 1}.</span>{" "}
              {data.definition}
              <div className="example">{data.example}</div>
            </div>
          </div>
        );
      })}
      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}

export default Meanings;
